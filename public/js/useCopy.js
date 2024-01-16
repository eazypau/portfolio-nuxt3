const currentUrl = window.location.href;

document.addEventListener("DOMContentLoaded", function () {
  if (!currentUrl.includes("eazypau")) {
    setInterval(() => {
      const headerEl = document.querySelector("div#__nuxt div");
      const footerEl = document.querySelector("footer .copyright");
      const copyContainer = document.createElement("div");
      const createCopy = `<p class="smth-fun">Inspired by Eazypau</p>`;
      copyContainer.innerHTML = createCopy;

      if (footerEl && !footerEl.querySelector("p.smth-fun"))
        footerEl.appendChild(copyContainer);
      if (headerEl && !headerEl.querySelector("p.smth-fun"))
        headerEl.appendChild(copyContainer);
    }, 500);
  }
});
