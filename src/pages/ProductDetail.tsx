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
  const [activeImg, setActiveImg] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <h2 className="font-marmelad text-2xl text-[#392F3B]">Товар не найден</h2>
          <Link to="/shop" className="bg-[#E4610F] text-white px-6 py-2.5 rounded-lg font-marmelad font-bold uppercase hover:bg-[#c9510c] transition-colors">
            Вернуться в магазин
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Генерируем несколько «слайдов» из одного изображения для демо
  const images = [product.image, product.image, product.image];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          {/* Left — image slider */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative rounded-xl overflow-hidden bg-[#f5f0f6]">
              <img
                key={activeImg}
                src={images[activeImg]}
                alt={product.title}
                className="w-full aspect-[4/5] object-contain animate-scale-in"
              />
              {product.badge && (
                <span className={`absolute top-3 left-3 ${BADGE_CLASSES[product.badge]} text-sm font-marmelad font-bold uppercase px-3 py-1 rounded`}>
                  {product.badge}
                </span>
              )}
              {/* Prev/Next */}
              <button
                onClick={() => setActiveImg((i) => (i - 1 + images.length) % images.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow hover:bg-white transition-colors"
              >
                <Icon name="ChevronLeft" size={18} className="text-[#392F3B]" />
              </button>
              <button
                onClick={() => setActiveImg((i) => (i + 1) % images.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow hover:bg-white transition-colors"
              >
                <Icon name="ChevronRight" size={18} className="text-[#392F3B]" />
              </button>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-16 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    i === activeImg ? "border-[#E4610F]" : "border-transparent hover:border-[#e8e2ea]"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right — info */}
          <div className="flex flex-col gap-4">
            <h1 className="font-marmelad font-bold text-[#392F3B] text-3xl md:text-4xl leading-tight">
              {product.title}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-marmelad font-bold text-[#E4610F] text-3xl">{product.price} ₽</span>
              {product.oldPrice && (
                <span className="text-[#cbbfce] text-lg line-through font-snpro">{product.oldPrice} ₽</span>
              )}
            </div>

            {/* Add to cart button */}
            <button
              onClick={handleAdd}
              className={`flex items-center justify-center gap-2 py-3 px-8 rounded-xl font-marmelad font-bold uppercase tracking-wide text-[#19031D] border-2 transition-all w-fit ${
                added
                  ? "bg-[#4FB282] border-[#4FB282] text-white"
                  : "bg-[#FFEC5C] border-[#FFEC5C] hover:bg-[#e8d700] hover:border-[#e8d700]"
              }`}
            >
              <Icon name={added ? "Check" : "ShoppingCart"} size={18} />
              {added ? "Добавлено!" : "В корзину"}
            </button>

            {/* Full description */}
            <div className="text-[#756977] font-snpro leading-relaxed text-sm">
              <p>{product.fullDesc}</p>
            </div>

            {/* Authors */}
            {product.authors.length > 0 && (
              <div>
                <p className="font-snpro text-[#392F3B] font-medium mb-1">Внутри вас ждут истории от:</p>
                <p className="font-snpro text-sm text-[#E4610F]">
                  {product.authors.join(", ")}
                </p>
              </div>
            )}

            {/* Specs */}
            <div>
              <p className="font-snpro text-[#392F3B] font-medium mb-2">Характеристики:</p>
              <ul className="space-y-1">
                {product.specs.map((s) => (
                  <li key={s} className="text-[#756977] font-snpro text-sm">— {s}</li>
                ))}
              </ul>
            </div>

            {/* Cover author */}
            <p className="text-[#756977] font-snpro text-sm">
              <span className="text-[#392F3B] font-medium">Автор обложки:</span> {product.coverAuthor}
            </p>

            {/* Tags */}
            <p className="text-[#756977] font-snpro text-sm">
              <span className="text-[#392F3B] font-medium">Теги:</span> {product.tags.join(", ")}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}