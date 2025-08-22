"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

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
        <section id="projetos" className="min-h-screen bg-black text-white p-10 flex flex-col items-center justify-center">
            <div className="text-left flex flex-col mb-8">
                <h1 className="text-5xl font-extrabold mb-2 text-purple-500">PROJETOS</h1>
                <p className="text-lg mb-6">🚀 Alguns repositórios do meu GitHub</p>
            </div>

            {repos.length > 0 && (
                <motion.div
                    key={repos[index].id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="flex bg-zinc-900 rounded-xl shadow-lg p-6 w-[600px] max-w-full"
                >
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem>{/* Thumbnail simulada */}
                                <div className="bg-zinc-800 w-60 h-40 rounded-lg flex items-center justify-center mr-6">
                                    <span className="text-gray-500">📷</span>
                                </div>

                                {/* Conteúdo */}
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-xl font-semibold mb-2">{repos[index].name}</h2>
                                        <p className="text-gray-400 text-sm mb-4">
                                            {repos[index].description || "Sem descrição"}
                                        </p>

                                        <div className="space-y-2 text-sm text-gray-400">
                                            <p>
                                                <span className="font-semibold">Ano:</span>{" "}
                                                {new Date(repos[index].created_at).getFullYear()}
                                            </p>
                                            <p>
                                                <span className="font-semibold">Tecnologia:</span>{" "}
                                                {repos[index].language || "Não especificada"}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Botão GitHub */}
                                    <a
                                        href={repos[index].html_url}
                                        target="_blank"
                                        className="mt-4 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black font-semibold px-4 py-2 rounded-lg transition-colors"
                                    >
                                        Repositório <Github size={18} />
                                    </a>
                                </div>
                            </CarouselItem>
                            {/* <CarouselItem>...</CarouselItem>
                            <CarouselItem>...</CarouselItem> */}
                        </CarouselContent>
                        <CarouselPrevious onClick={prev} />
                        <CarouselNext onClick={next}/>
                    </Carousel>

                    {/* Thumbnail simulada */}
                    <div className="bg-zinc-800 w-60 h-40 rounded-lg flex items-center justify-center mr-6">
                        <span className="text-gray-500">📷</span>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">{repos[index].name}</h2>
                            <p className="text-gray-400 text-sm mb-4">
                                {repos[index].description || "Sem descrição"}
                            </p>

                            <div className="space-y-2 text-sm text-gray-400">
                                <p>
                                    <span className="font-semibold">Ano:</span>{" "}
                                    {new Date(repos[index].created_at).getFullYear()}
                                </p>
                                <p>
                                    <span className="font-semibold">Tecnologia:</span>{" "}
                                    {repos[index].language || "Não especificada"}
                                </p>
                            </div>
                        </div>

                        {/* Botão GitHub */}
                        <a
                            href={repos[index].html_url}
                            target="_blank"
                            className="mt-4 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black font-semibold px-4 py-2 rounded-lg transition-colors"
                        >
                            Repositório <Github size={18} />
                        </a>
                    </div>
                </motion.div>
            )}
            {/* Botões de navegação */}
            <div className="flex gap-4 mt-6">
                <Button
                    onClick={prev}
                    className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full"
                >
                    <ChevronLeft size={24} />
                </Button>
                <Button
                    onClick={next}
                    className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full"
                >
                    <ChevronRight size={24} />
                </Button>
            </div>

        </section>
    );
}
