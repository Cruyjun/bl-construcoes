import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";

// Mock data for projects
const projects = [
  {
    id: 1,
    title: "Moradia em Palmela",
    category: "construcao",
    location: "Palmela",
    image: "/images/4v18uZuDY6wW.jpeg",
    description: "Construção de moradia unifamiliar com acabamentos de qualidade."
  },
  {
    id: 2,
    title: "Pintura de Prédio - Margem Sul",
    category: "reabilitacao",
    location: "Margem Sul",
    image: "/images/JmNYl3ewOGb6.jpg",
    description: "Pintura e impermeabilização de fachada de prédio para empresa de condomínio."
  },
  {
    id: 3,
    title: "Reabilitação de Fachada",
    category: "reabilitacao",
    location: "Palmela",
    image: "/images/ymWYoJcdNWjH.jpg",
    description: "Reabilitação completa de fachada com pintura e reparações estruturais."
  },
  {
    id: 4,
    title: "Remodelação de Apartamento",
    category: "remodelacao",
    location: "Margem Sul",
    image: "/images/rs4n4MMtS5vv.jpg",
    description: "Remodelação completa de apartamento com novo layout e acabamentos."
  },
  {
    id: 5,
    title: "Moradia em Palmela",
    category: "construcao",
    location: "Palmela",
    image: "/images/L6nJ4cMqK6bn.jpg",
    description: "Construção de moradia com acabamentos de qualidade e eficiência energética."
  },
  {
    id: 6,
    title: "Pintura de Fachada - Prédio",
    category: "reabilitacao",
    location: "Margem Sul",
    image: "/images/s6F19ItUU0jm.jpg",
    description: "Pintura de fachada de prédio com acabamento de qualidade."
  },
  {
    id: 7,
    title: "Reabilitação de Prédio",
    category: "reabilitacao",
    location: "Palmela",
    image: "/images/Ewqdmt1pBJfT.jpg",
    description: "Restauro e reabilitação de prédio com pintura e impermeabilização."
  },
  {
    id: 8,
    title: "Remodelação Interior",
    category: "remodelacao",
    location: "Margem Sul",
    image: "/images/7Qsm0S1n4oQH.jpg",
    description: "Renovação de espaço interior com materiais de qualidade."
  }
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "construcao", label: "Construção Nova" },
  { id: "remodelacao", label: "Remodelações" },
  { id: "reabilitacao", label: "Reabilitação" }
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
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Portfólio de Projetos</h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light border-l-2 border-secondary pl-6">
            Conheça as obras que realizámos com rigor técnico e qualidade de execução.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-background border-b border-border sticky top-24 z-40">
        <div className="container py-6">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 font-bold whitespace-nowrap transition-colors border-b-2 ${
                  filter === cat.id
                    ? "text-secondary border-secondary"
                    : "text-muted-foreground border-transparent hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 aspect-video bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link href="/contactos">
                      <a className="bg-secondary text-white px-6 py-3 font-bold flex items-center gap-2 hover:bg-secondary/90">
                        Ver Detalhes <ArrowRight className="h-4 w-4" />
                      </a>
                    </Link>
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 text-secondary" />
                  {project.location}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Tem um projeto em mente?</h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-8">
            Contacte-nos para discutir o seu projeto e receber uma estimativa gratuita.
          </p>
          <Link href="/contactos">
            <a className="inline-block bg-secondary hover:bg-secondary/90 text-white font-bold px-10 py-4 rounded-none transition-colors">
              SOLICITAR ORÇAMENTO
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
