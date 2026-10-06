import type { ImageMetadata } from 'astro';
import { phases, projects, type PhaseId, type ProjectMeta } from '../data/projects';

type GlobMod = { default: ImageMetadata };

const modules = import.meta.glob<GlobMod>('../assets/portfolio/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
});

const aliases: { prefix: string; phase: PhaseId }[] = [
  { prefix: 'behind-the-scenes', phase: 'behind-the-scenes' },
  { prefix: 'completion', phase: 'completion' },
  { prefix: 'before', phase: 'before' },
  { prefix: 'during', phase: 'during' },
  { prefix: 'after', phase: 'completion' },
  { prefix: 'bts', phase: 'behind-the-scenes' },
];

export type ProjectImage = {
  src: ImageMetadata;
  path: string;
  file: string;
  phase: PhaseId;
  alt: string;
  caption: string;
};

export type Project = ProjectMeta & {
  images: ProjectImage[];
};

function phaseFromFile(file: string): PhaseId | null {
  const stem = file.replace(/\.[^.]+$/, '').toLowerCase();
  const hit = aliases.find((alias) => stem === alias.prefix || stem.startsWith(`${alias.prefix}-`) || stem.startsWith(`${alias.prefix}_`));
  return hit?.phase ?? null;
}

function imagesFor(project: ProjectMeta): ProjectImage[] {
  return Object.entries(modules)
    .filter(([path]) => path.includes(`/portfolio/${project.slug}/`))
    .flatMap(([path, mod]) => {
      const file = path.split('/').pop() ?? '';
      const phase = phaseFromFile(file);
      if (!phase) return [];
      const caption = project.captions.find((item) => item.file === file);
      const phaseLabel = phases.find((item) => item.id === phase)?.label ?? phase;
      return [
        {
          src: mod.default,
          path,
          file,
          phase,
          alt: caption?.alt ?? `${project.title}, ${phaseLabel.toLowerCase()} photograph`,
          caption: caption?.caption ?? '',
        },
      ];
    })
    .sort((a, b) => a.file.localeCompare(b.file));
}

export function getProjects(): Project[] {
  return projects.map((project) => ({ ...project, images: imagesFor(project) }));
}

export function getProject(slug: string) {
  return getProjects().find((project) => project.slug === slug);
}

export function cardLine(project: Pick<ProjectMeta, 'brief' | 'summary'>) {
  if (!project.brief) return project.summary;
  const sentence = project.brief.split(/(?<=\.)\s/)[0] ?? project.summary;
  return sentence.endsWith('.') ? sentence : `${sentence}.`;
}

export function coverImage(project: Project) {
  if (project.cover) {
    const chosen = project.images.find((image) => image.file === project.cover);
    if (chosen) return chosen;
  }
  return project.images.find((image) => image.phase === 'completion') ?? project.images[0];
}

export function heroImages(project: Project): ProjectImage[] {
  const files = project.heroes?.length
    ? project.heroes
    : project.images.filter((image) => image.phase === 'completion').slice(0, 3).map((image) => image.file);
  const frames = files
    .map((file) => project.images.find((image) => image.file === file))
    .filter((image): image is ProjectImage => Boolean(image));
  if (frames.length > 0) return frames;
  const cover = coverImage(project);
  return cover ? [cover] : [];
}

export function phaseCounts(project: Project) {
  return phases.map((phase) => ({
    ...phase,
    count: project.images.filter((image) => image.phase === phase.id).length,
  }));
}
