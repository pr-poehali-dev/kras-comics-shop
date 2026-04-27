import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface FooterProps {
  compact?: boolean;
}

export default function Footer({ compact = false }: FooterProps) {
  if (compact) {
    return (
      <footer style={{ backgroundColor: "#19031D" }} className="py-6 mt-auto">
        <div className="brand-container text-center">
          <p className="text-[#756977] text-sm font-golos">
            ИП Иванов Дмитрий Батькович · ИНН 1234567890 · ОГРН 1234567890123456
          </p>
          <p className="text-[#756977] text-xs mt-1 font-golos">
            Красноярск, Пушкина-Колотушкина 29
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer style={{ backgroundColor: "#19031D" }} className="mt-auto">
      <div className="brand-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Info */}
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="font-oswald font-bold text-white text-xl">KRAS COMICS CULT</span>
              <span style={{ color: "#E4610F" }} className="font-golos text-sm mt-1">© 2026</span>
            </div>
            <div className="space-y-2 text-[#756977] text-sm font-golos">
              <div className="flex items-start gap-2">
                <Icon name="MapPin" size={14} className="text-[#FFEC5C] mt-0.5 shrink-0" />
                <span>Красноярск, Пушкина-Колотушкина 29<br />(книги по смертоносной лестнице, на запас свежей поставки)</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={14} className="text-[#FFEC5C] shrink-0" />
                <a href="mailto:KCC@bookscult.ru" className="hover:text-[#FFEC5C] transition-colors">KCC@bookscult.ru</a>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Building2" size={14} className="text-[#FFEC5C] mt-0.5 shrink-0" />
                <span>ИП Иванов Дмитрий Батькович<br />ИНН 1234567890 · ОГРН 1234567890123456</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-oswald text-white text-base uppercase tracking-wide mb-4">Навигация</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Магазин", href: "/shop" },
                { label: "О нас", href: "/about" },
                { label: "Сотрудничество", href: "/partnership" },
                { label: "Оплата и доставка", href: "/delivery" },
                { label: "Политика конфиденциальности", href: "/privacy" },
                { label: "Публичная оферта", href: "/privacy" },
                { label: "FAQ", href: "/faq" },
              ].map((l) => (
                <Link key={l.href + l.label} to={l.href} className="text-[#756977] text-sm font-golos hover:text-[#FFEC5C] transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social + credits */}
          <div>
            <h4 className="font-oswald text-white text-base uppercase tracking-wide mb-4">Мы в соцсетях</h4>
            <div className="flex gap-3 mb-6">
              <a href="#" aria-label="Telegram" className="w-10 h-10 rounded-full border border-[#392F3B] flex items-center justify-center text-[#756977] hover:border-[#FFEC5C] hover:text-[#FFEC5C] transition-colors">
                <Icon name="Send" size={16} />
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full border border-[#392F3B] flex items-center justify-center text-[#756977] hover:border-[#FFEC5C] hover:text-[#FFEC5C] transition-colors">
                <Icon name="Youtube" size={16} />
              </a>
              <a href="#" aria-label="VK" className="w-10 h-10 rounded-full border border-[#392F3B] flex items-center justify-center text-[#756977] hover:border-[#FFEC5C] hover:text-[#FFEC5C] transition-colors">
                <Icon name="Users" size={16} />
              </a>
            </div>
            <div className="text-[#756977] text-xs font-golos space-y-1">
              <p>Дизайн — Алиса Родий</p>
              <p>Разработка — Плейсхолдер</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
