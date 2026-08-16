import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard-shell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/dashboard/settings")({
  head: () => ({
    meta: [
      { title: "Workspace settings — Loopline" },
      { name: "description", content: "Configure your workspace, notifications and integrations." },
      { property: "og:title", content: "Workspace settings — Loopline" },
      {
        property: "og:description",
        content: "Configure your workspace, notifications and integrations.",
      },
    ],
  }),
  component: SettingsPage,
});

const toggles = [
  ["Email digest", "A daily summary of new feedback and status changes."],
  ["Slack notifications", "Ping #product when an enterprise account submits feedback."],
  ["Auto-group duplicates", "Merge similar requests automatically as they arrive."],
  ["Public roadmap", "Let customers see what is planned and shipped."],
];

function SettingsPage() {
  return (
    <DashboardShell title="Settings" description="Workspace preferences and integrations.">
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="border-border/70 shadow-soft lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Workspace</CardTitle>
            <CardDescription>Basics shown to your team and customers.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ws-name">Workspace name</Label>
              <Input id="ws-name" defaultValue="Acme Product Team" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ws-url">Public feedback URL</Label>
              <Input id="ws-url" defaultValue="feedback.acme.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ws-tz">Default timezone</Label>
              <Select defaultValue="cet">
                <SelectTrigger id="ws-tz">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pst">Pacific (PST)</SelectItem>
                  <SelectItem value="est">Eastern (EST)</SelectItem>
                  <SelectItem value="cet">Central European (CET)</SelectItem>
                  <SelectItem value="ist">India (IST)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator />
            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-gradient-primary hover:opacity-90">Save changes</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/70 shadow-soft">
          <CardHeader>
            <CardTitle className="text-base">Notifications</CardTitle>
            <CardDescription>Choose what your team hears about.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {toggles.map(([title, body], i) => (
              <div key={title} className="flex items-start gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium">{title}</p>
                  <p className="text-xs text-muted-foreground">{body}</p>
                </div>
                <Switch defaultChecked={i < 2} className="ml-auto mt-1" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}
