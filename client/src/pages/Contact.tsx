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

import SEO from "@/components/SEO";

export default function Contact() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
  const [selectedType, setSelectedType] = useState("");

  const onSubmit = async (data: any) => {
    if (!selectedType) {
      toast.error("Por favor selecione o tipo de obra");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('access_key', '2f8e8c4b-5c3a-4e8f-9d2a-1b3c4d5e6f7g');
      formData.append('name', data.name);
      formData.append('phone', data.phone);
      formData.append('email', data.email);
      formData.append('type', selectedType);
      formData.append('message', data.message);
      formData.append('from_name', 'B&L Construções - Formulário de Contacto');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Orçamento solicitado com sucesso! Entraremos em contacto no prazo máximo de 24h úteis.");
        reset();
        setSelectedType("");
      } else {
        toast.error("Erro ao enviar o formulário. Tente novamente.");
      }
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
                    <div className="p-3 bg-slate-100 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Morada</h3>
                      <p className="text-muted-foreground text-sm">
                        Rua das Orquídeas, 2950-807<br />
                        Quinta do Anjo, Portugal<br />
                        <span className="text-xs text-slate-400 italic mt-1 block">Sede registada. Atendimento por agendamento.</span>
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
                        <a href="tel:+351928095224" className="hover:text-secondary transition-colors font-semibold">
                          928 095 224
                        </a><br />
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
                        <a href="mailto:orcamentos@blconstrucoes.com" className="hover:text-secondary transition-colors font-semibold">
                          orcamentos@blconstrucoes.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-100 text-primary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Disponibilidade</h3>
                      <p className="text-muted-foreground text-sm">
                        Segunda a Sexta<br />
                        <span className="text-xs text-slate-400">Resposta em 24h úteis</span>
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
                    const position = { lat: 38.7223, lng: -9.1393 };
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
              <p className="text-muted-foreground mb-4 text-sm">Preencha o formulário abaixo e entraremos em contacto no prazo máximo de 24h úteis.</p>
              <div className="bg-white border-l-4 border-secondary p-4 mb-8 text-sm">
                <p className="text-muted-foreground"><strong>Orçamento:</strong> Gratuito | <strong>Custo de deslocação:</strong> 25€</p>
              </div>
              
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
                  <Select value={selectedType} onValueChange={setSelectedType}>
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

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/351928095224?text=Olá%20B%26L%20Construções%2C%20gostaria%20de%20solicitar%20um%20orçamento" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        title="Contacte-nos no WhatsApp"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.347l-.355.203-.368-.077c-1.264-.258-2.473-.742-3.476-1.466L2.05 6.586c1.122 1.78 2.97 3.141 5.124 3.542l.46.082c-.3.625-.474 1.32-.474 2.04 0 2.709 2.201 4.905 4.914 4.905 1.211 0 2.358-.38 3.286-1.023l.355-.203.368.077c1.264.258 2.473.742 3.476 1.466l1.348-1.348c-1.122-1.78-2.97-3.141-5.124-3.542l-.46-.082c.3-.625.474-1.32.474-2.04 0-2.709-2.201-4.905-4.914-4.905z"/>
        </svg>
      </a>
    </div>
  );
}
