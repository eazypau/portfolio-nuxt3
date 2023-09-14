export default function useTheme() {
  const enabled = ref(false);

  onMounted(() => {
    enabled.value = localStorage.getItem("theme") === "dark" ? true : false;
  });

  const toggleTheme = () => {
    enabled.value = !enabled.value;
    localStorage.setItem("theme", enabled.value ? "dark" : "light");
    setTheme();
  };

  function setTheme() {
    const theme = localStorage.getItem("theme");
    if (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.setAttribute("data-theme", "dark");
      //   enabled.value = true
    } else {
      document.documentElement.removeAttribute("data-theme");
      //   enabled.value = false
    }
  }

  return {
    enabled,
    toggleTheme,
    setTheme,
  };
}
