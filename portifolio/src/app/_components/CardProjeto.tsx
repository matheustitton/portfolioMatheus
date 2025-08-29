"use client"

import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { FaGithub, FaStar, FaEye } from "react-icons/fa";


interface ProjetoProps {
  titulo: string,
  descricao: string,
  ano: number,
  tecnologias: string[]
  urlCodigoFonte: string
  estrelas: number, 
  visualizacoes: number
}

export function CardProjeto({ titulo, descricao, ano, tecnologias, urlCodigoFonte, estrelas, visualizacoes }: ProjetoProps) {

  return (
    <div 
      className="flex w-full gap-5 rounded-2xl border border-gray-700
                  p-6 shadow-sm transition-all duration-300
                  bg-white/5"
    >
      {/* Conteúdo */}
      <div className="flex flex-col justify-between w-full">
        {/* Título e descrição */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl text-gray-400 font-semibold">{titulo}</h1>
          <p className="text-gray-400">{descricao}</p>
        </div>

        {/* Sobre o projeto */}
        <div className="mt-6">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3">Sobre o projeto</h2>
          <div className="border-t border-gray-500 py-2 flex justify-between text-sm">
            <span className="text-gray-500">Ano</span>
            <span className="text-gray-400">{ano}</span>
          </div>

          <div className="border-t border-gray-500 py-2 flex justify-between text-sm">
            <span className="text-gray-500">Tecnologias</span>
            <div className="flex gap-2 flex-wrap">
              {tecnologias.map((tec, i) => (
                <Badge 
                  key={i} 
                  className="bg-purple-500 text-black px-3 py-1 rounded-2xl shadow-sm"
                >
                  {tec}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        {/* Estrelas e Visualizações */}
          <div className="border-t border-gray-500 py-2 flex justify-between text-sm">
            <span className="text-gray-500">Estrelas & Visualizações</span>
            <div className="flex gap-4 text-gray-400">
              <span className="flex items-center gap-1">
                <FaStar className="text-yellow-400" /> {estrelas}
              </span>
              <span className="flex items-center gap-1">
                <FaEye className="text-blue-400" /> {visualizacoes}
              </span>
            </div>
          </div>
        

        <a 
          className="mt-6 flex items-center gap-2 text-purple-500 font-bold uppercase text-sm hover:underline"
          href={urlCodigoFonte} 
          target="_blank"
        >
          Código Fonte <FaGithub size={18}/>
        </a>
      </div>
      </div>
  )
}
