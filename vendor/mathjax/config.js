(() => {
  const currentDir = new URL(document.currentScript.src).pathname
    .split("/")
    .slice(0, -1)
    .join("/");

  window.MathJax = {
    loader: {
      load: [
        // "[custom]/annotations.js",
        // "[custom]/brutalnewcommand.js",
        // "[custom]/forminput.js",
        // "[custom]/load-head.js",
        "[tex]/color",
        "[tex]/html",
        "[custom]/xypic.js",
      ],
      paths: {
        custom: currentDir,
        // xyjax: "https://cdn.jsdelivr.net/gh/sonoisa/XyJax-v3@3.0.1/build/",
      },
    },
    startup: {
      //
      ready() {
        // load macros
        MathJax.startup.defaultReady();
        // const { STATE } = MathJax._.core.MathItem;
        const defs = document.querySelector('script[type="application/x-tex"]');
        MathJax.tex2mml(defs?.textContent || "");
      },
      typeset: false, // don't perform initial typeset
    },
    svg: {
      fontCache: "global",
    },
    tex: {
      displayMath: [["\\[", "\\]"]],
      inlineMath: [["\\(", "\\)"]],
      packages: {
        "[+]": [
          // "annotate",
          // "brutalnewcommand",
          "color",
          "html",
          // "input",
          // "load-head",
          "xypic",
        ],
      },
    },
  };
})();
