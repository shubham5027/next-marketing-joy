import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Boxes, Gauge, ShieldCheck, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Northbeam — Ship marketing sites faster" },
      {
        name: "description",
        content:
          "Northbeam is the deploy-anywhere platform for fast, container-ready marketing sites. Launch in minutes, scale without ops.",
      },
      { property: "og:title", content: "Northbeam — Ship marketing sites faster" },
      {
        property: "og:description",
        content: "The deploy-anywhere platform for fast, container-ready marketing sites.",
      },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: Gauge,
    title: "Blazing fast",
    body: "Server-rendered pages and edge-ready output keep your load times under a second.",
  },
  {
    icon: Boxes,
    title: "Container native",
    body: "One Dockerfile, any cloud. Build once and run the same image everywhere.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    body: "Hardened headers, isolated runtime, and zero secrets baked into your bundle.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <Sparkles className="h-5 w-5 text-primary" />
            Northbeam
          </span>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#features" className="transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#pricing" className="transition-colors hover:text-foreground">
              Pricing
            </a>
          </div>
          <Button size="sm">Get started</Button>
        </nav>
      </header>

      <main>
        <section
          className="relative overflow-hidden"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
            <div>
              <span className="inline-flex items-center rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                Now with one-command Docker deploys
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Marketing sites that ship on day one
              </h1>
              <p className="mt-5 max-w-lg text-lg text-muted-foreground">
                Northbeam gives your team a fast, container-ready foundation — so launches take
                hours, not sprints.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="gap-2">
                  Start free <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Book a demo
                </Button>
              </div>
            </div>
            <img
              src={heroImage}
              alt="Abstract illustration of Northbeam's deployment platform"
              width={1600}
              height={1000}
              className="rounded-2xl border border-border"
              style={{ boxShadow: "var(--shadow-glow)" }}
            />
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Everything you need to launch
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card p-6"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <f.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="border-y border-border bg-secondary/30">
          <div className="mx-auto max-w-6xl px-6 py-24 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Simple pricing, no surprises
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Start free while you build. Upgrade to Pro at $29/month when you go live.
            </p>
            <Button size="lg" className="mt-8 gap-2">
              Create your site <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Northbeam. All rights reserved.
      </footer>
    </div>
  );
}
