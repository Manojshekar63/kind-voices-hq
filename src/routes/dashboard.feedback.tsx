import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Filter, Plus, ThumbsUp } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Route = createFileRoute("/dashboard/feedback")({
  head: () => ({
    meta: [
      { title: "Feedback inbox — Loopline" },
      { name: "description", content: "Triage, tag and prioritize every piece of customer feedback." },
      { property: "og:title", content: "Feedback inbox — Loopline" },
      {
        property: "og:description",
        content: "Triage, tag and prioritize every piece of customer feedback.",
      },
    ],
  }),
  component: FeedbackPage,
});

type Status = "new" | "planned" | "shipped";

const items: {
  id: number;
  title: string;
  body: string;
  author: string;
  tag: string;
  votes: number;
  status: Status;
}[] = [
  {
    id: 1,
    title: "Bulk CSV export for reports",
    body: "Our ops team rebuilds the weekly report by hand. A CSV export would save hours.",
    author: "Priya N. · Northwind",
    tag: "Reporting",
    votes: 34,
    status: "planned",
  },
  {
    id: 2,
    title: "Slack alerts on new feedback",
    body: "We want a channel ping whenever an enterprise account submits something.",
    author: "Tomas L. · Helios",
    tag: "Integrations",
    votes: 25,
    status: "new",
  },
  {
    id: 3,
    title: "Dark mode across the app",
    body: "Half of my team works at night and the bright dashboard is rough.",
    author: "Jules F. · Kite",
    tag: "Design",
    votes: 16,
    status: "new",
  },
  {
    id: 4,
    title: "SSO with Okta",
    body: "Security review is blocking rollout until SSO is available.",
    author: "Renee W. · Vantage",
    tag: "Security",
    votes: 12,
    status: "planned",
  },
  {
    id: 5,
    title: "Keyboard shortcuts for triage",
    body: "Shipped last sprint — merging with the arrow keys is a huge speed-up.",
    author: "Dan K. · Internal",
    tag: "Workflow",
    votes: 9,
    status: "shipped",
  },
];

const statusStyles: Record<Status, string> = {
  new: "bg-primary/10 text-primary",
  planned: "bg-chart-4/15 text-chart-4",
  shipped: "bg-chart-2/15 text-chart-2",
};

function FeedbackPage() {
  const [tab, setTab] = useState<"all" | Status>("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(
    () =>
      items.filter(
        (i) =>
          (tab === "all" || i.status === tab) &&
          (i.title + i.body + i.tag).toLowerCase().includes(query.toLowerCase()),
      ),
    [tab, query],
  );

  return (
    <DashboardShell title="Feedback" description="Everything your customers told you, in one queue.">
      <div className="flex flex-wrap items-center gap-3">
        <Tabs value={tab} onValueChange={(v) => setTab(v as typeof tab)}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="planned">Planned</TabsTrigger>
            <TabsTrigger value="shipped">Shipped</TabsTrigger>
          </TabsList>
        </Tabs>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by keyword or tag"
          className="w-full sm:max-w-xs"
        />
        <Button variant="outline" size="icon" aria-label="Filters">
          <Filter className="size-4" />
        </Button>
        <Button className="ml-auto bg-gradient-primary hover:opacity-90">
          <Plus className="mr-1 size-4" /> New feedback
        </Button>
      </div>

      <div className="mt-6 space-y-3">
        {visible.map((i) => (
          <Card key={i.id} className="border-border/70 shadow-soft transition-shadow hover:shadow-glow">
            <CardContent className="flex gap-4 pt-6">
              <button className="flex h-16 w-14 shrink-0 flex-col items-center justify-center rounded-lg border border-border bg-secondary/60 transition-colors hover:border-primary/40">
                <ThumbsUp className="size-4 text-primary" />
                <span className="mt-1 text-sm font-semibold">{i.votes}</span>
              </button>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-semibold">{i.title}</h3>
                  <Badge variant="secondary" className="text-[11px]">
                    {i.tag}
                  </Badge>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-medium capitalize ${statusStyles[i.status]}`}
                  >
                    {i.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{i.body}</p>
                <div className="mt-3 flex items-center gap-2">
                  <Avatar className="size-6">
                    <AvatarFallback className="bg-primary/10 text-[10px] text-primary">
                      {i.author.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground">{i.author}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {visible.length === 0 && (
          <p className="py-12 text-center text-sm text-muted-foreground">
            No feedback matches this filter.
          </p>
        )}
      </div>
    </DashboardShell>
  );
}
