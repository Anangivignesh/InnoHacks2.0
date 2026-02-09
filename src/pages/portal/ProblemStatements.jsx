import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Globe, Wallet, Heart, GraduationCap, Rocket,
  CheckCircle, Clock, Users, ArrowRight, Filter
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { toast } from 'sonner';

const ProblemStatements = () => {
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [selectedProblem, setSelectedProblem] = useState(null);

  const tracks = [
    { id: 'all', name: 'All Tracks', icon: Filter },
    { id: 'ai-ml', name: 'AI/ML', icon: Brain },
    { id: 'web3', name: 'Web3', icon: Globe },
    { id: 'fintech', name: 'FinTech', icon: Wallet },
    { id: 'healthtech', name: 'HealthTech', icon: Heart },
    { id: 'edtech', name: 'EdTech', icon: GraduationCap },
    { id: 'open', name: 'Open Innovation', icon: Rocket },
  ];

  const problems = [
    {
      id: 1,
      track: 'ai-ml',
      title: 'AI-Powered Code Review Assistant',
      description: 'Build an intelligent tool that automatically reviews code, identifies bugs, suggests improvements, and ensures coding standards compliance.',
      difficulty: 'Medium',
      submissions: 45,
      tags: ['NLP', 'Code Analysis', 'Machine Learning'],
    },
    {
      id: 2,
      track: 'ai-ml',
      title: 'Real-time Sign Language Translator',
      description: 'Create a computer vision application that translates sign language gestures into text and speech in real-time.',
      difficulty: 'Hard',
      submissions: 32,
      tags: ['Computer Vision', 'Accessibility', 'Real-time'],
    },
    {
      id: 3,
      track: 'web3',
      title: 'Decentralized Identity Verification',
      description: 'Develop a blockchain-based identity verification system that gives users control over their personal data.',
      difficulty: 'Hard',
      submissions: 28,
      tags: ['Blockchain', 'Privacy', 'Identity'],
    },
    {
      id: 4,
      track: 'fintech',
      title: 'Micro-Investment Platform for Students',
      description: 'Build a platform that allows students to start investing with small amounts and learn financial literacy.',
      difficulty: 'Medium',
      submissions: 56,
      tags: ['Finance', 'Education', 'Mobile App'],
    },
    {
      id: 5,
      track: 'healthtech',
      title: 'Mental Health Support Chatbot',
      description: 'Create an AI-powered chatbot that provides mental health support, resources, and crisis intervention.',
      difficulty: 'Medium',
      submissions: 41,
      tags: ['AI', 'Healthcare', 'Chatbot'],
    },
    {
      id: 6,
      track: 'edtech',
      title: 'Personalized Learning Path Generator',
      description: 'Develop a system that creates customized learning paths based on student performance, interests, and goals.',
      difficulty: 'Easy',
      submissions: 38,
      tags: ['Education', 'AI', 'Personalization'],
    },
  ];

  const filteredProblems = selectedTrack === 'all' 
    ? problems 
    : problems.filter(p => p.track === selectedTrack);

  const handleSelectProblem = (problem) => {
    setSelectedProblem(problem);
    toast.success(`Selected: ${problem.title}`);
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Easy: 'bg-green-500/20 text-green-400',
      Medium: 'bg-yellow-500/20 text-yellow-400',
      Hard: 'bg-red-500/20 text-red-400',
    };
    return colors[difficulty] || colors.Easy;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Problem <span className="text-gradient">Statements</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Choose a problem statement that aligns with your interests and skills. 
            You can work on any track regardless of your team's background.
          </p>
        </motion.div>

        {/* Selected Problem Banner */}
        {selectedProblem && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 card-glass p-6 border-neon-cyan/50"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-neon-cyan text-sm">Selected Problem</span>
                <h2 className="text-xl font-bold text-white">{selectedProblem.title}</h2>
              </div>
              <Button variant="outline" size="sm" onClick={() => setSelectedProblem(null)}>
                Change
              </Button>
            </div>
          </motion.div>
        )}

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {tracks.map((track) => {
              const Icon = track.icon;
              return (
                <button
                  key={track.id}
                  onClick={() => setSelectedTrack(track.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    selectedTrack === track.id
                      ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {track.name}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProblems.map((problem, index) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className={`card-glass p-6 hover:border-white/20 transition-colors ${
                selectedProblem?.id === problem.id ? 'border-neon-cyan/50' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {problem.submissions}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">{problem.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{problem.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {problem.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded-full bg-white/5 text-gray-400 text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <Button
                onClick={() => handleSelectProblem(problem)}
                className={selectedProblem?.id === problem.id ? 'w-full bg-green-500' : 'w-full btn-gradient'}
                disabled={selectedProblem?.id === problem.id}
              >
                {selectedProblem?.id === problem.id ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Selected
                  </>
                ) : (
                  <>
                    Select Problem
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemStatements;
