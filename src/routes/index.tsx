import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Boxes, Check, Gauge, ShieldCheck, Sparkles } from "lucide-react";
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
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-4 sm:flex sm:justify-between sm:px-6">
          <span className="flex min-w-0 items-center gap-2 text-base font-semibold tracking-tight sm:text-lg">
            <Sparkles className="h-5 w-5 shrink-0 text-primary" />
            <span className="truncate">Northbeam</span>
          </span>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#features" className="transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#pricing" className="transition-colors hover:text-foreground">
              Pricing
            </a>
          </div>
          <Button size="sm" className="shrink-0">
            Get started
          </Button>
        </nav>

      </header>

      <main>
        <section className="relative overflow-hidden" style={{ backgroundImage: "var(--gradient-hero)" }}>
          <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-primary/20" />
          <div className="pointer-events-none absolute -bottom-48 left-1/3 h-96 w-96 rounded-full border border-accent/20" />
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-32">
            <div className="relative z-10">
              <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Now with one-command Docker deploys
              </span>
              <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
                Marketing sites that ship on day one
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
                Northbeam gives your team a fast, container-ready foundation — so launches take
                hours, not sprints.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button size="lg" className="w-full gap-2 sm:w-auto">
                  Start free <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Book a Quick Demo <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative order-first md:order-0">
              <div className="absolute -inset-3 rounded-4xl border border-primary/20 bg-primary/5" />
              <img
                src={heroImage}
                alt="Abstract illustration of Northbeam's deployment platform"
                width={1600}
                height={1000}
                className="relative h-auto w-full rounded-2xl border border-border object-cover"
                style={{ boxShadow: "var(--shadow-glow)" }}
              />
              <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-xl sm:-left-7">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold">Deploy complete</p>
                  <p className="text-[11px] text-muted-foreground">Production is live</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Built for momentum</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to launch
            </h2>
          </div>
          <div className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card/70 p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <f.icon className="h-6 w-6 shrink-0 text-primary" />
                <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="border-y border-border bg-secondary/30">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">One clear plan</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Simple pricing, no surprises</h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                Start free while you build. Upgrade to Pro at $29/month when you go live.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <span className="text-sm text-muted-foreground">No credit card required</span>
              <Button size="lg" className="w-full gap-2 sm:w-auto">
                Create your site <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground sm:px-6 sm:py-10">
        © {new Date().getFullYear()} Northbeam. All rights reserved.
      </footer>

    </div>
  );
}
