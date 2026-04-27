import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Icon from "@/components/ui/icon";

const STATUS_STYLES: Record<string, { label: string; cls: string }> = {
  confirmed: { label: "Подтверждён", cls: "bg-[#f0fdf6] text-[#4FB282]" },
  accepted: { label: "Принят", cls: "bg-[#fff8f5] text-[#E4610F]" },
  delivery: { label: "В доставке", cls: "bg-[#f5f0f6] text-[#8A5298]" },
  cancelled: { label: "Отменён", cls: "bg-[#fef2f2] text-[#ef4444]" },
  done: { label: "Завершён", cls: "bg-[#f0fdf6] text-[#4FB282]" },
};

const SAMPLE_ORDERS = [
  { id: "KCC-0042", date: "15 апр 2026", status: "delivery", total: 1891, items: 2 },
  { id: "KCC-0038", date: "2 мар 2026", status: "done", total: 950, items: 1 },
  { id: "KCC-0031", date: "18 янв 2026", status: "done", total: 2150, items: 3 },
];

export default function Orders() {
  const hasOrders = SAMPLE_ORDERS.length > 0;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="brand-container py-6 flex-1">
        <Breadcrumbs crumbs={[{ label: "Учётная запись", href: "/profile" }, { label: "Мои заказы" }]} />
        <div className="max-w-2xl mt-8 mb-12">
          <h1 className="font-oswald font-bold text-[#392F3B] text-3xl md:text-4xl mb-8">Мои заказы</h1>

          {!hasOrders ? (
            <div className="text-center py-16">
              <Icon name="Package" size={48} className="text-[#cbbfce] mx-auto mb-4" />
              <h2 className="font-oswald text-xl text-[#392F3B] mb-2">Заказов пока нет</h2>
              <p className="text-[#756977] font-golos mb-6">Самое время выбрать что-нибудь интересное!</p>
              <Link to="/shop" className="inline-block bg-[#E4610F] hover:bg-[#c9510c] text-white font-oswald font-bold uppercase px-8 py-3 rounded-lg transition-all">
                В магазин!
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {SAMPLE_ORDERS.map((o) => {
                const s = STATUS_STYLES[o.status];
                return (
                  <div key={o.id} className="border border-[#e8e2ea] rounded-xl p-5 hover:border-[#E4610F]/50 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <span className="font-oswald font-bold text-[#392F3B] text-lg">#{o.id}</span>
                        <p className="text-[#756977] font-golos text-sm mt-0.5">{o.date} · {o.items} товар{o.items > 1 ? "а" : ""}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full font-golos text-xs font-medium ${s.cls}`}>{s.label}</span>
                        <span className="font-oswald font-bold text-[#E4610F] text-lg">{o.total} ₽</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
