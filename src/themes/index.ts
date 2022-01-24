import lightTheme from './lightTheme'

declare module '@mui/material' {
  export interface Color {
    150: string;
    350: string;
    650: string;
  }
}

declare module '@mui/material/styles' {
  export interface Palette {
    support?: {
      success?: Palette['primary'],
      error?: Palette['primary'],
      warning?: Palette['primary'],
    };
  }
  export interface PaletteOptions {
    support?: {
      success?: PaletteOptions['primary'],
      error?: PaletteOptions['primary'],
      warning?: PaletteOptions['primary'],
    };
  }
}

export default lightTheme