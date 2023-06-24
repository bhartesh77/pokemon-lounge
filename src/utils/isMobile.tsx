const isMobile = () => {
  const mediaQuery = window.matchMedia(`(max-width: 480px)`);
  return mediaQuery.matches;
};

export default isMobile;
