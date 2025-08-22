"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AUTOR } from "@/lib/contants"
import { DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const components = [
  { title: "Alert Dialog", href: "/docs/primitives/alert-dialog", description: "A modal dialog that interrupts the user with important content and expects a response." },
  { title: "Hover Card", href: "/docs/primitives/hover-card", description: "For sighted users to preview content available behind a link." },
  { title: "Progress", href: "/docs/primitives/progress", description: "Displays an indicator showing the completion progress of a task." },
]

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block p-2 rounded hover:bg-gray-800">
          <div className="text-sm font-medium">{title}</div>
          <p className="text-muted-foreground text-sm line-clamp-2">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

function MenuNavegacaoDesktop({ vertical = false }: { vertical?: boolean }) {
  return (
    <NavigationMenu
      viewport={false}
      orientation={vertical ? "vertical" : "horizontal"}
      className={`w-full ${vertical ? "items-start justify-start" : "justify-end"}`}
    >
      <NavigationMenuList className={`${vertical ? "flex-col gap-4 items-start" : "flex-row gap-6"}`}>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="#inicio">Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="#sobre-mim">Sobre Mim</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="#experiencias">Experiências</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="#projetos">Projetos</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="#contato">Contato</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export function MenuNavegacao() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-black text-white z-50 shadow-md">
      <div className="text-xl font-bold">{AUTOR || "Matheus Titton"}</div>

      {/* Menu Desktop */}
      <div className="hidden md:flex">
        <MenuNavegacaoDesktop />
      </div>

      {/* Menu Mobile */}
      <div className="flex md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button aria-label="Abrir menu">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="p-4">
            <VisuallyHidden>
              <DialogTitle>Menu de Navegação</DialogTitle>
            </VisuallyHidden>
            <MenuNavegacaoDesktop vertical={true} />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

