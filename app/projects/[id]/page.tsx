"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ThumbsUp, MessageSquare, Share2, Bookmark, Clock, ChevronRight, Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const [saved, setSaved] = useState(false)
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(124)

  const project = {
    id: params.id,
    title: "Microcontrolador com Bateria de Cigarro Eletrônico",
    excerpt:
      "Aprenda a transformar a bateria de um cigarro eletrônico em fonte de energia para projetos de microcontroladores.",
    content: `
      <p>Neste projeto, vamos explorar como reaproveitar a bateria de um cigarro eletrônico apreendido para alimentar projetos com microcontroladores como Arduino ou ESP32.</p>
      
      <h2>Materiais Necessários</h2>
      <ul>
        <li>Cigarro eletrônico apreendido (com autorização da Receita Federal)</li>
        <li>Arduino Nano ou ESP32</li>
        <li>Regulador de tensão (opcional, dependendo da bateria)</li>
        <li>Fios de conexão</li>
        <li>Protoboard</li>
        <li>Multímetro</li>
        <li>Ferramentas básicas (alicate, chave de fenda, etc.)</li>
      </ul>
      
      <h2>Passo 1: Desmontagem Segura</h2>
      <p>Antes de começar, certifique-se de que o dispositivo está completamente descarregado. Use luvas de proteção e óculos de segurança durante todo o processo.</p>
      
      <h2>Passo 2: Identificação dos Componentes</h2>
      <p>Ao desmontar o cigarro eletrônico, você encontrará diversos componentes. Neste projeto, estamos interessados principalmente na bateria de lítio.</p>
      
      <h2>Passo 3: Testando a Bateria</h2>
      <p>Use um multímetro para verificar a tensão da bateria. Tipicamente, estas baterias fornecem entre 3.7V e 4.2V quando totalmente carregadas.</p>
      
      <h2>Passo 4: Circuito de Proteção</h2>
      <p>É fundamental adicionar um circuito de proteção para evitar sobrecarga ou descarga excessiva da bateria.</p>
      
      <h2>Passo 5: Conexão com o Microcontrolador</h2>
      <p>Dependendo do microcontrolador escolhido, você pode precisar de um regulador de tensão para garantir o fornecimento adequado de energia.</p>
      
      <h2>Passo 6: Teste do Sistema</h2>
      <p>Carregue um programa simples no seu microcontrolador para testar se a alimentação está funcionando corretamente.</p>
      
      <h2>Considerações de Segurança</h2>
      <p>Sempre manuseie baterias de lítio com extremo cuidado. Nunca perfure, esmague ou exponha a bateria a altas temperaturas.</p>
      
      <h2>Conclusão</h2>
      <p>Este projeto demonstra como podemos dar uma nova vida útil a componentes de dispositivos apreendidos, transformando-os em ferramentas educacionais e tecnológicas.</p>
    `,
    image: "/placeholder.svg?height=500&width=800",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    category: "Eletrônica",
    author: {
      name: "Carlos Silva",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Engenheiro Eletrônico",
    },
    date: "10 Mai 2023",
    readTime: "12 min",
    difficulty: "Intermediário",
    likes: 124,
    comments: 32,
    downloads: 78,
    tags: ["Arduino", "Bateria", "Microcontrolador", "Energia", "Reciclagem"],
    steps: 6,
    relatedProjects: [
      {
        id: 2,
        title: "Sensor de Umidade com Componentes Reaproveitados",
        image: "/placeholder.svg?height=200&width=300",
        category: "IoT",
      },
      {
        id: 5,
        title: "Carregador Solar Portátil",
        image: "/placeholder.svg?height=200&width=300",
        category: "Sustentabilidade",
      },
      {
        id: 3,
        title: "LED RGB Controlado por Aplicativo",
        image: "/placeholder.svg?height=200&width=300",
        category: "Programação",
      },
    ],
  }

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
    setLiked(!liked)
  }

  const handleSave = () => {
    setSaved(!saved)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-samba-blue">
              Início
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/blog" className="hover:text-samba-blue">
              Projetos
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-gray-700 font-medium truncate">{project.title}</span>
          </div>
        </div>
        <section className="w-full py-8 md:py-12 bg-gradient-to-br from-samba-blue to-blue-700">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1.2] }}
                className="space-y-2"
              >
                <Badge className="bg-samba-orange text-white hover:bg-orange-600">{project.category}</Badge>
                <h1 className="text-2xl md:text-4xl font-bold tracking-tighter text-white max-w-4xl">
                  {project.title}
                </h1>
                <p className="max-w-[800px] text-blue-100 md:text-lg">{project.excerpt}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1.2], delay: 0.2 }}
                className="flex items-center gap-4 text-blue-100"
              >
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 border-2 border-white">
                    <AvatarImage src={project.author.avatar || "/placeholder.svg"} alt={project.author.name} />
                    <AvatarFallback>{project.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="text-sm text-left">
                    <div className="font-medium text-white">{project.author.name}</div>
                    <div className="text-xs">{project.author.role}</div>
                  </div>
                </div>
                <div className="w-px h-8 bg-blue-300/30"></div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{project.date}</span>
                </div>
                <div className="w-px h-8 bg-blue-300/30"></div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{project.readTime} de leitura</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-8">
                <div className="rounded-xl overflow-hidden border">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`flex items-center gap-1 ${liked ? "text-samba-orange" : "text-gray-600"}`}
                      onClick={handleLike}
                    >
                      <ThumbsUp className="h-4 w-4" />
                      <span>{likeCount}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600">
                      <MessageSquare className="h-4 w-4" />
                      <span>{project.comments}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600">
                      <Share2 className="h-4 w-4" />
                      <span>Compartilhar</span>
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`flex items-center gap-1 ${saved ? "text-samba-blue" : "text-gray-600"}`}
                    onClick={handleSave}
                  >
                    <Bookmark className="h-4 w-4" />
                    <span>{saved ? "Salvo" : "Salvar"}</span>
                  </Button>
                </div>
                <Tabs defaultValue="instructions" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-gray-100">
                    <TabsTrigger
                      value="instructions"
                      className="data-[state=active]:bg-samba-blue data-[state=active]:text-white"
                    >
                      Instruções
                    </TabsTrigger>
                    <TabsTrigger
                      value="comments"
                      className="data-[state=active]:bg-samba-blue data-[state=active]:text-white"
                    >
                      Comentários ({project.comments})
                    </TabsTrigger>
                    <TabsTrigger
                      value="gallery"
                      className="data-[state=active]:bg-samba-blue data-[state=active]:text-white"
                    >
                      Galeria
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="instructions" className="mt-6">
                    <div className="prose prose-blue max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: project.content }} />
                    </div>
                  </TabsContent>
                  <TabsContent value="comments" className="mt-6">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold">Comentários ({project.comments})</h3>
                        <Button className="bg-samba-blue hover:bg-blue-700 text-white">Adicionar Comentário</Button>
                      </div>
                      <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                            <Avatar>
                              <AvatarImage src={`/placeholder.svg?height=40&width=40&text=U${i}`} />
                              <AvatarFallback>U{i}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Usuário {i}</span>
                                <span className="text-xs text-gray-500">há {i} dias</span>
                              </div>
                              <p className="text-sm text-gray-700">
                                {i === 1
                                  ? "Projeto incrível! Consegui adaptar para usar com uma bateria de 3000mAh e funcionou perfeitamente."
                                  : i === 2
                                    ? "Você poderia explicar melhor o circuito de proteção? Tive algumas dificuldades nessa parte."
                                    : "Já estou pensando em como adaptar isso para um projeto de monitoramento ambiental. Obrigado por compartilhar!"}
                              </p>
                              <div className="flex items-center gap-4 pt-1">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-auto p-0 text-xs text-gray-500 hover:text-samba-blue"
                                >
                                  Responder
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-auto p-0 text-xs text-gray-500 hover:text-samba-blue"
                                >
                                  <ThumbsUp className="h-3 w-3 mr-1" /> {5 - i}
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="gallery" className="mt-6">
                    <div className="grid grid-cols-2 gap-4">
                      {project.gallery.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden border">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`Imagem ${index + 1} do projeto`}
                            width={400}
                            height={300}
                            className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
                <div className="pt-4">
                  <h3 className="text-lg font-bold mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
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
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={project.author.avatar || "/placeholder.svg"} alt={project.author.name} />
                      <AvatarFallback>{project.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">{project.author.name}</h3>
                      <p className="text-sm text-gray-600">{project.author.role}</p>
                      <p className="mt-2 text-sm">
                        Engenheiro eletrônico apaixonado por projetos sustentáveis e reaproveitamento de tecnologia.
                        Trabalha com desenvolvimento de soluções inovadoras há mais de 8 anos.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-samba-blue">
                        Ver todos os projetos
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-samba-blue text-white p-4">
                    <h3 className="font-bold">Informações do Projeto</h3>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-500">Dificuldade:</div>
                      <div className="font-medium">{project.difficulty}</div>

                      <div className="text-gray-500">Tempo estimado:</div>
                      <div className="font-medium">2-3 horas</div>

                      <div className="text-gray-500">Etapas:</div>
                      <div className="font-medium">{project.steps}</div>

                      <div className="text-gray-500">Downloads:</div>
                      <div className="font-medium">{project.downloads}</div>
                    </div>
                    <Separator />
                    <Button className="w-full bg-samba-orange hover:bg-orange-600 text-white">
                      <Download className="h-4 w-4 mr-2" /> Baixar Instruções
                    </Button>
                  </div>
                </div>
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-gray-100 p-4">
                    <h3 className="font-bold">Materiais Necessários</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-samba-blue"></div>
                        <span>Cigarro eletrônico apreendido</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-samba-blue"></div>
                        <span>Arduino Nano ou ESP32</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-samba-blue"></div>
                        <span>Regulador de tensão</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-samba-blue"></div>
                        <span>Fios de conexão</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-samba-blue"></div>
                        <span>Protoboard</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-samba-blue"></div>
                        <span>Multímetro</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-samba-blue"></div>
                        <span>Ferramentas básicas</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-gray-100 p-4">
                    <h3 className="font-bold">Projetos Relacionados</h3>
                  </div>
                  <div className="p-4 space-y-4">
                    {project.relatedProjects.map((related) => (
                      <Link href={`/blog/${related.id}`} key={related.id}>
                        <div className="flex gap-3 group">
                          <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                            <Image
                              src={related.image || "/placeholder.svg"}
                              alt={related.title}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <Badge className="mb-1 bg-gray-100 text-gray-800">{related.category}</Badge>
                            <h4 className="text-sm font-medium group-hover:text-samba-blue transition-colors line-clamp-2">
                              {related.title}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 bg-gray-50">
          <div className="container px-4 md:px-6">
            <Link href="/blog">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar para Projetos
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
