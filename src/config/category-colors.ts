export interface CategoryColor {
  hex: string;
  bg: string;
  text: string;
  hover: string;
}

export const CATEGORY_COLORS: Record<string, CategoryColor> = {
  python: { hex: '#1040C0', bg: 'bg-brand-blue', text: 'text-inverse-surface', hover: 'hover:text-brand-blue' },
  react: { hex: '#61DAFB', bg: 'bg-primary-react', text: 'text-inverse-surface', hover: 'hover:text-primary-react' },
  'react-native': { hex: '#61DAFB', bg: 'bg-primary-reactnative', text: 'text-inverse-surface', hover: 'hover:text-primary-reactnative' },
  vue: { hex: '#42b883', bg: 'bg-primary-vue', text: 'text-inverse-surface', hover: 'hover:text-primary-vue' },
  java: { hex: '#E65C00', bg: 'bg-primary-orange', text: 'text-inverse-surface', hover: 'hover:text-primary-orange' },
  springboot: { hex: '#3DAA41', bg: 'bg-primary-green', text: 'text-inverse-surface', hover: 'hover:text-primary-green' },
  electron: { hex: '#00A8E0', bg: 'bg-primary-electron', text: 'text-inverse-surface', hover: 'hover:text-primary-electron' },
  astro: { hex: '#7D4DFF', bg: 'bg-primary-astro', text: 'text-inverse-surface', hover: 'hover:text-primary-astro' },
  typescript: { hex: '#3178C6', bg: 'bg-primary-typescript', text: 'text-inverse-surface', hover: 'hover:text-primary-typescript' },
  nodejs: { hex: '#339933', bg: 'bg-primary-nodejs', text: 'text-inverse-surface', hover: 'hover:text-primary-nodejs' },
  express: { hex: '#323232', bg: 'bg-primary-express', text: 'text-inverse-surface', hover: 'hover:text-primary-express' },
  design: { hex: '#121212', bg: 'bg-foreground', text: 'text-inverse-surface', hover: 'hover:text-foreground' },
} as const;
