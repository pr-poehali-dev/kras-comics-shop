import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Icon from "@/components/ui/icon";

const STORES = [
  { city: "Красноярск", shops: ["Бакен", "Респаунт"] },
  { city: "Москва", shops: ["Чук и Гик"] },
  { city: "Санкт-Петербург", shops: ["28"] },
  { city: "Новосибирск", shops: ["Собакен"] },
];

export default function Partnership() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="brand-container py-6 flex-1">
        <Breadcrumbs crumbs={[{ label: "Сотрудничество" }]} />
        <div className="max-w-3xl mt-8">
          <h1 className="font-oswald font-bold text-[#392F3B] text-4xl md:text-5xl mb-6">Сотрудничество</h1>
          <div className="space-y-4 text-[#756977] font-golos leading-relaxed">
            <p>
              Хотите продавать наши книги в своём магазине? Или хотите, чтобы мы приняли участие
              в вашем мероприятии? Мы открыты к любым формам сотрудничества!
            </p>
            <p>
              Работаем с независимыми книжными магазинами, арт-пространствами и организаторами
              фестивалей комиксов по всей России.
            </p>
          </div>

          <div className="mt-8 p-5 bg-[#f5f0f6] rounded-xl flex items-center gap-4">
            <Icon name="Mail" size={24} className="text-[#8A5298] shrink-0" />
            <div>
              <p className="font-golos text-[#392F3B] font-medium">По вопросам сотрудничества:</p>
              <a href="mailto:KCC@bookscult.ru" className="font-oswald font-bold text-[#E4610F] text-lg hover:underline">KCC@bookscult.ru</a>
            </div>
          </div>
        </div>

        {/* Stores */}
        <div className="mt-12 mb-10">
          <h2 className="font-oswald font-bold text-[#392F3B] text-2xl mb-6">Где купить офлайн</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STORES.map((s) => (
              <div key={s.city} className="border border-[#e8e2ea] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="MapPin" size={16} className="text-[#E4610F]" />
                  <h3 className="font-oswald font-bold text-[#392F3B] text-lg">{s.city}</h3>
                </div>
                <ul className="space-y-1">
                  {s.shops.map((shop) => (
                    <li key={shop} className="flex items-center gap-2 text-[#756977] font-golos text-sm">
                      <Icon name="BookOpen" size={13} className="text-[#8A5298]" />
                      {shop}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <blockquote className="mt-10 border-l-4 border-[#E4610F] pl-6 py-2">
            <p className="font-golos text-[#756977] italic text-lg leading-relaxed">
              «Мы делаем книжки, которые и сами хотели бы читать. И хотим, чтобы их могли найти везде, где есть настоящие читатели.»
            </p>
            <cite className="font-oswald text-[#392F3B] font-semibold text-sm mt-2 block not-italic">— Команда KRAS COMICS CULT</cite>
          </blockquote>
        </div>
      </div>
      <Footer />
    </div>
  );
}
