
import { Button } from "@/components/ui/button"

import {
  ArrowRight,
  QrCode,
} from "lucide-react"



export default function ContactSection() {
    return (
       
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Fundo com imagem */}
            <div className="absolute inset-0 bg-[url('/farmland-background.jpg')] bg-cover bg-center opacity-10"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="max-w-4xl mx-auto space-y-8 animate-on-scroll">
                    {/* Título */}
                    <h2 className="text-4xl sm:text-5xl font-bold text-balance">
                        Junte-se ao futuro do agronegócio
                    </h2>

                    {/* Subtítulo */}
                    <p className="text-xl text-primary-foreground/80 text-pretty">
                        Transforme suas operações agrícolas com rastreabilidade em blockchain,
                        certificação sustentável e acesso aos mercados globais.
                    </p>

                    {/* Botões */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="text-base btn-animate hover-glow"
                        >
                            Comece Gratuitamente
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent btn-animate"
                        >
                            Agendar Demonstração
                        </Button>
                    </div>

                    {/* QR Code flutuante */}
                    <div className="relative mt-12 animate-float">
                        <div className="h-24 w-24 bg-white rounded-lg flex items-center justify-center mx-auto shadow-2xl">
                            <QrCode className="h-12 w-12 text-primary" />
                        </div>
                        <p className="text-sm text-primary-foreground/60 mt-2">
                            Escaneie para saber mais
                        </p>
                    </div>
                </div>
            </div>
        </section>
     
    )
}
