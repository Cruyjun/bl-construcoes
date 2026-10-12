import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContactDashboard from "./pages/ContactDashboard";
import DashboardLayout from "./components/DashboardLayout";

function PublicSite() {
  return (
    <Layout>
      <Switch>
        <Route path={"/?from_webdev=1"} component={Home} />
        <Route path={"/"} component={Home} />
        <Route path={"/servicos"} component={Services} />
        <Route path={"/sobre"} component={About} />
        <Route path={"/contactos"} component={Contact} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function InternalDashboard() {
  return (
    <DashboardLayout>
      <ContactDashboard />
    </DashboardLayout>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/gestao" component={InternalDashboard} />
      <Route component={PublicSite} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster position="top-center" richColors />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
