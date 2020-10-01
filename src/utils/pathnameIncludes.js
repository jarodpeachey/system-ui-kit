export const pathnameIncludes = (test) => {
  if (typeof window !== 'undefined' && window.location.pathname.includes(test))
    return true;

  return false;
};
