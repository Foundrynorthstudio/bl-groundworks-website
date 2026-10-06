import type { APIRoute } from 'astro';
import { areas } from '../data/areas';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { CONTENT_UPDATED, SITE_URL } from '../data/site';

export const prerender = true;

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/portfolio', priority: '0.8', changefreq: 'weekly' },
  { path: '/pricing', priority: '0.9', changefreq: 'monthly' },
  { path: '/areas', priority: '0.8', changefreq: 'monthly' },
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.9', changefreq: 'yearly' },
  { path: '/privacy', priority: '0.2', changefreq: 'yearly' },
  { path: '/terms', priority: '0.2', changefreq: 'yearly' },
];

const pages = [
  ...staticPages,
  ...services.map((service) => ({ path: `/services/${service.slug}`, priority: '0.8', changefreq: 'monthly' })),
  ...projects.map((project) => ({ path: `/portfolio/${project.slug}`, priority: '0.6', changefreq: 'monthly' })),
  ...areas.map((area) => ({ path: `/areas/${area.slug}`, priority: '0.7', changefreq: 'monthly' })),
];

export const GET: APIRoute = () => {
  const urls = pages
    .map(({ path, priority, changefreq }) => {
      const loc = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
      return `  <url><loc>${loc}</loc><lastmod>${CONTENT_UPDATED}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
