export default function Contato() {
    return (
        <section
            id="contato"
            className="min-h-screen flex flex-col justify-center items-center p-6 text-center"
        >
            <h2 className="text-4xl font-bold mb-4">Contato</h2>
            <p className="mb-6">Quer entrar em contato? Me envie uma mensagem ou confira minhas redes:</p>
            <div className="flex gap-6">
                <a href="mailto:matheus@email.com" className="hover:underline">Email</a>
                <a href="https://github.com/seu-usuario" target="_blank" className="hover:underline">GitHub</a>
                <a href="https://linkedin.com/in/seu-usuario" target="_blank" className="hover:underline">LinkedIn</a>
            </div>
        </section>
    );
}
