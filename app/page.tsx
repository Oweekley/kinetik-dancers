"use client";

import { type FormEvent, useEffect, useState } from "react";

const instagramUrl =
  "https://www.instagram.com/kinetikdancers?igsh=MW9sYng3ejZxc2FudQ==";

type Language = "cy" | "en";

const formName = "kinetik-interest";

const copy = {
  cy: {
    navLabel: "Prif ddewislen",
    homeLabel: "Hafan Kinetik Dancers",
    skipLink: "Neidio i'r cynnwys",
    trial: "Gwers brawf",
    languageLabel: "Dewis iaith",
    languageName: "Cymraeg",
    englishName: "English",
    menuOpen: "Agor dewislen",
    menuClose: "Cau dewislen",
    quickLinks: [
      ["Am Keitija", "#about"],
      ["Gwers", "#classes"],
      ["Beth i ddisgwyl", "#expect"],
      ["Pam Kinetik", "#why"],
      ["Cwestiynau", "#faq"],
      ["Archebu", "#booking"],
      ["Cyswllt", "#contact"],
    ],
    hero: {
      kicker: "Dawns gyda Keitija Knutova",
      headline: "Street + Commercial Dance. Oed 10-15.",
      subheading:
        "Dosbarth wythnosol ym Mae Colwyn bob dydd Llun 7-8yh. Dysgwch rwtinau, magwch hyder, a mwynhewch symud gyda grŵp cefnogol.",
      primaryCta: "Archebu gwers brawf",
      secondaryCta: "Manylion y dosbarth",
      graphicLabel: "Dawnswyr ifanc mewn dosbarth street a commercial",
      movement: "Symud. Creu. Perthyn.",
      signoff: "Cariad mawr, Keitija",
      notice: "Lleoedd gwers brawf ar agor",
      imageAlt: "Dawnswyr ifanc mewn dosbarth street a commercial llawn egni",
      stats: [
        ["10-15", "Oed"],
        ["7-8yh", "Dydd Llun"],
        ["Street", "+ Commercial"],
      ],
      trust: ["Dechreuwyr yn croeso", "Dan arweiniad Keitija", "Hwyl, hyder a rwtinau"],
    },
    about: {
      kicker: "Am Keitija",
      heading: "Athrawes glir, gyfeillgar ac egniol.",
      paragraphs: [
        "Mae Kinetik Dancers yn cael ei redeg gan Keitija Knutova, dawnswraig a pherfformiwr o Ogledd Cymru.",
        "Mae ganddi brofiad mewn street, commercial, hip-hop, cystadlu a pherfformio ar lwyfan.",
        "Mae ei dosbarthiadau'n helpu dawnswyr ifanc i ddysgu camau clir, teimlo'n hyderus, a mwynhau perfformio.",
      ],
      highlights: [
        {
          title: "Profiad go iawn",
          text: "Hyfforddi, cystadlu a pherfformio gyda grwpiau dawns ac ysgolion perfformio.",
        },
        {
          title: "Street + commercial",
          text: "Rwtinau egniol, cerddoriaeth gyfredol a chamau sy'n hawdd i ymuno â nhw.",
        },
        {
          title: "Enillydd Eisteddfod dwywaith",
          text: "Mae Keitija wedi ennill yn yr Eisteddfod ddwywaith mewn arddulliau fel hip-hop, stryd a disgo.",
        },
      ],
    },
    classesSection: {
      kicker: "Gwers",
      heading: "Un dosbarth wythnosol. Hawdd i ddechrau.",
      intro:
        "Mae'r dosbarth yn addas i ddechreuwyr a dawnswyr gyda phrofiad. Dewch i roi cynnig, dysgu rwtin, a gweld sut mae'n teimlo.",
      priceLabel: "Pris",
      timeLabel: "Amser",
      locationLabel: "Lleoliad",
      cta: "Archebu gwers brawf",
      badge: "Gwers wythnosol",
    },
    expect: {
      kicker: "Beth i ddisgwyl",
      heading: "Sut mae'r wers yn gweithio.",
      items: [
        {
          title: "Cynhesu",
          text: "Symudiad, rhythm a chamau sylfaenol i helpu pawb i deimlo'n barod.",
        },
        {
          title: "Dysgu rwtin",
          text: "Cam wrth gam, gyda ffocws ar gerddoriaeth, egni, manylder a pherfformio.",
        },
        {
          title: "Adeiladu hyder",
          text: "Cyfle i wella dros amser ac, os yw'r grŵp yn barod, gweithio tuag at berfformio.",
        },
      ],
    },
    why: {
      kicker: "Pam dewis Kinetik",
      heading: "Lle i ddysgu, symud a theimlo'n rhan o'r grŵp.",
      intro:
        "Mae Kinetik ar gyfer dawnswyr 10-15 oed sydd eisiau symud, gwneud ffrindiau newydd, a thyfu mewn grŵp cefnogol.",
    },
    pathway: {
      kicker: "Cynnydd",
      heading: "Beth fydd dawnswyr yn adeiladu dros amser.",
      items: [
        {
          title: "Camau clir",
          text: "Mae pob rwtin yn cael ei dorri lawr fel bod dawnswyr yn gallu dilyn a dysgu.",
        },
        {
          title: "Gwell techneg",
          text: "Bydd dawnswyr yn gweithio ar rhythm, stamina, manylder a phresenoldeb.",
        },
        {
          title: "Mwy o hyder",
          text: "Y nod yw helpu pob dawnsiwr i deimlo'n fwy cyfforddus wrth symud a pherfformio.",
        },
      ],
    },
    parents: {
      kicker: "I rieni a gwarcheidwaid",
      heading: "Manylion clir cyn i chi archebu.",
      items: [
        ["Oedran", "Ar gyfer dawnswyr 10-15 oed."],
        ["Lleoliad", "Bae Colwyn, Gogledd Cymru."],
        ["Amser", "Dydd Llun, 7-8yh."],
        ["Pris", "O £8 y wers."],
        ["Diogelu", "Caniatâd llun/fideo a manylion brys i'w cadarnhau ar wahân."],
        ["Dechreuwyr", "Croeso i ddawnswyr newydd a dawnswyr gyda phrofiad."],
      ],
    },
    faq: {
      kicker: "Cwestiynau cyffredin",
      heading: "Atebion cyflym cyn archebu.",
      items: [
        {
          question: "Oes angen profiad dawns blaenorol?",
          answer:
            "Nac oes. Mae dechreuwyr yn croeso, ac mae dawnswyr gyda phrofiad yn gallu ymuno hefyd.",
        },
        {
          question: "Beth ddylai dawnswyr wisgo?",
          answer:
            "Dillad cyfforddus sy'n addas i symud, esgidiau ymarfer glân a photel ddŵr.",
        },
        {
          question: "Ydy'r dosbarth yn arwain at berfformio?",
          answer:
            "Dyna'r nod. Os yw'r grŵp yn barod, gall dawnswyr weithio tuag at berfformio.",
        },
        {
          question: "Sut mae archebu gwers brawf?",
          answer:
            "Llenwch y ffurflen fer neu anfonwch neges ar Instagram. Bydd Kinetik Dancers yn cadarnhau manylion cyn y wers.",
        },
      ],
    },
    booking: {
      kicker: "Archebu gwers brawf",
      heading: "Rhowch gynnig ar wers.",
      intro:
        "Llenwch y ffurflen fer a bydd Kinetik Dancers yn cysylltu gyda'r camau nesaf.",
      promise:
        "Byddwch yn cael manylion y lleoliad, beth i wisgo, beth i ddod gyda chi, ac unrhyw ffurflenni caniatâd cyn y wers.",
      guardian: "Enw rhiant/gwarcheidwad",
      dancer: "Enw'r dawnsiwr",
      age: "Oed y dawnsiwr",
      email: "E-bost",
      phone: "Ffôn",
      classInterest: "Gwers",
      chooseClass: "Dewis gwers",
      message: "Neges",
      placeholder:
        "Unrhyw brofiad dawns, cwestiwn, neu beth hoffai'ch dawnsiwr ei wybod.",
      consent:
        "Rwy'n deall y gall Kinetik Dancers ofyn ar wahân am ganiatâd llun/fideo cyn rhannu unrhyw gynnwys o'r gwersi.",
      submit: "Anfon",
      submitting: "Yn anfon...",
      sent: "Diolch - yn mynd â chi i'r dudalen gadarnhau.",
      submitError:
        "Ni allwyd anfon y ffurflen. Ceisiwch eto, neu anfonwch neges ar Instagram.",
      required: "Angenrheidiol",
      botField: "Peidiwch â llenwi hwn os ydych yn berson.",
    },
    contact: {
      kicker: "Cyswllt",
      heading: "Barod i roi cynnig ar wers?",
      intro:
        "Archebwch wers brawf neu dilynwch Instagram am ddiweddariadau, lleoedd a dosbarthiadau thema.",
      email: "E-bost",
      area: "Ardal",
      areaValue: "Bae Colwyn / Gogledd Cymru",
      cta: "Archebu gwers brawf",
    },
    footer: {
      intro: "Street + Commercial Dance i bobl ifanc 10-15 oed ym Mae Colwyn.",
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
    skipLink: "Skip to content",
    trial: "Trial class",
    languageLabel: "Choose language",
    languageName: "Welsh",
    englishName: "English",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    quickLinks: [
      ["About Keitija", "#about"],
      ["Class", "#classes"],
      ["What to expect", "#expect"],
      ["Why Kinetik", "#why"],
      ["FAQs", "#faq"],
      ["Book", "#booking"],
      ["Contact", "#contact"],
    ],
    hero: {
      kicker: "Dance with Keitija Knutova",
      headline: "Street + Commercial Dance. Ages 10-15.",
      subheading:
        "A weekly Colwyn Bay class every Monday, 7-8pm. Learn routines, build confidence, and enjoy moving with a supportive group.",
      primaryCta: "Book a trial class",
      secondaryCta: "Class details",
      graphicLabel: "Young dancers in a street and commercial class",
      movement: "Move. Create. Belong.",
      signoff: "Love, Keitija",
      notice: "Trial places open",
      imageAlt: "Young dancers in an energetic street and commercial dance class",
      stats: [
        ["10-15", "Ages"],
        ["7-8pm", "Mondays"],
        ["Street", "+ Commercial"],
      ],
      trust: ["Beginners welcome", "Led by Keitija", "Fun, confidence and routines"],
    },
    about: {
      kicker: "About Keitija",
      heading: "Clear, friendly and full of energy.",
      paragraphs: [
        "Kinetik Dancers is run by Keitija Knutova, a dancer and performer from North Wales.",
        "She has experience in street, commercial, hip-hop, competitions and stage performance.",
        "Her classes help young dancers learn clear steps, feel confident, and enjoy performing.",
      ],
      highlights: [
        {
          title: "Real experience",
          text: "Training, competing and performing with dance groups and performing arts schools.",
        },
        {
          title: "Street + commercial",
          text: "Energetic routines, current music and steps that are easy to join in with.",
        },
        {
          title: "Two-time Eisteddfod winner",
          text: "Keitija has won at the Eisteddfod twice in styles including hip-hop, street and disco.",
        },
      ],
    },
    classesSection: {
      kicker: "Class",
      heading: "One weekly class. Easy to start.",
      intro:
        "The class is suitable for beginners and dancers with experience. Come along, learn a routine, and see how it feels.",
      priceLabel: "Price",
      timeLabel: "Time",
      locationLabel: "Location",
      cta: "Book a trial class",
      badge: "Weekly class",
    },
    expect: {
      kicker: "What to expect",
      heading: "How the class works.",
      items: [
        {
          title: "Warm-up",
          text: "Movement, rhythm and simple foundations so everyone feels ready.",
        },
        {
          title: "Learn a routine",
          text: "Step by step, with a focus on music, energy, detail and performance.",
        },
        {
          title: "Build confidence",
          text: "Dancers can improve over time and, when the group is ready, work towards performing.",
        },
      ],
    },
    why: {
      kicker: "Why choose Kinetik",
      heading: "A place to learn, move and feel part of the group.",
      intro:
        "Kinetik is for dancers aged 10-15 who want to move, meet new people, and grow in a supportive group.",
    },
    pathway: {
      kicker: "Progress",
      heading: "What dancers build over time.",
      items: [
        {
          title: "Clear steps",
          text: "Each routine is broken down so dancers can follow, learn and improve.",
        },
        {
          title: "Better technique",
          text: "Dancers work on rhythm, stamina, detail and stage presence.",
        },
        {
          title: "More confidence",
          text: "The aim is to help every dancer feel more comfortable moving and performing.",
        },
      ],
    },
    parents: {
      kicker: "For parents and guardians",
      heading: "Clear details before you book.",
      items: [
        ["Age range", "For dancers aged 10-15."],
        ["Location", "Colwyn Bay, North Wales."],
        ["Time", "Mondays, 7-8pm."],
        ["Price", "From £8 per class."],
        ["Safeguarding", "Photo/video consent and emergency details confirmed separately."],
        ["Beginners", "New dancers and dancers with experience are welcome."],
      ],
    },
    faq: {
      kicker: "FAQs",
      heading: "Quick answers before you book.",
      items: [
        {
          question: "Does my dancer need previous experience?",
          answer:
            "No. Beginners are welcome, and dancers with experience can join too.",
        },
        {
          question: "What should dancers wear?",
          answer:
            "Comfortable clothes suitable for movement, clean trainers and a water bottle.",
        },
        {
          question: "Does the class lead to performing?",
          answer:
            "That is the goal. If the group is ready, dancers can work towards performing.",
        },
        {
          question: "How do I book a trial class?",
          answer:
            "Complete the short form or message on Instagram. Kinetik Dancers will confirm details before the class.",
        },
      ],
    },
    booking: {
      kicker: "Book a trial",
      heading: "Try a class.",
      intro:
        "Fill in the short form and Kinetik Dancers will reply with the next steps.",
      promise:
        "You will receive the location, what to wear, what to bring, and any consent forms before the class.",
      guardian: "Parent/guardian name",
      dancer: "Dancer's name",
      age: "Dancer's age",
      email: "Email",
      phone: "Phone",
      classInterest: "Class",
      chooseClass: "Choose a class",
      message: "Message",
      placeholder:
        "Any dance experience, questions, or anything your dancer would like to know.",
      consent:
        "I understand Kinetik Dancers may ask separately for photo/video consent before sharing any class content.",
      submit: "Send enquiry",
      submitting: "Sending...",
      sent: "Thank you - taking you to the confirmation page.",
      submitError:
        "The form could not be sent. Please try again or message on Instagram.",
      required: "Required",
      botField: "Do not fill this in if you are human.",
    },
    contact: {
      kicker: "Contact",
      heading: "Ready to try a class?",
      intro:
        "Book a trial class or follow Instagram for updates, spaces and themed classes.",
      email: "Email",
      area: "Area",
      areaValue: "Colwyn Bay / North Wales",
      cta: "Book a trial class",
    },
    footer: {
      intro: "Street + Commercial Dance for ages 10-15 in Colwyn Bay.",
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
      name: "Street + Commercial",
      ages: "Oed 10-15",
      vibe: "Dysgwch rwtinau street a commercial mewn dosbarth egniol, clir a chefnogol.",
      time: "Dydd Llun, 7-8yh",
      price: "O £8 y wers",
      location: "Bae Colwyn / Colwyn Bay",
    },
  ],
  en: [
    {
      name: "Street + Commercial",
      ages: "Ages 10-15",
      vibe: "Learn street and commercial routines in an energetic, clear and supportive class.",
      time: "Mondays, 7-8pm",
      price: "From £8 per class",
      location: "Colwyn Bay",
    },
  ],
};

const features = {
  cy: [
    {
      title: "Hyder",
      text: "Lle i roi cynnig ar bethau newydd heb bwysau i fod yn berffaith.",
    },
    {
      title: "Camau clir",
      text: "Mae rwtinau'n cael eu dysgu fesul rhan fel bod pawb yn gallu dilyn.",
    },
    {
      title: "Egni",
      text: "Cerddoriaeth gyfredol, symudiad mawr a rwtinau sy'n teimlo'n hwyl.",
    },
    {
      title: "Cefnogaeth",
      text: "Grŵp croesawgar lle gall dawnswyr deimlo'n rhan o rywbeth.",
    },
  ],
  en: [
    {
      title: "Confidence",
      text: "Space to try new things without pressure to be perfect.",
    },
    {
      title: "Clear steps",
      text: "Routines are taught in sections so everyone can follow.",
    },
    {
      title: "Energy",
      text: "Current music, big movement and routines that feel fun.",
    },
    {
      title: "Support",
      text: "A welcoming group where dancers can feel part of something.",
    },
  ],
};

const momentum = {
  cy: [
    ["Pryd", "Dydd Llun, 7-8yh."],
    ["Ble", "Bae Colwyn, Gogledd Cymru."],
    ["I bwy", "Pobl ifanc 10-15 oed."],
  ],
  en: [
    ["When", "Mondays, 7-8pm."],
    ["Where", "Colwyn Bay, North Wales."],
    ["Who", "Young people aged 10-15."],
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
        {t.skipLink}
      </a>
      <main id="content">
        <Header language={language} setLanguage={setLanguage} t={t} />
        <Hero t={t} />
        <MomentumStrip language={language} />
        <About t={t} />
        <Classes language={language} t={t} />
        <Expect t={t} />
        <WhyChoose language={language} t={t} />
        <Pathway t={t} />
        <ParentInfo t={t} />
        <Faq t={t} />
        <BookingForm language={language} t={t} />
        <Contact t={t} />
        <Footer t={t} />
      </main>
    </>
  );
}

function MomentumStrip({ language }: { language: Language }) {
  return (
    <section className="border-y border-black/10 bg-white px-5 py-5">
      <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-3">
        {momentum[language].map(([title, text]) => (
          <article key={title} className="flex gap-3 rounded-lg bg-[#f6f7ef] p-4 ring-1 ring-black/5">
            <span className="mt-1 size-3 shrink-0 rounded-full bg-[var(--kinetik-pink)] shadow-[3px_3px_0_#b8ff00]" />
            <div>
              <h2 className="text-base font-black text-[var(--kinetik-ink)]">{title}</h2>
              <p className="mt-1 text-sm leading-6 text-neutral-700">{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
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
        <a href="#content" className="flex min-w-0 items-center gap-3" aria-label={t.homeLabel}>
          <LogoMark className="size-12 shrink-0" />
          <span className="truncate text-lg font-black text-[var(--kinetik-ink)]">
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
            <div className="mt-2 grid gap-2 rounded-lg bg-[var(--kinetik-ink)] p-3 text-white shadow-xl">
              {t.quickLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-black transition hover:bg-white/10 focus:bg-white/10 focus:outline-none"
                >
                  {label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg bg-[var(--kinetik-lime)] px-4 py-3 text-base font-black text-[var(--kinetik-ink)] transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-white/30"
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
    <section className="hero-grid relative isolate overflow-hidden bg-[var(--kinetik-lime)]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8),transparent_28%),linear-gradient(135deg,rgba(0,184,169,0.2),transparent_38%)]" />
      <div className="motion-line -right-24 top-24 h-36 w-80" aria-hidden="true" />
      <div className="motion-line -left-24 bottom-24 h-32 w-72" aria-hidden="true" />
      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-10 px-5 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:py-14">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-[var(--kinetik-ink)] shadow-[4px_4px_0_#ff1493] sm:text-sm">
            {t.hero.kicker}
          </p>
          <h1 className="text-4xl font-black leading-[1.03] text-[var(--kinetik-ink)] [overflow-wrap:anywhere] sm:text-6xl sm:leading-[0.98] lg:text-7xl">
            {t.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-neutral-800 sm:text-xl">
            {t.hero.subheading}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {t.hero.trust.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/85 px-4 py-2 text-sm font-black text-[var(--kinetik-ink)] shadow-sm ring-1 ring-black/5"
              >
                {item}
              </span>
            ))}
          </div>
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
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[var(--kinetik-ink)] bg-transparent px-6 py-4 text-center text-base font-black text-[var(--kinetik-ink)] transition hover:bg-[var(--kinetik-ink)] hover:text-white focus:outline-none focus:ring-4 focus:ring-white/70"
            >
              Instagram
            </a>
          </div>
          <p className="mt-5 w-fit rounded-full bg-white/80 px-4 py-2 text-base font-black text-[var(--kinetik-ink)] shadow-sm">
            {t.hero.signoff}
          </p>
        </div>
        <div className="relative isolate min-h-[430px] lg:min-h-[620px]" aria-label={t.hero.graphicLabel}>
          <div className="kinetik-block absolute -right-2 top-8 z-0 h-28 w-44 rotate-6 bg-[var(--kinetik-pink)] shadow-[10px_10px_0_rgba(255,255,255,0.62)] sm:h-36 sm:w-56" />
          <div className="absolute -left-3 bottom-20 z-0 h-24 w-36 -rotate-12 bg-[var(--kinetik-teal)] shadow-[8px_8px_0_#111316]" />
          <div className="relative z-10 overflow-hidden rounded-lg bg-[var(--kinetik-ink)] shadow-[12px_12px_0_#ff1493] ring-4 ring-white">
            <img
              src="/kinetik-dance-hero.webp"
              alt={t.hero.imageAlt}
              className="aspect-[4/5] w-full object-cover object-center sm:aspect-[16/10] lg:aspect-[5/4]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/88 via-black/50 to-transparent p-5 text-white sm:p-7">
              <p className="inline-flex rounded-full bg-[var(--kinetik-lime)] px-3 py-1 text-xs font-black uppercase text-[var(--kinetik-ink)]">
                {t.hero.notice}
              </p>
              <p className="mt-3 max-w-lg text-3xl font-black leading-tight sm:text-5xl">
                {t.hero.movement}
              </p>
            </div>
          </div>
          <div className="relative z-20 mx-auto -mt-8 grid max-w-[92%] grid-cols-3 gap-2 rounded-lg bg-white p-3 text-center shadow-2xl ring-1 ring-black/10 sm:gap-3 sm:p-4">
            {t.hero.stats.map(([value, label]) => (
              <div key={value} className="min-w-0 rounded-lg bg-[#f6f7ef] p-3">
                <p className="break-words text-xl font-black leading-tight text-[var(--kinetik-ink)] sm:text-2xl">
                  {value}
                </p>
                <p className="text-xs font-bold uppercase text-neutral-600">
                  {label}
                </p>
              </div>
            ))}
          </div>
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
          <p className="text-sm font-black uppercase text-[var(--kinetik-pink-dark)]">
            {t.about.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[var(--kinetik-ink)] sm:text-5xl">
            {t.about.heading}
          </h2>
        </div>
        <div>
          <div className="rounded-lg bg-neutral-50 p-6 text-lg leading-8 text-neutral-800 shadow-sm ring-1 ring-black/5 sm:p-8">
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
                className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-black/10"
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
          <p className="text-sm font-black uppercase text-[var(--kinetik-pink-dark)]">
            {t.classesSection.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[var(--kinetik-ink)] sm:text-5xl">
            {t.classesSection.heading}
          </h2>
          <p className="mt-5 text-lg leading-8 text-neutral-800">
            {t.classesSection.intro}
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)] lg:items-stretch">
          {classes[language].map((danceClass) => (
            <article
              key={danceClass.name}
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              <div className="flex flex-wrap gap-2">
                <p className="w-fit rounded-full bg-[var(--kinetik-lime)] px-3 py-1 text-sm font-black text-[var(--kinetik-ink)]">
                  {danceClass.ages}
                </p>
                <p className="w-fit rounded-full bg-neutral-100 px-3 py-1 text-sm font-black text-[var(--kinetik-ink)]">
                  {t.classesSection.badge}
                </p>
              </div>
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
          <aside className="rounded-lg bg-[var(--kinetik-ink)] p-6 text-white shadow-[8px_8px_0_#ff1493] sm:p-8">
            <p className="text-sm font-black uppercase text-[var(--kinetik-lime)]">
              Kinetik Dancers
            </p>
            <p className="mt-4 text-3xl font-black leading-tight">
              {language === "cy"
                ? "Lle i symud yn fawr, dysgu'n glir a theimlo'n rhan o'r grŵp."
                : "A place to move big, learn clearly and feel part of the group."}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm font-bold">
              {(language === "cy"
                ? ["Hyder", "Cerddoriaeth", "Cymuned", "Perfformio"]
                : ["Confidence", "Music", "Community", "Performance"]
              ).map((item) => (
                <span key={item} className="rounded-full bg-white/10 px-4 py-3 text-center">
                  {item}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Expect({ t }: { t: (typeof copy)[Language] }) {
  return (
    <section id="expect" className="bg-white px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase text-[var(--kinetik-pink-dark)]">
            {t.expect.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[var(--kinetik-ink)] sm:text-5xl">
            {t.expect.heading}
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.expect.items.map((item, index) => (
            <article
              key={item.title}
              className="rounded-lg bg-[#f6f7ef] p-6 shadow-sm ring-1 ring-black/5"
            >
              <p className="grid size-11 place-items-center rounded-full bg-[var(--kinetik-lime)] text-lg font-black text-[var(--kinetik-ink)] shadow-[4px_4px_0_#ff1493]">
                {index + 1}
              </p>
              <h3 className="mt-5 text-xl font-black text-[var(--kinetik-ink)]">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-neutral-800">{item.text}</p>
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
    <section id="why" className="bg-[var(--kinetik-ink)] px-5 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase text-[var(--kinetik-lime)]">
            {t.why.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
            {t.why.heading}
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/80">{t.why.intro}</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features[language].map((feature) => (
            <article key={feature.title} className="rounded-lg bg-white/10 p-6 ring-1 ring-white/10">
              <h3 className="text-xl font-black text-[var(--kinetik-lime)]">{feature.title}</h3>
              <p className="mt-3 leading-7 text-white/85">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pathway({ t }: { t: (typeof copy)[Language] }) {
  return (
    <section className="bg-white px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase text-[var(--kinetik-pink-dark)]">
            {t.pathway.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[var(--kinetik-ink)] sm:text-5xl">
            {t.pathway.heading}
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-5 top-8 hidden h-[calc(100%-4rem)] w-1 rounded-full bg-[var(--kinetik-lime)] sm:block" />
          <div className="grid gap-5">
            {t.pathway.items.map((item, index) => (
              <article
                key={item.title}
                className="relative rounded-lg bg-[#f6f7ef] p-6 shadow-sm ring-1 ring-black/5 sm:ml-10"
              >
                <span className="absolute -left-10 top-6 hidden size-10 place-items-center rounded-full bg-[var(--kinetik-pink)] text-sm font-black text-[var(--kinetik-ink)] shadow-[3px_3px_0_#111316] sm:grid">
                  {index + 1}
                </span>
                <h3 className="text-xl font-black text-[var(--kinetik-ink)]">{item.title}</h3>
                <p className="mt-3 leading-7 text-neutral-800">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ParentInfo({ t }: { t: (typeof copy)[Language] }) {
  return (
    <section className="bg-[#f6f7ef] px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase text-[var(--kinetik-pink-dark)]">
              {t.parents.kicker}
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[var(--kinetik-ink)] sm:text-5xl">
              {t.parents.heading}
            </h2>
          </div>
          <a
            href="/safeguarding"
            className="inline-flex w-fit rounded-full bg-[var(--kinetik-ink)] px-5 py-3 text-sm font-black text-white transition hover:bg-[var(--kinetik-pink)] hover:text-[var(--kinetik-ink)] focus:outline-none focus:ring-4 focus:ring-pink-200"
          >
            {t.footer.safeguarding}
          </a>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.parents.items.map(([label, value]) => (
            <article key={label} className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-black/5">
              <h3 className="text-sm font-black uppercase text-[var(--kinetik-pink-dark)]">
                {label}
              </h3>
              <p className="mt-3 text-lg font-bold leading-7 text-[var(--kinetik-ink)]">{value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq({ t }: { t: (typeof copy)[Language] }) {
  return (
    <section id="faq" className="bg-white px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-black uppercase text-[var(--kinetik-pink-dark)]">
            {t.faq.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[var(--kinetik-ink)] sm:text-5xl">
            {t.faq.heading}
          </h2>
        </div>
        <div className="space-y-4">
          {t.faq.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-lg bg-[#f6f7ef] p-5 shadow-sm ring-1 ring-black/5 open:bg-[var(--kinetik-lime)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black text-[var(--kinetik-ink)]">
                {item.question}
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-2xl leading-none shadow-sm transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl leading-7 text-neutral-800">{item.answer}</p>
            </details>
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
  const [formState, setFormState] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("submitting");

    const host = window.location.hostname;
    const isLocal =
      host === "localhost" || host === "127.0.0.1" || host === "::1";

    if (isLocal) {
      setFormState("sent");
      window.location.assign("/diolch");
      return;
    }

    try {
      const formData = new FormData(event.currentTarget);
      const encodedData = new URLSearchParams();

      formData.forEach((value, key) => {
        encodedData.append(key, String(value));
      });

      if (!encodedData.has("form-name")) {
        encodedData.set("form-name", formName);
      }

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedData.toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setFormState("sent");
      window.location.assign("/diolch");
    } catch {
      setFormState("error");
    }
  }

  return (
    <section id="booking" className="bg-white px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase text-[var(--kinetik-pink-dark)]">
            {t.booking.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[var(--kinetik-ink)] sm:text-5xl">
            {t.booking.heading}
          </h2>
          <p className="mt-5 text-lg leading-8 text-neutral-800">
            {t.booking.intro}
          </p>
          <p className="mt-5 rounded-lg bg-[var(--kinetik-lime)] p-5 text-base font-bold leading-7 text-[var(--kinetik-ink)] shadow-[5px_5px_0_#ff1493]">
            {t.booking.promise}
          </p>
        </div>
        {/*
          Netlify reads the form schema from public/__forms.html.
          This visible form submits URL-encoded data with AJAX for Next.js runtime support.
        */}
        <form
          name={formName}
          method="POST"
          action="/diolch"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="rounded-lg bg-[#f6f7ef] p-5 shadow-sm ring-1 ring-black/5 sm:p-8"
        >
          <input type="hidden" name="form-name" value={formName} />
          <label className="hidden">
            {t.booking.botField}
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={t.booking.guardian} id="guardian-name" autoComplete="name" required />
            <Field label={t.booking.dancer} id="dancer-name" autoComplete="off" required />
            <Field label={t.booking.age} id="dancer-age" type="number" min="10" max="15" required />
            <Field label={t.booking.email} id="email" type="email" autoComplete="email" required />
            <Field label={t.booking.phone} id="phone" type="tel" autoComplete="tel" />
            <label className="grid gap-2 text-sm font-bold text-neutral-800">
              {t.booking.classInterest}
              <select
                id="class-interest"
                name="class-interest"
                required
                className="min-h-12 rounded-lg border border-black/10 bg-white px-4 text-base font-semibold outline-none transition focus:border-[var(--kinetik-pink)] focus:ring-4 focus:ring-pink-100"
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
              className="rounded-lg border border-black/10 bg-white px-4 py-3 text-base font-semibold outline-none transition focus:border-[var(--kinetik-pink)] focus:ring-4 focus:ring-pink-100"
              placeholder={t.booking.placeholder}
            ></textarea>
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
            disabled={formState === "submitting" || formState === "sent"}
            className="mt-7 w-full rounded-full bg-[var(--kinetik-pink)] px-6 py-4 text-base font-black text-[var(--kinetik-ink)] shadow-[6px_6px_0_#111316] transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-pink-200"
          >
            {formState === "submitting"
              ? t.booking.submitting
              : formState === "sent"
                ? t.booking.sent
                : t.booking.submit}
          </button>
          {formState === "error" ? (
            <p className="mt-4 rounded-lg bg-white px-4 py-3 text-sm font-bold text-[var(--kinetik-pink-dark)] ring-1 ring-pink-200">
              {t.booking.submitError}
            </p>
          ) : null}
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
        className="min-h-12 rounded-lg border border-black/10 bg-white px-4 text-base font-semibold outline-none transition focus:border-[var(--kinetik-pink)] focus:ring-4 focus:ring-pink-100"
      />
    </label>
  );
}

function Contact({ t }: { t: (typeof copy)[Language] }) {
  return (
    <section id="contact" className="bg-[var(--kinetik-lime)] px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_1fr] md:items-end">
        <div>
          <p className="text-sm font-black uppercase text-[var(--kinetik-ink)]">
            {t.contact.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[var(--kinetik-ink)] sm:text-5xl">
            {t.contact.heading}
          </h2>
          <p className="mt-5 text-lg font-semibold leading-8 text-neutral-800">
            {t.contact.intro}
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-[8px_8px_0_#ff1493]">
          <ul className="space-y-4 text-lg font-bold text-[var(--kinetik-ink)]">
            <li>
              Instagram:{" "}
              <a className="underline decoration-4 decoration-[var(--kinetik-lime)]" href={instagramUrl} target="_blank" rel="noopener noreferrer">
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
            <h2 className="text-sm font-black uppercase text-[var(--kinetik-lime)]">
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
            <h2 className="text-sm font-black uppercase text-[var(--kinetik-lime)]">
              {t.footer.useful}
            </h2>
            <ul className="mt-3 space-y-2">
              <li>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-white/85 transition hover:text-white">
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
