import { useState } from "react";
import { useNavigate } from "react-router";
import { BookOpen } from "lucide-react";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const hasCompletedDiagnosis = localStorage.getItem("diagnosisCompleted");
    if (hasCompletedDiagnosis) {
      navigate("/dashboard");
    } else {
      navigate("/diagnosis");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2F80ED] rounded-2xl mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl text-[#333333] mb-2">EducaPlus</h1>
          <p className="text-[#717182]">Ensino inclusivo de forma simples</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl text-[#333333] mb-6">Entrar</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[#333333] mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F80ED]"
                placeholder="seu@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-[#333333] mb-2">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F80ED]"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#2F80ED] text-white py-3 rounded-lg hover:bg-[#2870d1] transition-colors"
            >
              Entrar
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[#717182]">
              Não tem uma conta?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-[#2F80ED] hover:underline"
              >
                Cadastre-se
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
