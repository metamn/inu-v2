import useMedia from "./useMedia";

// From https://usehooks.com/
function usePrefersDarkMode() {
  const prefers = useMedia(["(prefers-color-scheme: dark)"], [true], false);
  console.log("prefers:" + prefers);
  return prefers;
}

export default usePrefersDarkMode;
