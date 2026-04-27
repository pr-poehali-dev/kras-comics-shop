import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Icon from "@/components/ui/icon";
import { PRODUCTS } from "@/data/products";

const TEAM = [
  { name: "Дима Иванов", role: "Идейный вдохновитель и основатель", desc: "Придумывает миры и следит за тем, чтобы всё это вообще выходило", color: "#c4a8d4" },
  { name: "Иван Диманов", role: "Злобный клон, который ни разу не пытался захватить издательство", desc: "Рисует и иногда пишет что-то умное", color: "#8fd9b6" },
  { name: "Диван Иванов", role: "Он ещё не определился", desc: "Отвечает за обложки и эстетику проекта", color: "#FFEC5C" },
  { name: "Дима Иванов", role: "Идейный вдохновитель и основатель", desc: "Дублирующий состав на случай непредвиденных обстоятельств", color: "#c4a8d4" },
];

// Все изображения из продуктов для галереи
const GALLERY_IMAGES = PRODUCTS.map((p) => p.image);

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Top section: text + gallery side by side */}
      <div className="brand-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: text */}
          <div>
            <h1 className="font-oswald font-bold text-[#392F3B] text-4xl md:text-5xl mb-2">О нас</h1>
            <Breadcrumbs crumbs={[{ label: "О нас" }]} />

            <div className="space-y-4 text-[#756977] font-golos leading-relaxed text-sm mt-6">
              <p>
                <strong className="text-[#392F3B]">KRAS COMICS CULT</strong> — это небольшое самиздательство и
                сообщество художников и авторов комиксов, которое базируется в Красноярске.
                Выпускаем оригинальные книжки, которые и сами хотели бы почитать, проводим
                лекции и устраиваем совместные сеансы рисования!
              </p>
              <p>
                Наши книги можно купить только на этом сайте, в независимых книжных
                и магазинах комиксов, а также на фестивалях, в которых мы участвуем.
              </p>
              <p>
                Этот сайт — ещё один шаг на пути превращения в полноценное и самое
                крутое издательство. Это цель и мечта!
              </p>
            </div>

            {/* Social icons */}
            <div className="mt-6">
              <p className="font-golos text-[#392F3B] font-medium text-sm mb-3">Наши соцсети:</p>
              <div className="flex items-center gap-4">
                <a href="#" aria-label="Telegram" className="text-[#392F3B] hover:text-[#E4610F] transition-colors">
                  <Icon name="Send" size={22} />
                </a>
                <a href="#" aria-label="YouTube" className="text-[#392F3B] hover:text-[#E4610F] transition-colors">
                  <Icon name="Youtube" size={22} />
                </a>
                <a href="#" aria-label="VK" className="text-[#392F3B] hover:text-[#E4610F] transition-colors">
                  <Icon name="Users" size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: masonry-style gallery */}
          <div className="grid grid-cols-3 gap-2">
            {GALLERY_IMAGES.slice(0, 9).map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-lg ${i === 4 ? "col-span-2 row-span-2" : ""}`}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team section — dark bg */}
      <section style={{ backgroundColor: "#19031D" }} className="py-14">
        <div className="brand-container">
          <h2 className="font-oswald font-bold text-white text-3xl text-center mb-10">Команда</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map((m, i) => (
              <div key={i} className="rounded-xl overflow-hidden flex flex-col" style={{ backgroundColor: "#2a0d30" }}>
                {/* Color block (аватар-заглушка) */}
                <div
                  className="w-full aspect-square"
                  style={{ backgroundColor: m.color }}
                />
                {/* Info */}
                <div className="p-4">
                  <h3 className="font-oswald font-bold text-white text-base">{m.name}</h3>
                  <p className="text-[#a895ad] font-golos text-xs mt-1 leading-snug">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}