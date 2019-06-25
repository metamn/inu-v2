// From https://usehooks.com/
// Used (only) to check if user prefers dark theme

import { stringify } from "flatted";

const useMedia = (queries, values, defaultValue) => {
  // Array containing a media query list for each query
  const mediaQueryLists = queries.map(q => window.matchMedia(q));

  // Get index of first media query that matches
  const index = mediaQueryLists.findIndex(mql => mql.matches);

  // Return related value or defaultValue if none
  return typeof values[index] !== "undefined" ? values[index] : defaultValue;
};

export default useMedia;
