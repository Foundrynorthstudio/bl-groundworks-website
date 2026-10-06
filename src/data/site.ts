export const SITE_URL = 'https://blgroundworks.com';
export const CONTENT_UPDATED = '2026-10-06';

export const business = {
  name: 'BL Groundworks Scotland',
  legalName: 'B L Groundworks (Scotland) Ltd',
  shortName: 'BL Groundworks',
  description:
    'Family-run landscaping and groundworks in Alloa. Driveways, patios, fencing, decking, turfing and full garden transformations across Clackmannanshire and surrounding towns.',
  telephoneDisplay: '07718 898323',
  telephone: '+447718898323',
  telephoneHref: 'tel:+447718898323',
  email: 'bl.groundworks@outlook.com',
  emailHref: 'mailto:bl.groundworks@outlook.com',
  url: SITE_URL,
  priceRange: '££',
  baseTown: 'Alloa',
  addressLocality: 'Alloa',
  addressRegion: 'Clackmannanshire',
  addressCountry: 'GB',
  latitude: 56.1159,
  longitude: -3.7924,
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Alloa%2C%20Clackmannanshire',
  companyNumber: 'SC821552',
  registeredOffice: '2 Melville Street, Falkirk, FK1 1HZ',
  companiesHouseUrl: 'https://find-and-update.company-information.service.gov.uk/company/SC821552',
  sameAs: ['https://find-and-update.company-information.service.gov.uk/company/SC821552'] as const,
  facebookUrl: '',
  areaServed: [
    'Alloa',
    'Sauchie',
    'Tullibody',
    'Clackmannan',
    'Alva',
    'Tillicoultry',
    'Dollar',
    'Menstrie',
    'Stirling',
    'Falkirk',
    'Dunfermline',
  ],
} as const;

export const defaultTitle = 'Landscaping & Groundworks in Alloa | BL Groundworks Scotland';
export const defaultDescription =
  'Family-run landscaping and groundworks based in Alloa. Driveways, patios, fencing, decking, turfing and full garden transformations across Clackmannanshire. Free, no-obligation quotes.';

export function absoluteUrl(path = '/') {
  const normalised = path === '/' ? '/' : path.startsWith('/') ? path.replace(/\/$/, '') : `/${path.replace(/\/$/, '')}`;
  return new URL(normalised, SITE_URL).href;
}

export function canonicalPath(pathname: string) {
  const clean = pathname.replace(/\/$/, '') || '/';
  return absoluteUrl(clean);
}
