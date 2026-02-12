import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users, Plus, X, Crown, Mail, Copy, Check,
  UserPlus, Trash2, AlertCircle
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
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

const TeamManagement = () => {
  const [hasTeam, setHasTeam] = useState(false);
  const [inviteCode, setInviteCode] = useState('INNO2025-TEAM-XYZ');
  const [copied, setCopied] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');

  const [team, setTeam] = useState({
    name: 'Code Warriors',
    members: [
      { id: 1, name: 'You', email: 'you@example.com', role: 'leader', avatar: 'YO' },
      { id: 2, name: 'Alice Johnson', email: 'alice@example.com', role: 'member', avatar: 'AJ' },
      { id: 3, name: 'Bob Smith', email: 'bob@example.com', role: 'member', avatar: 'BS' },
    ],
  });

  const handleCreateTeam = (e) => {
    e.preventDefault();
    if (teamName.trim()) {
      setHasTeam(true);
      setTeam(prev => ({ ...prev, name: teamName }));
      toast.success('Team created successfully!');
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(inviteCode);
    setCopied(true);
    toast.success('Invite code copied!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInviteMember = (e) => {
    e.preventDefault();
    if (inviteEmail.trim()) {
      toast.success(`Invitation sent to ${inviteEmail}`);
      setInviteEmail('');
    }
  };

  const handleRemoveMember = (memberId) => {
    setTeam(prev => ({
      ...prev,
      members: prev.members.filter(m => m.id !== memberId),
    }));
    toast.success('Member removed from team');
  };

  const handleLeaveTeam = () => {
    setHasTeam(false);
    setTeamName('');
    toast.success('You left the team');
  };

  if (!hasTeam) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Team <span className="text-gradient">Management</span>
            </h1>
            <p className="text-gray-400">
              Create a new team or join an existing one
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Create Team */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card-glass p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Create a Team</h2>
              <p className="text-gray-400 mb-6">
                Start your own team and invite up to 3 teammates
              </p>
              <form onSubmit={handleCreateTeam} className="space-y-4">
                <div>
                  <Label htmlFor="teamName" className="text-gray-300">Team Name</Label>
                  <Input
                    id="teamName"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="Enter team name"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  />
                </div>
                <Button type="submit" className="w-full btn-gradient py-6 rounded-xl">
                  <Plus className="w-5 h-5 mr-2" />
                  Create Team
                </Button>
              </form>
            </motion.div>

            {/* Join Team */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="card-glass p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-secondary flex items-center justify-center mb-6">
                <UserPlus className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Join a Team</h2>
              <p className="text-gray-400 mb-6">
                Enter the invite code shared by your team leader
              </p>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="inviteCode" className="text-gray-300">Invite Code</Label>
                  <Input
                    id="inviteCode"
                    placeholder="Enter invite code"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  />
                </div>
                <Button
                  type="button"
                  onClick={() => {
                    setHasTeam(true);
                    toast.success('Joined team successfully!');
                  }}
                  className="w-full bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 py-6 rounded-xl"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Join Team
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 card-glass p-6"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-medium mb-1">Team Rules</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Teams can have 1-4 members</li>
                  <li>• All members must be registered for InnoHacks 2.0</li>
                  <li>• Cross-college teams are allowed</li>
                  <li>• Team changes are allowed until 24 hours before the event</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                {team.name}
              </h1>
              <p className="text-gray-400">
                {team.members.length} / 4 members
              </p>
            </div>
            <Button variant="destructive" onClick={handleLeaveTeam}>
              <X className="w-4 h-4 mr-2" />
              Leave Team
            </Button>
          </div>
        </motion.div>

        {/* Invite Code */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-glass p-6 mb-8"
        >
          <Label className="text-gray-300 mb-2 block">Team Invite Code</Label>
          <div className="flex gap-2">
            <div className="flex-1 bg-white/5 rounded-lg px-4 py-3 font-mono text-primary">
              {inviteCode}
            </div>
            <Button onClick={handleCopyCode} variant="outline" className="border-white/20">
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            Share this code with your teammates to invite them
          </p>
        </motion.div>

        {/* Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-glass p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Team Members</h2>
          <div className="space-y-4">
            {team.members.map((member) => (
              <div key={member.id} className="flex items-center justify-between bg-white/5 rounded-lg p-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-white font-bold">{member.avatar}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">{member.name}</span>
                      {member.role === 'leader' && (
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 text-xs">
                          <Crown className="w-3 h-3" />
                          Leader
                        </span>
                      )}
                    </div>
                    <span className="text-gray-400 text-sm">{member.email}</span>
                  </div>
                </div>
                {member.role !== 'leader' && (
                  <button
                    onClick={() => handleRemoveMember(member.id)}
                    className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Invite Member */}
        {team.members.length < 4 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card-glass p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Invite Member</h2>
            <form onSubmit={handleInviteMember} className="flex gap-2">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <Input
                  type="email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  placeholder="Enter email address"
                  required
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                />
              </div>
              <Button type="submit" className="btn-gradient">
                <UserPlus className="w-5 h-5 mr-2" />
                Invite
              </Button>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TeamManagement;
