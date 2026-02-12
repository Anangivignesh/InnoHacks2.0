import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Users, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('day1');

  const scheduleData = {
    day1: [
      { time: '08:00 AM', title: 'Registration & Check-in', location: 'Main Entrance', type: 'general', description: 'Get your badges, swag bags, and find your team table.' },
      { time: '09:30 AM', title: 'Breakfast', location: 'Dining Hall', type: 'food', description: 'Start your day with a hearty breakfast.' },
      { time: '10:00 AM', title: 'Opening Ceremony', location: 'Main Auditorium', type: 'keynote', description: 'Welcome address, rules briefing, and keynote speech.' },
      { time: '11:00 AM', title: 'Hacking Begins!', location: 'Hacking Arena', type: 'hack', description: 'The 24-hour countdown starts now.' },
      { time: '12:30 PM', title: 'Team Formation (Optional)', location: 'Networking Zone', type: 'networking', description: 'Still looking for teammates? Find your perfect match.' },
      { time: '02:00 PM', title: 'Lunch Break', location: 'Dining Hall', type: 'food', description: 'Fuel up for the afternoon hacking session.' },
      { time: '03:00 PM', title: 'Workshop: AI/ML with Python', location: 'Workshop Room A', type: 'workshop', description: 'Learn the basics of machine learning and build your first model.' },
      { time: '04:30 PM', title: 'Workshop: Web3 Development', location: 'Workshop Room B', type: 'workshop', description: 'Introduction to blockchain and smart contract development.' },
      { time: '06:00 PM', title: 'Mentor Check-in', location: 'Hacking Arena', type: 'mentorship', description: 'Get feedback on your project from industry experts.' },
      { time: '08:00 PM', title: 'Dinner & Networking', location: 'Dining Hall', type: 'food', description: 'Enjoy dinner and connect with fellow hackers.' },
      { time: '10:00 PM', title: 'Fun Activity: Mini Games', location: 'Recreation Zone', type: 'fun', description: 'Take a break with some fun games and activities.' },
      { time: '12:00 AM', title: 'Midnight Snack', location: 'Snack Bar', type: 'food', description: 'Pizza and energy drinks to keep you going!' },
    ],
    day2: [
      { time: '02:00 AM', title: 'Late Night Hacking', location: 'Hacking Arena', type: 'hack', description: 'The night owls keep coding.' },
      { time: '04:00 AM', title: 'Coffee Break', location: 'Snack Bar', type: 'food', description: 'Fresh coffee to keep you awake.' },
      { time: '08:00 AM', title: 'Breakfast', location: 'Dining Hall', type: 'food', description: 'Final fuel for the last stretch.' },
      { time: '09:00 AM', title: 'Project Submission Opens', location: 'Online Portal', type: 'hack', description: 'Start preparing your submission.' },
      { time: '10:30 AM', title: 'Final Mentoring Session', location: 'Hacking Arena', type: 'mentorship', description: 'Last chance to get expert advice.' },
      { time: '11:00 AM', title: 'Hacking Ends!', location: 'Hacking Arena', type: 'hack', description: 'Hands off keyboards! Submission deadline.' },
      { time: '11:30 AM', title: 'Project Setup for Demos', location: 'Demo Arena', type: 'general', description: 'Set up your demo station.' },
      { time: '12:00 PM', title: 'Project Demos Begin', location: 'Demo Arena', type: 'demo', description: 'Showcase your project to judges and peers.' },
      { time: '02:00 PM', title: 'Lunch Break', location: 'Dining Hall', type: 'food', description: 'Relax while judges deliberate.' },
      { time: '03:00 PM', title: 'Final Judging', location: 'Main Auditorium', type: 'demo', description: 'Top teams present to the final jury.' },
      { time: '04:30 PM', title: 'Closing Ceremony', location: 'Main Auditorium', type: 'keynote', description: 'Winners announcement and prize distribution.' },
      { time: '05:30 PM', title: 'Farewell', location: 'Main Entrance', type: 'general', description: 'See you at InnoHacks 3.0!' },
    ],
  };

  const getTypeColor = (type) => {
    const colors = {
      general: 'bg-gray-500/20 text-gray-300',
      food: 'bg-green-500/20 text-green-400',
      keynote: 'bg-primary/20 text-primary',
      hack: 'bg-primary/20 text-primary',
      workshop: 'bg-secondary/20 text-secondary',
      networking: 'bg-pink-500/20 text-pink-400',
      mentorship: 'bg-secondary-orange/20 text-secondary-orange',
      fun: 'bg-yellow-500/20 text-yellow-400',
      demo: 'bg-red-500/20 text-red-400',
    };
    return colors[type] || colors.general;
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            Event <span className="text-primary">Schedule</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your complete guide to the 24-hour hackathon experience
          </p>
        </motion.div>

        <Tabs defaultValue="day1" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-surface-card border border-white/5">
            <TabsTrigger value="day1" className="data-[state=active]:bg-primary data-[state=active]:text-white text-gray-400">
              Day 1 - March 15
            </TabsTrigger>
            <TabsTrigger value="day2" className="data-[state=active]:bg-primary data-[state=active]:text-white text-gray-400">
              Day 2 - March 16
            </TabsTrigger>
          </TabsList>

          {Object.entries(scheduleData).map(([day, events]) => (
            <TabsContent key={day} value={day}>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-surface-card border border-white/5 p-6 hover:border-white/20 transition-colors rounded-xl"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex items-center gap-3 sm:w-32 flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="text-white font-medium">{event.time}</span>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                          <span className={`px-2 py-0.5 rounded-full text-xs ${getTypeColor(event.type)}`}>
                            {event.type}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-2">{event.description}</p>
                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-surface-card border border-white/5 p-6 rounded-xl"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Event Types</h3>
          <div className="flex flex-wrap gap-2">
            {['general', 'food', 'keynote', 'hack', 'workshop', 'networking', 'mentorship', 'fun', 'demo'].map((type) => (
              <span key={type} className={`px-3 py-1 rounded-full text-xs capitalize ${getTypeColor(type)}`}>
                {type}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Schedule;
