import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { MapView } from "@/components/Map";
import { useState } from 'react';
import { trpc } from "@/lib/trpc";

import SEO from "@/components/SEO";

export default function Contact() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
  const [selectedType, setSelectedType] = useState("");
  const sendEmailMutation = trpc.contact.sendEmail.useMutation();

  const onSubmit = async (data: any) => {
    if (!selectedType) {
      toast.error("Por favor selecione o tipo de obra");
      return;
    }

    try {
      await sendEmailMutation.mutateAsync({
        name: data.name,
        phone: data.phone,
        email: data.email,
        service: selectedType,
        message: data.message,
      });
      
      toast.success("Orçamento solicitado com sucesso! Entraremos em contacto no prazo máximo de 24h úteis.");
      reset();
      setSelectedType("");
    } catch (error) {
      console.error('Erro:', error);
      toast.error("Erro ao enviar o formulário. Tente novamente.");
    }
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
                    <Phone className="h-6 w-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-1">Telefone</h3>
                      <a href="tel:928095224" className="text-muted-foreground hover:text-secondary transition-colors">
                        928 095 224
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-1">Email</h3>
                      <a href="mailto:orcamentos@blconstrucoes.com" className="text-muted-foreground hover:text-secondary transition-colors">
                        orcamentos@blconstrucoes.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-1">Sede</h3>
                      <p className="text-muted-foreground text-sm">
                        Rua das Orquídeas<br/>
                        2950-807 Quinta do Anjo<br/>
                        <span className="text-xs italic">Atendimento por agendamento</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-1">Alvará</h3>
                      <p className="text-muted-foreground text-sm">
                        PAR 119253
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border h-96">
                <MapView 
                  onMapReady={(map) => {
                    const marker = new google.maps.Marker({
                      position: { lat: 38.6547, lng: -8.9066 },
                      map: map,
                      title: "B&L Construções"
                    });
                  }}
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-bold text-primary mb-6">Solicitar Orçamento</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label className="text-sm font-bold text-primary mb-2 block">Nome *</label>
                      <Input 
                        {...register("name", { required: true })}
                        placeholder="Seu nome completo"
                        className="border-border"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-bold text-primary mb-2 block">Telefone *</label>
                      <Input 
                        {...register("phone", { required: true })}
                        placeholder="912 345 678"
                        className="border-border"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-bold text-primary mb-2 block">Email *</label>
                      <Input 
                        {...register("email", { required: true })}
                        placeholder="seu@email.com"
                        className="border-border"
                        type="email"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-bold text-primary mb-2 block">Tipo de Obra *</label>
                      <Select value={selectedType} onValueChange={setSelectedType}>
                        <SelectTrigger className="border-border">
                          <SelectValue placeholder="Selecione o tipo de obra" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="construcao-moradia">Construção de Moradia</SelectItem>
                          <SelectItem value="remodelacao-interior">Remodelação Interior</SelectItem>
                          <SelectItem value="reabilitacao-fachada">Reabilitação de Fachada</SelectItem>
                          <SelectItem value="reabilitacao-rappel">Reabilitação em Rappel</SelectItem>
                          <SelectItem value="gestao-obra">Gestão de Obra</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-bold text-primary mb-2 block">Descrição do Projeto *</label>
                      <Textarea 
                        {...register("message", { required: true })}
                        placeholder="Descreva o seu projeto, localização, dimensões e qualquer detalhe relevante..."
                        className="border-border min-h-32"
                      />
                    </div>

                    <div className="bg-slate-50 p-4 rounded border border-border">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-bold text-primary">Orçamento:</span> Gratuito<br/>
                        <span className="font-bold text-primary">Custo de Deslocação:</span> 25€ (reembolsável se contratar)
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-6 rounded-none h-auto"
                      disabled={isSubmitting || sendEmailMutation.isPending}
                    >
                      {isSubmitting || sendEmailMutation.isPending ? "A enviar..." : "ENVIAR PEDIDO DE ORÇAMENTO"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/351928095224?text=Olá%20B&L%20Construções%2C%20gostaria%20de%20solicitar%20um%20orçamento"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-50"
        title="Contactar via WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.171c-1.493.821-2.771 1.98-3.7 3.402C2.508 10.558 2 12.3 2 14.122c0 1.821.508 3.563 1.498 5.112m15.848-5.112c0 1.821-.508 3.563-1.498 5.112-1.49 2.423-3.768 4.082-6.46 4.902-2.693.82-5.386.82-8.079 0-2.692-.82-4.97-2.479-6.46-4.902C2.508 17.685 2 15.943 2 14.122c0-1.821.508-3.563 1.498-5.112 1.49-2.423 3.768-4.082 6.46-4.902 2.693-.82 5.386-.82 8.079 0 2.692.82 4.97 2.479 6.46 4.902 1.49 1.549 1.998 3.291 1.998 5.112z"/>
        </svg>
      </a>
    </div>
  );
}
