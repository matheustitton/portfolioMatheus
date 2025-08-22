"use client";

import { motion } from "framer-motion";

export default function Experiencias() {
    const experiencias = [
        {
            cargo: "📊 Analista de Processos Junior",
            empresa: "MRV",
            periodo: "Mai/2025 - Atual",
            descricao:
                "Processos e análise de dados aplicados à área de negócios, buscando eficiência e insights estratégicos.",
        },
        {
            cargo: "🛠️ Assistente Administrativo",
            empresa: "Conselho Regional de Engenharia e Agronomia de Minas Gerais",
            periodo: "Ago/2022 - Mai/2025",
            descricao:
                "Atuação na gestão e coordenação de estagiários, com foco na distribuição de tarefas, acompanhamento de atividades e suporte ao desenvolvimento. Experiência em planejamento de cronogramas, controle de prazos e análise de dados para geração de relatórios. Responsável por monitorar processos, identificar falhas e propor melhorias, além de manter a comunicação entre setores para garantir eficiência e continuidade do fluxo de trabalho."
        },
        {
            cargo: "Estagiário de Engenharia",
            empresa: "Conselho Regional de Engenharia e Agronomia de Minas Gerais",
            periodo: "Jul/2021 - Jul/2022",
            descricao: "Desenvolvimento e analise de processos."
        },
        {
            cargo: "👨‍🏫 Monitor de Engenharia Química",
            empresa: "Pontifícia Universidade Católica de Minas Gerais",
            periodo: "Set/2019 - Jul/2020",
            descricao:
                "Auxílio em disciplinas práticas e teóricas, promovendo aprendizado e suporte acadêmico.",
        },
    ];

    return (
        <section id="experiencias" className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12">
                💼 Minhas <span className="text-purple-400">Experiências</span>
            </h2>

            <div className="relative border-l-4 border-purple-500 ml-6">
                {experiencias.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="mb-12 ml-6"
                    >
                        {/* Bolinha da timeline */}
                        <span className="absolute -left-3 w-6 h-6 bg-purple-500 rounded-full border-4 border-black"></span>

                        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition duration-300">
                            <h3 className="text-xl font-semibold text-purple-400">
                                {exp.cargo}
                            </h3>
                            <p className="text-sm text-gray-400">
                                {exp.empresa} • {exp.periodo}
                            </p>
                            <p className="mt-2 text-gray-300 leading-relaxed">
                                {exp.descricao}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
