export const metadata = {
  title: "Polisi Preifatrwydd | Kinetik Dancers",
  description: "Polisi preifatrwydd sylfaenol Kinetik Dancers.",
};

export default function PrivacyPolicyPage() {
  return <InfoPage title="Polisi Preifatrwydd" englishTitle="Privacy Policy" />;
}

function InfoPage({ title, englishTitle }: { title: string; englishTitle: string }) {
  return (
    <main className="bg-white px-5 py-16 text-[var(--kinetik-ink)]">
      <article className="mx-auto max-w-3xl">
        <a href="/" className="font-black underline decoration-[var(--kinetik-lime)] decoration-4">
          Yn ôl / Back
        </a>
        <h1 className="mt-8 text-4xl font-black leading-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mt-2 text-xl font-bold text-neutral-700">{englishTitle}</p>
        <div className="mt-8 space-y-5 text-lg leading-8 text-neutral-800">
          <p>
            Mae Kinetik Dancers yn casglu gwybodaeth o'r ffurflen gyswllt er mwyn
            ymateb i ymholiadau am wersi dawns.
          </p>
          <p>
            We collect enquiry form details so we can respond about dance
            classes, trial spaces and class information.
          </p>
          <p>
            Gall hyn gynnwys enw rhiant/gwarcheidwad, enw ac oed y dawnsiwr,
            e-bost, rhif ffôn, dosbarth o ddiddordeb a neges.
          </p>
          <p>
            We do not sell personal information. Form submissions are handled by
            the website hosting/form provider and used only for class enquiries.
          </p>
          <p>
            I ofyn am newid neu ddileu eich manylion, cysylltwch drwy e-bost:
            hello@kinetikdancers.co.uk.
          </p>
        </div>
      </article>
    </main>
  );
}
