"use client";

import Image from "next/image";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;

  fullDescription?: string;
  technologies?: string[];
  features?: string[];
  images?: string[];
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Sistema de Coleta Industrial em Tempo Real",

    description:
      "Desenvolvimento de uma solução para aquisição e sincronização de dados industriais utilizando Python, Raspberry Pi, SQLite e PostgreSQL.",

    image: "/projects/project-01.png",

    fullDescription:
      "Sistema desenvolvido para aquisição contínua de dados industriais através de dispositivos Raspberry Pi. A solução realiza a coleta local das informações, armazenamento temporário e sincronização automática com o banco central. Mesmo em casos de perda de conexão, os dados permanecem armazenados localmente e são enviados posteriormente.",

    technologies: [
      "Python",
      "Raspberry Pi",
      "SQLite",
      "PostgreSQL",
      "Linux",
    ],

    features: [
      "Coleta contínua de dados industriais",
      "Armazenamento local",
      "Sincronização automática",
      "Recuperação de registros pendentes",
      "Monitoramento em tempo real",
      "Tratamento de falhas de conexão",
    ],

    images: ["/projects/project-01.png"],
  },

  {
    id: 2,
    title: "Sistema de Gerenciamento de TVs em Modo Kiosk",

    description:
      "Desenvolvimento de uma plataforma para gerenciamento remoto de dispositivos Raspberry Pi operando em modo Kiosk.",

    image: "/projects/project-02.png",

    fullDescription:
      "Plataforma criada para centralizar o gerenciamento de dispositivos Raspberry Pi utilizados em TVs corporativas e industriais. O sistema permite alterar conteúdos, acompanhar o status dos dispositivos e realizar ações remotamente sem necessidade de acesso físico.",

    technologies: [
      "PHP",
      "CodeIgniter",
      "JavaScript",
      "Raspberry Pi",
      "Linux",
      "HDMI-CEC",
    ],

    features: [
      "Gerenciamento remoto de dispositivos",
      "Monitoramento de status",
      "Gerenciamento de layouts",
      "Controle de conteúdo",
      "Reinicialização remota",
      "Controle de energia via HDMI-CEC",
    ],

    images: [
      "/projects/project-02.png",
      "/projects/gerenciamento-dispositivos.png",
      "/projects/gerenciamento-frames1.png",
      "/projects/gerenciamento-frames2.png",
      "/projects/gerenciamento-frames3.png",
    ],
  },

  {
    id: 3,
    title: "Sistema de Validação e Gestão de Divergências de Fretes",

    description:
      "Desenvolvimento de uma solução completa para automação da conferência de fretes, integrando aplicação web, banco de dados e fluxos automatizados com n8n.",

    image: "/projects/project-03.png",

    fullDescription:
      "Sistema desenvolvido para automatizar a conferência de fretes através da análise de documentos CTe e NFe. A aplicação identifica dados como transportadora, rota, peso, valores e taxas cobradas e realiza a comparação automática com as regras comerciais cadastradas no banco de dados. Quando uma divergência é encontrada, o sistema registra a memória detalhada do cálculo e pode iniciar automaticamente fluxos de notificação através do n8n.",

    technologies: [
      "PHP",
      "CodeIgniter",
      "JavaScript",
      "PostgreSQL",
      "n8n",
      "CTe",
      "NFe",
      "Automação",
    ],

    features: [
      "Processamento de CTe e NFe",
      "Consulta de fretes processados",
      "Tabela de regras por transportadora",
      "Comparação automática de valores",
      "Validação de frete-peso",
      "Validação de Ad Valorem",
      "Validação de GRIS",
      "Validação de pedágio",
      "Validação de TDA e TDE",
      "Memória detalhada de cálculo",
      "Relatórios por transportadora",
      "Indicadores de economia",
      "Automação com n8n",
      "Envio automático de e-mails",
      "Detecção de rotas sem regra cadastrada",
    ],

    images: [
      "/projects/project-03.png",
      "/projects/fretes-divergencias.png",
      "/projects/fretes-tabela.png",
      "/projects/fretes-documentos.png",
      "/projects/fretes-relatorios.png",
    ],
  },
];

export default function Projects(): React.JSX.Element {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">

        {/* =========================
            LISTA DE PROJETOS
        ========================= */}

        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={project.id}
              className="mb-20 last:mb-0"
            >
              <div
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >

                {/* =========================
                    CONTEÚDO DE TEXTO
                ========================= */}

                <div
                  className={`${
                    isEven ? "lg:col-start-2" : ""
                  }`}
                >
                  <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium">
                    Projeto Destaque
                  </p>

                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {project.title}
                  </h3>

                  {/* CARD DE DESCRIÇÃO */}

                  <div className="relative z-10 mb-6">
                    <div
                      className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${
                        isEven
                          ? "lg:ml-[-20%]"
                          : "lg:w-[calc(100%+20%)]"
                      }`}
                    >
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* SAIBA MAIS */}

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedProject(project)
                    }
                    className="group flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200"
                  >
                    Mais detalhes

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>

                  {/* WEBSITE LINK */}

                  {project.link && (
                    <div className="flex gap-4 mt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors duration-200"
                        aria-label="Visit project website"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-6 h-6"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                          />

                          <line
                            x1="2"
                            y1="12"
                            x2="22"
                            y2="12"
                          />

                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>

                {/* =========================
                    IMAGEM PRINCIPAL
                ========================= */}

                <div
                  className={`${
                    isEven
                      ? "lg:col-start-1 lg:row-start-1"
                      : ""
                  }`}
                >
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* ======================================
            MODAL DO PROJETO
        ====================================== */}

        {selectedProject && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() =>
              setSelectedProject(null)
            }
          >
            <div
              className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#12091f] border border-white/10 shadow-2xl"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              {/* FECHAR */}

              <button
                type="button"
                onClick={() =>
                  setSelectedProject(null)
                }
                className="absolute top-5 right-5 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 hover:bg-purple-500 text-white transition"
                aria-label="Fechar projeto"
              >
                ✕
              </button>

              <div className="p-6 lg:p-10">

                {/* CABEÇALHO */}

                <div className="mb-8">
                  <p className="text-purple-400 text-lg mb-2">
                    Projeto
                  </p>

                  <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5 pr-12">
                    {selectedProject.title}
                  </h2>

                  <p className="text-white/70 text-base lg:text-lg leading-relaxed max-w-4xl">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* TECNOLOGIAS */}

                {selectedProject.technologies && (
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Tecnologias utilizadas
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm"
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* FUNCIONALIDADES */}

                {selectedProject.features && (
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Principais funcionalidades
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.features.map(
                        (feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-4"
                          >
                            <span className="text-purple-400 mt-1">
                              ✓
                            </span>

                            <p className="text-white/80">
                              {feature}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* =========================
                    GALERIA
                ========================= */}

                {selectedProject.images &&
                  selectedProject.images.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-5">
                        Imagens do projeto
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {selectedProject.images.map(
                          (image, index) => (
                            <button
                              key={image}
                              type="button"
                              onClick={() =>
                                setSelectedImage(image)
                              }
                              className="group relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-white/10 cursor-zoom-in"
                              aria-label={`Ampliar imagem ${
                                index + 1
                              }`}
                            >
                              <Image
                                src={image}
                                alt={`${selectedProject.title} - ${
                                  index + 1
                                }`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                              />

                              {/* OVERLAY */}

                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">

                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-md rounded-full p-3 text-white">

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <circle
                                      cx="11"
                                      cy="11"
                                      r="8"
                                    />

                                    <path d="m21 21-4.3-4.3" />

                                    <path d="M11 8v6" />

                                    <path d="M8 11h6" />
                                  </svg>

                                </div>
                              </div>
                            </button>
                          )
                        )}

                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        )}

        {/* ======================================
            MODAL DA IMAGEM AMPLIADA
        ====================================== */}

        {selectedImage && (
          <div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 lg:p-8"
            onClick={() =>
              setSelectedImage(null)
            }
          >

            {/* BOTÃO FECHAR */}

            <button
              type="button"
              onClick={() =>
                setSelectedImage(null)
              }
              className="fixed top-5 right-5 z-[10001] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-purple-500 border border-white/10 text-white transition"
              aria-label="Fechar imagem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            {/* IMAGEM GRANDE */}

            <div
              className="relative w-full h-full max-w-[95vw] max-h-[92vh]"
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              <Image
                src={selectedImage}
                alt="Visualização ampliada do projeto"
                fill
                priority
                sizes="95vw"
                className="object-contain"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}