import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="font-oswald font-bold text-[#392F3B] text-3xl mb-2">Вход в аккаунт</h1>
            <p className="text-[#756977] font-golos text-sm">Нет аккаунта? <Link to="/register" className="text-[#E4610F] hover:underline">Зарегистрироваться</Link></p>
          </div>
          <div className="border border-[#e8e2ea] rounded-2xl p-8 shadow-sm">
            <div className="space-y-4">
              <div>
                <label className="font-golos text-sm text-[#392F3B] font-medium block mb-1">E-mail <span className="text-[#E4610F]">*</span></label>
                <input
                  type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-3 py-2.5 border border-[#e8e2ea] rounded-lg font-golos text-sm text-[#392F3B] placeholder-[#cbbfce] focus:outline-none focus:border-[#E4610F] transition-colors"
                />
              </div>
              <div>
                <label className="font-golos text-sm text-[#392F3B] font-medium block mb-1">Пароль <span className="text-[#E4610F]">*</span></label>
                <input
                  type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3 py-2.5 border border-[#e8e2ea] rounded-lg font-golos text-sm text-[#392F3B] placeholder-[#cbbfce] focus:outline-none focus:border-[#E4610F] transition-colors"
                />
              </div>
              <button
                onClick={() => alert("Авторизация будет настроена с бэкендом")}
                className="w-full bg-[#E4610F] hover:bg-[#c9510c] text-white font-oswald font-bold uppercase tracking-wide py-3 rounded-lg transition-all hover:-translate-y-0.5"
              >
                Войти
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer compact />
    </div>
  );
}
