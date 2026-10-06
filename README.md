# BL Groundworks Scotland

Marketing site for [blgroundworks.com](https://blgroundworks.com). Static Astro build, hosted on Netlify. Foundry North client. The company is B L Groundworks (Scotland) Ltd, SC821552, trading from Alloa.

## Run

```bash
npm install
npm run dev
```

`npm run build` writes `dist/`.

## Google, before the domain goes live

1. Copy `.env.example` to `.env` and set `PUBLIC_GA_MEASUREMENT_ID` (GA4) and `PUBLIC_GSC_VERIFICATION` (Search Console HTML tag).
2. In Search Console, add the domain property for `blgroundworks.com` and submit `https://blgroundworks.com/sitemap.xml`.
3. Create the Google Business Profile as a service-area business based in Alloa. Categories: landscaper, and excavation or paving if they fit. The public name, phone and town must match this site: BL Groundworks Scotland, 07718 898323, Alloa. Do not publish the Falkirk registered office as the place customers visit. That address is only the Companies House registered office, and the footer already says so.
4. Point `blgroundworks.com` and `www` at Netlify. `www` redirects to the apex. Netlify Forms receives the quote form (`quote`).

Phone clicks send a `phone_click` event. The form sends `generate_lead`. Both wait until the GA4 id is present.

## Photographs

Finished shots from the company flyer are the first completion photographs. They are small. Replace them with the full-resolution sets.

Drop files in `src/assets/portfolio/{slug}/`:

- `before-1.jpg`
- `behind-the-scenes-1.jpg` or `bts-1.jpg`
- `during-1.jpg`
- `completion-1.jpg` (further shots: `completion-2.jpg`)

Add a matching `captions` entry in `src/data/projects.ts` so the alt text describes that frame. A new job needs a record in that file as well as a folder. The portfolio page and each job file pick the stages up from the filenames.

## Prices

The pricing page is an example guide, written so a customer can see the range from a garden tidy to full landscaping and hardsurfacing. Brian has not signed those figures off. Confirm them before the site is treated as live.

## Not on the flyer

Facebook is mentioned on the print and has no confirmed URL here, so it is not linked. Opening hours are not published. Street address of the yard is not published. Do not invent them.
