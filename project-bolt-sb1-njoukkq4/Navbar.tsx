import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/exit');
  };

  return (
    <nav className="bg-indigo-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpen size={24} />
          <h1 className="text-xl font-bold">Sci-Tech Blog</h1>
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center space-x-1 bg-indigo-600 hover:bg-indigo-800 px-4 py-2 rounded-md transition-colors"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;