"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SobreMim() {
    const [language, setLanguage] = useState<"pt" | "en">("pt");

    const textPT = `Sou Matheus Titton, engenheiro de software em formação e já graduado em engenharia química. Atualmente, trabalho no Conselho Regional de Engenharia e Agronomia (CREA), onde atuo na análise de processos e também na coordenação de estagiários, unindo responsabilidade técnica e gestão de pessoas.

Apaixonado por tecnologia e inovação, tenho me aprofundado em desenvolvimento web, com foco em React, TypeScript e Node.js, além de estudar Python e Kotlin. Gosto de transformar ideias em soluções práticas, sempre buscando unir organização, criatividade e eficiência.

Fora da área acadêmica e profissional, sou movido por desafios e hobbies que me inspiram: kart e Fórmula 1, jogos eletrônicos e de tabuleiro. Acredito que essas paixões refletem bem meu jeito: competitivo, estratégico e sempre em busca de evolução.

Meu objetivo é crescer como profissional na área de tecnologia da informação, contribuindo com projetos que impactem positivamente pessoas e organizações.`;

    const textEN = `I am Matheus Titton, a software engineer in training and already graduated in chemical engineering. Currently, I work at the Regional Council of Engineering and Agronomy (CREA), where I am involved in process analysis and also coordinate interns, combining technical responsibility with people management.

Passionate about technology and innovation, I have been deepening my skills in web development, focusing on React, TypeScript, and Node.js, while also studying Python and Kotlin. I enjoy turning ideas into practical solutions, always seeking to combine organization, creativity, and efficiency.

Outside of academia and work, I am driven by challenges and hobbies that inspire me: karting and Formula 1, electronic and board games. I believe these passions reflect my personality well: competitive, strategic, and always striving for growth.

My goal is to grow as a professional in the field of information technology, contributing to projects that positively impact people and organizations.`;

    return (
        <section
            id="sobre-mim"
            className="min-h-screen flex flex-col align items-center p-6 text-center gap-6"
        >
            <div className="flex flex-row items-center gap-4">
            {/* Título */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-4"
            >
                {language === "pt" ? (
                    <>Sobre <span className="text-purple-500">Mim</span></>
                ) : (
                    <>About <span className="text-purple-500">Me</span></>
                )}
            </motion.h1>

            {/* Botões de idioma */}
            <div className="flex gap-6">
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setLanguage("pt")}
                    className={`transition duration-300 rounded-full overflow-hidden ${
                        language === "pt" ? "grayscale-0" : "grayscale"
                    }`}
                >
                    <img
                        src="/br.png" 
                        alt="Português"
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-purple-500 hover:shadow-lg shadow-purple-500"
                    />
                </motion.button>

                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setLanguage("en")}
                    className={`transition duration-300 rounded-full overflow-hidden ${
                        language === "en" ? "grayscale-0" : "grayscale"
                    }`}
                >
                    <img
                        src="/uk.png" 
                        alt="English"
                        width={39}
                        height={39}
                        className="rounded-full border-2 border-purple-500 hover:shadow-lg shadow-purple-500"
                    />
                </motion.button>
            </div></div>

            {/* Texto */}
            <motion.p
                key={language}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg max-w-2xl bg-zinc-900 p-6 rounded-2xl"
            >
                {language === "pt" ? textPT : textEN}
            </motion.p>
        </section>
    );
}
