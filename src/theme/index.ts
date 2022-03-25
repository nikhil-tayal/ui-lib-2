import { createTheme } from '@mui/material/styles';
export const Theme = createTheme({
  palette: {
    primary: {
      main: '#27b67c',
      //other color: '#00FF00'
    },
    secondary: {
      main: '#0a2e57'
      //other color:'0000FF'
    },
    dripRed: {
      main: "#dc3545",
      //other color:'FF0000'
    },
    dripGray: {
      main: '#d3d3d3'
    }
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    dripRed: Palette['primary'];
    dripGray: Palette['primary'];
  }
  interface PaletteOptions {
    dripRed: PaletteOptions['primary'];
    dripGray: PaletteOptions['primary'];
  }
}
