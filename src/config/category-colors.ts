export interface CategoryColor {
  hex: string;
  bg: string;
  text: string;
  hover: string;
}

export const CATEGORY_COLORS: Record<string, CategoryColor> = {
  python:        { hex: '#1040C0', bg: 'bg-primary-blue',        text: 'text-white',       hover: 'hover:text-primary-blue' },
  react:         { hex: '#61DAFB', bg: 'bg-primary-react',       text: 'text-white',       hover: 'hover:text-primary-react' },
  'react-native': { hex: '#61DAFB', bg: 'bg-primary-reactnative', text: 'text-white',       hover: 'hover:text-primary-reactnative' },
  vue:           { hex: '#42b883', bg: 'bg-primary-vue',         text: 'text-white',       hover: 'hover:text-primary-vue' },
  java:          { hex: '#E65C00', bg: 'bg-primary-orange',      text: 'text-white',       hover: 'hover:text-primary-orange' },
  springboot:    { hex: '#3DAA41', bg: 'bg-primary-green',        text: 'text-white',       hover: 'hover:text-primary-green' },
  electron:      { hex: '#00A8E0', bg: 'bg-primary-electron',     text: 'text-white',       hover: 'hover:text-primary-electron' },
  astro:         { hex: '#FF5D01', bg: 'bg-primary-astro',        text: 'text-white',       hover: 'hover:text-primary-astro' },
  design:        { hex: '#121212', bg: 'bg-foreground',           text: 'text-white',       hover: 'hover:text-foreground' },
} as const;
