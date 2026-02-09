import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, Github, Link2, FileText, CheckCircle, 
  Clock, History, X, Plus, ExternalLink
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Progress } from '../../components/ui/progress';
import { toast } from 'sonner';

const Submission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    projectName: '',
    tagline: '',
    description: '',
    githubUrl: '',
    demoUrl: '',
    videoUrl: '',
    technologies: '',
  });

  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      version: 'v1.0',
      projectName: 'AI Code Reviewer',
      submittedAt: '2025-03-15 14:30',
      status: 'submitted',
    },
  ]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i);
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    const newSubmission = {
      id: submissions.length + 1,
      version: `v1.${submissions.length}`,
      projectName: formData.projectName,
      submittedAt: new Date().toLocaleString(),
      status: 'submitted',
    };

    setSubmissions(prev => [newSubmission, ...prev]);
    toast.success('Project submitted successfully!');
    setIsSubmitting(false);
    setUploadProgress(0);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Project <span className="text-gradient">Submission</span>
          </h1>
          <p className="text-gray-400">
            Submit your project for evaluation. You can make multiple submissions until the deadline.
          </p>
        </motion.div>

        {/* Submission History */}
        {submissions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-glass p-6 mb-8"
          >
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <History className="w-5 h-5 text-neon-cyan" />
              Submission History
            </h2>
            <div className="space-y-3">
              {submissions.map((sub) => (
                <div key={sub.id} className="flex items-center justify-between bg-white/5 rounded-lg p-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">{sub.projectName}</span>
                      <span className="px-2 py-0.5 rounded-full bg-neon-cyan/20 text-neon-cyan text-xs">
                        {sub.version}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm">{sub.submittedAt}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 text-sm">Submitted</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Submission Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-glass p-8"
        >
          <h2 className="text-xl font-semibold text-white mb-6">New Submission</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Project Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="projectName" className="text-gray-300">Project Name *</Label>
                <Input
                  id="projectName"
                  value={formData.projectName}
                  onChange={(e) => setFormData(prev => ({ ...prev, projectName: e.target.value }))}
                  placeholder="Enter project name"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tagline" className="text-gray-300">Tagline</Label>
                <Input
                  id="tagline"
                  value={formData.tagline}
                  onChange={(e) => setFormData(prev => ({ ...prev, tagline: e.target.value }))}
                  placeholder="One-line description"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-gray-300">Project Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Describe your project, its features, and how it solves the problem..."
                required
                rows={4}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 resize-none"
              />
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="githubUrl" className="text-gray-300 flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub Repository *
                </Label>
                <Input
                  id="githubUrl"
                  value={formData.githubUrl}
                  onChange={(e) => setFormData(prev => ({ ...prev, githubUrl: e.target.value }))}
                  placeholder="https://github.com/username/repo"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demoUrl" className="text-gray-300 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Demo URL
                </Label>
                <Input
                  id="demoUrl"
                  value={formData.demoUrl}
                  onChange={(e) => setFormData(prev => ({ ...prev, demoUrl: e.target.value }))}
                  placeholder="https://your-demo.com"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="videoUrl" className="text-gray-300">Video Demo URL</Label>
              <Input
                id="videoUrl"
                value={formData.videoUrl}
                onChange={(e) => setFormData(prev => ({ ...prev, videoUrl: e.target.value }))}
                placeholder="YouTube, Loom, or other video link"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="technologies" className="text-gray-300">Technologies Used</Label>
              <Input
                id="technologies"
                value={formData.technologies}
                onChange={(e) => setFormData(prev => ({ ...prev, technologies: e.target.value }))}
                placeholder="React, Node.js, Python, etc. (comma separated)"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              />
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <Label className="text-gray-300">Additional Files</Label>
              <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-neon-cyan/50 transition-colors">
                <Upload className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400 mb-2">Drag and drop files here, or click to browse</p>
                <p className="text-gray-500 text-sm mb-4">Support for PDF, ZIP, images up to 50MB</p>
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload">
                  <Button type="button" variant="outline" className="border-white/20">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Files
                  </Button>
                </label>
              </div>

              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-neon-cyan" />
                        <span className="text-white text-sm">{file.name}</span>
                        <span className="text-gray-500 text-xs">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-gray-400 hover:text-red-400"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Upload Progress */}
            {isSubmitting && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Uploading...</span>
                  <span className="text-neon-cyan">{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full btn-gradient py-6 text-lg rounded-xl"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5 animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    Submit Project
                  </span>
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Submission;
