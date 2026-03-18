import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "Quantos anos de experiência de ensino você possui?",
    options: ["Menos de 1 ano", "1-5 anos", "5-10 anos", "Mais de 10 anos"],
  },
  {
    id: 2,
    question: "Qual nível de ensino você atua principalmente?",
    options: ["Ensino Fundamental I", "Ensino Fundamental II", "Ensino Médio", "Níveis variados"],
  },
  {
    id: 3,
    question: "Você já trabalhou com alunos com TDAH?",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente"],
  },
  {
    id: 4,
    question: "Você já trabalhou com alunos no espectro autista?",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente"],
  },
  {
    id: 5,
    question: "Você já trabalhou com alunos com dislexia?",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente"],
  },
  {
    id: 6,
    question: "Qual é seu principal objetivo com educação inclusiva?",
    options: [
      "Aprender estratégias básicas",
      "Melhorar práticas existentes",
      "Desenvolver abordagem abrangente",
      "Tornar-me especialista",
    ],
  },
];

export function InitialDiagnosis() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleFinish = () => {
    localStorage.setItem("diagnosisCompleted", "true");
    localStorage.setItem("diagnosisAnswers", JSON.stringify(answers));
    navigate("/dashboard");
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl text-[#333333] mb-2">Diagnóstico Inicial</h1>
          <p className="text-[#717182]">
            Ajude-nos a personalizar sua experiência de aprendizado
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="mb-8">
            <div className="flex justify-between text-sm text-[#717182] mb-2">
              <span>Questão {currentQuestion + 1} de {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-[#F5F7FA] rounded-full h-2">
              <div
                className="bg-[#2F80ED] h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl text-[#333333] mb-6">
              {questions[currentQuestion].question}
            </h2>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full text-left px-6 py-4 bg-[#F5F7FA] hover:bg-[#2F80ED] hover:text-white rounded-lg transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {currentQuestion === questions.length - 1 && answers[currentQuestion] && (
            <button
              onClick={handleFinish}
              className="w-full bg-[#27AE60] text-white py-3 rounded-lg hover:bg-[#229954] transition-colors"
            >
              Finalizar Diagnóstico
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
