# Gwefan Kinetik Dancers / Kinetik Dancers Website

Gwefan fodern, mobile-first ar gyfer Kinetik Dancers, wedi'i hadeiladu gyda Next.js, TypeScript a Tailwind CSS.

A modern, mobile-first website for Kinetik Dancers. The public site copy is Welsh-first, with English support where useful for parents and search.

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

Build for production:

```bash
npm run build
```

## Where to edit content

Most day-to-day content is in `app/page.tsx`.

- Edit class names, age ranges, prices and locations in the `classes` array.
- Edit the four benefit cards in the `features` array.
- Update the placeholder email, area and Instagram link near the top of the file.
- Replace placeholder policy links in the footer when those pages exist.

## Form setup

The enquiry form is front-end only for now. To receive submissions, connect it to one of these:

- **Netlify Forms:** add the required `name`, `method="POST"` and `data-netlify="true"` attributes, then deploy on Netlify.
- **Formspree or Basin:** create a form endpoint and set the form `action` to that URL.
- **Calendly:** replace or supplement the form CTA with a Calendly booking link.
- **Custom backend:** create an API route or serverless function that sends emails or stores enquiries.

For child classes, keep photo/video consent separate from the booking form and collect explicit consent before sharing any images or videos.

## Deploy to Netlify

1. Push the project to GitHub, GitLab or Bitbucket.
2. In Netlify, choose **Add new site** then **Import an existing project**.
3. Select the repository.
4. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy the site.

This project includes `netlify.toml` and `@netlify/plugin-nextjs` so Netlify can run the Next.js build correctly.

## Connect a custom domain

1. Buy a domain such as `kinetikdancers.co.uk` from a registrar.
2. In Netlify, open the site and go to **Domain management**.
3. Add the custom domain.
4. Follow Netlify's DNS instructions. The simplest option is usually to use Netlify DNS and update the domain nameservers at the registrar.
5. Wait for DNS to propagate, then enable HTTPS in Netlify if it is not automatic.

## Set up professional email

For `hello@kinetikdancers.co.uk`, use one of these low-cost options:

- **Zoho Mail:** affordable hosted email with a real inbox.
- **Email forwarding from the domain registrar:** forwards messages to an existing Gmail/Outlook inbox.
- **Cloudflare Email Routing:** free forwarding if the domain uses Cloudflare DNS.

After choosing a provider, follow its DNS instructions to add MX, SPF and DKIM records. These records help email arrive reliably and reduce spam problems.

## Recommended cheap tools

- **Netlify:** hosting and deployments.
- **Namecheap, Porkbun, Cloudflare Registrar or Fasthosts:** domain registration.
- **Zoho Mail or email forwarding:** professional email.
- **Calendly:** simple trial-class booking slots.
- **Google Sheets or Airtable:** lightweight enquiry tracking.

## Notes for future improvements

- Add real class times once the venue and schedule are confirmed.
- Add a gallery section when photo/video permissions are in place.
- Add separate pages for Privacy Policy, Safeguarding and Terms.
- Connect the booking form before sharing the website publicly.
