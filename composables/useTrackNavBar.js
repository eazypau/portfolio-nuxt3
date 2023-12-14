import { ref } from "vue";

let currentOffsetHeight = ref(0);
export default () => {
  const trackNavBarPosition = (domElementName) => {
    const NavDom = document.getElementById(domElementName);
    if (NavDom) currentOffsetHeight.value = NavDom.offsetTop;
  };
  return { currentOffsetHeight, trackNavBarPosition };
};
