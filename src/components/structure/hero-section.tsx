import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"
import React from "react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-10 md:pt-16 lg:pt-20 pb-20 sm:pb-24 md:pb-28 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Texto */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <Badge className="h-7 bg-accent/35 text-foreground border-accent/20 animate-fade-in-left">
                Sistema de Rastreamento Visual de Informações
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight [letter-spacing:-0.02em] animate-fade-in-left animate-delay-100">
                Transparência do{" "}
                <span className="text-primary">campo ao mercado</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in-left animate-delay-200">
                A Verdantis traz rastreabilidade digital e certificação para o
                agronegócio brasileiro, abrindo mercados globais com práticas
                sustentáveis.
              </p>
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-left animate-delay-300">
              <Button size="lg" className="text-base btn-animate hover-glow">
                Começar Agora
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base bg-transparent btn-animate"
              >
                <Play className="mr-2 h-4 w-4" />
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative animate-fade-in-right animate-delay-200 mt-8 lg:mt-0">
  <div className="pt-6 sm:pt-12 md:pt-16 relative z-10 animate-float">
    <img
      src="/agro-image-2-red.png"
      alt="Painel Verdantis"
      className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto rounded-2xl shadow-2xl border border-border/20 image-parallax"
    />
  </div>
  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-3xl transform scale-110 animate-pulse-glow"></div>
</div>

        </div>
      </div>
    </section>
  )
}
