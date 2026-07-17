import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Uniplast S.A. - Desenvolvedor de Software (Estágio)",
    description: "Desenvolvimento de aplicações web internas, criação de novas funcionalidades, manutenção de sistemas e desenvolvimento de interfaces utilizando HTML, CSS, JavaScript, PHP e PostgreSQL. Participação na integração de APIs, automação de processos e desenvolvimento de soluções voltadas à indústria.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "Whirlpool S.A. - Manutenção TI (Aprendiz)",
    description: "Atuei na manutenção de computadores, notebooks e impressoras, além de suporte técnico aos usuários. Realizei a instalação e configuração de softwares, sistemas operacionais e periféricos, garantindo o bom funcionamento dos equipamentos e a satisfação dos usuários.",
    icon: "/cards/card-2.png",
  },
  {
    id: 3,
    title: "Rudric - Suporte ao Cliente (Freelancer)",
    description: "Atuei como suporte ao cliente, auxiliando na resolução de problemas técnicos e dúvidas relacionadas aos produtos e serviços oferecidos pela empresa. Realizei atendimento via chat, e-mail e telefone, garantindo a satisfação dos clientes e a manutenção de um bom relacionamento com eles.",
    icon: "/cards/card-3.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Experiência Profissional
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4 ">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {card.description}
              </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

