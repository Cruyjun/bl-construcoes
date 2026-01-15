import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Users, Award, Clock, ShieldCheck } from "lucide-react";

import SEO from "@/components/SEO";

export default function About() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Sobre Nós - B&L Construções" 
        description="Conheça a história, a equipa e os valores da B&L Construções. Rigor, transparência e qualidade desde 2019."
      />
      {/* Header */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="container relative z-10">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Quem Somos</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Sobre a B&L Construções</h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light border-l-2 border-secondary pl-6">
            Mais do que construtores, somos parceiros na concretização dos seus projetos. Rigor, transparência e qualidade desde 2019.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Text Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">A Nossa História</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Fundada em 2019, a B&L Construções nasceu da vontade de profissionais experientes em construção civil de criar uma empresa que se diferenciasse pelo rigor técnico, transparência e cumprimento escrupuloso de prazos.
                </p>
                <p>
                  Com uma equipa de 10 colaboradores altamente qualificados, especializamo-nos em obras residenciais, remodelações e, particularmente, em pintura e reabilitação de fachadas de prédios para empresas de condomínio na Margem Sul.
                </p>
                <p>
                  Hoje, somos uma referência na região de Palmela e arredores, com um portfólio sólido de obras bem executadas e uma carteira de clientes fidelizados que são a nossa melhor publicidade.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 border-l-4 border-secondary">
                  <h3 className="font-heading font-bold text-primary text-lg mb-2">Missão</h3>
                  <p className="text-sm text-slate-600">Executar obras com excelência técnica, garantindo a satisfação total do cliente e a valorização do património edificado.</p>
                </div>
                <div className="bg-slate-50 p-6 border-l-4 border-primary">
                  <h3 className="font-heading font-bold text-primary text-lg mb-2">Visão</h3>
                  <p className="text-sm text-slate-600">Ser a empresa de referência em Portugal pela fiabilidade, inovação e sustentabilidade na construção civil.</p>
                </div>
              </div>
            </div>

            {/* Image/Stats */}
            <div className="lg:w-1/2 relative">
              <div className="relative z-10">
                <img 
                  src="/images/BHA35QvTslUS.jpg" 
                  alt="Equipa B&L em obra" 
                  className="w-full shadow-2xl border-8 border-white"
                />
                <div className="absolute -bottom-10 -left-10 bg-slate-900 p-8 text-white max-w-xs hidden md:block shadow-xl border-t-4 border-secondary">
                  <p className="font-heading font-bold text-xl italic">"Construímos relações duradouras baseadas na confiança e no trabalho bem feito."</p>
                </div>
              </div>
              
              {/* Decorative pattern */}
              <div className="absolute top-10 -right-10 w-full h-full border-2 border-slate-200 -z-0 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-100 border-y border-border">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Os Nossos Pilares</h2>
            <p className="text-muted-foreground">Valores inegociáveis que guiam cada projeto que abraçamos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-border hover:border-secondary transition-colors group">
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                <ShieldCheck className="h-7 w-7 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">Rigor e Transparência</h3>
              <p className="text-muted-foreground text-sm">Orçamentos detalhados, sem custos ocultos. O cliente sabe exatamente o que está a pagar e porquê.</p>
            </div>

            <div className="bg-white p-8 border border-border hover:border-secondary transition-colors group">
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                <Clock className="h-7 w-7 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">Cumprimento de Prazos</h3>
              <p className="text-muted-foreground text-sm">Planeamento realista e gestão eficiente. Sabemos que o tempo é dinheiro para os nossos clientes.</p>
            </div>

            <div className="bg-white p-8 border border-border hover:border-secondary transition-colors group">
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                <Award className="h-7 w-7 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">Qualidade de Execução</h3>
              <p className="text-muted-foreground text-sm">Não cortamos caminho nos materiais nem na mão-de-obra. O barato sai caro, e nós apostamos na durabilidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Stats Strip */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div>
              <div className="text-4xl font-heading font-bold text-secondary mb-2">5+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Anos de Mercado</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-secondary mb-2">10</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Colaboradores</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-secondary mb-2">200+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Obras Realizadas</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-secondary mb-2">100%</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Quer fazer parte da nossa história?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Confie o seu projeto a quem tem experiência e paixão pelo que faz.
          </p>
          <Link href="/contactos">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-10 py-6 rounded-none">
              SOLICITAR ORÇAMENTO
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
