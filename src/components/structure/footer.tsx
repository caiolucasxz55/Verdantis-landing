
import { Leaf } from "lucide-react"
import { Badge } from "@/src/components/ui/badge"


export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
 
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Verdantis</span>
              <Badge variant="secondary" className="text-xs">
                VITS
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Sistema de Rastreamento Visual de Informações para rastreabilidade agrícola sustentável e acesso ao mercado global.
            </p>
          </div>

   
          <div className="space-y-4">
            <h4 className="font-semibold">Challenge Oracle</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Equipe GreenCore</div>
              <div>Inovação Agrícola</div>
              <div>Rastreabilidade em Blockchain</div>
              <div>Certificação Sustentável</div>
            </div>
          </div>

       
          <div className="space-y-4">
            <h4 className="font-semibold">Membros da Equipe</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Caio Lucas Silva Gomes</div>
              <div>João Gabriel Fuchs Grecco</div>
              <div>Madjer Henrique A. Finamor</div>
            </div>
          </div>
        </div>

       
        <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Verdantis VITS. Challenge Oracle - Equipe GreenCore.</p>
        </div>
      </div>
    </footer>

  )
}