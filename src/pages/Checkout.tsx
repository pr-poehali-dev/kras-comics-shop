import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Icon from "@/components/ui/icon";
import { useCart } from "@/store/cartStore";

const DELIVERY_OPTIONS = [
  { id: "sdek", label: "СДЭК", price: 590, desc: "2-7 дней" },
  { id: "letter", label: "Бандероль (Почта)", price: 200, desc: "7-14 дней" },
  { id: "parcel", label: "Посылка (Почта)", price: 450, desc: "7-21 день" },
];

const SDEK_PVZ = [
  { id: 1, address: "Красноярск, пр. Мира 95", hours: "Пн-Пт 9:00-20:00, Сб 10:00-18:00", metro: "Площадь Революции", phone: "+7 (391) 200-00-00" },
  { id: 2, address: "Красноярск, ул. Ленина 70", hours: "Пн-Пт 9:00-21:00, Сб-Вс 10:00-18:00", metro: "ул. Ленина", phone: "+7 (391) 200-11-11" },
];

function Field({ label, required, type = "text", value, onChange, error, placeholder }: {
  label: string; required?: boolean; type?: string; value: string; onChange: (v: string) => void; error?: boolean; placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-golos text-sm text-[#392F3B] font-medium">
        {label}{required && <span className="text-[#E4610F]"> *</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`px-3 py-2.5 border rounded-lg font-golos text-sm text-[#392F3B] focus:outline-none transition-colors ${
          error ? "border-[#E4610F] bg-[#fff5f0]" : "border-[#e8e2ea] focus:border-[#E4610F]"
        }`}
      />
      {error && <span className="text-[#E4610F] text-xs font-golos">Обязательное поле</span>}
    </div>
  );
}

export default function Checkout() {
  const { items, total } = useCart();
  const [form, setForm] = useState({ country: "Россия", name: "", email: "", city: "", patronymic: "", comment: "" });
  const [delivery, setDelivery] = useState("sdek");
  const [pvz, setPvz] = useState<number | null>(null);
  const [createProfile, setCreateProfile] = useState(false);
  const [profile, setProfile] = useState({ login: "", password: "", password2: "", phone: "", surname: "" });
  const [agreeData, setAgreeData] = useState(false);
  const [agreeOffer, setAgreeOffer] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [index, setIndex] = useState("");

  const deliveryOption = DELIVERY_OPTIONS.find((d) => d.id === delivery)!;
  const orderTotal = total + deliveryOption.price;

  const isPostal = delivery === "letter" || delivery === "parcel";

  function validate() {
    const e: Record<string, boolean> = {};
    if (!form.name.trim()) e.name = true;
    if (!form.email.trim()) e.email = true;
    if (!form.city.trim()) e.city = true;
    if (isPostal && !index.trim()) e.index = true;
    if (delivery === "sdek" && !pvz) e.pvz = true;
    if (createProfile) {
      if (!profile.login.trim()) e.login = true;
      if (!profile.surname.trim()) e.surname = true;
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  const canSubmit = agreeData && agreeOffer && form.name && form.email && form.city && (!isPostal || index) && (delivery !== "sdek" || pvz) && (!createProfile || (profile.login && profile.surname));

  function handleSubmit() {
    if (!validate()) return;
    alert("Переход к оплате! (Интеграция с платёжной системой будет настроена отдельно)");
  }

  const f = (key: keyof typeof form) => (v: string) => setForm({ ...form, [key]: v });
  const pf = (key: keyof typeof profile) => (v: string) => setProfile({ ...profile, [key]: v });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="brand-container py-6 flex-1">
        <Breadcrumbs crumbs={[{ label: "Корзина", href: "/cart" }, { label: "Оформление заказа" }]} />
        <h1 className="font-oswald font-bold text-[#392F3B] text-3xl mt-6 mb-8">Оформление заказа</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Contact form */}
            <div className="border border-[#e8e2ea] rounded-xl p-6">
              <h2 className="font-oswald font-bold text-[#392F3B] text-xl mb-5">Контактные данные</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Страна" required value={form.country} onChange={f("country")} />
                <Field label="Имя" required value={form.name} onChange={f("name")} error={errors.name} />
                <Field label="E-mail" required type="email" value={form.email} onChange={f("email")} error={errors.email} />
                <Field label="Город" required value={form.city} onChange={f("city")} error={errors.city} />
                <Field label="Отчество" value={form.patronymic} onChange={f("patronymic")} />
                <Field label="Комментарий к заказу" value={form.comment} onChange={f("comment")} />
                {isPostal && (
                  <Field label="Почтовый индекс" required value={index} onChange={setIndex} error={errors.index} placeholder="123456" />
                )}
              </div>

              <label className="flex items-center gap-3 mt-5 cursor-pointer group">
                <div
                  onClick={() => setCreateProfile(!createProfile)}
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${createProfile ? "bg-[#E4610F] border-[#E4610F]" : "border-[#e8e2ea] group-hover:border-[#E4610F]"}`}
                >
                  {createProfile && <Icon name="Check" size={12} className="text-white" />}
                </div>
                <span className="font-golos text-sm text-[#756977]">Создать профиль для отслеживания заказов</span>
              </label>

              {createProfile && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-[#e8e2ea]">
                  <Field label="Логин" required value={profile.login} onChange={pf("login")} error={errors.login} />
                  <Field label="Фамилия" required value={profile.surname} onChange={pf("surname")} error={errors.surname} />
                  <Field label="Пароль" type="password" value={profile.password} onChange={pf("password")} />
                  <Field label="Повторите пароль" type="password" value={profile.password2} onChange={pf("password2")} />
                  <Field label="Телефон" type="tel" value={profile.phone} onChange={pf("phone")} />
                </div>
              )}
            </div>

            {/* Delivery */}
            <div className="border border-[#e8e2ea] rounded-xl p-6">
              <h2 className="font-oswald font-bold text-[#392F3B] text-xl mb-5">Способ доставки</h2>
              <div className="space-y-3">
                {DELIVERY_OPTIONS.map((opt) => (
                  <label key={opt.id} className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all ${delivery === opt.id ? "border-[#E4610F] bg-[#fff8f5]" : "border-[#e8e2ea] hover:border-[#E4610F]/50"}`}>
                    <input type="radio" name="delivery" value={opt.id} checked={delivery === opt.id} onChange={() => setDelivery(opt.id)} className="sr-only" />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${delivery === opt.id ? "border-[#E4610F]" : "border-[#e8e2ea]"}`}>
                      {delivery === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-[#E4610F]" />}
                    </div>
                    <div className="flex-1">
                      <div className="font-oswald font-semibold text-[#392F3B]">{opt.label}</div>
                      <div className="text-[#756977] font-golos text-sm">{opt.desc}</div>
                    </div>
                    <span className="font-oswald font-bold text-[#E4610F]">{opt.price} ₽</span>
                  </label>
                ))}
              </div>

              {delivery === "sdek" && (
                <div className="mt-5">
                  <h3 className="font-oswald font-semibold text-[#392F3B] mb-3">Выберите пункт выдачи:</h3>
                  {errors.pvz && <p className="text-[#E4610F] text-xs font-golos mb-2">Выберите ПВЗ</p>}
                  <div className="space-y-2">
                    {SDEK_PVZ.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => setPvz(p.id)}
                        className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${pvz === p.id ? "border-[#E4610F] bg-[#fff8f5]" : "border-[#e8e2ea] hover:border-[#E4610F]/50"}`}
                      >
                        <div className="flex items-start gap-2">
                          <Icon name="MapPin" size={14} className="text-[#E4610F] mt-0.5 shrink-0" />
                          <div>
                            <p className="font-golos font-medium text-[#392F3B] text-sm">{p.address}</p>
                            <p className="text-[#756977] font-golos text-xs mt-1">{p.hours}</p>
                            <p className="text-[#756977] font-golos text-xs">{p.metro} · {p.phone}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Agreements */}
            <div className="space-y-3">
              {[
                { state: agreeData, set: setAgreeData, label: "Я согласен(а) на обработку персональных данных" },
                { state: agreeOffer, set: setAgreeOffer, label: "Я принимаю условия публичной оферты" },
              ].map(({ state, set, label }, i) => (
                <label key={i} className="flex items-start gap-3 cursor-pointer group">
                  <div
                    onClick={() => set(!state)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${state ? "bg-[#E4610F] border-[#E4610F]" : "border-[#e8e2ea] group-hover:border-[#E4610F]"}`}
                  >
                    {state && <Icon name="Check" size={12} className="text-white" />}
                  </div>
                  <span className="font-golos text-sm text-[#756977]">{label} <span className="text-[#E4610F]">*</span></span>
                </label>
              ))}
            </div>
          </div>

          {/* Order summary */}
          <div>
            <div className="border border-[#e8e2ea] rounded-xl p-6 sticky top-24">
              <h2 className="font-oswald font-bold text-[#392F3B] text-xl mb-5">Ваш заказ</h2>
              <div className="space-y-3 mb-5">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.image} alt={item.title} className="w-12 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <p className="font-golos text-sm text-[#392F3B] font-medium leading-tight">{item.title}</p>
                      <p className="font-golos text-xs text-[#756977] mt-1">{item.qty} × {item.price} ₽</p>
                    </div>
                    <span className="font-oswald font-bold text-[#392F3B]">{item.price * item.qty} ₽</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#e8e2ea] pt-4 space-y-2 font-golos text-sm text-[#756977]">
                <div className="flex justify-between">
                  <span>Товары</span>
                  <span className="text-[#392F3B]">{total} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Доставка ({deliveryOption.label})</span>
                  <span className="text-[#392F3B]">{deliveryOption.price} ₽</span>
                </div>
                <div className="flex justify-between font-oswald font-bold text-[#392F3B] text-lg pt-2 border-t border-[#e8e2ea]">
                  <span>Итого</span>
                  <span className="text-[#E4610F]">{orderTotal} ₽</span>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                disabled={!canSubmit}
                className={`mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-lg font-oswald font-bold uppercase tracking-wide text-white transition-all ${
                  canSubmit ? "bg-[#E4610F] hover:bg-[#c9510c] hover:-translate-y-0.5 cursor-pointer" : "bg-[#cbbfce] cursor-not-allowed"
                }`}
              >
                <Icon name="CreditCard" size={18} />
                Перейти к оплате
              </button>
              <p className="text-[#cbbfce] font-golos text-xs text-center mt-3">Оплата картой, ЮKassa и другими способами</p>
            </div>
          </div>
        </div>
      </div>
      <Footer compact />
    </div>
  );
}
