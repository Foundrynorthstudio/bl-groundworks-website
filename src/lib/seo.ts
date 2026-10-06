import { business, SITE_URL } from '../data/site';
import type { Faq } from '../data/faqs';

type Crumb = { name: string; path: string };

type PageArgs = {
  type?: 'home' | 'page';
  name: string;
  description: string;
  path: string;
  breadcrumbs?: Crumb[];
  faqs?: Faq[];
  extra?: Record<string, unknown>[];
};

export function businessJsonLd() {
  return {
    '@type': ['Landscaper', 'HomeAndConstructionBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: business.name,
    legalName: business.legalName,
    alternateName: business.shortName,
    description: business.description,
    url: SITE_URL,
    telephone: business.telephone,
    email: business.email,
    image: `${SITE_URL}/og-image.png`,
    logo: `${SITE_URL}/apple-touch-icon.png`,
    priceRange: business.priceRange,
    currenciesAccepted: 'GBP',
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.addressLocality,
      addressRegion: business.addressRegion,
      addressCountry: business.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.latitude,
      longitude: business.longitude,
    },
    hasMap: business.mapsUrl,
    areaServed: business.areaServed.map((name) => ({
      '@type': 'City',
      name,
    })),
    sameAs: [...business.sameAs],
    knowsAbout: [
      'Driveways',
      'Patios',
      'Landscaping',
      'Fencing',
      'Decking',
      'Turfing',
      'Groundworks',
      'Drainage',
    ],
  };
}

export function pageJsonLd({ type = 'page', name, description, path, breadcrumbs = [], faqs = [], extra = [] }: PageArgs) {
  const pageUrl = `${SITE_URL}${path === '/' ? '/' : path}`;
  const graph: Record<string, unknown>[] = [
    businessJsonLd(),
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: business.name,
      description: business.description,
      inLanguage: 'en-GB',
      publisher: { '@id': `${SITE_URL}/#business` },
    },
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name,
      description,
      inLanguage: 'en-GB',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#business` },
    },
  ];

  if (type === 'home') {
    graph[2].primaryImageOfPage = `${SITE_URL}/og-image.png`;
  }

  if (breadcrumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `${SITE_URL}${crumb.path === '/' ? '/' : crumb.path}`,
      })),
    });
  }

  if (faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
  }

  graph.push(...extra);
  return { '@context': 'https://schema.org', '@graph': graph };
}
