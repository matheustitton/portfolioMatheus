import { AUTOR, SOBRE_MIM } from '@/lib/contants';
import Image from 'next/image';

{/* <div className="flex gap-4 mt-6">
                <Button
                    onClick={prev}
                    className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full"
                >
                    <ChevronLeft size={24} />
                </Button>
                <Button
                    onClick={next}
                    className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full"
                >
                    <ChevronRight size={24} />
                </Button>
            </div> */}

export default function Inicio() {
    return (
        <section className="flex flex-col md:flex-row w-full bg-accent items-center justify-between px-6 md:px-24 py-16 gap-12">
            
            {/* Imagem primeiro no mobile */}
            <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
                <Image 
                    src="/window.svg"
                    alt="Window"
                    width={0}
                    height={0}
                    className="h-auto max-h-[280px] md:max-h-[400px] w-auto object-contain drop-shadow-lg"
                />
            </div>

            {/* Texto depois no mobile */}
            <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1 space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                    {AUTOR}
                </h1>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto md:mx-0">
                    {SOBRE_MIM}
                </p>
            </div>
        </section>
    );
}
