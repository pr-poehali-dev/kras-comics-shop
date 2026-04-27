import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Icon from "@/components/ui/icon";
import { PRODUCTS } from "@/data/products";
import { addToCart } from "@/store/cartStore";

const BADGE_CLASSES: Record<string, string> = {
  НОВИНКА: "badge-new",
  ЛИМИТКА: "badge-limited",
  ХИТ: "badge-hit",
  СКИДКА: "badge-sale",
};

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <h2 className="font-oswald text-2xl text-[#392F3B]">Товар не найден</h2>
          <Link to="/shop" className="btn-primary px-6 py-2.5 rounded font-oswald font-bold uppercase">
            Вернуться в магазин
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  function handleAdd() {
    addToCart({ id: product!.id, slug: product!.slug, title: product!.title, price: product!.price, image: product!.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="brand-container py-6 flex-1">
        <Breadcrumbs crumbs={[{ label: "Магазин", href: "/shop" }, { label: product.title }]} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="max-w-full max-h-[500px] object-contain rounded-xl shadow-xl"
              />
              {product.badge && (
                <span className={`absolute top-3 left-3 ${BADGE_CLASSES[product.badge]} text-sm font-oswald font-bold uppercase px-3 py-1 rounded`}>
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5">
            <h1 className="font-oswald font-bold text-[#392F3B] text-3xl md:text-4xl leading-tight">
              {product.title}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-oswald font-bold text-[#E4610F] text-3xl">{product.price} ₽</span>
              {product.oldPrice && (
                <span className="text-[#cbbfce] text-lg line-through font-golos">{product.oldPrice} ₽</span>
              )}
            </div>

            {/* Add to cart */}
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-[#e8e2ea] rounded-lg overflow-hidden">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2 text-[#392F3B] hover:bg-[#f5f0f6] transition-colors text-xl font-bold">−</button>
                <span className="px-4 py-2 font-oswald font-semibold text-[#392F3B] min-w-[3rem] text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-3 py-2 text-[#392F3B] hover:bg-[#f5f0f6] transition-colors text-xl font-bold">+</button>
              </div>
              <button
                onClick={handleAdd}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-oswald font-bold uppercase tracking-wide text-white transition-all ${
                  added ? "bg-[#4FB282]" : "bg-[#E4610F] hover:bg-[#c9510c] hover:-translate-y-0.5"
                }`}
              >
                <Icon name={added ? "Check" : "ShoppingCart"} size={18} />
                {added ? "Добавлено!" : "В корзину"}
              </button>
            </div>

            {/* Description */}
            <div className="bg-[#faf8fb] rounded-xl p-5">
              <p className="text-[#756977] font-golos leading-relaxed">{product.fullDesc}</p>
            </div>

            {/* Authors */}
            {product.authors.length > 0 && (
              <div>
                <h3 className="font-oswald font-semibold text-[#392F3B] text-base mb-2">Внутри вас ждут истории от:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.authors.map((a) => (
                    <span key={a} className="bg-[#f5f0f6] text-[#8A5298] font-golos text-sm px-3 py-1 rounded-full">{a}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Specs */}
            <div>
              <h3 className="font-oswald font-semibold text-[#392F3B] text-base mb-2">Характеристики:</h3>
              <ul className="space-y-1">
                {product.specs.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-[#756977] font-golos text-sm">
                    <Icon name="ChevronRight" size={14} className="text-[#E4610F] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cover author */}
            <p className="text-[#756977] font-golos text-sm">
              <span className="text-[#392F3B] font-medium">Автор обложки:</span> {product.coverAuthor}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((t) => (
                <span key={t} className="border border-[#e8e2ea] text-[#756977] font-golos text-xs px-3 py-1 rounded-full hover:border-[#E4610F] hover:text-[#E4610F] transition-colors cursor-default">
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
