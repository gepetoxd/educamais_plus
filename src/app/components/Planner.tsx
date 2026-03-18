import { useState } from "react";
import { Layout } from "./Layout";
import { Plus, Edit2, Trash2 } from "lucide-react";

interface Lesson {
  id: number;
  topic: string;
  objective: string;
  strategies: string;
  resources: string;
  date: string;
}

export function Planner() {
  const [showForm, setShowForm] = useState(false);
  const [lessons, setLessons] = useState<Lesson[]>([
    {
      id: 1,
      topic: "Introdução às Frações",
      objective: "Os alunos compreenderão conceitos básicos de frações e identificarão numerador e denominador",
      strategies: "Recursos visuais, manipulativos práticos, tutoria entre pares",
      resources: "Círculos de fração, folhas de exercícios, lousa interativa",
      date: "2026-03-15",
    },
    {
      id: 2,
      topic: "Estratégias de Compreensão de Leitura",
      objective: "Desenvolver habilidades de leitura ativa e melhorar a compreensão de texto",
      strategies: "Organizadores gráficos, protocolo de pensar em voz alta, perguntas estruturadas",
      resources: "Textos de leitura, organizadores gráficos, marca-textos",
      date: "2026-03-18",
    },
  ]);

  const [formData, setFormData] = useState({
    topic: "",
    objective: "",
    strategies: "",
    resources: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newLesson: Lesson = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString().split("T")[0],
    };
    setLessons([newLesson, ...lessons]);
    setFormData({ topic: "", objective: "", strategies: "", resources: "" });
    setShowForm(false);
  };

  const deleteLesson = (id: number) => {
    setLessons(lessons.filter((lesson) => lesson.id !== id));
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl text-[#333333] mb-2">Planejador de Aulas</h1>
            <p className="text-[#717182]">
              Crie planos de aula inclusivos com estratégias de diferenciação integradas
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-[#2F80ED] text-white px-6 py-3 rounded-lg hover:bg-[#2870d1] transition-colors"
          >
            <Plus className="w-5 h-5" />
            Nova Aula
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-xl text-[#333333] mb-6">Criar Novo Plano de Aula</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#333333] mb-2">Tema da Aula</label>
                <input
                  type="text"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F80ED]"
                  placeholder="Ex: Introdução à Fotossíntese"
                  required
                />
              </div>
              <div>
                <label className="block text-[#333333] mb-2">Objetivo de Aprendizagem</label>
                <textarea
                  value={formData.objective}
                  onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F80ED] h-24 resize-none"
                  placeholder="O que os alunos devem ser capazes de fazer ao final da aula?"
                  required
                />
              </div>
              <div>
                <label className="block text-[#333333] mb-2">Estratégias Inclusivas</label>
                <textarea
                  value={formData.strategies}
                  onChange={(e) => setFormData({ ...formData, strategies: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F80ED] h-24 resize-none"
                  placeholder="Liste estratégias de diferenciação e acomodação"
                  required
                />
              </div>
              <div>
                <label className="block text-[#333333] mb-2">Recursos Necessários</label>
                <input
                  type="text"
                  value={formData.resources}
                  onChange={(e) => setFormData({ ...formData, resources: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F80ED]"
                  placeholder="Materiais, ferramentas, tecnologia necessária"
                  required
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-[#27AE60] text-white py-3 rounded-lg hover:bg-[#229954] transition-colors"
                >
                  Salvar Plano de Aula
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 bg-[#F5F7FA] text-[#333333] rounded-lg hover:bg-[#E0E0E0] transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="space-y-4">
          {lessons.map((lesson) => (
            <div key={lesson.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl text-[#333333]">{lesson.topic}</h3>
                    <span className="text-sm text-[#717182]">{lesson.date}</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-[#717182]">Objetivo: </span>
                      <span className="text-[#333333]">{lesson.objective}</span>
                    </div>
                    <div>
                      <span className="text-[#717182]">Estratégias: </span>
                      <span className="text-[#333333]">{lesson.strategies}</span>
                    </div>
                    <div>
                      <span className="text-[#717182]">Recursos: </span>
                      <span className="text-[#333333]">{lesson.resources}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-[#2F80ED] hover:bg-[#F5F7FA] rounded-lg transition-colors">
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => deleteLesson(lesson.id)}
                    className="p-2 text-[#EB5757] hover:bg-[#FEF2F2] rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
