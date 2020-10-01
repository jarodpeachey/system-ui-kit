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
    h1: 40,
    h2: 34,
    h3: 28,
    h4: 22,
    h5: 20,
    h6: 18,
    p: 18,
    small: 16,
  },
  color: {
    primary: '#3676ea',
    secondary: '#09a8d8',
    gray: {
      one: '#f7f7fb',
      // two: '#eaedf1',
      // two: '#efeff2',
      // three: '#d9dce0',
      two: '#E0E0E4',
      // four: '#c5c8cc',
      // four: '#d2d2d7',
      // five: '#aab1b9',
      three: '#C9C9CD',
      four: '#9A9A9F',
      five: '#5A5A69',
      six: '#252538',

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
