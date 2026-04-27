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
      {/* Image */}
      <Link to={`/shop/${product.slug}`} className="block relative overflow-hidden bg-[#f5f0f6]">
        <img
          src={product.image}
          alt={product.title}
          className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className={`absolute top-2 left-2 ${BADGE_CLASSES[product.badge]} text-xs font-oswald font-bold uppercase px-2 py-0.5 rounded`}>
            {product.badge}
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <Link to={`/shop/${product.slug}`}>
          <h3 className="font-oswald font-semibold text-[#392F3B] text-base leading-tight hover:text-[#E4610F] transition-colors">
            {product.title}
          </h3>
        </Link>
        {product.shortDesc && (
          <p className="text-[#756977] text-xs font-golos leading-snug line-clamp-2 flex-1">
            {product.shortDesc}
          </p>
        )}

        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex items-baseline gap-2">
            <span className="font-oswald font-bold text-[#E4610F] text-lg">{product.price} ₽</span>
            {product.oldPrice && (
              <span className="text-[#cbbfce] text-sm line-through font-golos">{product.oldPrice} ₽</span>
            )}
          </div>

          {showControls ? (
            <div className="flex items-center gap-1">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-7 h-7 rounded border border-[#e8e2ea] flex items-center justify-center text-[#392F3B] hover:bg-[#E4610F] hover:text-white hover:border-[#E4610F] transition-colors text-lg font-bold"
              >−</button>
              <span className="w-7 text-center font-oswald font-semibold text-[#392F3B]">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-7 h-7 rounded border border-[#e8e2ea] flex items-center justify-center text-[#392F3B] hover:bg-[#E4610F] hover:text-white hover:border-[#E4610F] transition-colors text-lg font-bold"
              >+</button>
            </div>
          ) : (
            <button
              onClick={handleAdd}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                added ? "bg-[#4FB282]" : "bg-[#E4610F] hover:bg-[#c9510c]"
              } text-white`}
              aria-label="В корзину"
            >
              <Icon name={added ? "Check" : "ShoppingCart"} size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
