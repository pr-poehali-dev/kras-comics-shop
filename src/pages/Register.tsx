import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "", password2: "" });
  const f = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [k]: e.target.value });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="font-oswald font-bold text-[#392F3B] text-3xl mb-2">Регистрация</h1>
            <p className="text-[#756977] font-golos text-sm">Уже есть аккаунт? <Link to="/login" className="text-[#E4610F] hover:underline">Войти</Link></p>
          </div>
          <div className="border border-[#e8e2ea] rounded-2xl p-8 shadow-sm">
            <div className="space-y-4">
              {[
                { label: "E-mail", type: "email", key: "email" as const, placeholder: "your@email.com" },
                { label: "Пароль", type: "password", key: "password" as const, placeholder: "••••••••" },
                { label: "Повторите пароль", type: "password", key: "password2" as const, placeholder: "••••••••" },
              ].map(({ label, type, key, placeholder }) => (
                <div key={key}>
                  <label className="font-golos text-sm text-[#392F3B] font-medium block mb-1">{label} <span className="text-[#E4610F]">*</span></label>
                  <input
                    type={type} value={form[key]} onChange={f(key)} placeholder={placeholder}
                    className="w-full px-3 py-2.5 border border-[#e8e2ea] rounded-lg font-golos text-sm text-[#392F3B] placeholder-[#cbbfce] focus:outline-none focus:border-[#E4610F] transition-colors"
                  />
                </div>
              ))}
              <button
                onClick={() => alert("Регистрация будет настроена с бэкендом")}
                className="w-full bg-[#4FB282] hover:bg-[#3d9a6f] text-white font-oswald font-bold uppercase tracking-wide py-3 rounded-lg transition-all hover:-translate-y-0.5"
              >
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer compact />
    </div>
  );
}
