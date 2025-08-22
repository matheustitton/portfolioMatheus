"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, FileDown } from "lucide-react";

export default function Home() {
    return (
        <section id="home" className="py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Apresentação */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex-1"
                >
                    <h1 className="text-5xl font-bold">
                        Olá, eu sou <span className="text-purple-500">Matheus Titton</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">Engenheiro de Software | Dev Web</p>

                    <div className="flex flex-row gap-4 mt-6">
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                className="bg-purple-500 text-black px-4 py-2 rounded-full font-medium hover:bg-purple-500 shadow-lg houver:shadow-purple-500/30 transition flex-row gap-2"
                            >
                                <FileDown size={18} className="" /> Download CV
                            </a>
                        <a href="https://linkedin.com/in/matheustitton" target="_blank" className="border-solid border-2 text-gray-500 px-4 py-4 rounded-full font-medium hover:border-purple-500 houver:text-purple-500 transition flex items-center hover:text-purple-400 transition shadow houver:shadow-purple-500/30">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/matheustitton" target="_blank" className="border-solid border-2 text-gray-500 px-4 py-4 rounded-full font-medium hover:border-purple-500 houver:text-purple-500 transition flex items-center hover:text-purple-400 transition shadow houver:shadow-purple-500/30">
                            <Github size={20} />
                        </a>
                    </div>
                </motion.div>

                {/* Foto */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex-1 flex justify-center"
                >
                    <img
                        src="/profile.png" 
                        alt="Foto de Perfil"
                        width={640}
                        height={720}
                        className="rounded-3xl border-2 border-grey-500"
                    />
                </motion.div>
            </div>
        </section>
    );
}
