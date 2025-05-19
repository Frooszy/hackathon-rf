"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Recycle, Lightbulb, Users, Play, Code, Zap, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200">
        <Link href="/" className="flex items-center justify-center">
          <span className="text-2xl font-bold text-samba-blue">Samba Code</span>
        </Link>
        <nav className="ml-auto hidden gap-4 sm:gap-6 md:flex">
          <Link href="#about" className="text-sm font-medium hover:text-samba-blue transition-colors">
            Sobre
          </Link>
          <Link href="#features" className="text-sm font-medium hover:text-samba-blue transition-colors">
            Recursos
          </Link>
          <Link href="#demo" className="text-sm font-medium hover:text-samba-blue transition-colors">
            Demonstração
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-samba-blue transition-colors">
            Projetos
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-samba-blue to-blue-700">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 text-white">
                <div className="space-y-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1.2], delay: 0.8 }}
                  >
                    <Badge className="bg-samba-orange text-white hover:bg-orange-600">Inovação em Ação</Badge>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1.2], delay: 0.1 }}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  >
                    Samba Code
                  </motion.h1>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1.2], delay: 0.3 }}
                    className="text-xl sm:text-2xl font-semibold text-blue-100"
                  >
                    Transformando Cigarros Eletrônicos Apreendidos em Inovação
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1.2], delay: 0.5 }}
                    className="max-w-[600px] text-blue-100 md:text-xl"
                  >
                    Descubra como estamos dando novo significado aos cigarros eletrônicos apreendidos pela Receita Federal, transformando-os em ferramentas poderosas para educação, inovação e tecnologia sustentável.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1.2], delay: 0.6 }}
                  className="flex flex-col gap-2 md:flex-row"
                >
                  <Button size="lg" className="bg-samba-orange hover:bg-orange-600 text-white" asChild>
                    <Link href="#demo">
                      Assistir Demonstração <Play className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    variant="secondary"
                    size="lg"
                    className="text-white text-samba-blue"
                    asChild
                  >
                    <Link href="/blog">
                      Explorar Projetos <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-samba-orange rounded-full blur-3xl opacity-20 animate-pulse"></div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1.2], delay: 0.8 }}
                    className="relative"
                  >
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      width={400}
                      height={400}
                      alt="Inovação Samba Code"
                      className="rounded-2xl shadow-2xl"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-samba-blue text-white">Nossa Missão</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Redefinindo Propósitos por Meio da Inovação
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  O Samba Code representa uma abordagem revolucionária para reaproveitamento de cigarros eletrônicos
                  apreendidos, transformando-os de itens confiscados em recursos educacionais e tecnológicos valiosos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Processo de Inovação"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex p-2 items-center justify-center rounded-lg bg-samba-blue text-white">
                      <Recycle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Reaproveitamento Sustentável</h3>
                      <p className="text-gray-600">
                        Convertendo dispositivos apreendidos em ferramentas educacionais e plataformas tecnológicas.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex p-2 items-center justify-center rounded-lg bg-samba-orange text-white">
                      <Lightbulb className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Inovação Criativa</h3>
                      <p className="text-gray-600">
                        Demonstrando novas possibilidades e aplicações para tecnologias existentes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex p-2 items-center justify-center rounded-lg bg-samba-blue text-white">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Impacto Comunitário</h3>
                      <p className="text-gray-600">
                        Construindo uma plataforma onde inovadores podem compartilhar e desenvolver novos projetos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-samba-orange text-white">Funcionalidades</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  O Que Torna o Samba Code Especial
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossa abordagem inovadora combina tecnologia, sustentabilidade e colaboração comunitária.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <Card className="border-2 h-[300px] hover:border-samba-blue transition-colors">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-samba-blue text-white mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-gray-900">Transformação Tecnológica</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Técnicas avançadas para reaproveitar componentes eletrônicos em ferramentas educacionais e
                    protótipos funcionais.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-2 h-[300px] hover:border-samba-orange transition-colors">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-samba-orange text-white mb-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-gray-900">Impacto Educacional</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Criando oportunidades de aprendizado sobre eletrônica, programação e práticas sustentáveis.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-2 h-[300px] hover:border-samba-blue transition-colors">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-samba-blue text-white mb-4">
                    <Code className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-gray-900">Inovação Aberta</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Uma plataforma colaborativa onde desenvolvedores e inovadores podem compartilhar e construir juntos.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="demo" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-samba-blue text-white">Veja na Prática</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Assista à Demonstração</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubra como o Samba Code transforma cigarros eletrônicos apreendidos em soluções tecnológicas
                  inovadoras.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-samba-orange text-white">
                      <Play className="h-8 w-8 ml-1" />
                    </div>
                    <p className="text-white text-lg font-medium">Vídeo de Demonstração em Breve</p>
                    <p className="text-gray-300 text-sm">
                      Clique aqui para assistir à nossa demonstração do projeto Samba Code
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-samba-blue/20 to-samba-orange/20"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-samba-blue to-blue-700">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Junte-se ao Movimento Inovador</h2>
                <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore nossa galeria de projetos, compartilhe suas inovações e faça parte da revolução tecnológica
                  sustentável.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-samba-orange hover:bg-orange-600 text-white" asChild>
                  <Link href="/blog">
                    Explorar Projetos <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white text-white text-samba-blue"
                >
                  Envie seu projeto
                </Button>
              </div>
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
