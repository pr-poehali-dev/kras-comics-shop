import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { addToCart } from "@/store/cartStore";
import { useState } from "react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  showControls?: boolean;
}

const BADGE_CLASSES: Record<string, string> = {
  НОВИНКА: "badge-new",
  ЛИМИТКА: "badge-limited",
  ХИТ: "badge-hit",
  СКИДКА: "badge-sale",
};

export default function ProductCard({ product, showControls }: ProductCardProps) {
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);

  function handleAdd() {
    addToCart({ id: product.id, slug: product.slug, title: product.title, price: product.price, image: product.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="product-card h-full flex flex-col">
      {/* Image — фиксированное соотношение */}
      <Link to={`/shop/${product.slug}`} className="block relative overflow-hidden bg-[#f5f0f6] shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 ${BADGE_CLASSES[product.badge]} text-xs font-oswald font-bold uppercase px-2.5 py-1 rounded`}>
            {product.badge}
          </span>
        )}
      </Link>

      {/* Content — растягивается чтобы карточки в ряду имели одинаковую высоту */}
      <div className="flex flex-col flex-1 p-4 gap-4">
        {/* Title + desc занимают весь оставшийся объём */}
        <div className="flex-1 flex flex-col gap-2">
          <Link to={`/shop/${product.slug}`}>
            <h3 className="font-oswald font-semibold text-[#392F3B] text-base leading-tight hover:text-[#E4610F] transition-colors">
              {product.title}
            </h3>
          </Link>
          {product.shortDesc && (
            <p className="text-[#756977] text-xs font-golos leading-snug">
              {product.shortDesc}
            </p>
          )}
          {product.tags && product.tags.length > 0 && (
            <p className="text-[#392F3B] text-xs font-golos leading-snug font-medium">
              {product.tags.join(", ")}
            </p>
          )}
        </div>

        {/* Price + action — всегда внизу карточки */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-oswald font-bold text-[#392F3B] text-lg">{product.price} ₽</span>
            {product.oldPrice && (
              <span className="text-[#cbbfce] text-sm line-through font-golos">{product.oldPrice} ₽</span>
            )}
          </div>

          {showControls ? (
            <div className="flex items-center gap-1">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-7 h-7 rounded-full border border-[#e8e2ea] flex items-center justify-center text-[#392F3B] hover:bg-[#E4610F] hover:text-white hover:border-[#E4610F] transition-colors font-bold text-base"
              >−</button>
              <span className="w-7 text-center font-oswald font-semibold text-[#392F3B] text-sm">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-7 h-7 rounded-full border border-[#e8e2ea] flex items-center justify-center text-[#392F3B] hover:bg-[#E4610F] hover:text-white hover:border-[#E4610F] transition-colors font-bold text-base"
              >+</button>
            </div>
          ) : (
            <button
              onClick={handleAdd}
              style={{ backgroundColor: added ? "#4FB282" : "#FFEC5C" }}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105"
              aria-label="В корзину"
            >
              <Icon name={added ? "Check" : "ShoppingCart"} size={18} className="text-[#19031D]" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}