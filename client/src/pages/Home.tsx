import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Droplets,
  HardHat,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const services = [
  {
    title: "Reabilitação de Fachadas",
    description: "Reparação, pintura e proteção de fachadas para recuperar e valorizar o património.",
    image: "/images/reabilitacao-fachada.jpg",
    icon: Building2,
  },
  {
    title: "Impermeabilização",
    description: "Coberturas, terraços e zonas comuns protegidos contra infiltrações e humidade.",
    image: "/images/impermeabilizacao-cobertura.webp",
    icon: Droplets,
  },
  {
    title: "Pintura Profissional",
    description: "Preparação rigorosa e aplicação de soluções adequadas a interiores e exteriores.",
    image: "/images/20A5gGHotQmb.jpg",
    icon: Paintbrush,
  },
  {
    title: "Remodelações Interiores",
    description: "Gesso cartonado, tetos falsos, redes de águas e esgotos, e pavimentos.",
    image: "/images/remodelacao-interiores.jpg",
    icon: Wrench,
  },
  {
    title: "Trabalhos em Altura",
    description: "Acesso por rapel e andaimes para fachadas, coberturas e intervenções técnicas.",
    image: "/images/reabilitacao-rappel.jpg",
    icon: HardHat,
  },
];

const projects = [
  {
    title: "Reabilitação de fachadas",
    category: "Fachadas",
    location: "Área Metropolitana de Lisboa",
    image: "/images/reabilitacao-fachada.jpg",
  },
  {
    title: "Impermeabilização de coberturas",
    category: "Coberturas",
    location: "Margem Sul",
    image: "/images/impermeabilizacao-cobertura.webp",
  },
  {
    title: "Remodelação de interiores",
    category: "Interiores",
    location: "Grande Lisboa",
    image: "/images/remodelacao-apartamento.jpg",
  },
];

const process = [
  ["01", "Contacto", "Envie o seu pedido e, se possível, algumas fotografias."],
  ["02", "Visita técnica", "Analisamos o local, as patologias e o trabalho necessário."],
  ["03", "Proposta", "Receba um orçamento detalhado, claro e sem surpresas."],
  ["04", "Execução", "Planeamos a obra e acompanhamos cada fase com rigor."],
  ["05", "Entrega", "Verificamos o resultado e deixamos o espaço pronto."],
];

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <SEO />

      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,.98)_0%,rgba(15,23,42,.88)_42%,rgba(15,23,42,.25)_100%)] z-10" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container relative z-20 grid min-h-[590px] items-center gap-10 py-16 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-secondary/60 bg-primary/50 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              Reabilitação e remodelações na Grande Lisboa
            </div>
            <h1 className="mb-4 text-5xl font-heading font-bold leading-[1.02] tracking-tight text-white md:text-7xl">
              Reabilitação e
              <span className="mt-2 block text-secondary">Pintura Profissional</span>
            </h1>
            <p className="mb-3 text-lg font-semibold text-white md:text-xl">Lisboa · Setúbal · Margem Sul</p>
            <p className="mb-9 max-w-xl border-l-2 border-secondary pl-5 text-lg leading-relaxed text-slate-200 md:text-xl">
              Soluções completas para fachadas, impermeabilização, remodelações interiores e manutenção de edifícios.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contactos">
                <Button size="lg" className="h-auto rounded-none bg-secondary px-7 py-5 font-bold text-white hover:bg-secondary/90">
                  PEDIR ORÇAMENTO GRATUITO
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contactos">
                <Button size="lg" variant="outline" className="h-auto rounded-none border-white/60 bg-transparent px-7 py-5 font-bold text-white hover:bg-white hover:text-primary">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  MARCAR VISITA TÉCNICA
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden min-h-[440px] lg:block">
            <img src="/images/reabilitacao-rappel.jpg" alt="Trabalhos em altura por rapel numa fachada" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
              <div className="border border-white/30 bg-primary/80 p-4 backdrop-blur-sm">
                <HardHat className="mb-2 h-6 w-6 text-secondary" />
                <p className="text-sm font-bold">Equipa especializada</p>
              </div>
              <div className="border border-white/30 bg-primary/80 p-4 backdrop-blur-sm">
                <Ruler className="mb-2 h-6 w-6 text-secondary" />
                <p className="text-sm font-bold">Orçamentos detalhados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-border bg-primary text-white">
        <div className="container grid grid-cols-2 divide-x divide-white/10 py-6 md:grid-cols-4">
          {[
            [ShieldCheck, "Alvará nº 121659", "PAR"],
            [Users, "Equipa própria", "Profissionais preparados"],
            [ClipboardList, "Orçamentos detalhados", "Sem surpresas"],
            [Award, "Garantia de trabalho", "Compromisso até à entrega"],
          ].map(([Icon, title, subtitle]) => (
            <div key={title as string} className="flex items-center gap-3 px-4 first:pl-0 last:pr-0 md:px-6">
              <Icon className="h-8 w-8 shrink-0 text-secondary" />
              <div>
                <p className="text-sm font-bold">{title as string}</p>
                <p className="text-xs text-slate-300">{subtitle as string}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background py-20 md:py-28">
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="mb-2 block text-sm font-bold uppercase tracking-[0.2em] text-secondary">O que fazemos</span>
              <h2 className="text-4xl font-heading font-bold text-primary md:text-5xl">Os nossos serviços</h2>
            </div>
              <p className="max-w-xl text-base text-muted-foreground md:text-right">Soluções completas para particulares, empresas e condomínios.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map(({ title, description, image, icon: Icon }) => (
              <article key={title} className="group overflow-hidden border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-xl">
                <div className="relative h-40 overflow-hidden">
                  <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <Icon className="absolute bottom-3 left-4 h-7 w-7 text-white" />
                </div>
                <div className="p-5">
                  <h3 className="mb-3 min-h-12 text-lg font-heading font-bold text-primary">{title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  <Link href="/servicos" className="inline-flex items-center gap-1 text-sm font-bold text-secondary hover:gap-2">
                    Saber mais <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="border-y border-border bg-muted">
        <div className="container grid grid-cols-2 divide-x divide-border py-8 md:grid-cols-4">
          {[
            [CalendarDays, "Desde", "2019"],
            [Users, "Mais de", "10 colaboradores"],
            [HardHat, "Mais de", "200 obras realizadas"],
            [Award, "Foco em", "Qualidade e rigor"],
          ].map(([Icon, label, value]) => (
            <div key={value as string} className="flex items-center justify-center gap-3 px-3 first:pl-0 last:pr-0 md:px-6">
              <Icon className="hidden h-9 w-9 text-primary sm:block" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label as string}</p>
                <p className="text-lg font-heading font-bold text-primary md:text-xl">{value as string}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="mb-2 block text-sm font-bold uppercase tracking-[0.2em] text-secondary">Portefólio</span>
              <h2 className="text-4xl font-heading font-bold text-primary md:text-5xl">Obras realizadas</h2>
              <p className="mt-3 text-muted-foreground">Veja alguns dos trabalhos que executamos para os nossos clientes.</p>
            </div>
            <a href="https://www.instagram.com/blconstrucoes.oficial/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 self-start border border-secondary px-5 py-3 text-sm font-bold text-primary hover:bg-secondary hover:text-white md:self-auto">
              VER MAIS OBRAS <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="group overflow-hidden border border-border bg-white">
                <div className="relative h-56 overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute bottom-3 left-3 bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">{project.category}</span>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-xl font-heading font-bold text-primary">{project.title}</h3>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground"><Building2 className="h-4 w-4 text-secondary" /> {project.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-primary py-20 text-white md:py-24">
        <div className="container">
          <div className="mb-12 max-w-3xl">
            <span className="mb-2 block text-sm font-bold uppercase tracking-[0.2em] text-secondary">Porquê escolher a B&L?</span>
            <h2 className="text-4xl font-heading font-bold text-white md:text-5xl">Confiança para contratar com tranquilidade.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-5">
            {[
              [Award, "Qualidade e rigor", "Execução pensada para durar."],
              [Users, "Equipa especializada", "Profissionais preparados."],
              [ShieldCheck, "Obra acompanhada", "Contacto próximo e claro."],
              [ClipboardList, "Orçamentos detalhados", "Sem surpresas no processo."],
              [Clock3, "Compromisso", "Respeito pelo planeamento."],
            ].map(([Icon, title, description]) => (
              <div key={title as string} className="border-l border-white/20 pl-5">
                <Icon className="mb-4 h-8 w-8 text-secondary" />
                <h3 className="mb-2 font-heading text-lg font-bold text-white">{title as string}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{description as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCE BRANDS */}
      <section className="border-b border-border bg-white py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <span className="mb-2 block text-sm font-bold uppercase tracking-[0.2em] text-secondary">Materiais e sistemas</span>
              <h2 className="text-3xl font-heading font-bold text-primary md:text-4xl">Trabalhamos com marcas de referência</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Selecionamos produtos e sistemas adequados a cada fachada, cobertura e superfície para garantir uma intervenção técnica e duradoura.
              </p>
            </div>
            <div className="grid w-full grid-cols-3 gap-3 lg:max-w-xl">
              <div className="flex min-h-24 items-center justify-center border border-border bg-slate-50 px-4 py-3">
                <img src="/images/logo-sika.png" alt="Sika" className="max-h-20 w-full object-contain" />
              </div>
              <div className="flex min-h-24 items-center justify-center border border-border bg-slate-50 px-4 py-3">
                <img src="/images/logo-cin.png" alt="CIN" className="max-h-20 w-full object-contain" />
              </div>
              <div className="flex min-h-24 items-center justify-center border border-border bg-slate-50 px-4 py-3">
                <img src="/images/logo-barbot.gif" alt="Barbot" className="max-h-20 w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-muted py-20 md:py-24">
        <div className="container">
          <div className="mb-12">
            <span className="mb-2 block text-sm font-bold uppercase tracking-[0.2em] text-secondary">Como trabalhamos</span>
            <h2 className="text-4xl font-heading font-bold text-primary md:text-5xl">Um processo claro do início ao fim</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-5">
            {process.map(([number, title, description]) => (
              <div key={number} className="relative border-t-2 border-primary pt-5">
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-secondary text-sm font-bold text-primary">{number}</span>
                <h3 className="mb-2 font-heading text-xl font-bold text-primary">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 md:py-24">
        <div className="container">
          <div className="relative overflow-hidden bg-secondary p-8 text-white md:p-14">
            <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-white/80">Pedir orçamento</p>
                <h2 className="mb-4 text-3xl font-heading font-bold md:text-5xl">Vamos falar sobre a sua obra?</h2>
                <p className="text-lg text-white/90">Envie-nos os detalhes do seu projeto. Analisamos o trabalho e entramos em contacto com a melhor solução.</p>
                <p className="mt-4 text-sm text-white/80">Visita técnica: custo de deslocação de 25€, reembolsável se contratar.</p>
              </div>
              <Link href="/contactos" className="shrink-0">
                <Button size="lg" className="h-auto rounded-none bg-primary px-8 py-5 text-base font-bold text-white hover:bg-primary/90">
                  PEDIR ORÇAMENTO <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
