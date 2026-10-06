export type PhaseId = 'before' | 'behind-the-scenes' | 'during' | 'completion';

export type Caption = {
  file: string;
  alt: string;
  caption: string;
};

export type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  services: string[];
  place: string;
  captions: Caption[];
};

export const phases: { id: PhaseId; label: string; hint: string }[] = [
  { id: 'before', label: 'Before', hint: 'The plot as it was found.' },
  { id: 'behind-the-scenes', label: 'Behind the scenes', hint: 'Levels, base, and the work under the finish.' },
  { id: 'during', label: 'During', hint: 'The job underway.' },
  { id: 'completion', label: 'Completion', hint: 'The finished garden, drive or patio.' },
];

export const projects: ProjectMeta[] = [
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
