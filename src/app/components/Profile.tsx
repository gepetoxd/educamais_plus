import { Layout } from "./Layout";
import { User, Mail, Briefcase, Award, Calendar, TrendingUp } from "lucide-react";

export function Profile() {
  const userName = localStorage.getItem("userName") || "Professor(a)";

  const achievements = [
    {
      icon: Award,
      title: "Primeiros Passos",
      description: "Concluiu sua primeira trilha de aprendizado",
      color: "#2F80ED",
    },
    {
      icon: TrendingUp,
      title: "Aprendiz Consistente",
      description: "Acessou por 7 dias seguidos",
      color: "#27AE60",
    },
    {
      icon: Calendar,
      title: "Mestre do Planejamento",
      description: "Criou 10 planos de aula",
      color: "#F2C94C",
    },
  ];

  const stats = [
    { label: "Trilhas Concluídas", value: "2" },
    { label: "Tempo Total de Estudo", value: "12h 30min" },
    { label: "Aulas Planejadas", value: "12" },
    { label: "Recursos Baixados", value: "24" },
    { label: "Registros no Diário", value: "15" },
    { label: "Membro Desde", value: "Janeiro 2026" },
  ];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl text-[#333333] mb-2">Perfil</h1>
          <p className="text-[#717182]">
            Visualize seu progresso e gerencie sua conta
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#2F80ED] to-[#27AE60] rounded-full flex items-center justify-center mb-4">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-2xl text-[#333333] mb-1">{userName}</h2>
                <p className="text-[#717182] mb-6">Professor(a) de Ensino Fundamental</p>

                <div className="w-full space-y-3">
                  <div className="flex items-center gap-3 text-sm text-[#717182]">
                    <Mail className="w-4 h-4" />
                    <span>professor@educaplus.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#717182]">
                    <Briefcase className="w-4 h-4" />
                    <span>5+ anos de experiência</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#717182]">
                    <Calendar className="w-4 h-4" />
                    <span>Membro desde Janeiro 2026</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-[#2F80ED] text-white py-3 rounded-lg hover:bg-[#2870d1] transition-colors">
                  Editar Perfil
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl text-[#333333] mb-6">Seu Progresso</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="p-4 bg-[#F5F7FA] rounded-lg">
                    <p className="text-2xl text-[#333333] mb-1">{stat.value}</p>
                    <p className="text-sm text-[#717182]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl text-[#333333] mb-6">Conquistas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-[#F5F7FA] rounded-lg"
                    >
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${achievement.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: achievement.color }} />
                      </div>
                      <div>
                        <h3 className="text-[#333333] mb-1">{achievement.title}</h3>
                        <p className="text-sm text-[#717182]">{achievement.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl text-[#333333] mb-6">Preferências de Aprendizado</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-[#333333] mb-2">Estilo de Aprendizado Preferido</label>
                  <select className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F80ED]">
                    <option>Visual</option>
                    <option>Auditivo</option>
                    <option>Cinestésico</option>
                    <option>Leitura/Escrita</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#333333] mb-2">Foco Principal de Ensino</label>
                  <select className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F80ED]">
                    <option>Ensino Fundamental</option>
                    <option>Ensino Fundamental II</option>
                    <option>Ensino Médio</option>
                    <option>Educação Especial</option>
                  </select>
                </div>
                <button className="w-full bg-[#27AE60] text-white py-3 rounded-lg hover:bg-[#229954] transition-colors">
                  Salvar Preferências
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
