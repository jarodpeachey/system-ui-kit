/* eslint-disable import/prefer-default-export */
import React from 'react';

export const theme = {
  shadow: {
    // one: '3px 3px 18px -6px #00000010',
    one:
      '1px 1px 18px -5px rgba(174,198,211,.35), 1px 1px 5px -2px rgb(174, 198, 211, .25)',
    two:
      '1px 1px 28px -10px rgba(174,198,211,.4), 1px 1px 13px -4px rgb(174, 198, 211, .25)',
    three:
      '1px 1px 38px -15px rgba(174,198,211,.45), 1px 1px 20px -8px rgb(174, 198, 211, .25)',
    four:
      '1px 1px 48px -15px rgba(174,198,211,.45), 1px 1px 26px -4px rgb(174, 198, 211, .25)',
    button: '3px 3px 18px -6px rgba(0,0,0,.25)',
    buttonHover: '3px 3px 28px -10px rgba(0,0,0,.25)',
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
      paragraph: '#646b8a',
      one: '#646b8a',
      two: '#646b8aaa',
      three: '#646b8a70',
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
