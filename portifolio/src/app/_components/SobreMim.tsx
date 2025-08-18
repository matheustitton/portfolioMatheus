"use client";

import { motion } from "framer-motion";

export default function SobreMim() {
    return (
        <section
            id="sobre-mim"
            className="min-h-screen flex flex-col justify-center items-center p-6 text-center gap-12"
        >
            {/* Título */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-4"
            >
                Sobre <span className="text-purple-500">Mim</span>
            </motion.h1>

            {/* Parágrafo */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg max-w-2xl bg-zinc-900 p-6 rounded-2xl"
            >
                Sou Matheus Titton, engenheiro de software em desenvolvimento, apaixonado por tecnologia,
                inovação e aprendizado constante. Tenho experiência em React, TypeScript, Node.js e
                coordenação de equipes. Também sou amante de kart, Fórmula 1 e jogos eletrônicos.
            </motion.p>

            {/* Div com imagem do kart */}
            {/* <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{
                    repeat: 1,
                    repeatType: "loop",
                    duration: 5,
                    ease: "linear"
                }}
                className="w-full overflow-hidden relative"
            >
                <img
                    src="portifoliomatheus/portifolio/src/assets/kart1.jpg"
                    className="h-32 mx-auto"
                />
            </motion.div> */}
        </section>
    );
}
