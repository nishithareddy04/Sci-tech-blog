import React from 'react';
import Navbar from '../components/Navbar';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const HomePage: React.FC = () => {
  const openResume = () => {
    // This would normally point to an actual PDF file
    window.open('https://example.com/resume.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-indigo-700 mb-4">Welcome to Sci-Tech Blog</h1>
          <p className="text-gray-700 mb-6">
            Exploring the intersection of science and technology through insightful articles, research highlights, and industry trends.
          </p>
          
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">About Me</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="Profile" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                <p className="text-gray-700 mb-4">
                  Computer Science researcher with a focus on artificial intelligence and machine learning. 
                  I'm passionate about exploring how technology can solve complex problems and improve lives.
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-indigo-600 mb-2">Education</h4>
                  <p className="text-gray-700">Ph.D. in Computer Science, Stanford University</p>
                  <p className="text-gray-700">M.S. in Artificial Intelligence, MIT</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-indigo-600 mb-2">Research Interests</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Machine Learning</li>
                    <li>Natural Language Processing</li>
                    <li>Computer Vision</li>
                    <li>Quantum Computing</li>
                  </ul>
                </div>
                
                <div className="flex space-x-4 mt-4">
                  <button 
                    onClick={openResume}
                    className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    <FileText size={18} />
                    <span>View Resume</span>
                  </button>
                  
                  <div className="flex space-x-3">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600">
                      <Github size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600">
                      <Linkedin size={24} />
                    </a>
                    <a href="mailto:contact@example.com" className="text-gray-700 hover:text-indigo-600">
                      <Mail size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`} 
                  alt={`Article ${item}`} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">The Future of Quantum Computing</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Exploring the potential impact of quantum computing on cryptography and data security.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">June 15, 2025</span>
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;