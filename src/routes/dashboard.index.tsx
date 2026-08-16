import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Inbox, MessageSquareQuote, Star, TrendingUp } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dashboard/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Loopline" },
      { name: "description", content: "Overview of feedback volume, sentiment and top requests." },
      { property: "og:title", content: "Dashboard — Loopline" },
      { property: "og:description", content: "Overview of feedback volume, sentiment and top requests." },
    ],
  }),
  component: DashboardOverview,
});

const stats = [
  { label: "Open feedback", value: "128", delta: "+12%", icon: Inbox },
  { label: "New this week", value: "34", delta: "+8%", icon: MessageSquareQuote },
  { label: "Avg. satisfaction", value: "4.6", delta: "+0.2", icon: Star },
  { label: "Shipped requests", value: "19", delta: "+5", icon: TrendingUp },
];

const topRequests = [
  { title: "Bulk CSV export for reports", votes: 34, share: 82, tag: "Reporting" },
  { title: "Slack alerts on new feedback", votes: 25, share: 64, tag: "Integrations" },
  { title: "Dark mode across the app", votes: 16, share: 41, tag: "Design" },
  { title: "SSO with Okta", votes: 12, share: 30, tag: "Security" },
];

const activity = [
  { who: "Maya R.", what: "merged 3 duplicates into “Bulk CSV export”", when: "12m ago" },
  { who: "Dan K.", what: "moved “Slack alerts” to In progress", when: "1h ago" },
  { who: "Ava M.", what: "replied to 6 requesters about dark mode", when: "3h ago" },
  { who: "System", what: "imported 14 new items from the widget", when: "Yesterday" },
];

function DashboardOverview() {
  return (
    <DashboardShell title="Overview" description="How feedback is moving through your workspace.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, delta, icon: Icon }) => (
          <Card key={label} className="border-border/70 shadow-soft">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-4" />
                </span>
                <span className="text-xs font-medium text-chart-2">{delta}</span>
              </div>
              <p className="mt-4 text-2xl font-bold">{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="border-border/70 shadow-soft lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">Top requests</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard/feedback">
                View all <ArrowUpRight className="ml-1 size-3.5" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-5">
            {topRequests.map((r) => (
              <div key={r.title}>
                <div className="flex items-center gap-3">
                  <p className="text-sm font-medium">{r.title}</p>
                  <Badge variant="secondary" className="text-[11px]">
                    {r.tag}
                  </Badge>
                  <span className="ml-auto text-xs text-muted-foreground">{r.votes} votes</span>
                </div>
                <Progress value={r.share} className="mt-2 h-1.5" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/70 shadow-soft">
          <CardHeader>
            <CardTitle className="text-base">Recent activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activity.map((a) => (
              <div key={a.what} className="flex gap-3">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <p className="text-sm">
                    <span className="font-medium">{a.who}</span> {a.what}
                  </p>
                  <p className="text-xs text-muted-foreground">{a.when}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}
