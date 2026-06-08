export const filters = ['All', 'Architecture', 'Photography', 'Graphics', 'Editorial', 'Archive'];

export const projects = [
  {
    slug: 'the-living-cycles',
    title: 'The Living Cycles',
    year: '2024',
    category: 'Architecture',
    featured: true,
    cover: '/images/projects/architecture/foragers-hut/cover.webp',
    summary: "A forager's hut where itself is foraged.",
    description: [
      "The Foragers' Hut is a dynamic architectural intervention situated in the biodiverse Nelson Swamp Unique Area. This project integrates the act of foraging into both food gathering and construction, creating a cyclical system where the building evolves in harmony with its natural surroundings.",
      "Extensive site analysis revealed a diverse range of materials, including wood, stone, reed, clay, and cattails, each with seasonal availability and varying lifecycles. These observations informed the design's use of the gabion box technique, a modular system where foragers gather materials to construct and maintain the hut. As organic components like wood and reed decay, they are replaced by new materials sourced from the site, ensuring the structure remains in continuous dialogue with the landscape.",
      'The hut serves as a communal space for seasonal gatherings, offering areas for food processing, cooking, dining, and temporary residence. By blending material ecologies with participatory construction, the design emphasizes the symbiotic relationship between humans and nature. It reimagines architecture as a living entity, where the building itself is foraged, maintained, and renewed by its community, seamlessly cycling with the rhythms of the environment.',
    ],
    instructor: 'Il Hwan Kim',
    role: 'Studio Project',
    tools: ['Rhino', 'Adobe Photoshop', 'Illustrator'],
    images: [
      {
        src: '/images/projects/architecture/foragers-hut/01-diagram-physical-college.webp',
        alt: 'The Living Cycles project image 01.',
        caption: 'Site physical college',
      },
      {
        src: '/images/projects/architecture/foragers-hut/02-diagram-trail.webp',
        alt: 'The Living Cycles project image 02.',
        caption: 'Site trail exploration',
      },
      {
        src: '/images/projects/architecture/foragers-hut/03-colorbook.webp',
        alt: 'The Living Cycles project image 03.',
        caption:
          'A designed and collective colorbook was hand-drawn to provide a interactive reference for foraging',
      },
      {
        src: '/images/projects/architecture/foragers-hut/04-diagram-map.webp',
        alt: 'The Living Cycles project image 04.',
        caption: 'Construction materials mapping',
      },
      {
        src: '/images/projects/architecture/foragers-hut/05-diagram-strategy.webp',
        alt: 'The Living Cycles project image 05.',
        caption: 'Experiment on the combination of easy-foraging materials in various techniques',
      },
      {
        src: '/images/projects/architecture/foragers-hut/06-section.webp',
        alt: 'The Living Cycles project image 06.',
        caption: 'Section',
      },
      {
        src: '/images/projects/architecture/foragers-hut/07-plan.svg',
        alt: 'The Living Cycles project image 07.',
        className: 'image-white-background',
        caption: 'Zoomed-in Plan',
      },
      {
        src: '/images/projects/architecture/foragers-hut/08-section-detail.webp',
        alt: 'The Living Cycles project image 08.',
        caption: 'Detailed section',
      },
      {
        src: '/images/projects/architecture/foragers-hut/09-model-01.webp',
        alt: 'The Living Cycles project image 09.',
        caption: 'Model photo',
      },
      {
        src: '/images/projects/architecture/foragers-hut/10-model-03.webp',
        alt: 'The Living Cycles project image 10.',
        caption: 'Model photo',
      },
      {
        src: '/images/projects/architecture/foragers-hut/11-model-02.webp',
        alt: 'The Living Cycles project image 11.',
        caption: 'Model photo',
      },
      {
        src: '/images/projects/architecture/foragers-hut/12-model-detail-01.webp',
        alt: 'The Living Cycles project image 12.',
        caption: 'Model photo',
      },
      {
        src: '/images/projects/architecture/foragers-hut/13-model-detail-03.webp',
        alt: 'The Living Cycles project image 13.',
        caption: 'Model photo',
      },
      {
        src: '/images/projects/architecture/foragers-hut/14-model-detail-04.webp',
        alt: 'The Living Cycles project image 14.',
        caption: 'Model photo',
      },
      {
        src: '/images/projects/architecture/foragers-hut/15-model-detail-02.webp',
        alt: 'The Living Cycles project image 15.',
        caption: 'Model photo',
      },
      {
        src: '/images/projects/architecture/foragers-hut/16-model-detail-05.webp',
        alt: 'The Living Cycles project image 16.',
        caption: 'Model photo',
      },
    ],
  },
  {
    slug: 'threshold-house',
    title: 'Threshold House',
    year: '2025',
    category: 'Architecture',
    featured: true,
    cover: '/images/projects/threshold-house-cover.svg',
    summary: 'A compact dwelling study where circulation becomes a sequence of small thresholds.',
    description: [
      'Threshold House studies how a domestic plan can hold both movement and pause. The project uses a narrow site as a testing ground for layered entries, half-open rooms, and framed views that let daily routines unfold gradually.',
      'The images combine plan studies, sectional moments, and quiet render fragments. The emphasis is not on spectacle, but on the spatial rhythm created by repeated edges, steps, and changes in light.',
    ],
    role: 'Design / Model / Drawing',
    tools: ['Rhino', 'AutoCAD', 'Photoshop'],
    images: [
      {
        src: '/images/projects/threshold-house-cover.svg',
        alt: 'Architectural cover composition with plan blocks and a muted red frame.',
        caption: 'Cover study, massing and threshold diagram.',
      },
      {
        src: '/images/projects/threshold-house-detail.svg',
        alt: 'Architectural detail sheet with plan lines and spatial frames.',
        caption: 'Plan and sectional fragments.',
      },
    ],
  },
  {
    slug: 'walking-notes',
    title: 'Walking Notes',
    year: '2024',
    category: 'Photography',
    featured: true,
    cover: '/images/projects/walking-notes-cover.svg',
    summary: 'A photographic sequence about passing light, street surfaces, and small urban pauses.',
    description: [
      'Walking Notes is a slow image sequence made from repeated walks through the same neighborhood. The work treats the street as a loose archive: windows, shadows, crossings, and temporary objects become a record of attention.',
      'The project detail page keeps the text minimal so the photographs can read as a continuous visual rhythm.',
    ],
    role: 'Photography / Edit',
    tools: ['Digital camera', 'Lightroom', 'Photoshop'],
    images: [
      {
        src: '/images/projects/walking-notes-cover.svg',
        alt: 'Photography cover with cropped urban light and shadow fields.',
        caption: 'Sequence cover.',
      },
      {
        src: '/images/projects/walking-notes-detail.svg',
        alt: 'Three quiet photographic frames arranged in a vertical archive layout.',
        caption: 'Selected walking frames.',
      },
    ],
  },
  {
    slug: 'poster-index',
    title: 'Poster Index',
    year: '2025',
    category: 'Graphics',
    featured: true,
    cover: '/images/projects/poster-index-cover.svg',
    summary: 'A poster system built from strict grids, cropped type, and restrained color.',
    description: [
      'Poster Index explores how a limited rule set can produce a family of visual outcomes. The system uses a fixed grid, large typographic blocks, and one accent color to create variation without losing coherence.',
      'The work is presented as a set of flat images so scale, spacing, and rhythm can be compared directly.',
    ],
    role: 'Visual design / System',
    tools: ['Illustrator', 'Photoshop'],
    images: [
      {
        src: '/images/projects/poster-index-cover.svg',
        alt: 'Minimal poster system cover with large typographic blocks and grid divisions.',
        caption: 'Poster system cover.',
      },
      {
        src: '/images/projects/poster-index-detail.svg',
        alt: 'Poster grid variations arranged as an archive sheet.',
        caption: 'Grid variations.',
      },
    ],
  },
  {
    slug: 'archdaily-layout-study',
    title: 'ArchDaily Layout Study',
    year: '2024',
    category: 'Editorial',
    featured: true,
    cover: '/images/projects/archdaily-layout-cover.svg',
    summary: 'A quiet editorial study focused on architecture image hierarchy and page rhythm.',
    description: [
      'This editorial project studies how architecture media can balance image evidence, captions, and readable text. The layout keeps project imagery dominant while using small typographic anchors to help readers move through the page.',
      'The work highlights sequencing, image selection, and page details rather than a decorative editorial style.',
    ],
    role: 'Layout / Image research / Editorial support',
    tools: ['InDesign', 'Photoshop', 'Figma'],
    images: [
      {
        src: '/images/projects/archdaily-layout-cover.svg',
        alt: 'Editorial layout cover with page spreads and architecture image blocks.',
        caption: 'Opening spread study.',
      },
      {
        src: '/images/projects/archdaily-layout-detail.svg',
        alt: 'Editorial detail sheet with columns, captions, and image hierarchy.',
        caption: 'Page hierarchy details.',
      },
    ],
  },
  {
    slug: 'material-archive',
    title: 'Material Archive',
    year: '2023',
    category: 'Archive',
    featured: true,
    cover: '/images/projects/material-archive-cover.svg',
    summary: 'A visual index of textures, fragments, and built surface references.',
    description: [
      'Material Archive gathers fragments from site visits, model tests, and image studies. Instead of presenting a finished project, it keeps the research visible as a collection of surfaces, marks, and repeated forms.',
      'The archive format makes it easy to scan relationships between texture, scale, and atmosphere.',
    ],
    role: 'Research / Photography / Curation',
    tools: ['Camera', 'Scanner', 'Photoshop'],
    images: [
      {
        src: '/images/projects/material-archive-cover.svg',
        alt: 'Archive cover with material samples arranged in a restrained grid.',
        caption: 'Material index cover.',
      },
      {
        src: '/images/projects/material-archive-detail.svg',
        alt: 'Material samples and scanned fragments in an archive layout.',
        caption: 'Scanned fragments.',
      },
    ],
  },
  {
    slug: 'courtyard-sequence',
    title: 'Courtyard Sequence',
    year: '2022',
    category: 'Architecture',
    featured: false,
    cover: '/images/projects/courtyard-sequence-cover.svg',
    summary: 'A study of courtyards as alternating pockets of shade, view, and movement.',
    description: [
      'Courtyard Sequence tests how repeated open rooms can organize a small public building. The project focuses on the shift between compressed entries and open courts, using light as the main wayfinding element.',
      'The presentation mixes diagrammatic views with atmosphere studies to keep the spatial logic legible.',
    ],
    role: 'Design / Diagram / Rendering',
    tools: ['Rhino', 'V-Ray', 'Photoshop'],
    images: [
      {
        src: '/images/projects/courtyard-sequence-cover.svg',
        alt: 'Architectural courtyard study with rectilinear voids and blue accent.',
        caption: 'Courtyard sequence cover.',
      },
      {
        src: '/images/projects/courtyard-sequence-detail.svg',
        alt: 'Diagram sheet showing courtyard rhythm and section cuts.',
        caption: 'Sequence diagrams.',
      },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug) {
  const index = projects.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}
