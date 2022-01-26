export default () => {
  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };
  return { scrollTop };
};
