import { useState } from "react";
import { Layout } from "./Layout";
import { Search, Download, BookOpen, FileText, Video, Image } from "lucide-react";

export function Library() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["Todos", "Vídeos", "Artigos", "Modelos", "Atividades", "Guias"];

  const resources = [
    {
      id: 1,
      title: "Guia de Estratégias para TDAH em Sala de Aula",
      description: "Guia abrangente com mais de 25 estratégias comprovadas para apoiar alunos com TDAH",
      category: "Guias",
      type: "PDF",
      icon: FileText,
      size: "2.4 MB",
      downloads: 1250,
    },
    {
      id: 2,
      title: "Vídeo: Técnicas de Apoio ao Autismo",
      description: "Vídeo de 20 minutos cobrindo abordagens baseadas em evidências para apoio ao autismo",
      category: "Vídeos",
      type: "Vídeo",
      icon: Video,
      size: "145 MB",
      downloads: 890,
    },
    {
      id: 3,
      title: "Modelos de Instrução Diferenciada",
      description: "Modelos prontos para criar planos de aula diferenciados",
      category: "Modelos",
      type: "DOCX",
      icon: FileText,
      size: "850 KB",
      downloads: 2100,
    },
    {
      id: 4,
      title: "Pacote de Recursos Visuais de Aprendizagem",
      description: "Coleção de suportes visuais, cronogramas e cartões de comunicação",
      category: "Atividades",
      type: "ZIP",
      icon: Image,
      size: "15.2 MB",
      downloads: 1560,
    },
    {
      id: 5,
      title: "Artigo: Compreendendo a Dislexia",
      description: "Artigo aprofundado sobre características da dislexia e estratégias de apoio",
      category: "Artigos",
      type: "PDF",
      icon: BookOpen,
      size: "1.2 MB",
      downloads: 980,
    },
    {
      id: 6,
      title: "Atividades de Pausa Sensorial",
      description: "Atividades rápidas de pausa sensorial para a sala de aula",
      category: "Atividades",
      type: "PDF",
      icon: FileText,
      size: "550 KB",
      downloads: 1870,
    },
    {
      id: 7,
      title: "Checklist de Preparação para Reunião PEI",
      description: "Checklist completo para preparar reuniões eficazes de Plano Educacional Individualizado",
      category: "Modelos",
      type: "PDF",
      icon: FileText,
      size: "320 KB",
      downloads: 1340,
    },
    {
      id: 8,
      title: "Estratégias de Avaliação Inclusiva",
      description: "Guia para criar avaliações acessíveis e justas",
      category: "Guias",
      type: "PDF",
      icon: BookOpen,
      size: "1.8 MB",
      downloads: 1120,
    },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl text-[#333333] mb-2">Biblioteca de Recursos</h1>
          <p className="text-[#717182]">
            Acesse uma coleção abrangente de recursos e materiais de ensino
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717182]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar recursos..."
                className="w-full pl-12 pr-4 py-3 bg-[#F5F7FA] border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F80ED]"
              />
            </div>
          </div>

          <div className="flex gap-2 mt-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? "bg-[#2F80ED] text-white"
                    : "bg-[#F5F7FA] text-[#717182] hover:bg-[#E0E0E0]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => {
            const Icon = resource.icon;
            return (
              <div
                key={resource.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#2F80ED] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#2F80ED]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg text-[#333333] mb-1">{resource.title}</h3>
                      <span className="inline-block px-2 py-1 bg-[#F5F7FA] text-xs text-[#717182] rounded">
                        {resource.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[#717182] mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between text-xs text-[#717182] mb-4">
                    <span>{resource.size}</span>
                    <span>{resource.downloads} downloads</span>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 bg-[#2F80ED] text-white py-3 rounded-lg hover:bg-[#2870d1] transition-colors">
                    <Download className="w-4 h-4" />
                    Baixar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
