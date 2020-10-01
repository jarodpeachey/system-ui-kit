export const pSBC = (color, amount) => {
  return (
    '#' +
    color
      .replace(/^#/, '')
      .replace(/../g, (color) =>
        (
          '0' +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2),
      )
  );
};

export const calculateColor = (color, colorTheme) => {
  if (color === 'primary') return colorTheme.primary;
  if (color === 'secondary') return colorTheme.secondary;
  if (color === 'success') return colorTheme.success;
  if (color === 'error') return colorTheme.error;

  return colorTheme.gray.six;
};
