import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Icon from "@/components/ui/icon";
import { useCart } from "@/store/cartStore";

export default function Cart() {
  const { items, total, updateQty, removeFromCart } = useCart();
  const isEmpty = items.length === 0;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="brand-container py-6 flex-1">
        <Breadcrumbs crumbs={[{ label: "Корзина" }]} />
        <h1 className="font-oswald font-bold text-[#392F3B] text-3xl md:text-4xl mt-6 mb-8">Корзина</h1>

        {isEmpty ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-24 h-24 rounded-full bg-[#f5f0f6] flex items-center justify-center">
              <Icon name="ShoppingCart" size={40} className="text-[#cbbfce]" />
            </div>
            <h2 className="font-oswald text-xl text-[#392F3B]">Корзина пуста</h2>
            <p className="text-[#756977] font-golos text-center max-w-xs">
              Добавьте книги из нашего магазина — они точно вам понравятся!
            </p>
            <Link to="/shop" className="btn-primary px-8 py-3 rounded font-oswald font-bold uppercase text-white">
              Перейти в магазин
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 border border-[#e8e2ea] rounded-xl">
                  <Link to={`/shop/${item.slug}`}>
                    <img src={item.image} alt={item.title} className="w-20 h-28 object-cover rounded-lg flex-shrink-0" />
                  </Link>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link to={`/shop/${item.slug}`} className="font-oswald font-semibold text-[#392F3B] hover:text-[#E4610F] transition-colors">
                        {item.title}
                      </Link>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-[#e8e2ea] rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="px-2.5 py-1.5 text-[#392F3B] hover:bg-[#f5f0f6] transition-colors font-bold"
                        >−</button>
                        <span className="px-3 font-oswald font-semibold text-[#392F3B] min-w-[2rem] text-center">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="px-2.5 py-1.5 text-[#392F3B] hover:bg-[#f5f0f6] transition-colors font-bold"
                        >+</button>
                      </div>
                      <span className="font-oswald font-bold text-[#E4610F] text-lg">{item.price * item.qty} ₽</span>
                      <button onClick={() => removeFromCart(item.id)} className="text-[#cbbfce] hover:text-[#E4610F] transition-colors p-1">
                        <Icon name="Trash2" size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div>
              <div className="border border-[#e8e2ea] rounded-xl p-6 sticky top-24">
                <h2 className="font-oswald font-bold text-[#392F3B] text-xl mb-5">Итого</h2>
                <div className="space-y-3 font-golos text-[#756977]">
                  <div className="flex justify-between">
                    <span>Товары</span>
                    <span className="text-[#392F3B] font-medium">{total} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Доставка</span>
                    <span className="text-[#cbbfce]">не выбрана</span>
                  </div>
                  <div className="border-t border-[#e8e2ea] pt-3 flex justify-between font-oswald font-bold text-[#392F3B] text-lg">
                    <span>Итого</span>
                    <span className="text-[#E4610F]">{total} ₽</span>
                  </div>
                </div>
                <Link
                  to="/cart/checkout"
                  className="mt-6 flex items-center justify-center gap-2 w-full bg-[#E4610F] hover:bg-[#c9510c] text-white font-oswald font-bold uppercase tracking-wide py-3 rounded-lg transition-all hover:-translate-y-0.5"
                >
                  <Icon name="CreditCard" size={18} />
                  Оформить заказ
                </Link>
                <Link to="/shop" className="mt-3 flex items-center justify-center text-[#756977] font-golos text-sm hover:text-[#E4610F] transition-colors gap-1">
                  <Icon name="ArrowLeft" size={14} />
                  Продолжить покупки
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer compact={isEmpty ? false : true} />
    </div>
  );
}
