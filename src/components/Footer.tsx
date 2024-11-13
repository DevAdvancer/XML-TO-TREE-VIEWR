import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 text-center text-sm text-gray-600 dark:text-gray-400 border-t dark:border-gray-700">
      © {new Date().getFullYear()} Made by Abhirup Kumar 
    </footer>
  );
};

export default Footer;
