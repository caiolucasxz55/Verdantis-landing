"use client"

import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { Leaf, Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-background">
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 left-0 right-0 z-50 animate-fade-in-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center animate-pulse-glow">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Verdantis</span>
              <Badge
                variant="secondary"
                className="text-xs animate-scale-in animate-delay-200 hidden sm:inline-flex"
              >
                VITS
              </Badge>
            </div>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#solution"
                className="text-sm font-medium text-sidebar-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Solução
              </a>
              <a
                href="#examples"
                className="text-sm font-medium text-sidebar-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Exemplos
              </a>
              <a
                href="#impact"
                className="text-sm font-medium text-sidebar-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Impacto
              </a>
              <Button
                variant="outline"
                size="sm"
                className="border-black/40 btn-animate bg-transparent dark:border-black/80 cursor-pointer"
              >
                Entrar
              </Button>
              <Button size="sm" className="btn-animate cursor-pointer">
                Começar
              </Button>
            </nav>

            {/* Botão Hamburguer Mobile */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-accent/20 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

      
        {mobileMenuOpen && (
          <div className="bg-transparent/50 md:hidden border-t border-border/40 backdrop-blur animate-fade-in-down">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <a
                href="#solution"
                className="text-sm font-medium text-sidebar-foreground hover:text-primary transition"
              >
                Solução
              </a>
              <a
                href="#examples"
                className="text-sm font-medium text-sidebar-foreground hover:text-primary transition"
              >
                Exemplos
              </a>
              <a
                href="#impact"
                className="text-sm font-medium text-sidebar-foreground hover:text-primary transition"
              >
                Impacto
              </a>
              <Button
                variant="outline"
                size="sm"
                className="border-black/40 bg-transparent dark:border-black/80 cursor-pointer w-32"
              >
                Entrar
              </Button>
              <Button size="sm" className="cursor-pointer w-32">
                Começar
              </Button>
            </nav>
          </div>
        )}
      </header>
    </div>
  )
}
