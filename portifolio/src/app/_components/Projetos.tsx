"use client";

import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CardProjeto } from "./CardProjeto";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  language: string;
  stargazers_count: number;
  watchers_count: number;
}

export default function Projetos() {

  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/matheustitton/repos")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a: Repo, b: Repo) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        setRepos(sorted);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div id="projetos" className="mt-6 px-10 md:px-8 py-10 gap-10 w-full">
      <h1 className= " font-bold text-6xl mb-6">PROJETOS</h1>

      <Carousel>
        <CarouselContent className="flex">
          {repos.map((repo) => (
            <CarouselItem key={repo.id} className="basis-1/2 flex">
              <CardProjeto
                titulo={repo.name}
                descricao={repo.description || "Sem descrição"}
                ano={new Date(repo.created_at).getFullYear()}
                tecnologias={[repo.language || "N/A"]}
                urlCodigoFonte={repo.html_url}
                estrelas={repo.stargazers_count}
                visualizacoes={repo.watchers_count}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  );
}
