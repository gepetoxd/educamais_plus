import { useState } from "react";
import { Layout } from "./Layout";
import { Plus, Calendar } from "lucide-react";

interface DiaryEntry {
  id: number;
  content: string;
  date: string;
}

export function Diary() {
  const [entries, setEntries] = useState<DiaryEntry[]>([
    {
      id: 1,
      content: "Hoje testei um novo cronograma visual para meu aluno com autismo. Funcionou muito bem! Ele conseguiu fazer a transição entre atividades de forma muito mais suave. Vou continuar usando essa estratégia e talvez criar mais suportes visuais para toda a turma.",
      date: "2026-03-18",
    },
    {
      id: 2,
      content: "Tive um avanço com um dos meus alunos que tem TDAH. Ao fornecer ferramentas sensoriais e permitir pausas para movimento, notei uma melhora significativa no foco durante o tempo de leitura. É incrível como pequenas acomodações podem fazer uma grande diferença.",
      date: "2026-03-15",
    },
    {
      id: 3,
      content: "Implementei instrução diferenciada na aula de matemática de hoje. Criei três níveis diferentes de atividades baseados nas necessidades dos alunos. Todos os alunos estavam engajados e trabalhando em seu próprio ritmo. Essa abordagem definitivamente requer mais tempo de preparação, mas os resultados valem a pena.",
      date: "2026-03-12",
    },
  ]);

  const [newEntry, setNewEntry] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEntry.trim()) {
      const entry: DiaryEntry = {
        id: Date.now(),
        content: newEntry,
        date: new Date().toISOString().split("T")[0],
      };
      setEntries([entry, ...entries]);
      setNewEntry("");
      setShowForm(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl text-[#333333] mb-2">Diário de Prática</h1>
            <p className="text-[#717182]">
              Reflita sobre suas experiências de ensino e acompanhe seu progresso
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-[#2F80ED] text-white px-6 py-3 rounded-lg hover:bg-[#2870d1] transition-colors"
          >
            <Plus className="w-5 h-5" />
            Novo Registro
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-xl text-[#333333] mb-4">Novo Registro no Diário</h2>
            <form onSubmit={handleSubmit}>
              <textarea
                value={newEntry}
                onChange={(e) => setNewEntry(e.target.value)}
                placeholder="Reflita sobre a experiência de ensino de hoje, desafios enfrentados, estratégias que funcionaram ou percepções obtidas..."
                className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F80ED] h-40 resize-none mb-4"
                required
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-[#27AE60] text-white py-3 rounded-lg hover:bg-[#229954] transition-colors"
                >
                  Salvar Registro
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

        <div className="space-y-6">
          {entries.map((entry) => (
            <div key={entry.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-[#717182] text-sm mb-4">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(entry.date)}</span>
              </div>
              <p className="text-[#333333] leading-relaxed">{entry.content}</p>
            </div>
          ))}
        </div>

        {entries.length === 0 && !showForm && (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="w-16 h-16 bg-[#F5F7FA] rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-[#717182]" />
            </div>
            <h3 className="text-xl text-[#333333] mb-2">Ainda não há registros</h3>
            <p className="text-[#717182] mb-6">
              Comece a documentar sua jornada de ensino e reflita sobre suas experiências
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#2F80ED] text-white px-6 py-3 rounded-lg hover:bg-[#2870d1] transition-colors"
            >
              Criar Primeiro Registro
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
