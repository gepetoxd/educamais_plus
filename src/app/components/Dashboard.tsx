import { Layout } from "./Layout";
import { BookOpen, Target, Award, TrendingUp } from "lucide-react";

export function Dashboard() {
  const userName = localStorage.getItem("userName") || "Professor(a)";

  const learningPaths = [
    {
      id: 1,
      title: "Introdução à Educação Inclusiva",
      description: "Aprenda os fundamentos para criar uma sala de aula inclusiva",
      progress: 65,
      color: "#2F80ED",
    },
    {
      id: 2,
      title: "Apoio a Alunos com TDAH",
      description: "Estratégias e técnicas para apoiar alunos com TDAH",
      progress: 30,
      color: "#27AE60",
    },
    {
      id: 3,
      title: "Espectro Autista: Melhores Práticas",
      description: "Compreendendo e apoiando alunos autistas",
      progress: 15,
      color: "#F2C94C",
    },
  ];

  const stats = [
    { icon: BookOpen, label: "Trilhas Iniciadas", value: "3", color: "#2F80ED" },
    { icon: Target, label: "Aulas Planejadas", value: "12", color: "#27AE60" },
    { icon: Award, label: "Módulos Concluídos", value: "8", color: "#F2C94C" },
    { icon: TrendingUp, label: "Progresso Semanal", value: "45%", color: "#EB5757" },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl text-[#333333] mb-2">
            Bem-vindo(a), {userName}!
          </h1>
          <p className="text-[#717182]">
            Continue sua jornada rumo à excelência no ensino inclusivo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <p className="text-[#717182] text-sm mb-1">{stat.label}</p>
                <p className="text-2xl text-[#333333]">{stat.value}</p>
              </div>
            );
          })}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl text-[#333333] mb-4">Trilhas de Aprendizado Recomendadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map((path) => (
              <div key={path.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div
                  className="w-full h-2 bg-[#F5F7FA] rounded-full mb-4"
                >
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${path.progress}%`, backgroundColor: path.color }}
                  />
                </div>
                <h3 className="text-lg text-[#333333] mb-2">{path.title}</h3>
                <p className="text-[#717182] text-sm mb-4">{path.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#717182]">{path.progress}% concluído</span>
                  <button
                    className="px-4 py-2 rounded-lg text-white"
                    style={{ backgroundColor: path.color }}
                  >
                    Continuar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#2F80ED] to-[#27AE60] rounded-xl p-8 text-white">
          <h2 className="text-2xl mb-2">Pronto para planejar sua próxima aula?</h2>
          <p className="mb-6 opacity-90">
            Use nosso planejador inteligente para criar planos de aula inclusivos adaptados às necessidades dos seus alunos
          </p>
          <button className="bg-white text-[#2F80ED] px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
            Começar a Planejar
          </button>
        </div>
      </div>
    </Layout>
  );
}
