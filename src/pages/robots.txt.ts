import type { APIRoute } from 'astro';
import { SITE_URL } from '../data/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /
Disallow: /thanks

Sitemap: ${SITE_URL}/sitemap.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
