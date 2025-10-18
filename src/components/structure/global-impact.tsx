
import { Badge } from "@/src/components/ui/badge"
import { Leaf, Globe, Shield } from "lucide-react"



export default function GlobalImpact() {
    
    return (
      
        <section id="impact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Texto principal */}
                    <div className="space-y-8 animate-on-scroll">
                        <div className="space-y-6">
                            <Badge className="bg-primary/10 text-primary border-primary/20">Impacto Global</Badge>
                            <h2 className="text-4xl sm:text-5xl font-bold text-balance">
                                Abra mercados globais com <span className="text-primary">certificação sustentável</span>
                            </h2>
                            <p className="text-xl text-muted-foreground text-pretty">
                                Cada produto rastreado, cada etapa transparente. O Brasil perde US$ 12 bilhões anuais em exportações devido à falta de rastreabilidade. A Verdantis muda isso.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-primary">US$ 12 bi</div>
                                <p className="text-sm text-muted-foreground">Perdas anuais em exportações evitadas</p>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-primary">100%</div>
                                <p className="text-sm text-muted-foreground">Rastreabilidade garantida</p>
                            </div>
                        </div>
                    </div>

                    {/* Cards com ícones */}
                    <div className="relative animate-on-scroll animate-delay-200">
                        <div className="relative z-10">
                            <div className="bg-card border border-border/20 rounded-2xl px-6 py-8  shadow-xl">
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4  ">
                                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Globe className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Acesso ao Mercado Global</h3>
                                            <p className="text-sm text-muted-foreground">Mercados premium da UE e EUA</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Leaf className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Prova de Sustentabilidade</h3>
                                            <p className="text-sm text-muted-foreground">Conformidade ambiental verificada</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Shield className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Segurança em Blockchain</h3>
                                            <p className="text-sm text-muted-foreground">Registros imutáveis e confiáveis</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
