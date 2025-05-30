"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu"
import { Menu } from "lucide-react"

export default function Header() {
  const pathname = usePathname()

  const links = [
    { name: "Sobre", redirect: "#about" },
    { name: "Recursos", redirect: "#features" },
    { name: "Demonstração", redirect: "#demo" },
    { name: "Projetos", redirect: "/projects" },
  ]

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200">
      <Link href="/" className="flex items-center justify-center">
        <span className="text-2xl font-bold text-samba-blue">Samba Code</span>
      </Link>

      {/* Menu normal (visível em md para cima) */}
      <nav className="ml-auto hidden gap-4 sm:gap-6 md:flex">
        {links.map((link, index) => {
          const isHashLink = link.redirect.startsWith("#")
          const href = isHashLink
            ? pathname === "/"
              ? link.redirect
              : `/${link.redirect}`
            : link.redirect

          return (
            <Link
              key={index}
              href={href}
              className="text-sm font-medium hover:text-samba-blue transition-colors"
            >
              <Button variant="link" className="text-black hover:text-blue-900">
                {link.name}
              </Button>
            </Link>
          )
        })}
      </nav>

      {/* Dropdown para mobile (visível apenas em telas menores que md) */}
      <div className="ml-auto md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {links.map((link, index) => {
              const isHashLink = link.redirect.startsWith("#")
              const href = isHashLink
                ? pathname === "/"
                  ? link.redirect
                  : `/${link.redirect}`
                : link.redirect

              return (
                <DropdownMenuItem key={index} asChild>
                  <Link href={href}>{link.name}</Link>
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
