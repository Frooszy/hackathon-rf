"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, ArrowRight, ThumbsUp, MessageSquare, Clock, Tag } from "lucide-react"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const categories = ["Todos", "Eletrônica", "Programação", "Robótica", "IoT", "Sustentabilidade"]

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Microcontrolador com Bateria de Cigarro Eletrônico",
      excerpt:
        "Aprenda a transformar a bateria de um cigarro eletrônico em fonte de energia para projetos de microcontroladores.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Eletrônica",
      author: "Carlos Silva",
      date: "10 Mai 2023",
      likes: 124,
      comments: 32,
      featured: true,
    },
    {
      id: 2,
      title: "Sensor de Umidade com Componentes Reaproveitados",
      excerpt: "Criando um sensor de umidade funcional utilizando componentes de cigarros eletrônicos apreendidos.",
      image: "/placeholder.svg?height=300&width=500",
      category: "IoT",
      author: "Ana Ferreira",
      date: "22 Jun 2023",
      likes: 98,
      comments: 17,
      featured: true,
    },
    {
      id: 3,
      title: "LED RGB Controlado por Aplicativo",
      excerpt: "Desenvolva um sistema de iluminação RGB controlado por smartphone usando componentes reaproveitados.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Programação",
      author: "Pedro Almeida",
      date: "5 Jul 2023",
      likes: 87,
      comments: 24,
      featured: false,
    },
    {
      id: 4,
      title: "Mini Estação Meteorológica",
      excerpt: "Construa uma estação meteorológica compacta utilizando sensores de cigarros eletrônicos.",
      image: "/placeholder.svg?height=300&width=500",
      category: "IoT",
      author: "Mariana Costa",
      date: "18 Ago 2023",
      likes: 76,
      comments: 19,
      featured: false,
    },
    {
      id: 5,
      title: "Carregador Solar Portátil",
      excerpt: "Aprenda a criar um carregador solar utilizando componentes eletrônicos reaproveitados.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Sustentabilidade",
      author: "Lucas Mendes",
      date: "3 Set 2023",
      likes: 112,
      comments: 28,
      featured: false,
    },
    {
      id: 6,
      title: "Robô Seguidor de Linha",
      excerpt: "Construa um robô seguidor de linha utilizando motores e sensores reaproveitados.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Robótica",
      author: "Juliana Santos",
      date: "29 Set 2023",
      likes: 94,
      comments: 21,
      featured: false,
    },
  ]

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200">
        <Link href="/" className="flex items-center justify-center">
          <span className="text-2xl font-bold text-samba-blue">Samba Code</span>
        </Link>
        <nav className="ml-auto hidden gap-4 sm:gap-6 md:flex">
          <Link href="/#about" className="text-sm font-medium hover:text-samba-blue transition-colors">
            Sobre
          </Link>
          <Link href="/#features" className="text-sm font-medium hover:text-samba-blue transition-colors">
            Recursos
          </Link>
          <Link href="/#demo" className="text-sm font-medium hover:text-samba-blue transition-colors">
            Demonstração
          </Link>
          <Link href="/blog" className="text-sm font-medium text-samba-blue">
            Projetos
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-br from-samba-blue to-blue-700">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1.2] }}
                className="space-y-2"
              >
                <Badge className="bg-samba-orange text-white hover:bg-orange-600">Projetos Inovadores</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Galeria de Projetos Samba Code
                </h1>
                <p className="max-w-[800px] text-blue-100 md:text-xl/relaxed">
                  Explore projetos inovadores que transformam cigarros eletrônicos apreendidos em ferramentas
                  tecnológicas úteis e educativas.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1.2], delay: 0.2 }}
                className="w-full max-w-md flex gap-2"
              >
                <div className="relative w-full">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-blue-100" />
                  <Input
                    type="search"
                    placeholder="Buscar projetos..."
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-blue-100 pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="secondary" className="bg-white text-samba-blue hover:bg-blue-50">
                  <Filter className="h-4 w-4 mr-2" /> Filtrar
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Projetos em Destaque</h2>
                <p className="text-gray-600">Conheça nossos projetos mais populares e inovadores</p>
              </div>
              <Link href="#all-projects">
                <Button variant="ghost" className="text-samba-blue hover:text-blue-700 hover:bg-blue-50">
                  Ver todos os projetos <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid gap-6 mt-8 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group"
                >
                  <Link href={`/blog/${project.id}`}>
                    <Card className="overflow-hidden border-2 hover:border-samba-blue transition-all duration-300 h-full">
                      <div className="relative">
                        <Badge className="absolute top-4 left-4 z-10 bg-samba-orange text-white">
                          {project.category}
                        </Badge>
                        <div className="overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={500}
                            height={300}
                            className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-samba-blue transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-gray-600">{project.excerpt}</p>
                        <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>{project.date}</span>
                          <span className="mx-2">•</span>
                          <span>{project.author}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="px-6 py-4 bg-gray-50 flex justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4 text-samba-blue" />
                            <span className="text-sm">{project.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4 text-samba-blue" />
                            <span className="text-sm">{project.comments}</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-samba-blue hover:text-blue-700 hover:bg-blue-50"
                        >
                          Ler mais <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Projects */}
        <section id="all-projects" className="w-full py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Explore Todos os Projetos</h2>

            <Tabs defaultValue="Todos" className="w-full">
              <TabsList className="mb-8 flex flex-wrap gap-2 bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-samba-blue data-[state=active]:text-white"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category} value={category} className="w-full">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects
                      .filter((project) => category === "Todos" || project.category === category)
                      .map((project) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="group"
                        >
                          <Link href={`/blog/${project.id}`}>
                            <Card className="overflow-hidden border hover:border-samba-blue transition-all duration-300 h-full">
                              <div className="relative">
                                <Badge className="absolute top-3 left-3 z-10 bg-samba-orange text-white">
                                  {project.category}
                                </Badge>
                                <div className="overflow-hidden">
                                  <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
                                  />
                                </div>
                              </div>
                              <CardContent className="p-5">
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-samba-blue transition-colors line-clamp-2">
                                  {project.title}
                                </h3>
                                <p className="mt-2 text-gray-600 text-sm line-clamp-2">{project.excerpt}</p>
                                <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                                  <Clock className="h-3 w-3" />
                                  <span>{project.date}</span>
                                </div>
                              </CardContent>
                              <CardFooter className="px-5 py-3 bg-gray-50 flex justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="flex items-center gap-1">
                                    <ThumbsUp className="h-3 w-3 text-samba-blue" />
                                    <span className="text-xs">{project.likes}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MessageSquare className="h-3 w-3 text-samba-blue" />
                                    <span className="text-xs">{project.comments}</span>
                                  </div>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 text-xs text-samba-blue hover:text-blue-700 hover:bg-blue-50 px-2"
                                >
                                  Ver <ArrowRight className="ml-1 h-3 w-3" />
                                </Button>
                              </CardFooter>
                            </Card>
                          </Link>
                        </motion.div>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Submit Project CTA */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-r from-samba-blue to-blue-700">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 text-white max-w-md">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Tem um projeto inovador?</h2>
                <p className="text-blue-100">
                  Compartilhe sua criação com nossa comunidade e inspire outros inovadores a transformar tecnologia em
                  soluções sustentáveis.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-samba-orange hover:bg-orange-600 text-white">
                  Enviar Projeto
                </Button>
                <Button variant="secondary" size="lg" className="bg-white text-samba-blue hover:bg-blue-50">
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Tags */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Tags Populares</h2>
                <p className="text-gray-600">Explore projetos por categorias específicas</p>
              </div>
              <div className="flex items-center">
                <Tag className="h-5 w-5 text-samba-blue mr-2" />
                <span className="text-samba-blue font-medium">Ver todas as tags</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Arduino",
                "ESP32",
                "Sensores",
                "LED",
                "Bateria",
                "Microcontrolador",
                "Bluetooth",
                "WiFi",
                "Energia Solar",
                "Robótica",
                "Automação",
                "Display",
                "Educação",
                "Reciclagem",
                "Prototipagem",
              ].map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-gray-100 text-gray-800 hover:bg-samba-blue hover:text-white cursor-pointer transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} Samba Code. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Termos de Serviço
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Política de Privacidade
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Contato
          </Link>
        </nav>
      </footer>
    </div>
  )
}
