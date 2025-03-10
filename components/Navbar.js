import { motion } from 'framer-motion';
import { CodeIcon } from '@heroicons/react/outline';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-gray-800/50 backdrop-blur-md z-50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center">
        <CodeIcon className="h-8 w-8 text-cyan-400 mr-2" />
        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Hritvik
        </span>
      </div>
    </motion.nav>
  );
}
