import Head from 'next/head';
import { motion } from 'framer-motion';
import HeroSection from '../components/Hero';
import AboutSection from '../components/About';
import ProjectsSection from '../components/Projects';
import SkillsSection from '../components/Skills';
import ContactSection from '../components/Contact';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Head>
        <title>Hritvik - CS Student</title>
        <meta name="description" content="Hritvik's Portfolio" />
      </Head>

      <Navbar />
      
      <main className="container mx-auto px-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
