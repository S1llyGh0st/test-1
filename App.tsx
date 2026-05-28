import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Layout } from "@/components/layout";

// Pages
import { Home } from "@/pages/home";
import { CivilianGuidance } from "@/pages/civilian-guidance";
import { IncidentArchive } from "@/pages/incident-archive";
import { BehavioralResearch } from "@/pages/behavioral-research";
import { PerspectiveArchives } from "@/pages/perspective-archives";
import { Recruitment } from "@/pages/recruitment";
import { Terminal } from "@/pages/terminal";
import { RestrictedRecords } from "@/pages/restricted-records";
import { YourOwnUtterance } from "@/pages/your-own-utterance";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/civilian-guidance" component={CivilianGuidance} />
        <Route path="/incident-archive" component={IncidentArchive} />
        <Route path="/behavioral-research" component={BehavioralResearch} />
        <Route path="/perspective-archives" component={PerspectiveArchives} />
        <Route path="/recruitment" component={Recruitment} />
        <Route path="/terminal" component={Terminal} />
        <Route path="/restricted-records" component={RestrictedRecords} />
        <Route path="/your-own-utterance" component={YourOwnUtterance} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
