export type Area = {
  slug: string;
  name: string;
  title: string;
  description: string;
  lead: string;
  body: string[];
  typical: string[];
};

export const areas: Area[] = [
  {
    slug: 'alloa',
    name: 'Alloa',
    title: 'Landscaping & Groundworks in Alloa | BL Groundworks',
    description:
      'BL Groundworks Scotland is based in Alloa. Driveways, patios, fencing, turfing and full garden transformations for homes and commercial plots. Free quotes.',
    lead: 'The team is based in Alloa. Most of the work is in the town and the rest of Clackmannanshire, with surrounding towns taken when the diary allows.',
    body: [
      'Alloa gardens are a mix of older stone and brick houses, post-war plots, and newer drives that were never built for a second car. The usual ask is a drive that drains, a patio that meets the back door, and a lawn that is actually flat.',
      'Because the yard is here, small jobs stay worthwhile. A fence run, a tired patio, or a garden that needs stripping back can be quoted without treating it as a day out.',
    ],
    typical: ['Driveways', 'Patios and slabbing', 'Garden makeovers', 'Fencing'],
  },
  {
    slug: 'sauchie',
    name: 'Sauchie',
    title: 'Landscaping & Driveways in Sauchie | BL Groundworks',
    description:
      'Driveways, patios and garden makeovers in Sauchie, a few minutes from the Alloa base. Family-run groundworks. Free, no-obligation quotes.',
    lead: 'Sauchie sits on Alloa’s doorstep. The same team that works the town takes the drives, patios and fences here.',
    body: [
      'Plots in Sauchie are often family gardens with a drive at the front and a lawn that has settled unevenly at the back. The work is usually a new surface, a clearer way round the house, and turf or slabs once the levels are honest.',
      'Access is generally straightforward, which keeps a smaller job practical. If the garden also needs a step down from the patio doors, that is priced with the slabs.',
    ],
    typical: ['Driveways', 'Patios and slabbing', 'Turfing', 'Fencing'],
  },
  {
    slug: 'tullibody',
    name: 'Tullibody',
    title: 'Groundworks & Landscaping in Tullibody | BL Groundworks',
    description:
      'Landscaping, driveways and drainage in Tullibody. BL Groundworks is based in nearby Alloa and quotes domestic and commercial jobs. No obligation.',
    lead: 'Tullibody is a short run from Alloa, towards the Forth. Front drives and back gardens make up most of the visits.',
    body: [
      'A lot of the houses face a street that has filled up with cars. Widening a drive, or replacing a surface that has sunk, is a regular job. At the back, the work is patios, turf and a fence that still stands after a wet winter.',
      'Lower ground towards the river can hold water. If a patio or a new lawn is going onto a damp plot, drainage is talked through before the quote is treated as final.',
    ],
    typical: ['Driveways', 'Drainage', 'Patios and slabbing', 'Fencing'],
  },
  {
    slug: 'clackmannan',
    name: 'Clackmannan',
    title: 'Landscaping in Clackmannan | BL Groundworks Scotland',
    description:
      'Garden landscaping, driveways and fencing in Clackmannan. Based in Alloa, working the Wee County. Free quotes for small jobs and full transformations.',
    lead: 'Clackmannan is east of Alloa, still well inside the area the team covers every week.',
    body: [
      'The village and the newer streets around it both need the same things done well: a drive with a proper edge, a garden that is not an afterthought, and boundaries that look finished from the road.',
      'Full transformations are quoted as one job when the drive, the lawn and the fence are all failing together. Splitting them across three visits usually costs more and looks less like one garden.',
    ],
    typical: ['Garden makeovers', 'Driveways', 'Fencing', 'Turfing'],
  },
  {
    slug: 'alva',
    name: 'Alva',
    title: 'Landscaping & Steps in Alva | BL Groundworks',
    description:
      'Sloping gardens, steps, patios and drainage in Alva and the Hillfoots. BL Groundworks is based in Alloa. Free, no-obligation quotes.',
    lead: 'Alva sits under the Ochils. Gardens here often drop away from the house, and the job is steps, a wall, and a lawn you can stand on.',
    body: [
      'A flat patio rate does not describe an Alva back garden. The team sets out the fall, builds the flight of steps, and holds the bank with walling before any turf or slabs go down.',
      'Menstrie is the same kind of ground, a little further along the hillfoot. If the plot is there rather than in Alva itself, say so on the quote form and it is still this team.',
    ],
    typical: ['Walling and steps', 'Drainage', 'Patios and slabbing', 'Landscaping'],
  },
  {
    slug: 'tillicoultry',
    name: 'Tillicoultry',
    title: 'Garden Steps & Landscaping in Tillicoultry | BL Groundworks',
    description:
      'Landscaping for sloping gardens in Tillicoultry. Steps, walling, patios and drainage from a team based in Alloa. Free quotes.',
    lead: 'Tillicoultry gardens climb. The useful work is usually a safe way down, a level place to sit, and water directed off the new surfaces.',
    body: [
      'Retaining a bank and then laying a patio on the level ground is one job, not two trades who never meet. The quote covers the dig, the wall or steps, and the finish.',
      'Fencing on a slope is stepped to the fall. That is measured on site. A photograph from the top and the bottom of the garden helps the first conversation.',
    ],
    typical: ['Walling and steps', 'Patios and slabbing', 'Fencing', 'Drainage'],
  },
  {
    slug: 'dollar',
    name: 'Dollar',
    title: 'Landscaping in Dollar | BL Groundworks Scotland',
    description:
      'Garden landscaping, patios and driveways in Dollar. Family-run team based in Alloa, covering the Hillfoots and the rest of Clackmannanshire.',
    lead: 'Dollar is further up from Alloa, with older houses, longer plots, and gardens that have been patched for years.',
    body: [
      'The ask is often a proper patio where a cracked one sits, a drive that suits the house, and beds edged so the lawn has a clean line. Stone and porcelain are both quoted. The base is the same standard either way.',
      'Smaller repairs are still welcome. A set of steps, a short fence, or a lawn that needs lifting and relaying does not have to wait for a full redesign.',
    ],
    typical: ['Patios and slabbing', 'Landscaping', 'Driveways', 'Walling and steps'],
  },
  {
    slug: 'stirling',
    name: 'Stirling',
    title: 'Landscaping & Driveways in Stirling | BL Groundworks',
    description:
      'Landscaping and driveway work in Stirling from a team based in Alloa. Patios, turfing, fencing and groundworks. Free, no-obligation quotes.',
    lead: 'Stirling is north of Alloa and inside the surrounding area on the van. Larger plots and newer estates both come up.',
    body: [
      'Newer estates often need the drive finished properly after the builder’s surface, or a back garden that is still soil and a fence. Older streets need levels corrected before a new patio goes down.',
      'Bridge of Allan is the same run. Name the town on the enquiry so the visit is planned with the right travel, and the quote stays free of obligation.',
    ],
    typical: ['Driveways', 'Garden makeovers', 'Turfing', 'Fencing'],
  },
  {
    slug: 'falkirk',
    name: 'Falkirk',
    title: 'Driveways & Landscaping in Falkirk | BL Groundworks',
    description:
      'Driveways, patios and landscaping in Falkirk from BL Groundworks, based in Alloa. Domestic and commercial groundworks. Free quotes.',
    lead: 'Falkirk is south of the Alloa base. Domestic gardens and smaller commercial yards are both taken.',
    body: [
      'The work is the same standard as in Clackmannanshire: excavate, base, edge, and a surface that sheds water. Drives that have slumped, and patios laid with no fall, are the jobs that get called in after a wet year.',
      'The company’s registered office is in Falkirk. The team works from Alloa. Quotes and site visits are arranged on the Alloa number.',
    ],
    typical: ['Driveways', 'Groundworks', 'Patios and slabbing', 'Drainage'],
  },
  {
    slug: 'dunfermline',
    name: 'Dunfermline',
    title: 'Landscaping in Dunfermline | BL Groundworks Scotland',
    description:
      'Landscaping, driveways and fencing in Dunfermline. BL Groundworks is based in Alloa and crosses for domestic garden and driveway jobs. Free quotes.',
    lead: 'Dunfermline is across the Forth from Alloa, close enough to take garden and driveway jobs without pretending to be a Fife-wide contractor.',
    body: [
      'Kincardine and the streets on the way are the same. The useful brief is a drive, a patio, turf or a fence, with photographs of the plot before the visit.',
      'If the job is a full transformation, it is quoted as one piece of work. Materials are confirmed before anything is ordered, so the example guides on this site stay guides.',
    ],
    typical: ['Driveways', 'Patios and slabbing', 'Fencing', 'Turfing'],
  },
];

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}
