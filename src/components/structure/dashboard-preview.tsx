"use client"

import { Badge } from "@/components/ui/badge"
import {CheckCircle,ChevronLeft,ChevronRight,} from "lucide-react"
import { useEffect, useRef, useState } from "react"


export default function DashboardPreview() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const dashboardImages = [
        {
            src: "/agricultural-dashboard-analytics.jpg",
            title: "Smart Insights Dashboard",
            description: "Real-time productivity metrics and performance analytics",
        },
        {
            src: "/farm-management-reports.jpg",
            title: "Management Reports",
            description: "Comprehensive cost analysis and resource optimization",
        },
        {
            src: "/sustainability-tracking-dashboard.jpg",
            title: "Sustainability Tracking",
            description: "Environmental indicators and certification monitoring",
        },
        {
            src: "/traceability-blockchain-interface.jpg",
            title: "Blockchain Traceability",
            description: "Complete product journey from farm to market",
        },
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % dashboardImages.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + dashboardImages.length) % dashboardImages.length)
    }


    return (
      
        <section
            id="examples"
            className="py-20 bg-gradient-to-b from-muted/30 to-background"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Texto lado esquerdo */}
                    <div className="space-y-8 animate-on-scroll">
                        <div className="space-y-6">
                            <Badge className="bg-primary/10 text-primary border-primary/20">
                                Painel Inteligente
                            </Badge>
                            <h2 className="text-4xl sm:text-5xl font-bold text-balance">
                                Insights inteligentes para{" "}
                                <span className="text-primary">uma agricultura mais eficiente</span>
                            </h2>
                            <p className="text-xl text-muted-foreground text-pretty">
                                Dashboards interativos para monitorar produtividade, métricas de
                                sustentabilidade e prontidão para exportação em tempo real.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-primary" />
                                <span>Análises de produção em tempo real</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-primary" />
                                <span>Acompanhamento da conformidade sustentável</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-primary" />
                                <span>Indicadores de prontidão para exportação</span>
                            </div>
                        </div>
                    </div>

                   
                    <div className="relative animate-on-scroll animate-delay-200">
                        <div className="relative overflow-hidden rounded-2xl bg-card border border-border/20 shadow-2xl">
                        
                            <div className="relative h-[400px] md:h-[500px]">
                                {dashboardImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide
                                                ? "opacity-100 translate-x-0"
                                                : index < currentSlide
                                                    ? "opacity-0 -translate-x-full"
                                                    : "opacity-0 translate-x-full"
                                            }`}
                                    >
                                        <img
                                            src={image.src || "/placeholder.svg"}
                                            alt={image.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Gradiente overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                        {/* Texto sobreposto */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <h3 className="text-3xl font-bold mb-2">{image.title}</h3>
                                            <p className="text-white/90 text-lg">{image.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                      
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/15 backdrop-blur-sm border border-black/20 flex items-center justify-center text-white hover:bg-black/30 transition-all duration-300 hover:scale-110"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/15 backdrop-blur-sm border border-black/20 flex items-center justify-center text-white hover:bg-black/30 transition-all duration-300 hover:scale-110"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>

                    
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                {dashboardImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`h-2 w-6 rounded-full transition-all duration-300 ${index === currentSlide
                                                ? "bg-white shadow-md"
                                                : "bg-white/40 hover:bg-white/60"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     
    )
}
