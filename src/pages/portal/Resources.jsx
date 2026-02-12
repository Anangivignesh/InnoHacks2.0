import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Code, Server, Brain, Zap, Search } from 'lucide-react';
import { resources } from '../../mock/resources';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

const Resources = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', 'Frontend', 'Backend', 'AI / ML', 'APIs', 'Dev Tools'];

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Frontend': return <Code className="w-4 h-4" />;
            case 'Backend': return <Server className="w-4 h-4" />;
            case 'AI / ML': return <Brain className="w-4 h-4" />;
            case 'APIs': return <Zap className="w-4 h-4" />;
            default: return <BookOpen className="w-4 h-4" />;
        }
    };

    const filteredResources = resources.filter(resource => {
        const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
        const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

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
                        Resource <span className="text-gradient">Library</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl">
                        Curated tools, libraries, and guides to help you build faster and better.
                    </p>
                </motion.div>

                {/* Controls */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8 space-y-6"
                >
                    {/* Search */}
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <Input
                            placeholder="Search resources..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary"
                        />
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                        ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredResources.map((resource, index) => (
                        <motion.div
                            key={resource.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 + 0.2 }}
                            className="card-glass p-6 group hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
                                    {getCategoryIcon(resource.category)}
                                </div>
                                <Badge variant="outline" className="bg-white/5 border-white/10 text-gray-400">
                                    {resource.category}
                                </Badge>
                            </div>

                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                                {resource.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-6 flex-grow">
                                {resource.description}
                            </p>

                            <a
                                href={resource.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-auto"
                            >
                                Visit Resource
                                <ExternalLink className="w-4 h-4 ml-1" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                {filteredResources.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No resources found.</p>
                        <Button variant="link" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} className="text-primary">
                            Clear Filters
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Resources;
