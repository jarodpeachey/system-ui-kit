/* eslint-disable import/prefer-default-export */
import React from 'react';

export const theme = {
  shadow: {
    // one: '3px 3px 18px -6px #00000010',
    one:
      'rgba(0, 0, 0, 0.1) 0px 1px 6px -2px, rgba(0, 0, 0, 0.06) 0px 1px 16px -4px',
    two: 'rgba(0, 0, 0, 0.1) 0px 1px 12px -4px, rgba(0, 0, 0, 0.06) 0px 1px 32px -8px',
    three: 'rgba(0, 0, 0, 0.1) 0px 1px 24px -8px, rgba(0, 0, 0, 0.06) 0px 1px 64px -16px',
    four: 'rgba(0, 0, 0, 0.1) 0px 1px 48px -16px, rgba(0, 0, 0, 0.06) 0px 1px 128px -32px',
    button: '3px 3px 18px -6px #00000040',
    buttonHover: '3px 3px 32px -6px #00000050',
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
  fontSize: {
    h1: 40,
    h2: 34,
    h3: 26,
    h4: 22,
    h5: 18,
    h6: 16,
    p: 17,
    small: 15,
  },
  color: {
    // primary: '#8731d5',
    // primary: '#7650ea',
    primary: '#3676ea',
    // secondary: '#4197f1',
    secondary: '#09a8d8',
    gray: {
      // one: '#f6f9fc',
      one: '#f7f7fb',
      two: '#eaedf1',
      three: '#d9dce0',
      four: '#c5c8cc',
      five: '#aab1b9',
      six: '#7b8392',
      seven: '#4b4f61',
      eight: '#2c2f3b',
      nine: '#212529',
    },
    success: '#36ca6a',
    error: '#f14941',
    text: {
      heading: '#2c2f3b',
      paragraph: '#4b4f61',
      one: '#4b4f61',
      two: '#4b4f61aa',
      three: '#4b4f6170',
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
