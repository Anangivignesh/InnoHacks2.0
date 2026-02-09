import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, Star, Award, Medal, 
  Mail, ArrowRight, Sparkles
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';

const Sponsors = () => {
  const sponsorTiers = {
    platinum: {
      title: 'Platinum Sponsors',
      icon: Trophy,
      color: 'text-neon-cyan',
      bgColor: 'bg-neon-cyan/10',
      borderColor: 'border-neon-cyan/50',
      sponsors: [
        { name: 'TechCorp Global', logo: 'TC', description: 'Leading technology solutions provider' },
        { name: 'InnovateLabs', logo: 'IL', description: 'AI & ML research lab' },
      ],
    },
    gold: {
      title: 'Gold Sponsors',
      icon: Star,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/50',
      sponsors: [
        { name: 'CloudSys Technologies', logo: 'CS', description: 'Cloud infrastructure services' },
        { name: 'DataFlow Analytics', logo: 'DF', description: 'Big data & analytics platform' },
        { name: 'CodeBase Inc', logo: 'CB', description: 'Developer tools & platforms' },
      ],
    },
    silver: {
      title: 'Silver Sponsors',
      icon: Award,
      color: 'text-gray-300',
      bgColor: 'bg-gray-400/10',
      borderColor: 'border-gray-400/50',
      sponsors: [
        { name: 'DevTools Pro', logo: 'DT', description: 'Development productivity tools' },
        { name: 'GitPro', logo: 'GP', description: 'Version control solutions' },
        { name: 'StackHub', logo: 'SH', description: 'Tech community platform' },
        { name: 'ByteWise', logo: 'BW', description: 'Software consulting services' },
      ],
    },
    bronze: {
      title: 'Bronze Sponsors',
      icon: Medal,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/50',
      sponsors: [
        { name: 'TechStart', logo: 'TS', description: 'Startup incubator' },
        { name: 'CodeCamp', logo: 'CC', description: 'Coding bootcamp' },
        { name: 'DevNetwork', logo: 'DN', description: 'Developer network' },
      ],
    },
  };

  const partners = [
    { name: 'Tech University', type: 'Venue Partner' },
    { name: 'Developer Circle', type: 'Community Partner' },
    { name: 'CodeHub', type: 'Technology Partner' },
    { name: 'Innovate India', type: 'Ecosystem Partner' },
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
            Our <span className="text-gradient">Sponsors</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            InnoHacks 2.0 is made possible by the generous support of our sponsors. 
            Join these industry leaders in empowering the next generation of innovators.
          </p>
        </motion.div>

        {/* Sponsor Tiers */}
        {Object.entries(sponsorTiers).map(([tier, data], tierIndex) => {
          const Icon = data.icon;
          return (
            <motion.div
              key={tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: tierIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className={`p-2 rounded-lg ${data.bgColor}`}>
                  <Icon className={`w-6 h-6 ${data.color}`} />
                </div>
                <h2 className={`text-2xl font-bold ${data.color}`}>{data.title}</h2>
              </div>

              <div className={`grid gap-6 ${
                tier === 'platinum' ? 'grid-cols-1 md:grid-cols-2' :
                tier === 'gold' ? 'grid-cols-1 md:grid-cols-3' :
                'grid-cols-2 md:grid-cols-4'
              }`}>
                {data.sponsors.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`card-glass p-6 text-center hover-lift ${data.borderColor} border`}
                  >
                    <div className={`w-20 h-20 mx-auto mb-4 rounded-xl ${data.bgColor} flex items-center justify-center`}>
                      <span className={`text-3xl font-bold ${data.color}`}>{sponsor.logo}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{sponsor.name}</h3>
                    <p className="text-gray-400 text-sm">{sponsor.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center text-white mb-8">Our Partners</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 rounded-lg px-6 py-3"
              >
                <div className="text-white font-medium">{partner.name}</div>
                <div className="text-neon-cyan text-xs">{partner.type}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-glass p-8 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10" />
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Become a Sponsor
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Join us in fostering innovation and supporting the next generation of tech leaders. 
              Reach out to hundreds of talented developers and showcase your brand.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="btn-gradient px-8 py-6 text-lg rounded-xl">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="mailto:sponsors@innohacks.tech">
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                  <Mail className="w-5 h-5 mr-2" />
                  sponsors@innohacks.tech
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;
