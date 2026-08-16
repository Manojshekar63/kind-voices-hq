import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Check,
  Inbox,
  MessageSquareQuote,
  Sparkles,
  Tags,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Loopline — Feedback Management for Product Teams" },
      {
        name: "description",
        content:
          "Collect, triage and act on customer feedback in one place. Loopline turns scattered requests into a clear product roadmap.",
      },
      { property: "og:title", content: "Loopline — Feedback Management for Product Teams" },
      {
        property: "og:description",
        content: "Collect, triage and act on customer feedback in one place with Loopline.",
      },
    ],
  }),
  component: Landing,
});

const features = [
  {
    icon: Inbox,
    title: "One unified inbox",
    body: "Widgets, email, support tickets and reviews all land in a single triage queue.",
  },
  {
    icon: Tags,
    title: "Auto-grouping",
    body: "Similar requests are merged automatically so you see real demand, not duplicates.",
  },
  {
    icon: BarChart3,
    title: "Impact scoring",
    body: "Weigh feedback by revenue, plan and account size before you commit a sprint.",
  },
  {
    icon: Users,
    title: "Close the loop",
    body: "Notify every requester the moment their idea ships. Automatically.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-surface">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
              <Sparkles className="size-4" />
            </span>
            <span className="font-display text-lg font-bold">Loopline</span>
          </Link>
          <nav className="ml-auto hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#features" className="transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#workflow" className="transition-colors hover:text-foreground">
              Workflow
            </a>
            <a href="#pricing" className="transition-colors hover:text-foreground">
              Pricing
            </a>
          </nav>
          <div className="ml-auto flex items-center gap-2 md:ml-0">
            <Button variant="ghost" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild className="bg-gradient-primary shadow-soft hover:opacity-90">
              <Link to="/signup">Start free</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="size-3" /> Feedback that turns into roadmap
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl">
            Every customer signal,
            <span className="text-gradient-primary"> one clear decision.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Loopline collects feedback from everywhere your customers talk, groups it by real demand,
            and tells you exactly what to build next.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild className="bg-gradient-primary shadow-glow hover:opacity-90">
              <Link to="/signup">
                Create free account <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/dashboard">View live demo</Link>
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Free for 14 days · No credit card · Cancel anytime
          </p>
        </div>

        <Card className="mx-auto mt-16 max-w-4xl overflow-hidden border-border/70 shadow-glow">
          <CardContent className="p-0">
            <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-3">
              <span className="size-2.5 rounded-full bg-destructive/60" />
              <span className="size-2.5 rounded-full bg-chart-4/70" />
              <span className="size-2.5 rounded-full bg-chart-2/70" />
              <span className="ml-3 text-xs text-muted-foreground">loopline.app/dashboard</span>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              {[
                { label: "Open feedback", value: "128", tone: "text-primary" },
                { label: "Merged this week", value: "43", tone: "text-chart-2" },
                { label: "Shipped & notified", value: "19", tone: "text-chart-4" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card p-4">
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className={`mt-2 text-3xl font-bold ${s.tone}`}>{s.value}</p>
                </div>
              ))}
              {[
                "Bulk CSV export for reports",
                "Slack alerts on new feedback",
                "Dark mode across the app",
              ].map((t, i) => (
                <div
                  key={t}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 sm:col-span-3"
                >
                  <MessageSquareQuote className="size-4 text-primary" />
                  <span className="text-sm font-medium">{t}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{34 - i * 9} votes</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Built for the messy middle</h2>
          <p className="mt-3 text-muted-foreground">
            The part between "a customer said something" and "we shipped it" is where products stall.
            Loopline owns that part.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="border-border/70 shadow-soft">
              <CardContent className="pt-6">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="workflow" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">A workflow your team keeps using</h2>
            <p className="mt-3 text-muted-foreground">
              Three steps, no rituals to maintain. Feedback comes in, gets scored, and closes the
              loop on its own.
            </p>
            <div className="mt-8 space-y-5">
              {[
                ["Capture", "Embed a widget or forward email. Nothing gets lost in a spreadsheet."],
                ["Prioritize", "Impact scores blend votes, plan tier and account revenue."],
                ["Close the loop", "Ship it, and every requester hears about it the same day."],
              ].map(([title, body], i) => (
                <div key={title} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-sm font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-muted-foreground">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="pricing" className="rounded-2xl border border-border bg-gradient-surface p-8 shadow-soft">
            <p className="text-sm font-medium text-primary">Team plan</p>
            <p className="mt-2 text-4xl font-bold">
              $29
              <span className="text-base font-normal text-muted-foreground">/month</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Unlimited feedback, 10 teammates, all integrations.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Unlimited feedback items",
                "Auto-grouping & impact scores",
                "Slack, Linear & Jira sync",
                "Customer notifications",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> {f}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 w-full bg-gradient-primary hover:opacity-90">
              <Link to="/signup">Start 14-day trial</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:px-6">
        <span>© {new Date().getFullYear()} Loopline. All rights reserved.</span>
        <div className="flex gap-5 sm:ml-auto">
          <Link to="/login" className="hover:text-foreground">
            Log in
          </Link>
          <Link to="/signup" className="hover:text-foreground">
            Sign up
          </Link>
          <Link to="/dashboard" className="hover:text-foreground">
            Dashboard
          </Link>
        </div>
      </footer>
    </div>
  );
}
