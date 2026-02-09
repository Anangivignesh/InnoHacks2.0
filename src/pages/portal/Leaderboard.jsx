import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, Medal, Award, TrendingUp, Users, Star,
  ChevronUp, ChevronDown, Filter
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

const Leaderboard = () => {
  const [sortBy, setSortBy] = useState('score');
  const [filterTrack, setFilterTrack] = useState('all');

  const leaderboardData = [
    { rank: 1, team: 'Code Warriors', project: 'AI Code Reviewer', track: 'AI/ML', score: 95.5, submissions: 3, trend: 'up' },
    { rank: 2, team: 'Tech Titans', project: 'DeFi Dashboard', track: 'Web3', score: 93.2, submissions: 2, trend: 'same' },
    { rank: 3, team: 'Innovators', project: 'Health Tracker', track: 'HealthTech', score: 91.8, submissions: 4, trend: 'up' },
    { rank: 4, team: 'Byte Builders', project: 'EduLearn Platform', track: 'EdTech', score: 89.5, submissions: 2, trend: 'down' },
    { rank: 5, team: 'Digital Dragons', project: 'PaySmart', track: 'FinTech', score: 88.0, submissions: 3, trend: 'up' },
    { rank: 6, team: 'Cyber Squad', project: 'Identity Guard', track: 'Web3', score: 86.5, submissions: 2, trend: 'same' },
    { rank: 7, team: 'Data Dynamos', project: 'ML Predictor', track: 'AI/ML', score: 85.2, submissions: 3, trend: 'down' },
    { rank: 8, team: 'Future Founders', project: 'MediConnect', track: 'HealthTech', score: 84.0, submissions: 2, trend: 'up' },
    { rank: 9, team: 'Pixel Pioneers', project: 'Study Buddy', track: 'EdTech', score: 82.5, submissions: 3, trend: 'same' },
    { rank: 10, team: 'Quantum Coders', project: 'Crypto Wallet', track: 'FinTech', score: 81.0, submissions: 2, trend: 'down' },
  ];

  const tracks = ['all', 'AI/ML', 'Web3', 'FinTech', 'HealthTech', 'EdTech', 'Open Innovation'];

  const filteredData = filterTrack === 'all' 
    ? leaderboardData 
    : leaderboardData.filter(item => item.track === filterTrack);

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === 'score') return b.score - a.score;
    if (sortBy === 'submissions') return b.submissions - a.submissions;
    return a.rank - b.rank;
  });

  const getRankIcon = (rank) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-400" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-300" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-orange-400" />;
    return <span className="w-6 h-6 flex items-center justify-center text-gray-400 font-bold">{rank}</span>;
  };

  const getTrendIcon = (trend) => {
    if (trend === 'up') return <ChevronUp className="w-4 h-4 text-green-400" />;
    if (trend === 'down') return <ChevronDown className="w-4 h-4 text-red-400" />;
    return <span className="w-4 h-4 text-gray-500">-</span>;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Live <span className="text-gradient">Leaderboard</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Track the top performing teams in real-time
          </p>
        </motion.div>

        {/* Top 3 Podium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row items-end justify-center gap-4">
            {/* 2nd Place */}
            <div className="order-2 sm:order-1 w-full sm:w-64">
              <div className="card-glass p-6 text-center border-gray-400/30">
                <Medal className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-300 mb-2">2</div>
                <h3 className="text-white font-semibold mb-1">{leaderboardData[1].team}</h3>
                <p className="text-gray-400 text-sm mb-2">{leaderboardData[1].project}</p>
                <div className="text-2xl font-bold text-gradient">{leaderboardData[1].score}</div>
              </div>
            </div>

            {/* 1st Place */}
            <div className="order-1 sm:order-2 w-full sm:w-72">
              <div className="card-glass p-8 text-center border-yellow-400/50 glow-cyan">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-dark-900 text-sm font-bold">
                    Winner
                  </span>
                </div>
                <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <div className="text-5xl font-bold text-yellow-400 mb-2">1</div>
                <h3 className="text-white font-bold text-xl mb-1">{leaderboardData[0].team}</h3>
                <p className="text-gray-400 mb-2">{leaderboardData[0].project}</p>
                <div className="text-3xl font-bold text-gradient">{leaderboardData[0].score}</div>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="order-3 w-full sm:w-64">
              <div className="card-glass p-6 text-center border-orange-400/30">
                <Medal className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-orange-400 mb-2">3</div>
                <h3 className="text-white font-semibold mb-1">{leaderboardData[2].team}</h3>
                <p className="text-gray-400 text-sm mb-2">{leaderboardData[2].project}</p>
                <div className="text-2xl font-bold text-gradient">{leaderboardData[2].score}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-6"
        >
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400 text-sm">Filter by track:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tracks.map((track) => (
              <button
                key={track}
                onClick={() => setFilterTrack(track)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  filterTrack === track
                    ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {track === 'all' ? 'All Tracks' : track}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Leaderboard Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-glass overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Rank</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Team</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Project</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Track</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium cursor-pointer" onClick={() => setSortBy('score')}>
                    <div className="flex items-center gap-1">
                      Score
                      <TrendingUp className="w-4 h-4" />
                    </div>
                  </th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Trend</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((item, index) => (
                  <motion.tr
                    key={item.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        {getRankIcon(item.rank)}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-white font-medium">{item.team}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-300">{item.project}</span>
                    </td>
                    <td className="py-4 px-6">
                      <Badge variant="outline" className="border-white/20 text-gray-400">
                        {item.track}
                      </Badge>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-neon-cyan font-bold">{item.score}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      {getTrendIcon(item.trend)}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
        >
          {[
            { label: 'Total Teams', value: '156' },
            { label: 'Projects Submitted', value: '423' },
            { label: 'Tracks', value: '6' },
            { label: 'Prize Pool', value: '₹3L+' },
          ].map((stat) => (
            <div key={stat.label} className="card-glass p-4 text-center">
              <div className="text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Leaderboard;
