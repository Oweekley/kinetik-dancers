"use client";

import { useEffect, useState } from "react";

const instagramUrl =
  "https://www.instagram.com/kinetikdancers?igsh=MW9sYng3ejZxc2FudQ==";

type Language = "cy" | "en";

const formName = "kinetik-interest";

const copy = {
  cy: {
    navLabel: "Prif ddewislen",
    homeLabel: "Hafan Kinetik Dancers",
    trial: "Gwers brawf",
    languageLabel: "Dewis iaith",
    languageName: "Cymraeg",
    englishName: "English",
    menuOpen: "Agor dewislen",
    menuClose: "Cau dewislen",
    quickLinks: [
      ["Am Keitija", "#about"],
      ["Gwersi", "#classes"],
      ["Archebu", "#booking"],
      ["Cyswllt", "#contact"],
    ],
    hero: {
      kicker: "Gwersi dawns newydd gyda Keitija Knutova",
      headline: "Gwersi dawns i unrhyw un rhwng 10-15 oed.",
      subheading:
        "Wedi'i leoli ym Mae Colwyn, gyda dosbarthiadau street a commercial sy'n llawn egni, hyder a hwyl. Anfonwch neges am fwy o wybodaeth.",
      primaryCta: "Archebu gwers brawf",
      secondaryCta: "Gweld y gwersi",
      graphicLabel: "Graffig symud haniaethol",
      movement: "Symud. Creu. Perthyn.",
      signoff: "Cariad mawr, Keitija",
      stats: [
        ["10-15", "Oed"],
        ["7-8yh", "Dydd Llun"],
        ["Street", "+ Commercial"],
      ],
    },
    about: {
      kicker: "Am Keitija",
      heading: "Dawnsiwr lleol sydd wedi tyfu drwy gystadlu, perfformio a chreu.",
      paragraphs: [
        "Mae Kinetik Dancers yn cael ei redeg gan Keitija Knutova, dawnsiwr a pherfformiwr o Fae Colwyn sydd wedi bod yn rhan o fyd dawns a pherfformio lleol ers yn ifanc.",
        "Mae ei thaith ddawns ddiweddar wedi cynnwys hyfforddi a pherfformio gyda Step One Performing Arts ac Autonomy Dancers, grŵp dawns o Ogledd Cymru sydd wedi cystadlu ar lefel uchel ac wedi perfformio mewn digwyddiadau mawr.",
        "Nawr mae Keitija yn defnyddio'r profiad hwnnw i greu dosbarth street a commercial sy'n teimlo'n egniol, cyfeillgar ac adeiladol i bobl ifanc 10-15 oed.",
      ],
      highlights: [
        {
          title: "Step One Performing Arts",
          text: "Mae Step One yn ysgol berfformio ym Mae Colwyn gyda dosbarthiadau dawns, drama, perfformiadau, arholiadau a chystadlaethau rhanbarthol.",
        },
        {
          title: "Autonomy Dancers",
          text: "Mae Autonomy yn grŵp dawns street/hip-hop o Ogledd Cymru sydd wedi perfformio'n rhyngwladol ac wedi cystadlu mewn pencampwriaethau mawr.",
        },
        {
          title: "Enillydd Eisteddfod",
          text: "Mae canlyniadau cyhoeddus hefyd yn dangos Keitija yn ennill Dawns Hip-Hop/Stryd/Disgo yn Eisteddfod Rhanbarth Conwy 2018.",
        },
      ],
    },
    classesSection: {
      kicker: "Gwersi",
      heading: "Dod o hyd i'r wers iawn i'ch dawnsiwr.",
      priceLabel: "Pris",
      timeLabel: "Amser",
      locationLabel: "Lleoliad",
      cta: "Cofrestru diddordeb",
    },
    why: {
      kicker: "Pam dewis Kinetik",
      heading: "Diwylliant dosbarth sy'n teimlo'n gyffrous ac yn gefnogol.",
    },
    booking: {
      kicker: "Archebu gwers brawf",
      heading: "Cofrestru diddordeb mewn gwers.",
      intro:
        "Anfonwch neges am fwy o wybodaeth neu i gofrestru diddordeb yn y dosbarth dydd Llun 7-8yh ym Mae Colwyn.",
      guardian: "Enw rhiant/gwarcheidwad",
      dancer: "Enw'r dawnsiwr",
      age: "Oed y dawnsiwr",
      email: "E-bost",
      phone: "Ffôn",
      classInterest: "Gwers o ddiddordeb",
      chooseClass: "Dewis gwers",
      message: "Neges",
      placeholder:
        "Dywedwch wrthym am eich dawnsiwr, oed, lefel profiad neu unrhyw gwestiwn.",
      consent:
        "Rwy'n deall y gall Kinetik Dancers ofyn ar wahân am ganiatâd llun/fideo cyn rhannu unrhyw gynnwys o'r gwersi.",
      submit: "Anfon ymholiad",
      submitting: "Yn anfon...",
      submitError:
        "Ni allwyd anfon y ffurflen. Ceisiwch eto, neu anfonwch neges ar Instagram.",
      required: "Angenrheidiol",
      botField: "Peidiwch â llenwi hwn os ydych yn berson.",
    },
    contact: {
      kicker: "Cyswllt",
      heading: "Barod i roi cynnig ar wers?",
      intro:
        "Gwersi dawns i unrhyw un rhwng 10-15 oed, wedi'i leoli ym Mae Colwyn. Anfonwch neges neu dilynwch Instagram am fwy o wybodaeth.",
      email: "E-bost",
      area: "Ardal",
      areaValue: "Bae Colwyn / Gogledd Cymru",
      cta: "Archebu gwers brawf",
    },
    footer: {
      intro: "Gwersi dawns cyfeillgar ar gyfer hyder, creadigrwydd a chymuned.",
      quickLinks: "Dolenni cyflym",
      useful: "Defnyddiol",
      privacy: "Polisi Preifatrwydd",
      safeguarding: "Diogelu",
      terms: "Telerau",
      copyright: "Hawlfraint",
      rights: "Cedwir pob hawl.",
    },
  },
  en: {
    navLabel: "Main navigation",
    homeLabel: "Kinetik Dancers home",
    trial: "Trial class",
    languageLabel: "Choose language",
    languageName: "Welsh",
    englishName: "English",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    quickLinks: [
      ["About Keitija", "#about"],
      ["Classes", "#classes"],
      ["Book", "#booking"],
      ["Contact", "#contact"],
    ],
    hero: {
      kicker: "New dance classes with Keitija Knutova",
      headline: "Dance classes for anyone aged 10-15.",
      subheading:
        "Based in Colwyn Bay, with street and commercial classes built around energy, confidence and fun. Message for more info.",
      primaryCta: "Book a trial class",
      secondaryCta: "View classes",
      graphicLabel: "Abstract movement graphic",
      movement: "Move. Create. Belong.",
      signoff: "Love, Keitija",
      stats: [
        ["10-15", "Ages"],
        ["7-8pm", "Mondays"],
        ["Street", "+ Commercial"],
      ],
    },
    about: {
      kicker: "About Keitija",
      heading: "A local dancer shaped by competing, performing and creating.",
      paragraphs: [
        "Kinetik Dancers is run by Keitija Knutova, a dancer and performer from Colwyn Bay who has been part of local dance and performance from a young age.",
        "Her recent dance journey has included training and performing with Step One Performing Arts and Autonomy Dancers, a North Wales dance group connected with high-level competition and major event performances.",
        "Keitija is now using that experience to build an energetic, friendly and confidence-focused street and commercial class for young people aged 10-15.",
      ],
      highlights: [
        {
          title: "Step One Performing Arts",
          text: "Step One is a Colwyn Bay performing arts school offering dance, drama, performances, exams and regional competitions.",
        },
        {
          title: "Autonomy Dancers",
          text: "Autonomy is a North Wales street/hip-hop dance group that has performed internationally and competed in major championships.",
        },
        {
          title: "Eisteddfod winner",
          text: "Public results also show Keitija winning Hip-Hop/Street/Disco at Eisteddfod Rhanbarth Conwy 2018.",
        },
      ],
    },
    classesSection: {
      kicker: "Classes",
      heading: "Find the right class for your dancer.",
      priceLabel: "Price",
      timeLabel: "Time",
      locationLabel: "Location",
      cta: "Register interest",
    },
    why: {
      kicker: "Why choose Kinetik",
      heading: "A class culture that feels exciting and supportive.",
    },
    booking: {
      kicker: "Book a trial",
      heading: "Register interest in a class.",
      intro:
        "Message for more information or to register interest in the Monday 7-8pm class in Colwyn Bay.",
      guardian: "Parent/guardian name",
      dancer: "Dancer's name",
      age: "Dancer's age",
      email: "Email",
      phone: "Phone",
      classInterest: "Class interested in",
      chooseClass: "Choose a class",
      message: "Message",
      placeholder:
        "Tell us about your dancer, their age, experience level or any question.",
      consent:
        "I understand Kinetik Dancers may ask separately for photo/video consent before sharing any class content.",
      submit: "Send enquiry",
      submitting: "Sending...",
      submitError:
        "The form could not be sent. Please try again or message on Instagram.",
      required: "Required",
      botField: "Do not fill this in if you are human.",
    },
    contact: {
      kicker: "Contact",
      heading: "Ready to try a class?",
      intro:
        "Dance classes for anyone aged 10-15, based in Colwyn Bay. Send a message or follow Instagram for more information.",
      email: "Email",
      area: "Area",
      areaValue: "Colwyn Bay / North Wales",
      cta: "Book a trial class",
    },
    footer: {
      intro: "Friendly dance classes for confidence, creativity and community.",
      quickLinks: "Quick links",
      useful: "Useful",
      privacy: "Privacy Policy",
      safeguarding: "Safeguarding",
      terms: "Terms",
      copyright: "Copyright",
      rights: "All rights reserved.",
    },
  },
};

const classes = {
  // Edit class names, ages, prices, times and locations here when the timetable is confirmed.
  cy: [
    {
      name: "Mini Movers",
      ages: "Oed 4-7",
      vibe: "Dosbarth y dyfodol ar gyfer symud chwareus, gemau rhythm a sylfeini dawns cyntaf.",
      time: "I'w gyhoeddi",
      price: "O £6 y wers",
      location: "Bae Colwyn / Gogledd Cymru - lleoliad i'w gadarnhau",
    },
    {
      name: "Junior Dance",
      ages: "Oed 8-11",
      vibe: "Dosbarth y dyfodol gyda rwtinau llawn egni, sgiliau hyder a gwaith tîm creadigol.",
      time: "I'w gyhoeddi",
      price: "O £7 y wers",
      location: "Bae Colwyn / Gogledd Cymru - lleoliad i'w gadarnhau",
    },
    {
      name: "Street + Commercial",
      ages: "Oed 10-15",
      vibe: "Y dosbarth cyntaf: rwtinau street a commercial gyda chyfle i ddatblygu tuag at grŵp perfformio.",
      time: "Dydd Llun, 7-8yh",
      price: "O £8 y wers",
      location: "Bae Colwyn / Colwyn Bay",
    },
  ],
  en: [
    {
      name: "Mini Movers",
      ages: "Ages 4-7",
      vibe: "Future class for playful movement, rhythm games and first dance foundations.",
      time: "To be announced",
      price: "From £6 per class",
      location: "Colwyn Bay / North Wales venue TBC",
    },
    {
      name: "Junior Dance",
      ages: "Ages 8-11",
      vibe: "Future class with high-energy routines, confidence skills and creative teamwork.",
      time: "To be announced",
      price: "From £7 per class",
      location: "Colwyn Bay / North Wales venue TBC",
    },
    {
      name: "Street + Commercial",
      ages: "Ages 10-15",
      vibe: "The first class: street and commercial routines with the chance to develop towards a performance group.",
      time: "Mondays, 7-8pm",
      price: "From £8 per class",
      location: "Colwyn Bay",
    },
  ],
};

const features = {
  cy: [
    {
      title: "Meithrin hyder",
      text: "Addysgu cefnogol sy'n helpu dawnswyr i deimlo'n ddewr, yn weladwy ac yn falch o'u cynnydd.",
    },
    {
      title: "Croeso i ddechreuwyr",
      text: "Camau clir, dosbarthiadau croesawgar a dim pwysau i fod yn berffaith ar y diwrnod cyntaf.",
    },
    {
      title: "Hwyl ac egni",
      text: "Cerddoriaeth ffres, rwtinau bywiog a sesiynau sy'n cadw dawnswyr i symud.",
    },
    {
      title: "Cynhwysol a chefnogol",
      text: "Lle cymunedol lle gall pob dawnsiwr ymuno, tyfu a theimlo'n rhan o'r grŵp.",
    },
  ],
  en: [
    {
      title: "Confidence-building",
      text: "Supportive teaching that helps dancers feel brave, seen and proud of their progress.",
    },
    {
      title: "Beginner-friendly",
      text: "Clear steps, welcoming classes and no pressure to be perfect on day one.",
    },
    {
      title: "Fun and energetic",
      text: "Fresh music, lively routines and sessions that keep dancers moving.",
    },
    {
      title: "Inclusive and supportive",
      text: "A community-first space where every dancer can join in and grow.",
    },
  ],
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("cy");
  const t = copy[language];

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("kinetik-language");

    if (savedLanguage === "cy" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("kinetik-language", language);
    document.documentElement.lang = language === "cy" ? "cy-GB" : "en-GB";
  }, [language]);

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-black focus:text-[var(--kinetik-ink)] focus:shadow-xl"
      >
        Skip to content
      </a>
      <main id="content">
      <Header language={language} setLanguage={setLanguage} t={t} />
      <Hero t={t} />
      <About t={t} />
      <Classes language={language} t={t} />
      <WhyChoose language={language} t={t} />
      <BookingForm language={language} t={t} />
      <Contact t={t} />
      <Footer t={t} />
      </main>
    </>
  );
}

function LogoMark({ className = "size-12" }: { className?: string }) {
  return (
    <img
      src="/kinetik-logo.jpg"
      alt="Kinetik Dancers logo"
      className={`${className} rounded-full object-cover shadow-[4px_4px_0_#ff1493] ring-2 ring-white`}
    />
  );
}

function Header({
  language,
  setLanguage,
  t,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof copy)[Language];
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuLabel = isMenuOpen ? t.menuClose : t.menuOpen;

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4"
        aria-label={t.navLabel}
      >
        <a href="#" className="flex min-w-0 items-center gap-3" aria-label={t.homeLabel}>
          <LogoMark className="size-12 shrink-0" />
          <span className="truncate text-lg font-black tracking-tight text-[var(--kinetik-ink)]">
            Kinetik Dancers
          </span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-bold text-neutral-700 md:flex">
          {t.quickLinks.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-[var(--kinetik-pink-dark)]">
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div
            className="flex rounded-full bg-neutral-100 p-1 text-xs font-black ring-1 ring-black/10"
            role="group"
            aria-label={t.languageLabel}
          >
            <button
              type="button"
              onClick={() => setLanguage("cy")}
              className={`rounded-full px-3 py-2 transition ${
                language === "cy"
                  ? "bg-[var(--kinetik-lime)] text-[var(--kinetik-ink)]"
                  : "text-neutral-600 hover:text-[var(--kinetik-ink)]"
              }`}
              aria-pressed={language === "cy"}
            >
              CY
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-2 transition ${
                language === "en"
                  ? "bg-[var(--kinetik-lime)] text-[var(--kinetik-ink)]"
                  : "text-neutral-600 hover:text-[var(--kinetik-ink)]"
              }`}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>
          <a
            href="#booking"
            className="hidden rounded-full bg-[var(--kinetik-ink)] px-4 py-2 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-black focus:outline-none focus:ring-4 focus:ring-pink-200 sm:inline-flex"
          >
            {t.trial}
          </a>
          <button
            type="button"
            aria-label={menuLabel}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="grid size-11 place-items-center rounded-full bg-[var(--kinetik-ink)] text-white shadow-sm transition hover:bg-black focus:outline-none focus:ring-4 focus:ring-pink-200 md:hidden"
          >
            <span className="grid gap-1.5" aria-hidden="true">
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
        <div id="mobile-menu" className="w-full md:hidden">
          {isMenuOpen ? (
            <div className="mt-2 grid gap-2 rounded-3xl bg-[var(--kinetik-ink)] p-3 text-white shadow-xl">
              {t.quickLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-black transition hover:bg-white/10 focus:bg-white/10 focus:outline-none"
                >
                  {label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl bg-[var(--kinetik-lime)] px-4 py-3 text-base font-black text-[var(--kinetik-ink)] transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                {t.trial}
              </a>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
}

function Hero({ t }: { t: (typeof copy)[Language] }) {
  return (
    <section className="hero-grid relative overflow-hidden bg-[var(--kinetik-lime)]">
      <div className="motion-line -right-24 top-24 h-36 w-80" aria-hidden="true" />
      <div className="motion-line -left-24 bottom-24 h-32 w-72" aria-hidden="true" />
      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-6xl items-center gap-10 px-5 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
        <div className="relative z-10">
          <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.08em] text-[var(--kinetik-ink)] shadow-[4px_4px_0_#ff1493] sm:tracking-[0.16em]">
            {t.hero.kicker}
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.03] tracking-tight text-[var(--kinetik-ink)] [overflow-wrap:anywhere] sm:text-6xl sm:leading-[0.98] lg:text-7xl">
            {t.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-neutral-800 sm:text-xl">
            {t.hero.subheading}
          </p>
          <p className="mt-4 w-fit rounded-full bg-white/80 px-4 py-2 text-base font-black text-[var(--kinetik-ink)] shadow-sm">
            {t.hero.signoff}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#booking"
              className="rounded-full bg-[var(--kinetik-pink)] px-6 py-4 text-center text-base font-black text-[var(--kinetik-ink)] shadow-[6px_6px_0_#111316] transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-pink-200"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href="#classes"
              className="rounded-full bg-white px-6 py-4 text-center text-base font-black text-[var(--kinetik-ink)] shadow-[6px_6px_0_#111316] transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/70"
            >
              {t.hero.secondaryCta}
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-[var(--kinetik-ink)] bg-transparent px-6 py-4 text-center text-base font-black text-[var(--kinetik-ink)] transition hover:bg-[var(--kinetik-ink)] hover:text-white focus:outline-none focus:ring-4 focus:ring-white/70"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="relative isolate min-h-[360px]" aria-label={t.hero.graphicLabel}>
          <div className="pulse-disc absolute right-4 top-4 z-0 size-36 rounded-full bg-[var(--kinetik-pink)] shadow-[0_0_0_18px_rgba(255,255,255,0.35)] sm:size-44" />
          <div className="absolute bottom-10 left-0 right-0 z-10 rounded-[2rem] bg-[var(--kinetik-ink)] p-6 text-white shadow-2xl">
            <div className="flex items-center gap-3">
              <LogoMark className="size-14 shrink-0" />
              <p className="text-sm font-black uppercase tracking-[0.12em] text-[var(--kinetik-lime)] sm:tracking-[0.18em]">
                Street + Commercial
              </p>
            </div>
            <p className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              {t.hero.movement}
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {t.hero.stats.map(([value, label]) => (
                <div key={value} className="min-w-0 rounded-2xl bg-white/10 p-3 sm:p-4">
                  <p className="break-words text-xl font-black leading-tight sm:text-2xl">{value}</p>
                  <p className="text-xs font-bold uppercase tracking-wide text-white/70">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute left-8 top-20 z-0 h-28 w-28 rounded-full border-[18px] border-white/45" />
          <div className="absolute bottom-0 right-8 z-0 h-28 w-28 rounded-full bg-[var(--kinetik-teal)] shadow-[8px_8px_0_#ff1493]" />
        </div>
      </div>
    </section>
  );
}

function About({ t }: { t: (typeof copy)[Language] }) {
  return (
    <section id="about" className="bg-white px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.12em] text-[var(--kinetik-pink-dark)] sm:tracking-[0.18em]">
            {t.about.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-[var(--kinetik-ink)] sm:text-5xl">
            {t.about.heading}
          </h2>
        </div>
        <div>
          <div className="rounded-3xl bg-neutral-50 p-6 text-lg leading-8 text-neutral-800 shadow-sm ring-1 ring-black/5 sm:p-8">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-5 first:mt-0">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {t.about.highlights.map((highlight) => (
              <article
                key={highlight.title}
                className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/10"
              >
                <h3 className="text-base font-black text-[var(--kinetik-ink)]">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-800">
                  {highlight.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Classes({
  language,
  t,
}: {
  language: Language;
  t: (typeof copy)[Language];
}) {
  return (
    <section id="classes" className="bg-[#f6f7ef] px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-[var(--kinetik-pink-dark)] sm:tracking-[0.18em]">
            {t.classesSection.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-[var(--kinetik-ink)] sm:text-5xl">
            {t.classesSection.heading}
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {classes[language].map((danceClass) => (
            <article
              key={danceClass.name}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="w-fit rounded-full bg-[var(--kinetik-lime)] px-3 py-1 text-sm font-black text-[var(--kinetik-ink)]">
                {danceClass.ages}
              </p>
              <h3 className="mt-5 text-2xl font-black text-[var(--kinetik-ink)]">
                {danceClass.name}
              </h3>
              <p className="mt-3 min-h-20 text-neutral-800">{danceClass.vibe}</p>
              <dl className="mt-6 space-y-3 text-sm">
                <div>
                  <dt className="font-black text-neutral-900">{t.classesSection.timeLabel}</dt>
                  <dd className="text-neutral-700">{danceClass.time}</dd>
                </div>
                <div>
                  <dt className="font-black text-neutral-900">{t.classesSection.priceLabel}</dt>
                  <dd className="text-neutral-700">{danceClass.price}</dd>
                </div>
                <div>
                  <dt className="font-black text-neutral-900">{t.classesSection.locationLabel}</dt>
                  <dd className="text-neutral-700">{danceClass.location}</dd>
                </div>
              </dl>
              <a
                href="#booking"
                className="mt-6 inline-flex w-full justify-center rounded-full bg-[var(--kinetik-ink)] px-5 py-3 font-black text-white transition hover:bg-[var(--kinetik-pink)] hover:text-[var(--kinetik-ink)] focus:outline-none focus:ring-4 focus:ring-pink-200"
              >
                {t.classesSection.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose({
  language,
  t,
}: {
  language: Language;
  t: (typeof copy)[Language];
}) {
  return (
    <section className="bg-[var(--kinetik-ink)] px-5 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--kinetik-lime)]">
            {t.why.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            {t.why.heading}
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features[language].map((feature) => (
            <article key={feature.title} className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
              <h3 className="text-xl font-black text-[var(--kinetik-lime)]">{feature.title}</h3>
              <p className="mt-3 leading-7 text-white/85">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingForm({
  language,
  t,
}: {
  language: Language;
  t: (typeof copy)[Language];
}) {
  return (
    <section id="booking" className="bg-white px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.12em] text-[var(--kinetik-pink-dark)] sm:tracking-[0.18em]">
            {t.booking.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-[var(--kinetik-ink)] sm:text-5xl">
            {t.booking.heading}
          </h2>
          <p className="mt-5 text-lg leading-8 text-neutral-800">
            {t.booking.intro}
          </p>
        </div>
        {/*
          Netlify Forms is enabled with name/data-netlify.
          In Netlify, open Forms for this site after deployment to view submissions.
          You can swap this later for Formspree, Basin, a custom API route, or Calendly.
        */}
        <form
          name={formName}
          method="POST"
          action="/diolch"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="rounded-3xl bg-[#f6f7ef] p-5 shadow-sm ring-1 ring-black/5 sm:p-8"
        >
          <input type="hidden" name="form-name" value={formName} />
          <label className="hidden">
            {t.booking.botField}
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={t.booking.guardian} id="guardian-name" autoComplete="name" required />
            <Field label={t.booking.dancer} id="dancer-name" autoComplete="off" required />
            <Field label={t.booking.age} id="dancer-age" type="number" min="4" max="18" required />
            <Field label={t.booking.email} id="email" type="email" autoComplete="email" required />
            <Field label={t.booking.phone} id="phone" type="tel" autoComplete="tel" />
            <label className="grid gap-2 text-sm font-bold text-neutral-800">
              {t.booking.classInterest}
              <select
                id="class-interest"
                name="class-interest"
                required
                className="min-h-12 rounded-2xl border border-black/10 bg-white px-4 text-base font-semibold outline-none transition focus:border-[var(--kinetik-pink)] focus:ring-4 focus:ring-pink-100"
                defaultValue=""
              >
                <option value="" disabled>
                  {t.booking.chooseClass}
                </option>
                {classes[language].map((danceClass) => (
                  <option key={danceClass.name}>{danceClass.name}</option>
                ))}
              </select>
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-bold text-neutral-800">
            {t.booking.message}
            <textarea
              id="message"
              name="message"
              rows={5}
              className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-base font-semibold outline-none transition focus:border-[var(--kinetik-pink)] focus:ring-4 focus:ring-pink-100"
              placeholder={t.booking.placeholder}
            />
          </label>
          <label className="mt-5 flex gap-3 text-sm font-semibold leading-6 text-neutral-700">
            <input
              type="checkbox"
              name="media-consent-info"
              required
              className="mt-1 size-5 rounded border-black/20 accent-[var(--kinetik-pink)]"
            />
            <span>{t.booking.consent}</span>
          </label>
          <button
            type="submit"
            className="mt-7 w-full rounded-full bg-[var(--kinetik-pink)] px-6 py-4 text-base font-black text-[var(--kinetik-ink)] shadow-[6px_6px_0_#111316] transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-pink-200"
          >
            {t.booking.submit}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  autoComplete,
  min,
  max,
  required = false,
}: {
  label: string;
  id: string;
  type?: string;
  autoComplete?: string;
  min?: string;
  max?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-neutral-800">
      <span>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        min={min}
        max={max}
        required={required}
        className="min-h-12 rounded-2xl border border-black/10 bg-white px-4 text-base font-semibold outline-none transition focus:border-[var(--kinetik-pink)] focus:ring-4 focus:ring-pink-100"
      />
    </label>
  );
}

function Contact({ t }: { t: (typeof copy)[Language] }) {
  return (
    <section id="contact" className="bg-[var(--kinetik-lime)] px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_1fr] md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--kinetik-ink)]">
            {t.contact.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-[var(--kinetik-ink)] sm:text-5xl">
            {t.contact.heading}
          </h2>
          <p className="mt-5 text-lg font-semibold leading-8 text-neutral-800">
            {t.contact.intro}
          </p>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-[8px_8px_0_#ff1493]">
          <ul className="space-y-4 text-lg font-bold text-[var(--kinetik-ink)]">
            <li>
              {t.contact.email}:{" "}
              <a className="underline decoration-4 decoration-[var(--kinetik-lime)]" href="mailto:hello@kinetikdancers.co.uk">
                hello@kinetikdancers.co.uk
              </a>
            </li>
            <li>
              Instagram:{" "}
              <a className="underline decoration-4 decoration-[var(--kinetik-lime)]" href={instagramUrl} target="_blank" rel="noreferrer">
                @kinetikdancers
              </a>
            </li>
            <li>
              {t.contact.area}: {t.contact.areaValue}
            </li>
          </ul>
          <a
            href="#booking"
            className="mt-6 inline-flex w-full justify-center rounded-full bg-[var(--kinetik-ink)] px-6 py-4 font-black text-white transition hover:bg-[var(--kinetik-pink)] hover:text-[var(--kinetik-ink)] focus:outline-none focus:ring-4 focus:ring-pink-200"
          >
            {t.contact.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }: { t: (typeof copy)[Language] }) {
  return (
    <footer className="bg-[var(--kinetik-ink)] px-5 py-10 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="size-12 shrink-0" />
            <p className="text-2xl font-black">Kinetik Dancers</p>
          </div>
          <p className="mt-3 max-w-md text-white/85">{t.footer.intro}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-[var(--kinetik-lime)]">
              {t.footer.quickLinks}
            </h2>
            <ul className="mt-3 space-y-2">
              {t.quickLinks.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-white/85 transition hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-[var(--kinetik-lime)]">
              {t.footer.useful}
            </h2>
            <ul className="mt-3 space-y-2">
              <li>
                <a href={instagramUrl} target="_blank" rel="noreferrer" className="text-white/85 transition hover:text-white">
                  Instagram
                </a>
              </li>
              <li><a href="/privacy-policy" className="text-white/85 transition hover:text-white">{t.footer.privacy}</a></li>
              <li><a href="/safeguarding" className="text-white/85 transition hover:text-white">{t.footer.safeguarding}</a></li>
              <li><a href="/terms" className="text-white/85 transition hover:text-white">{t.footer.terms}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-white/15 pt-6 text-sm text-white/75">
        {t.footer.copyright} {new Date().getFullYear()} Kinetik Dancers. {t.footer.rights}
      </p>
    </footer>
  );
}
