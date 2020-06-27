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
    primary: '#8731d5',
    secondary: '#4197f1',
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
    heading: '#2c2f3b',
    paragraph: '#4b4f61',
    subtitle: '#7b8392',
    text: {
      one: '#4b4f61',
      // two: '#7b8392',
      two: '#4b4f61aa',
      // three: '#aab1b9',
      three: '#4b4f6170',
      lightOne: '#ffffff',
      lightTwo: '#ffffffaa',
      lightThree: '#ffffff80',
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
