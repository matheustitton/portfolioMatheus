"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
    { name: "Experiências", href: "#experiencias" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
];

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center px-8 py-4 bg-black sticky top-0 z-50 border-b border-gray-800"
        >
            <h1 className="text-xl font-bold">Matheus Titton</h1>
            <div className="flex gap-6">
                {links.map((link) => (
                    <Link key={link.name} href={link.href} className="hover:text-lime-400 transition">
                        {link.name}
                    </Link>
                ))}
            </div>
        </motion.nav>
    );
}
