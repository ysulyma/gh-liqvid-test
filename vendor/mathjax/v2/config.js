(() => {
  MathJax.Ajax.config.path["Extra"] = "/vendor/mathjax/v2";
  MathJax.Ajax.config.path["img"] =
    "https://cdn.rawgit.com/pkra/mathjax-img/1.0.0/";

  MathJax.Hub.Config({
    "HTML-CSS": {
      availableFonts: ["TeX"], // STIX fonts (really anything other than TeX) are absolutely hideous
      EqnChunk: 50,
      EqnChunkDelay: 100,
      EqnChunkFactor: 1.5,
    },

    // configure jaxes
    jax: ["input/TeX", "output/HTML-CSS"],
    messageStyle: "none",
    showMathMenu: false,
    showMathMenuMSIE: false,
    // make mostly transparent
    showProcessingMessages: false,

    skipStartupTypeset: true,
    TeX: {
      equationNumbers: {
        autoNumber: "AMS",
      },
      extensions: [
        "AMSmath.js",
        "AMSsymbols.js",
        "action.js",
        "begingroup.js",
        "cancel.js",
        "color.js",
        "[img]/img.js",
        "[Extra]/xypic.js",
        "[Extra]/annotations.js",
        "[Extra]/brutalnewcommand.js",
        "[Extra]/forminput.js",
      ],
    },
    tex2jax: {
      displayMath: [["\\[", "\\]"]],
      inlineMath: [["\\(", "\\)"]],
    },
  });
  MathJax.Hub.config.extensions.push("[Extra]/load-head.js");

  MathJax.Hub.processSectionDelay = 0;

  MathJax.Ajax.loadComplete("[Extra]/config.js");
})();
