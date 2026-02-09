import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, Clock, Trophy, FileText, Upload, UserCircle,
  ArrowRight, CheckCircle, AlertCircle, Sparkles,
  Calendar, MapPin, Zap
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 0,
  });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const quickActions = [
    { name: 'Team', icon: Users, path: '/portal/team', color: 'from-neon-cyan to-blue-500' },
    { name: 'Problems', icon: FileText, path: '/portal/problems', color: 'from-neon-purple to-pink-500' },
    { name: 'Submit', icon: Upload, path: '/portal/submission', color: 'from-green-400 to-neon-cyan' },
    { name: 'Leaderboard', icon: Trophy, path: '/portal/leaderboard', color: 'from-yellow-400 to-orange-500' },
    { name: 'Mentors', icon: UserCircle, path: '/portal/mentors', color: 'from-red-400 to-pink-500' },
    { name: 'Profile', icon: Zap, path: '/portal/profile', color: 'from-neon-purple to-neon-cyan' },
  ];

  const announcements = [
    {
      id: 1,
      title: 'Registration Confirmation',
      message: 'Your registration for InnoHacks 2.0 has been confirmed!',
      date: '2 days ago',
      type: 'success',
    },
    {
      id: 2,
      title: 'Team Formation Open',
      message: 'You can now form teams of up to 4 members.',
      date: '1 week ago',
      type: 'info',
    },
    {
      id: 3,
      title: 'Workshop Schedule Released',
      message: 'Check out the pre-hackathon workshop schedule.',
      date: '2 weeks ago',
      type: 'info',
    },
  ];

  const checklist = [
    { label: 'Complete Profile', completed: true },
    { label: 'Join or Create Team', completed: false },
    { label: 'Select Problem Statement', completed: false },
    { label: 'Submit Project', completed: false },
  ];

  const completionPercentage = (checklist.filter(item => item.completed).length / checklist.length) * 100;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Welcome back, <span className="text-gradient">{user?.name}</span>! 👋
              </h1>
              <p className="text-gray-400">
                Here's everything you need to know for InnoHacks 2.0
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-sm">
                Participant
              </span>
            </div>
          </div>
        </motion.div>

        {/* Countdown & Event Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
        >
          {/* Countdown */}
          <div className="lg:col-span-2 card-glass p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-neon-cyan" />
              Hackathon Starts In
            </h2>
            <div className="grid grid-cols-4 gap-4">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/5 rounded-xl p-4 mb-2">
                    <span className="text-3xl sm:text-4xl font-bold text-gradient">
                      {String(item.value).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Event Details */}
          <div className="card-glass p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Event Details</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-neon-purple" />
                <div>
                  <p className="text-white text-sm">March 15-16, 2025</p>
                  <p className="text-gray-500 text-xs">24 Hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-neon-pink" />
                <div>
                  <p className="text-white text-sm">Tech University</p>
                  <p className="text-gray-500 text-xs">Bangalore, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="text-white text-sm">₹3,00,000+</p>
                  <p className="text-gray-500 text-xs">Total Prize Pool</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Link key={action.name} to={action.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="card-glass p-4 text-center hover:border-white/20 transition-colors"
                  >
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white text-sm font-medium">{action.name}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card-glass p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Your Checklist</h2>
              <span className="text-neon-cyan text-sm">{Math.round(completionPercentage)}%</span>
            </div>
            <Progress value={completionPercentage} className="mb-4" />
            <div className="space-y-3">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  {item.completed ? (
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-600 flex-shrink-0" />
                  )}
                  <span className={item.completed ? 'text-gray-400 line-through' : 'text-white'}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Announcements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card-glass p-6"
          >
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-neon-purple" />
              Announcements
            </h2>
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    {announcement.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <h3 className="text-white font-medium text-sm">{announcement.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{announcement.message}</p>
                      <span className="text-gray-500 text-xs mt-2 block">{announcement.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
