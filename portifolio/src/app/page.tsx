"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, FileDown } from "lucide-react";

export default function Home() {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center gap-12">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <div className="w-64 h-80 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
          FOTO DE PERFIL
        </div>
      </motion.div>
      
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <h2 className="text-5xl font-bold">Olá, eu sou <span className="text-lime-400">Matheus Titton</span></h2>
        <p className="mt-4 text-lg text-gray-300">Engenheiro de Software | Dev Web</p>
        
        <div className="flex gap-4 mt-6">
          <a href="/cv.pdf" target="_blank" className="bg-lime-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-lime-500 transition flex items-center gap-2">
            <FileDown size={18}/> Download CV
          </a>
          <a href="https://linkedin.com/in/matheustitton" target="_blank"><Linkedin size={28} /></a>
          <a href="https://github.com/matheustitton" target="_blank"><Github size={28} /></a>
        </div>
      </motion.div>

      
    </section>
  );
}
