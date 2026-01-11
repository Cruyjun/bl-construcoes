import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Ruler, Hammer, HardHat, Building2, Home as HomeIcon } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <SEO />
      {/* HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-slate-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/GN8mOCNqfngu.jpg" 
            alt="Construção Civil em curso" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
          
          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute inset-0 border-l border-white/5 ml-12 md:ml-32"></div>
          <div className="absolute inset-0 border-r border-white/5 mr-12 md:mr-32"></div>
        </div>

        <div className="container relative z-10 pt-20">
          <div className="max-w-3xl animate-in slide-in-from-left-10 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              Disponível para novos projetos
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 tracking-tight">
              CONSTRUÇÃO <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">COM RIGOR</span> <br/>
              PROFISSIONAL
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed font-light border-l-2 border-secondary pl-6">
              Especialistas em moradias, remodelações e reabilitação. Transformamos a sua visão em obra feita com cumprimento rigoroso de prazos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contactos">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold text-base px-8 py-6 rounded-none h-auto group">
                  SOLICITAR ORÇAMENTO
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:text-white font-medium text-base px-8 py-6 rounded-none h-auto backdrop-blur-sm">
                  VER PORTEFÓLIO
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-slate-950/50 backdrop-blur-md py-6 hidden md:block">
          <div className="container flex justify-between text-white/80">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-heading font-bold text-white">15+</span>
              <span className="text-xs uppercase tracking-wider leading-tight">Anos de<br/>Experiência</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-heading font-bold text-white">200+</span>
              <span className="text-xs uppercase tracking-wider leading-tight">Projetos<br/>Concluídos</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-heading font-bold text-white">100%</span>
              <span className="text-xs uppercase tracking-wider leading-tight">Compromisso<br/>com Prazos</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 md:py-32 bg-background relative">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">O Que Fazemos</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">Nossos Serviços</h2>
            </div>
            <p className="text-muted-foreground max-w-md text-right md:text-left">
              Soluções completas de engenharia e construção, desde a fundação até aos acabamentos finais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group border border-border bg-white hover:border-secondary transition-colors duration-300 relative overflow-hidden">
              <div className="h-2 bg-primary w-full absolute top-0 left-0 group-hover:bg-secondary transition-colors"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
                  <HomeIcon className="h-7 w-7 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Construção de Moradias</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Construção chave-na-mão de moradias unifamiliares. Acompanhamento desde o projeto de arquitetura até à entrega da chave.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-secondary" /> Estrutura e Alvenarias
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-secondary" /> Acabamentos Premium
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-secondary" /> Eficiência Energética
                  </li>
                </ul>
                <Link href="/servicos" className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-wide hover:text-secondary transition-colors">
                  Saber Mais <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group border border-border bg-white hover:border-secondary transition-colors duration-300 relative overflow-hidden">
              <div className="h-2 bg-primary w-full absolute top-0 left-0 group-hover:bg-secondary transition-colors"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
                  <Hammer className="h-7 w-7 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Remodelações</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Renovação completa de interiores para apartamentos e moradias. Cozinhas, casas de banho e espaços open-space modernos.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-secondary" /> Demolições Controladas
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-secondary" /> Redes Técnicas Novas
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-secondary" /> Carpintaria à Medida
                  </li>
                </ul>
                <Link href="/servicos" className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-wide hover:text-secondary transition-colors">
                  Saber Mais <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group border border-border bg-white hover:border-secondary transition-colors duration-300 relative overflow-hidden">
              <div className="h-2 bg-primary w-full absolute top-0 left-0 group-hover:bg-secondary transition-colors"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
                  <Building2 className="h-7 w-7 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Reabilitação</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Recuperação de edifícios antigos e fachadas. Respeito pela traça original com introdução de conforto moderno.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-secondary" /> Reforço Estrutural
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-secondary" /> Tratamento de Fachadas
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-secondary" /> Impermeabilizações
                  </li>
                </ul>
                <Link href="/servicos" className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-wide hover:text-secondary transition-colors">
                  Saber Mais <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 bg-slate-50 border-y border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Portfólio</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">Obras Recentes</h2>
            </div>
            <Link href="/portfolio">
              <Button variant="outline" className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-white rounded-none">
                VER TODOS OS PROJETOS
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="group relative h-[400px] overflow-hidden cursor-pointer">
              <img 
                src="/images/4v18uZuDY6wW.jpeg" 
                alt="Moradia Moderna" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-2 block">Construção Nova</span>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Moradia T4 em Cascais</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 max-w-md">
                  Projeto chave-na-mão com acabamentos de luxo e piscina infinita.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative h-[400px] overflow-hidden cursor-pointer">
              <img 
                src="/images/JmNYl3ewOGb6.jpg" 
                alt="Remodelação Interior" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-2 block">Remodelação</span>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Apartamento Chiado</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 max-w-md">
                  Renovação total mantendo traça antiga, com novos sistemas de climatização.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 md:hidden">
            <Link href="/portfolio">
              <Button className="w-full border-primary text-primary hover:bg-primary hover:text-white rounded-none" variant="outline">
                VER TODOS OS PROJETOS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">O Que Dizem os Clientes</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Avaliações Reais</h2>
            <p className="text-muted-foreground">A satisfação dos nossos clientes é o nosso melhor cartão de visita. Veja o que dizem sobre o nosso trabalho.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ricardo Silva", role: "Proprietário, Cascais", text: "Profissionalismo exemplar. A obra foi entregue antes do prazo e o orçamento foi cumprido ao cêntimo. Recomendo vivamente a B&L para quem procura rigor.", stars: 5 },
              { name: "Ana Martins", role: "Arquiteta", text: "Como arquiteta, é difícil encontrar parceiros que respeitem o projeto com tanto detalhe. A execução técnica foi impecável e a comunicação fluida.", stars: 5 },
              { name: "Carlos Ferreira", role: "Gestor de Condomínio", text: "A reabilitação da fachada do nosso prédio ficou excelente. Equipa muito educada, limpa e organizada. Valorizaram imenso o nosso património.", stars: 5 }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-slate-50 p-8 border border-border relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-secondary fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>
                <p className="text-slate-600 italic mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-heading font-bold text-primary">{testimonial.name}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">{testimonial.role}</p>
                </div>
                <div className="absolute top-8 right-8 text-slate-200">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM FEED SIMULATION */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>
                @blconstrucoes
              </h2>
              <p className="text-sm text-muted-foreground">Acompanhe o dia-a-dia das nossas obras.</p>
            </div>
            <a href="https://www.instagram.com/b.lconstrucao/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-secondary hover:underline">Seguir no Instagram</a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              "/images/BHA35QvTslUS.jpg",
              "/images/UmVTgTSqaOnR.jpg",
              "/images/24v5cc2SU9md.jpg",
              "/images/3jVAZGk019Vr.jpg"
            ].map((src, idx) => (
              <div key={idx} className="aspect-square relative group overflow-hidden cursor-pointer">
                <img src={src} alt="Instagram post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-4">
                  <span className="flex items-center gap-1 font-bold"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" /></svg> {40 + idx * 12}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Porquê a B&L</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Construímos Confiança, Não Apenas Paredes</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Sabemos que uma obra é um investimento importante. A nossa equipa garante transparência total, orçamentos detalhados sem surpresas e um acompanhamento técnico permanente.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                    <Ruler className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading mb-1">Rigor Técnico</h4>
                    <p className="text-slate-400 text-sm">Cumprimento estrito das normas de construção e projetos de engenharia.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                    <HardHat className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading mb-1">Equipa Própria</h4>
                    <p className="text-slate-400 text-sm">Profissionais qualificados e segurados, sem subcontratações excessivas.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="border-4 border-white/10 p-2">
                <img src="/images/7Qsm0S1n4oQH.jpg" alt="Equipa em obra" className="w-full grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary p-6 text-white max-w-xs hidden md:block shadow-xl">
                <p className="font-heading font-bold text-2xl">"A nossa prioridade é a qualidade final e a satisfação do cliente."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="bg-slate-100 border border-border p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Tem um projeto em mente?</h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Orçamento gratuito e sem compromisso. Analisamos o seu projeto e apresentamos a melhor solução técnica e financeira.
              </p>
              <p className="text-sm text-slate-500 mt-4 italic">
                Custo de deslocação: 25 euros
              </p>
            </div>
            
            <div className="relative z-10 shrink-0">
              <Link href="/contactos">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 py-8 rounded-none shadow-lg">
                  SOLICITAR ORÇAMENTO AGORA
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
