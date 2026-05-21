export const metadata = {
  title: "Diolch | Kinetik Dancers",
  description: "Diolch am gysylltu â Kinetik Dancers.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[var(--kinetik-lime)] px-5 py-20 text-[var(--kinetik-ink)]">
      <section className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-[8px_8px_0_#ff1493]">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--kinetik-pink-dark)]">
          Diolch / Thank you
        </p>
        <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
          Mae eich neges wedi cael ei hanfon.
        </h1>
        <p className="mt-5 text-lg leading-8 text-neutral-800">
          Bydd Kinetik Dancers yn cysylltu cyn gynted â phosibl gyda mwy o
          wybodaeth am y dosbarth.
        </p>
        <p className="mt-4 text-lg leading-8 text-neutral-800">
          Your message has been sent. Kinetik Dancers will reply as soon as
          possible with more class information.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-full bg-[var(--kinetik-ink)] px-6 py-4 font-black text-white transition hover:bg-black focus:outline-none focus:ring-4 focus:ring-pink-200"
        >
          Yn ôl i'r wefan / Back to site
        </a>
      </section>
    </main>
  );
}
