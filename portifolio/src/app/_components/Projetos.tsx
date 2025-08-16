"use client";

import { useEffect, useState } from "react";

interface Repo {
    id: number;
    name: string;
    html_url: string;
    description: string;
    language: string;
}

export default function Projetos() {
    const username = "matheustitton";
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRepos() {
            try {
                const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
                const data: Repo[] = await res.json();
                setRepos(data);
            } catch (err) {
                console.error("Erro ao buscar repositórios:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchRepos();
    }, [username]);

    return (
        <section
            id="projetos"
            className="min-h-screen flex flex-col justify-center items-center p-6"
        >
            <h2 className="text-4xl font-bold mb-8">Projetos</h2>

            {loading ? (
                <p>Carregando repositórios...</p>
            ) : (
                <div className="grid gap-6 max-w-4xl w-full">
                    {repos.map((repo) => (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            className="p-4 border border-gray-700 rounded hover:bg-gray-900 transition block"
                        >
                            <h3 className="text-2xl font-semibold">{repo.name}</h3>
                            <p className="mt-2">{repo.description}</p>
                            {repo.language && (
                                <span className="inline-block mt-2 px-2 py-1 bg-gray-800 text-sm rounded">
                                    {repo.language}
                                </span>
                            )}
                        </a>
                    ))}
                </div>
            )}
        </section>
    );
}
