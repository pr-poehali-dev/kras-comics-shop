import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Icon from "@/components/ui/icon";

const TEAM = [
  { name: "Дима Иванов", role: "Автор, основатель", emoji: "✏️" },
  { name: "Иван Диманов", role: "Иллюстратор", emoji: "🎨" },
  { name: "Диван Иванов", role: "Автор обложек", emoji: "🖼️" },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="brand-container py-6 flex-1">
        <Breadcrumbs crumbs={[{ label: "О нас" }]} />

        <div className="max-w-3xl mt-8">
          <h1 className="font-oswald font-bold text-[#392F3B] text-4xl md:text-5xl mb-6">О проекте</h1>
          <div className="space-y-5 text-[#756977] font-golos leading-relaxed text-base">
            <p>
              <strong className="text-[#392F3B]">KRAS COMICS CULT</strong> — небольшое самиздательство
              и сообщество художников и авторов комиксов, базирующееся в Красноярске.
            </p>
            <p>
              Мы выпускаем оригинальные книжки, которые и сами хотели бы почитать.
              Проводим лекции, мастер-классы и устраиваем совместные сеансы рисования.
              Участвуем в фестивалях по всей России.
            </p>
            <p>
              Наши книги можно купить здесь, а также в независимых книжных и магазинах
              комиксов — в Красноярске, Москве, Санкт-Петербурге и Новосибирске.
            </p>
          </div>
        </div>

        {/* Social */}
        <div className="mt-12">
          <h2 className="font-oswald font-bold text-[#392F3B] text-2xl mb-5">Мы в соцсетях</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Telegram", icon: "Send", color: "#229ED9" },
              { label: "YouTube", icon: "Youtube", color: "#FF0000" },
              { label: "ВКонтакте", icon: "Users", color: "#4A76A8" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                className="flex items-center gap-3 px-5 py-3 border border-[#e8e2ea] rounded-xl hover:border-[#E4610F] hover:shadow-md transition-all group"
              >
                <Icon name={s.icon as "Send"} size={20} style={{ color: s.color }} />
                <span className="font-oswald font-semibold text-[#392F3B] group-hover:text-[#E4610F] transition-colors">{s.label}</span>
                <Icon name="ExternalLink" size={14} className="text-[#cbbfce]" />
              </a>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mt-14 mb-10">
          <h2 className="font-oswald font-bold text-[#392F3B] text-2xl mb-6">Команда безумцев</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {TEAM.map((m) => (
              <div key={m.name} className="border border-[#e8e2ea] rounded-xl p-6 text-center hover:border-[#8A5298] hover:shadow-md transition-all">
                <div className="text-5xl mb-4">{m.emoji}</div>
                <h3 className="font-oswald font-bold text-[#392F3B] text-lg">{m.name}</h3>
                <p className="text-[#756977] font-golos text-sm mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
