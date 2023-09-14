import { ref } from "vue";

let currentOffsetHeight = ref(0);
export default () => {
  const trackNavBarPosition = (domElementName) => {
    const NavDom = document.getElementById(domElementName);
    currentOffsetHeight.value = NavDom.offsetTop;
  };
  return { currentOffsetHeight, trackNavBarPosition };
};
