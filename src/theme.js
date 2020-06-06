/* eslint-disable import/prefer-default-export */
import React from 'react';

export const theme = {
  shadow: {
    one:
      '0 0 4px 0 rgba(17,22,26,0.08), 0 2px 4px 0 rgba(17,22,26, 0.03), 0 4px 8px 0 rgba(17,22,26, 0.03)',
    two:
      '0 0 8px 0 rgba(17,22,26,0.08), 0 4px 8px 0 rgba(17,22,26, 0.03), 0 8px 16px 0 rgba(17,22,26, 0.03)',
    three:
      '0 4px 16px 4px rgba(17,22,26,0.08), 0 4px 8px 0 rgba(17,22,26, 0.03), 0 16px 24px 0 rgba(17,22,26, 0.03)',
    four:
      '0 4px 24px 8px rgba(17,22,26,0.08), 0 8px 16px 0 rgba(17,22,26, 0.03), 0 32px 40px 0 rgba(17,22,26, 0.03)',
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
    success: '#00ab66',
    error: '#f33b1a',
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
      main: '#3164d5',
      // dark: '#f76b2b',
    },
    secondary: {
      // light: '#fab86c',
      main: '#04B1D1',
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
