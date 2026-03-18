import { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router";
import { LayoutDashboard, BookOpen, ClipboardList, Library, BookMarked, User, LogOut } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Início", path: "/dashboard" },
    { icon: BookOpen, label: "Trilhas", path: "/learning-paths" },
    { icon: ClipboardList, label: "Planejar", path: "/planner" },
    { icon: Library, label: "Biblioteca", path: "/library" },
    { icon: BookMarked, label: "Diário", path: "/diary" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      <aside className="hidden lg:flex w-64 bg-white border-r border-[#E0E0E0] flex-col">
        <div className="p-6 border-b border-[#E0E0E0]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#2F80ED] rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl text-[#333333]">EducaPlus</h1>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#2F80ED] text-white"
                        : "text-[#717182] hover:bg-[#F5F7FA]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-[#E0E0E0] space-y-2">
          <button
            onClick={() => navigate("/profile")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[#717182] hover:bg-[#F5F7FA] transition-colors"
          >
            <User className="w-5 h-5" />
            <span>Perfil</span>
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[#EB5757] hover:bg-[#FEF2F2] transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Sair</span>
          </button>
        </div>
      </aside>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E0E0E0] z-50">
        <nav className="flex justify-around p-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive ? "text-[#2F80ED]" : "text-[#717182]"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <main className="flex-1 overflow-auto">
        <div className="p-4 md:p-8 pb-20 lg:pb-8">{children}</div>
      </main>
    </div>
  );
}
