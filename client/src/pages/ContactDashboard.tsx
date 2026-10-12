import { useAuth } from "@/_core/hooks/useAuth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { AlertCircle, CheckCircle2, Clock3, ExternalLink, Inbox, RefreshCw, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

const STATUS_LABELS = {
  new: "Novo",
  in_progress: "Em análise",
  quoted: "Orçamento enviado",
  won: "Contratado",
  lost: "Não avançou",
} as const;

type Status = keyof typeof STATUS_LABELS;

const STATUS_STYLES: Record<Status, string> = {
  new: "border-orange-200 bg-orange-50 text-orange-700",
  in_progress: "border-blue-200 bg-blue-50 text-blue-700",
  quoted: "border-violet-200 bg-violet-50 text-violet-700",
  won: "border-emerald-200 bg-emerald-50 text-emerald-700",
  lost: "border-slate-200 bg-slate-100 text-slate-600",
};

export default function ContactDashboard() {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";
  const [filter, setFilter] = useState<Status | "all">("all");
  const utils = trpc.useUtils();
  const leadsQuery = trpc.contact.list.useQuery(undefined, {
    enabled: isAdmin,
    refetchInterval: false,
    refetchOnWindowFocus: true,
  });
  const updateStatus = trpc.contact.updateStatus.useMutation({
    onSuccess: async () => {
      toast.success("Estado atualizado.");
      await utils.contact.list.invalidate();
    },
    onError: () => toast.error("Não foi possível atualizar o estado."),
  });
  const syncCrm = trpc.contact.syncCrm.useMutation({
    onSuccess: async (result) => {
      if (result.status === "synced") toast.success("Pedido sincronizado com o CRM.");
      else if (result.status === "not_configured") toast.info("Configure CRM_WEBHOOK_URL para ativar esta integração.");
      else toast.error("Não foi possível sincronizar este pedido.");
      await utils.contact.list.invalidate();
    },
    onError: () => toast.error("Falha na sincronização com o CRM."),
  });

  const leads = leadsQuery.data?.items ?? [];
  const visibleLeads = useMemo(
    () => filter === "all" ? leads : leads.filter(lead => lead.status === filter),
    [filter, leads],
  );

  useEffect(() => {
    if (!isAdmin) return;
    const events = new EventSource("/api/contact/events");
    const handleNewContact = (event: Event) => {
      const payload = JSON.parse((event as MessageEvent<string>).data) as { name: string; service: string };
      toast.info(`Novo pedido de ${payload.name}.`, { description: payload.service });
      void utils.contact.list.invalidate();
    };
    events.addEventListener("contact.created", handleNewContact);
    events.onerror = () => {
      // Browser EventSource automatically retries without interrupting the dashboard.
    };
    return () => {
      events.removeEventListener("contact.created", handleNewContact);
      events.close();
    };
  }, [isAdmin, utils]);

  if (!isAdmin) {
    return (
      <Card className="mx-auto mt-12 max-w-xl border-orange-200">
        <CardHeader><CardTitle className="flex items-center gap-2 text-primary"><AlertCircle className="h-5 w-5 text-secondary" />Acesso reservado</CardTitle></CardHeader>
        <CardContent className="text-muted-foreground">Esta área é exclusiva para a gestão da B&L Construções.</CardContent>
      </Card>
    );
  }

  const stats = {
    total: leads.length,
    new: leads.filter(lead => lead.status === "new").length,
    active: leads.filter(lead => ["new", "in_progress", "quoted"].includes(lead.status)).length,
    won: leads.filter(lead => lead.status === "won").length,
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">Gestão comercial</p>
          <h1 className="mt-2 text-3xl font-heading font-bold text-primary md:text-4xl">Pedidos de orçamento</h1>
          <p className="mt-2 text-muted-foreground">Histórico centralizado para responder depressa e acompanhar cada oportunidade.</p>
        </div>
        <Button variant="outline" onClick={() => leadsQuery.refetch()} disabled={leadsQuery.isFetching}>
          <RefreshCw className={`mr-2 h-4 w-4 ${leadsQuery.isFetching ? "animate-spin" : ""}`} />Atualizar
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {([
          { label: "Total de pedidos", value: stats.total, icon: Inbox },
          { label: "Novos", value: stats.new, icon: Clock3 },
          { label: "Em acompanhamento", value: stats.active, icon: TrendingUp },
          { label: "Contratados", value: stats.won, icon: CheckCircle2 },
        ] satisfies Array<{ label: string; value: number; icon: LucideIcon }>).map(({ label, value, icon: StatIcon }) => {
          return <Card key={label}><CardContent className="flex items-center justify-between p-5"><div><p className="text-sm text-muted-foreground">{label}</p><p className="mt-1 text-3xl font-bold text-primary">{value}</p></div><StatIcon className="h-8 w-8 text-secondary" /></CardContent></Card>;
        })}
      </div>

      <Card>
        <CardHeader className="flex flex-col gap-4 border-b md:flex-row md:items-center md:justify-between">
          <div><CardTitle>Histórico de contactos</CardTitle><p className="mt-1 text-sm text-muted-foreground">Novos pedidos aparecem instantaneamente através de notificações em tempo real.</p></div>
          <Select value={filter} onValueChange={(value) => setFilter(value as Status | "all")}>
            <SelectTrigger className="w-full md:w-48"><SelectValue placeholder="Filtrar estado" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os estados</SelectItem>
              {(Object.keys(STATUS_LABELS) as Status[]).map(status => <SelectItem key={status} value={status}>{STATUS_LABELS[status]}</SelectItem>)}
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="p-0">
          {leadsQuery.isLoading ? <div className="p-8 text-center text-muted-foreground">A carregar pedidos...</div> : visibleLeads.length === 0 ? <div className="p-8 text-center text-muted-foreground">Ainda não existem pedidos para este filtro.</div> : (
            <div className="divide-y divide-border">
              {visibleLeads.map(lead => (
                <div key={lead.id} className="grid gap-4 p-5 lg:grid-cols-[1.3fr_1.4fr_1fr_auto] lg:items-center">
                  <div><div className="flex items-center gap-2"><p className="font-bold text-primary">{lead.name}</p><Badge className={STATUS_STYLES[lead.status as Status]}>{STATUS_LABELS[lead.status as Status]}</Badge></div><a className="text-sm text-secondary hover:underline" href={`mailto:${lead.email}`}>{lead.email}</a><p className="text-sm text-muted-foreground">{lead.phone}</p></div>
                  <div><p className="text-sm font-semibold text-primary">{lead.service}</p><p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{lead.message}</p></div>
                  <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Recebido</p><p className="text-sm text-primary">{new Date(lead.createdAt).toLocaleString("pt-PT")}</p><p className="mt-1 text-xs text-muted-foreground">CRM: {lead.crmStatus === "synced" ? "sincronizado" : lead.crmStatus === "failed" ? "falhou" : lead.crmStatus === "pending" ? "pendente" : "não configurado"}</p></div>
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    <Select value={lead.status} onValueChange={(status) => updateStatus.mutate({ id: lead.id, status: status as Status })}>
                      <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
                      <SelectContent>{(Object.keys(STATUS_LABELS) as Status[]).map(status => <SelectItem key={status} value={status}>{STATUS_LABELS[status]}</SelectItem>)}</SelectContent>
                    </Select>
                    <Button variant="outline" size="icon" title="Sincronizar CRM" onClick={() => syncCrm.mutate({ id: lead.id })} disabled={syncCrm.isPending}><ExternalLink className="h-4 w-4" /></Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card><CardContent className="p-5"><p className="text-sm font-semibold text-primary">Notificações</p><p className="mt-1 text-sm text-muted-foreground">{leadsQuery.data?.notificationsConfigured ? "Ativas através do canal interno do proprietário." : "Canal interno indisponível; o histórico continua a atualizar automaticamente."}</p></CardContent></Card>
        <Card><CardContent className="p-5"><p className="text-sm font-semibold text-primary">Integração CRM</p><p className="mt-1 text-sm text-muted-foreground">{leadsQuery.data?.crmConfigured ? "Webhook configurado. Pode sincronizar cada pedido." : "Opcional: adicione CRM_WEBHOOK_URL para ligar ao seu CRM."}</p></CardContent></Card>
      </div>
    </div>
  );
}
