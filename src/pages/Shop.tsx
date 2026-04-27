import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/ui/icon";
import { PRODUCTS } from "@/data/products";

export default function Shop() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return PRODUCTS;
    const q = search.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q))
    );
  }, [search]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="brand-container py-8 flex-1">
        {/* Header row: title+crumbs left, search right */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 mb-8">
          <div>
            <h1 className="font-marmelad font-bold text-[#392F3B] text-3xl md:text-4xl">Магазин</h1>
            <Breadcrumbs crumbs={[{ label: "Магазин" }]} />
          </div>
          <div className="relative w-full md:max-w-sm">
            <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#cbbfce]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Что будем искать?"
              className="w-full pl-9 pr-4 py-3 border-2 border-[#e8e2ea] rounded-xl text-sm font-snpro text-[#392F3B] placeholder-[#cbbfce] focus:outline-none focus:border-[#E4610F] transition-colors"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <Icon name="SearchX" size={48} className="text-[#cbbfce] mx-auto mb-4" />
            <h2 className="font-marmelad text-[#392F3B] text-xl mb-2">Поиск не дал результатов</h2>
            <p className="text-[#756977] font-snpro mb-6">Попробуйте другой запрос или посмотрите все книги</p>
            <button
              onClick={() => setSearch("")}
              className="bg-[#E4610F] text-white px-6 py-2.5 rounded-lg font-marmelad font-bold uppercase hover:bg-[#c9510c] transition-colors"
            >
              Показать всё
            </button>
          </div>
        ) : (
          /* grid-rows-* — карточки в ряду выравниваются по самой высокой */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-stretch">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}