(() => {
  const NAV_ITEMS = [
    { key: "roam", label: "漫游", icon: "explore", target: "_1/code.html" },
    { key: "encounter", label: "奇遇", icon: "auto_awesome", target: "npc/code.html" },
    { key: "market", label: "市集", icon: "storefront", target: "_4/code.html" },
    { key: "mine", label: "我的", icon: "person", target: "_5/code.html" },
  ];

  const ACTIVE_COLOR = "#3e6842";
  const INACTIVE_COLOR = "#b8b8b8";

  function injectStyles() {
    if (document.getElementById("common-bottom-nav-style")) return;
    const style = document.createElement("style");
    style.id = "common-bottom-nav-style";
    style.textContent = `
      .common-bottom-nav {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 60;
        padding: 10px 18px calc(14px + env(safe-area-inset-bottom));
        background: rgba(255, 248, 243, 0.9);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border-top: 1px solid rgba(66, 73, 64, 0.12);
        box-shadow: 0 -4px 20px rgba(62, 104, 66, 0.05);
      }
      .common-bottom-nav__row {
        max-width: 640px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        align-items: center;
        justify-items: center;
        column-gap: 4px;
      }
      .common-bottom-nav__item {
        width: 100%;
        min-width: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        border-radius: 14px;
        padding: 6px 4px;
        color: ${INACTIVE_COLOR};
        transition: all 0.2s ease;
      }
      .common-bottom-nav__item:active {
        transform: scale(0.95);
      }
      .common-bottom-nav__item .material-symbols-outlined {
        font-size: 24px;
        line-height: 1;
      }
      .common-bottom-nav__label {
        margin-top: 4px;
        font-size: 12px;
        font-weight: 600;
        line-height: 1.1;
        letter-spacing: 0.01em;
      }
      .common-bottom-nav__item.is-active {
        color: ${ACTIVE_COLOR};
      }
      .common-bottom-nav__item.is-active .material-symbols-outlined {
        font-variation-settings: "FILL" 1, "wght" 500, "GRAD" 0, "opsz" 24;
      }
    `;
    document.head.appendChild(style);
  }

  function getActiveKey(explicitKey) {
    if (explicitKey) return explicitKey;
    const path = window.location.pathname.replace(/\\/g, "/");
    if (path.includes("/_1/")) return "roam";
    if (path.includes("/_4/")) return "market";
    if (path.includes("/_5/")) return "mine";
    if (path.includes("/npc/")) return "encounter";
    if (path.includes("/_3/")) return "encounter";
    return "roam";
  }

  function resolveHref(targetPath) {
    const currentPath = window.location.pathname.replace(/\\/g, "/");
    const rootPath = currentPath.replace(/\/[^/]+\/[^/]+$/, "/");
    const rootUrl = `${window.location.origin}${rootPath}`;
    return new URL(targetPath, rootUrl).pathname;
  }

  function createItem(item, activeKey) {
    const isActive = item.key === activeKey;
    const href = resolveHref(item.target);
    return `
      <a class="common-bottom-nav__item ${isActive ? "is-active" : ""}" href="${href}">
        <span class="material-symbols-outlined">${item.icon}</span>
        <span class="common-bottom-nav__label">${item.label}</span>
      </a>
    `;
  }

  function renderBottomNav(targetSelector = "#common-bottom-nav", activeKey) {
    injectStyles();
    const target = document.querySelector(targetSelector);
    if (!target) return;

    const current = getActiveKey(activeKey);
    target.innerHTML = `
      <nav class="common-bottom-nav" aria-label="底部导航">
        <div class="common-bottom-nav__row">
          ${NAV_ITEMS.map((item) => createItem(item, current)).join("")}
        </div>
      </nav>
    `;

    document.body.style.paddingBottom = "108px";
  }

  window.renderBottomNav = renderBottomNav;
})();
