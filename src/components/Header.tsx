import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useCart } from "@/store/cartStore";

const NAV_LINKS = [
  { label: "Магазин", href: "/shop" },
  { label: "О нас", href: "/about" },
  { label: "Сотрудничество", href: "/partnership" },
  { label: "Оплата и доставка", href: "/delivery" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuth] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header style={{ backgroundColor: "#FFEC5C" }} className="sticky top-0 z-50 shadow-sm">
      <div className="brand-container">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="https://cdn.poehali.dev/projects/aa90fb18-9c44-4119-9ae6-bbc72afdf0be/bucket/d70f93e0-cc84-4c9b-9944-901a6ed4347a.png"
              alt="KRAS COMICS CULT"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="font-marmelad font-semibold text-sm uppercase tracking-wide text-[#19031D] hover:text-[#E4610F] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-5">
            {isAuth ? (
              <Link to="/profile" className="flex items-center gap-2 text-[#19031D] hover:text-[#E4610F] transition-colors">
                <img
                  src="https://cdn.poehali.dev/projects/aa90fb18-9c44-4119-9ae6-bbc72afdf0be/bucket/8f379e20-b105-457e-a37d-6ffeaab0a7c8.png"
                  alt="Профиль"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-snpro text-sm font-medium">Культист А.К.</span>
                <Icon name="ChevronDown" size={14} className="text-[#19031D]" />
              </Link>
            ) : (
              <Link to="/login" className="font-marmelad text-sm uppercase tracking-wide font-semibold text-[#19031D] hover:text-[#E4610F] transition-colors">
                Войти
              </Link>
            )}
            <Link to="/cart" className="flex items-center gap-2 text-[#19031D] hover:text-[#E4610F] transition-colors relative">
              <Icon name="ShoppingCart" size={20} className="text-[#19031D]" />
              <span className="font-snpro text-sm font-medium">
                Корзина{count > 0 ? ` ( ${count} )` : ""}
              </span>
            </Link>
          </div>

          {/* Mobile right */}
          <div className="flex md:hidden items-center gap-3">
            <Link to="/cart" className="relative text-[#19031D]">
              <Icon name="ShoppingCart" size={22} className="text-[#19031D]" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#E4610F] text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#19031D] p-1" aria-label="Меню">
              <Icon name={menuOpen ? "X" : "Menu"} size={26} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ backgroundColor: "rgba(25,3,29,0.85)" }}
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-72 h-full shadow-2xl flex flex-col"
            style={{ backgroundColor: "#FFEC5C" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-[#e8d700]">
              <span className="font-marmelad text-[#19031D] font-bold text-lg">МЕНЮ</span>
              <button onClick={() => setMenuOpen(false)} className="text-[#19031D]">
                <Icon name="X" size={24} />
              </button>
            </div>
            <nav className="flex flex-col p-5 gap-1 flex-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-marmelad text-lg uppercase tracking-wide py-3 border-b border-[#e8d700] text-[#19031D] hover:text-[#E4610F] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-[#e8d700]">
                {isAuth ? (
                  <>
                    <Link to="/profile" onClick={() => setMenuOpen(false)} className="block text-[#19031D] font-golos py-2 hover:text-[#E4610F] transition-colors">Учётная запись</Link>
                    <Link to="/profile/orders" onClick={() => setMenuOpen(false)} className="block text-[#19031D] font-golos py-2 hover:text-[#E4610F] transition-colors">Мои заказы</Link>
                    <button className="block text-[#392F3B] font-golos py-2 hover:text-[#E4610F] transition-colors">Выйти</button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setMenuOpen(false)} className="block font-marmelad uppercase text-[#E4610F] text-base py-2 font-bold">Войти</Link>
                    <Link to="/register" onClick={() => setMenuOpen(false)} className="block font-marmelad uppercase text-[#19031D] text-base py-2 font-bold">Зарегистрироваться</Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}