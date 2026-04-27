import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

export default function Privacy() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="brand-container py-6 flex-1">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#756977] hover:text-[#E4610F] font-snpro text-sm transition-colors mb-6">
          <Icon name="ArrowLeft" size={16} /> Вернуться
        </button>
        <div className="max-w-2xl mb-12">
          <h1 className="font-marmelad font-bold text-[#392F3B] text-3xl md:text-4xl mb-6">Политика конфиденциальности</h1>
          <div className="prose font-snpro text-[#756977] leading-relaxed space-y-4 text-sm">
            <p>Настоящая Политика конфиденциальности разработана в соответствии с требованиями Федерального закона № 152-ФЗ «О персональных данных».</p>
            <h2 className="font-marmelad text-[#392F3B] text-lg mt-6">Оператор персональных данных</h2>
            <p>Михайлов Иван Сергеевич (далее — Оператор). Контактный адрес: <a href="mailto:KCC@bookscult.ru" className="text-[#E4610F]">KCC@bookscult.ru</a></p>
            <h2 className="font-marmelad text-[#392F3B] text-lg mt-6">Какие данные мы собираем</h2>
            <p>При оформлении заказа мы собираем: имя, фамилию, адрес электронной почты, почтовый адрес, номер телефона (при необходимости). Эти данные используются исключительно для обработки и доставки заказа.</p>
            <h2 className="font-marmelad text-[#392F3B] text-lg mt-6">Цели обработки</h2>
            <p>Обработка персональных данных осуществляется в целях исполнения договора купли-продажи, а также информирования покупателя о статусе заказа.</p>
            <h2 className="font-marmelad text-[#392F3B] text-lg mt-6">Хранение и передача данных</h2>
            <p>Персональные данные не передаются третьим лицам, за исключением случаев, необходимых для осуществления доставки (транспортные компании) и обработки платежей (платёжные системы).</p>
            <h2 className="font-marmelad text-[#392F3B] text-lg mt-6">Права субъекта данных</h2>
            <p>Вы вправе в любой момент запросить удаление своих персональных данных, направив запрос на адрес KCC@bookscult.ru.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}