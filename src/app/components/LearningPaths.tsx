import { Layout } from "./Layout";
import { useNavigate } from "react-router";
import { Clock, Users, Award } from "lucide-react";

export function LearningPaths() {
  const navigate = useNavigate();

  const paths = [
    {
      id: 1,
      title: "Introdução à Educação Inclusiva",
      description: "Domine os fundamentos para criar um ambiente de sala de aula inclusivo para todos os alunos",
      duration: "4 semanas",
      modules: 12,
      enrolled: 1250,
      progress: 65,
      category: "Fundamentos",
      color: "#2F80ED",
    },
    {
      id: 2,
      title: "Apoio a Alunos com TDAH",
      description: "Estratégias baseadas em evidências e técnicas práticas para apoiar alunos com TDAH",
      duration: "3 semanas",
      modules: 10,
      enrolled: 890,
      progress: 30,
      category: "Especializado",
      color: "#27AE60",
    },
    {
      id: 3,
      title: "Espectro Autista: Melhores Práticas",
      description: "Compreendendo o autismo e implementando estratégias eficazes de apoio na sala de aula",
      duration: "5 semanas",
      modules: 15,
      enrolled: 1050,
      progress: 15,
      category: "Especializado",
      color: "#F2C94C",
    },
    {
      id: 4,
      title: "Estratégias de Apoio à Dislexia",
      description: "Abordagens abrangentes para apoiar alunos com dislexia e dificuldades de leitura",
      duration: "3 semanas",
      modules: 9,
      enrolled: 780,
      progress: 0,
      category: "Especializado",
      color: "#EB5757",
    },
    {
      id: 5,
      title: "Desenho Universal para Aprendizagem",
      description: "Crie ambientes de aprendizagem flexíveis que acomodem diferenças individuais de aprendizado",
      duration: "6 semanas",
      modules: 18,
      enrolled: 1420,
      progress: 0,
      category: "Avançado",
      color: "#9B51E0",
    },
    {
      id: 6,
      title: "Tecnologia Assistiva na Educação",
      description: "Aproveite a tecnologia para apoiar diversos alunos e aumentar a acessibilidade",
      duration: "4 semanas",
      modules: 11,
      enrolled: 670,
      progress: 0,
      category: "Tecnologia",
      color: "#F2994A",
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl text-[#333333] mb-2">Trilhas de Aprendizado</h1>
          <p className="text-[#717182]">
            Explore trilhas de aprendizado selecionadas para aprimorar suas habilidades de ensino inclusivo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {paths.map((path) => (
            <div
              key={path.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
              onClick={() => navigate(`/learning-paths/${path.id}`)}
            >
              <div className="h-2" style={{ backgroundColor: path.color }} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs text-white mb-3"
                      style={{ backgroundColor: path.color }}
                    >
                      {path.category}
                    </span>
                    <h3 className="text-xl text-[#333333] mb-2">{path.title}</h3>
                    <p className="text-[#717182] text-sm">{path.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 mb-4 text-sm text-[#717182]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{path.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>{path.modules} módulos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{path.enrolled} inscritos</span>
                  </div>
                </div>

                {path.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#717182]">Progresso</span>
                      <span className="text-[#333333]">{path.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-[#F5F7FA] rounded-full">
                      <div
                        className="h-2 rounded-full"
                        style={{ width: `${path.progress}%`, backgroundColor: path.color }}
                      />
                    </div>
                  </div>
                )}

                <button
                  className="w-full py-3 rounded-lg text-white transition-colors"
                  style={{ backgroundColor: path.color }}
                >
                  {path.progress > 0 ? "Continuar Aprendendo" : "Iniciar Trilha"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
