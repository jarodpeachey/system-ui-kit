/* eslint-disable import/prefer-default-export */
import React from 'react';

export const theme = {
  shadow: {
    one: '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
    two: '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.18)',
    three: '0 4px 12px rgba(50,50,93,.25), 0 1px 3px rgba(0,0,0,.18)',
    four: '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
  },
  radius: {
    one: '3px',
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
  heading: {
    one: 53,
    two: 36,
    three: 27,
    four: 18,
    five: 16,
    six: 14,
  },
  fontSize: {
    h1: 48,
    h2: 36,
    h3: 28,
    h4: 24,
    h5: 20,
    h6: 16,
    p: 17,
    small: 14,
  },
  color: {
    // primary: '#8731d5',
    // secondary: '#4197f1',
    success: '#36ca6a',
    error: '#f14941',
    paragraph: '#4c5267',
    heading: '#2c2f3b',
    text: {
      one: '#2c2f3b',
      two: '#4c5267',
      three: '#b5b9c1',
      dark: {
        one: '#2c2f3b',
        two: '#4c5267',
        three: '#b5b9c1',
      },
      light: {
        one: '#ffffff',
        two: '#ffffffaa',
        three: '#ffffff80',
      },
    },
    primary: {
      // light: '#fab86c',
      main: '#8731d5',
      // dark: '#f76b2b',
    },
    secondary: {
      // light: '#fab86c',
      main: '#4197f1',
      // dark: '#f76b2b',
    },
    gray: {
      // one: '#f6f9fc',
      one: '#f7f7fb',
      two: '#e9eaef',
      three: '#e2e6ec',
      four: '#cccfd4',
      five: '#babcbf',
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
