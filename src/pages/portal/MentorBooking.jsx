import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserCircle, Calendar, Clock, Star, MessageCircle,
  CheckCircle, Search, Filter, Linkedin, Twitter,
  Mail, ArrowRight
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Label } from '../../components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';
import { toast } from 'sonner';

const MentorBooking = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('all');
  const [selectedMentor, setSelectedMentor] = useState(null);

  const expertiseAreas = ['all', 'AI/ML', 'Web3', 'Frontend', 'Backend', 'Mobile', 'DevOps', 'Product'];

  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      role: 'AI Research Lead',
      company: 'Google Research',
      expertise: ['AI/ML', 'NLP'],
      rating: 4.9,
      sessions: 156,
      bio: 'PhD in Machine Learning with 10+ years of experience in AI research and product development.',
      avatar: 'SC',
      available: true,
    },
    {
      id: 2,
      name: 'Alex Rodriguez',
      role: 'Blockchain Architect',
      company: 'Ethereum Foundation',
      expertise: ['Web3', 'Smart Contracts'],
      rating: 4.8,
      sessions: 89,
      bio: 'Blockchain expert with deep knowledge of DeFi protocols and smart contract development.',
      avatar: 'AR',
      available: true,
    },
    {
      id: 3,
      name: 'Priya Sharma',
      role: 'Senior Frontend Engineer',
      company: 'Meta',
      expertise: ['Frontend', 'React', 'UI/UX'],
      rating: 4.9,
      sessions: 234,
      bio: 'Frontend specialist passionate about creating beautiful and accessible user interfaces.',
      avatar: 'PS',
      available: false,
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'DevOps Lead',
      company: 'AWS',
      expertise: ['DevOps', 'Cloud', 'Backend'],
      rating: 4.7,
      sessions: 178,
      bio: 'Cloud infrastructure expert helping teams scale their applications efficiently.',
      avatar: 'JW',
      available: true,
    },
    {
      id: 5,
      name: 'Emily Zhang',
      role: 'Product Manager',
      company: 'Microsoft',
      expertise: ['Product', 'Strategy'],
      rating: 4.8,
      sessions: 145,
      bio: 'Product leader with experience launching successful products from 0 to 1.',
      avatar: 'EZ',
      available: true,
    },
    {
      id: 6,
      name: 'Michael Brown',
      role: 'Mobile Developer',
      company: 'Uber',
      expertise: ['Mobile', 'iOS', 'Android'],
      rating: 4.6,
      sessions: 112,
      bio: 'Mobile development expert specializing in cross-platform applications.',
      avatar: 'MB',
      available: true,
    },
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesExpertise = selectedExpertise === 'all' || mentor.expertise.includes(selectedExpertise);
    return matchesSearch && matchesExpertise;
  });

  const handleBookSession = (mentor) => {
    toast.success(`Session booked with ${mentor.name}! Check your email for details.`);
    setSelectedMentor(null);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Book a <span className="text-gradient">Mentor</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get guidance from industry experts. Our mentors are here to help you succeed!
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search mentors by name or expertise..."
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {expertiseAreas.map((area) => (
                <button
                  key={area}
                  onClick={() => setSelectedExpertise(area)}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    selectedExpertise === area
                      ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {area === 'all' ? 'All Areas' : area}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="card-glass p-6 hover:border-white/20 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{mentor.avatar}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-white font-medium">{mentor.rating}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-1">{mentor.name}</h3>
              <p className="text-neon-cyan text-sm mb-1">{mentor.role}</p>
              <p className="text-gray-400 text-sm mb-4">{mentor.company}</p>

              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{mentor.bio}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.expertise.map((exp) => (
                  <Badge key={exp} variant="outline" className="border-white/20 text-gray-400">
                    {exp}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm">
                  <MessageCircle className="w-4 h-4 inline mr-1" />
                  {mentor.sessions} sessions
                </span>
                <span className={`text-sm ${mentor.available ? 'text-green-400' : 'text-gray-500'}`}>
                  {mentor.available ? 'Available' : 'Busy'}
                </span>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    className="w-full btn-gradient" 
                    disabled={!mentor.available}
                    onClick={() => setSelectedMentor(mentor)}
                  >
                    {mentor.available ? 'Book Session' : 'Unavailable'}
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-dark-800 border-white/10 max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="text-white">Book Session with {mentor.name}</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Choose a time slot for your mentoring session
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-4 mt-4">
                    <div>
                      <Label className="text-gray-300">Select Date</Label>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {['Today', 'Tomorrow', 'Mar 16'].map((date) => (
                          <button
                            key={date}
                            className="p-3 rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 transition-colors text-sm"
                          >
                            {date}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-gray-300">Select Time</Label>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {['10:00 AM', '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM'].map((time) => (
                          <button
                            key={time}
                            className="p-3 rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 transition-colors text-sm"
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-gray-300">Session Topic</Label>
                      <Input
                        placeholder="What would you like to discuss?"
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 mt-2"
                      />
                    </div>

                    <Button 
                      onClick={() => handleBookSession(mentor)}
                      className="w-full btn-gradient"
                    >
                      Confirm Booking
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 card-glass p-6"
        >
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-neon-cyan flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-white font-semibold mb-2">How Mentoring Works</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Each team can book up to 3 mentoring sessions during the hackathon</li>
                <li>• Sessions are 30 minutes long and conducted via video call</li>
                <li>• Prepare your questions in advance to make the most of your time</li>
                <li>• Mentors can help with technical challenges, architecture decisions, and pitch preparation</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MentorBooking;
