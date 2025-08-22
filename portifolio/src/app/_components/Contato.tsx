"use client";

import { useState } from "react";
import { Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import emailjs from "emailjs-com";


export default function Contato() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
    });

    const [error, setError] = useState("");

    const validateEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .send(
                "service_qtumnzn", // substitua pelo ID do serviço no EmailJS
                "template_9vgvfzu", // substitua pelo ID do template
                {
                    from_name: formData.nome,
                    from_email: formData.email,
                    message: formData.mensagem,
                },
                "gDVXxg17gUZq0jC2Q" // substitua pela sua public key do EmailJS
            )
            .then(
                () => {
                    setStatus("success");
                    setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
                },
                () => {
                    setStatus("error");
                }
            );
    };

    return (
        <section
            id="contato"
            className="min-h-screen bg-black text-white flex flex-col md:flex-row justify-between items-center px-12 py-16"
        >
            {/* Lado Esquerdo */}
            <div className="text-left max-w-lg">
                <h2 className="text-5xl font-extrabold mb-6">VAMOS NOS <span className="text-purple-500">CONECTAR</span></h2>
                {/* <p className="mb-4 text-gray-300">
                    Email <a href="mailto:matheustitton@gmail.com" className="underline">matheustitton@gmail.com</a>
                </p> */}

                {/* Ícones com Modais */}
                <div className="flex gap-6 text-purple-300">
                    <Dialog>
                        <DialogTrigger>
                            <Linkedin size={28} className="cursor-pointer hover:text-purple-600" />
                        </DialogTrigger>
                        <DialogContent className="bg-zinc-900 text-white">
                            <DialogHeader>
                                <DialogTitle>LinkedIn</DialogTitle>
                            </DialogHeader>
                            <p className="mt-2">
                                Usuário: <span className="font-semibold">matheustitton</span>
                            </p>
                            <a
                                href="https://linkedin.com/in/matheustitton"
                                target="_blank"
                                className="text-purple-300 underline mt-2 inline-block"
                            >
                                Abrir perfil
                            </a>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger>
                            <Github size={28} className="cursor-pointer hover:text-purple-600" />
                        </DialogTrigger>
                        <DialogContent className="bg-zinc-900 text-white">
                            <DialogHeader>
                                <DialogTitle>GitHub</DialogTitle>
                            </DialogHeader>
                            <p className="mt-2">
                                Usuário: <span className="font-semibold">matheustitton</span>
                            </p>
                            <a
                                href="https://github.com/matheustitton"
                                target="_blank"
                                className="text-purple-300 underline mt-2 inline-block"
                            >
                                Abrir repositórios
                            </a>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger>
                            <Instagram size={28} className="cursor-pointer hover:text-purple-600" />
                        </DialogTrigger>
                        <DialogContent className="bg-zinc-900 text-white">
                            <DialogHeader>
                                <DialogTitle>Instagram</DialogTitle>
                            </DialogHeader>
                            <p className="mt-2">
                                Usuário: <span className="font-semibold">@matheustitton</span>
                            </p>
                            <a
                                href="https://instagram.com/matheustitton"
                                target="_blank"
                                className="text-purple-300 underline mt-2 inline-block"
                            >
                                Abrir perfil
                            </a>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            {/* Formulário */}
            <form
                onSubmit={handleSubmit}
                className="bg-transparent w-full max-w-md flex flex-col gap-4 mt-10 md:mt-0"
            >
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="p-3 rounded bg-zinc-900 focus:outline-none"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 rounded bg-zinc-900 focus:outline-none"
                />
                <input
                    type="text"
                    name="assunto"
                    placeholder="Assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    className="p-3 rounded bg-zinc-900 focus:outline-none"
                />
                <textarea
                    name="mensagem"
                    placeholder="Mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={4}
                    className="p-3 rounded bg-zinc-900 focus:outline-none"
                ></textarea>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <Button
                    type="submit"
                    className="bg-purple-300 hover:bg-purple-400 text-black font-bold py-3 px-6 rounded-full mt-2"
                >
                    ENVIAR
                </Button>
            </form>
        </section>
    );
}

