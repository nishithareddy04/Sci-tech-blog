import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThumbsUp } from 'lucide-react';

const ExitPage: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to login page after 5 seconds
    const timer = setTimeout(() => {
      navigate('/login');
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-md">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-3 rounded-full">
            <ThumbsUp className="text-green-600" size={48} />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Thanks for visiting!</h1>
        <p className="text-gray-600 mb-6">
          We appreciate your time spent on our Sci-Tech Blog. Hope to see you again soon!
        </p>
        <p className="text-sm text-gray-500">
          You will be redirected to the login page in a few seconds...
        </p>
      </div>
    </div>
  );
};

export default ExitPage;