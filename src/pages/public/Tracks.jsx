import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Globe, Wallet, Heart, GraduationCap, Rocket,
  Code2, Database, Shield, Cpu, Smartphone, Cloud
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const Tracks = () => {
  const tracks = [
    {
      id: 'ai-ml',
      title: 'AI/ML',
      subtitle: 'Artificial Intelligence & Machine Learning',
      description: 'Build intelligent solutions that can learn, adapt, and make decisions. From predictive models to computer vision, explore the frontier of AI technology.',
      icon: Brain,
      color: 'from-neon-cyan to-blue-500',
      bgGradient: 'from-neon-cyan/20 to-blue-500/20',
      challenges: [
        'Build a sentiment analysis tool for social media',
        'Create a computer vision app for accessibility',
        'Develop a recommendation engine',
        'Design an AI-powered chatbot',
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face'],
      prize: '₹25,000',
    },
    {
      id: 'web3',
      title: 'Web3 & Blockchain',
      subtitle: 'Decentralized Future',
      description: 'Create decentralized applications that empower users with ownership and transparency. Explore smart contracts, DeFi, and the future of the internet.',
      icon: Globe,
      color: 'from-neon-purple to-pink-500',
      bgGradient: 'from-neon-purple/20 to-pink-500/20',
      challenges: [
        'Build a DeFi lending platform',
        'Create an NFT marketplace',
        'Develop a DAO governance tool',
        'Design a blockchain-based identity system',
      ],
      technologies: ['Solidity', 'Ethereum', 'Polygon', 'IPFS', 'Web3.js'],
      prize: '₹25,000',
    },
    {
      id: 'fintech',
      title: 'FinTech',
      subtitle: 'Financial Technology',
      description: 'Revolutionize how people manage, invest, and transact money. Build solutions that make financial services more accessible and efficient.',
      icon: Wallet,
      color: 'from-green-400 to-neon-cyan',
      bgGradient: 'from-green-400/20 to-neon-cyan/20',
      challenges: [
        'Create a personal finance tracker',
        'Build a micro-investment platform',
        'Develop a fraud detection system',
        'Design a peer-to-peer payment app',
      ],
      technologies: ['Node.js', 'Plaid API', 'Stripe', 'React', 'MongoDB'],
      prize: '₹25,000',
    },
    {
      id: 'healthtech',
      title: 'HealthTech',
      subtitle: 'Healthcare Innovation',
      description: 'Develop technology solutions that improve healthcare delivery, patient care, and medical research. Make a real impact on people\'s lives.',
      icon: Heart,
      color: 'from-red-400 to-pink-500',
      bgGradient: 'from-red-400/20 to-pink-500/20',
      challenges: [
        'Build a telemedicine platform',
        'Create a mental health support app',
        'Develop a medication reminder system',
        'Design a fitness tracking solution',
      ],
      technologies: ['React Native', 'Firebase', 'HealthKit', 'WebRTC', 'TensorFlow'],
      prize: '₹25,000',
    },
    {
      id: 'edtech',
      title: 'EdTech',
      subtitle: 'Education Technology',
      description: 'Transform learning experiences with innovative educational tools. Make education more engaging, accessible, and personalized for everyone.',
      icon: GraduationCap,
      color: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-400/20 to-orange-500/20',
      challenges: [
        'Create an interactive learning platform',
        'Build a skill assessment tool',
        'Develop a collaborative study app',
        'Design an AI tutor system',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'OpenAI API'],
      prize: '₹25,000',
    },
    {
      id: 'open',
      title: 'Open Innovation',
      subtitle: 'Build Anything',
      description: 'Have an idea that doesn\'t fit into other categories? This track is for you! Work on any problem statement that excites you and your team.',
      icon: Rocket,
      color: 'from-neon-purple to-neon-cyan',
      bgGradient: 'from-neon-purple/20 to-neon-cyan/20',
      challenges: [
        'Solve a local community problem',
        'Build a tool for social good',
        'Create something just for fun',
        'Develop a utility app',
      ],
      technologies: ['Any stack', 'Any framework', 'Any language', 'Be creative!', 'Have fun'],
      prize: '₹25,000',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Hackathon <span className="text-gradient">Tracks</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose your domain and build something amazing. Each track offers unique challenges, 
            mentorship, and exclusive prizes.
          </p>
        </motion.div>

        {/* Tracks Grid */}
        <div className="space-y-12">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-glass overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left: Track Info */}
                    <div className="lg:w-1/3">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-6`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-2">{track.title}</h2>
                      <p className={`text-transparent bg-clip-text bg-gradient-to-r ${track.color} font-medium mb-4`}>
                        {track.subtitle}
                      </p>
                      <p className="text-gray-400 mb-6">{track.description}</p>
                      <div className="flex items-center gap-2 mb-6">
                        <span className="text-gray-400">Track Prize:</span>
                        <span className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${track.color}`}>
                          {track.prize}
                        </span>
                      </div>
                    </div>

                    {/* Right: Challenges & Tech */}
                    <div className="lg:w-2/3 space-y-6">
                      {/* Challenge Ideas */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Rocket className="w-5 h-5 text-neon-cyan" />
                          Challenge Ideas
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {track.challenges.map((challenge, i) => (
                            <div key={i} className="bg-white/5 rounded-lg p-3 text-gray-300 text-sm">
                              {challenge}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Code2 className="w-5 h-5 text-neon-purple" />
                          Recommended Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {track.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${track.bgGradient} text-white`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Choose Your Track?
          </h2>
          <p className="text-gray-400 mb-8">
            Register now and select your preferred track during the event.
          </p>
          <Link to="/register">
            <Button size="lg" className="btn-gradient px-8 py-6 text-lg rounded-xl glow-cyan">
              Register for InnoHacks 2.0
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Tracks;
