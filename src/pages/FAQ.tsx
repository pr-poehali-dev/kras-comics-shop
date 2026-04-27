import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Icon from "@/components/ui/icon";

const FAQS = [
  {
    q: "Можно ли изменить адрес доставки после оформления предзаказа?",
    a: "Да, вы можете изменить адрес, пока заказ не передан в службу доставки. Напишите нам на KCC@bookscult.ru как можно быстрее, указав номер заказа и новый адрес.",
  },
  {
    q: "Могу ли я стать автором KCC?",
    a: "Мы всегда открыты к новым голосам! Если у вас есть история, которую вы хотите рассказать — пишите на KCC@bookscult.ru с темой «Хочу быть автором». Расскажите о себе и своём проекте.",
  },
  {
    q: "Как попасть к вам в магазин (стать партнёром)?",
    a: "Напишите нам на KCC@bookscult.ru. Мы работаем с независимыми книжными, арт-пространствами и организаторами фестивалей. Обсудим условия и логистику.",
  },
  {
    q: "Будет ли допечатка тиражей?",
    a: "Некоторые книги выходят в лимитированных тиражах без допечаток. Для регулярных изданий допечатки возможны. Следите за новостями в соцсетях — анонсы выходят там первыми.",
  },
  {
    q: "Как связаться с командой?",
    a: "Пишите на KCC@bookscult.ru — это основной канал связи. Также мы активны в Telegram и ВКонтакте.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="brand-container py-6 flex-1">
        <Breadcrumbs crumbs={[{ label: "FAQ" }]} />
        <div className="max-w-2xl mt-8 mb-12">
          <h1 className="font-marmelad font-bold text-[#392F3B] text-4xl md:text-5xl mb-2">Частые вопросы</h1>
          <p className="text-[#756977] font-snpro mb-8">Не нашли ответ? Пишите на <a href="mailto:KCC@bookscult.ru" className="text-[#E4610F] hover:underline">KCC@bookscult.ru</a></p>

          <div className="space-y-2">
            {FAQS.map((item, i) => (
              <div key={i} className="border border-[#e8e2ea] rounded-xl overflow-hidden hover:border-[#E4610F]/50 transition-colors">
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-marmelad font-semibold text-[#392F3B] text-base leading-snug">{item.q}</span>
                  <Icon
                    name="ChevronDown"
                    size={20}
                    className={`text-[#E4610F] shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                {open === i && (
                  <div className="px-5 pb-5 text-[#756977] font-snpro leading-relaxed text-sm border-t border-[#f5f0f6]">
                    <div className="pt-4">{item.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}