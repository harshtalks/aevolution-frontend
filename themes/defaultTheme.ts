import { extendTheme, CssVarsProvider } from "@mui/joy";

const lightTheme = extendTheme({
  fontFamily: {
    display: "League Spartan var, var(--joy-fontFamily-fallback)",
    body: "Poppins, var(--joy-fontFamily-fallback)",
  },
  colorSchemes: {
    light: {
      palette: {
        text: {
          primary: "#353535",
          secondary: "#0b090a",
          tertiary: "#595959",
        },
        background: {
          body: "#d3d3d3",
        },
        primary: {
          plainColor: "#353535",
          plainHoverBg: "#e9ecef",
          solidBg: "#353535",
          solidHoverBg: "#5b5b5b",
          solidActiveBg: "#5b5b5b",
          plainActiveBg: "#e9ecef",
          outlinedBorder: "#353535",
          outlinedColor: "#353535",
          outlinedHoverBg: "#353535",
          outlinedHoverColor: "#fff",
          outlinedHoverBorder: "#353535",
          outlinedActiveBg: "#5b5b5b",
          outlinedActiveColor: "#fff",
          outlinedActiveBorder: "#5b5b5b",
        },
      },
    },
  },
});

export default lightTheme;
