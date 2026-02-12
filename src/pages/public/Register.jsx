import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  User, Mail, Phone, Building2, GraduationCap,
  Github, Linkedin, Code2, CheckCircle, ArrowRight,
  Upload, Sparkles, Wand2
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Checkbox } from '../../components/ui/checkbox';
import { toast } from 'sonner';

const Register = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    branch: '',
    github: '',
    linkedin: '',
    tshirtSize: '',
    agreeToCode: false,
    agreeToShare: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDemoFill = () => {
    setFormData({
      firstName: 'Rahul',
      lastName: 'Sharma',
      email: 'rahul.sharma@example.com',
      phone: '9876543210',
      college: 'Indian Institute of Technology, Bombay',
      year: '3',
      branch: 'Computer Science',
      github: 'github.com/rahulsharma',
      linkedin: 'linkedin.com/in/rahulsharma',
      tshirtSize: 'L',
      agreeToCode: true,
      agreeToShare: true,
    });
    toast.success('Demo data filled!');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToCode) {
      toast.error('Please agree to the Code of Conduct');
      return;
    }

    setIsSubmitting(true);

    try {
      // Register user seamlessly
      const fullName = `${formData.firstName} ${formData.lastName}`;
      const result = await signup(fullName, formData.email, 'password123', formData.college); // Using dummy password as it's a hackathon form

      if (result.success) {
        // toast.success is handled in AuthContext
        navigate('/portal/dashboard');
      }
    } catch (error) {
      console.error(error);
      toast.error('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            Register for <span className="text-primary">InnoHacks 2.0</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join 500+ innovators for 24 hours of coding, creativity, and collaboration
          </p>
        </motion.div>

        {/* Demo Fill Button */}
        <div className="flex justify-center mb-8">
          <Button
            onClick={handleDemoFill}
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 flex items-center gap-2"
          >
            <Wand2 className="w-4 h-4" />
            Demo Fill
          </Button>
        </div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-surface-card border border-white/5 p-8 rounded-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Personal Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-300">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-300">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-300">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-secondary" />
                Academic Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="college" className="text-gray-300">College/University *</Label>
                  <Input
                    id="college"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    placeholder="Tech University"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="branch" className="text-gray-300">Branch/Major *</Label>
                  <Input
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    placeholder="Computer Science"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year" className="text-gray-300">Year of Study *</Label>
                  <Select
                    value={formData.year}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, year: value }))}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-primary">
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent className="bg-surface-card border-white/10 text-white">
                      <SelectItem value="1">1st Year</SelectItem>
                      <SelectItem value="2">2nd Year</SelectItem>
                      <SelectItem value="3">3rd Year</SelectItem>
                      <SelectItem value="4">4th Year</SelectItem>
                      <SelectItem value="5">5th Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tshirtSize" className="text-gray-300">T-Shirt Size</Label>
                  <Select
                    value={formData.tshirtSize}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, tshirtSize: value }))}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-primary">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent className="bg-surface-card border-white/10 text-white">
                      <SelectItem value="XS">XS</SelectItem>
                      <SelectItem value="S">S</SelectItem>
                      <SelectItem value="M">M</SelectItem>
                      <SelectItem value="L">L</SelectItem>
                      <SelectItem value="XL">XL</SelectItem>
                      <SelectItem value="XXL">XXL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-secondary-orange" />
                Profile Links (Optional)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="github" className="text-gray-300 flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub Profile
                  </Label>
                  <Input
                    id="github"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="github.com/username"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin" className="text-gray-300 flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn Profile
                  </Label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="linkedin.com/in/username"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* Agreements */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="agreeToCode"
                  checked={formData.agreeToCode}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToCode: checked }))}
                  className="mt-1 border-white/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <Label htmlFor="agreeToCode" className="text-gray-300 text-sm leading-relaxed cursor-pointer">
                  I agree to abide by the <a href="#" className="text-primary hover:underline">Code of Conduct</a> and
                  participate in the spirit of fair competition and collaboration. *
                </Label>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox
                  id="agreeToShare"
                  checked={formData.agreeToShare}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToShare: checked }))}
                  className="mt-1 border-white/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <Label htmlFor="agreeToShare" className="text-gray-300 text-sm leading-relaxed cursor-pointer">
                  I agree to share my project code under an open-source license and allow InnoHacks
                  to use photos/videos taken during the event for promotional purposes.
                </Label>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary text-black font-bold py-6 text-lg rounded-xl hover:opacity-90 transition-opacity"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Registering...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Complete Registration
                    <ArrowRight className="w-5 h-5" />
                  </span>
                )}
              </Button>
              <p className="text-center text-gray-500 text-sm mt-4">
                Already registered? <a href="/login" className="text-primary hover:underline">Login here</a>
              </p>
            </div>
          </form>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { icon: Sparkles, text: 'Free Registration' },
            { icon: CheckCircle, text: 'Free Food & Swag' },
            { icon: CheckCircle, text: 'Certificate of Participation' },
            { icon: CheckCircle, text: 'Networking Opportunities' },
          ].map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-4 border border-white/5">
                <Icon className="w-5 h-5 text-primary" />
                <span className="text-gray-300 text-sm">{benefit.text}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
