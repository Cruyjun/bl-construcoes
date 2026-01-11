import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";

// Mock data for projects
const projects = [
  {
    id: 1,
    title: "Moradia T4 em Cascais",
    category: "construcao",
    location: "Cascais, Lisboa",
    image: "/images/4v18uZuDY6wW.jpeg",
    description: "Construção de raiz de moradia unifamiliar com piscina e acabamentos de luxo."
  },
  {
    id: 2,
    title: "Apartamento Chiado",
    category: "remodelacao",
    location: "Chiado, Lisboa",
    image: "/images/JmNYl3ewOGb6.jpg",
    description: "Remodelação integral de apartamento em edifício histórico, mantendo traça original."
  },
  {
    id: 3,
    title: "Edifício Baixa Pombalina",
    category: "reabilitacao",
    location: "Baixa, Lisboa",
    image: "/images/ymWYoJcdNWjH.jpg",
    description: "Reabilitação de fachada e áreas comuns de edifício do século XVIII."
  },
  {
    id: 4,
    title: "Escritórios Tech Hub",
    category: "comercial",
    location: "Parque das Nações",
    image: "/images/rs4n4MMtS5vv.jpg",
    description: "Adaptação de espaço open-space para escritórios de empresa tecnológica."
  },
  {
    id: 5,
    title: "Moradia Moderna Sintra",
    category: "construcao",
    location: "Sintra",
    image: "/images/L6nJ4cMqK6bn.jpg",
    description: "Projeto contemporâneo integrado na paisagem natural da serra."
  },
  {
    id: 6,
    title: "Loja Retail Park",
    category: "comercial",
    location: "Alfragide",
    image: "/images/s6F19ItUU0jm.jpg",
    description: "Construção de loja de grande dimensão com estrutura metálica."
  },
  {
    id: 7,
    title: "Reabilitação Palacete",
    category: "reabilitacao",
    location: "Lapa, Lisboa",
    image: "/images/Ewqdmt1pBJfT.jpg",
    description: "Restauro minucioso de elementos decorativos e reforço estrutural."
  },
  {
    id: 8,
    title: "Cozinha Minimalista",
    category: "remodelacao",
    location: "Oeiras",
    image: "/images/7Qsm0S1n4oQH.jpg",
    description: "Renovação de cozinha com ilha central e materiais premium."
  }
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "construcao", label: "Construção Nova" },
  { id: "remodelacao", label: "Remodelações" },
  { id: "reabilitacao", label: "Reabilitação" },
  { id: "comercial", label: "Comercial" }
];

import SEO from "@/components/SEO";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="flex flex-col">
      <SEO 
        title="Portfólio de Obras" 
        description="Veja a nossa galeria de projetos realizados: moradias, apartamentos remodelados e edifícios reabilitados."
      />
      {/* Header */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="container relative z-10">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Nosso Trabalho</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Portfólio</h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light border-l-2 border-secondary pl-6">
            Uma seleção dos nossos projetos mais recentes, demonstrando a nossa versatilidade e qualidade de execução.
          </p>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-16 bg-background min-h-screen">
        <div className="container">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 text-sm font-bold uppercase tracking-wide transition-all border ${
                  filter === cat.id
                    ? "bg-primary text-white border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-white border border-border hover:border-secondary transition-all duration-300 flex flex-col h-full animate-in fade-in zoom-in-95 duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href="/contactos">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-none">
                        PEDIR ORÇAMENTO SIMILAR
                      </Button>
                    </Link>
                  </div>
                  <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    {categories.find(c => c.id === project.category)?.label}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium uppercase tracking-wide mb-3">
                    <MapPin className="h-3 w-3" /> {project.location}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                      Ver Detalhes <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p>Nenhum projeto encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-100 border-t border-border">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Gostou do que viu?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Cada projeto é único, mas o nosso compromisso com a qualidade é constante. Vamos discutir o seu projeto?
          </p>
          <Link href="/contactos">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-6 rounded-none">
              FALAR COM UM ENGENHEIRO
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
