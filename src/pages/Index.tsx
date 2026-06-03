import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const TRAINER_PHOTO = "https://cdn.poehali.dev/projects/102eaa1b-e5a6-4f42-ae0b-c9b7d2b9fd8a/files/c6c08097-bdc3-4212-b30b-b97471b43893.jpg";

// --- Nav ---
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Обо мне", href: "#about" },
    { label: "Услуги", href: "#services" },
    { label: "Расписание", href: "#schedule" },
    { label: "Цены", href: "#pricing" },
    { label: "Галерея", href: "#gallery" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0e0b08]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-cormorant text-xl font-light tracking-widest text-gold">
          ЛЕНА
        </a>
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-golos text-xs tracking-widest uppercase text-foreground/70 hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacts"
            className="ml-4 px-5 py-2 bg-gold text-[#0e0b08] font-golos text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity rounded-full"
          >
            Записаться
          </a>
        </div>
        <button className="lg:hidden text-gold" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-[#0e0b08]/98 backdrop-blur-md px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-golos text-sm tracking-widest uppercase text-foreground/70 hover:text-gold transition-colors py-2 border-b border-border"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacts"
            className="mt-2 px-5 py-3 bg-gold text-[#0e0b08] font-golos text-xs font-semibold tracking-widest uppercase text-center rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Записаться
          </a>
        </div>
      )}
    </nav>
  );
}

// --- Hero ---
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${TRAINER_PHOTO})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e0b08]/90 via-[#0e0b08]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b08]/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <span className="gold-line" />
            <span className="section-label">Персональный тренер · Москва</span>
          </div>

          <h1 className="font-cormorant font-light text-6xl md:text-8xl leading-none mb-6 animate-fade-up delay-100">
            Трансформируй<br />
            <span className="text-gold italic">своё тело</span><br />
            и разум
          </h1>

          <p className="font-golos font-light text-base text-foreground/70 leading-relaxed mb-10 max-w-sm animate-fade-up delay-200">
            Фитнес, растяжка, йога и пилон — авторские программы тренировок,
            которые меняют жизнь. Присоединяйтесь к более чем 200 клиентам.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
            <a
              href="#contacts"
              className="px-8 py-4 bg-gold text-[#0e0b08] font-golos text-sm font-semibold tracking-widest uppercase hover:opacity-90 transition-all duration-300 rounded-full hover:scale-105"
            >
              Записаться на пробное
            </a>
            <a
              href="#about"
              className="px-8 py-4 border border-gold/50 text-gold font-golos text-sm tracking-widest uppercase hover:bg-gold/10 transition-all duration-300 rounded-full"
            >
              Узнать больше
            </a>
          </div>

          <div className="flex gap-10 mt-16 animate-fade-up delay-400">
            {[
              { num: "7+", label: "лет опыта" },
              { num: "200+", label: "клиентов" },
              { num: "4", label: "направления" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-cormorant text-4xl font-light text-gold">{s.num}</div>
                <div className="font-golos text-xs text-foreground/50 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-golos text-xs tracking-widest text-foreground/30 uppercase">Scroll</span>
        <Icon name="ChevronDown" size={16} className="text-gold/50" />
      </div>
    </section>
  );
}

// --- About ---
const STUDIO_PHOTOS = [
  TRAINER_PHOTO,
  TRAINER_PHOTO,
  TRAINER_PHOTO,
  TRAINER_PHOTO,
];

function About() {
  const achievements = [
    { icon: "Award", text: "Мастер спорта по художественной гимнастике" },
    { icon: "GraduationCap", text: "Сертифицированный инструктор RYS-200" },
    { icon: "Star", text: "Чемпион России по пилону 2019" },
    { icon: "Heart", text: "Специализация: реабилитация после травм" },
  ];

  const [studioSlide, setStudioSlide] = useState(0);

  return (
    <section id="about" className="bg-[#0e0b08]">
      {/* Блок О тренере — фото + текст единый блок */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Фото — чистое, без подписи */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-md mx-auto">
              <img
                src={TRAINER_PHOTO}
                alt="Тренер Лена"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b08]/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -right-4 top-12 w-24 h-24 border border-gold/20 rounded-full hidden lg:block" />
            <div className="absolute -right-8 top-8 w-16 h-16 border border-gold/10 rounded-full hidden lg:block" />
          </div>

          {/* Текст — имя интегрировано сверху */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-line" />
              <span className="section-label">О тренере</span>
            </div>

            {/* Имя и должность как часть текстового блока */}
            <h2 className="font-cormorant font-light text-5xl md:text-6xl leading-tight mb-2">
              Лена Соколова
            </h2>
            <p className="font-golos text-xs text-gold/80 tracking-widest uppercase mb-7">
              Персональный тренер · 7+ лет опыта
            </p>

            <p className="font-golos font-light text-foreground/70 leading-relaxed mb-4">
              Помогаю людям открыть возможности своего тела. Моя история начиналась с профессиональной гимнастики, а сегодня — это йога, стретчинг, фитнес и пилон.
            </p>
            <p className="font-golos font-light text-foreground/70 leading-relaxed mb-8">
              Каждая программа создаётся индивидуально. Неважно, новичок вы или опытный спортсмен — найдём подход именно для вас.
            </p>

            <div className="grid grid-cols-1 gap-3">
              {achievements.map((a) => (
                <div key={a.text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <Icon name={a.icon} fallback="Star" size={16} className="text-gold" />
                  </div>
                  <span className="font-golos text-sm text-foreground/70">{a.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-border/40" />
      </div>

      {/* Блок Студия "Продвижение" */}
      <div id="studio" className="max-w-6xl mx-auto px-6 pt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Текст студии */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-line" />
              <span className="section-label">Наша студия</span>
            </div>

            <h2 className="font-cormorant font-light text-5xl md:text-6xl leading-tight mb-7">
              Студия<br />
              <span className="text-gold italic">«Продвижение»</span>
            </h2>

            <p className="font-golos font-light text-foreground/70 leading-relaxed mb-6">
              Собственная студия в самом сердце Москвы — уютное пространство, созданное для вашего развития. Зеркальные залы, профессиональные пилоны, мягкое освещение и атмосфера, которая вдохновляет двигаться.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: "MapPin", label: "Адрес", value: "ул. Малая Бронная, 15, Москва" },
                { icon: "Train", label: "Метро", value: "Маяковская / Тверская (5 мин пешком)" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 8:00–22:00 · Сб–Вс: 10:00–20:00" },
                { icon: "Phone", label: "Телефон", value: "+7 (999) 123-45-67" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={item.icon} fallback="MapPin" size={15} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-golos text-xs text-foreground/40 uppercase tracking-wider">{item.label}</div>
                    <div className="font-golos text-sm text-foreground/80 mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contacts"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold/30 text-gold font-golos text-xs tracking-widest uppercase rounded-full hover:bg-gold/10 transition-all duration-300"
            >
              Записаться в студию
              <Icon name="ArrowRight" size={14} className="text-gold" />
            </a>
          </div>

          {/* Карусель фото студии */}
          <div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-3">
              <img
                src={STUDIO_PHOTOS[studioSlide]}
                alt={`Студия Продвижение ${studioSlide + 1}`}
                className="w-full h-full object-cover object-top transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b08]/40 to-transparent" />

              {/* Arrows */}
              <button
                onClick={() => setStudioSlide((p) => (p - 1 + STUDIO_PHOTOS.length) % STUDIO_PHOTOS.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <Icon name="ChevronLeft" size={18} className="text-white" />
              </button>
              <button
                onClick={() => setStudioSlide((p) => (p + 1) % STUDIO_PHOTOS.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <Icon name="ChevronRight" size={18} className="text-white" />
              </button>

              {/* Counter */}
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full font-golos text-xs text-white/80">
                {studioSlide + 1} / {STUDIO_PHOTOS.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {STUDIO_PHOTOS.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setStudioSlide(i)}
                  className={`rounded-xl overflow-hidden aspect-square border-2 transition-all duration-300 ${
                    i === studioSlide ? "border-gold" : "border-transparent opacity-50 hover:opacity-75"
                  }`}
                >
                  <img src={photo} alt="" className="w-full h-full object-cover object-top" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Services ---
function Services() {
  const services = [
    {
      icon: "Dumbbell",
      title: "Персональный фитнес",
      desc: "Индивидуальные тренировки с учётом вашего уровня и целей. Похудение, рельеф, сила — достигнем результата вместе.",
      tags: ["1 на 1", "Анализ состава тела", "Программа питания"],
    },
    {
      icon: "Users",
      title: "Групповые занятия",
      desc: "Динамичные группы до 8 человек. Заряд энергии, командный дух и эффективная нагрузка под живую музыку.",
      tags: ["До 8 чел.", "Фитнес-микс", "Стретчинг"],
    },
    {
      icon: "Flower2",
      title: "Йога и растяжка",
      desc: "Авторские практики для гибкости, баланса и осознанности. Работаем с телом и дыханием глубоко и безопасно.",
      tags: ["Хатха-йога", "Флексибилити", "Релакс"],
    },
    {
      icon: "Sparkles",
      title: "Пилон (Pole Dance)",
      desc: "Искусство управления своим телом. Развиваем силу, пластику и уверенность — от начального уровня до продвинутого.",
      tags: ["Beginner–Advanced", "Воздушная акробатика", "Шоу-программы"],
    },
  ];

  return (
    <section id="services" className="py-16 bg-[#0d0a07]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="section-label">Услуги</span>
            <span className="gold-line" style={{ marginRight: 0, marginLeft: 12 }} />
          </div>
          <h2 className="font-cormorant font-light text-5xl md:text-6xl leading-tight">
            Направления<br />
            <span className="text-gold italic">тренировок</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl p-8 border border-border bg-[#100d0a] card-hover cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative">
                <div className="w-14 h-14 rounded-xl border border-gold/20 flex items-center justify-center mb-6 group-hover:border-gold/50 transition-colors duration-300">
                  <Icon name={s.icon} fallback="Star" size={22} className="text-gold" />
                </div>

                <h3 className="font-cormorant text-3xl font-light mb-3">{s.title}</h3>
                <p className="font-golos text-sm text-foreground/60 leading-relaxed mb-6">{s.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-golos">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <Icon name="ArrowRight" size={20} className="text-gold" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Schedule ---
const DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const SCHEDULE_DATA: Record<string, { time: string; title: string; type: string; spots: number }[]> = {
  "Пн": [
    { time: "08:00", title: "Утренняя йога", type: "Йога", spots: 3 },
    { time: "12:00", title: "Стретчинг", type: "Растяжка", spots: 5 },
    { time: "19:00", title: "Фитнес-микс", type: "Фитнес", spots: 2 },
  ],
  "Вт": [
    { time: "10:00", title: "Пилон — Beginner", type: "Пилон", spots: 4 },
    { time: "18:00", title: "Силовой фитнес", type: "Фитнес", spots: 6 },
    { time: "20:00", title: "Вечерняя йога", type: "Йога", spots: 1 },
  ],
  "Ср": [
    { time: "08:00", title: "Утренняя йога", type: "Йога", spots: 5 },
    { time: "14:00", title: "Глубокий стретчинг", type: "Растяжка", spots: 7 },
    { time: "19:00", title: "Пилон — Advanced", type: "Пилон", spots: 2 },
  ],
  "Чт": [
    { time: "11:00", title: "Хатха-йога", type: "Йога", spots: 4 },
    { time: "18:00", title: "Фитнес-микс", type: "Фитнес", spots: 3 },
    { time: "20:00", title: "Пилон — Beginner", type: "Пилон", spots: 6 },
  ],
  "Пт": [
    { time: "08:00", title: "Утренний фитнес", type: "Фитнес", spots: 2 },
    { time: "13:00", title: "Йога и медитация", type: "Йога", spots: 8 },
    { time: "19:00", title: "Пилон — Middle", type: "Пилон", spots: 3 },
  ],
  "Сб": [
    { time: "10:00", title: "Йога на природе", type: "Йога", spots: 10 },
    { time: "13:00", title: "Пилон — шоу-класс", type: "Пилон", spots: 5 },
  ],
  "Вс": [
    { time: "11:00", title: "Восстановительная йога", type: "Йога", spots: 8 },
    { time: "14:00", title: "Стретчинг для всех", type: "Растяжка", spots: 6 },
  ],
};

const TYPE_COLORS: Record<string, string> = {
  "Йога": "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  "Растяжка": "bg-blue-500/10 border-blue-500/30 text-blue-400",
  "Фитнес": "bg-orange-500/10 border-orange-500/30 text-orange-400",
  "Пилон": "bg-rose-500/10 border-rose-500/30 text-rose-400",
};

function Schedule() {
  const [activeDay, setActiveDay] = useState("Пн");
  const [today] = useState(() => {
    const d = new Date().getDay();
    return DAYS[d === 0 ? 6 : d - 1];
  });

  return (
    <section id="schedule" className="py-16 bg-[#0e0b08]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="section-label">Студия</span>
            <span className="gold-line" style={{ marginRight: 0, marginLeft: 12 }} />
          </div>
          <h2 className="font-cormorant font-light text-5xl md:text-6xl leading-tight">
            Расписание<br />
            <span className="text-gold italic">занятий</span>
          </h2>
          <p className="font-golos text-sm text-foreground/50 mt-4">
            Студия на Патриарших прудах · м. Маяковская
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {DAYS.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`w-14 h-14 rounded-xl font-golos text-sm transition-all duration-300 border ${
                activeDay === day
                  ? "bg-gold text-[#0e0b08] border-gold font-semibold"
                  : day === today
                  ? "border-gold/40 text-gold"
                  : "border-border text-foreground/50 hover:border-gold/30 hover:text-foreground/80"
              }`}
            >
              {day}
              {day === today && activeDay !== day && (
                <span className="block w-1 h-1 bg-gold rounded-full mx-auto mt-1" />
              )}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {SCHEDULE_DATA[activeDay]?.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 border border-border bg-[#100d0a] hover:border-gold/20 transition-all duration-300 card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="font-cormorant text-3xl font-light text-gold">{item.time}</div>
                <span className={`px-2 py-0.5 rounded-full text-xs border font-golos ${TYPE_COLORS[item.type]}`}>
                  {item.type}
                </span>
              </div>
              <h4 className="font-cormorant text-xl font-light mb-3">{item.title}</h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={13} className="text-foreground/40" />
                  <span className="font-golos text-xs text-foreground/40">Мест: {item.spots}</span>
                </div>
                <a href="#contacts" className="font-golos text-xs text-gold hover:underline">
                  Записаться →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="font-golos text-sm text-foreground/40">
            Индивидуальные тренировки — по договорённости с тренером
          </p>
        </div>
      </div>
    </section>
  );
}

// --- Pricing ---
function Pricing() {
  const plans = [
    {
      title: "Разовое занятие",
      price: "2 500",
      unit: "₽ / занятие",
      popular: false,
      desc: "Попробуйте любое направление без обязательств",
      features: [
        "1 занятие на выбор",
        "Любой формат (группа или персонально)",
        "Консультация по питанию",
      ],
    },
    {
      title: "Абонемент 8 занятий",
      price: "16 000",
      unit: "₽ / месяц",
      popular: true,
      desc: "Оптимальный выбор для стабильного результата",
      features: [
        "8 занятий любого направления",
        "Составление программы тренировок",
        "Контроль питания и рекомендации",
        "Доступ к записям занятий",
        "Персональный чат с тренером",
      ],
    },
    {
      title: "VIP Персональный",
      price: "35 000",
      unit: "₽ / месяц",
      popular: false,
      desc: "Максимальный результат за минимальное время",
      features: [
        "12 персональных занятий",
        "Полный фитнес-аудит",
        "Индивидуальная программа питания",
        "Безлимитные вопросы в чате",
        "Видео-разбор техники",
        "Приоритетное расписание",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-[#0d0a07]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="section-label">Стоимость</span>
            <span className="gold-line" style={{ marginRight: 0, marginLeft: 12 }} />
          </div>
          <h2 className="font-cormorant font-light text-5xl md:text-6xl leading-tight">
            Прайс-лист<br />
            <span className="text-gold italic">на услуги</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.title}
              className={`relative rounded-2xl p-8 border transition-all duration-300 card-hover ${
                p.popular
                  ? "border-gold/50 bg-gradient-to-b from-gold/10 to-[#100d0a]"
                  : "border-border bg-[#100d0a]"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-[#0e0b08] rounded-full font-golos text-xs font-semibold tracking-wider uppercase whitespace-nowrap">
                  Популярный выбор
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-cormorant text-2xl font-light mb-2">{p.title}</h3>
                <p className="font-golos text-xs text-foreground/50">{p.desc}</p>
              </div>

              <div className="mb-8">
                <span className="font-cormorant text-5xl font-light text-gold">{p.price}</span>
                <span className="font-golos text-sm text-foreground/50 ml-2">{p.unit}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Icon name="Check" size={15} className="text-gold mt-0.5 flex-shrink-0" />
                    <span className="font-golos text-sm text-foreground/70">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacts"
                className={`block w-full py-3 rounded-full text-center font-golos text-sm tracking-widest uppercase transition-all duration-300 ${
                  p.popular
                    ? "bg-gold text-[#0e0b08] hover:opacity-90"
                    : "border border-gold/30 text-gold hover:bg-gold/10"
                }`}
              >
                Выбрать
              </a>
            </div>
          ))}
        </div>

        <p className="text-center font-golos text-xs text-foreground/30 mt-8">
          Абонементы действуют 30 дней с момента первого посещения · Возможна оплата картой
        </p>
      </div>
    </section>
  );
}

// --- Gallery ---
const GALLERY_ITEMS = [
  { src: TRAINER_PHOTO, label: "Тренировка" },
  { src: TRAINER_PHOTO, label: "Йога" },
  { src: TRAINER_PHOTO, label: "Пилон" },
  { src: TRAINER_PHOTO, label: "Стретчинг" },
  { src: TRAINER_PHOTO, label: "Фитнес" },
  { src: TRAINER_PHOTO, label: "Групповое занятие" },
];

function Gallery() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 bg-[#0e0b08]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="section-label">Атмосфера</span>
            <span className="gold-line" style={{ marginRight: 0, marginLeft: 12 }} />
          </div>
          <h2 className="font-cormorant font-light text-5xl md:text-6xl leading-tight">
            Галерея<br />
            <span className="text-gold italic">студии</span>
          </h2>
        </div>

        <div
          className="relative rounded-3xl overflow-hidden aspect-video mb-4 cursor-pointer"
          onClick={() => setLightbox(active)}
        >
          <img
            src={GALLERY_ITEMS[active].src}
            alt={GALLERY_ITEMS[active].label}
            className="w-full h-full object-cover object-top transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b08]/60 to-transparent" />
          <div className="absolute bottom-6 left-6 font-cormorant text-2xl font-light text-white">
            {GALLERY_ITEMS[active].label}
          </div>
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
            <Icon name="Expand" size={16} className="text-white" />
          </div>
        </div>

        <div className="grid grid-cols-6 gap-2">
          {GALLERY_ITEMS.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all duration-300 ${
                i === active ? "border-gold" : "border-transparent opacity-60 hover:opacity-80"
              }`}
            >
              <img src={item.src} alt={item.label} className="w-full h-full object-cover object-top" />
            </button>
          ))}
        </div>

        <p className="text-center font-golos text-xs text-foreground/30 mt-6">
          Больше фото и видео в Instagram @lena.trainer
        </p>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Icon name="X" size={20} className="text-white" />
          </button>
          <img
            src={GALLERY_ITEMS[lightbox].src}
            alt=""
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {GALLERY_ITEMS.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`w-2 h-2 rounded-full transition-all ${i === lightbox ? "bg-gold" : "bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

// --- Reviews ---
function Reviews() {
  const reviews = [
    {
      name: "Анастасия К.",
      result: "−12 кг за 4 месяца",
      text: "Лена — тренер от бога. Я пробовала многих, но только с ней достигла результата. Подход очень индивидуальный, всегда слышит твоё тело.",
      stars: 5,
      direction: "Фитнес + питание",
    },
    {
      name: "Марина В.",
      result: "Шпагат за 6 недель",
      text: "Никогда не думала, что смогу сесть на шпагат в 35 лет. Лена разрушила все мои ограничения — методично, безопасно и с удовольствием.",
      stars: 5,
      direction: "Растяжка",
    },
    {
      name: "Екатерина Д.",
      result: "Йога с нуля до уверенной практики",
      text: "Занимаюсь уже год. Лена объясняет технику так, что всё становится понятным. После занятий чувствую себя обновлённой.",
      stars: 5,
      direction: "Йога",
    },
    {
      name: "Ольга Н.",
      result: "Победа в regional pole show",
      text: "Пришла совсем без опыта. За 8 месяцев Лена вывела меня на соревновательный уровень. Невероятно!",
      stars: 5,
      direction: "Пилон",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section id="reviews" className="py-16 bg-[#0d0a07]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="section-label">Клиенты</span>
            <span className="gold-line" style={{ marginRight: 0, marginLeft: 12 }} />
          </div>
          <h2 className="font-cormorant font-light text-5xl md:text-6xl leading-tight">
            Отзывы и<br />
            <span className="text-gold italic">результаты</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <div className="rounded-3xl border border-border bg-[#100d0a] p-10 relative">
            <div className="font-cormorant text-6xl text-gold/20 absolute top-6 left-8 leading-none">"</div>

            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                {[...Array(reviews[active].stars)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-gold" />
                ))}
              </div>

              <p className="font-cormorant text-2xl font-light leading-relaxed mb-8 text-foreground/90">
                {reviews[active].text}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="font-golos font-medium text-sm">{reviews[active].name}</div>
                  <div className="font-golos text-xs text-foreground/50">{reviews[active].direction}</div>
                </div>
                <div className="px-4 py-2 bg-gold/10 border border-gold/30 rounded-full">
                  <span className="font-golos text-xs text-gold font-medium">{reviews[active].result}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 mb-10">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active ? "w-8 h-2 bg-gold" : "w-2 h-2 bg-foreground/20 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {reviews.map((r, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-xl p-4 text-left border transition-all duration-300 ${
                i === active ? "border-gold/40 bg-gold/5" : "border-border bg-[#100d0a] hover:border-gold/20"
              }`}
            >
              <div className="font-golos text-xs font-medium mb-1">{r.name}</div>
              <div className="font-golos text-xs text-gold/70">{r.result}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Contacts ---
function Contacts() {
  const socials = [
    { icon: "Instagram", label: "Instagram", value: "@lena.trainer", href: "#" },
    { icon: "MessageCircle", label: "Telegram", value: "@lena_fit", href: "#" },
    { icon: "Phone", label: "WhatsApp", value: "+7 (999) 123-45-67", href: "#" },
    { icon: "Mail", label: "Email", value: "lena@trainer.ru", href: "#" },
  ];

  return (
    <section id="contacts" className="py-16 bg-[#0e0b08]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-line" />
              <span className="section-label">Запись</span>
            </div>
            <h2 className="font-cormorant font-light text-5xl md:text-6xl leading-tight mb-8">
              Начнём<br />
              <span className="text-gold italic">ваш путь</span>
            </h2>
            <p className="font-golos font-light text-foreground/60 leading-relaxed mb-10">
              Напишите мне в любой удобный мессенджер — отвечаю в течение нескольких часов. Первая консультация бесплатна.
            </p>

            <div className="space-y-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-border hover:border-gold/30 bg-[#100d0a] transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-full border border-gold/20 group-hover:border-gold/50 flex items-center justify-center transition-colors duration-300">
                    <Icon name={s.icon} fallback="Star" size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-golos text-xs text-foreground/40 uppercase tracking-wider">{s.label}</div>
                    <div className="font-golos text-sm text-foreground/80 mt-0.5">{s.value}</div>
                  </div>
                  <Icon name="ArrowRight" size={16} className="text-gold/30 group-hover:text-gold ml-auto transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-[#100d0a] p-8">
            <h3 className="font-cormorant text-3xl font-light mb-2">Оставить заявку</h3>
            <p className="font-golos text-sm text-foreground/50 mb-8">Свяжусь с вами в течение 2 часов</p>

            <div className="space-y-4">
              <div>
                <label className="font-golos text-xs text-foreground/40 uppercase tracking-wider block mb-2">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Анастасия"
                  className="w-full bg-[#0e0b08] border border-border rounded-xl px-4 py-3 font-golos text-sm text-foreground focus:outline-none focus:border-gold/50 transition-colors placeholder:text-foreground/20"
                />
              </div>
              <div>
                <label className="font-golos text-xs text-foreground/40 uppercase tracking-wider block mb-2">Телефон или Telegram</label>
                <input
                  type="text"
                  placeholder="+7 (999) 000-00-00"
                  className="w-full bg-[#0e0b08] border border-border rounded-xl px-4 py-3 font-golos text-sm text-foreground focus:outline-none focus:border-gold/50 transition-colors placeholder:text-foreground/20"
                />
              </div>
              <div>
                <label className="font-golos text-xs text-foreground/40 uppercase tracking-wider block mb-2">Интересующее направление</label>
                <select className="w-full bg-[#0e0b08] border border-border rounded-xl px-4 py-3 font-golos text-sm text-foreground focus:outline-none focus:border-gold/50 transition-colors">
                  <option value="">Выберите...</option>
                  <option>Персональный фитнес</option>
                  <option>Групповые занятия</option>
                  <option>Йога и растяжка</option>
                  <option>Пилон</option>
                </select>
              </div>
              <div>
                <label className="font-golos text-xs text-foreground/40 uppercase tracking-wider block mb-2">Сообщение (необязательно)</label>
                <textarea
                  rows={3}
                  placeholder="Расскажите о своих целях..."
                  className="w-full bg-[#0e0b08] border border-border rounded-xl px-4 py-3 font-golos text-sm text-foreground focus:outline-none focus:border-gold/50 transition-colors placeholder:text-foreground/20 resize-none"
                />
              </div>

              <button className="w-full py-4 bg-gold text-[#0e0b08] rounded-xl font-golos text-sm font-semibold tracking-widest uppercase hover:opacity-90 transition-all duration-300 hover:scale-[1.01] mt-2">
                Отправить заявку
              </button>

              <p className="font-golos text-xs text-center text-foreground/30 mt-3">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="bg-[#0a0806] border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-cormorant text-2xl font-light tracking-widest text-gold">ЛЕНА</div>
        <p className="font-golos text-xs text-foreground/30 text-center">
          © 2024 Лена Соколова · Персональный тренер · Москва
        </p>
        <div className="flex gap-6">
          {["Условия", "Политика"].map((l) => (
            <a key={l} href="#" className="font-golos text-xs text-foreground/30 hover:text-foreground/60 transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// --- App ---
export default function Index() {
  return (
    <div className="min-h-screen bg-[#0e0b08]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Schedule />
      <Pricing />
      <Gallery />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}