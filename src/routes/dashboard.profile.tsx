import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Route = createFileRoute("/dashboard/profile")({
  head: () => ({
    meta: [
      { title: "Your profile — Loopline" },
      { name: "description", content: "Update your name, role and notification identity." },
      { property: "og:title", content: "Your profile — Loopline" },
      { property: "og:description", content: "Update your name, role and notification identity." },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <DashboardShell title="Profile" description="How you appear to teammates and customers.">
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="border-border/70 shadow-soft">
          <CardContent className="flex flex-col items-center pt-8 text-center">
            <Avatar className="size-20">
              <AvatarFallback className="bg-gradient-primary text-xl font-semibold text-primary-foreground">
                AM
              </AvatarFallback>
            </Avatar>
            <p className="mt-4 text-lg font-semibold">Ava Mercer</p>
            <p className="text-sm text-muted-foreground">Head of Product</p>
            <Badge variant="secondary" className="mt-3">
              Admin
            </Badge>
            <div className="mt-6 w-full space-y-2 text-left text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="size-4" /> ava@acme.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="size-4" /> Berlin, Germany
              </p>
            </div>
            <Button variant="outline" className="mt-6 w-full">
              Change photo
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border/70 shadow-soft lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Personal details</CardTitle>
            <CardDescription>Used on replies you send to customers.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first">First name</Label>
                <Input id="first" defaultValue="Ava" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last">Last name</Label>
                <Input id="last" defaultValue="Mercer" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="ava@acme.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" defaultValue="Head of Product" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                rows={4}
                defaultValue="I read every piece of feedback that comes through Loopline and turn it into our quarterly roadmap."
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-gradient-primary hover:opacity-90">Save profile</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}
