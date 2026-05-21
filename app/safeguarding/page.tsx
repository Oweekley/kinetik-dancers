export const metadata = {
  title: "Diogelu | Kinetik Dancers",
  description: "Gwybodaeth diogelu sylfaenol Kinetik Dancers.",
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
            barchus ac yn cael ei gefnogi.
          </p>
          <p>
            Kinetik Dancers aims to create a safe, respectful and supportive
            environment for every young dancer.
          </p>
          <p>
            Bydd gwybodaeth am ganiatâd lluniau/fideos, manylion cyswllt brys a
            disgwyliadau ymddygiad yn cael eu cadarnhau cyn dosbarthiadau.
          </p>
          <p>
            Photo/video consent is requested separately and no class content
            should be shared without appropriate permission.
          </p>
          <p>
            Os oes gennych bryder diogelu, cysylltwch â Kinetik Dancers yn
            uniongyrchol neu siaradwch â'r lleoliad/darparwr priodol.
          </p>
        </div>
      </article>
    </main>
  );
}
