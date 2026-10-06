export type PhaseId = 'before' | 'behind-the-scenes' | 'during' | 'completion';

export type Caption = {
  file: string;
  alt: string;
  caption: string;
};

export type TimelineStep = {
  label: string;
  date?: string;
  note?: string;
};

export type Feedback = {
  quote: string;
  detail: string;
};

export type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  services: string[];
  place: string;
  captions: Caption[];
  cover?: string;
  heroes?: string[];
  brief?: string;
  scope?: string[];
  started?: string;
  finished?: string;
  timeline?: TimelineStep[];
  feedback?: Feedback;
};

export const phases: { id: PhaseId; label: string; hint: string }[] = [
  { id: 'before', label: 'Before', hint: 'The plot as it was found.' },
  { id: 'behind-the-scenes', label: 'Behind the scenes', hint: 'Levels, base, and the work under the finish.' },
  { id: 'during', label: 'During', hint: 'The job underway.' },
  { id: 'completion', label: 'Completion', hint: 'The finished garden, drive or patio.' },
];

export const projects: ProjectMeta[] = [
  {
    slug: 'woodland-bungalow',
    title: 'Woodland bungalow drive and garden',
    summary:
      'A wooded bungalow plot, taken from old concrete and an overgrown bank to a stone patio, fence, steps and a block-paved drive.',
    services: ['driveways', 'patios', 'fencing', 'walling-steps', 'landscaping'],
    place: '',
    cover: 'completion-3.jpg',
    heroes: ['completion-3.jpg', 'completion-1.jpg', 'completion-4.jpg'],
    brief:
      'The plot was a pebbledash bungalow under the trees. The usable ground was old concrete slabs, a narrow path down the side, and a bank that had grown over the steps. The work was to clear that, hold the slope, and put back a stone patio, a timber fence, steps, and a block-paved drive.',
    scope: [
      'Old concrete slabs and the side path taken up',
      'Levels set against the wooded bank',
      'Mixed stone patio with a gravel margin',
      'Timber fence, and a planted step up the slope',
      'Block-paved drive and new front steps',
    ],
    timeline: [
      {
        label: 'The plot as it was',
        note: 'Concrete slabs, a narrow side path, and a bank that had grown over the old steps.',
      },
      {
        label: 'The ground came up',
        note: 'The old surfaces were lifted and the levels set before anything new went down.',
      },
      {
        label: 'Patio, fence and steps',
        note: 'The stone patio, timber fence and the step up the bank were built as one piece.',
      },
      {
        label: 'Drive and front steps',
        note: 'Block paving and new steps finished the way in.',
      },
    ],
    captions: [
      {
        file: 'before-1.jpg',
        alt: 'Old concrete slabs beside a pebbledash wall, with a metal swing, a brick wall and trees behind.',
        caption: 'The yard as it was found: slabs, a swing, and the brick wall at the trees.',
      },
      {
        file: 'before-2.jpg',
        alt: 'A narrow concrete path between a pebbledash wall and an old retaining wall, with a timber shed.',
        caption: 'The side path, the shed, and the old retaining wall.',
      },
      {
        file: 'before-3.jpg',
        alt: 'Overgrown shrubs covering a bank, with broken concrete steps at the right.',
        caption: 'The bank had grown over, and the old steps were giving way.',
      },
      {
        file: 'before-4.jpg',
        alt: 'A run of stained concrete slabs between two rendered walls, with excavator buckets in the foreground.',
        caption: 'The slabbed run between the house and the outbuilding.',
      },
      {
        file: 'behind-the-scenes-1.jpg',
        alt: 'A gravel base in front of a new timber fence, with boards and tools on the grass and a person setting a slab.',
        caption: 'The base down, and the fence up, before the patio was laid.',
      },
      {
        file: 'during-1.jpg',
        alt: 'Mixed stone slabs part-laid inside a new timber fence, with loose slabs and a manhole cover still on the soil.',
        caption: 'The patio going down inside the new fence.',
      },
      {
        file: 'during-2.jpg',
        alt: 'New dark block steps built against a pebbledash wall, with gravel and tools still on the ground.',
        caption: 'The front steps, built before the drive was paved up to them.',
      },
      {
        file: 'during-3.jpg',
        alt: 'A block-paved drive part finished beside a white wall, with the company van parked further up the plot.',
        caption: 'The drive going in, with the van on site.',
      },
      {
        file: 'completion-1.jpg',
        alt: 'A finished mixed-stone patio edged in dark slate, with a timber fence and stone steps up a wooded bank.',
        caption: 'The patio, the fence, and the step up the bank, finished.',
      },
      {
        file: 'completion-2.jpg',
        alt: 'Close view of mixed stone paving, a timber planter of white flowers, and stone steps into the trees.',
        caption: 'The planted edge where the patio meets the bank.',
      },
      {
        file: 'completion-3.jpg',
        alt: 'A stone-paved path along a white bungalow to black-framed glass doors, with a small step up.',
        caption: 'The path along the house, paved up to the doors.',
      },
      {
        file: 'completion-4.jpg',
        alt: 'Grey block paving and new block steps leading to a burgundy front door, with a white garage beyond.',
        caption: 'The finished drive and the steps to the door.',
      },
    ],
  },
  {
    slug: 'garden-curve',
    title: 'Curved lawn and patio',
    summary: 'A cream house with a new lawn swept round a pale patio, gravel, and a dark planted bed in the foreground.',
    services: ['landscaping', 'garden-makeovers', 'patios', 'turfing'],
    place: 'Clackmannanshire and surrounding area',
    captions: [
      {
        file: 'completion-1.jpg',
        alt: 'Curved lawn and light patio beside a cream detached house, with gravel and a dark mulch bed in the foreground.',
        caption: 'Lawn, curved patio and gravel bed, finished.',
      },
    ],
  },
  {
    slug: 'fire-pit',
    title: 'Fire pit and pergola',
    summary: 'A circular stone fire pit under a timber pergola, on radial sandstone, with a low wall and planting around it.',
    services: ['landscaping', 'patios', 'walling-steps'],
    place: 'Clackmannanshire and surrounding area',
    captions: [
      {
        file: 'completion-1.jpg',
        alt: 'Circular stone fire pit under a timber pergola, laid in radial sandstone with a low stone wall and shrubs.',
        caption: 'Fire pit, pergola and radial paving, finished.',
      },
    ],
  },
  {
    slug: 'steps-patio',
    title: 'Steps and slabbed patio',
    summary: 'Mixed grey and buff slabs, a timber fence, and steps climbing a planted bank.',
    services: ['patios', 'walling-steps', 'fencing'],
    place: 'Clackmannanshire and surrounding area',
    captions: [
      {
        file: 'completion-1.jpg',
        alt: 'Mixed grey and buff paving slabs beside a timber fence, with steps rising through a planted bank.',
        caption: 'Slabs, fence and steps, finished.',
      },
    ],
  },
  {
    slug: 'block-drive',
    title: 'Block paved driveway',
    summary: 'A grey block driveway between a white house and the planting, with the edging running true to the garage.',
    services: ['driveways'],
    place: 'Clackmannanshire and surrounding area',
    captions: [
      {
        file: 'completion-1.jpg',
        alt: 'Grey block-paved driveway beside a white house, edged and running up to a garage with a silver car.',
        caption: 'Block paving and edging, finished.',
      },
    ],
  },
  {
    slug: 'front-garden',
    title: 'Front lawn and porch',
    summary: 'A brick house with a new front lawn, a path to the porch, and planting kept tight to the door.',
    services: ['landscaping', 'turfing', 'garden-makeovers'],
    place: 'Clackmannanshire and surrounding area',
    captions: [
      {
        file: 'completion-1.jpg',
        alt: 'Brick house with a new front lawn, a path to a white porch, and planting by the door.',
        caption: 'Front lawn and entrance, finished.',
      },
    ],
  },
  {
    slug: 'porcelain-patio',
    title: 'Large-format patio',
    summary: 'Light grey porcelain slabs, a dark gravel margin, and a small tree set into a curved bed.',
    services: ['patios'],
    place: 'Clackmannanshire and surrounding area',
    captions: [
      {
        file: 'completion-1.jpg',
        alt: 'Large light-grey porcelain slabs with a dark gravel edge and a small tree in a planted bed.',
        caption: 'Porcelain slabs and gravel margin, finished.',
      },
    ],
  },
  {
    slug: 'night-deck',
    title: 'Lit deck and lawn',
    summary: 'An evening shot of a deck meeting bifold doors, with warm wall lights, pale paving and a lawn beyond.',
    services: ['decking', 'turfing', 'landscaping'],
    place: 'Clackmannanshire and surrounding area',
    captions: [
      {
        file: 'completion-1.jpg',
        alt: 'Night photograph of a lit timber deck outside bifold doors, with pale paving and a lawn in front.',
        caption: 'Deck, lighting and lawn, finished.',
      },
    ],
  },
];

export function getProjectMeta(slug: string) {
  return projects.find((project) => project.slug === slug);
}
