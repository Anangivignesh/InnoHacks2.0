import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code2, Users, Trophy, Clock, Zap, Lightbulb, 
  Network, Rocket, ChevronDown, Calendar, MapPin,
  ArrowRight, Star, Sparkles
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';

// Hero Section
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-pink/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <Sparkles className="w-4 h-4 text-neon-cyan" />
          <span className="text-sm text-gray-300">India's Premier Inter-College Hackathon</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="text-gradient">InnoHacks</span>
          <span className="text-white"> 2.0</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto"
        >
          24 Hours of Innovation, Code & Creativity
        </motion.p>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-12"
        >
          <div className="flex items-center gap-2 text-gray-300">
            <Calendar className="w-5 h-5 text-neon-cyan" />
            <span>March 15-16, 2025</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-5 h-5 text-neon-purple" />
            <span>Tech University, Bangalore</span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 mb-12"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">500+</div>
            <div className="text-sm text-gray-400">Hackers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient">₹3L+</div>
            <div className="text-sm text-gray-400">Prize Pool</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">24</div>
            <div className="text-sm text-gray-400">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">50+</div>
            <div className="text-sm text-gray-400">Colleges</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link to="/register">
            <Button size="lg" className="btn-gradient px-8 py-6 text-lg rounded-xl glow-cyan">
              Register Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
              Learn More
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-500">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Why Attend Section
const WhyAttend = () => {
  const reasons = [
    {
      icon: Trophy,
      title: '₹3L+ Prize Pool',
      description: 'Compete for cash prizes, gadgets, and exclusive internship opportunities.',
    },
    {
      icon: Network,
      title: 'Network with Experts',
      description: 'Connect with industry leaders, mentors, and fellow innovators.',
    },
    {
      icon: Lightbulb,
      title: 'Learn & Grow',
      description: 'Attend workshops, tech talks, and hands-on learning sessions.',
    },
    {
      icon: Rocket,
      title: 'Launch Your Idea',
      description: 'Turn your concepts into working prototypes with expert guidance.',
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why <span className="text-gradient">Attend?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join hundreds of passionate innovators for an unforgettable experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-glass p-6 hover-lift group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-neon-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-400 text-sm">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Domains Section
const Domains = () => {
  const domains = [
    {
      title: 'AI/ML',
      description: 'Build intelligent solutions using machine learning and artificial intelligence.',
      icon: Zap,
      color: 'from-neon-cyan to-blue-500',
    },
    {
      title: 'Web3 & Blockchain',
      description: 'Create decentralized applications and explore the future of the internet.',
      icon: Code2,
      color: 'from-neon-purple to-pink-500',
    },
    {
      title: 'FinTech',
      description: 'Innovate in financial technology and revolutionize digital payments.',
      icon: Trophy,
      color: 'from-green-400 to-neon-cyan',
    },
    {
      title: 'HealthTech',
      description: 'Develop solutions for healthcare challenges and patient care.',
      icon: Users,
      color: 'from-red-400 to-pink-500',
    },
    {
      title: 'EdTech',
      description: 'Transform education with innovative learning platforms and tools.',
      icon: Lightbulb,
      color: 'from-yellow-400 to-orange-500',
    },
    {
      title: 'Open Innovation',
      description: 'Work on any problem statement that excites you and your team.',
      icon: Rocket,
      color: 'from-neon-purple to-neon-cyan',
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Hackathon <span className="text-gradient">Tracks</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose from 6 exciting domains and build something amazing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                <div className="relative card-glass p-6 h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${domain.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{domain.title}</h3>
                  <p className="text-gray-400 text-sm">{domain.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Timeline Section
const Timeline = () => {
  const events = [
    { time: '08:00 AM', title: 'Registration & Check-in', day: 'Day 1' },
    { time: '10:00 AM', title: 'Opening Ceremony', day: 'Day 1' },
    { time: '11:00 AM', title: 'Hacking Begins!', day: 'Day 1' },
    { time: '02:00 PM', title: 'Lunch Break', day: 'Day 1' },
    { time: '04:00 PM', title: 'Workshop: AI/ML Basics', day: 'Day 1' },
    { time: '08:00 PM', title: 'Dinner & Networking', day: 'Day 1' },
    { time: '12:00 AM', title: 'Midnight Snack', day: 'Day 1' },
    { time: '08:00 AM', title: 'Breakfast', day: 'Day 2' },
    { time: '11:00 AM', title: 'Hacking Ends', day: 'Day 2' },
    { time: '12:00 PM', title: 'Project Demos', day: 'Day 2' },
    { time: '03:00 PM', title: 'Judging', day: 'Day 2' },
    { time: '05:00 PM', title: 'Closing Ceremony', day: 'Day 2' },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Event <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Your 24-hour journey of innovation
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent" />
          
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`relative flex items-center gap-8 mb-8 ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                <div className="card-glass p-4 inline-block">
                  <span className="text-neon-cyan text-sm font-medium">{event.time}</span>
                  <h3 className="text-white font-semibold">{event.title}</h3>
                  <span className="text-gray-500 text-xs">{event.day}</span>
                </div>
              </div>
              <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-neon-cyan rounded-full -translate-x-1/2 ring-4 ring-dark-900" />
              <div className="flex-1 hidden sm:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Prizes Section
const Prizes = () => {
  const prizes = [
    {
      place: '1st Place',
      prize: '₹1,00,000',
      perks: ['Trophy', 'Certificates', 'Internship Opportunities', 'Cloud Credits'],
      highlight: true,
    },
    {
      place: '2nd Place',
      prize: '₹60,000',
      perks: ['Trophy', 'Certificates', 'Goodies', 'Cloud Credits'],
      highlight: false,
    },
    {
      place: '3rd Place',
      prize: '₹40,000',
      perks: ['Trophy', 'Certificates', 'Goodies', 'Cloud Credits'],
      highlight: false,
    },
  ];

  const trackPrizes = [
    { track: 'Best AI/ML Project', prize: '₹25,000' },
    { track: 'Best Web3 Project', prize: '₹25,000' },
    { track: 'Best FinTech Project', prize: '₹25,000' },
    { track: 'Best HealthTech Project', prize: '₹25,000' },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Prize <span className="text-gradient">Pool</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Over ₹3,00,000 in prizes and rewards
          </p>
        </motion.div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${prize.highlight ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              <div className={`card-glass p-8 h-full ${prize.highlight ? 'border-neon-cyan/50 glow-cyan' : ''}`}>
                {prize.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full text-xs font-medium text-white">
                    Grand Prize
                  </div>
                )}
                <div className="text-center">
                  <Trophy className={`w-12 h-12 mx-auto mb-4 ${prize.highlight ? 'text-neon-cyan' : 'text-gray-400'}`} />
                  <h3 className="text-xl font-semibold text-white mb-2">{prize.place}</h3>
                  <div className={`text-4xl font-bold mb-4 ${prize.highlight ? 'text-gradient' : 'text-white'}`}>
                    {prize.prize}
                  </div>
                  <ul className="space-y-2">
                    {prize.perks.map((perk) => (
                      <li key={perk} className="text-gray-400 text-sm flex items-center justify-center gap-2">
                        <Star className="w-4 h-4 text-neon-purple" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Track Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-glass p-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Track Prizes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trackPrizes.map((track) => (
              <div key={track.track} className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-neon-cyan font-bold text-xl">{track.prize}</div>
                <div className="text-gray-400 text-sm">{track.track}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Sponsors Section
const Sponsors = () => {
  const sponsors = {
    platinum: [
      { name: 'TechCorp', logo: 'TC' },
      { name: 'InnovateLabs', logo: 'IL' },
    ],
    gold: [
      { name: 'CloudSys', logo: 'CS' },
      { name: 'DataFlow', logo: 'DF' },
      { name: 'CodeBase', logo: 'CB' },
    ],
    silver: [
      { name: 'DevTools', logo: 'DT' },
      { name: 'GitPro', logo: 'GP' },
      { name: 'StackHub', logo: 'SH' },
      { name: 'ByteWise', logo: 'BW' },
    ],
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Sponsors</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Powered by industry leaders
          </p>
        </motion.div>

        {/* Platinum */}
        <div className="mb-12">
          <h3 className="text-center text-neon-cyan font-semibold mb-6">Platinum Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {sponsors.platinum.map((sponsor) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-48 h-24 card-glass flex items-center justify-center glow-cyan"
              >
                <span className="text-2xl font-bold text-gradient">{sponsor.logo}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gold */}
        <div className="mb-12">
          <h3 className="text-center text-yellow-400 font-semibold mb-6">Gold Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsors.gold.map((sponsor) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-40 h-20 card-glass flex items-center justify-center"
              >
                <span className="text-xl font-bold text-white">{sponsor.logo}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Silver */}
        <div>
          <h3 className="text-center text-gray-400 font-semibold mb-6">Silver Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors.silver.map((sponsor) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-32 h-16 bg-white/5 rounded-lg flex items-center justify-center"
              >
                <span className="text-lg font-semibold text-gray-400">{sponsor.logo}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQ = () => {
  const faqs = [
    {
      question: 'Who can participate in InnoHacks 2.0?',
      answer: 'InnoHacks 2.0 is open to all college students across India. Whether you\'re a beginner or experienced hacker, everyone is welcome to participate. You can join as an individual or as a team of up to 4 members.',
    },
    {
      question: 'Is there a registration fee?',
      answer: 'No, participation in InnoHacks 2.0 is completely free! We believe in making innovation accessible to everyone. Food, refreshments, and swag will be provided to all participants.',
    },
    {
      question: 'What should I bring to the hackathon?',
      answer: 'Bring your laptop, charger, student ID, and any other hardware you might need for your project. We\'ll provide the internet, power outlets, food, and a comfortable hacking environment.',
    },
    {
      question: 'Can I start working on my project before the event?',
      answer: 'No, all coding must be done during the 24-hour hackathon period. However, you can come prepared with ideas, designs, and plans. We encourage research and conceptualization beforehand.',
    },
    {
      question: 'What are the judging criteria?',
      answer: 'Projects will be judged based on innovation (30%), technical complexity (25%), presentation (20%), impact (15%), and completeness (10%). Our panel of expert judges will evaluate all submissions fairly.',
    },
    {
      question: 'Will there be mentors available?',
      answer: 'Yes! We have industry experts and experienced mentors from various tech domains who will be available throughout the event to guide you, answer questions, and help you overcome challenges.',
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Got questions? We've got answers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-glass border-none px-6"
              >
                <AccordionTrigger className="text-white hover:text-neon-cyan text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[128px]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Ready to <span className="text-gradient">Hack?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join 500+ innovators for 24 hours of coding, creativity, and collaboration. 
            Register now and secure your spot!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="btn-gradient px-8 py-6 text-lg rounded-xl glow-cyan">
                Register Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Home Component
const Home = () => {
  return (
    <main className="relative">
      <Hero />
      <WhyAttend />
      <Domains />
      <Timeline />
      <Prizes />
      <Sponsors />
      <FAQ />
      <CTASection />
    </main>
  );
};

export default Home;
