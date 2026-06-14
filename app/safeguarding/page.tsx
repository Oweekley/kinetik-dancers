export const metadata = {
  title: "Diogelu | Kinetik Dancers",
  description: "Gwybodaeth diogelu Kinetik Dancers ar gyfer dawnswyr, rhieni a gwarcheidwaid.",
};

export default function SafeguardingPage() {
  return (
    <main className="bg-white px-5 py-16 text-[var(--kinetik-ink)]">
      <article className="mx-auto max-w-3xl">
        <a href="/" className="font-black underline decoration-[var(--kinetik-lime)] decoration-4">
          Yn ôl / Back
        </a>
        <h1 className="mt-8 text-4xl font-black leading-tight sm:text-6xl">
          Diogelu
        </h1>
        <p className="mt-2 text-xl font-bold text-neutral-700">Safeguarding</p>
        <div className="mt-8 space-y-5 text-lg leading-8 text-neutral-800">
          <p>
            Mae Kinetik Dancers eisiau i bob dawnsiwr deimlo'n ddiogel, yn
            barchus ac yn cael ei gefnogi ym mhob gwers.
          </p>
          <p>
            Kinetik Dancers aims to create a safe, respectful and supportive
            environment for every young dancer.
          </p>
          <p>
            Bydd caniatâd lluniau/fideos, manylion cyswllt brys a disgwyliadau
            ymddygiad yn cael eu cadarnhau cyn y wers.
          </p>
          <p>
            Photo/video consent, emergency contact details, relevant health
            information and behaviour expectations will be confirmed before
            class.
          </p>
          <p>
            Ni ddylid rhannu lluniau neu fideos o wersi heb ganiatâd rhiant neu
            warcheidwad.
          </p>
          <p>
            Photos or videos from class should not be shared without parent or
            guardian permission.
          </p>
          <p>
            Os yw plentyn mewn perygl uniongyrchol, ffoniwch 999. Os nad yw'n
            argyfwng ond bod gennych bryder am ddiogelwch plentyn, cysylltwch
            â Gwasanaethau Cymdeithasol Conwy ar 01492 575111, y tu allan i
            oriau ar 0300 1233079, neu'r heddlu ar 101.
          </p>
          <p>
            If a child is in immediate danger, call 999. If it is not an
            emergency but you are worried about a child's safety, contact Conwy
            Social Services on 01492 575111, out of hours on 0300 1233079, or
            the police on 101.
          </p>
          <p>
            Gall oedolion sydd angen cyngor hefyd gysylltu â llinell gymorth
            NSPCC ar 0808 800 5000 neu help@nspcc.org.uk.
          </p>
          <p>
            Adults who need advice can also contact the NSPCC helpline on
            0808 800 5000 or help@nspcc.org.uk.
          </p>
        </div>
      </article>
    </main>
  );
}
