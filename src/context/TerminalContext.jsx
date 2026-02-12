import React, { createContext, useContext, useState } from 'react';

const TerminalContext = createContext(null);

export const useTerminal = () => {
    const context = useContext(TerminalContext);
    if (!context) {
        throw new Error('useTerminal must be used within a TerminalProvider');
    }
    return context;
};

export const TerminalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [history, setHistory] = useState([]);
    const [commandHistory, setCommandHistory] = useState([]);

    const toggleTerminal = () => setIsOpen(prev => !prev);
    const closeTerminal = () => setIsOpen(false);
    const openTerminal = () => setIsOpen(true);
    const minimizeTerminal = () => setIsMinimized(true);
    const maximizeTerminal = () => setIsMinimized(false);

    const value = {
        isOpen,
        isMinimized,
        history,
        commandHistory,
        setHistory,
        setCommandHistory,
        toggleTerminal,
        closeTerminal,
        openTerminal,
        minimizeTerminal,
        maximizeTerminal,
    };

    return (
        <TerminalContext.Provider value={value}>
            {children}
        </TerminalContext.Provider>
    );
};
