import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Icon from "@/components/ui/icon";

const PICKUP = [
  { address: "Красноярск, Пушкина-Колотушкина 29", desc: "На смертоносной лестнице, на запас свежей поставки", hours: "По договорённости" },
  { address: "Красноярск, ул. Ленина 1", desc: "Второй пункт самовывоза", hours: "По договорённости" },
];

export default function Delivery() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="brand-container py-6 flex-1">
        <Breadcrumbs crumbs={[{ label: "Оплата и доставка" }]} />
        <div className="max-w-3xl mt-8 mb-12">
          <h1 className="font-oswald font-bold text-[#392F3B] text-4xl md:text-5xl mb-8">Оплата и доставка</h1>

          {/* Payment */}
          <section className="mb-10">
            <h2 className="font-oswald font-bold text-[#392F3B] text-2xl mb-4 flex items-center gap-2">
              <Icon name="CreditCard" size={22} className="text-[#E4610F]" /> Оплата
            </h2>
            <div className="space-y-3 text-[#756977] font-golos leading-relaxed">
              <p>Принимаем оплату банковской картой (Visa, Mastercard, МИР) через безопасный платёжный шлюз ЮKassa.</p>
              <p>Все транзакции защищены SSL-шифрованием. Данные карт не хранятся на нашем сайте.</p>
              <p>Оплата происходит в момент оформления заказа. После успешной оплаты вы получите подтверждение на e-mail.</p>
            </div>
          </section>

          {/* Shipping */}
          <section className="mb-10">
            <h2 className="font-oswald font-bold text-[#392F3B] text-2xl mb-4 flex items-center gap-2">
              <Icon name="Package" size={22} className="text-[#E4610F]" /> Доставка
            </h2>
            <div className="space-y-4">
              {[
                { title: "Почта России — бандероль", price: "200 ₽", time: "7–14 рабочих дней", icon: "Mail" },
                { title: "Почта России — посылка", price: "450 ₽", time: "7–21 рабочий день", icon: "Package" },
                { title: "СДЭК до ПВЗ", price: "590 ₽", time: "2–7 рабочих дней", icon: "Truck" },
              ].map((d) => (
                <div key={d.title} className="flex items-start gap-4 p-4 border border-[#e8e2ea] rounded-xl hover:border-[#E4610F]/50 transition-colors">
                  <Icon name={d.icon as "Mail"} size={22} className="text-[#8A5298] mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-oswald font-semibold text-[#392F3B]">{d.title}</h3>
                    <p className="text-[#756977] font-golos text-sm mt-1">{d.time}</p>
                  </div>
                  <span className="font-oswald font-bold text-[#E4610F]">{d.price}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Pickup */}
          <section>
            <h2 className="font-oswald font-bold text-[#392F3B] text-2xl mb-4 flex items-center gap-2">
              <Icon name="MapPin" size={22} className="text-[#E4610F]" /> Самовывоз в Красноярске
            </h2>
            <div className="space-y-4">
              {PICKUP.map((p, i) => (
                <div key={i} className="p-4 bg-[#faf8fb] border border-[#e8e2ea] rounded-xl">
                  <p className="font-oswald font-semibold text-[#392F3B]">{p.address}</p>
                  <p className="text-[#756977] font-golos text-sm mt-1">{p.desc}</p>
                  <p className="text-[#8A5298] font-golos text-sm font-medium mt-1 flex items-center gap-1">
                    <Icon name="Clock" size={13} /> {p.hours}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
