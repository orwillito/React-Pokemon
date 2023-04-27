const breakpoints = {
  mobile: 640,
  laptop: 1513,
  desktop: 1980,
};

export const mediaQueries = (key) => {
  return (style) => `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};
