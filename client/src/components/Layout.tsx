import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { useState, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contactos", href: "/contactos" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Top Bar - Technical Info */}
      <div className="bg-primary text-primary-foreground py-2 text-xs font-medium tracking-wide hidden md:block border-b border-white/10">
        <div className="container flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-3 w-3 text-secondary" /> 928 095 224
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-3 w-3 text-secondary" /> geral@blconstrucoes.com
            </span>
          </div>
          <div className="flex gap-4">
            <span className="opacity-80">Alvará PAR: 119253</span>
            <span className="text-secondary font-bold">ORÇAMENTOS GRATUITOS</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-0 group">
              <img src="/images/logo.png" alt="B&L Construções" className="h-20 transition-transform group-hover:scale-105" style={{width: '200px', height: '135px'}} />
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-secondary uppercase tracking-wide relative py-1",
                    location === item.href
                      ? "text-primary font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-secondary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contactos">
              <Button variant="default" className="bg-secondary hover:bg-secondary/90 text-white font-bold rounded-none border-l-4 border-primary/20 shadow-sm">
                SOLICITAR ORÇAMENTO
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background absolute w-full left-0 shadow-lg animate-in slide-in-from-top-5">
            <div className="container py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={cn(
                      "text-base font-medium py-2 border-l-2 pl-4 transition-all",
                      location === item.href
                        ? "border-secondary text-primary bg-muted/50"
                        : "border-transparent text-muted-foreground hover:text-primary hover:border-border"
                    )}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <div className="pt-4 border-t border-border mt-2">
                <Link href="/contactos">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-none">
                    SOLICITAR ORÇAMENTO
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground border-t-4 border-secondary">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-0">
                <img src="/images/logo.png" alt="B&L Construções" className="h-16" />
              </div>
              <p className="text-slate-300 text-sm leading-relaxed max-w-xs font-light">
                Excelência em construção civil, remodelações e reabilitação. Transformamos projetos em realidade com rigor técnico e compromisso.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="bg-white/10 p-2 hover:bg-secondary transition-colors text-white">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="bg-white/10 p-2 hover:bg-secondary transition-colors text-white">
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-6 text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary inline-block"></span> NAVEGAÇÃO
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li><Link href="/"><a className="hover:text-secondary transition-colors">Início</a></Link></li>
                <li><Link href="/servicos"><a className="hover:text-secondary transition-colors">Serviços</a></Link></li>
                <li><Link href="/sobre"><a className="hover:text-secondary transition-colors">Sobre Nós</a></Link></li>
                <li><Link href="/contactos"><a className="hover:text-secondary transition-colors">Contactos</a></Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-6 text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary inline-block"></span> SERVIÇOS
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>Construção de Moradias</li>
                <li>Remodelação de Interiores</li>
                <li>Reabilitação de Edifícios</li>
                <li>Obras Comerciais</li>
                <li>Gestão de Obra</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-6 text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary inline-block"></span> CONTACTOS
              </h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary shrink-0" />
                  <span>Rua das Orquídeas, 2950-807<br />Quinta do Anjo, Portugal</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary shrink-0" />
                  <span>928 095 224</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-secondary shrink-0" />
                  <span>geral@blconstrucoes.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-slate-950 py-6">
          <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} B&L Construções. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos e Condições</a>
              <a href="#" className="hover:text-white transition-colors">Livro de Reclamações</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/351928095224"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label="Contactar via WhatsApp (928 095 224)"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </a>
    </div>
  );
}
