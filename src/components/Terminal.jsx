import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTerminal } from '../context/TerminalContext';

const Terminal = ({ onClose, onMinimize, onMaximize, isMinimized }) => {
    const navigate = useNavigate();
    const { history, setHistory, commandHistory, setCommandHistory } = useTerminal();
    const [input, setInput] = useState("");
    const [historyIndex, setHistoryIndex] = useState(-1);
    const scrollRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    useEffect(() => {
        // Auto-focus input on mount and keep it focused
        const focusInput = () => inputRef.current?.focus();
        focusInput();
        window.addEventListener('click', focusInput);
        return () => window.removeEventListener('click', focusInput);
    }, []);

    useEffect(() => {
        // Initialize with welcome message if empty
        if (history.length === 0) {
            setHistory([
                { text: "Welcome to InnoHacks 2.0 Terminal v2.0.0", type: "info" },
                { text: "Type 'help' to see available commands or 'register' to join.", type: "info" },
            ]);
        }
    }, []);

    const handleCommand = (cmd) => {
        const cleanCmd = cmd.trim();
        if (!cleanCmd) return;

        setCommandHistory(prev => [...prev, cleanCmd]);
        setHistoryIndex(-1);

        const newHistory = [...history, { text: `user@innohacks:~$ ${cleanCmd}`, type: "command" }];
        const lowerCmd = cleanCmd.toLowerCase();

        switch (lowerCmd) {
            case 'help':
                newHistory.push({
                    text: `Available commands:
  help      - Show this list
  about     - About InnoHacks
  tracks    - List 2025 tracks
  register  - Registration link
  clear     - Clear terminal
  whoami    - Current user info
  exit      - Close terminal`,
                    type: "success"
                });
                break;
            case 'about':
                newHistory.push({ text: "InnoHacks 2.0 is India's premier inter-college hackathon. Join 500+ innovators for 24 hours of coding, creativity, and collaboration.", type: "info" });
                break;
            case 'tracks':
                newHistory.push({
                    text: `2025 Tracks:
  > AI/ML
  > Web3 & Blockchain
  > FinTech
  > HealthTech
  > EdTech
  > Open Innovation`,
                    type: "info"
                });
                break;
            case 'register':
                newHistory.push({ text: "Navigating to registration page...", type: "warning" });
                setTimeout(() => {
                    if (onClose) onClose();
                    navigate('/register');
                }, 1000);
                break;
            case 'clear':
                setHistory([]);
                setInput("");
                return;
            case 'whoami':
                newHistory.push({ text: "User: Guest Hacker\nRole: Participant\nStatus: Ready to Innovate", type: "info" });
                break;
            case 'exit':
                if (onClose) onClose();
                break;
            default:
                newHistory.push({ text: `Command not found: ${cleanCmd}. Type 'help' for available commands.`, type: "error" });
        }

        setHistory(newHistory);
        setInput("");
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex !== -1) {
                const newIndex = historyIndex + 1;
                if (newIndex < commandHistory.length) {
                    setHistoryIndex(newIndex);
                    setInput(commandHistory[newIndex]);
                } else {
                    setHistoryIndex(-1);
                    setInput("");
                }
            }
        }
    };

    if (isMinimized) {
        return (
            <div
                className="w-full bg-[#1a1b26]/95 backdrop-blur-md rounded-lg overflow-hidden shadow-2xl border border-white/10 cursor-pointer hover:border-white/20 transition-colors"
                onClick={onMaximize}
            >
                <div className="h-10 flex items-center justify-center relative px-4">
                    <div className="absolute left-4 flex items-center gap-2">
                        <button
                            onClick={(e) => { e.stopPropagation(); onClose(); }}
                            className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 flex items-center justify-center group transition-colors"
                        >
                            <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black font-bold">×</span>
                        </button>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/50" />
                        <button
                            onClick={(e) => { e.stopPropagation(); onMaximize(); }}
                            className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 flex items-center justify-center group transition-colors"
                        >
                            <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black font-bold">+</span>
                        </button>
                    </div>
                    <div className="text-gray-400 text-xs font-semibold tracking-wide">
                        InnoHacks Terminal
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-[500px] bg-[#1a1b26]/95 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-white/10 flex flex-col font-mono text-sm" onClick={() => inputRef.current?.focus()}>
            {/* MacOS Title Bar */}
            <div className="h-10 bg-[#1a1b26] border-b border-white/5 flex items-center justify-center relative px-4 handle cursor-pointer select-none">
                <div className="absolute left-4 flex items-center gap-2">
                    <div className="flex items-center gap-2 group">
                        {/* Red - Close */}
                        <button
                            onClick={onClose}
                            className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 flex items-center justify-center transition-colors"
                        >
                            <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black font-bold">×</span>
                        </button>
                        {/* Yellow - Minimize */}
                        <button
                            onClick={onMinimize}
                            className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 flex items-center justify-center transition-colors"
                        >
                            <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black font-bold">−</span>
                        </button>
                        {/* Green - Maximize (Restore) if needed, otherwise Expand */}
                        <button
                            className="w-3 h-3 rounded-full bg-[#27c93f]/50 cursor-default"
                        />
                    </div>
                </div>
                <div className="text-gray-400 text-xs font-semibold tracking-wide">
                    user@innohacks: ~
                </div>
            </div>

            {/* Terminal Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1 scrollbar-hide" ref={scrollRef}>
                {history.map((line, i) => (
                    <div key={i} className={`${line.type === 'command' ? 'text-white' :
                            line.type === 'error' ? 'text-red-400' :
                                line.type === 'warning' ? 'text-yellow-400' :
                                    line.type === 'success' ? 'text-green-400' :
                                        'text-[#a9b1d6]'
                        } whitespace-pre-wrap`}>
                        {line.text}
                    </div>
                ))}
                <div className="flex items-center gap-3 text-white">
                    <span className="text-[#f7768e] font-bold">➜</span>
                    <span className="text-[#7aa2f7] font-bold">~</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 font-medium"
                        autoFocus
                        autoComplete="off"
                        spellCheck="false"
                    />
                </div>
            </div>
        </div>
    );
};

export default Terminal;
