document.addEventListener("DOMContentLoaded", function () {
  const currentUrl = window.location.href;
  if (!currentUrl.includes("eazypau")) {
    setInterval(() => {
      const headerEl = document.querySelector("div#__nuxt div");
      const footerEl = document.querySelector("footer .copyright");
      const copyContainer = document.createElement("div");
      const createCopy = `<p class="smth-fun">Inspired by <strong>Po Yi Zhi</strong></p>`;
      copyContainer.innerHTML = createCopy;

      if (footerEl && !footerEl.querySelector("p.smth-fun"))
        footerEl.appendChild(copyContainer);
      if (headerEl && !headerEl.querySelector("p.smth-fun"))
        headerEl.appendChild(copyContainer);
    }, 500);
  }
});
