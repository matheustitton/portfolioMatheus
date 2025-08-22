import "./globals.css";
import Navbar from "./_components/Navbar";
import { MenuNavegacao } from "./_components/MenuNavegacao";
import SobreMim from "./_components/SobreMim";
import Experiencias from "./_components/Experiencias";
import Projetos from "./_components/Projetos";
import Contato from "./_components/Contato";

export const metadata = {
  title: "Portfólio | Matheus Titton",
  description: "Meu portfólio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white font-sans">
        <MenuNavegacao />
        <main className="max-w-6xl mx-auto px-6 scroll-smooth pt-20">{children}
        <SobreMim />
        <Experiencias />
        <Projetos />
        <Contato />
        </main>
      </body>
    </html>
  );
}
