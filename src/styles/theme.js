export const tokens = {
  colors: {
    backgroundPrimary: '#ffffff',
    backgroundSecondary: '#353535',
    accent01: '#e5ff00',
    accent02: '#11837F',
    accent03: '#cee0eb',
    textPrimary: '#353535',
    textSecondary: '#ffffff',
    textAccent: '#0E6966',
  },
  typography: {
    fontSizes: [12, 14, 16, 18, 22, 32, 35, 42, 44, 50, 52, 60, 64, 100],
    fonts: {
      headingPrimary: `"FoundersGrotesk", sans-serif`,
      headingSecondary: `"freight-big-pro", serif`,
      bodyPrimary: `"FoundersGrotesk", sans-serif`,
      bodySecondary: `"FoundersGrotesk-Regular", sans-serif`,
    },
    fontWeights: {
      light: 300,
      regular: 500,
    },
  },
};

/**
 *  Component-specific theming data
 */
export const buttonTheme = {
  primary: {
    bg: tokens.colors.accent01,
    color: tokens.colors.textPrimary,
    fontFamily: tokens.typography.fonts.headingPrimary,
    fontSize: [tokens.typography.fontSizes[2], tokens.typography.fontSizes[3]],
    border: `1px solid ${tokens.colors.backgroundSecondary}`,
    borderRadius: '0px',
    height: '60px',
    width: '100%',
    '&:not(:disabled)': {
      '&:hover': {
        bg: tokens.colors.accent02,
        border: `1px solid ${tokens.colors.backgroundPrimary}`,
        color: tokens.colors.textSecondary,
        cursor: 'pointer',
      },
    },
    '&:disabled': {
      bg: 'grey',
      cursor: 'not-allowed',
      color: 'initial',
    },
  },
  secondary: {
    bg: tokens.colors.backgroundPrimary,
    borderColor: tokens.colors.backgroundSecondary,
    borderWidth: '1px',
    borderStyle: 'solid',
    color: tokens.colors.textPrimary,
    fontFamily: tokens.typography.fonts.headingPrimary,
    fontSize: [tokens.typography.fontSizes[2], tokens.typography.fontSizes[3]],
    '&:hover': {
      bg: tokens.colors.accent02,
      border: `1px solid ${tokens.colors.textSecondary}`,
      cursor: 'pointer',
    },
  },
  tertiary: {
    border: 0,
    borderRadius: '0',
    padding: 'unset',
    bg: tokens.colors.backgroundPrimary,
    color: tokens.colors.textPrimary,
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    height: 'unset',
    width: 'initial',
    '&:not(:disabled)': {
      '&:hover': {
        bg: tokens.colors.backgroundPrimary,
        border: 0,
        borderColor: tokens.colors.textAccent,
        color: tokens.colors.textAccent,
        cursor: 'pointer',
      },
    },
  },
  activeCart: {
    bg: tokens.colors.accent02,
    border: `1px solid ${tokens.colors.backgroundPrimary}`,
    color: tokens.colors.textSecondary,
    fontSize: [tokens.typography.fontSizes[2], tokens.typography.fontSizes[3]],
    cursor: 'not-allowed',
  },
  tabs: {
    variant: 'buttons.tertiary',
    fontSize: [0, 1],
    textDecoration: 'none',
    borderBottom: '3px solid',
    borderColor: tokens.colors.textPrimary,
    opacity: 0.4,
    '&.active': {
      opacity: 1,
    },
    '&:hover': {
      bg: tokens.colors.backgroundPrimary,
      color: tokens.colors.textPrimary,
      opacity: 1,
    },
  },
};

const headingTheme = {
  default: {
    letterSpacing: '-2px',
  },
  heading1: {
    primary: {
      fontFamily: tokens.typography.fonts.headingPrimary,
      fontWeight: tokens.typography.fontWeights.light,
    },
    secondary: {
      fontFamily: tokens.typography.fonts.headingSecondary,
      fontWeight: tokens.typography.fontWeights.light,
      fontStyle: 'italic',
    },
  },
  heading2: {
    primary: {
      fontFamily: tokens.typography.fonts.headingPrimary,
      fontWeight: tokens.typography.fontWeights.light,
    },
    secondary: {
      fontFamily: tokens.typography.fonts.headingSecondary,
      fontWeight: tokens.typography.fontWeights.regular,
      fontStyle: 'italic',
    },
  },
  heading3: {
    primary: {
      fontFamily: tokens.typography.fonts.headingPrimary,
      fontWeight: tokens.typography.fontWeights.light,
    },
  },
};

const textTheme = {
  bodyPrimary: {
    fontFamily: tokens.typography.fonts.bodyPrimary,
    fontWeight: tokens.typography.fontWeights.light,
    letterSpacing: '0px',
  },
  bodySecondary: {
    fontFamily: [
      tokens.typography.fonts.bodySecondary,
      null,
      tokens.typography.fonts.bodyPrimary,
    ],
    fontWeight: tokens.typography.fontWeights.regular,
    letterSpacing: '0px',
  },
  bodyDirectional: {
    fontFamily: tokens.typography.fonts.bodyPrimary,
    fontWeight: tokens.typography.fontWeights.light,
    letterSpacing: '0px',
  },
  bodyEyebrow: {
    textTransform: 'uppercase',
    fontFamily: tokens.typography.fonts.bodyPrimary,
    fontWeight: tokens.typography.fontWeights.light,
    letterSpacing: '0px',
  },
};

const checkboxTheme = {
  fill: tokens.colors.backgroundSecondary,
  '&:hover': {
    fill: tokens.colors.accent02,
  },
  'input:checked ~ &': {
    fill: tokens.colors.accent02,
  },
};

const inputTheme = {
  fontFamily: tokens.typography.fonts.primary,
  fontSize: tokens.typography.fontSizes[3],
  borderRadius: '0',
  // border: "none",
  '&:focus-visible': {
    outline: 'none',
  },
};

export const theme = {
  useBodyStyles: false,
  buttons: {
    ...buttonTheme,
  },
  headings: {
    ...headingTheme,
  },
  text: {
    ...textTheme,
  },
  forms: {
    checkbox: {
      ...checkboxTheme,
    },
    input: {
      ...inputTheme,
    },
  },
};
