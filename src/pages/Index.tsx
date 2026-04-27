import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/ui/icon";
import { PRODUCTS, HERO_SLIDES } from "@/data/products";

export default function Index() {
  const [slide, setSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, 4000);
  }

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  function goSlide(i: number) {
    setSlide(i);
    startTimer();
  }

  const featured = PRODUCTS.slice(0, 8);
  const current = HERO_SLIDES[slide];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero carousel */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: current.bg, transition: "background-color 0.6s ease", minHeight: 360 }}
      >
        <div className="brand-container py-8 md:py-14">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex-1 order-2 md:order-1 text-center md:text-left">
              <h1 className="font-oswald font-bold text-white text-3xl md:text-5xl leading-tight mb-3">
                {current.title}
              </h1>
              <p className="text-[#ccc0d0] font-golos text-base md:text-lg mb-6 max-w-sm mx-auto md:mx-0">
                {current.subtitle}
              </p>
              <Link
                to={current.link}
                className="inline-block bg-[#E4610F] hover:bg-[#c9510c] text-white font-oswald font-bold uppercase tracking-wide px-6 py-3 rounded transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                {current.cta}
              </Link>
            </div>
            <div className="flex-1 order-1 md:order-2 flex justify-center">
              <img
                key={slide}
                src={current.image}
                alt={current.title}
                className="max-h-72 md:max-h-96 object-contain rounded-lg shadow-2xl animate-scale-in"
              />
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goSlide(i)}
              className={`h-2.5 rounded-full transition-all ${i === slide ? "bg-[#E4610F] w-6" : "bg-white/40 w-2.5"}`}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-12 md:py-16">
        <div className="brand-container">
          <h2 className="font-oswald font-bold text-[#392F3B] text-3xl md:text-4xl text-center mb-2">
            Наши книги
          </h2>
          <div className="w-12 h-1 bg-[#E4610F] mx-auto mb-10 rounded" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/shop"
              className="inline-block border-2 border-[#E4610F] text-[#E4610F] font-oswald font-bold uppercase tracking-wide px-8 py-3 rounded hover:bg-[#E4610F] hover:text-white transition-all"
            >
              Больше в магазине!
            </Link>
          </div>
        </div>
      </section>

      {/* About block */}
      <section style={{ backgroundColor: "#19031D" }} className="py-14 md:py-20">
        <div className="brand-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-oswald font-bold text-white text-3xl md:text-4xl mb-6">
                Кто эти безумцы?
              </h2>
              <div className="space-y-4 text-[#a895ad] font-golos leading-relaxed">
                <p>
                  <strong className="text-white">KRAS COMICS CULT</strong> — это небольшое самиздательство и
                  сообщество художников и авторов комиксов, которое базируется в Красноярске.
                  Выпускаем оригинальные книжки, которые и сами хотели бы почитать,
                  проводим лекции и устраиваем совместные сеансы рисования!
                </p>
                <p>
                  Наши книги можно купить только на этом сайте, в независимых книжных
                  и магазинах комиксов, а также на фестивалях, в которых мы участвуем.
                </p>
                <p style={{ color: "#FFEC5C" }} className="font-medium">
                  Этот сайт — ещё один шаг на пути превращения в полноценное и самое
                  крутое издательство. Это цель и мечта!
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-6 text-[#4FB282] font-oswald font-semibold uppercase tracking-wide hover:gap-3 transition-all"
              >
                Узнать больше
                <Icon name="ArrowRight" size={16} />
              </Link>
            </div>

            {/* Gallery grid */}
            <div className="grid grid-cols-2 gap-3">
              {[PRODUCTS[4].image, PRODUCTS[1].image, PRODUCTS[3].image, PRODUCTS[0].image].map((img, i) => (
                <div key={i} className="overflow-hidden rounded-lg aspect-[3/4]">
                  <img src={img} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artbook promo */}
      <section style={{ backgroundColor: "#8A5298" }} className="py-14">
        <div className="brand-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-oswald font-bold text-white text-3xl md:text-4xl mb-3">Артбук EllyRox</h2>
              <p className="text-[#e8d9f2] font-golos text-lg max-w-md">
                Коллекционное издание карманного артбука теперь со стендом! Уникальный авторский стиль — милое встречает странное.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/shop/ellyrox-001" className="bg-[#E4610F] hover:bg-[#c9510c] text-white font-oswald font-bold uppercase tracking-wide px-7 py-3 rounded transition-all hover:-translate-y-0.5 text-center">
                Купить артбук
              </Link>
              <Link to="/shop/ellyrox-001" className="border-2 border-white text-white font-oswald font-bold uppercase tracking-wide px-7 py-3 rounded transition-all hover:bg-white hover:text-[#8A5298] text-center">
                Скачать комплект
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
