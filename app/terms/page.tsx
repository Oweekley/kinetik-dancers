export const metadata = {
  title: "Telerau | Kinetik Dancers",
  description: "Telerau Kinetik Dancers ar gyfer gwybodaeth a gwersi dawns.",
};

export default function TermsPage() {
  return (
    <main className="bg-white px-5 py-16 text-[var(--kinetik-ink)]">
      <article className="mx-auto max-w-3xl">
        <a href="/" className="font-black underline decoration-[var(--kinetik-lime)] decoration-4">
          Yn ôl / Back
        </a>
        <h1 className="mt-8 text-4xl font-black leading-tight sm:text-6xl">
          Telerau
        </h1>
        <p className="mt-2 text-xl font-bold text-neutral-700">Terms</p>
        <div className="mt-8 space-y-5 text-lg leading-8 text-neutral-800">
          <p>
            Mae'r wefan hon yn rhoi gwybodaeth am Kinetik Dancers a'r dosbarth
            Street + Commercial i oed 10-15.
          </p>
          <p>
            Class details, prices, locations and spaces may change. Final
            details are confirmed before booking.
          </p>
          <p>
            Mae rhieni/gwarcheidwaid yn gyfrifol am ddarparu manylion iechyd,
            cyswllt a chaniatâd cywir.
          </p>
          <p>
            Trial classes and attendance are subject to available spaces,
            suitable age range and any venue requirements.
          </p>
        </div>
      </article>
    </main>
  );
}
