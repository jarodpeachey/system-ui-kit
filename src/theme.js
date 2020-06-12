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
  color: {
    success: '#36ca6a',
    error: '#f14941',
    text: {
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
      one: '#F7F7F7',
      two: '#F1F1F1',
      three: '#EBEBEB',
      four: '#DADBDB',
      five: '#C8CACB',
      six: '#ABAEB0',
      seven: '#929699',
      eight: '#787D81',
      nine: '#464C52',
      ten: '#131B23',
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
