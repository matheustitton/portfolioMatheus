"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    created_at: string;
    language: string;
}

export default function Projetos() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetch("https://api.github.com/users/matheustitton/repos?sort=updated")
            .then((res) => res.json())
            .then((data) => setRepos(data));
    }, []);

    const next = () => {
        if (repos.length > 0) setIndex((prev) => (prev + 1) % repos.length);
    };

    const prev = () => {
        if (repos.length > 0) setIndex((prev) => (prev - 1 + repos.length) % repos.length);
    };

    return (
        <section
            id="projetos"
            className="min-h-screen bg-black text-white px-10 py-16 flex flex-col items-center"
        >
            {/* Cabeçalho */}
            <div className="w-full max-w-5xl items-start text-left mb-12">
                <h1 className="text-4xl font-extrabold mb-2">PROJETOS</h1>
            </div>

            {/* Card de Projeto */}
            {repos.length > 0 && (
                <motion.div
                    key={repos[index].id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row bg-black rounded-2xl shadow-lg p-8 w-full max-w-5xl"
                >

                    <Button
                    onClick={prev}
                    className="bg-gray-500 hover:bg-gray-700 p-3 self-center rounded-full"
                >
                    <ChevronLeft size={24} />
                </Button>

                    {/* Thumbnail simulada */}
                    <div className="flex-shrink-0 p-2 bg-white-200 mb-6 md:mb-0">
                    <div className="bg-zinc-800 w-full md:w-[400px] h-[250px] rounded-lg flex items-center justify-center mb-6 md:mb-0 md:mr-8">
                        <span className="text-gray-500 text-4xl">📷</span>
                    </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex flex-col justify-between flex-1">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">{repos[index].name}</h2>
                            <p className="text-gray-400 text-base mb-6">
                                {repos[index].description || "Sem descrição"}
                            </p>

                            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                                Sobre o projeto
                            </h3>

                            <div className="space-y-3 text-sm text-gray-400 border-t border-gray-700 pt-3">
                                <div className="flex justify-between">
                                    <span className="font-medium">Ano</span>
                                    <span>{new Date(repos[index].created_at).getFullYear()}</span>
                                </div>
                                <div className="flex justify-between border-t border-gray-700 pt-3">
                                    <span className="font-medium">Tecnologias</span>
                                    <span>{repos[index].language || "Não especificada"}</span>
                                </div>
                            </div>
                        </div>

                        {/* Botão GitHub */}
                        <a
                            href={repos[index].html_url}
                            target="_blank"
                            className="mt-6 inline-flex items-center gap-2 text-purple-400 hover:text-purple-500 font-semibold transition-colors border-b-2 border-purple-400 w-fit"
                        >
                            CÓDIGO FONTE <Github size={18} />
                        </a>
                    </div>
                
                <Button
                    onClick={next}
                    className="bg-gray-500 m-2 hover:bg-gray-700 p-3 self-center rounded-full"
                >
                    <ChevronRight size={24} />
                </Button>

                </motion.div>
            )}
        </section>
    );
}
