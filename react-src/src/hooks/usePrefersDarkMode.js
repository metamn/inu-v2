import useMedia from "./useMedia";

// From https://usehooks.com/
function usePrefersDarkMode() {
  return useMedia(["(prefers-color-scheme: dark)"], [true], false);
}

export default usePrefersDarkMode;
