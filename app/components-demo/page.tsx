"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { PanelToolTip } from "@/components/ui/panel-tooltip";

export default function ComponentsDemo() {
  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-2xl flex flex-col gap-12">
        <h1 className="text-3xl font-bold tracking-tight">Components Demo</h1>

        {/* button demo */}
        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold border-b pb-2">Button</h2>
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        {/* card demo */}
        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold border-b pb-2">Card</h2>
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>Drone Health</CardTitle>
              <CardDescription>June 14th, 2026</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Drone is doing aight.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm">View project</Button>
            </CardFooter>
          </Card>
        </section>

        {/* dropdown demo */}
        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold border-b pb-2">Dropdown Menu</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold border-b pb-2">Panel Cells</h2>
          <div className="grid grid-cols-3 gap-2 w-fit">
            <PanelToolTip floor={1} panel={1} status="Clean">
              <button className="w-10 h-14 rounded border-2" style={{ backgroundColor: '#3FA66A', borderColor: '#74D89A' }} aria-label="Floor 20 Panel 1 Clean" />
            </PanelToolTip>
            <PanelToolTip floor={1} panel={2} status='Dirty' flagged>
              <button className="w-10 h-14 rounded border-2" style={{ backgroundColor: '#D49A33', borderColor: '#F2C463' }} aria-label="Floor 20 Panel 2 Dirty" />
            </PanelToolTip>
            <PanelToolTip floor={1} panel={3} status="Cracked" flagged>
              <button className="w-10 h-14 rounded border-2" style={{ backgroundColor: '#D8534C', borderColor: '#FF867C' }} aria-label="Floor 20 Panel 3 Critical" />
            </PanelToolTip>
          </div>
        </section>


        <Link href={"https://ui.shadcn.com/docs/components"} className={"underline"} target={"_blank"}>Learn more here: https://ui.shadcn.com/docs/components</Link>
      </div>
    </div>
  )
}
