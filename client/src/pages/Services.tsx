import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, HardHat, Building2, Paintbrush, CloudRain, ClipboardList, Wrench } from "lucide-react";
import { Link } from "wouter";

import SEO from "@/components/SEO";

export default function Services() {
  const services = [
    {
      id: "reabilitacao-edificios",
      title: "Reabilitação de Edifícios",
      icon: <Building2 className="h-10 w-10" />,
      description: "Intervenções de reabilitação para edifícios e condomínios, com planeamento, execução e acompanhamento próximo em todas as fases.",
      features: [
        "Diagnóstico e planeamento da intervenção",
        "Reabilitação de fachadas e zonas comuns",
        "Coordenação de trabalhos e equipas",
        "Acompanhamento semanal",
        "Execução com equipa própria"
      ],
      image: "/images/reabilitacao-edificios.png"
    },
    {
      id: "fachadas",
      title: "Fachadas, Rapel e Andaimes",
      icon: <HardHat className="h-10 w-10" />,
      description: "Reparamos e valorizamos fachadas com acesso por rapel ou andaimes, escolhendo o método mais seguro e adequado a cada edifício.",
      features: [
        "Reparação de fissuras e rebocos",
        "Pintura e acabamentos exteriores",
        "Aplicação de capoto e isolamento",
        "Trabalhos em altura por rapel",
        "Montagem e utilização de andaimes"
      ],
      image: "/images/reabilitacao-fachada.jpg"
    },
    {
      id: "impermeabilizacao",
      title: "Impermeabilização e Telhados",
      icon: <CloudRain className="h-10 w-10" />,
      description: "Protegemos coberturas e telhados contra infiltrações, com soluções de impermeabilização e manutenção das águas pluviais.",
      features: [
        "Impermeabilização de telhados e coberturas",
        "Reparação e substituição de caleiras",
        "Colocação de tubos de queda",
        "Prevenção e correção de infiltrações",
        "Soluções adequadas a cada cobertura"
      ],
      image: "/images/impermeabilizacao-cobertura.webp"
    },
    {
      id: "pintura-revestimentos",
      title: "Pintura e Revestimentos",
      icon: <Paintbrush className="h-10 w-10" />,
      description: "Damos nova vida a interiores e exteriores com preparação cuidada, pintura profissional e materiais adequados a cada superfície.",
      features: [
        "Preparação e tratamento de superfícies",
        "Pintura de fachadas e zonas comuns",
        "Acabamentos adequados a cada superfície",
        "Reparação de rebocos e acabamentos",
        "Limpeza e entrega cuidada"
      ],
      image: "/images/20A5gGHotQmb.jpg"
    },
    {
      id: "remodelacoes-interiores",
      title: "Remodelações Interiores",
      icon: <Wrench className="h-10 w-10" />,
      description: "Remodelamos interiores com uma execução organizada e cuidada, desde a preparação do espaço até aos acabamentos finais.",
      features: [
        "Pintura e preparação de superfícies",
        "Sistemas de gesso cartonado, divisórias e tetos falsos",
        "Redes de águas e esgotos",
        "Pavimentos vinílicos e flutuantes",
        "Coordenação dos acabamentos"
      ],
      image: "/images/remodelacao-interiores.jpg"
    },
    {
      id: "gestao-obra",
      title: "Gestão de Obra",
      icon: <ClipboardList className="h-10 w-10" />,
      description: "Coordenação integral da intervenção, garantindo controlo de custos, prazos, segurança e qualidade de execução.",
      features: [
        "Planeamento e cronograma de trabalhos",
        "Controlo orçamental",
        "Coordenação de equipas e parceiros",
        "Fiscalização de qualidade",
        "Relatórios de progresso regulares"
      ],
      image: "/images/20A5gGHotQmb.jpg"
    }
  ];

  return (
    <div className="flex flex-col">
      <SEO 
        title="Serviços de Reabilitação de Edifícios" 
        description="Reabilitação de edifícios, fachadas, impermeabilização de telhados e remodelações interiores com pintura, gesso cartonado, redes de águas e pavimentos na Grande Lisboa."
      />
      {/* Header Section */}
      <section className="bg-slate-900 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="container relative z-10">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">O Que Oferecemos</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Nossos Serviços</h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light border-l-2 border-secondary pl-6">
            Reabilitação de edifícios e remodelações interiores, com equipa própria, acompanhamento semanal e execução cuidada em cada fase — da pintura e do gesso cartonado às redes de águas e aos pavimentos.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container space-y-24">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative group">
                <div className="relative h-[300px] md:h-[400px] overflow-hidden bg-slate-200 flex items-center justify-center">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-100 text-primary rounded-sm">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">{service.title}</h2>
                </div>
                
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="bg-slate-50 p-6 border border-border mb-8">
                  <h3 className="font-bold text-primary mb-4 uppercase tracking-wide text-sm">O que incluímos:</h3>
                  <ul className="grid grid-cols-1 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href="/contactos">
                  <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-none px-8">
                    SOLICITAR ORÇAMENTO PARA ISTO
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-100 border-t border-border">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Como Trabalhamos</h2>
            <p className="text-muted-foreground">O nosso processo é transparente e focado na satisfação do cliente, desde o primeiro contacto até à entrega da obra.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Visita e Orçamento", desc: "Visitamos o local, analisamos as necessidades e apresentamos um orçamento detalhado e rigoroso." },
              { step: "02", title: "Planeamento", desc: "Definimos cronogramas, materiais e equipas para garantir que a obra decorre sem imprevistos." },
              { step: "03", title: "Execução", desc: "Realização dos trabalhos com equipa própria, supervisão constante e cumprimento das normas de segurança." },
              { step: "04", title: "Entrega", desc: "Limpeza final, vistoria conjunta e entrega da obra com garantia de qualidade." }
            ].map((item) => (
              <div key={item.step} className="bg-white p-8 border border-border relative group hover:border-secondary transition-colors">
                <span className="text-6xl font-heading font-bold text-slate-100 absolute top-4 right-4 group-hover:text-secondary/10 transition-colors">{item.step}</span>
                <h3 className="text-xl font-heading font-bold text-primary mb-4 relative z-10">{item.title}</h3>
                <p className="text-muted-foreground text-sm relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-2">Pronto para começar a sua obra?</h2>
            <p className="text-white/90">Fale connosco hoje e receba uma estimativa gratuita.</p>
          </div>
          <Link href="/contactos">
            <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-slate-100 font-bold px-8 py-6 rounded-none border-none">
              CONTACTAR AGORA <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
