import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Github, Linkedin, UserPlus, UserCheck, ExternalLink } from 'lucide-react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../../components/ui/select';
import { participants } from '../../mock/networking';
import { toast } from 'sonner';

const Networking = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [skillFilter, setSkillFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');

    // Extract unique skills for filter
    const allSkills = [...new Set(participants.flatMap(p => p.skills))].sort();

    const filteredParticipants = participants.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.college.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSkill = skillFilter === 'all' || p.skills.includes(skillFilter);
        const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
        return matchesSearch && matchesSkill && matchesStatus;
    });

    const handleInvite = (name) => {
        toast.success(`Invitation sent to ${name}`);
    };

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-3xl font-bold text-white mb-2">
                        Networking & <span className="text-gradient">Team Formation</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl">
                        Find teammates, connect with developers, and build your dream team for InnoHacks 2.0.
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="card-glass p-4 mb-8 flex flex-col md:flex-row gap-4 items-center"
                >
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <Input
                            placeholder="Search by name or college..."
                            className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary w-full"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                        <Select value={skillFilter} onValueChange={setSkillFilter}>
                            <SelectTrigger className="w-full md:w-[180px] bg-white/5 border-white/10 text-white">
                                <SelectValue placeholder="Filter by Skill" />
                            </SelectTrigger>
                            <SelectContent className="bg-surface-card border-white/10 text-white">
                                <SelectItem value="all">All Skills</SelectItem>
                                {allSkills.map(skill => (
                                    <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select value={statusFilter} onValueChange={setStatusFilter}>
                            <SelectTrigger className="w-full md:w-[180px] bg-white/5 border-white/10 text-white">
                                <SelectValue placeholder="Team Status" />
                            </SelectTrigger>
                            <SelectContent className="bg-surface-card border-white/10 text-white">
                                <SelectItem value="all">All Status</SelectItem>
                                <SelectItem value="looking">Looking for Team</SelectItem>
                                <SelectItem value="team">In a Team</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredParticipants.map((participant, index) => (
                        <motion.div
                            key={participant.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 + 0.2 }}
                            className="card-glass p-6 group hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-white/10">
                                        <span className="text-lg font-bold text-white">{participant.avatar}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{participant.name}</h3>
                                        <p className="text-xs text-gray-400">{participant.college}</p>
                                    </div>
                                </div>
                                <Badge variant={participant.status === 'looking' ? 'default' : 'secondary'} className={`${participant.status === 'looking' ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20' : 'bg-gray-500/10 text-gray-400 hover:bg-gray-500/20'} capitalize`}>
                                    {participant.status === 'looking' ? 'Looking' : 'In Team'}
                                </Badge>
                            </div>

                            <p className="text-gray-300 text-sm mb-4 line-clamp-2 min-h-[40px]">
                                {participant.bio}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {participant.skills.slice(0, 3).map(skill => (
                                    <span key={skill} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">
                                        {skill}
                                    </span>
                                ))}
                                {participant.skills.length > 3 && (
                                    <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">
                                        +{participant.skills.length - 3}
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                <div className="flex gap-3">
                                    <a href={participant.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href={participant.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                </div>

                                {participant.status === 'looking' && (
                                    <Button size="sm" onClick={() => handleInvite(participant.name)} className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20">
                                        <UserPlus className="w-4 h-4 mr-1" />
                                        Invite
                                    </Button>
                                )}
                                {participant.status === 'team' && (
                                    <Button size="sm" disabled variant="ghost" className="text-gray-500 cursor-not-allowed hidden sm:flex">
                                        <UserCheck className="w-4 h-4 mr-1" />
                                        Joined
                                    </Button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredParticipants.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No participants found matching your criteria.</p>
                        <Button variant="link" onClick={() => { setSearchQuery(''); setSkillFilter('all'); setStatusFilter('all'); }} className="text-primary">
                            Clear Filters
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Networking;
