import { Layout } from "./Layout";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Play, FileText, CheckCircle, Circle } from "lucide-react";

export function LearningPathDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const modules = [
    {
      id: 1,
      title: "Compreendendo a Educação Inclusiva",
      duration: "45 min",
      completed: true,
      type: "video",
    },
    {
      id: 2,
      title: "Criando Conteúdo Acessível",
      duration: "30 min",
      completed: true,
      type: "video",
    },
    {
      id: 3,
      title: "Estratégias de Diferenciação",
      duration: "50 min",
      completed: false,
      type: "video",
    },
    {
      id: 4,
      title: "Avaliação e Análise",
      duration: "40 min",
      completed: false,
      type: "video",
    },
  ];

  const materials = [
    { name: "Manual de Educação Inclusiva.pdf", size: "2.4 MB" },
    { name: "Checklist de Diferenciação.pdf", size: "450 KB" },
    { name: "Modelos de Avaliação.docx", size: "1.2 MB" },
  ];

  const quizQuestions = [
    {
      question: "Qual é o objetivo principal da educação inclusiva?",
      options: [
        "Separar os alunos por habilidade",
        "Garantir que todos os alunos possam aprender juntos",
        "Reduzir o tamanho das turmas",
        "Simplificar o currículo",
      ],
    },
    {
      question: "Qual estratégia apoia alunos diversos?",
      options: [
        "Abordagem única para todos",
        "Instrução diferenciada",
        "Apenas testes padronizados",
        "Formato apenas de palestras",
      ],
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate("/learning-paths")}
          className="flex items-center gap-2 text-[#2F80ED] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Trilhas
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
              <div className="aspect-video bg-gradient-to-br from-[#2F80ED] to-[#27AE60] flex items-center justify-center">
                <Play className="w-20 h-20 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h1 className="text-2xl text-[#333333] mb-4">
                  Introdução à Educação Inclusiva
                </h1>
                <p className="text-[#717182]">
                  Este curso abrangente irá apresentá-lo aos princípios fundamentais
                  da educação inclusiva e fornecer estratégias práticas para criar
                  um ambiente de sala de aula acolhedor para todos os alunos.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl text-[#333333] mb-4">Módulos do Curso</h2>
              <div className="space-y-3">
                {modules.map((module) => (
                  <div
                    key={module.id}
                    className="flex items-center gap-4 p-4 bg-[#F5F7FA] rounded-lg hover:bg-[#E8F0FE] transition-colors cursor-pointer"
                  >
                    {module.completed ? (
                      <CheckCircle className="w-5 h-5 text-[#27AE60]" />
                    ) : (
                      <Circle className="w-5 h-5 text-[#717182]" />
                    )}
                    <div className="flex-1">
                      <h3 className="text-[#333333]">{module.title}</h3>
                      <p className="text-sm text-[#717182]">{module.duration}</p>
                    </div>
                    <Play className="w-5 h-5 text-[#2F80ED]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl text-[#333333] mb-4">Questionário</h2>
              <div className="space-y-6">
                {quizQuestions.map((q, idx) => (
                  <div key={idx}>
                    <p className="text-[#333333] mb-3">
                      {idx + 1}. {q.question}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((option, optIdx) => (
                        <label
                          key={optIdx}
                          className="flex items-center gap-3 p-3 bg-[#F5F7FA] rounded-lg cursor-pointer hover:bg-[#E8F0FE] transition-colors"
                        >
                          <input
                            type="radio"
                            name={`question-${idx}`}
                            className="w-4 h-4 text-[#2F80ED]"
                          />
                          <span className="text-[#333333]">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <button className="w-full bg-[#27AE60] text-white py-3 rounded-lg hover:bg-[#229954] transition-colors">
                  Enviar Respostas
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl text-[#333333] mb-4">Progresso</h2>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#717182]">Conclusão</span>
                  <span className="text-[#333333]">65%</span>
                </div>
                <div className="w-full h-3 bg-[#F5F7FA] rounded-full">
                  <div className="h-3 bg-[#2F80ED] rounded-full" style={{ width: "65%" }} />
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#717182]">Módulos concluídos</span>
                  <span className="text-[#333333]">2 de 4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#717182]">Tempo gasto</span>
                  <span className="text-[#333333]">2h 15min</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl text-[#333333] mb-4">Materiais do Curso</h2>
              <div className="space-y-3">
                {materials.map((material, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-[#F5F7FA] rounded-lg hover:bg-[#E8F0FE] transition-colors cursor-pointer"
                  >
                    <FileText className="w-5 h-5 text-[#2F80ED]" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#333333] truncate">{material.name}</p>
                      <p className="text-xs text-[#717182]">{material.size}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
