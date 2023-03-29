export const breakpoints = {
  mobile: 640,
  laptop: 1007,
  desktop: 1008,
};

export const mediaQueries = (key) => {
  return (style) => `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};
