"use client";
import { motion } from "framer-motion";

export default function Experiencias() {
    const experiencias = [
        { cargo: "Desenvolvedor Frontend", empresa: "Empresa X", periodo: "2023 - atual", desc: "Atuação em projetos React e Next.js" },
        { cargo: "Estagiário Dev", empresa: "Empresa Y", periodo: "2022 - 2023", desc: "Desenvolvimento de sistemas internos" },
    ];

    return (
        <section id="experiencias" className="py-20">
            <h2 className="text-3xl font-bold mb-8">Experiências</h2>
            <div className="space-y-6">
                {experiencias.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        className="flex justify-between bg-gray-900 p-6 rounded-lg shadow-lg"
                    >
                        <div>
                            <h3 className="text-xl font-semibold text-lime-400">{exp.cargo}</h3>
                            <p className="text-gray-300">{exp.empresa}</p>
                            <p className="text-sm mt-2">{exp.desc}</p>
                        </div>
                        <span className="text-gray-400">{exp.periodo}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
