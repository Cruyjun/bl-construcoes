import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { MapView } from "@/components/Map";

import SEO from "@/components/SEO";

export default function Contact() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success("Mensagem enviada com sucesso! Entraremos em contacto brevemente.");
    reset();
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="Contactos e Orçamentos" 
        description="Entre em contacto connosco para pedir um orçamento gratuito ou agendar uma visita técnica."
      />
      {/* Header */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="container relative z-10">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Fale Connosco</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Contactos</h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light border-l-2 border-secondary pl-6">
            Estamos prontos para ouvir o seu projeto. Peça um orçamento ou agende uma visita técnica.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info & Map */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">Informações</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-100 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Morada</h3>
                      <p className="text-muted-foreground text-sm">
                        Rua da Construção, 123<br />
                        1000-001 Lisboa<br />
                        Portugal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-100 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Telefone</h3>
                      <p className="text-muted-foreground text-sm">
                        +351 912 345 678<br />
                        <span className="text-xs text-slate-400">(Chamada para rede móvel nacional)</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-100 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Email</h3>
                      <p className="text-muted-foreground text-sm">
                        geral@blconstrucoes.pt<br />
                        orcamentos@blconstrucoes.pt
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-100 text-primary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Horário</h3>
                      <p className="text-muted-foreground text-sm">
                        Seg - Sex: 09:00 - 18:00<br />
                        Sáb: 09:00 - 13:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-[400px] w-full bg-slate-100 border border-border relative">
                <MapView 
                  className="w-full h-full"
                  onMapReady={(map: google.maps.Map) => {
                    const position = { lat: 38.7223, lng: -9.1393 }; // Lisbon coordinates
                    map.setCenter(position);
                    map.setZoom(14);
                    new google.maps.Marker({
                      position: position,
                      map: map,
                      title: "B&L Construções"
                    });
                  }}
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-slate-50 p-8 md:p-10 border border-border">
              <h2 className="text-2xl font-heading font-bold text-primary mb-2">Pedir Orçamento</h2>
              <p className="text-muted-foreground mb-8 text-sm">Preencha o formulário abaixo e entraremos em contacto no prazo máximo de 24h úteis.</p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wide">Nome *</label>
                    <Input {...register("name", { required: true })} placeholder="Seu nome completo" className="bg-white rounded-none border-slate-300 focus:border-secondary focus:ring-secondary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wide">Telefone *</label>
                    <Input {...register("phone", { required: true })} placeholder="Seu contacto telefónico" className="bg-white rounded-none border-slate-300 focus:border-secondary focus:ring-secondary" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wide">Email *</label>
                  <Input {...register("email", { required: true })} type="email" placeholder="seu.email@exemplo.com" className="bg-white rounded-none border-slate-300 focus:border-secondary focus:ring-secondary" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wide">Tipo de Obra *</label>
                  <Select onValueChange={(val) => register("type").onChange({ target: { value: val, name: "type" } })}>
                    <SelectTrigger className="bg-white rounded-none border-slate-300 focus:ring-secondary">
                      <SelectValue placeholder="Selecione o tipo de serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="construcao">Construção Nova</SelectItem>
                      <SelectItem value="remodelacao">Remodelação Interior</SelectItem>
                      <SelectItem value="reabilitacao">Reabilitação de Edifício</SelectItem>
                      <SelectItem value="comercial">Obra Comercial</SelectItem>
                      <SelectItem value="gestao">Gestão de Obra</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wide">Descrição do Projeto *</label>
                  <Textarea {...register("message", { required: true })} placeholder="Descreva brevemente o que pretende (localização, área aproximada, objetivos...)" className="bg-white rounded-none border-slate-300 focus:border-secondary focus:ring-secondary min-h-[120px]" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wide">Anexar Fotos/Plantas (Opcional)</label>
                  <Input type="file" className="bg-white rounded-none border-slate-300 cursor-pointer text-sm file:bg-slate-100 file:text-primary file:border-0 file:mr-4 file:py-2 file:px-4 file:font-bold hover:file:bg-slate-200" />
                  <p className="text-xs text-muted-foreground">Formatos aceites: PDF, JPG, PNG (Max 5MB)</p>
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-6 rounded-none text-base shadow-md transition-all hover:translate-y-[-2px]">
                  {isSubmitting ? "A enviar..." : "ENVIAR PEDIDO DE ORÇAMENTO"} <Send className="ml-2 h-4 w-4" />
                </Button>
                
                <p className="text-xs text-slate-400 text-center mt-4">
                  Ao submeter este formulário, concorda com a nossa política de privacidade e tratamento de dados para efeitos de contacto comercial.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
