import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Award, Download, Share2, CheckCircle, Clock,
  Trophy, Star, Linkedin, Twitter
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { toast } from 'sonner';
import { useAuth } from '../../context/AuthContext';

import { getCertificateData } from '../../mock/certificates';

const Certificate = () => {
  const { user } = useAuth();
  const certificateRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Mock certificate data
  const certificateData = getCertificateData(user);

  const handleDownload = async () => {
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success('Certificate downloaded successfully!');
    setIsGenerating(false);
  };

  const handleShareLinkedIn = () => {
    const text = `I just earned my certificate for participating in ${certificateData.eventName}! 🎉\n\nCertificate ID: ${certificateData.certificateId}`;
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
    toast.success('Opening LinkedIn...');
  };

  const handleShareTwitter = () => {
    const text = `Just earned my certificate for ${certificateData.eventName}! 🚀\n\n#InnoHacks2025 #Hackathon #Certificate`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    toast.success('Opening Twitter...');
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Your <span className="text-gradient">Certificate</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Congratulations on completing InnoHacks 2.0!
          </p>
        </motion.div>

        {/* Certificate Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div
            ref={certificateRef}
            className="relative bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 sm:p-12 shadow-2xl overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-amber-400 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-amber-400 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-amber-400 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-amber-400 rounded-br-3xl" />

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            {/* Content */}
            <div className="relative text-center">
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <Award className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-bold text-amber-800 mb-2">
                Certificate of Participation
              </h2>
              <p className="text-amber-600 text-lg mb-8">
                This is to certify that
              </p>

              {/* Participant Name */}
              <h3 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-4" style={{ fontFamily: 'serif' }}>
                {certificateData.participantName}
              </h3>

              {/* Description */}
              <p className="text-amber-700 text-lg mb-8 max-w-2xl mx-auto">
                has successfully participated in <strong>{certificateData.eventName}</strong>,
                a 24-hour inter-college hackathon held on <strong>{certificateData.eventDate}</strong>.
              </p>

              {/* Achievement Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mb-8">
                <Trophy className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">{certificateData.achievement}</span>
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-amber-300">
                <div className="text-center sm:text-left">
                  <p className="text-amber-600 text-sm">Certificate ID</p>
                  <p className="text-amber-800 font-mono font-semibold">{certificateData.certificateId}</p>
                </div>
                <div className="text-center">
                  <p className="text-amber-600 text-sm">Issued On</p>
                  <p className="text-amber-800 font-semibold">{certificateData.issueDate}</p>
                </div>
                <div className="text-center sm:text-right">
                  <p className="text-amber-600 text-sm">Organized By</p>
                  <p className="text-amber-800 font-semibold">{certificateData.organizer}</p>
                </div>
              </div>

              {/* Verification */}
              <div className="mt-6 flex items-center justify-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">Verified Certificate</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={handleDownload}
            disabled={isGenerating}
            className="btn-gradient px-8 py-6 text-lg rounded-xl"
          >
            {isGenerating ? (
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 animate-spin" />
                Generating...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Certificate
              </span>
            )}
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={handleShareLinkedIn}
            className="border-white/20 hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            Share on LinkedIn
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={handleShareTwitter}
            className="border-white/20 hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
          >
            <Twitter className="w-5 h-5 mr-2" />
            Share on Twitter
          </Button>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="card-glass p-6 text-center">
            <Star className="w-8 h-8 text-secondary mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-1">Verified</h3>
            <p className="text-gray-400 text-sm">Blockchain-verified certificate</p>
          </div>
          <div className="card-glass p-6 text-center">
            <Trophy className="w-8 h-8 text-neon-purple mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-1">Achievement</h3>
            <p className="text-gray-400 text-sm">Recognition of your participation</p>
          </div>
          <div className="card-glass p-6 text-center">
            <Share2 className="w-8 h-8 text-neon-pink mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-1">Shareable</h3>
            <p className="text-gray-400 text-sm">Easily share on social media</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certificate;
