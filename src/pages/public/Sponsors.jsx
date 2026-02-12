import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Trophy, Star, Award, Medal,
  Mail, ArrowRight, Sparkles, CheckCircle2
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { toast } from 'sonner';

const Sponsors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success('Interest registered! We will contact you soon.');
    setIsSubmitting(false);
    setIsModalOpen(false);
  };

  const sponsorTiers = {
    platinum: {
      title: 'Platinum Sponsors',
      icon: Trophy,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/50',
      price: '₹1,00,000',
      benefits: ['Logo on T-shirt', 'Keynote Speaking Slot', 'Booth Space', 'Resume Database Access'],
      sponsors: [
        { name: 'TechCorp Global', logo: 'TC', description: 'Leading technology solutions provider' },
        { name: 'InnovateLabs', logo: 'IL', description: 'AI & ML research lab' },
      ],
    },
    gold: {
      title: 'Gold Sponsors',
      icon: Star,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/50',
      price: '₹50,000',
      benefits: ['Logo on Banner', 'Workshop Slot', 'Resume Database Access'],
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
      price: '₹25,000',
      benefits: ['Logo on Website', 'Social Media Shoutout'],
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
      color: 'text-secondary-orange',
      bgColor: 'bg-secondary-orange/10',
      borderColor: 'border-secondary-orange/50',
      price: '₹10,000',
      benefits: ['Logo on Website'],
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
    <div className="min-h-screen pt-24 pb-16 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            Our <span className="text-primary">Sponsors</span>
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
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${data.bgColor}`}>
                    <Icon className={`w-6 h-6 ${data.color}`} />
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${data.color}`}>{data.title}</h2>
                    <p className="text-gray-400 text-sm">Contribution: {data.price}</p>
                  </div>
                </div>
                {/* Benefits List on large screens */}
                <div className="hidden md:flex gap-2">
                  {data.benefits.map((benefit, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-300">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`grid gap-6 ${tier === 'platinum' ? 'grid-cols-1 md:grid-cols-2' :
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
                    className={`bg-surface-card p-6 text-center hover:border-white/20 transition-all ${data.borderColor} border rounded-xl`}
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
                className="bg-surface-card border border-white/5 rounded-lg px-6 py-3"
              >
                <div className="text-white font-medium">{partner.name}</div>
                <div className="text-primary text-xs">{partner.type}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-card border border-white/5 p-8 text-center relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
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
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-black font-bold px-8 py-6 text-lg rounded-xl hover:opacity-90 transition-opacity">
                    Sponsor This Event
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-surface-card border-white/10 text-white sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Sponsorship Interest</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Fill out the form below and our team will get back to you within 24 hours.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="s_name" className="text-gray-300">Name</Label>
                        <Input id="s_name" required placeholder="John Doe" className="bg-white/5 border-white/10 text-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="s_company" className="text-gray-300">Company</Label>
                        <Input id="s_company" required placeholder="Tech Corp" className="bg-white/5 border-white/10 text-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="s_email" className="text-gray-300">Email</Label>
                      <Input id="s_email" type="email" required placeholder="john@company.com" className="bg-white/5 border-white/10 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="s_tier" className="text-gray-300">Interested Tier</Label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/10 text-white">
                          <SelectValue placeholder="Select Tier" />
                        </SelectTrigger>
                        <SelectContent className="bg-surface-card border-white/10 text-white">
                          <SelectItem value="platinum">Platinum (₹1,00,000)</SelectItem>
                          <SelectItem value="gold">Gold (₹50,000)</SelectItem>
                          <SelectItem value="silver">Silver (₹25,000)</SelectItem>
                          <SelectItem value="bronze">Bronze (₹10,000)</SelectItem>
                          <SelectItem value="custom">Custom Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="s_message" className="text-gray-300">Message (Optional)</Label>
                      <Textarea id="s_message" placeholder="Any specific requirements?" className="bg-white/5 border-white/10 text-white" />
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full btn-gradient">
                      {isSubmitting ? 'Sending...' : 'Submit Interest'}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              <a href="mailto:sponsors@innohacks.tech">
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 px-8 py-6 text-lg rounded-xl text-white">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
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
