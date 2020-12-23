/* eslint-disable import/prefer-default-export */
import React from 'react';

export const theme = {
  breakpoints: {
    sm: 576,
    md: 769,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
  shadow: {
    one: `
      rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px
    `,
    two: `
      rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px
    `,
    three: `
      rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px
    `,
    four: `
      rgba(0, 0, 0, 0.25) 0px 25px 50px -12px
    `,
    button: `
      rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px
    `,
    buttonHover: `
      rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px
    `,
  },
  radius: {
    one: 4,
    two: 12,
  },
  spacing: {
    desktop: 16,
    mobile: 12,
    section: {
      desktop: 80,
      mobile: 48,
    },
  },
  fontSize: {
    h1: 40,
    h2: 32,
    h3: 24,
    h4: 18,
    h5: 17,
    h6: 17,
    p: 17,
    base: 17,
    button: 14,
    subheading: 20,
    mobile: {
      h1: 32,
      h2: 24,
      h3: 18,
      h4: 16,
      h5: 16,
      h6: 16,
      p: 16,
      base: 16,
      button: 14,
      subheading: 20,
    },
  },
  lineHeight: {
    h1: 48,
    h2: 40,
    h3: 30,
    h4: 30,
    h5: 30,
    h6: 30,
    p: 32,
    base: 32,
    subheading: 20,
    mobile: {
      h1: 40,
      h2: 30,
      h3: 30,
      h4: 30,
      h5: 30,
      h6: 30,
      p: 30,
      base: 30,
    },
  },
  fontWeight: {
    heading: 600,
    body: 400,
    button: 700,
  },
  fontFamily: {
    heading: 'Rubik',
    button: 'Rubik',
    body: 'DM Sans',
  },
  color: {
    primary: '#3676ea',
    secondary: '#09a8d8',
    gray: {
      one: '#f7f7fb', // Light backgrounds, hover state for secondary
      // two: '#eaedf1',
      // two: '#efeff2',
      // three: '#d9dce0',
      two: '#e7ebef', // Button and badge backgrounds
      // four: '#c5c8cc',
      // four: '#d2d2d7',
      // five: '#aab1b9',
      three: '#c8ccd0', // Main border colors
      four: '#93999e', // Hover border color, icon colors
      five: '#5A5A69',
      six: '#252538', // Dark backgrounds for alerts, buttons

      // eight: ' #111111',
      // seven: ' #333333',
      // six: ' #42434f',
      // five: ' #75787A',
      // four: ' #8e9aa7',
      // three: ' #c7c9cf',
      // two: ' #f6f7fb',
      // one: ' #f5f5f5',
    },
    success: '#36ca6a',
    error: '#f14941',
    text: {
      heading: '#283137',
      paragraph: '#586066',
    },
  },
};

export const ThemeContext = React.createContext();

export const CustomThemeProvider = (props) => {
  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
