import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Heart, Lightbulb, Users, Award, Rocket,
  Code2, Calendar, MapPin, Clock
} from 'lucide-react';

const About = () => {
  const stats = [
    { value: '1500+', label: 'Participants', icon: Users },
    { value: '200+', label: 'Projects', icon: Code2 },
    { value: '50+', label: 'Colleges', icon: Award },
    { value: '₹5L+', label: 'Prizes Given', icon: Rocket },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We believe in pushing boundaries and exploring new possibilities through technology.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Building a supportive ecosystem where hackers learn, grow, and succeed together.',
    },
    {
      icon: Heart,
      title: 'Inclusivity',
      description: 'Creating a welcoming environment for hackers of all backgrounds and skill levels.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Setting high standards for quality projects and meaningful problem-solving.',
    },
  ];

  const team = [
    { name: 'Arjun Sharma', role: 'Event Lead', image: 'AS' },
    { name: 'Priya Patel', role: 'Technical Lead', image: 'PP' },
    { name: 'Rahul Kumar', role: 'Operations Lead', image: 'RK' },
    { name: 'Sneha Gupta', role: 'Marketing Lead', image: 'SG' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[128px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              About <span className="text-gradient">InnoHacks</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              India's premier inter-college hackathon, bringing together the brightest minds 
              to innovate, create, and transform ideas into reality.
            </p>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
          >
            <div className="card-glass p-6 text-center">
              <Calendar className="w-8 h-8 text-neon-cyan mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-1">Date</h3>
              <p className="text-gray-400">March 15-16, 2025</p>
            </div>
            <div className="card-glass p-6 text-center">
              <MapPin className="w-8 h-8 text-neon-purple mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-1">Venue</h3>
              <p className="text-gray-400">Tech University, Bangalore</p>
            </div>
            <div className="card-glass p-6 text-center">
              <Clock className="w-8 h-8 text-neon-pink mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-1">Duration</h3>
              <p className="text-gray-400">24 Hours of Hacking</p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              InnoHacks 1.0 <span className="text-gradient">Highlights</span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="card-glass p-6 text-center"
                  >
                    <Icon className="w-8 h-8 text-neon-cyan mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Our Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Our <span className="text-gradient">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="card-glass p-6 hover-lift"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Organizing Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Organizing <span className="text-gradient">Team</span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-glass p-6 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{member.image}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-neon-cyan text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
