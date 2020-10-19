/* eslint-disable import/prefer-default-export */
import React from 'react';

export const theme = {
  shadow: {
    // one: '3px 3px 18px -6px #00000010',
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
    dropdown: '1px 1px 12px -4px #2f557c20, 0px 0px 32px -6px #2f557c10',
    header: `
      rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px
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
    one: '5px',
    two: '6px',
    three: '16px',
    four: '999px',
  },
  spacing: {
    one: 4,
    two: 8,
    three: 14,
    four: 22,
    five: 32,
    six: 44,
    seven: 60,
  },
  fontSize: {
    h1: '2.375rem',
    h2: '1.875rem',
    h3: '1.5rem',
    h4: '1.375rem',
    h5: '1.25rem',
    h6: '1.125rem',
    p: '1.065rem',
    button: '1rem',
    label: '1.065rem',
    alert: '1.065rem',
    large: '1.125rem',
    small: '.9375rem',
    base: '1.065rem',
  },
  fontWeight: {
    heading: 600,
    display: 800,
    body: 400,
    button: 600,
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
      heading: '#222222',
      paragraph: '#42434f',
      one: '#42434f',
      two: '#42434faa',
      three: '#42434f70',
      light: {
        one: '#ffffff',
        two: '#ffffffbf',
        three: '#ffffff80',
      },
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
