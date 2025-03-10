import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Hritvik
          </h1>
          <div className="text-2xl md:text-4xl font-mono text-gray-300 mb-8">
            <TypeAnimation
              sequence={[
                'Computer Science Student',
                2000,
                'Full Stack Developer',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              repeat={Infinity}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
