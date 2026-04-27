export type Badge = "НОВИНКА" | "ЛИМИТКА" | "ХИТ" | "СКИДКА" | null;

export interface Product {
  id: number;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  oldPrice?: number;
  badge: Badge;
  image: string;
  tags: string[];
  authors: string[];
  coverAuthor: string;
  specs: string[];
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "kultovye-recepty",
    title: "Культовые рецепты",
    shortDesc: "Стандартная обложка",
    fullDesc: "Антология рецептов из культовых мест Красноярска. Гастрономическое путешествие с фантастическим уклоном — герои готовят блюда, от которых меняется реальность.",
    price: 750,
    badge: "НОВИНКА",
    image: "https://cdn.poehali.dev/projects/aa90fb18-9c44-4119-9ae6-bbc72afdf0be/files/3197fde2-064f-4279-b0c0-0032c2f055d0.jpg",
    tags: ["фантастика", "космоопера", "трогательный сюжет"],
    authors: ["Дима Иванов", "Иван Диманов"],
    coverAuthor: "Диван Иванов",
    specs: ["Формат: A5", "Страниц: 128", "Обложка: мягкая"],
    inStock: true,
  },
  {
    id: 2,
    slug: "krasnojarsk-mesta-vol2",
    title: "Красноярск места VOL.2",
    shortDesc: "Переиздание в новой обложке: лайф, эф-лайф, знак, мистика",
    fullDesc: "Второй том культового путеводителя по местам силы Красноярска. Герои исследуют городские легенды и встречают существ из местного фольклора.",
    price: 801,
    badge: null,
    image: "https://cdn.poehali.dev/projects/aa90fb18-9c44-4119-9ae6-bbc72afdf0be/files/5403540a-6eb3-4efa-a0ba-1b4bf653b626.jpg",
    tags: ["лайф", "мистика", "Красноярск"],
    authors: ["Дима Иванов"],
    coverAuthor: "Дима Иванов",
    specs: ["Формат: A5", "Страниц: 144", "Обложка: мягкая, глянцевая"],
    inStock: true,
  },
  {
    id: 3,
    slug: "krasnojarsk-mesta-vol1",
    title: "Красноярск места VOL.1",
    shortDesc: "Стандартная обложка. С чего всё началось.",
    fullDesc: "Первый том легендарного комикса о местах силы Красноярска. Основополагающая история всей вселенной KCC.",
    price: 900,
    badge: null,
    image: "https://cdn.poehali.dev/projects/aa90fb18-9c44-4119-9ae6-bbc72afdf0be/files/5403540a-6eb3-4efa-a0ba-1b4bf653b626.jpg",
    tags: ["лайф", "мистика", "Красноярск", "классика"],
    authors: ["Дима Иванов", "Иван Диманов"],
    coverAuthor: "Дима Иванов",
    specs: ["Формат: A5", "Страниц: 112", "Обложка: мягкая"],
    inStock: true,
  },
  {
    id: 4,
    slug: "ellyrox-001",
    title: "Ellyrox 001",
    shortDesc: "Мини-артбук: набор наклеек, рисунков и стенд",
    fullDesc: "Дебютный артбук художника EllyRox. Коллекционное издание карманного формата теперь со стендом! Уникальный авторский стиль — милое встречает странное.",
    price: 950,
    badge: "СКИДКА",
    oldPrice: 1200,
    image: "https://cdn.poehali.dev/projects/aa90fb18-9c44-4119-9ae6-bbc72afdf0be/files/d6a1a494-9f10-4da2-b668-d52ecb0d2832.jpg",
    tags: ["артбук", "локальный автор", "стенд"],
    authors: ["EllyRox"],
    coverAuthor: "EllyRox",
    specs: ["Формат: карманный", "Страниц: 64", "Обложка: твёрдая", "Комплект: стенд + наклейки"],
    inStock: true,
  },
  {
    id: 5,
    slug: "krasnojarsk-mesta-vol5",
    title: "Красноярск места VOL.5",
    shortDesc: "Слайс-оф-лайф, знак, истина",
    fullDesc: "Пятый том. Самый зрелый и глубокий. Герои задаются вопросами о смысле и о том, что значит принадлежать месту.",
    price: 850,
    badge: null,
    image: "https://cdn.poehali.dev/projects/aa90fb18-9c44-4119-9ae6-bbc72afdf0be/files/5403540a-6eb3-4efa-a0ba-1b4bf653b626.jpg",
    tags: ["слайс-оф-лайф", "знак", "истина"],
    authors: ["Дима Иванов", "Иван Диманов", "Диван Иванов"],
    coverAuthor: "Иван Диманов",
    specs: ["Формат: A5", "Страниц: 168", "Обложка: мягкая"],
    inStock: true,
  },
  {
    id: 6,
    slug: "kultovye-recepty-ekstra",
    title: "Культовые рецепты + экстра сырный мерч",
    shortDesc: "Обложка 'сырный дизайн' с эксклюзивной открыткой и литографией",
    fullDesc: "Специальное издание с сырным мерчем. Включает открытку, постер и литографию с персонажами. Идеальный подарок для ценителей.",
    price: 650,
    badge: "ЛИМИТКА",
    image: "https://cdn.poehali.dev/projects/aa90fb18-9c44-4119-9ae6-bbc72afdf0be/files/3197fde2-064f-4279-b0c0-0032c2f055d0.jpg",
    tags: ["фантастика", "космоопера", "мерч", "лимитка"],
    authors: ["Дима Иванов"],
    coverAuthor: "Диван Иванов",
    specs: ["Формат: A5", "Страниц: 128", "Обложка: особая", "Комплект: открытка + литография"],
    inStock: true,
  },
  {
    id: 7,
    slug: "kultovye-recepty-pink",
    title: "Культовые рецепты",
    shortDesc: "Фантастика, космоопера, трогательный сюжет",
    fullDesc: "Розовое издание с альтернативной обложкой. Тот же великий сюжет в новом оформлении.",
    price: 1050,
    badge: null,
    image: "https://cdn.poehali.dev/projects/aa90fb18-9c44-4119-9ae6-bbc72afdf0be/files/3197fde2-064f-4279-b0c0-0032c2f055d0.jpg",
    tags: ["фантастика", "космоопера"],
    authors: ["Дима Иванов"],
    coverAuthor: "Иван Диманов",
    specs: ["Формат: A5", "Страниц: 128", "Обложка: альтернативная"],
    inStock: true,
  },
  {
    id: 8,
    slug: "kultovye-recepty-dark",
    title: "Культовые рецепты",
    shortDesc: "Фантастика, космоопера, трогательный сюжет",
    fullDesc: "Тёмное издание — специальная обложка для самых верных фанатов.",
    price: 800,
    badge: null,
    image: "https://cdn.poehali.dev/projects/aa90fb18-9c44-4119-9ae6-bbc72afdf0be/files/3197fde2-064f-4279-b0c0-0032c2f055d0.jpg",
    tags: ["фантастика", "космоопера"],
    authors: ["Дима Иванов"],
    coverAuthor: "Иван Диманов",
    specs: ["Формат: A5", "Страниц: 128", "Обложка: тёмная"],
    inStock: true,
  },
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Артбук EllyRox",
    subtitle: "Коллекционное издание карманного артбука теперь со стендом!",
    image: "https://cdn.poehali.dev/projects/aa90fb18-9c44-4119-9ae6-bbc72afdf0be/files/d6a1a494-9f10-4da2-b668-d52ecb0d2832.jpg",
    cta: "Скорее шопиться!",
    link: "/shop/ellyrox-001",
    bg: "#2D0A35",
  },
  {
    id: 2,
    title: "Красноярск места VOL.2",
    subtitle: "Переиздание в новой обложке — лимитированный тираж!",
    image: "https://cdn.poehali.dev/projects/aa90fb18-9c44-4119-9ae6-bbc72afdf0be/files/5403540a-6eb3-4efa-a0ba-1b4bf653b626.jpg",
    cta: "Купить сейчас",
    link: "/shop/krasnojarsk-mesta-vol2",
    bg: "#1A3A5C",
  },
  {
    id: 3,
    title: "Культовые рецепты",
    subtitle: "Гастрономическая космоопера. Уже в продаже!",
    image: "https://cdn.poehali.dev/projects/aa90fb18-9c44-4119-9ae6-bbc72afdf0be/files/3197fde2-064f-4279-b0c0-0032c2f055d0.jpg",
    cta: "Подробнее",
    link: "/shop/kultovye-recepty",
    bg: "#3D1A00",
  },
];
