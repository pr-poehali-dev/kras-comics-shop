import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header style={{ backgroundColor: "#19031D" }} className="sticky top-0 z-50 shadow-lg">
      <div className="brand-container">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="flex flex-col leading-none select-none">
              <span className="font-oswald font-bold text-white text-base tracking-tight">KRAS</span>
              <span className="font-oswald font-bold text-white text-base tracking-tight">COMICS</span>
              <span style={{ color: "#E4610F" }} className="font-oswald font-bold text-base tracking-tight">CULT</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                style={{ color: "#FFEC5C" }}
                className="font-oswald font-medium text-sm uppercase tracking-wide hover:text-[#E4610F] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-4">
            {isAuth ? (
              <Link to="/profile" className="flex items-center gap-2 text-white hover:text-[#FFEC5C] transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#8A5298] flex items-center justify-center">
                  <Icon name="User" size={16} className="text-white" />
                </div>
                <span className="font-golos text-sm">Культист А.К.</span>
              </Link>
            ) : (
              <Link to="/login" style={{ color: "#FFEC5C" }} className="font-oswald text-sm uppercase tracking-wide hover:text-[#E4610F] transition-colors">
                Войти
              </Link>
            )}
            <Link
              to="/cart"
              className="flex items-center gap-2 text-white hover:text-[#FFEC5C] transition-colors relative"
            >
              <Icon name="ShoppingCart" size={22} style={{ color: "#FFEC5C" }} />
              <span className="font-golos text-sm">Корзина</span>
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#E4610F] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile right */}
          <div className="flex md:hidden items-center gap-3">
            <Link to="/cart" className="relative text-white">
              <Icon name="ShoppingCart" size={22} style={{ color: "#FFEC5C" }} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#E4610F] text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#FFEC5C] p-1"
              aria-label="Меню"
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={26} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ backgroundColor: "rgba(25,3,29,0.98)" }}
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-72 h-full shadow-2xl animate-slide-in flex flex-col"
            style={{ backgroundColor: "#19031D" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-[#392F3B]">
              <span className="font-oswald text-white font-bold text-lg">МЕНЮ</span>
              <button onClick={() => setMenuOpen(false)} className="text-[#FFEC5C]">
                <Icon name="X" size={24} />
              </button>
            </div>
            <nav className="flex flex-col p-5 gap-1 flex-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ color: "#FFEC5C" }}
                  className="font-oswald text-lg uppercase tracking-wide py-3 border-b border-[#392F3B] hover:text-[#E4610F] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-[#392F3B]">
                {isAuth ? (
                  <>
                    <Link to="/profile" onClick={() => setMenuOpen(false)} className="block text-white font-golos py-2 hover:text-[#FFEC5C] transition-colors">Учётная запись</Link>
                    <Link to="/profile/orders" onClick={() => setMenuOpen(false)} className="block text-white font-golos py-2 hover:text-[#FFEC5C] transition-colors">Мои заказы</Link>
                    <button className="block text-[#756977] font-golos py-2 hover:text-white transition-colors">Выйти</button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setMenuOpen(false)} className="block font-oswald uppercase text-[#E4610F] text-base py-2">Войти</Link>
                    <Link to="/register" onClick={() => setMenuOpen(false)} className="block font-oswald uppercase text-[#4FB282] text-base py-2">Зарегистрироваться</Link>
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
