export type Service = {
  slug: string;
  name: string;
  nav: string;
  summary: string;
  title: string;
  description: string;
  lead: string;
  includes: string[];
  notes: string[];
  priceId: string;
};

export const services: Service[] = [
  {
    slug: 'driveways',
    name: 'Driveways',
    nav: 'Driveways',
    summary: 'Block paving, tarmac and gravel drives, dug out and edged properly.',
    title: 'Driveways in Alloa & Clackmannanshire | BL Groundworks',
    description:
      'Driveways in Alloa and across Clackmannanshire. Block paving, tarmac and gravel, excavated, based and edged by a family-run groundworks team. Free quotes.',
    lead: 'A drive takes the weight of the cars, the rain, and the first look at the house. Brian and the team excavate, put a proper base in, and finish the surface so it stays put.',
    includes: [
      'Excavation and removal of the old surface',
      'Sub-base and compaction',
      'Edging, kerbs or a pinned border',
      'Block paving, tarmac or gravel',
      'Falls so water leaves the drive instead of sitting on it',
    ],
    notes: [
      'Block paving is the finish on most of the domestic drives. Tarmac and gravel are quoted the same way: a look at access, levels and the depth that has to come out.',
      'Porcelain and large-format slabs are a step up in materials. The example guide on the pricing page uses a standard block-paved single drive.',
    ],
    priceId: 'driveway',
  },
  {
    slug: 'patios',
    name: 'Patios & slabbing',
    nav: 'Patios',
    summary: 'Sandstone, concrete and porcelain slabs, laid to a fall.',
    title: 'Patios & Slabbing in Alloa | BL Groundworks Scotland',
    description:
      'Patio and slabbing work in Alloa, the Hillfoots and surrounding towns. Sandstone, concrete and porcelain, excavated and pointed. Ask for a free quote.',
    lead: 'Patios and slabbing are laid to a fall, on a base that can take Scottish weather. The job is the ground under the slab as much as the slab you see.',
    includes: [
      'Setting out and excavation',
      'Sub-base and bedding',
      'Sandstone, concrete or porcelain slabs',
      'Cuts around drains, posts and thresholds',
      'Pointing and a finished edge',
    ],
    notes: [
      'A small seating patio and a full wrap around the house are priced differently. The example guide assumes about 20 square metres of standard slab.',
      'Steps, a low wall, or a gravel margin are often part of the same visit. Those are itemised on the quote.',
    ],
    priceId: 'patio',
  },
  {
    slug: 'garden-makeovers',
    name: 'Garden makeovers',
    nav: 'Makeovers',
    summary: 'From a tired plot to a garden you can actually use.',
    title: 'Garden Makeovers in Clackmannanshire | BL Groundworks',
    description:
      'Garden makeovers from a tidy-up to a full reset. Lawns, beds, patios and fencing, based in Alloa and working across Clackmannanshire. Free quotes.',
    lead: 'Some gardens need a hard clear and a new lawn. Others need the whole plot rethought: where you sit, where the bins go, and how you get from the back door to the gate.',
    includes: [
      'Clearance and waste removed',
      'Levels sorted before anything is laid',
      'Lawn, beds, patio or a mix of all three',
      'Edging so grass and gravel stay in their places',
      'A finish you can use the week the team leaves',
    ],
    notes: [
      'A simple tidy starts lower. A makeover that includes new turf, a patio and fencing moves into the full landscaping guide.',
      'Bring a photograph of the plot as it is. The quote is still done on site.',
    ],
    priceId: 'garden-reset',
  },
  {
    slug: 'landscaping',
    name: 'Landscaping',
    nav: 'Landscaping',
    summary: 'Lawns, levels, planting beds and the hard bits that hold them.',
    title: 'Landscaping in Alloa & the Wee County | BL Groundworks',
    description:
      'Landscaping in Alloa and Clackmannanshire. Lawns, levels, beds, patios and the groundwork under them. Family-run, fully insured, free quotes.',
    lead: 'Landscaping here means the whole outside: soft ground and hard surfaces, planned so one does not undo the other the first wet winter.',
    includes: [
      'Levels, falls and a plan for where water goes',
      'Turf or artificial grass',
      'Beds, edging and soil',
      'Patio, path or stepping access',
      'Fencing or a boundary if the plot needs it',
    ],
    notes: [
      'Planting schemes can be kept simple. The team is there for the ground, the surfaces and the structure, not a garden-centre redesign you did not ask for.',
    ],
    priceId: 'full-landscaping',
  },
  {
    slug: 'fencing',
    name: 'Fencing',
    nav: 'Fencing',
    summary: 'Closeboard and panel fences, posts set so they stay.',
    title: 'Fencing in Alloa & Clackmannanshire | BL Groundworks',
    description:
      'Fencing in Alloa and nearby towns. Closeboard and panel runs, concrete posts, gravel boards. Domestic and commercial. Free, no-obligation quotes.',
    lead: 'A fence is only as good as the posts. The team sets them properly, lines the run, and fits gravel boards where the ground will splash the timber.',
    includes: [
      'Taking down the old fence if there is one',
      'Post holes and concrete',
      'Closeboard or panels',
      'Gravel boards on wet or dog-run boundaries',
      'Gates quoted with the run when you need them',
    ],
    notes: [
      'Sloping gardens, which are common on the Hillfoots, need the panels stepped or raked. That is priced on the slope, not guessed from a flat-garden rate.',
    ],
    priceId: 'fencing',
  },
  {
    slug: 'decking',
    name: 'Decking',
    nav: 'Decking',
    summary: 'Timber and composite decks, framed and lit if you want them lit.',
    title: 'Decking in Alloa | Outdoor Living | BL Groundworks',
    description:
      'Decking in Alloa and Clackmannanshire. Timber and composite decks, framed for the plot, for the door threshold and for the weather. Free quotes.',
    lead: 'A deck has to meet the door, shed the rain, and feel solid underfoot. Framing, ventilation and the boards are all on the quote.',
    includes: [
      'Frame set for the levels at the house',
      'Timber or composite boards',
      'Edging and a step or two if the drop needs it',
      'Room to get a brush underneath',
      'Lighting discussed before the boards go down, not after',
    ],
    notes: [
      'Composite costs more in materials and lasts longer in the wet. The example guide is a timber deck of about 12 to 16 square metres.',
    ],
    priceId: 'decking',
  },
  {
    slug: 'turfing',
    name: 'Turfing',
    nav: 'Turfing',
    summary: 'Real turf and artificial grass, on ground that has been levelled.',
    title: 'Turfing, Real & Artificial | Alloa | BL Groundworks',
    description:
      'Real turf and artificial grass in Alloa and Clackmannanshire. Ground prepared first, then the lawn laid. Free quotes for small gardens and full plots.',
    lead: 'Turf laid on lumpy ground telegraph the lumps. The preparation is the job: clear, level, and a proper edge so the lawn stays a lawn.',
    includes: [
      'Clearance of the old surface',
      'Levelling and a worked soil bed for real turf',
      'A stone base and edging for artificial grass',
      'Real turf or artificial, supplied and laid',
      'A watering note for real turf in the first weeks',
    ],
    notes: [
      'Artificial grass needs a drained base. If the garden holds water, drainage is quoted with it rather than hidden inside a lawn price.',
    ],
    priceId: 'garden-reset',
  },
  {
    slug: 'groundworks',
    name: 'Groundworks',
    nav: 'Groundworks',
    summary: 'Reduced levels, bases, and the preparation under a new surface.',
    title: 'Groundworks in Alloa | BL Groundworks Scotland',
    description:
      'Domestic and commercial groundworks in Alloa and surrounding areas. Reduced levels, bases and preparation for drives, patios and extensions. Free quotes.',
    lead: 'Groundworks is the part you stop seeing once the driveway or the extension slab is down. It is also the part that decides whether that finish lasts.',
    includes: [
      'Reduced levels and muck away',
      'Bases for patios, drives and outdoor structures',
      'Preparation alongside extensions to existing areas',
      'Kerbs, edges and formation levels',
      'Coordination with whoever is doing the building work',
    ],
    notes: [
      'Commercial yards and domestic gardens are both taken. Access for a machine is checked before a price is treated as firm.',
    ],
    priceId: 'full-landscaping',
  },
  {
    slug: 'drainage',
    name: 'Drainage',
    nav: 'Drainage',
    summary: 'So water leaves the patio, the drive and the lawn.',
    title: 'Garden & Driveway Drainage in Alloa | BL Groundworks',
    description:
      'Drainage for gardens, patios and driveways in Alloa, the Hillfoots and Clackmannanshire. Falls, channels and pipe runs, quoted after a look at the plot.',
    lead: 'Standing water ruins a new patio faster than anything else. Drainage is planned with the levels, not bolted on once the slabs are down.',
    includes: [
      'A look at where water arrives and where it can leave',
      'Falls across patios and drives',
      'Channels, gullies and pipe runs',
      'Connections discussed before anything is dug',
      'Reinstatement of the surface that was lifted',
    ],
    notes: [
      'A short domestic run has an example guide. A garden that floods from the hill above it is a surveyed job, not a metre rate guessed from the road.',
    ],
    priceId: 'drainage',
  },
  {
    slug: 'walling-steps',
    name: 'Walling & steps',
    nav: 'Walls & steps',
    summary: 'Steps, dwarf walls and retaining where the garden slopes.',
    title: 'Garden Steps & Walling in Alloa | BL Groundworks',
    description:
      'Garden steps and walling in Alloa and the Hillfoots. Slopes, retained beds and a safe way down to the lawn. Fully insured. Free quotes.',
    lead: 'Alva, Tillicoultry and plenty of Alloa gardens sit on a slope. Steps and a low wall turn that slope into a garden you can walk.',
    includes: [
      'Setting out the flight so the rise is even',
      'Block, stone or sleeper construction, agreed first',
      'A landing if the drop needs one',
      'Walls that hold a bed rather than a pile of soil',
      'Handing the finished levels back to the lawn or patio',
    ],
    notes: [
      'A short flight is a different job from a retained bank the width of the garden. Both are quoted on site.',
    ],
    priceId: 'steps',
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
