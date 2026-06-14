export const metadata = {
  title: "Polisi Preifatrwydd | Kinetik Dancers",
  description: "Polisi preifatrwydd Kinetik Dancers ar gyfer ymholiadau dosbarth dawns.",
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
            Mae Kinetik Dancers yn defnyddio manylion y ffurflen i ateb
            ymholiadau am wersi dawns.
          </p>
          <p>
            We use form details to reply about dance classes, trial spaces and
            class information.
          </p>
          <p>
            Gall hyn gynnwys enw rhiant/gwarcheidwad, enw ac oed y dawnsiwr,
            e-bost, rhif ffôn a neges.
          </p>
          <p>
            This may include a parent or guardian name, dancer name and age,
            email address, phone number and message.
          </p>
          <p>
            We do not sell personal information. Form submissions are handled by
            the website host and used only for class enquiries.
          </p>
          <p>
            Cedwir manylion dim ond cyhyd ag sydd angen i ateb yr ymholiad neu
            drefnu gwers.
          </p>
          <p>
            Details are kept only as long as needed to answer the enquiry or
            arrange a class.
          </p>
          <p>
            I ofyn am newid neu ddileu eich manylion, cysylltwch â Kinetik
            Dancers drwy Instagram.
          </p>
        </div>
      </article>
    </main>
  );
}
