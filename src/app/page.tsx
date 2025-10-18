"use client"

import { Badge } from "@/src/components/ui/badge"
import {
  Shield,
  MapPin,
  QrCode,
  CheckCircle,
} from "lucide-react"
import { useEffect, useRef} from "react"

export default function VerdantisLanding() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("animate-on-scroll")
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <section id="solution" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-on-scroll">
            <Badge className="bg-primary/10 text-primary border-primary/20">Passo a Passo</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">Como a Verdantis funciona</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Linha do tempo simples: do cadastro ao acesso ao mercado global
            </p>
          </div>
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2 hidden lg:block"></div>

            <div className="grid lg:grid-cols-4 gap-8">
              <div className="relative text-center animate-on-scroll">
                <div className="relative z-10 bg-background">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 hover-glow">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Cadastrar Propriedade</h3>
                  <p className="text-sm text-muted-foreground">
                    Selecione e mapeie sua propriedade com precisão Oracle Spatial
                  </p>
                </div>
              </div>

              <div className="relative text-center animate-on-scroll animate-delay-100">
                <div className="relative z-10 bg-background">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 hover-glow">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Registrar Produção</h3>
                  <p className="text-sm text-muted-foreground">
                    Registro seguro em blockchain com Hyperledger Fabric
                  </p>
                </div>
              </div>

              <div className="relative text-center animate-on-scroll animate-delay-200">
                <div className="relative z-10 bg-background">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 hover-glow">
                    <QrCode className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Gerar QR Code</h3>
                  <p className="text-sm text-muted-foreground">
                    Identificador único para toda a jornada do produto
                  </p>
                </div>
              </div>

              <div className="relative text-center animate-on-scroll animate-delay-300">
                <div className="relative z-10 bg-background">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 hover-glow">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Validação dos Compradores</h3>
                  <p className="text-sm text-muted-foreground">
                    Verificação instantânea de sustentabilidade para mercados globais
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
