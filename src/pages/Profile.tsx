import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Icon from "@/components/ui/icon";

function Field({ label, required, type = "text", value, onChange }: {
  label: string; required?: boolean; type?: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-snpro text-sm text-[#392F3B] font-medium">{label}{required && <span className="text-[#E4610F]"> *</span>}</label>
      <input
        type={type} value={value} onChange={(e) => onChange(e.target.value)}
        className="px-3 py-2.5 border border-[#e8e2ea] rounded-lg font-snpro text-sm text-[#392F3B] focus:outline-none focus:border-[#E4610F] transition-colors"
      />
    </div>
  );
}

export default function Profile() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({ name: "Культист", surname: "", patronymic: "", phone: "", email: "cultist@kcc.ru", address: "", country: "Россия", city: "", postalAddress: "", index: "" });
  const f = (k: keyof typeof form) => (v: string) => setForm({ ...form, [k]: v });

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="brand-container py-6 flex-1">
        <Breadcrumbs crumbs={[{ label: "Учётная запись" }]} />
        <div className="max-w-2xl mt-8 mb-12">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-marmelad font-bold text-[#392F3B] text-3xl md:text-4xl">Учётная запись</h1>
            <Link to="/profile/orders" className="flex items-center gap-2 text-[#756977] font-snpro text-sm hover:text-[#E4610F] transition-colors border border-[#e8e2ea] px-4 py-2 rounded-lg hover:border-[#E4610F]">
              <Icon name="Package" size={16} />
              Мои заказы
            </Link>
          </div>

          {saved && (
            <div className="mb-6 flex items-center gap-3 bg-[#f0fdf6] border border-[#4FB282] text-[#4FB282] px-4 py-3 rounded-xl font-snpro text-sm">
              <Icon name="CheckCircle" size={18} />
              Данные успешно сохранены!
            </div>
          )}

          <div className="space-y-6">
            <div className="border border-[#e8e2ea] rounded-xl p-6">
              <h2 className="font-marmelad font-semibold text-[#392F3B] text-xl mb-5">Личные данные</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Имя" required value={form.name} onChange={f("name")} />
                <Field label="Фамилия" value={form.surname} onChange={f("surname")} />
                <Field label="Отчество" value={form.patronymic} onChange={f("patronymic")} />
                <Field label="Телефон" type="tel" value={form.phone} onChange={f("phone")} />
                <div className="sm:col-span-2">
                  <Field label="E-mail" required type="email" value={form.email} onChange={f("email")} />
                </div>
              </div>
            </div>

            <div className="border border-[#e8e2ea] rounded-xl p-6">
              <h2 className="font-marmelad font-semibold text-[#392F3B] text-xl mb-5">Безопасность</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Новый пароль" type="password" value="" onChange={() => {}} />
                <Field label="Повторите пароль" type="password" value="" onChange={() => {}} />
              </div>
            </div>

            <div className="border border-[#e8e2ea] rounded-xl p-6">
              <h2 className="font-marmelad font-semibold text-[#392F3B] text-xl mb-5">Данные доставки по умолчанию</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Страна" value={form.country} onChange={f("country")} />
                <Field label="Город" value={form.city} onChange={f("city")} />
                <div className="sm:col-span-2">
                  <Field label="Адрес" value={form.address} onChange={f("address")} />
                </div>
                <Field label="Почтовый индекс" required value={form.index} onChange={f("index")} />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSave}
                className="flex-1 bg-[#E4610F] hover:bg-[#c9510c] text-white font-marmelad font-bold uppercase tracking-wide py-3 rounded-lg transition-all hover:-translate-y-0.5"
              >
                Сохранить
              </button>
              <button
                onClick={() => alert("Выход будет настроен с бэкендом")}
                className="px-6 py-3 border border-[#e8e2ea] text-[#756977] font-marmelad font-semibold uppercase rounded-lg hover:border-[#E4610F] hover:text-[#E4610F] transition-colors"
              >
                Выйти
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}