export const pathnameIncludes = (test) => {
  if (window.location.pathname.includes(test)) return true;

  return false;
};
