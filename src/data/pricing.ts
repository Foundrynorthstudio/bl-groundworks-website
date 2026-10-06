export type PricePackage = {
  id: string;
  name: string;
  band: 'Simple' | 'Hard surfaces' | 'Full plot';
  summary: string;
  from: number;
  assumes: string[];
  often: string;
};

export type Rate = {
  name: string;
  from: string;
  note: string;
};

export const packages: PricePackage[] = [
  {
    id: 'garden-tidy',
    name: 'Garden tidy',
    band: 'Simple',
    summary: 'Cut back, clear, haul the waste, and leave the plot ready for whatever comes next.',
    from: 450,
    assumes: [
      'A domestic garden that can be reached from the drive',
      'Green waste and a modest amount of rubble',
      'No new patio, drive or retaining wall',
    ],
    often: 'A half day to a day. Heavier clearance, or a skip that fills twice, moves the figure up.',
  },
  {
    id: 'garden-reset',
    name: 'Garden reset',
    band: 'Simple',
    summary: 'Clear and level a compact garden, then lay turf and tidy the beds.',
    from: 1600,
    assumes: [
      'About 40 to 60 square metres',
      'Real turf, supplied and laid, on prepared ground',
      'Basic edging so the lawn has a line',
      'Waste taken away',
    ],
    often: 'Many compact resets land between £1,600 and £3,500. Artificial grass is priced on the rate card, not this figure.',
  },
  {
    id: 'patio',
    name: 'Patio and slabbing',
    band: 'Hard surfaces',
    summary: 'Excavate, base, and lay a usable patio with a fall and a finished edge.',
    from: 2600,
    assumes: [
      'About 20 square metres',
      'Standard concrete or sandstone slabs',
      'Excavation, sub-base, bedding and pointing',
      'Straightforward access from the drive',
    ],
    often: 'Porcelain and awkward cuts around a conservatory raise it. A 30 to 40 square metre wrap around the house is a different job.',
  },
  {
    id: 'fencing',
    name: 'Fencing',
    band: 'Hard surfaces',
    summary: 'A closeboard run on concrete posts, lined and finished.',
    from: 1900,
    assumes: [
      'About 15 to 20 metres',
      'Closeboard fence, concrete posts and gravel boards',
      'The old fence down and taken away',
      'A boundary that is roughly in a straight line',
    ],
    often: 'Gates are extra. A slope that has to be stepped, which is common towards Alva and Tillicoultry, is measured on site.',
  },
  {
    id: 'decking',
    name: 'Decking',
    band: 'Hard surfaces',
    summary: 'A timber deck, framed to meet the door and shed the rain.',
    from: 2800,
    assumes: [
      'About 12 to 16 square metres of timber decking',
      'A frame, boards, and a step if the threshold needs one',
      'Ground that does not first need a retaining wall',
    ],
    often: 'Composite boards are a materials upgrade. Lighting is quoted before the boards go down.',
  },
  {
    id: 'driveway',
    name: 'Driveway',
    band: 'Hard surfaces',
    summary: 'A single block-paved drive, dug out, based and edged.',
    from: 4500,
    assumes: [
      'About 40 to 50 square metres',
      'Block paving, sub-base, compaction and edging',
      'The old surface excavated and removed',
      'Machine access from the street',
    ],
    often: 'Tarmac can come in lower. A double drive, a dropped kerb, or porcelain sets sits higher. Depth of dig changes the skip and the stone.',
  },
  {
    id: 'steps',
    name: 'Steps',
    band: 'Hard surfaces',
    summary: 'A flight of garden steps so a sloping plot can be walked.',
    from: 850,
    assumes: [
      'A short domestic flight, set out with an even rise',
      'Block or timber construction, agreed before work starts',
      'The landing handed back to lawn or paving',
    ],
    often: 'A retained bank the width of the garden is walling, not a single flight, and is quoted from the slope.',
  },
  {
    id: 'drainage',
    name: 'Drainage run',
    band: 'Hard surfaces',
    summary: 'A short run so a patio, drive or lawn stops holding water.',
    from: 850,
    assumes: [
      'A domestic run of modest length',
      'A gully or channel and pipe',
      'Reinstatement of the surface that was lifted',
    ],
    often: 'A garden taking water off the hill is surveyed. It is not priced as a flat metre rate from the pavement.',
  },
  {
    id: 'full-landscaping',
    name: 'Full landscaping and hardsurfacing',
    band: 'Full plot',
    summary: 'Drive, patio, lawn, steps and fencing planned as one garden.',
    from: 12000,
    assumes: [
      'A domestic plot needing more than one surface',
      'Excavation, bases and waste included',
      'Standard materials, not porcelain throughout',
      'One visit plan rather than three separate crews',
    ],
    often: 'Complete plots often land between £12,000 and £28,000. Lighting, porcelain, retaining walls and long drainage runs sit on top of that band.',
  },
];

export const rates: Rate[] = [
  { name: 'Real turf, supply and lay', from: '£20/m²', note: 'On ground the team has levelled. Preparation is quoted with it.' },
  { name: 'Artificial grass, supply and lay', from: '£70/m²', note: 'Includes a stone base and edging on a straightforward garden.' },
  { name: 'Patio slabbing', from: '£110/m²', note: 'Standard slabs. Porcelain is higher.' },
  { name: 'Block paving', from: '£95/m²', note: 'Excavation, sub-base and edging for a typical domestic drive.' },
  { name: 'Closeboard fencing', from: '£115/m', note: 'Concrete posts. Gates and steep steps are extra.' },
  { name: 'Drainage', from: '£90/m', note: 'A simple pipe run. Soakaways and hill water are surveyed.' },
];

export function getPackage(id: string) {
  return packages.find((item) => item.id === id);
}

export function gbp(amount: number) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(amount);
}
