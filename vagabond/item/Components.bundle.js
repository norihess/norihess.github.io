(function(){
// Components bundle — 10 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 8925:1597 Facebook (2 variants)
const __venc_Facebook = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Facebook = p => "type=" + __venc_Facebook(p.type);
function Facebook(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 512,
      height: 512,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 512,
      height: 512,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 512,
    height: 508.890,
    viewBox: "0 0 512 508.890",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 512,
      height: 508.89,
      color: "rgb(24,119,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 512 256 C 512 114.615 397.385 0 256 0 C 114.615 0 0 114.615 0 256 C 0 383.777 93.616 489.685 216 508.89 L 216 330 L 151 330 L 151 256 L 216 256 L 216 199.6 C 216 135.44 254.219 100 312.695 100 C 340.703 100 370 105 370 105 L 370 168 L 337.719 168 C 305.917 168 296 187.734 296 207.979 L 296 256 L 367 256 L 355.65 330 L 296 330 L 296 508.89 C 418.384 489.685 512 383.777 512 256 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 219,
    height: 412,
    viewBox: "0 0 219 412",
    fill: "none",
    style: {
      position: "absolute",
      left: 151,
      top: 100,
      width: 219,
      height: 412,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 204.65 230 L 216 156 L 145 156 L 145 107.979 C 145 87.733 154.917 68 186.719 68 L 219 68 L 219 5 C 219 5 189.703 0 161.695 0 C 103.219 0 65 35.44 65 99.6 L 65 156 L 0 156 L 0 230 L 65 230 L 65 408.89 C 78.033 410.935 91.392 412 105 412 C 118.608 412 131.966 410.935 145 408.89 L 145 230 L 204.65 230 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 512,
      height: 512,
      overflow: "hidden",
      position: "relative",
      color: "rgb(24,119,242)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 512,
    height: 508.890,
    viewBox: "0 0 512 508.890",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 2,
      width: 512,
      height: 508.89
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 256 0 C 397.385 0 512 114.615 512 256 C 512 383.777 418.384 489.685 296 508.89 L 296 330 L 355.65 330 L 367 256 L 296 256 L 296 207.979 C 296 187.734 305.917 168 337.719 168 L 370 168 L 370 105 C 370 105 340.703 100 312.695 100 C 254.219 100 216 135.44 216 199.6 L 216 256 L 151 256 L 151 330 L 216 330 L 216 508.89 C 93.616 489.685 0 383.777 0 256 C 0 114.615 114.615 0 256 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Type=Default
    "type=default": __body0,
    // figma: Type=Flat
    "type=flat": __body1
  };
  return (__impls[__vkey_Facebook(props)] ?? __body0)();
}

// figma node: 8999:890 iconSet (13 variants)
const __venc_IconSet = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconSet = p => "icon=" + __venc_IconSet(p.icon);
function IconSet(_p = {}) {
  const props = {
    ..._p,
    icon: _p.icon ?? "mapMarker"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 100,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: 0,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 45.533,
    height: 60,
    viewBox: "0 0 45.533 60",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.767 0 C 10.192 0 0 10.192 0 22.767 C 0 42.154 22.767 60 22.767 60 C 22.767 60 45.533 42.154 45.533 22.767 C 45.533 10.192 35.342 0 22.767 0 Z M 22.767 32.499 C 17.013 32.499 12.349 27.835 12.349 22.081 C 12.349 16.328 17.013 11.664 22.767 11.664 C 28.521 11.664 33.185 16.328 33.185 22.081 C 33.185 27.835 28.521 32.499 22.767 32.499 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 100,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: 0,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 45.568,
    height: 60,
    viewBox: "0 0 45.568 60",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 45.568 57.176 C 45.568 55.617 44.304 54.353 42.745 54.353 L 42.545 54.353 C 42.197 45.848 37.27 35.506 28.888 30.091 L 28.888 30.082 L 28.751 30 L 28.888 29.909 C 37.27 24.494 42.197 14.152 42.545 5.647 L 42.745 5.647 C 44.304 5.647 45.568 4.383 45.568 2.824 L 45.568 2.823 C 45.568 1.264 44.304 0 42.745 0 L 2.823 0 C 1.264 0 0 1.264 0 2.823 C 0 4.383 1.264 5.647 2.823 5.647 L 3.022 5.647 C 3.37 14.152 8.297 24.494 16.679 29.918 L 16.815 30 L 16.679 30.091 C 8.297 35.506 3.369 45.848 3.022 54.353 L 2.823 54.353 C 1.264 54.353 0 55.617 0 57.176 C 0 58.736 1.264 60 2.823 60 L 42.745 60 C 44.304 60 45.568 58.736 45.568 57.176 L 45.568 57.176 Z M 10.406 13.873 C 10.288 13.591 10.324 13.273 10.488 13.018 C 10.661 12.764 10.942 12.618 11.243 12.618 L 34.325 12.618 C 34.625 12.618 34.906 12.764 35.079 13.018 C 35.243 13.273 35.279 13.591 35.161 13.873 C 34.288 16.009 32.997 18.045 31.315 19.909 C 31.315 19.918 31.306 19.927 31.297 19.927 C 29.77 21.546 28.17 22.955 26.543 24.109 C 26.233 24.327 25.924 24.527 25.624 24.736 L 23.279 26.255 C 23.133 26.355 22.961 26.4 22.788 26.4 C 22.615 26.4 22.442 26.355 22.297 26.255 L 19.997 24.773 C 15.433 21.818 12.115 18.054 10.406 13.873 L 10.406 13.873 Z M 35.079 52.428 C 34.906 52.682 34.625 52.837 34.324 52.837 L 11.251 52.837 C 10.942 52.837 10.661 52.682 10.497 52.428 C 10.324 52.182 10.297 51.864 10.406 51.582 C 12.124 47.4 15.442 43.628 19.997 40.682 L 22.288 39.201 C 22.588 39.01 22.979 39.01 23.279 39.201 L 25.57 40.682 C 30.134 43.628 33.443 47.401 35.161 51.582 C 35.279 51.864 35.243 52.182 35.079 52.428 L 35.079 52.428 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 100,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: 0,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 60,
    height: 60,
    viewBox: "0 0 60 60",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 30 0 C 46.569 0 60 13.431 60 30 C 60 46.568 46.569 60 30 60 C 13.432 60 0 46.567 0 30 C 0 13.431 13.433 0 30 0 Z M 19.025 16.388 C 17.571 16.388 16.388 17.571 16.388 19.025 L 16.388 40.974 C 16.388 42.428 17.571 43.611 19.025 43.611 L 40.974 43.611 C 42.428 43.611 43.611 42.428 43.611 40.974 L 43.611 19.025 C 43.611 17.571 42.428 16.388 40.974 16.388 L 19.025 16.388 Z M 32.205 25.089 L 32.204 25.09 L 37.149 30.035 L 34.949 32.236 L 31.527 28.814 L 31.527 37.11 L 28.415 37.11 L 28.415 28.88 L 25.057 32.236 L 22.856 30.036 L 27.802 25.09 L 27.801 25.089 L 30.002 22.889 L 30.003 22.89 L 30.004 22.889 L 32.205 25.089 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 100,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: 0,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 49.999,
    height: 60,
    viewBox: "0 0 49.999 60",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 25 0 C 17.637 0 11.667 5.97 11.667 13.333 C 11.667 20.696 17.637 26.666 25 26.666 C 32.363 26.666 38.333 20.696 38.333 13.333 C 38.333 5.97 32.363 0 25 0 Z M 25 30 C 11.149 30 0 33.854 0 44.801 L 0 59.915 C 17.5 59.915 34.993 60.107 49.999 59.915 L 49.999 44.801 C 49.999 33.854 38.85 30 25 30 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 100,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: 0,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 82.500,
    height: 53.364,
    viewBox: "0 0 82.500 53.364",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 41.242 0 C 51.326 0 56.512 12.88 49.374 20.493 C 42.194 28.153 29.808 22.73 29.808 12.038 C 29.808 5.563 34.78 0 41.242 0 Z M 20.458 5.699 C 22.091 5.699 23.63 6.114 24.986 6.855 C 23.354 12.335 24.396 18.334 27.861 22.906 C 21.836 30.09 10.596 25.533 10.596 16.062 C 10.596 10.485 14.892 5.698 20.458 5.698 L 20.458 5.699 Z M 62.02 5.699 C 60.388 5.699 58.849 6.114 57.492 6.855 C 59.124 12.335 58.083 18.338 54.618 22.906 C 58.409 27.42 65.017 27.624 69.04 23.336 C 75.193 16.774 70.712 5.699 62.02 5.699 L 62.02 5.699 Z M 13.824 49.294 C 13.824 42.447 13.649 37.46 18.106 31.421 L 11.032 31.421 C 4.832 31.421 0 36.787 0 43.055 L 0 47.848 C 0 48.614 0.541 49.294 1.271 49.294 L 13.824 49.294 Z M 64.372 31.421 C 68.828 37.46 68.656 42.446 68.656 49.294 L 81.206 49.294 C 81.936 49.294 82.477 48.614 82.477 47.848 C 82.477 42.822 82.989 38.752 79.201 34.797 C 77.204 32.714 74.459 31.422 71.444 31.422 L 64.372 31.421 Z M 49.219 28.98 L 33.262 28.98 C 25.236 28.98 19.323 36.44 19.323 44.619 L 19.323 50.747 C 19.323 52.064 20.2 53.364 21.442 53.364 L 61.039 53.364 C 62.281 53.364 63.158 52.068 63.158 50.747 C 63.158 44.157 63.767 38.759 58.977 33.479 C 56.457 30.701 52.999 28.979 49.219 28.979 L 49.219 28.98 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 100,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: 0,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 40.997,
    height: 41,
    viewBox: "0 0 40.997 41",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 40.174 25.01 C 41.081 25.688 41.266 26.974 40.585 27.879 C 40.184 28.417 39.569 28.7 38.944 28.7 C 38.516 28.7 38.085 28.565 37.718 28.288 L 30.064 22.55 L 24.186 22.55 L 27.505 27.889 L 35.556 30.877 C 36.617 31.271 37.159 32.451 36.765 33.511 C 36.373 34.572 35.191 35.12 34.13 34.72 L 31.036 33.573 L 32.483 35.902 C 33.081 36.865 32.785 38.127 31.824 38.727 C 31.486 38.934 31.113 39.036 30.744 39.036 C 30.06 39.036 29.39 38.694 29.001 38.069 L 27.08 34.979 L 26.632 39.169 C 26.521 40.22 25.631 41 24.597 41 C 24.526 41 24.451 40.996 24.376 40.988 C 23.252 40.869 22.435 39.857 22.556 38.733 L 23.563 29.322 L 20.498 24.382 L 17.429 29.318 L 18.436 38.728 C 18.557 39.853 17.743 40.865 16.616 40.984 C 16.541 40.992 16.468 40.996 16.395 40.996 C 15.36 40.996 14.472 40.216 14.36 39.165 L 13.913 34.974 L 11.991 38.066 C 11.603 38.69 10.934 39.032 10.248 39.032 C 9.879 39.032 9.504 38.932 9.168 38.723 C 8.207 38.123 7.911 36.861 8.509 35.898 L 9.956 33.569 L 6.862 34.718 C 5.802 35.114 4.62 34.572 4.228 33.509 C 3.834 32.449 4.376 31.269 5.436 30.875 L 13.49 27.887 L 16.808 22.549 L 10.932 22.549 L 3.28 28.289 C 2.911 28.565 2.479 28.7 2.052 28.7 C 1.43 28.7 0.813 28.417 0.411 27.879 C -0.269 26.974 -0.086 25.689 0.821 25.01 L 4.101 22.551 L 2.05 22.549 C 0.919 22.549 0 21.63 0 20.498 C 0 19.366 0.919 18.448 2.05 18.448 L 4.101 18.448 L 0.821 15.99 C -0.086 15.312 -0.269 14.026 0.411 13.121 C 1.09 12.218 2.373 12.03 3.28 12.712 L 10.932 18.45 L 16.81 18.45 L 13.492 13.112 L 5.436 10.122 C 4.376 9.728 3.834 8.548 4.228 7.487 C 4.622 6.426 5.802 5.888 6.862 6.278 L 9.956 7.427 L 8.561 5.183 C 7.963 4.222 8.257 2.958 9.22 2.36 C 10.177 1.761 11.445 2.057 12.043 3.019 L 13.911 6.025 L 14.358 1.834 C 14.478 0.708 15.467 -0.119 16.614 0.014 C 17.741 0.133 18.555 1.144 18.434 2.27 L 17.427 11.68 L 20.498 16.617 L 23.567 11.68 L 22.56 2.27 C 22.439 1.144 23.254 0.133 24.38 0.014 C 25.521 -0.107 26.517 0.708 26.636 1.834 L 27.083 6.023 L 28.951 3.019 C 29.551 2.059 30.813 1.763 31.776 2.36 C 32.737 2.958 33.031 4.222 32.435 5.183 L 31.04 7.428 L 34.134 6.279 C 35.193 5.885 36.376 6.427 36.768 7.487 C 37.162 8.55 36.62 9.73 35.56 10.122 L 27.506 13.11 L 24.188 18.448 L 30.066 18.448 L 37.718 12.71 C 38.621 12.028 39.905 12.214 40.587 13.12 C 41.267 14.025 41.083 15.31 40.176 15.988 L 36.897 18.448 L 38.946 18.452 C 40.08 18.452 40.996 19.371 40.996 20.502 C 40.996 21.634 40.08 22.553 38.946 22.553 L 36.895 22.553 L 40.174 25.01 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 100,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: 0,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 55.810,
    height: 66,
    viewBox: "0 0 55.810 66",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 27.875 0 C 34.362 -0.006 40.648 2.248 45.653 6.374 C 50.659 10.501 54.07 16.241 55.302 22.609 C 56.534 28.978 55.509 35.578 52.402 41.272 C 49.297 46.967 44.304 51.403 38.283 53.815 L 29.906 64.984 C 29.427 65.624 28.674 66 27.875 66 L 27.769 66 C 26.932 65.965 26.167 65.519 25.723 64.81 L 19.26 54.47 C 12.946 52.409 7.574 48.166 4.107 42.501 C 0.64 36.836 -0.695 30.121 0.343 23.562 C 1.381 17.001 4.722 11.026 9.768 6.708 C 14.814 2.39 21.234 0.012 27.875 0 Z M 35.49 13.962 C 34.481 13.962 33.512 14.363 32.798 15.077 C 32.084 15.791 31.683 16.76 31.683 17.77 L 31.683 24.116 L 24.068 24.116 L 24.068 17.77 C 24.067 16.409 23.341 15.152 22.163 14.472 C 20.985 13.792 19.533 13.792 18.356 14.472 C 17.178 15.152 16.452 16.409 16.452 17.77 L 16.452 38.078 C 16.452 39.439 17.178 40.696 18.356 41.376 C 19.533 42.056 20.985 42.056 22.163 41.376 C 23.341 40.696 24.067 39.439 24.068 38.078 L 24.068 31.731 L 31.683 31.731 L 31.683 38.078 C 31.683 39.439 32.409 40.696 33.587 41.376 C 34.765 42.056 36.217 42.056 37.395 41.376 C 38.573 40.696 39.299 39.439 39.299 38.078 L 39.299 17.77 C 39.299 16.76 38.897 15.791 38.183 15.077 C 37.469 14.363 36.5 13.962 35.49 13.962 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 100,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: 0,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 83.500,
    height: 66.800,
    viewBox: "0 0 83.500 66.800",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 81.412 0 L 77.237 0 C 76.085 0 75.15 0.934 75.15 2.087 L 75.15 16.7 L 66.8 16.7 L 66.8 12.525 C 66.8 5.618 61.182 0 54.275 0 L 12.525 0 C 5.618 0 0 5.618 0 12.525 L 0 25.05 C 0 31.957 5.618 37.575 12.525 37.575 L 20.875 37.575 C 23.18 37.575 25.05 35.705 25.05 33.4 C 25.05 28.795 28.795 25.05 33.4 25.05 C 38.005 25.05 41.75 28.795 41.75 33.4 C 41.75 35.705 43.62 37.575 45.925 37.575 L 54.275 37.575 C 61.182 37.575 66.8 31.957 66.8 25.05 L 75.15 25.05 L 75.15 37.573 C 75.15 44.491 69.542 50.098 62.625 50.098 L 45.155 50.098 C 43.426 45.25 38.835 41.75 33.4 41.75 C 26.493 41.75 20.875 47.369 20.875 54.275 C 20.875 61.182 26.493 66.8 33.4 66.8 C 38.836 66.8 43.428 63.298 45.157 58.449 L 62.625 58.449 C 74.154 58.449 83.5 49.102 83.5 37.574 L 83.5 2.088 C 83.5 0.935 82.565 0 81.412 0 L 81.412 0 Z M 58.45 25.05 C 58.45 27.352 56.577 29.225 54.275 29.225 L 49.572 29.225 C 47.713 22.031 41.167 16.7 33.4 16.7 C 25.632 16.7 19.087 22.031 17.227 29.225 L 12.524 29.225 C 10.223 29.225 8.349 27.352 8.349 25.05 L 8.349 12.525 C 8.349 10.223 10.223 8.35 12.524 8.35 L 54.274 8.35 C 56.576 8.35 58.449 10.223 58.449 12.525 L 58.45 25.05 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 100,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: 0,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 56.516,
    height: 82,
    viewBox: "0 0 56.516 82",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.005 33.253 L 0.983 2.512 C 1.016 1.835 1.308 1.197 1.798 0.729 C 2.289 0.262 2.941 0.001 3.619 0.002 C 4.297 0.001 4.949 0.261 5.44 0.729 C 5.93 1.197 6.222 1.835 6.255 2.512 L 6.949 22.593 C 6.956 23.118 7.15 23.624 7.497 24.018 C 7.844 24.412 8.32 24.67 8.84 24.744 C 9.424 24.807 10.008 24.625 10.452 24.241 C 10.896 23.857 11.161 23.305 11.183 22.719 L 11.869 2.638 L 11.869 2.638 C 11.879 2.031 12.092 1.446 12.474 0.976 C 12.857 0.505 13.386 0.177 13.978 0.044 C 14.326 -0.015 14.683 -0.015 15.032 0.044 C 15.623 0.177 16.153 0.505 16.535 0.976 C 16.918 1.446 17.131 2.031 17.14 2.638 L 17.826 22.719 C 17.848 23.305 18.113 23.857 18.558 24.241 C 19.002 24.625 19.586 24.807 20.169 24.744 C 20.689 24.67 21.166 24.412 21.512 24.018 C 21.859 23.624 22.054 23.118 22.06 22.593 L 22.746 2.512 C 22.779 1.835 23.071 1.197 23.561 0.729 C 24.052 0.262 24.704 0.001 25.382 0.002 C 26.06 0.001 26.712 0.261 27.203 0.729 C 27.693 1.197 27.985 1.835 28.018 2.512 L 28.996 33.219 C 29.047 34.679 28.707 36.126 28.011 37.41 C 27.315 38.694 26.289 39.769 25.039 40.524 L 20.177 43.511 L 20.177 79.105 C 20.177 79.873 19.873 80.609 19.33 81.152 C 18.787 81.695 18.05 82 17.282 82 L 11.652 82 C 10.884 82 10.147 81.695 9.604 81.152 C 9.062 80.609 8.757 79.873 8.757 79.105 L 8.757 43.453 L 3.996 40.566 C 2.738 39.815 1.704 38.74 1.002 37.454 C 0.3 36.168 -0.044 34.718 0.005 33.253 L 0.005 33.253 Z M 38.376 52.497 L 45.07 52.497 L 45.07 79.105 C 45.07 79.877 45.378 80.617 45.927 81.161 C 46.475 81.705 47.218 82.007 47.99 82 L 53.621 82 C 55.22 82 56.516 80.703 56.516 76.335 L 56.516 2.042 L 56.516 2.042 C 56.461 1.288 56.015 0.617 55.34 0.274 C 54.666 -0.068 53.861 -0.032 53.22 0.369 C 48.033 3.613 43.756 8.122 40.79 13.473 C 37.825 18.824 36.269 24.841 36.268 30.959 L 36.268 50.429 C 36.268 50.989 36.49 51.525 36.885 51.92 C 37.281 52.316 37.817 52.538 38.376 52.538 L 38.376 52.497 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 100,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: 0,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 73.749,
    height: 59,
    viewBox: "0 0 73.749 59",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 31.344 7.376 C 31.712 7.376 32.078 7.385 32.442 7.404 C 31.141 9.662 30.226 12.172 29.79 14.843 C 23.75 15.568 18.99 20.466 18.482 26.568 C 18.352 28.137 17.239 29.451 15.712 29.837 C 10.918 31.05 7.375 35.397 7.375 40.563 C 7.375 46.672 12.328 51.625 18.438 51.625 L 55.312 51.625 C 61.421 51.625 66.374 46.672 66.374 40.563 C 66.374 38.867 65.993 37.26 65.311 35.823 C 67.346 34.219 69.093 32.264 70.461 30.05 C 72.534 33.031 73.749 36.654 73.749 40.563 C 73.749 50.745 65.494 59 55.312 59 L 18.438 59 C 8.255 59 0 50.745 0 40.563 C 0 32.833 4.754 26.221 11.494 23.479 C 13.421 14.281 21.574 7.376 31.344 7.376 Z M 51.625 0 C 61.807 0 70.062 8.255 70.062 18.438 C 70.061 28.62 61.807 36.875 51.625 36.875 C 41.443 36.875 33.188 28.62 33.188 18.438 C 33.188 8.255 41.442 0 51.625 0 Z M 51.625 7.375 C 45.515 7.375 40.563 12.328 40.563 18.438 C 40.563 24.547 45.515 29.5 51.625 29.5 C 57.734 29.5 62.686 24.547 62.687 18.438 C 62.687 12.328 57.734 7.375 51.625 7.375 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 100,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: 0,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 78,
    height: 78,
    viewBox: "0 0 78 78",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 39 0 C 60.505 0 78 17.495 78 39 C 78 60.505 60.505 78 39 78 C 17.495 78 0 60.504 0 39 C 0 17.496 17.495 0 39 0 Z M 39 8.195 C 22.013 8.195 8.195 22.015 8.195 39 C 8.195 55.985 22.013 69.805 39 69.805 C 55.987 69.805 69.805 55.987 69.805 39 C 69.805 22.013 55.987 8.195 39 8.195 Z M 38.463 19.35 C 40.726 19.35 42.56 21.184 42.56 23.447 L 42.56 38.388 L 49.342 38.388 C 51.605 38.388 53.439 40.222 53.439 42.485 C 53.439 44.749 51.605 46.583 49.342 46.583 L 38.463 46.583 C 36.2 46.583 34.365 44.749 34.365 42.485 L 34.365 23.447 C 34.365 21.184 36.2 19.35 38.463 19.35 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 100,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: 0,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 60,
    height: 60,
    viewBox: "0 0 60 60",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 51 5.262 L 57 5.262 C 58.657 5.262 60 6.605 60 8.262 L 60 57 C 60 58.657 58.657 60 57 60 L 3 60 C 1.343 60 0 58.657 0 57 L 0 8.262 C 0 6.605 1.343 5.262 3 5.262 L 9 5.262 L 9 3 C 9 1.343 10.343 0 12 0 C 13.657 0 15 1.343 15 3 L 15 5.262 L 45 5.262 L 45 3 C 45 1.343 46.343 0 48 0 C 49.657 0 51 1.343 51 3 L 51 5.262 Z M 5.455 19.091 L 5.455 54.545 L 54.546 54.545 L 54.546 19.091 L 5.455 19.091 Z M 10 25.167 L 20 25.167 L 20 35.119 L 10 35.119 L 10 25.167 Z M 10 40.095 L 20 40.095 L 20 50.048 L 10 50.048 L 10 40.095 Z M 40.009 25.167 L 50.009 25.167 L 50.009 35.119 L 40.009 35.119 L 40.009 25.167 Z M 40.009 40.095 L 50.009 40.095 L 50.009 50.048 L 40.009 50.048 L 40.009 40.095 Z M 25.009 25.167 L 35.009 25.167 L 35.009 35.119 L 25.009 35.119 L 25.009 25.167 Z M 25.009 40.095 L 35.009 40.095 L 35.009 50.048 L 25.009 50.048 L 25.009 40.095 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 100,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: 0,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 98.500,
    height: 41.420,
    viewBox: "0 0 98.500 41.420",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 74.512 15.349 L 64.21 1.262 C 63.579 0.421 62.738 0 61.687 0 L 27.205 0 C 25.523 0 24.051 1.472 24.051 3.154 C 24.051 4.836 25.523 6.308 27.205 6.308 L 30.149 6.308 C 30.359 6.308 30.779 6.518 30.779 6.728 L 32.462 21.446 C 32.462 21.656 32.251 22.077 32.041 22.077 C 22.79 23.759 15.431 25.441 12.908 26.702 C 12.698 26.702 12.698 26.912 12.698 26.912 L 6.6 36.584 C 6.6 36.794 6.39 36.794 6.18 36.794 L 0.503 36.794 C 0.082 36.794 -0.128 37.215 0.082 37.635 L 1.554 40.999 C 1.554 41.21 1.765 41.42 1.975 41.42 L 81.661 41.42 C 81.871 41.42 81.871 41.42 82.081 41.21 C 83.763 39.107 99.112 21.656 98.481 16.19 C 98.271 14.087 88.179 14.297 75.143 15.769 C 74.933 15.559 74.722 15.559 74.512 15.349 Z M 66.523 16.61 C 62.738 17.031 58.953 17.661 55.169 18.292 C 54.959 18.292 54.538 18.082 54.538 17.872 L 53.066 7.149 C 53.066 6.728 53.277 6.518 53.697 6.518 L 59.794 6.518 C 60.005 6.518 60.215 6.518 60.215 6.728 L 66.943 15.769 C 67.153 15.979 66.943 16.4 66.523 16.61 Z M 37.718 6.308 L 46.128 6.308 C 46.338 6.308 46.759 6.518 46.759 6.728 L 48.441 18.502 C 48.441 18.713 48.231 19.133 48.02 19.133 C 45.077 19.554 42.343 20.184 39.61 20.605 C 39.19 20.605 38.979 20.395 38.979 20.184 L 37.297 6.938 C 37.087 6.518 37.297 6.308 37.718 6.308 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: icon=mapMarker
    "icon=mapMarker": __body0,
    // figma: icon=duration
    "icon=duration": __body1,
    // figma: icon=pickup
    "icon=pickup": __body2,
    // figma: icon=user
    "icon=user": __body3,
    // figma: icon=users
    "icon=users": __body4,
    // figma: icon=snowflake
    "icon=snowflake": __body5,
    // figma: icon=hotel
    "icon=hotel": __body6,
    // figma: icon=snorkel
    "icon=snorkel": __body7,
    // figma: icon=food
    "icon=food": __body8,
    // figma: icon=sun
    "icon=sun": __body9,
    // figma: icon=clock
    "icon=clock": __body10,
    // figma: icon=calendar
    "icon=calendar": __body11,
    // figma: icon=boat
    "icon=boat": __body12
  };
  return (__impls[__vkey_IconSet(props)] ?? __body0)();
}

// figma node: 8925:1605 Instagram (2 variants)
const __venc_Instagram = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Instagram = p => "type=" + __venc_Instagram(p.type);
function Instagram(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 512,
      height: 512,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 512,
    height: 512,
    viewBox: "0 0 512 512",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 512,
      height: 512
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 124.541 256.001 C 124.541 183.397 183.397 124.541 256.001 124.541 C 328.603 124.541 387.459 183.397 387.459 256.001 C 387.459 328.603 328.603 387.459 256.001 387.459 C 183.397 387.459 124.541 328.603 124.541 256.001 Z M 256 341.333 C 208.871 341.333 170.667 303.129 170.667 256.001 C 170.667 208.871 208.871 170.667 256 170.667 C 303.128 170.667 341.333 208.871 341.333 256.001 C 341.333 303.129 303.128 341.333 256 341.333 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 392.653 150.066 C 409.62 150.066 423.374 136.313 423.374 119.347 C 423.374 102.38 409.62 88.626 392.653 88.626 C 375.688 88.626 361.934 102.38 361.934 119.347 C 361.934 136.313 375.688 150.066 392.653 150.066 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 256.001 0 C 186.475 0 177.757 0.295 150.452 1.541 C 123.203 2.783 104.594 7.111 88.31 13.44 C 71.476 19.981 57.2 28.735 42.967 42.967 C 28.735 57.2 19.981 71.476 13.44 88.31 C 7.111 104.594 2.783 123.203 1.541 150.452 C 0.295 177.757 0 186.475 0 256.001 C 0 325.525 0.295 334.243 1.541 361.548 C 2.783 388.797 7.111 407.406 13.44 423.69 C 19.981 440.524 28.735 454.8 42.967 469.033 C 57.2 483.265 71.476 492.019 88.31 498.561 C 104.594 504.889 123.203 509.217 150.452 510.459 C 177.757 511.705 186.475 512 256.001 512 C 325.525 512 334.243 511.705 361.548 510.459 C 388.797 509.217 407.406 504.889 423.69 498.561 C 440.524 492.019 454.8 483.265 469.033 469.033 C 483.265 454.8 492.019 440.524 498.561 423.69 C 504.889 407.406 509.217 388.797 510.459 361.548 C 511.705 334.243 512 325.525 512 256.001 C 512 186.475 511.705 177.757 510.459 150.452 C 509.217 123.203 504.889 104.594 498.561 88.31 C 492.019 71.476 483.265 57.2 469.033 42.967 C 454.8 28.735 440.524 19.981 423.69 13.44 C 407.406 7.111 388.797 2.783 361.548 1.541 C 334.243 0.295 325.525 0 256.001 0 Z M 256.001 46.126 C 324.355 46.126 332.452 46.387 359.446 47.619 C 384.406 48.757 397.961 52.927 406.982 56.433 C 418.931 61.077 427.459 66.625 436.417 75.583 C 445.375 84.541 450.923 93.069 455.567 105.019 C 459.073 114.039 463.243 127.594 464.381 152.554 C 465.613 179.548 465.874 187.645 465.874 256.001 C 465.874 324.355 465.613 332.452 464.381 359.446 C 463.243 384.406 459.073 397.961 455.567 406.981 C 450.923 418.931 445.375 427.459 436.417 436.417 C 427.459 445.375 418.931 450.923 406.982 455.567 C 397.961 459.073 384.406 463.243 359.446 464.381 C 332.456 465.613 324.36 465.874 256.001 465.874 C 187.64 465.874 179.545 465.613 152.554 464.381 C 127.594 463.243 114.039 459.073 105.019 455.567 C 93.069 450.923 84.541 445.375 75.584 436.417 C 66.626 427.459 61.077 418.931 56.433 406.981 C 52.927 397.961 48.757 384.406 47.619 359.446 C 46.387 332.452 46.126 324.355 46.126 256.001 C 46.126 187.645 46.387 179.548 47.619 152.554 C 48.757 127.594 52.927 114.039 56.433 105.019 C 61.077 93.069 66.625 84.541 75.584 75.583 C 84.541 66.625 93.069 61.077 105.019 56.433 C 114.039 52.927 127.594 48.757 152.554 47.619 C 179.548 46.387 187.645 46.126 256.001 46.126 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __impls = {
    // figma: Type=Default
    "type=default": __body0,
    // figma: Type=Flat
    "type=flat": __body0
  };
  return (__impls[__vkey_Instagram(props)] ?? __body0)();
}

// figma node: 8925:1753 Menu Items (4 variants)
const __venc_MenuItems2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_MenuItems2 = p => "menuItem=" + __venc_MenuItems2(p.menuItem);
function MenuItems2(_p = {}) {
  const props = {
    ..._p,
    menuItem: _p.menuItem ?? "nested"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 125,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "41px 10px 41px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 0px 7px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(1,11,19)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Nav Item"))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 125,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "41px 10px 41px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 0px 7px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "0px 5px 0px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(1,11,19)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Nav Item"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 6,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 6,
    viewBox: "0 0 6 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 0,
      width: 6,
      height: 6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.707 5.293 C -1.098 5.683 -1.098 6.317 -0.707 6.707 C -0.317 7.098 0.317 7.098 0.707 6.707 L 0 6 L -0.707 5.293 Z M 6.707 0.707 C 7.098 0.317 7.098 -0.317 6.707 -0.707 C 6.317 -1.098 5.683 -1.098 5.293 -0.707 L 6 0 L 6.707 0.707 Z M 0 6 L 0.707 6.707 L 6.707 0.707 L 6 0 L 5.293 -0.707 L -0.707 5.293 L 0 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 6,
    viewBox: "0 0 6 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.293 6.707 C 5.683 7.098 6.317 7.098 6.707 6.707 C 7.098 6.317 7.098 5.683 6.707 5.293 L 6 6 L 5.293 6.707 Z M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 6 6 L 6.707 5.293 L 0.707 -0.707 L 0 0 L -0.707 0.707 L 5.293 6.707 L 6 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 125,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "41px 10px 41px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(242,71,35)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "7px 0px 7px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(1,11,19)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Nav Item")), /*#__PURE__*/React.createElement("svg", {
    height: 2,
    viewBox: "0 -1 94 2",
    fill: "none",
    style: {
      position: "relative",
      height: 2,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1 L 0 0 L 94 0 L 94 -1 L 94 -2 L 0 -2 L 0 -1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 125,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "41px 10px 41px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 38,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "7px 0px 7px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "0px 5px 0px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(1,11,19)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Nav Item"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 6,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 6,
    viewBox: "0 0 6 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 0,
      width: 6,
      height: 6,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.707 5.293 C -1.098 5.683 -1.098 6.317 -0.707 6.707 C -0.317 7.098 0.317 7.098 0.707 6.707 L 0 6 L -0.707 5.293 Z M 6.707 0.707 C 7.098 0.317 7.098 -0.317 6.707 -0.707 C 6.317 -1.098 5.683 -1.098 5.293 -0.707 L 6 0 L 6.707 0.707 Z M 0 6 L 0.707 6.707 L 6.707 0.707 L 6 0 L 5.293 -0.707 L -0.707 5.293 L 0 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 6,
    viewBox: "0 0 6 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 6,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.293 6.707 C 5.683 7.098 6.317 7.098 6.707 6.707 C 7.098 6.317 7.098 5.683 6.707 5.293 L 6 6 L 5.293 6.707 Z M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 6 6 L 6.707 5.293 L 0.707 -0.707 L 0 0 L -0.707 0.707 L 5.293 6.707 L 6 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 -1 121 2",
    fill: "none",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      color: "rgb(242,71,35)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1 L 0 0 L 121 0 L 121 -1 L 121 -2 L 0 -2 L 0 -1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Menu Item=Default
    "menuItem=default": __body0,
    // figma: Menu Item=Nested
    "menuItem=nested": __body1,
    // figma: Menu Item=Active
    "menuItem=active": __body2,
    // figma: Menu Item=Active - Nested
    "menuItem=active - nested": __body3
  };
  return (__impls[__vkey_MenuItems2(props)] ?? __body1)();
}

// figma node: 8925:1610 Tripadvisor (2 variants)
const __venc_Tripadvisor = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Tripadvisor = p => "type=" + __venc_Tripadvisor(p.type);
function Tripadvisor(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 512,
      height: 512,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 104.556,
      width: 505.987,
      height: 299.983,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 326.875,
    height: 238.098,
    viewBox: "0 0 326.875 238.098",
    fill: "none",
    style: {
      position: "absolute",
      left: 87.326,
      top: 5.278,
      width: 326.875,
      height: 238.098,
      color: "rgb(250,196,21)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 53.914 C 47.449 47.793 182.066 43.576 145.185 238.098 L 187.017 234.694 C 168.693 114.791 207.022 53.654 326.875 47.793 C 128.093 -62.284 14.916 51.988 0 53.914 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 227.803,
    height: 227.814,
    viewBox: "0 0 227.803 227.814",
    fill: "none",
    style: {
      position: "absolute",
      left: 265.301,
      top: 59.186,
      width: 227.803,
      height: 227.814,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.082 153.385 C 28.884 212.374 94.376 242.522 153.367 220.724 C 212.357 198.926 242.509 133.436 220.715 74.444 C 198.922 15.452 133.434 -14.705 74.441 7.084 C 15.451 28.895 -14.701 94.386 7.082 153.385 L 7.082 153.385 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.856,
      top: 58.748,
      width: 227.797,
      height: 227.797,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 104.068,
      top: 150.478,
      width: 42.106,
      height: 42.106,
      borderRadius: "50%",
      backgroundColor: "rgb(238,105,70)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 357.885,
      top: 150.487,
      width: 42.088,
      height: 42.088,
      borderRadius: "50%",
      backgroundColor: "rgb(0,175,135)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 505.987,
    height: 299.983,
    viewBox: "0 0 505.987 299.983",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 505.987,
      height: 299.983,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 505.767 47.002 C 494.586 62.307 486.158 79.444 480.861 97.643 C 522.317 153.235 511.349 231.83 456.257 273.947 C 401.164 316.064 322.444 306.035 279.672 251.449 L 252.458 292.143 L 225.504 251.788 C 182.486 305.601 104.318 315.103 49.66 273.163 C -4.998 231.224 -16.053 153.261 24.791 97.779 C 19.465 79.749 11.08 62.768 0 47.579 L 79.311 47.534 C 131.189 15.254 191.336 -1.236 252.423 0.072 C 312.048 -0.991 370.699 15.291 421.244 46.937 L 505.767 47.002 Z M 252.956 163.437 C 257.729 98.924 310.503 48.462 375.165 46.584 C 336.443 29.841 294.605 21.514 252.423 22.153 C 210.186 21.743 168.303 29.887 129.296 46.094 C 194.602 47.482 248.148 98.294 252.956 163.437 Z M 126.758 273.724 C 85.867 273.728 49.001 249.098 33.352 211.32 C 17.703 173.541 26.354 130.056 55.27 101.144 C 84.187 72.232 127.673 63.587 165.449 79.241 C 203.225 94.895 227.85 131.765 227.84 172.656 C 227.766 228.449 182.551 273.658 126.758 273.724 Z M 284.364 208.153 C 303.723 260.515 361.841 287.293 414.222 267.987 C 466.598 248.654 493.387 190.525 474.06 138.148 C 454.732 85.77 396.606 58.975 344.226 78.298 C 291.847 97.62 265.046 155.744 284.364 208.125 L 284.364 208.153 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 125.111,
    height: 125.111,
    viewBox: "0 0 125.111 125.111",
    fill: "none",
    style: {
      position: "absolute",
      left: 62.548,
      top: 108.982,
      width: 125.111,
      height: 125.111,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.789 38.555 C 14.499 15.182 37.337 -0.037 62.647 0 C 97.134 0.102 125.054 28.057 125.111 62.544 C 125.115 87.854 109.866 110.673 86.481 120.353 C 63.095 130.033 36.18 124.667 18.295 106.758 C 0.41 88.85 -4.922 61.928 4.789 38.555 Z M 24.701 78.303 C 31.075 93.624 46.053 103.595 62.647 103.562 C 85.245 103.462 103.526 85.143 103.578 62.544 C 103.575 45.95 93.573 30.993 78.238 24.652 C 62.903 18.311 45.258 21.836 33.537 33.583 C 21.815 45.329 18.328 62.981 24.701 78.303 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 125.111,
    height: 125.111,
    viewBox: "0 0 125.111 125.111",
    fill: "none",
    style: {
      position: "absolute",
      left: 316.34,
      top: 108.982,
      width: 125.111,
      height: 125.111,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.772 38.596 C 14.464 15.221 37.284 -0.013 62.588 0 C 97.103 0.058 125.065 28.03 125.111 62.544 C 125.115 87.849 109.873 110.664 86.494 120.347 C 63.116 130.031 36.206 124.675 18.316 106.779 C 0.426 88.883 -4.92 61.971 4.772 38.596 Z M 24.69 78.257 C 31.042 93.58 46 103.568 62.588 103.562 C 85.222 103.522 103.556 85.178 103.585 62.544 C 103.583 45.956 93.587 31.003 78.261 24.659 C 62.934 18.314 45.294 21.827 33.568 33.559 C 21.841 45.292 18.337 62.933 24.69 78.257 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 512,
      height: 512,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 512,
    height: 301,
    viewBox: "0 0 512 301",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 106,
      width: 512,
      height: 301
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 106.115 173.06 C 106.115 161.56 115.421 152.241 126.903 152.241 C 138.388 152.241 147.695 161.56 147.695 173.06 C 147.695 184.571 138.388 193.882 126.903 193.882 C 115.421 193.882 106.115 184.571 106.115 173.06 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 127.074 111.112 C 92.91 111.112 65.218 138.852 65.218 173.06 C 65.218 207.286 92.91 234.996 127.074 234.996 C 161.245 234.996 188.937 207.286 188.937 173.06 C 188.937 138.852 161.245 111.112 127.074 111.112 Z M 84.21 173.06 C 84.21 196.761 103.404 215.976 127.074 215.976 C 150.755 215.976 169.945 196.761 169.945 173.06 C 169.945 149.348 150.755 130.133 127.074 130.133 C 103.404 130.133 84.21 149.348 84.21 173.06 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 383.24 151.952 C 371.755 151.952 362.441 161.263 362.441 172.778 C 362.441 184.289 371.755 193.601 383.24 193.601 C 394.722 193.601 404.025 184.289 404.025 172.778 C 404.025 161.263 394.722 151.952 383.24 151.952 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 321.552 172.778 C 321.552 138.555 349.24 110.831 383.411 110.831 C 417.564 110.831 445.267 138.555 445.267 172.778 C 445.267 206.975 417.564 234.715 383.411 234.715 C 349.24 234.715 321.552 206.975 321.552 172.778 Z M 340.547 172.778 C 340.547 196.479 359.737 215.695 383.411 215.695 C 407.081 215.695 426.272 196.479 426.272 172.778 C 426.272 149.059 407.081 129.844 383.411 129.844 C 359.737 129.844 340.547 149.059 340.547 172.778 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 426.824 47.554 L 512 47.554 C 498.754 63.071 488.961 84.067 486.54 98.471 C 501.828 119.506 510.9 145.371 510.9 173.37 C 510.9 243.856 453.834 301 383.451 301 C 343.563 301 307.956 282.63 284.592 253.901 C 274.305 266.517 256.002 293.888 256.002 293.888 C 252.806 287.369 237.032 264.935 227.498 253.789 C 204.13 282.572 168.495 301 128.553 301 C 58.166 301 1.104 243.856 1.104 173.37 C 1.104 145.357 10.165 119.474 25.459 98.431 C 23.021 84.023 13.231 63.053 0 47.554 L 81.14 47.554 C 124.581 18.269 187.974 0 256.031 0 C 324.059 0 383.382 18.283 426.824 47.554 Z M 25.954 173.37 C 25.954 230.117 71.888 276.111 128.553 276.111 C 185.218 276.111 231.163 230.117 231.163 173.37 C 231.163 116.642 185.218 70.641 128.553 70.641 C 71.888 70.641 25.954 116.642 25.954 173.37 Z M 256.031 21.296 C 210.497 21.296 165.216 29.874 128.751 45.777 C 199.034 45.875 255.987 102.953 256.002 173.342 C 256.016 104.214 310.943 47.969 379.479 45.867 C 342.971 29.903 301.643 21.296 256.031 21.296 Z M 280.844 173.37 C 280.844 230.117 326.778 276.111 383.451 276.111 C 440.109 276.111 486.046 230.117 486.046 173.37 C 486.046 116.642 440.109 70.641 383.451 70.641 C 326.778 70.641 280.844 116.642 280.844 173.37 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __impls = {
    // figma: Type=Default
    "type=default": __body0,
    // figma: Type=Flat
    "type=flat": __body1
  };
  return (__impls[__vkey_Tripadvisor(props)] ?? __body0)();
}

// figma node: 9359:21129 Item Page - Desktop
function ItemPageDesktop(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1512,
      height: 4944,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 145,
      width: 1512,
      height: 517,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6048,
      height: 637,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", { style: { position: "relative", width: 1512, height: 637, flexShrink: 0, alignSelf: "stretch", background: "url(vagabond/assets/x-sav.webp) center / cover no-repeat" } }), /*#__PURE__*/React.createElement("div", { style: { display: "none" } }), /*#__PURE__*/React.createElement("div", { style: { display: "none" } }), /*#__PURE__*/React.createElement("div", { style: { display: "none" } })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 619,
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "55px 75px 55px 75px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 499,
      backgroundColor: "rgba(255,255,255,0.85)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "45px 32px 45px 32px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      backgroundColor: "rgba(243,223,191,0.45)",
      boxShadow: "inset 0 0 0 1px var(--darker-gold-no-whitebg)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 14px 6px 14px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "1.500px",
      color: "rgb(1,11,19)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Most popular")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 48,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Historic Savannah Cruise"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Cruise from Harbour Town directly to River Street, then enjoy more than four hours to explore Savannah's shops, restaurants, historic squares, and cobblestone streets at your own pace."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 706,
      top: 477,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgba(255,255,255,0.4)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgba(255,255,255,0.4)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgba(255,255,255,0.4)",
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 4414,
      width: 1512,
      backgroundColor: "rgb(44,48,119)",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      padding: "55px 75px 55px 75px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1312,
      display: "flex",
      flexDirection: "column",
      gap: 32,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 317,
      display: "flex",
      flexDirection: "column",
      gap: 25,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 322,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 272,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  }, "Get in Touch"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.6)",
      flexShrink: 0
    }
  }, "Phone"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "(843) 363-9026\n")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.6)",
      flexShrink: 0
    }
  }, "Local Phone"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "(843) 938-3040\n")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 85.333,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.667,
      width: 246,
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.6)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Location"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "149 Lighthouse Rd.\u2028Hilton Head Island, SC, 29928"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 265,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 37.333,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 156,
      height: 30,
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--darker-gold-no-whitebg)"
    }
  }, "Experiences")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Cruises"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Sailing Experiences"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Private Charters & Events"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Weddings"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 265,
      display: "flex",
      flexDirection: "column",
      gap: 15,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 37.333,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 126,
      height: 30,
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--darker-gold-no-whitebg)"
    }
  }, "Company")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "About Us"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "FAQ"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Our Fleet"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Blog"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Employment"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Area Guide"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Contact Us"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 265,
      height: 340,
      display: "flex",
      flexDirection: "column",
      gap: 15,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-353da7d089c45dcb",
    style: {
      position: "relative",
      width: 155,
      height: 134.957,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 34.5,
      height: 34.5,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement(Facebook, {
    style: {
      transform: "scale(0.067, 0.067)",
      transformOrigin: "0 0",
      color: "rgb(255,255,255)"
    },
    type: "flat"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 34.5,
      height: 34.5,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement(Instagram, {
    style: {
      transform: "scale(0.067, 0.067)",
      transformOrigin: "0 0",
      color: "rgb(255,255,255)"
    },
    type: "flat"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 46,
      height: 46,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement(Tripadvisor, {
    style: {
      transform: "scale(0.090, 0.090)",
      transformOrigin: "0 0",
      color: "rgb(255,255,255)"
    },
    type: "flat"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 29.307,
      height: 34,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.307,
    height: 34,
    viewBox: "0 0 29.307 34",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.307,
      height: 34,
      color: "var(--darker-gold-no-whitebg)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.625 0 L 21.296 0 C 21.357 0.248 21.404 0.499 21.438 0.751 C 21.611 2.724 22.513 4.561 23.968 5.903 C 25.423 7.246 27.327 7.997 29.307 8.011 L 29.307 13.356 C 29.042 13.442 28.763 13.481 28.485 13.47 C 27.165 13.324 25.858 13.087 24.571 12.761 C 23.461 12.333 22.381 11.831 21.339 11.258 L 21.339 11.967 C 21.339 14.802 21.339 17.723 21.339 20.601 C 21.353 21.773 21.277 22.944 21.112 24.103 C 20.863 26.039 20.123 27.879 18.961 29.448 C 17.799 31.017 16.255 32.262 14.476 33.064 C 13.431 33.449 12.36 33.761 11.272 34 L 9.301 34 C 9.219 33.961 9.133 33.928 9.046 33.901 C 7.048 33.647 5.172 32.803 3.657 31.477 C 2.141 30.151 1.056 28.403 0.539 26.457 C 0.301 25.61 0.121 24.748 0 23.877 L 0 22.218 C 0.156 21.438 0.269 20.658 0.496 19.892 C 1.135 17.848 2.37 16.041 4.042 14.702 C 5.714 13.363 7.748 12.554 9.882 12.378 C 10.52 12.279 11.158 12.25 11.839 12.193 C 11.839 14.037 11.839 15.738 11.839 17.454 C 11.839 17.865 11.626 17.922 11.286 18.021 C 10.199 18.27 9.133 18.602 8.096 19.013 C 7.298 19.314 6.612 19.854 6.132 20.56 C 5.652 21.265 5.402 22.102 5.416 22.955 C 5.356 23.922 5.582 24.886 6.066 25.726 C 6.55 26.565 7.271 27.244 8.138 27.676 C 8.932 28.167 9.853 28.41 10.785 28.375 C 11.716 28.339 12.617 28.027 13.37 27.478 C 13.935 27.074 14.408 26.556 14.76 25.958 C 15.111 25.359 15.334 24.694 15.412 24.004 C 15.582 22.593 15.653 21.172 15.625 19.751 C 15.625 13.455 15.625 7.155 15.625 0.851 C 15.667 0.553 15.639 0.284 15.625 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 31.312,
      height: 32,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.312,
    height: 32,
    viewBox: "0 0 31.312 32",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 31.312,
      height: 32,
      color: "var(--darker-gold-no-whitebg)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.635 13.55 L 30.291 0 L 27.529 0 L 17.408 11.765 L 9.324 0 L 0 0 L 12.224 17.791 L 0 32 L 2.762 32 L 13.451 19.576 L 21.988 32 L 31.312 32 L 18.634 13.55 L 18.635 13.55 Z M 14.851 17.948 L 13.613 16.176 L 3.758 2.079 L 8.001 2.079 L 15.954 13.456 L 17.192 15.227 L 27.53 30.015 L 23.288 30.015 L 14.851 17.948 L 14.851 17.948 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 25,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 259,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(227,61,24)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(242,240,239)",
      flexShrink: 0
    }
  }, "Book Now"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 70.667,
      borderTop: "1.333px solid rgb(204,204,204)",
      borderRight: "1.333px solid rgb(204,204,204)",
      borderBottom: "1.333px solid rgb(204,204,204)",
      borderLeft: "1.333px solid rgb(204,204,204)",
      display: "flex",
      flexDirection: "column",
      padding: "44px 0px 44px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 26.667,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 502.417,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.667,
      width: 311,
      height: 24,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.8)"
    }
  }, "\xA9 2020 Vagabond Cruises. All rights reserved.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 413,
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 110.927,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.667,
      width: 112,
      height: 24,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.8)"
    }
  }, "Terms of Service")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 102.021,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.667,
      width: 84,
      height: 24,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.8)"
    }
  }, "Accessibility"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 658,
      width: 1512,
      backgroundColor: "rgb(243,223,191)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "12px 75px 12px 75px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 215,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 34,
      height: 34,
      flexShrink: 0
    },
    icon: "mapMarker"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 168,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "DEPARTURE"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "9AM from Harbour Town")))), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 35,
    viewBox: "-1 0 2 35",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,-0.013,0.013,1,292.939,4.001)",
      transformOrigin: "0 0",
      width: 2,
      height: 35,
      color: "rgb(227,61,24)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L -1 0 L -1 35 L 0 35 L 1 35 L 1 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 248,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 215,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 34,
      height: 34,
      flexShrink: 0
    },
    icon: "duration"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 194,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "TRAVEL TIME"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "1 Hour 45 Minutes each way")))), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 35,
    viewBox: "-1 0 2 35",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,-0.013,0.013,1,697.273,4.001)",
      transformOrigin: "0 0",
      width: 2,
      height: 35,
      color: "rgb(227,61,24)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L -1 0 L -1 35 L 0 35 L 1 35 L 1 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 215,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 34,
      height: 34,
      flexShrink: 0
    },
    icon: "clock"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 168,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "TIME IN SAVANNAH"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(1,11,19)",
      flexShrink: 0
    }
  }, "Over 4 hours to Explore")))), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 35,
    viewBox: "-1 0 2 35",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,-0.013,0.013,1,1068.606,4.001)",
      transformOrigin: "0 0",
      width: 2,
      height: 35,
      color: "rgb(227,61,24)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L -1 0 L -1 35 L 0 35 L 1 35 L 1 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 215,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 34,
      height: 34,
      flexShrink: 0
    },
    icon: "boat"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 168,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "VESSEL"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(1,11,19)",
      flexShrink: 0
    }
  }, "Spirit of Harbour Town")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -2,
      top: 725,
      width: 1517,
      height: 650,
      display: "flex",
      flexDirection: "row",
      padding: "55px 75px 55px 75px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 932,
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 950,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "100%",
      letterSpacing: "0.030em",
      color: "rgb(146,116,23)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "the journey is part of the experience"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "The Easiest Way to Experience Savannah")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(75,85,99)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Whether you are planning a family adventure, a romantic evening, or a day beyond the island, there is a Vagabond experience made for it."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 0px 6px 0px",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      height: 11,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "Depart directly from Harbour Town"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(75,85,99)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Skip traffic, parking, and navigating an unfamiliar city. This is more than a ride to Savannah-it is a scenic, comfortable start to a full day of exploring one of the South's most memorable destinations."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 0px 6px 0px",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      height: 11,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "Arrive right on River Street"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(75,85,99)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Spend more than four hours in Savannah exploring restaurants, shops, historic attractions, and the Old Town Trolley."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 0px 6px 0px",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      height: 11,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "Relax in a heated and air-conditioned cabin"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(75,85,99)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Enjoy a covered open-air upper deck with views of the Lowcountry waterways."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 0px 6px 0px",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      height: 11,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "Purchase coffee, snacks, beer, wine, cocktails, and more onboard"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(75,85,99)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Access clean, modern onboard restrooms throughout the journey."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 0px 6px 0px",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      height: 11,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "Full-Service Bar & Snacks"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(75,85,99)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Enjoy seasonal cocktails, mimosas, Bloody Marys, wine, local microbrews, coffee, and snacks available for purchase."))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 380,
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px var(--darker-gold-no-whitebg)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "24px 24px 24px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 168,
      height: 53,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "ROUND-TRIP FARE"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "baseline",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "$84.95"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "/ adult"))), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 332 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(229,231,235)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 332 0 L 332 -0.5 L 332 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 28,
      height: 28,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 3,
      width: 3,
      height: 6,
      color: "rgb(75,85,99)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.293 6.707 C 2.683 7.098 3.317 7.098 3.707 6.707 C 4.098 6.317 4.098 5.683 3.707 5.293 L 3 6 L 2.293 6.707 Z M 0 3 L -0.707 2.293 L -1.414 3 L -0.707 3.707 L 0 3 Z M 3.707 0.707 C 4.098 0.317 4.098 -0.317 3.707 -0.707 C 3.317 -1.098 2.683 -1.098 2.293 -0.707 L 3 0 L 3.707 0.707 Z M 3 6 L 3.707 5.293 L 0.707 2.293 L 0 3 L -0.707 3.707 L 2.293 6.707 L 3 6 Z M 0 3 L 0.707 3.707 L 3.707 0.707 L 3 0 L 2.293 -0.707 L -0.707 2.293 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "September 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 28,
      height: 28,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 3,
      width: 3,
      height: 6,
      color: "rgb(75,85,99)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.707 5.293 C -1.098 5.683 -1.098 6.317 -0.707 6.707 C -0.317 7.098 0.317 7.098 0.707 6.707 L 0 6 L -0.707 5.293 Z M 3 3 L 3.707 3.707 L 4.414 3 L 3.707 2.293 L 3 3 Z M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 0 6 L 0.707 6.707 L 3.707 3.707 L 3 3 L 2.293 2.293 L -0.707 5.293 L 0 6 Z M 3 3 L 3.707 2.293 L 0.707 -0.707 L 0 0 L -0.707 0.707 L 2.293 3.707 L 3 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 28,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Su")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 28,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 28,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Tu")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 28,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "We")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 28,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Th")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 28,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Fr")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 28,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Sa"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(243,244,246)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(156,163,175)",
      flexShrink: 0
    }
  }, "31")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "1")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "2")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "3")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "5")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "6"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "8")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "10")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--darker-gold-no-whitebg)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(9,15,30)",
      flexShrink: 0
    }
  }, "11")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "12")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "13"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "14")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "15")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--darker-gold-no-whitebg)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(9,15,30)",
      flexShrink: 0
    }
  }, "16")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "17")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--darker-gold-no-whitebg)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(9,15,30)",
      flexShrink: 0
    }
  }, "18")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "19")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "20"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "21")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "22")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--darker-gold-no-whitebg)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(9,15,30)",
      flexShrink: 0
    }
  }, "23")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "24")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--darker-gold-no-whitebg)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(9,15,30)",
      flexShrink: 0
    }
  }, "25")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "26")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "27"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "28")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "29")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--darker-gold-no-whitebg)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(9,15,30)",
      flexShrink: 0
    }
  }, "30")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(243,244,246)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(156,163,175)",
      flexShrink: 0
    }
  }, "1")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(243,244,246)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(156,163,175)",
      flexShrink: 0
    }
  }, "2")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(243,244,246)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(156,163,175)",
      flexShrink: 0
    }
  }, "3")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(243,244,246)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(156,163,175)",
      flexShrink: 0
    }
  }, "4")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(17,24,39)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Selected date")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Available")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(156,163,175)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Unavailable")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(227,61,24)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(242,240,239)",
      flexShrink: 0
    }
  }, "Book Now")))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-b3c31bc49a5e826b-b70eb72d",
    style: {
      position: "absolute",
      left: -5,
      top: 1948,
      width: 1517,
      height: 642,
      display: "flex",
      flexDirection: "column",
      gap: 32,
      padding: "45px 75px 55px 75px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      letterSpacing: "1.500px",
      color: "rgb(146,116,23)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Things to do in savannah"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 40,
      textAlign: "center",
      lineHeight: "48px",
      letterSpacing: "-0.500px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Four Hours, Your Way"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgb(75,85,99)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Savannah is yours to explore. Whether you want to see the city's most iconic sights or simply follow wherever the day takes you, you will arrive with plenty of time to make it your own.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1362,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1362,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "url(vagabond/assets/x-i1.webp) center / cover no-repeat",
      height: 200,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "See Savanah by Trolley"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(74,85,101)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Board Old Town Trolley on River Street and explore Savannah\u2019s sites, squares, and stories.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "url(vagabond/assets/x-sav.webp) center / cover no-repeat",
      height: 200,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Shop, Sip & Stroll"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(74,85,101)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Explore Savannah by Old Town Trolley with River Street entry to its landmarks and squares.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "url(vagabond/item/assets/b63792158bb1b05a.webp) center / cover no-repeat",
      height: 200,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Take it Slow"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 371,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(74,85,101)",
      flexShrink: 0
    }
  }, "Find a favorite restaurant, relax beneath the oaks, and explore Savannah at your own pace."))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      height: 11,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Old Town Trolley Tour tickets are available for purchase onboard."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -5,
      top: 2590,
      width: 1517,
      height: 552,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 64,
      padding: "64px 64px 64px 64px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 480,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 480,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "100%",
      letterSpacing: "0.030em",
      color: "rgb(146,116,23)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "know before you go"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 441,
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "What's Included + \nGood to Know")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(75,85,99)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Review everything included with your cruise, available add-ons, and important details before you book."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "url(vagabond/item/assets/b3c31bc49a5e826b.webp) 50% 55.556% / 100% 247.059% no-repeat",
      height: 238,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(209,213,219)",
      borderRight: "1px solid rgb(209,213,219)",
      borderBottom: "1px solid rgb(209,213,219)",
      borderLeft: "1px solid rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "Where do we depart, and is there parking?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  }, "[ + ]"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(209,213,219)",
      borderRight: "1px solid rgb(209,213,219)",
      borderBottom: "1px solid rgb(209,213,219)",
      borderLeft: "1px solid rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "Is the Savannah cruise accessible?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  }, "[ + ]"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(209,213,219)",
      borderRight: "1px solid rgb(209,213,219)",
      borderBottom: "1px solid rgb(209,213,219)",
      borderLeft: "1px solid rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "What is available onboard?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  }, "[ + ]"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(209,213,219)",
      borderRight: "1px solid rgb(209,213,219)",
      borderBottom: "1px solid rgb(209,213,219)",
      borderLeft: "1px solid rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "Can I add an Old Town Trolley Tour?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  }, "[ + ]"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(209,213,219)",
      borderRight: "1px solid rgb(209,213,219)",
      borderBottom: "1px solid rgb(209,213,219)",
      borderLeft: "1px solid rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "Where does the boat arrive in Savannah?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  }, "[ + ]"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(209,213,219)",
      borderRight: "1px solid rgb(209,213,219)",
      borderBottom: "1px solid rgb(209,213,219)",
      borderLeft: "1px solid rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "How long is the Historic Savannah Cruise?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  }, "[ + ]"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(209,213,219)",
      borderRight: "1px solid rgb(209,213,219)",
      borderBottom: "1px solid rgb(209,213,219)",
      borderLeft: "1px solid rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "What is the cancellation policy?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  }, "[ + ]"))))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-be2d797fb27057c5",
    style: {
      position: "absolute",
      left: -2,
      top: 3142,
      width: 1517,
      height: 521,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "55px 40px 55px 75px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 554,
      backgroundColor: "rgba(255,255,255,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      boxShadow: "0px 8px 24px -8px rgba(0,0,0,0.0706)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "32px 32px 32px 32px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.335,
    height: 12.715,
    viewBox: "0 0 13.335 12.715",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.333,
      top: 1.333,
      width: 13.335,
      height: 12.715,
      color: "rgb(146,116,23)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.351 0.197 L 5.455 -0.247 L 5.454 -0.246 L 6.351 0.197 Z M 6.668 0 L 6.668 -1 L 6.668 0 Z M 6.985 0.197 L 7.881 -0.246 L 7.881 -0.247 L 6.985 0.197 Z M 8.525 3.316 L 7.628 3.759 L 7.628 3.759 L 8.525 3.316 Z M 9.588 4.089 L 9.443 5.079 L 9.443 5.079 L 9.588 4.089 Z M 13.032 4.593 L 12.887 5.583 L 12.888 5.583 L 13.032 4.593 Z M 13.228 5.196 L 13.926 5.912 L 13.926 5.912 L 13.228 5.196 Z M 10.737 7.621 L 10.04 6.905 L 10.039 6.905 L 10.737 7.621 Z M 10.33 8.873 L 9.344 9.042 L 9.344 9.042 L 10.33 8.873 Z M 10.918 12.3 L 9.932 12.469 L 9.933 12.474 L 10.918 12.3 Z M 10.404 12.673 L 10.874 11.791 L 10.869 11.788 L 10.404 12.673 Z M 7.325 11.055 L 7.791 10.169 L 7.79 10.169 L 7.325 11.055 Z M 6.668 10.892 L 6.668 9.892 L 6.668 10.892 Z M 6.01 11.055 L 5.545 10.169 L 5.544 10.17 L 6.01 11.055 Z M 2.932 12.673 L 2.466 11.788 L 2.464 11.789 L 2.932 12.673 Z M 2.419 12.3 L 3.403 12.473 L 3.404 12.469 L 2.419 12.3 Z M 3.006 8.874 L 2.02 8.705 L 2.02 8.705 L 3.006 8.874 Z M 2.599 7.621 L 3.296 6.905 L 3.296 6.905 L 2.599 7.621 Z M 0.108 5.197 L 0.805 4.48 L 0.803 4.477 L 0.108 5.197 Z M 0.304 4.593 L 0.444 5.583 L 0.449 5.582 L 0.304 4.593 Z M 3.747 4.089 L 3.603 3.1 L 3.603 3.1 L 3.747 4.089 Z M 4.812 3.316 L 5.708 3.759 L 5.709 3.758 L 4.812 3.316 Z M 6.351 0.197 L 7.247 0.64 C 7.194 0.748 7.111 0.839 7.009 0.903 L 6.482 0.053 L 5.954 -0.796 C 5.74 -0.663 5.567 -0.473 5.455 -0.247 L 6.351 0.197 Z M 6.482 0.053 L 7.009 0.903 C 6.907 0.966 6.788 1 6.668 1 L 6.668 0 L 6.668 -1 C 6.416 -1 6.168 -0.929 5.954 -0.796 L 6.482 0.053 Z M 6.668 0 L 6.668 1 C 6.547 1 6.429 0.966 6.327 0.903 L 6.854 0.053 L 7.382 -0.796 C 7.167 -0.929 6.92 -1 6.668 -1 L 6.668 0 Z M 6.854 0.053 L 6.327 0.903 C 6.224 0.839 6.142 0.748 6.088 0.64 L 6.985 0.197 L 7.881 -0.247 C 7.769 -0.473 7.596 -0.663 7.382 -0.796 L 6.854 0.053 Z M 6.985 0.197 L 6.088 0.639 L 7.628 3.759 L 8.525 3.316 L 9.421 2.873 L 7.881 -0.246 L 6.985 0.197 Z M 8.525 3.316 L 7.628 3.759 C 7.801 4.109 8.057 4.412 8.373 4.642 L 8.961 3.834 L 9.549 3.025 C 9.495 2.985 9.451 2.933 9.421 2.873 L 8.525 3.316 Z M 8.961 3.834 L 8.373 4.642 C 8.689 4.872 9.056 5.022 9.443 5.079 L 9.588 4.089 L 9.733 3.1 C 9.667 3.09 9.603 3.064 9.549 3.025 L 8.961 3.834 Z M 9.588 4.089 L 9.443 5.079 L 12.887 5.583 L 13.032 4.593 L 13.177 3.604 L 9.733 3.1 L 9.588 4.089 Z M 13.032 4.593 L 12.888 5.583 C 12.769 5.566 12.657 5.515 12.565 5.437 L 13.209 4.673 L 13.853 3.908 C 13.66 3.745 13.425 3.64 13.175 3.604 L 13.032 4.593 Z M 13.209 4.673 L 12.565 5.437 C 12.472 5.36 12.404 5.258 12.366 5.143 L 13.317 4.834 L 14.268 4.524 C 14.19 4.284 14.046 4.071 13.853 3.908 L 13.209 4.673 Z M 13.317 4.834 L 12.366 5.143 C 12.329 5.028 12.324 4.905 12.353 4.788 L 13.324 5.028 L 14.295 5.267 C 14.356 5.022 14.346 4.765 14.268 4.524 L 13.317 4.834 Z M 13.324 5.028 L 12.353 4.788 C 12.382 4.671 12.443 4.564 12.53 4.48 L 13.228 5.196 L 13.926 5.912 C 14.107 5.736 14.235 5.512 14.295 5.267 L 13.324 5.028 Z M 13.228 5.196 L 12.53 4.479 L 10.04 6.905 L 10.737 7.621 L 11.435 8.338 L 13.926 5.912 L 13.228 5.196 Z M 10.737 7.621 L 10.039 6.905 C 9.759 7.178 9.549 7.515 9.428 7.888 L 10.379 8.197 L 11.33 8.506 C 11.351 8.442 11.387 8.384 11.435 8.337 L 10.737 7.621 Z M 10.379 8.197 L 9.428 7.888 C 9.307 8.26 9.278 8.656 9.344 9.042 L 10.33 8.873 L 11.316 8.705 C 11.304 8.639 11.309 8.57 11.33 8.506 L 10.379 8.197 Z M 10.33 8.873 L 9.344 9.042 L 9.932 12.469 L 10.918 12.3 L 11.903 12.131 L 11.315 8.704 L 10.33 8.873 Z M 10.918 12.3 L 9.933 12.474 C 9.912 12.354 9.925 12.232 9.97 12.119 L 10.898 12.494 L 11.825 12.868 C 11.92 12.633 11.947 12.376 11.903 12.126 L 10.918 12.3 Z M 10.898 12.494 L 9.97 12.119 C 10.016 12.007 10.092 11.909 10.19 11.838 L 10.778 12.647 L 11.365 13.456 C 11.57 13.307 11.73 13.103 11.825 12.868 L 10.898 12.494 Z M 10.778 12.647 L 10.19 11.838 C 10.288 11.767 10.404 11.725 10.525 11.716 L 10.594 12.714 L 10.664 13.711 C 10.917 13.694 11.16 13.605 11.365 13.456 L 10.778 12.647 Z M 10.594 12.714 L 10.525 11.716 C 10.646 11.708 10.767 11.734 10.874 11.791 L 10.404 12.673 L 9.934 13.556 C 10.158 13.675 10.411 13.729 10.664 13.711 L 10.594 12.714 Z M 10.404 12.673 L 10.869 11.788 L 7.791 10.169 L 7.325 11.055 L 6.86 11.94 L 9.938 13.558 L 10.404 12.673 Z M 7.325 11.055 L 7.79 10.169 C 7.444 9.987 7.059 9.892 6.668 9.892 L 6.668 10.892 L 6.668 11.892 C 6.735 11.892 6.801 11.909 6.86 11.94 L 7.325 11.055 Z M 6.668 10.892 L 6.668 9.892 C 6.276 9.892 5.891 9.987 5.545 10.169 L 6.01 11.055 L 6.475 11.94 C 6.534 11.909 6.6 11.892 6.668 11.892 L 6.668 10.892 Z M 6.01 11.055 L 5.544 10.17 L 2.466 11.788 L 2.932 12.673 L 3.397 13.558 L 6.475 11.94 L 6.01 11.055 Z M 2.932 12.673 L 2.464 11.789 C 2.571 11.733 2.692 11.707 2.812 11.716 L 2.742 12.713 L 2.671 13.711 C 2.923 13.729 3.176 13.676 3.4 13.557 L 2.932 12.673 Z M 2.742 12.713 L 2.812 11.716 C 2.933 11.725 3.049 11.767 3.147 11.838 L 2.559 12.647 L 1.971 13.455 C 2.175 13.604 2.418 13.693 2.671 13.711 L 2.742 12.713 Z M 2.559 12.647 L 3.147 11.838 C 3.245 11.909 3.321 12.006 3.366 12.119 L 2.439 12.493 L 1.512 12.868 C 1.607 13.103 1.766 13.306 1.971 13.455 L 2.559 12.647 Z M 2.439 12.493 L 3.366 12.119 C 3.411 12.231 3.424 12.354 3.403 12.473 L 2.419 12.3 L 1.434 12.127 C 1.39 12.377 1.417 12.633 1.512 12.868 L 2.439 12.493 Z M 2.419 12.3 L 3.404 12.469 L 3.991 9.043 L 3.006 8.874 L 2.02 8.705 L 1.433 12.131 L 2.419 12.3 Z M 3.006 8.874 L 3.991 9.043 C 4.058 8.657 4.029 8.261 3.908 7.888 L 2.957 8.197 L 2.006 8.507 C 2.027 8.57 2.032 8.639 2.02 8.705 L 3.006 8.874 Z M 2.957 8.197 L 3.908 7.888 C 3.787 7.516 3.577 7.178 3.296 6.905 L 2.599 7.621 L 1.901 8.338 C 1.949 8.385 1.985 8.443 2.006 8.507 L 2.957 8.197 Z M 2.599 7.621 L 3.296 6.905 L 0.805 4.48 L 0.108 5.197 L -0.59 5.913 L 1.901 8.338 L 2.599 7.621 Z M 0.108 5.197 L 0.803 4.477 C 0.89 4.561 0.951 4.668 0.981 4.786 L 0.011 5.028 L -0.96 5.27 C -0.898 5.516 -0.769 5.74 -0.587 5.916 L 0.108 5.197 Z M 0.011 5.028 L 0.981 4.786 C 1.01 4.903 1.006 5.027 0.968 5.142 L 0.017 4.833 L -0.934 4.525 C -1.012 4.766 -1.021 5.024 -0.96 5.27 L 0.011 5.028 Z M 0.017 4.833 L 0.968 5.142 C 0.931 5.257 0.862 5.36 0.769 5.438 L 0.126 4.672 L -0.517 3.906 C -0.711 4.069 -0.856 4.284 -0.934 4.525 L 0.017 4.833 Z M 0.126 4.672 L 0.769 5.438 C 0.677 5.515 0.564 5.566 0.444 5.583 L 0.304 4.593 L 0.164 3.602 C -0.087 3.638 -0.323 3.743 -0.517 3.906 L 0.126 4.672 Z M 0.304 4.593 L 0.449 5.582 L 3.892 5.079 L 3.747 4.089 L 3.603 3.1 L 0.159 3.603 L 0.304 4.593 Z M 3.747 4.089 L 3.891 5.079 C 4.278 5.023 4.646 4.873 4.963 4.643 L 4.375 3.834 L 3.787 3.025 C 3.733 3.064 3.67 3.09 3.603 3.1 L 3.747 4.089 Z M 4.375 3.834 L 4.963 4.643 C 5.279 4.413 5.535 4.11 5.708 3.759 L 4.812 3.316 L 3.915 2.873 C 3.886 2.933 3.842 2.985 3.787 3.025 L 4.375 3.834 Z M 4.812 3.316 L 5.709 3.758 L 7.248 0.639 L 6.351 0.197 L 5.454 -0.246 L 3.915 2.873 L 4.812 3.316 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.335,
    height: 12.715,
    viewBox: "0 0 13.335 12.715",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.333,
      top: 1.333,
      width: 13.335,
      height: 12.715,
      color: "rgb(146,116,23)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.351 0.197 L 5.455 -0.247 L 5.454 -0.246 L 6.351 0.197 Z M 6.668 0 L 6.668 -1 L 6.668 0 Z M 6.985 0.197 L 7.881 -0.246 L 7.881 -0.247 L 6.985 0.197 Z M 8.525 3.316 L 7.628 3.759 L 7.628 3.759 L 8.525 3.316 Z M 9.588 4.089 L 9.443 5.079 L 9.443 5.079 L 9.588 4.089 Z M 13.032 4.593 L 12.887 5.583 L 12.888 5.583 L 13.032 4.593 Z M 13.228 5.196 L 13.926 5.912 L 13.926 5.912 L 13.228 5.196 Z M 10.737 7.621 L 10.04 6.905 L 10.039 6.905 L 10.737 7.621 Z M 10.33 8.873 L 9.344 9.042 L 9.344 9.042 L 10.33 8.873 Z M 10.918 12.3 L 9.932 12.469 L 9.933 12.474 L 10.918 12.3 Z M 10.404 12.673 L 10.874 11.791 L 10.869 11.788 L 10.404 12.673 Z M 7.325 11.055 L 7.791 10.169 L 7.79 10.169 L 7.325 11.055 Z M 6.668 10.892 L 6.668 9.892 L 6.668 10.892 Z M 6.01 11.055 L 5.545 10.169 L 5.544 10.17 L 6.01 11.055 Z M 2.932 12.673 L 2.466 11.788 L 2.464 11.789 L 2.932 12.673 Z M 2.419 12.3 L 3.403 12.473 L 3.404 12.469 L 2.419 12.3 Z M 3.006 8.874 L 2.02 8.705 L 2.02 8.705 L 3.006 8.874 Z M 2.599 7.621 L 3.296 6.905 L 3.296 6.905 L 2.599 7.621 Z M 0.108 5.197 L 0.805 4.48 L 0.803 4.477 L 0.108 5.197 Z M 0.304 4.593 L 0.444 5.583 L 0.449 5.582 L 0.304 4.593 Z M 3.747 4.089 L 3.603 3.1 L 3.603 3.1 L 3.747 4.089 Z M 4.812 3.316 L 5.708 3.759 L 5.709 3.758 L 4.812 3.316 Z M 6.351 0.197 L 7.247 0.64 C 7.194 0.748 7.111 0.839 7.009 0.903 L 6.482 0.053 L 5.954 -0.796 C 5.74 -0.663 5.567 -0.473 5.455 -0.247 L 6.351 0.197 Z M 6.482 0.053 L 7.009 0.903 C 6.907 0.966 6.788 1 6.668 1 L 6.668 0 L 6.668 -1 C 6.416 -1 6.168 -0.929 5.954 -0.796 L 6.482 0.053 Z M 6.668 0 L 6.668 1 C 6.547 1 6.429 0.966 6.327 0.903 L 6.854 0.053 L 7.382 -0.796 C 7.167 -0.929 6.92 -1 6.668 -1 L 6.668 0 Z M 6.854 0.053 L 6.327 0.903 C 6.224 0.839 6.142 0.748 6.088 0.64 L 6.985 0.197 L 7.881 -0.247 C 7.769 -0.473 7.596 -0.663 7.382 -0.796 L 6.854 0.053 Z M 6.985 0.197 L 6.088 0.639 L 7.628 3.759 L 8.525 3.316 L 9.421 2.873 L 7.881 -0.246 L 6.985 0.197 Z M 8.525 3.316 L 7.628 3.759 C 7.801 4.109 8.057 4.412 8.373 4.642 L 8.961 3.834 L 9.549 3.025 C 9.495 2.985 9.451 2.933 9.421 2.873 L 8.525 3.316 Z M 8.961 3.834 L 8.373 4.642 C 8.689 4.872 9.056 5.022 9.443 5.079 L 9.588 4.089 L 9.733 3.1 C 9.667 3.09 9.603 3.064 9.549 3.025 L 8.961 3.834 Z M 9.588 4.089 L 9.443 5.079 L 12.887 5.583 L 13.032 4.593 L 13.177 3.604 L 9.733 3.1 L 9.588 4.089 Z M 13.032 4.593 L 12.888 5.583 C 12.769 5.566 12.657 5.515 12.565 5.437 L 13.209 4.673 L 13.853 3.908 C 13.66 3.745 13.425 3.64 13.175 3.604 L 13.032 4.593 Z M 13.209 4.673 L 12.565 5.437 C 12.472 5.36 12.404 5.258 12.366 5.143 L 13.317 4.834 L 14.268 4.524 C 14.19 4.284 14.046 4.071 13.853 3.908 L 13.209 4.673 Z M 13.317 4.834 L 12.366 5.143 C 12.329 5.028 12.324 4.905 12.353 4.788 L 13.324 5.028 L 14.295 5.267 C 14.356 5.022 14.346 4.765 14.268 4.524 L 13.317 4.834 Z M 13.324 5.028 L 12.353 4.788 C 12.382 4.671 12.443 4.564 12.53 4.48 L 13.228 5.196 L 13.926 5.912 C 14.107 5.736 14.235 5.512 14.295 5.267 L 13.324 5.028 Z M 13.228 5.196 L 12.53 4.479 L 10.04 6.905 L 10.737 7.621 L 11.435 8.338 L 13.926 5.912 L 13.228 5.196 Z M 10.737 7.621 L 10.039 6.905 C 9.759 7.178 9.549 7.515 9.428 7.888 L 10.379 8.197 L 11.33 8.506 C 11.351 8.442 11.387 8.384 11.435 8.337 L 10.737 7.621 Z M 10.379 8.197 L 9.428 7.888 C 9.307 8.26 9.278 8.656 9.344 9.042 L 10.33 8.873 L 11.316 8.705 C 11.304 8.639 11.309 8.57 11.33 8.506 L 10.379 8.197 Z M 10.33 8.873 L 9.344 9.042 L 9.932 12.469 L 10.918 12.3 L 11.903 12.131 L 11.315 8.704 L 10.33 8.873 Z M 10.918 12.3 L 9.933 12.474 C 9.912 12.354 9.925 12.232 9.97 12.119 L 10.898 12.494 L 11.825 12.868 C 11.92 12.633 11.947 12.376 11.903 12.126 L 10.918 12.3 Z M 10.898 12.494 L 9.97 12.119 C 10.016 12.007 10.092 11.909 10.19 11.838 L 10.778 12.647 L 11.365 13.456 C 11.57 13.307 11.73 13.103 11.825 12.868 L 10.898 12.494 Z M 10.778 12.647 L 10.19 11.838 C 10.288 11.767 10.404 11.725 10.525 11.716 L 10.594 12.714 L 10.664 13.711 C 10.917 13.694 11.16 13.605 11.365 13.456 L 10.778 12.647 Z M 10.594 12.714 L 10.525 11.716 C 10.646 11.708 10.767 11.734 10.874 11.791 L 10.404 12.673 L 9.934 13.556 C 10.158 13.675 10.411 13.729 10.664 13.711 L 10.594 12.714 Z M 10.404 12.673 L 10.869 11.788 L 7.791 10.169 L 7.325 11.055 L 6.86 11.94 L 9.938 13.558 L 10.404 12.673 Z M 7.325 11.055 L 7.79 10.169 C 7.444 9.987 7.059 9.892 6.668 9.892 L 6.668 10.892 L 6.668 11.892 C 6.735 11.892 6.801 11.909 6.86 11.94 L 7.325 11.055 Z M 6.668 10.892 L 6.668 9.892 C 6.276 9.892 5.891 9.987 5.545 10.169 L 6.01 11.055 L 6.475 11.94 C 6.534 11.909 6.6 11.892 6.668 11.892 L 6.668 10.892 Z M 6.01 11.055 L 5.544 10.17 L 2.466 11.788 L 2.932 12.673 L 3.397 13.558 L 6.475 11.94 L 6.01 11.055 Z M 2.932 12.673 L 2.464 11.789 C 2.571 11.733 2.692 11.707 2.812 11.716 L 2.742 12.713 L 2.671 13.711 C 2.923 13.729 3.176 13.676 3.4 13.557 L 2.932 12.673 Z M 2.742 12.713 L 2.812 11.716 C 2.933 11.725 3.049 11.767 3.147 11.838 L 2.559 12.647 L 1.971 13.455 C 2.175 13.604 2.418 13.693 2.671 13.711 L 2.742 12.713 Z M 2.559 12.647 L 3.147 11.838 C 3.245 11.909 3.321 12.006 3.366 12.119 L 2.439 12.493 L 1.512 12.868 C 1.607 13.103 1.766 13.306 1.971 13.455 L 2.559 12.647 Z M 2.439 12.493 L 3.366 12.119 C 3.411 12.231 3.424 12.354 3.403 12.473 L 2.419 12.3 L 1.434 12.127 C 1.39 12.377 1.417 12.633 1.512 12.868 L 2.439 12.493 Z M 2.419 12.3 L 3.404 12.469 L 3.991 9.043 L 3.006 8.874 L 2.02 8.705 L 1.433 12.131 L 2.419 12.3 Z M 3.006 8.874 L 3.991 9.043 C 4.058 8.657 4.029 8.261 3.908 7.888 L 2.957 8.197 L 2.006 8.507 C 2.027 8.57 2.032 8.639 2.02 8.705 L 3.006 8.874 Z M 2.957 8.197 L 3.908 7.888 C 3.787 7.516 3.577 7.178 3.296 6.905 L 2.599 7.621 L 1.901 8.338 C 1.949 8.385 1.985 8.443 2.006 8.507 L 2.957 8.197 Z M 2.599 7.621 L 3.296 6.905 L 0.805 4.48 L 0.108 5.197 L -0.59 5.913 L 1.901 8.338 L 2.599 7.621 Z M 0.108 5.197 L 0.803 4.477 C 0.89 4.561 0.951 4.668 0.981 4.786 L 0.011 5.028 L -0.96 5.27 C -0.898 5.516 -0.769 5.74 -0.587 5.916 L 0.108 5.197 Z M 0.011 5.028 L 0.981 4.786 C 1.01 4.903 1.006 5.027 0.968 5.142 L 0.017 4.833 L -0.934 4.525 C -1.012 4.766 -1.021 5.024 -0.96 5.27 L 0.011 5.028 Z M 0.017 4.833 L 0.968 5.142 C 0.931 5.257 0.862 5.36 0.769 5.438 L 0.126 4.672 L -0.517 3.906 C -0.711 4.069 -0.856 4.284 -0.934 4.525 L 0.017 4.833 Z M 0.126 4.672 L 0.769 5.438 C 0.677 5.515 0.564 5.566 0.444 5.583 L 0.304 4.593 L 0.164 3.602 C -0.087 3.638 -0.323 3.743 -0.517 3.906 L 0.126 4.672 Z M 0.304 4.593 L 0.449 5.582 L 3.892 5.079 L 3.747 4.089 L 3.603 3.1 L 0.159 3.603 L 0.304 4.593 Z M 3.747 4.089 L 3.891 5.079 C 4.278 5.023 4.646 4.873 4.963 4.643 L 4.375 3.834 L 3.787 3.025 C 3.733 3.064 3.67 3.09 3.603 3.1 L 3.747 4.089 Z M 4.375 3.834 L 4.963 4.643 C 5.279 4.413 5.535 4.11 5.708 3.759 L 4.812 3.316 L 3.915 2.873 C 3.886 2.933 3.842 2.985 3.787 3.025 L 4.375 3.834 Z M 4.812 3.316 L 5.709 3.758 L 7.248 0.639 L 6.351 0.197 L 5.454 -0.246 L 3.915 2.873 L 4.812 3.316 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.335,
    height: 12.715,
    viewBox: "0 0 13.335 12.715",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.333,
      top: 1.333,
      width: 13.335,
      height: 12.715,
      color: "rgb(146,116,23)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.351 0.197 L 5.455 -0.247 L 5.454 -0.246 L 6.351 0.197 Z M 6.668 0 L 6.668 -1 L 6.668 0 Z M 6.985 0.197 L 7.881 -0.246 L 7.881 -0.247 L 6.985 0.197 Z M 8.525 3.316 L 7.628 3.759 L 7.628 3.759 L 8.525 3.316 Z M 9.588 4.089 L 9.443 5.079 L 9.443 5.079 L 9.588 4.089 Z M 13.032 4.593 L 12.887 5.583 L 12.888 5.583 L 13.032 4.593 Z M 13.228 5.196 L 13.926 5.912 L 13.926 5.912 L 13.228 5.196 Z M 10.737 7.621 L 10.04 6.905 L 10.039 6.905 L 10.737 7.621 Z M 10.33 8.873 L 9.344 9.042 L 9.344 9.042 L 10.33 8.873 Z M 10.918 12.3 L 9.932 12.469 L 9.933 12.474 L 10.918 12.3 Z M 10.404 12.673 L 10.874 11.791 L 10.869 11.788 L 10.404 12.673 Z M 7.325 11.055 L 7.791 10.169 L 7.79 10.169 L 7.325 11.055 Z M 6.668 10.892 L 6.668 9.892 L 6.668 10.892 Z M 6.01 11.055 L 5.545 10.169 L 5.544 10.17 L 6.01 11.055 Z M 2.932 12.673 L 2.466 11.788 L 2.464 11.789 L 2.932 12.673 Z M 2.419 12.3 L 3.403 12.473 L 3.404 12.469 L 2.419 12.3 Z M 3.006 8.874 L 2.02 8.705 L 2.02 8.705 L 3.006 8.874 Z M 2.599 7.621 L 3.296 6.905 L 3.296 6.905 L 2.599 7.621 Z M 0.108 5.197 L 0.805 4.48 L 0.803 4.477 L 0.108 5.197 Z M 0.304 4.593 L 0.444 5.583 L 0.449 5.582 L 0.304 4.593 Z M 3.747 4.089 L 3.603 3.1 L 3.603 3.1 L 3.747 4.089 Z M 4.812 3.316 L 5.708 3.759 L 5.709 3.758 L 4.812 3.316 Z M 6.351 0.197 L 7.247 0.64 C 7.194 0.748 7.111 0.839 7.009 0.903 L 6.482 0.053 L 5.954 -0.796 C 5.74 -0.663 5.567 -0.473 5.455 -0.247 L 6.351 0.197 Z M 6.482 0.053 L 7.009 0.903 C 6.907 0.966 6.788 1 6.668 1 L 6.668 0 L 6.668 -1 C 6.416 -1 6.168 -0.929 5.954 -0.796 L 6.482 0.053 Z M 6.668 0 L 6.668 1 C 6.547 1 6.429 0.966 6.327 0.903 L 6.854 0.053 L 7.382 -0.796 C 7.167 -0.929 6.92 -1 6.668 -1 L 6.668 0 Z M 6.854 0.053 L 6.327 0.903 C 6.224 0.839 6.142 0.748 6.088 0.64 L 6.985 0.197 L 7.881 -0.247 C 7.769 -0.473 7.596 -0.663 7.382 -0.796 L 6.854 0.053 Z M 6.985 0.197 L 6.088 0.639 L 7.628 3.759 L 8.525 3.316 L 9.421 2.873 L 7.881 -0.246 L 6.985 0.197 Z M 8.525 3.316 L 7.628 3.759 C 7.801 4.109 8.057 4.412 8.373 4.642 L 8.961 3.834 L 9.549 3.025 C 9.495 2.985 9.451 2.933 9.421 2.873 L 8.525 3.316 Z M 8.961 3.834 L 8.373 4.642 C 8.689 4.872 9.056 5.022 9.443 5.079 L 9.588 4.089 L 9.733 3.1 C 9.667 3.09 9.603 3.064 9.549 3.025 L 8.961 3.834 Z M 9.588 4.089 L 9.443 5.079 L 12.887 5.583 L 13.032 4.593 L 13.177 3.604 L 9.733 3.1 L 9.588 4.089 Z M 13.032 4.593 L 12.888 5.583 C 12.769 5.566 12.657 5.515 12.565 5.437 L 13.209 4.673 L 13.853 3.908 C 13.66 3.745 13.425 3.64 13.175 3.604 L 13.032 4.593 Z M 13.209 4.673 L 12.565 5.437 C 12.472 5.36 12.404 5.258 12.366 5.143 L 13.317 4.834 L 14.268 4.524 C 14.19 4.284 14.046 4.071 13.853 3.908 L 13.209 4.673 Z M 13.317 4.834 L 12.366 5.143 C 12.329 5.028 12.324 4.905 12.353 4.788 L 13.324 5.028 L 14.295 5.267 C 14.356 5.022 14.346 4.765 14.268 4.524 L 13.317 4.834 Z M 13.324 5.028 L 12.353 4.788 C 12.382 4.671 12.443 4.564 12.53 4.48 L 13.228 5.196 L 13.926 5.912 C 14.107 5.736 14.235 5.512 14.295 5.267 L 13.324 5.028 Z M 13.228 5.196 L 12.53 4.479 L 10.04 6.905 L 10.737 7.621 L 11.435 8.338 L 13.926 5.912 L 13.228 5.196 Z M 10.737 7.621 L 10.039 6.905 C 9.759 7.178 9.549 7.515 9.428 7.888 L 10.379 8.197 L 11.33 8.506 C 11.351 8.442 11.387 8.384 11.435 8.337 L 10.737 7.621 Z M 10.379 8.197 L 9.428 7.888 C 9.307 8.26 9.278 8.656 9.344 9.042 L 10.33 8.873 L 11.316 8.705 C 11.304 8.639 11.309 8.57 11.33 8.506 L 10.379 8.197 Z M 10.33 8.873 L 9.344 9.042 L 9.932 12.469 L 10.918 12.3 L 11.903 12.131 L 11.315 8.704 L 10.33 8.873 Z M 10.918 12.3 L 9.933 12.474 C 9.912 12.354 9.925 12.232 9.97 12.119 L 10.898 12.494 L 11.825 12.868 C 11.92 12.633 11.947 12.376 11.903 12.126 L 10.918 12.3 Z M 10.898 12.494 L 9.97 12.119 C 10.016 12.007 10.092 11.909 10.19 11.838 L 10.778 12.647 L 11.365 13.456 C 11.57 13.307 11.73 13.103 11.825 12.868 L 10.898 12.494 Z M 10.778 12.647 L 10.19 11.838 C 10.288 11.767 10.404 11.725 10.525 11.716 L 10.594 12.714 L 10.664 13.711 C 10.917 13.694 11.16 13.605 11.365 13.456 L 10.778 12.647 Z M 10.594 12.714 L 10.525 11.716 C 10.646 11.708 10.767 11.734 10.874 11.791 L 10.404 12.673 L 9.934 13.556 C 10.158 13.675 10.411 13.729 10.664 13.711 L 10.594 12.714 Z M 10.404 12.673 L 10.869 11.788 L 7.791 10.169 L 7.325 11.055 L 6.86 11.94 L 9.938 13.558 L 10.404 12.673 Z M 7.325 11.055 L 7.79 10.169 C 7.444 9.987 7.059 9.892 6.668 9.892 L 6.668 10.892 L 6.668 11.892 C 6.735 11.892 6.801 11.909 6.86 11.94 L 7.325 11.055 Z M 6.668 10.892 L 6.668 9.892 C 6.276 9.892 5.891 9.987 5.545 10.169 L 6.01 11.055 L 6.475 11.94 C 6.534 11.909 6.6 11.892 6.668 11.892 L 6.668 10.892 Z M 6.01 11.055 L 5.544 10.17 L 2.466 11.788 L 2.932 12.673 L 3.397 13.558 L 6.475 11.94 L 6.01 11.055 Z M 2.932 12.673 L 2.464 11.789 C 2.571 11.733 2.692 11.707 2.812 11.716 L 2.742 12.713 L 2.671 13.711 C 2.923 13.729 3.176 13.676 3.4 13.557 L 2.932 12.673 Z M 2.742 12.713 L 2.812 11.716 C 2.933 11.725 3.049 11.767 3.147 11.838 L 2.559 12.647 L 1.971 13.455 C 2.175 13.604 2.418 13.693 2.671 13.711 L 2.742 12.713 Z M 2.559 12.647 L 3.147 11.838 C 3.245 11.909 3.321 12.006 3.366 12.119 L 2.439 12.493 L 1.512 12.868 C 1.607 13.103 1.766 13.306 1.971 13.455 L 2.559 12.647 Z M 2.439 12.493 L 3.366 12.119 C 3.411 12.231 3.424 12.354 3.403 12.473 L 2.419 12.3 L 1.434 12.127 C 1.39 12.377 1.417 12.633 1.512 12.868 L 2.439 12.493 Z M 2.419 12.3 L 3.404 12.469 L 3.991 9.043 L 3.006 8.874 L 2.02 8.705 L 1.433 12.131 L 2.419 12.3 Z M 3.006 8.874 L 3.991 9.043 C 4.058 8.657 4.029 8.261 3.908 7.888 L 2.957 8.197 L 2.006 8.507 C 2.027 8.57 2.032 8.639 2.02 8.705 L 3.006 8.874 Z M 2.957 8.197 L 3.908 7.888 C 3.787 7.516 3.577 7.178 3.296 6.905 L 2.599 7.621 L 1.901 8.338 C 1.949 8.385 1.985 8.443 2.006 8.507 L 2.957 8.197 Z M 2.599 7.621 L 3.296 6.905 L 0.805 4.48 L 0.108 5.197 L -0.59 5.913 L 1.901 8.338 L 2.599 7.621 Z M 0.108 5.197 L 0.803 4.477 C 0.89 4.561 0.951 4.668 0.981 4.786 L 0.011 5.028 L -0.96 5.27 C -0.898 5.516 -0.769 5.74 -0.587 5.916 L 0.108 5.197 Z M 0.011 5.028 L 0.981 4.786 C 1.01 4.903 1.006 5.027 0.968 5.142 L 0.017 4.833 L -0.934 4.525 C -1.012 4.766 -1.021 5.024 -0.96 5.27 L 0.011 5.028 Z M 0.017 4.833 L 0.968 5.142 C 0.931 5.257 0.862 5.36 0.769 5.438 L 0.126 4.672 L -0.517 3.906 C -0.711 4.069 -0.856 4.284 -0.934 4.525 L 0.017 4.833 Z M 0.126 4.672 L 0.769 5.438 C 0.677 5.515 0.564 5.566 0.444 5.583 L 0.304 4.593 L 0.164 3.602 C -0.087 3.638 -0.323 3.743 -0.517 3.906 L 0.126 4.672 Z M 0.304 4.593 L 0.449 5.582 L 3.892 5.079 L 3.747 4.089 L 3.603 3.1 L 0.159 3.603 L 0.304 4.593 Z M 3.747 4.089 L 3.891 5.079 C 4.278 5.023 4.646 4.873 4.963 4.643 L 4.375 3.834 L 3.787 3.025 C 3.733 3.064 3.67 3.09 3.603 3.1 L 3.747 4.089 Z M 4.375 3.834 L 4.963 4.643 C 5.279 4.413 5.535 4.11 5.708 3.759 L 4.812 3.316 L 3.915 2.873 C 3.886 2.933 3.842 2.985 3.787 3.025 L 4.375 3.834 Z M 4.812 3.316 L 5.709 3.758 L 7.248 0.639 L 6.351 0.197 L 5.454 -0.246 L 3.915 2.873 L 4.812 3.316 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.335,
    height: 12.715,
    viewBox: "0 0 13.335 12.715",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.333,
      top: 1.333,
      width: 13.335,
      height: 12.715,
      color: "rgb(146,116,23)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.351 0.197 L 5.455 -0.247 L 5.454 -0.246 L 6.351 0.197 Z M 6.668 0 L 6.668 -1 L 6.668 0 Z M 6.985 0.197 L 7.881 -0.246 L 7.881 -0.247 L 6.985 0.197 Z M 8.525 3.316 L 7.628 3.759 L 7.628 3.759 L 8.525 3.316 Z M 9.588 4.089 L 9.443 5.079 L 9.443 5.079 L 9.588 4.089 Z M 13.032 4.593 L 12.887 5.583 L 12.888 5.583 L 13.032 4.593 Z M 13.228 5.196 L 13.926 5.912 L 13.926 5.912 L 13.228 5.196 Z M 10.737 7.621 L 10.04 6.905 L 10.039 6.905 L 10.737 7.621 Z M 10.33 8.873 L 9.344 9.042 L 9.344 9.042 L 10.33 8.873 Z M 10.918 12.3 L 9.932 12.469 L 9.933 12.474 L 10.918 12.3 Z M 10.404 12.673 L 10.874 11.791 L 10.869 11.788 L 10.404 12.673 Z M 7.325 11.055 L 7.791 10.169 L 7.79 10.169 L 7.325 11.055 Z M 6.668 10.892 L 6.668 9.892 L 6.668 10.892 Z M 6.01 11.055 L 5.545 10.169 L 5.544 10.17 L 6.01 11.055 Z M 2.932 12.673 L 2.466 11.788 L 2.464 11.789 L 2.932 12.673 Z M 2.419 12.3 L 3.403 12.473 L 3.404 12.469 L 2.419 12.3 Z M 3.006 8.874 L 2.02 8.705 L 2.02 8.705 L 3.006 8.874 Z M 2.599 7.621 L 3.296 6.905 L 3.296 6.905 L 2.599 7.621 Z M 0.108 5.197 L 0.805 4.48 L 0.803 4.477 L 0.108 5.197 Z M 0.304 4.593 L 0.444 5.583 L 0.449 5.582 L 0.304 4.593 Z M 3.747 4.089 L 3.603 3.1 L 3.603 3.1 L 3.747 4.089 Z M 4.812 3.316 L 5.708 3.759 L 5.709 3.758 L 4.812 3.316 Z M 6.351 0.197 L 7.247 0.64 C 7.194 0.748 7.111 0.839 7.009 0.903 L 6.482 0.053 L 5.954 -0.796 C 5.74 -0.663 5.567 -0.473 5.455 -0.247 L 6.351 0.197 Z M 6.482 0.053 L 7.009 0.903 C 6.907 0.966 6.788 1 6.668 1 L 6.668 0 L 6.668 -1 C 6.416 -1 6.168 -0.929 5.954 -0.796 L 6.482 0.053 Z M 6.668 0 L 6.668 1 C 6.547 1 6.429 0.966 6.327 0.903 L 6.854 0.053 L 7.382 -0.796 C 7.167 -0.929 6.92 -1 6.668 -1 L 6.668 0 Z M 6.854 0.053 L 6.327 0.903 C 6.224 0.839 6.142 0.748 6.088 0.64 L 6.985 0.197 L 7.881 -0.247 C 7.769 -0.473 7.596 -0.663 7.382 -0.796 L 6.854 0.053 Z M 6.985 0.197 L 6.088 0.639 L 7.628 3.759 L 8.525 3.316 L 9.421 2.873 L 7.881 -0.246 L 6.985 0.197 Z M 8.525 3.316 L 7.628 3.759 C 7.801 4.109 8.057 4.412 8.373 4.642 L 8.961 3.834 L 9.549 3.025 C 9.495 2.985 9.451 2.933 9.421 2.873 L 8.525 3.316 Z M 8.961 3.834 L 8.373 4.642 C 8.689 4.872 9.056 5.022 9.443 5.079 L 9.588 4.089 L 9.733 3.1 C 9.667 3.09 9.603 3.064 9.549 3.025 L 8.961 3.834 Z M 9.588 4.089 L 9.443 5.079 L 12.887 5.583 L 13.032 4.593 L 13.177 3.604 L 9.733 3.1 L 9.588 4.089 Z M 13.032 4.593 L 12.888 5.583 C 12.769 5.566 12.657 5.515 12.565 5.437 L 13.209 4.673 L 13.853 3.908 C 13.66 3.745 13.425 3.64 13.175 3.604 L 13.032 4.593 Z M 13.209 4.673 L 12.565 5.437 C 12.472 5.36 12.404 5.258 12.366 5.143 L 13.317 4.834 L 14.268 4.524 C 14.19 4.284 14.046 4.071 13.853 3.908 L 13.209 4.673 Z M 13.317 4.834 L 12.366 5.143 C 12.329 5.028 12.324 4.905 12.353 4.788 L 13.324 5.028 L 14.295 5.267 C 14.356 5.022 14.346 4.765 14.268 4.524 L 13.317 4.834 Z M 13.324 5.028 L 12.353 4.788 C 12.382 4.671 12.443 4.564 12.53 4.48 L 13.228 5.196 L 13.926 5.912 C 14.107 5.736 14.235 5.512 14.295 5.267 L 13.324 5.028 Z M 13.228 5.196 L 12.53 4.479 L 10.04 6.905 L 10.737 7.621 L 11.435 8.338 L 13.926 5.912 L 13.228 5.196 Z M 10.737 7.621 L 10.039 6.905 C 9.759 7.178 9.549 7.515 9.428 7.888 L 10.379 8.197 L 11.33 8.506 C 11.351 8.442 11.387 8.384 11.435 8.337 L 10.737 7.621 Z M 10.379 8.197 L 9.428 7.888 C 9.307 8.26 9.278 8.656 9.344 9.042 L 10.33 8.873 L 11.316 8.705 C 11.304 8.639 11.309 8.57 11.33 8.506 L 10.379 8.197 Z M 10.33 8.873 L 9.344 9.042 L 9.932 12.469 L 10.918 12.3 L 11.903 12.131 L 11.315 8.704 L 10.33 8.873 Z M 10.918 12.3 L 9.933 12.474 C 9.912 12.354 9.925 12.232 9.97 12.119 L 10.898 12.494 L 11.825 12.868 C 11.92 12.633 11.947 12.376 11.903 12.126 L 10.918 12.3 Z M 10.898 12.494 L 9.97 12.119 C 10.016 12.007 10.092 11.909 10.19 11.838 L 10.778 12.647 L 11.365 13.456 C 11.57 13.307 11.73 13.103 11.825 12.868 L 10.898 12.494 Z M 10.778 12.647 L 10.19 11.838 C 10.288 11.767 10.404 11.725 10.525 11.716 L 10.594 12.714 L 10.664 13.711 C 10.917 13.694 11.16 13.605 11.365 13.456 L 10.778 12.647 Z M 10.594 12.714 L 10.525 11.716 C 10.646 11.708 10.767 11.734 10.874 11.791 L 10.404 12.673 L 9.934 13.556 C 10.158 13.675 10.411 13.729 10.664 13.711 L 10.594 12.714 Z M 10.404 12.673 L 10.869 11.788 L 7.791 10.169 L 7.325 11.055 L 6.86 11.94 L 9.938 13.558 L 10.404 12.673 Z M 7.325 11.055 L 7.79 10.169 C 7.444 9.987 7.059 9.892 6.668 9.892 L 6.668 10.892 L 6.668 11.892 C 6.735 11.892 6.801 11.909 6.86 11.94 L 7.325 11.055 Z M 6.668 10.892 L 6.668 9.892 C 6.276 9.892 5.891 9.987 5.545 10.169 L 6.01 11.055 L 6.475 11.94 C 6.534 11.909 6.6 11.892 6.668 11.892 L 6.668 10.892 Z M 6.01 11.055 L 5.544 10.17 L 2.466 11.788 L 2.932 12.673 L 3.397 13.558 L 6.475 11.94 L 6.01 11.055 Z M 2.932 12.673 L 2.464 11.789 C 2.571 11.733 2.692 11.707 2.812 11.716 L 2.742 12.713 L 2.671 13.711 C 2.923 13.729 3.176 13.676 3.4 13.557 L 2.932 12.673 Z M 2.742 12.713 L 2.812 11.716 C 2.933 11.725 3.049 11.767 3.147 11.838 L 2.559 12.647 L 1.971 13.455 C 2.175 13.604 2.418 13.693 2.671 13.711 L 2.742 12.713 Z M 2.559 12.647 L 3.147 11.838 C 3.245 11.909 3.321 12.006 3.366 12.119 L 2.439 12.493 L 1.512 12.868 C 1.607 13.103 1.766 13.306 1.971 13.455 L 2.559 12.647 Z M 2.439 12.493 L 3.366 12.119 C 3.411 12.231 3.424 12.354 3.403 12.473 L 2.419 12.3 L 1.434 12.127 C 1.39 12.377 1.417 12.633 1.512 12.868 L 2.439 12.493 Z M 2.419 12.3 L 3.404 12.469 L 3.991 9.043 L 3.006 8.874 L 2.02 8.705 L 1.433 12.131 L 2.419 12.3 Z M 3.006 8.874 L 3.991 9.043 C 4.058 8.657 4.029 8.261 3.908 7.888 L 2.957 8.197 L 2.006 8.507 C 2.027 8.57 2.032 8.639 2.02 8.705 L 3.006 8.874 Z M 2.957 8.197 L 3.908 7.888 C 3.787 7.516 3.577 7.178 3.296 6.905 L 2.599 7.621 L 1.901 8.338 C 1.949 8.385 1.985 8.443 2.006 8.507 L 2.957 8.197 Z M 2.599 7.621 L 3.296 6.905 L 0.805 4.48 L 0.108 5.197 L -0.59 5.913 L 1.901 8.338 L 2.599 7.621 Z M 0.108 5.197 L 0.803 4.477 C 0.89 4.561 0.951 4.668 0.981 4.786 L 0.011 5.028 L -0.96 5.27 C -0.898 5.516 -0.769 5.74 -0.587 5.916 L 0.108 5.197 Z M 0.011 5.028 L 0.981 4.786 C 1.01 4.903 1.006 5.027 0.968 5.142 L 0.017 4.833 L -0.934 4.525 C -1.012 4.766 -1.021 5.024 -0.96 5.27 L 0.011 5.028 Z M 0.017 4.833 L 0.968 5.142 C 0.931 5.257 0.862 5.36 0.769 5.438 L 0.126 4.672 L -0.517 3.906 C -0.711 4.069 -0.856 4.284 -0.934 4.525 L 0.017 4.833 Z M 0.126 4.672 L 0.769 5.438 C 0.677 5.515 0.564 5.566 0.444 5.583 L 0.304 4.593 L 0.164 3.602 C -0.087 3.638 -0.323 3.743 -0.517 3.906 L 0.126 4.672 Z M 0.304 4.593 L 0.449 5.582 L 3.892 5.079 L 3.747 4.089 L 3.603 3.1 L 0.159 3.603 L 0.304 4.593 Z M 3.747 4.089 L 3.891 5.079 C 4.278 5.023 4.646 4.873 4.963 4.643 L 4.375 3.834 L 3.787 3.025 C 3.733 3.064 3.67 3.09 3.603 3.1 L 3.747 4.089 Z M 4.375 3.834 L 4.963 4.643 C 5.279 4.413 5.535 4.11 5.708 3.759 L 4.812 3.316 L 3.915 2.873 C 3.886 2.933 3.842 2.985 3.787 3.025 L 4.375 3.834 Z M 4.812 3.316 L 5.709 3.758 L 7.248 0.639 L 6.351 0.197 L 5.454 -0.246 L 3.915 2.873 L 4.812 3.316 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.335,
    height: 12.715,
    viewBox: "0 0 13.335 12.715",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.333,
      top: 1.333,
      width: 13.335,
      height: 12.715,
      color: "rgb(146,116,23)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.351 0.197 L 5.455 -0.247 L 5.454 -0.246 L 6.351 0.197 Z M 6.668 0 L 6.668 -1 L 6.668 0 Z M 6.985 0.197 L 7.881 -0.246 L 7.881 -0.247 L 6.985 0.197 Z M 8.525 3.316 L 7.628 3.759 L 7.628 3.759 L 8.525 3.316 Z M 9.588 4.089 L 9.443 5.079 L 9.443 5.079 L 9.588 4.089 Z M 13.032 4.593 L 12.887 5.583 L 12.888 5.583 L 13.032 4.593 Z M 13.228 5.196 L 13.926 5.912 L 13.926 5.912 L 13.228 5.196 Z M 10.737 7.621 L 10.04 6.905 L 10.039 6.905 L 10.737 7.621 Z M 10.33 8.873 L 9.344 9.042 L 9.344 9.042 L 10.33 8.873 Z M 10.918 12.3 L 9.932 12.469 L 9.933 12.474 L 10.918 12.3 Z M 10.404 12.673 L 10.874 11.791 L 10.869 11.788 L 10.404 12.673 Z M 7.325 11.055 L 7.791 10.169 L 7.79 10.169 L 7.325 11.055 Z M 6.668 10.892 L 6.668 9.892 L 6.668 10.892 Z M 6.01 11.055 L 5.545 10.169 L 5.544 10.17 L 6.01 11.055 Z M 2.932 12.673 L 2.466 11.788 L 2.464 11.789 L 2.932 12.673 Z M 2.419 12.3 L 3.403 12.473 L 3.404 12.469 L 2.419 12.3 Z M 3.006 8.874 L 2.02 8.705 L 2.02 8.705 L 3.006 8.874 Z M 2.599 7.621 L 3.296 6.905 L 3.296 6.905 L 2.599 7.621 Z M 0.108 5.197 L 0.805 4.48 L 0.803 4.477 L 0.108 5.197 Z M 0.304 4.593 L 0.444 5.583 L 0.449 5.582 L 0.304 4.593 Z M 3.747 4.089 L 3.603 3.1 L 3.603 3.1 L 3.747 4.089 Z M 4.812 3.316 L 5.708 3.759 L 5.709 3.758 L 4.812 3.316 Z M 6.351 0.197 L 7.247 0.64 C 7.194 0.748 7.111 0.839 7.009 0.903 L 6.482 0.053 L 5.954 -0.796 C 5.74 -0.663 5.567 -0.473 5.455 -0.247 L 6.351 0.197 Z M 6.482 0.053 L 7.009 0.903 C 6.907 0.966 6.788 1 6.668 1 L 6.668 0 L 6.668 -1 C 6.416 -1 6.168 -0.929 5.954 -0.796 L 6.482 0.053 Z M 6.668 0 L 6.668 1 C 6.547 1 6.429 0.966 6.327 0.903 L 6.854 0.053 L 7.382 -0.796 C 7.167 -0.929 6.92 -1 6.668 -1 L 6.668 0 Z M 6.854 0.053 L 6.327 0.903 C 6.224 0.839 6.142 0.748 6.088 0.64 L 6.985 0.197 L 7.881 -0.247 C 7.769 -0.473 7.596 -0.663 7.382 -0.796 L 6.854 0.053 Z M 6.985 0.197 L 6.088 0.639 L 7.628 3.759 L 8.525 3.316 L 9.421 2.873 L 7.881 -0.246 L 6.985 0.197 Z M 8.525 3.316 L 7.628 3.759 C 7.801 4.109 8.057 4.412 8.373 4.642 L 8.961 3.834 L 9.549 3.025 C 9.495 2.985 9.451 2.933 9.421 2.873 L 8.525 3.316 Z M 8.961 3.834 L 8.373 4.642 C 8.689 4.872 9.056 5.022 9.443 5.079 L 9.588 4.089 L 9.733 3.1 C 9.667 3.09 9.603 3.064 9.549 3.025 L 8.961 3.834 Z M 9.588 4.089 L 9.443 5.079 L 12.887 5.583 L 13.032 4.593 L 13.177 3.604 L 9.733 3.1 L 9.588 4.089 Z M 13.032 4.593 L 12.888 5.583 C 12.769 5.566 12.657 5.515 12.565 5.437 L 13.209 4.673 L 13.853 3.908 C 13.66 3.745 13.425 3.64 13.175 3.604 L 13.032 4.593 Z M 13.209 4.673 L 12.565 5.437 C 12.472 5.36 12.404 5.258 12.366 5.143 L 13.317 4.834 L 14.268 4.524 C 14.19 4.284 14.046 4.071 13.853 3.908 L 13.209 4.673 Z M 13.317 4.834 L 12.366 5.143 C 12.329 5.028 12.324 4.905 12.353 4.788 L 13.324 5.028 L 14.295 5.267 C 14.356 5.022 14.346 4.765 14.268 4.524 L 13.317 4.834 Z M 13.324 5.028 L 12.353 4.788 C 12.382 4.671 12.443 4.564 12.53 4.48 L 13.228 5.196 L 13.926 5.912 C 14.107 5.736 14.235 5.512 14.295 5.267 L 13.324 5.028 Z M 13.228 5.196 L 12.53 4.479 L 10.04 6.905 L 10.737 7.621 L 11.435 8.338 L 13.926 5.912 L 13.228 5.196 Z M 10.737 7.621 L 10.039 6.905 C 9.759 7.178 9.549 7.515 9.428 7.888 L 10.379 8.197 L 11.33 8.506 C 11.351 8.442 11.387 8.384 11.435 8.337 L 10.737 7.621 Z M 10.379 8.197 L 9.428 7.888 C 9.307 8.26 9.278 8.656 9.344 9.042 L 10.33 8.873 L 11.316 8.705 C 11.304 8.639 11.309 8.57 11.33 8.506 L 10.379 8.197 Z M 10.33 8.873 L 9.344 9.042 L 9.932 12.469 L 10.918 12.3 L 11.903 12.131 L 11.315 8.704 L 10.33 8.873 Z M 10.918 12.3 L 9.933 12.474 C 9.912 12.354 9.925 12.232 9.97 12.119 L 10.898 12.494 L 11.825 12.868 C 11.92 12.633 11.947 12.376 11.903 12.126 L 10.918 12.3 Z M 10.898 12.494 L 9.97 12.119 C 10.016 12.007 10.092 11.909 10.19 11.838 L 10.778 12.647 L 11.365 13.456 C 11.57 13.307 11.73 13.103 11.825 12.868 L 10.898 12.494 Z M 10.778 12.647 L 10.19 11.838 C 10.288 11.767 10.404 11.725 10.525 11.716 L 10.594 12.714 L 10.664 13.711 C 10.917 13.694 11.16 13.605 11.365 13.456 L 10.778 12.647 Z M 10.594 12.714 L 10.525 11.716 C 10.646 11.708 10.767 11.734 10.874 11.791 L 10.404 12.673 L 9.934 13.556 C 10.158 13.675 10.411 13.729 10.664 13.711 L 10.594 12.714 Z M 10.404 12.673 L 10.869 11.788 L 7.791 10.169 L 7.325 11.055 L 6.86 11.94 L 9.938 13.558 L 10.404 12.673 Z M 7.325 11.055 L 7.79 10.169 C 7.444 9.987 7.059 9.892 6.668 9.892 L 6.668 10.892 L 6.668 11.892 C 6.735 11.892 6.801 11.909 6.86 11.94 L 7.325 11.055 Z M 6.668 10.892 L 6.668 9.892 C 6.276 9.892 5.891 9.987 5.545 10.169 L 6.01 11.055 L 6.475 11.94 C 6.534 11.909 6.6 11.892 6.668 11.892 L 6.668 10.892 Z M 6.01 11.055 L 5.544 10.17 L 2.466 11.788 L 2.932 12.673 L 3.397 13.558 L 6.475 11.94 L 6.01 11.055 Z M 2.932 12.673 L 2.464 11.789 C 2.571 11.733 2.692 11.707 2.812 11.716 L 2.742 12.713 L 2.671 13.711 C 2.923 13.729 3.176 13.676 3.4 13.557 L 2.932 12.673 Z M 2.742 12.713 L 2.812 11.716 C 2.933 11.725 3.049 11.767 3.147 11.838 L 2.559 12.647 L 1.971 13.455 C 2.175 13.604 2.418 13.693 2.671 13.711 L 2.742 12.713 Z M 2.559 12.647 L 3.147 11.838 C 3.245 11.909 3.321 12.006 3.366 12.119 L 2.439 12.493 L 1.512 12.868 C 1.607 13.103 1.766 13.306 1.971 13.455 L 2.559 12.647 Z M 2.439 12.493 L 3.366 12.119 C 3.411 12.231 3.424 12.354 3.403 12.473 L 2.419 12.3 L 1.434 12.127 C 1.39 12.377 1.417 12.633 1.512 12.868 L 2.439 12.493 Z M 2.419 12.3 L 3.404 12.469 L 3.991 9.043 L 3.006 8.874 L 2.02 8.705 L 1.433 12.131 L 2.419 12.3 Z M 3.006 8.874 L 3.991 9.043 C 4.058 8.657 4.029 8.261 3.908 7.888 L 2.957 8.197 L 2.006 8.507 C 2.027 8.57 2.032 8.639 2.02 8.705 L 3.006 8.874 Z M 2.957 8.197 L 3.908 7.888 C 3.787 7.516 3.577 7.178 3.296 6.905 L 2.599 7.621 L 1.901 8.338 C 1.949 8.385 1.985 8.443 2.006 8.507 L 2.957 8.197 Z M 2.599 7.621 L 3.296 6.905 L 0.805 4.48 L 0.108 5.197 L -0.59 5.913 L 1.901 8.338 L 2.599 7.621 Z M 0.108 5.197 L 0.803 4.477 C 0.89 4.561 0.951 4.668 0.981 4.786 L 0.011 5.028 L -0.96 5.27 C -0.898 5.516 -0.769 5.74 -0.587 5.916 L 0.108 5.197 Z M 0.011 5.028 L 0.981 4.786 C 1.01 4.903 1.006 5.027 0.968 5.142 L 0.017 4.833 L -0.934 4.525 C -1.012 4.766 -1.021 5.024 -0.96 5.27 L 0.011 5.028 Z M 0.017 4.833 L 0.968 5.142 C 0.931 5.257 0.862 5.36 0.769 5.438 L 0.126 4.672 L -0.517 3.906 C -0.711 4.069 -0.856 4.284 -0.934 4.525 L 0.017 4.833 Z M 0.126 4.672 L 0.769 5.438 C 0.677 5.515 0.564 5.566 0.444 5.583 L 0.304 4.593 L 0.164 3.602 C -0.087 3.638 -0.323 3.743 -0.517 3.906 L 0.126 4.672 Z M 0.304 4.593 L 0.449 5.582 L 3.892 5.079 L 3.747 4.089 L 3.603 3.1 L 0.159 3.603 L 0.304 4.593 Z M 3.747 4.089 L 3.891 5.079 C 4.278 5.023 4.646 4.873 4.963 4.643 L 4.375 3.834 L 3.787 3.025 C 3.733 3.064 3.67 3.09 3.603 3.1 L 3.747 4.089 Z M 4.375 3.834 L 4.963 4.643 C 5.279 4.413 5.535 4.11 5.708 3.759 L 4.812 3.316 L 3.915 2.873 C 3.886 2.933 3.842 2.985 3.787 3.025 L 4.375 3.834 Z M 4.812 3.316 L 5.709 3.758 L 7.248 0.639 L 6.351 0.197 L 5.454 -0.246 L 3.915 2.873 L 4.812 3.316 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\"We went on a day trip to Savannah with Vagabond cruises. The boat rip was a 1.75 hr and was most enjoyable. We spent 4hours in the historic district before returning for the return trip back to Hilton Head. The boat docks in the historic district so everything is walkable. The Captain and crew were courteous and friendly. Also passenger safety was a priority while aboard.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(1,11,19)",
      flexShrink: 0
    }
  }, "Barrie A."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 77,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(1,11,19)",
      flexShrink: 0
    }
  }, "TripAdvisor")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -2,
      top: 3663,
      width: 1517,
      height: 751,
      display: "flex",
      flexDirection: "column",
      gap: 32,
      padding: "45px 75px 45px 75px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "100%",
      letterSpacing: "0.030em",
      color: "rgb(146,116,23)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Guest Favorites"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Related Trips")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.85,
      borderRadius: 100,
      boxShadow: "inset 0 0 0 1px rgb(147,44,26)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(205,43,7)",
      flexShrink: 0
    }
  }, "Explore More Cruises"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "url(vagabond/assets/x-i3.webp) center / cover no-repeat",
      height: 200,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Daufuskie Island \nMorning Ferry"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(17,24,39)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Spend three hours exploring Daufuskie Island. Rent a golf cart, grab lunch at Old Daufuskie Crab Co., and explore this unique island at your own pace.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 398,
      display: "flex",
      flexDirection: "row",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "wrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0,
      color: "rgb(44,48,119)"
    },
    icon: "boat"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "The Vagabond")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0,
      color: "rgb(44,48,119)"
    },
    icon: "duration"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "4 Hours")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0,
      color: "rgb(44,48,119)"
    },
    icon: "clock"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "9AM - 1PM"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 40,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(113,113,130)",
      flexShrink: 0
    }
  }, "STARTING FROM"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(227,61,24)",
      flexShrink: 0
    }
  }, "$39.95"))), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 403 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(209,213,219)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 403 0 L 403 -0.5 L 403 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.85,
      borderRadius: 100,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "Learn More")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 292,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(242,240,239)",
      flexShrink: 0
    }
  }, "Book Now")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "url(vagabond/assets/28eec714ec4f9261.webp) center / cover no-repeat",
      height: 200,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Daufuskie Island \nAfternoon Ferry"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(17,24,39)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Trips depart daily, with limited winter availability. Rent a golf cart, grab lunch at Old Daufuskie Crab Co., and explore the island at your own pace.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 398,
      display: "flex",
      flexDirection: "row",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "wrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0,
      color: "rgb(44,48,119)"
    },
    icon: "boat"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "Tammy Jane, The Vagabond")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0,
      color: "rgb(44,48,119)"
    },
    icon: "duration"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "4.5 Hours")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0,
      color: "rgb(44,48,119)"
    },
    icon: "clock"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "11:30AM - 5PM"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 403,
      height: 40,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(113,113,130)",
      flexShrink: 0
    }
  }, "STARTING FROM"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(227,61,24)",
      flexShrink: 0
    }
  }, "$44.95"))), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 406 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(209,213,219)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 406 0 L 406 -0.5 L 406 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.85,
      borderRadius: 100,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "Learn More")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 292,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(242,240,239)",
      flexShrink: 0
    }
  }, "Book Now")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "url(vagabond/assets/x-p3.webp) center / cover no-repeat",
      height: 200,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 233,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Ocean Dolphin \nCruise"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 371,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "Cruise through Calibogue Sound and the Atlantic, with guaranteed playful Atlantic bottlenose dolphins, pelicans, herons, and more Lowcountry wildlife."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 398,
      display: "flex",
      flexDirection: "row",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "wrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0,
      color: "rgba(223,175,44,0.12)"
    },
    icon: "boat"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "The Vagabond")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0,
      color: "rgb(221,153,52)"
    },
    icon: "duration"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "1.5 Hours"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 403,
      height: 40,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(113,113,130)",
      flexShrink: 0
    }
  }, "STARTING FROM"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(227,61,24)",
      flexShrink: 0
    }
  }, "$39.95")))), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 406 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(209,213,219)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 406 0 L 406 -0.5 L 406 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.85,
      borderRadius: 100,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "Learn More")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 292,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(242,240,239)",
      flexShrink: 0
    }
  }, "Book Now"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -5,
      top: 1379,
      width: 1517,
      height: 569,
      backgroundColor: "rgba(243,223,191,0.2)",
      display: "flex",
      flexDirection: "column",
      gap: 48,
      padding: "45px 75px 45px 75px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 479,
      display: "flex",
      flexDirection: "row",
      gap: 48,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "url(vagabond/item/assets/6c7f8fed8b09d45e.webp) center / cover no-repeat",
      width: 720,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-6c7f8fed8b09d45e",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      backgroundColor: "rgba(243,223,191,0.45)",
      boxShadow: "inset 0 0 0 1px var(--darker-gold-no-whitebg)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 14px 6px 14px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "1.500px",
      color: "rgb(1,11,19)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "hosting 100+ private charters each year")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  }, "vessel feature")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Spirit of Harbour Town"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.5,
      color: "rgb(74,85,101)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Hilton Head\u2019s only climate-controlled luxury yacht")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(75,85,99)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Cruise year-round in comfort aboard a 74-foot yacht with panoramic windows, an open-air upper deck, full bar, galley, restrooms, and Lowcountry views.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "wrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 11,
      height: 11,
      flexShrink: 0,
      color: "rgb(44,48,119)"
    },
    icon: "users"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "Up to 148 Guests")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 10,
      height: 8.75,
      flexShrink: 0,
      color: "rgb(44,48,119)"
    },
    icon: "snowflake"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "Climate-controlled cabin")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0,
      color: "rgb(44,48,119)"
    },
    icon: "food"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "Full-service dining & bar")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 185,
      opacity: 0.85,
      borderRadius: 100,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "Learn More")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 406,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(242,240,239)",
      flexShrink: 0
    }
  }, "Book Historic Savannah Cruise")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1512,
      height: 145,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 34,
      width: 1512,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      padding: "5px 75px 5px 75px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-9ceb0b9a1aed9d1d-2f7224f4",
    style: {
      position: "relative",
      width: 116,
      height: 101,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 49,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 0px 9px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(MenuItems2, {
    style: {
      position: "relative",
      height: 49,
      width: "auto",
      flexShrink: 0
    },
    text1: "cruises",
    menuItem: "nested"
  }), /*#__PURE__*/React.createElement(MenuItems2, {
    style: {
      position: "relative",
      height: 49,
      width: "auto",
      flexShrink: 0
    },
    text1: "Sailing",
    menuItem: "nested"
  }), /*#__PURE__*/React.createElement(MenuItems2, {
    style: {
      position: "relative",
      height: 49,
      width: "auto",
      flexShrink: 0
    },
    text1: "Private Charters",
    menuItem: "nested"
  }), /*#__PURE__*/React.createElement(MenuItems2, {
    style: {
      position: "relative",
      height: 49,
      width: "auto",
      flexShrink: 0
    },
    text1: "Weddings",
    menuItem: "nested"
  }), /*#__PURE__*/React.createElement(MenuItems2, {
    style: {
      position: "relative",
      height: 49,
      width: "auto",
      flexShrink: 0
    },
    text1: "plan your visit",
    menuItem: "nested"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(227,61,24)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(242,240,239)",
      flexShrink: 0
    }
  }, "Search By Date")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1512,
      height: 34,
      backgroundColor: "rgb(23,29,28)",
      display: "flex",
      flexDirection: "row",
      gap: 424,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 24,
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.017,
    viewBox: "0 0 13.017 16",
    fill: "none",
    style: {
      position: "relative",
      width: 13.017,
      opacity: 0.76,
      mixBlendMode: "hard-light",
      flexShrink: 0,
      alignSelf: "stretch",
      filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.15))",
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.861 2.555 C 9.362 1.957 9.71 1.14 9.71 0.315 C 9.71 0.202 9.702 0.089 9.678 0 C 8.877 0.032 7.907 0.534 7.325 1.213 C 6.872 1.73 6.452 2.555 6.452 3.379 C 6.452 3.509 6.468 3.63 6.484 3.671 C 6.533 3.679 6.613 3.695 6.694 3.695 C 7.422 3.695 8.327 3.21 8.861 2.555 Z M 9.435 3.865 C 8.222 3.865 7.244 4.6 6.613 4.6 C 5.942 4.6 5.069 3.913 4.018 3.913 C 2.021 3.913 0 5.562 0 8.667 C 0 10.607 0.744 12.653 1.674 13.971 C 2.466 15.086 3.161 16 4.156 16 C 5.15 16 5.587 15.345 6.807 15.345 C 8.061 15.345 8.336 15.984 9.435 15.984 C 10.518 15.984 11.238 14.989 11.917 14.011 C 12.685 12.887 13.001 11.796 13.017 11.739 C 12.952 11.723 10.874 10.874 10.874 8.505 C 10.874 6.452 12.507 5.53 12.596 5.457 C 11.529 3.913 9.888 3.865 9.435 3.865 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.76,
      mixBlendMode: "hard-light",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.350px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.15))"
    }
  }, "Safari")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.76,
      mixBlendMode: "hard-light",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.350px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.15))"
    }
  }, "File")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.76,
      mixBlendMode: "hard-light",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.350px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.15))"
    }
  }, "Edit")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.76,
      mixBlendMode: "hard-light",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.350px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.15))"
    }
  }, "View")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.76,
      mixBlendMode: "hard-light",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.350px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.15))"
    }
  }, "History")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.76,
      mixBlendMode: "hard-light",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.350px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.15))"
    }
  }, "Window")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.76,
      mixBlendMode: "hard-light",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.350px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.15))"
    }
  }, "Help"))))));
}

// figma node: 273:2240 Check Calendar
function CheckCalendar(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 100,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.941,
      top: 2.905,
      width: 94.118,
      height: 94.189,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.882,
    height: 14.706,
    viewBox: "0 0 5.882 14.706",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.588,
      top: 0,
      width: 5.882,
      height: 14.706
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2.941 L 0 11.765 C 0 13.382 1.324 14.706 2.941 14.706 C 4.559 14.706 5.882 13.382 5.882 11.765 L 5.882 2.941 C 5.882 1.324 4.559 0 2.941 0 C 1.324 0 0 1.324 0 2.941 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.882,
    height: 14.706,
    viewBox: "0 0 5.882 14.706",
    fill: "none",
    style: {
      position: "absolute",
      left: 67.647,
      top: 0,
      width: 5.882,
      height: 14.706
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2.941 L 0 11.765 C 0 13.382 1.324 14.706 2.941 14.706 C 4.559 14.706 5.882 13.382 5.882 11.765 L 5.882 2.941 C 5.882 1.324 4.559 0 2.941 0 C 1.324 0 0 1.324 0 2.941 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 94.118,
    height: 85.366,
    viewBox: "0 0 94.118 85.366",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 8.823,
      width: 94.118,
      height: 85.366
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 88.235 0 L 79.412 0 L 79.412 2.555 C 79.412 6.823 76.553 10.757 72.366 11.588 C 66.744 12.704 61.765 8.376 61.765 2.941 L 61.765 0 L 32.353 0 L 32.353 2.555 C 32.353 6.823 29.494 10.757 25.308 11.588 C 19.685 12.704 14.706 8.376 14.706 2.941 L 14.706 0 L 5.882 0 C 2.647 0 0 2.647 0 5.882 L 0 79.412 C 0 82.647 2.647 85.294 5.882 85.294 L 88.145 85.366 C 91.393 85.368 94.029 82.738 94.033 79.49 L 94.118 5.882 C 94.118 2.647 91.471 0 88.235 0 Z M 88.235 76.5 C 88.235 78.125 86.918 79.442 85.293 79.441 L 8.822 79.412 C 7.205 79.411 5.882 78.088 5.882 76.471 L 5.882 23.529 C 5.882 21.882 7.206 20.588 8.824 20.588 L 85.294 20.588 C 86.912 20.588 88.235 21.882 88.235 23.529 L 88.235 76.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 52.942,
    height: 41.176,
    viewBox: "0 0 52.942 41.176",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.589,
      top: 38.248,
      width: 52.942,
      height: 41.176
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 42.966 1.657 L 16.692 27.105 L 9.976 20.596 C 7.645 18.339 3.919 18.396 1.657 20.729 C -0.603 23.061 -0.544 26.786 1.79 29.047 L 12.599 39.519 C 13.74 40.625 15.216 41.176 16.692 41.176 C 18.169 41.176 19.645 40.625 20.785 39.519 L 51.152 10.107 C 53.486 7.847 53.545 4.124 51.284 1.789 C 49.025 -0.546 45.301 -0.601 42.966 1.657 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}

// figma node: 195:601 Button (6 variants)
const __venc_Button = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Button = p => "button=" + __venc_Button(p.button);
function Button(_p = {}) {
  const props = {
    ..._p,
    hasIcon: _p.hasIcon ?? true,
    textInput: _p.textInput ?? "Book Now",
    button: _p.button ?? "square"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(128,26,29)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 24px 12px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.hasIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(CheckCalendar, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.textInput));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 24px 12px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.hasIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(CheckCalendar, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.textInput));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "rgb(128,26,29)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 24px 12px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.hasIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(CheckCalendar, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.textInput));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      boxShadow: "inset 0 0 0 1px rgb(0,0,0)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 24px 12px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.hasIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(CheckCalendar, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.textInput));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 100,
      backgroundColor: "rgb(128,26,29)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 24px 12px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.hasIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(CheckCalendar, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.textInput));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 100,
      boxShadow: "inset 0 0 0 1px rgb(0,0,0)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 24px 12px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.hasIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(255,255,255)"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(CheckCalendar, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.textInput));
  const __impls = {
    // figma: Button=Square
    "button=square": __body0,
    // figma: Button=Square/Hollow
    "button=square/hollow": __body1,
    // figma: Button=Rounded
    "button=rounded": __body2,
    // figma: Button=Rounded/Hollow
    "button=rounded/hollow": __body3,
    // figma: Button=Pill
    "button=pill": __body4,
    // figma: Button=Pill/Hollow
    "button=pill/hollow": __body5
  };
  return (__impls[__vkey_Button(props)] ?? __body0)();
}

// figma node: 714:1060 Navigation - Mobile
function NavigationMobile(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 390,
      height: 60,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-73b70de5f1ae5e99-5dc96eb8",
    style: {
      position: "absolute",
      left: 9,
      top: 5,
      width: 117,
      height: 51
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 309,
      top: 21,
      width: 32,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(0,0,0)",
      textTransform: "uppercase"
    }
  }, props.text1 ?? "MENU"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 354,
      top: 26,
      width: 17,
      height: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17,
    height: 1.500,
    viewBox: "0 -0.750 17 1.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 17,
      height: 1.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 17 0.75 C 17.414 0.75 17.75 0.414 17.75 0 C 17.75 -0.414 17.414 -0.75 17 -0.75 L 17 0.75 Z M 0 0.75 L 17 0.75 L 17 -0.75 L 0 -0.75 L 0 0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11,
    height: 1.500,
    viewBox: "0 -0.750 11 1.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 4,
      width: 11,
      height: 1.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 11 0.75 C 11.414 0.75 11.75 0.414 11.75 0 C 11.75 -0.414 11.414 -0.75 11 -0.75 L 11 0.75 Z M 0 0.75 L 11 0.75 L 11 -0.75 L 0 -0.75 L 0 0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 1.500,
    viewBox: "0 -0.750 15 1.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 8,
      width: 15,
      height: 1.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 -0.75 Z M 15 0.75 C 15.414 0.75 15.75 0.414 15.75 0 C 15.75 -0.414 15.414 -0.75 15 -0.75 L 15 0.75 Z M 0 0.75 L 15 0.75 L 15 -0.75 L 0 -0.75 L 0 0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}

// figma node: 9359:22136 Item Page - Desktop — Mobile 390
function ItemPageDesktopMobile390(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(NavigationMobile, {
    style: {
      position: "relative",
      height: 64,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-af4b9646e4fa2755",
    style: {
      position: "relative",
      height: 296,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 15,
      padding: "48px 20px 24px 20px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(223,175,44)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgba(255,255,255,0.4)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgba(255,255,255,0.4)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgba(255,255,255,0.4)",
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 15,
      padding: "20px 20px 20px 20px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      backgroundColor: "rgba(243,223,191,0.75)",
      boxShadow: "inset 0 0 0 1px var(--darker-gold-no-whitebg)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 14px 6px 14px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "1.500px",
      color: "rgb(1,11,19)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "most popular")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Historic Savannah Cruise"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Cruise from Harbour Town directly to River Street, then enjoy more than four hours to explore Savannah's shops, restaurants, historic squares, and cobblestone streets at your own pace."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.85,
      borderRadius: 100,
      boxShadow: "inset 0 0 0 1px rgb(227,61,24)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(205,43,7)",
      flexShrink: 0
    }
  }, "View Availibilty")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(243,223,191)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 350,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 215,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 21,
      height: 21,
      flexShrink: 0
    },
    icon: "mapMarker"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 168,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "DEPARTURE"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(1,11,19)",
      flexShrink: 0
    }
  }, "9AM from Harbour Town")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 215,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 21,
      height: 21,
      flexShrink: 0
    },
    icon: "duration"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 188,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "TRAVEL TIME"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(1,11,19)",
      flexShrink: 0
    }
  }, "1 Hour 45 Minutes each way")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 197,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 215,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 21,
      height: 21,
      flexShrink: 0
    },
    icon: "clock"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 168,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "TIME IN SAVANNAH"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(1,11,19)",
      flexShrink: 0
    }
  }, "Over 4 hours to Explore")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 215,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 21,
      height: 21,
      flexShrink: 0
    },
    icon: "boat"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 168,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "VESSEL"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(1,11,19)",
      flexShrink: 0
    }
  }, "Spirit of Harbour Town")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "40px 20px 24px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(146,116,23)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "The journey is part of the experience"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.2000000476837158,
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "The Easiest Way to Experience Savannah"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(75,85,99)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Whether you are planning a family adventure, a romantic evening, or a day beyond the island, there is a Vagabond experience made for it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "5px 0px 5px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      height: 11,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Depart directly from Harbour Town"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: 1.4500000476837158,
      color: "rgb(75,85,99)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Skip traffic, parking, and navigating an unfamiliar city. This is more than a ride to Savannah\u2014it is a scenic, comfortable start to a full day of exploring one of the South\u2019s most memorable destinations."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "5px 0px 5px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      height: 11,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Arrive right on River Street"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: 1.4500000476837158,
      color: "rgb(75,85,99)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Spend more than four hours in Savannah exploring restaurants, shops, historic attractions, and the Old Town Trolley."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "5px 0px 5px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      height: 11,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Relax in a heated and air-conditioned cabin"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: 1.4500000476837158,
      color: "rgb(75,85,99)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Enjoy a covered open-air upper deck with views of the Lowcountry waterways."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "5px 0px 5px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      height: 11,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Purchase coffee, snacks, beer, wine, cocktails, and more onboard"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: 1.4500000476837158,
      color: "rgb(75,85,99)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Access clean, modern onboard restrooms throughout the journey."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "5px 0px 5px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      height: 11,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Full-Service Bar & Snacks"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: 1.4500000476837158,
      color: "rgb(75,85,99)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Enjoy seasonal cocktails, mimosas, Bloody Marys, wine, local microbrews, coffee, and snacks available for purchase."))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px var(--darker-gold-no-whitebg)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "24px 24px 24px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 168,
      height: 53,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "ROUND-TRIP FARE"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "baseline",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "$84.95"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "/ adult"))), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 345 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(229,231,235)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 345 0 L 345 -0.5 L 345 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 28,
      height: 28,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 3,
      width: 3,
      height: 6,
      color: "rgb(75,85,99)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.293 6.707 C 2.683 7.098 3.317 7.098 3.707 6.707 C 4.098 6.317 4.098 5.683 3.707 5.293 L 3 6 L 2.293 6.707 Z M 0 3 L -0.707 2.293 L -1.414 3 L -0.707 3.707 L 0 3 Z M 3.707 0.707 C 4.098 0.317 4.098 -0.317 3.707 -0.707 C 3.317 -1.098 2.683 -1.098 2.293 -0.707 L 3 0 L 3.707 0.707 Z M 3 6 L 3.707 5.293 L 0.707 2.293 L 0 3 L -0.707 3.707 L 2.293 6.707 L 3 6 Z M 0 3 L 0.707 3.707 L 3.707 0.707 L 3 0 L 2.293 -0.707 L -0.707 2.293 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "September 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 28,
      height: 28,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 3,
      width: 3,
      height: 6,
      color: "rgb(75,85,99)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.707 5.293 C -1.098 5.683 -1.098 6.317 -0.707 6.707 C -0.317 7.098 0.317 7.098 0.707 6.707 L 0 6 L -0.707 5.293 Z M 3 3 L 3.707 3.707 L 4.414 3 L 3.707 2.293 L 3 3 Z M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 0 6 L 0.707 6.707 L 3.707 3.707 L 3 3 L 2.293 2.293 L -0.707 5.293 L 0 6 Z M 3 3 L 3.707 2.293 L 0.707 -0.707 L 0 0 L -0.707 0.707 L 2.293 3.707 L 3 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 28,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Su")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 28,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 28,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Tu")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 28,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "We")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 28,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Th")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 28,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Fr")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 28,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Sa"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(243,244,246)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(156,163,175)",
      flexShrink: 0
    }
  }, "31")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "1")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "2")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "3")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "5")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "6"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "8")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "10")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--darker-gold-no-whitebg)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(9,15,30)",
      flexShrink: 0
    }
  }, "11")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "12")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "13"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "14")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "15")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--darker-gold-no-whitebg)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(9,15,30)",
      flexShrink: 0
    }
  }, "16")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "17")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--darker-gold-no-whitebg)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(9,15,30)",
      flexShrink: 0
    }
  }, "18")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "19")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "20"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "21")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "22")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--darker-gold-no-whitebg)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(9,15,30)",
      flexShrink: 0
    }
  }, "23")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "24")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--darker-gold-no-whitebg)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(9,15,30)",
      flexShrink: 0
    }
  }, "25")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "26")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "27"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "28")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0
    }
  }, "29")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--darker-gold-no-whitebg)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(9,15,30)",
      flexShrink: 0
    }
  }, "30")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(243,244,246)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(156,163,175)",
      flexShrink: 0
    }
  }, "1")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(243,244,246)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(156,163,175)",
      flexShrink: 0
    }
  }, "2")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(243,244,246)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(156,163,175)",
      flexShrink: 0
    }
  }, "3")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(243,244,246)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(156,163,175)",
      flexShrink: 0
    }
  }, "4")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(17,24,39)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Selected date")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Available")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(156,163,175)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Unavailable")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(227,61,24)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(242,240,239)",
      flexShrink: 0
    }
  }, "Book Now")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 390,
      backgroundColor: "rgba(243,223,191,0.2)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 24px 32px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 244,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-6c7f8fed8b09d45e",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      backgroundColor: "rgba(243,223,191,0.451)",
      boxShadow: "inset 0 0 0 1px var(--darker-gold-no-whitebg)",
      display: "flex",
      flexDirection: "column",
      padding: "6px 14px 6px 14px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      lineHeight: "100%",
      letterSpacing: "1.500px",
      color: "rgb(1,11,19)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "hosting 100+ private charters each year")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "0.030em",
      color: "rgb(221,153,52)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "vessel feature")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Spirit of Harbour Town"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.5,
      color: "rgb(74,85,101)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Hilton Head\u2019s only climate-controlled luxury yacht")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(75,85,99)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Cruise year-round in comfort aboard a 74-foot yacht with panoramic windows, an open-air upper deck, full bar, galley, restrooms, and Lowcountry views."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "wrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "8px 16px 8px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.668,
    height: 10.500,
    viewBox: "0 0 11.668 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.166,
      top: 1.75,
      width: 11.668,
      height: 10.5,
      color: "rgb(44,48,119)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.667 10.5 C 7.667 10.776 7.891 11 8.167 11 C 8.443 11 8.667 10.776 8.667 10.5 L 8.167 10.5 L 7.667 10.5 Z M 8.167 9.333 L 8.667 9.333 L 8.167 9.333 Z M 5.834 7 L 5.834 6.5 L 5.834 7 Z M 2.334 7 L 2.334 6.5 L 2.334 7 Z M 0 9.333 L -0.5 9.333 L 0 9.333 Z M -0.5 10.5 C -0.5 10.776 -0.276 11 0 11 C 0.276 11 0.5 10.776 0.5 10.5 L 0 10.5 L -0.5 10.5 Z M 8.293 -0.409 C 8.025 -0.479 7.753 -0.318 7.683 -0.051 C 7.614 0.216 7.775 0.489 8.042 0.559 L 8.167 0.075 L 8.293 -0.409 Z M 8.042 4.108 C 7.775 4.177 7.614 4.45 7.683 4.717 C 7.753 4.985 8.025 5.145 8.293 5.076 L 8.167 4.592 L 8.042 4.108 Z M 11.168 10.5 C 11.168 10.776 11.391 11 11.668 11 C 11.944 11 12.168 10.776 12.168 10.5 L 11.668 10.5 L 11.168 10.5 Z M 11.668 9.333 L 12.168 9.333 L 12.168 9.333 L 11.668 9.333 Z M 10.042 6.592 C 9.775 6.523 9.502 6.683 9.433 6.951 C 9.364 7.218 9.525 7.491 9.792 7.56 L 9.917 7.076 L 10.042 6.592 Z M 8.167 10.5 L 8.667 10.5 L 8.667 9.333 L 8.167 9.333 L 7.667 9.333 L 7.667 10.5 L 8.167 10.5 Z M 8.167 9.333 L 8.667 9.333 C 8.667 8.582 8.369 7.861 7.837 7.33 L 7.484 7.683 L 7.13 8.037 C 7.474 8.381 7.667 8.847 7.667 9.333 L 8.167 9.333 Z M 7.484 7.683 L 7.837 7.33 C 7.306 6.799 6.585 6.5 5.834 6.5 L 5.834 7 L 5.834 7.5 C 6.32 7.5 6.786 7.693 7.13 8.037 L 7.484 7.683 Z M 5.834 7 L 5.834 6.5 L 2.334 6.5 L 2.334 7 L 2.334 7.5 L 5.834 7.5 L 5.834 7 Z M 2.334 7 L 2.334 6.5 C 1.582 6.5 0.861 6.799 0.33 7.33 L 0.683 7.683 L 1.037 8.037 C 1.381 7.693 1.847 7.5 2.334 7.5 L 2.334 7 Z M 0.683 7.683 L 0.33 7.33 C -0.201 7.861 -0.5 8.582 -0.5 9.333 L 0 9.333 L 0.5 9.333 C 0.5 8.847 0.693 8.381 1.037 8.037 L 0.683 7.683 Z M 0 9.333 L -0.5 9.333 L -0.5 10.5 L 0 10.5 L 0.5 10.5 L 0.5 9.333 L 0 9.333 Z M 8.167 0.075 L 8.042 0.559 C 8.435 0.661 8.783 0.89 9.032 1.211 L 9.427 0.905 L 9.823 0.599 C 9.439 0.103 8.9 -0.252 8.293 -0.409 L 8.167 0.075 Z M 9.427 0.905 L 9.032 1.211 C 9.28 1.533 9.415 1.927 9.415 2.333 L 9.915 2.333 L 10.415 2.333 C 10.415 1.706 10.207 1.096 9.823 0.599 L 9.427 0.905 Z M 9.915 2.333 L 9.415 2.333 C 9.415 2.739 9.28 3.134 9.032 3.455 L 9.427 3.761 L 9.823 4.067 C 10.207 3.571 10.415 2.961 10.415 2.333 L 9.915 2.333 Z M 9.427 3.761 L 9.032 3.455 C 8.783 3.776 8.435 4.006 8.042 4.108 L 8.167 4.592 L 8.293 5.076 C 8.9 4.918 9.439 4.564 9.823 4.067 L 9.427 3.761 Z M 11.668 10.5 L 12.168 10.5 L 12.168 9.333 L 11.668 9.333 L 11.168 9.333 L 11.168 10.5 L 11.668 10.5 Z M 11.668 9.333 L 12.168 9.333 C 12.167 8.705 11.958 8.095 11.574 7.599 L 11.178 7.905 L 10.783 8.212 C 11.032 8.533 11.167 8.927 11.168 9.334 L 11.668 9.333 Z M 11.178 7.905 L 11.574 7.599 C 11.189 7.103 10.65 6.749 10.042 6.592 L 9.917 7.076 L 9.792 7.56 C 10.186 7.661 10.534 7.891 10.783 8.212 L 11.178 7.905 Z M 6.417 2.333 L 5.917 2.333 C 5.917 3.346 5.096 4.167 4.084 4.167 L 4.084 4.667 L 4.084 5.167 C 5.649 5.167 6.917 3.898 6.917 2.333 L 6.417 2.333 Z M 4.084 4.667 L 4.084 4.167 C 3.071 4.167 2.25 3.346 2.25 2.333 L 1.75 2.333 L 1.25 2.333 C 1.25 3.898 2.519 5.167 4.084 5.167 L 4.084 4.667 Z M 1.75 2.333 L 2.25 2.333 C 2.25 1.321 3.071 0.5 4.084 0.5 L 4.084 0 L 4.084 -0.5 C 2.519 -0.5 1.25 0.768 1.25 2.333 L 1.75 2.333 Z M 4.084 0 L 4.084 0.5 C 5.096 0.5 5.917 1.321 5.917 2.333 L 6.417 2.333 L 6.917 2.333 C 6.917 0.768 5.649 -0.5 4.084 -0.5 L 4.084 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "Up to 148 Guests")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "8px 16px 8px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.668,
    height: 10.500,
    viewBox: "0 0 11.668 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.166,
      top: 1.75,
      width: 11.668,
      height: 10.5,
      color: "rgb(44,48,119)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.22 10.14 C 4.343 10.387 4.644 10.487 4.891 10.364 C 5.138 10.24 5.238 9.94 5.114 9.693 L 4.667 9.917 L 4.22 10.14 Z M 3.938 8.458 L 4.385 8.235 L 4.217 7.899 L 3.848 7.966 L 3.938 8.458 Z M 2.244 8.258 C 1.972 8.307 1.792 8.568 1.842 8.839 C 1.891 9.111 2.151 9.291 2.423 9.242 L 2.334 8.75 L 2.244 8.258 Z M 5.114 0.807 C 5.238 0.56 5.138 0.26 4.891 0.136 C 4.644 0.013 4.343 0.113 4.22 0.36 L 4.667 0.583 L 5.114 0.807 Z M 3.938 2.042 L 3.848 2.534 L 4.217 2.601 L 4.385 2.265 L 3.938 2.042 Z M 2.423 1.258 C 2.151 1.209 1.891 1.389 1.842 1.661 C 1.792 1.932 1.972 2.193 2.244 2.242 L 2.334 1.75 L 2.423 1.258 Z M 6.553 9.693 C 6.43 9.94 6.53 10.24 6.777 10.364 C 7.024 10.487 7.324 10.387 7.448 10.14 L 7.001 9.917 L 6.553 9.693 Z M 7.73 8.458 L 7.819 7.966 L 7.45 7.899 L 7.283 8.235 L 7.73 8.458 Z M 9.245 9.242 C 9.516 9.291 9.777 9.111 9.826 8.839 C 9.875 8.568 9.695 8.307 9.424 8.258 L 9.334 8.75 L 9.245 9.242 Z M 7.448 0.36 C 7.324 0.113 7.024 0.013 6.777 0.136 C 6.53 0.26 6.43 0.56 6.553 0.807 L 7.001 0.583 L 7.448 0.36 Z M 7.73 2.042 L 7.283 2.265 L 7.45 2.601 L 7.819 2.534 L 7.73 2.042 Z M 9.424 2.242 C 9.695 2.193 9.875 1.932 9.826 1.661 C 9.777 1.389 9.516 1.209 9.245 1.258 L 9.334 1.75 L 9.424 2.242 Z M 8.303 10.724 C 8.427 10.971 8.727 11.071 8.974 10.947 C 9.221 10.824 9.321 10.523 9.198 10.276 L 8.751 10.5 L 8.303 10.724 Z M 2.47 10.276 C 2.346 10.523 2.446 10.824 2.693 10.947 C 2.94 11.071 3.241 10.971 3.364 10.724 L 2.917 10.5 L 2.47 10.276 Z M 9.198 0.224 C 9.321 -0.023 9.221 -0.324 8.974 -0.447 C 8.727 -0.571 8.427 -0.471 8.303 -0.224 L 8.751 0 L 9.198 0.224 Z M 11.668 5.75 C 11.944 5.75 12.168 5.526 12.168 5.25 C 12.168 4.974 11.944 4.75 11.668 4.75 L 11.668 5.25 L 11.668 5.75 Z M 0 4.75 C -0.276 4.75 -0.5 4.974 -0.5 5.25 C -0.5 5.526 -0.276 5.75 0 5.75 L 0 5.25 L 0 4.75 Z M 3.364 -0.224 C 3.241 -0.471 2.94 -0.571 2.693 -0.447 C 2.446 -0.324 2.346 -0.023 2.47 0.224 L 2.917 0 L 3.364 -0.224 Z M 10.901 4.383 C 11.067 4.162 11.022 3.849 10.801 3.683 C 10.58 3.518 10.267 3.562 10.101 3.783 L 10.501 4.083 L 10.901 4.383 Z M 9.626 5.25 L 9.226 4.95 L 9.001 5.25 L 9.226 5.55 L 9.626 5.25 Z M 10.101 6.717 C 10.267 6.938 10.58 6.982 10.801 6.817 C 11.022 6.651 11.067 6.338 10.901 6.117 L 10.501 6.417 L 10.101 6.717 Z M 1.567 3.783 C 1.401 3.562 1.088 3.518 0.867 3.683 C 0.646 3.849 0.601 4.162 0.767 4.383 L 1.167 4.083 L 1.567 3.783 Z M 2.042 5.25 L 2.442 5.55 L 2.667 5.25 L 2.442 4.95 L 2.042 5.25 Z M 0.767 6.117 C 0.601 6.338 0.646 6.651 0.867 6.817 C 1.088 6.982 1.401 6.938 1.567 6.717 L 1.167 6.417 L 0.767 6.117 Z M 4.667 9.917 L 5.114 9.693 L 4.385 8.235 L 3.938 8.458 L 3.491 8.682 L 4.22 10.14 L 4.667 9.917 Z M 3.938 8.458 L 3.848 7.966 L 2.244 8.258 L 2.334 8.75 L 2.423 9.242 L 4.027 8.95 L 3.938 8.458 Z M 4.667 0.583 L 4.22 0.36 L 3.491 1.818 L 3.938 2.042 L 4.385 2.265 L 5.114 0.807 L 4.667 0.583 Z M 3.938 2.042 L 4.027 1.55 L 2.423 1.258 L 2.334 1.75 L 2.244 2.242 L 3.848 2.534 L 3.938 2.042 Z M 7.001 9.917 L 7.448 10.14 L 8.177 8.682 L 7.73 8.458 L 7.283 8.235 L 6.553 9.693 L 7.001 9.917 Z M 7.73 8.458 L 7.64 8.95 L 9.245 9.242 L 9.334 8.75 L 9.424 8.258 L 7.819 7.966 L 7.73 8.458 Z M 7.001 0.583 L 6.553 0.807 L 7.283 2.265 L 7.73 2.042 L 8.177 1.818 L 7.448 0.36 L 7.001 0.583 Z M 7.73 2.042 L 7.819 2.534 L 9.424 2.242 L 9.334 1.75 L 9.245 1.258 L 7.64 1.55 L 7.73 2.042 Z M 8.751 10.5 L 9.198 10.276 L 7.448 6.776 L 7.001 7 L 6.553 7.224 L 8.303 10.724 L 8.751 10.5 Z M 7.001 7 L 7.001 6.5 L 4.667 6.5 L 4.667 7 L 4.667 7.5 L 7.001 7.5 L 7.001 7 Z M 7.001 7 L 7.448 7.224 L 8.323 5.474 L 7.876 5.25 L 7.428 5.026 L 6.553 6.776 L 7.001 7 Z M 4.667 7 L 4.22 6.776 L 2.47 10.276 L 2.917 10.5 L 3.364 10.724 L 5.114 7.224 L 4.667 7 Z M 4.667 7 L 5.114 6.776 L 4.239 5.026 L 3.792 5.25 L 3.345 5.474 L 4.22 7.224 L 4.667 7 Z M 8.751 0 L 8.303 -0.224 L 6.553 3.276 L 7.001 3.5 L 7.448 3.724 L 9.198 0.224 L 8.751 0 Z M 7.001 3.5 L 6.553 3.724 L 7.428 5.474 L 7.876 5.25 L 8.323 5.026 L 7.448 3.276 L 7.001 3.5 Z M 7.001 3.5 L 7.001 3 L 4.667 3 L 4.667 3.5 L 4.667 4 L 7.001 4 L 7.001 3.5 Z M 7.876 5.25 L 7.876 5.75 L 11.668 5.75 L 11.668 5.25 L 11.668 4.75 L 7.876 4.75 L 7.876 5.25 Z M 0 5.25 L 0 5.75 L 3.792 5.75 L 3.792 5.25 L 3.792 4.75 L 0 4.75 L 0 5.25 Z M 3.792 5.25 L 4.239 5.474 L 5.114 3.724 L 4.667 3.5 L 4.22 3.276 L 3.345 5.026 L 3.792 5.25 Z M 4.667 3.5 L 5.114 3.276 L 3.364 -0.224 L 2.917 0 L 2.47 0.224 L 4.22 3.724 L 4.667 3.5 Z M 10.501 4.083 L 10.101 3.783 L 9.226 4.95 L 9.626 5.25 L 10.026 5.55 L 10.901 4.383 L 10.501 4.083 Z M 9.626 5.25 L 9.226 5.55 L 10.101 6.717 L 10.501 6.417 L 10.901 6.117 L 10.026 4.95 L 9.626 5.25 Z M 1.167 4.083 L 0.767 4.383 L 1.642 5.55 L 2.042 5.25 L 2.442 4.95 L 1.567 3.783 L 1.167 4.083 Z M 2.042 5.25 L 1.642 4.95 L 0.767 6.117 L 1.167 6.417 L 1.567 6.717 L 2.442 5.55 L 2.042 5.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "Climate-controlled cabin")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "8px 16px 8px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.500,
    height: 11.668,
    viewBox: "0 0 10.500 11.668",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.75,
      top: 1.166,
      width: 10.5,
      height: 11.668,
      color: "rgb(44,48,119)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 0 C 0.5 -0.276 0.276 -0.5 0 -0.5 C -0.276 -0.5 -0.5 -0.276 -0.5 0 L 0 0 L 0.5 0 Z M 5.167 0 C 5.167 -0.276 4.943 -0.5 4.667 -0.5 C 4.391 -0.5 4.167 -0.276 4.167 0 L 4.667 0 L 5.167 0 Z M 2.833 0 C 2.833 -0.276 2.609 -0.5 2.333 -0.5 C 2.057 -0.5 1.833 -0.276 1.833 0 L 2.333 0 L 2.833 0 Z M 1.833 11.668 C 1.833 11.944 2.057 12.168 2.333 12.168 C 2.609 12.168 2.833 11.944 2.833 11.668 L 2.333 11.668 L 1.833 11.668 Z M 10.5 0 L 11 0 L 11 -0.5 L 10.5 -0.5 L 10.5 0 Z M 7.583 2.917 L 7.083 2.917 L 7.583 2.917 Z M 10 11.668 C 10 11.944 10.224 12.168 10.5 12.168 C 10.776 12.168 11 11.944 11 11.668 L 10.5 11.668 L 10 11.668 Z M 0 0 L -0.5 0 L -0.5 4.084 L 0 4.084 L 0.5 4.084 L 0.5 0 L 0 0 Z M 0 4.084 L -0.5 4.084 C -0.5 5.001 0.249 5.75 1.167 5.75 L 1.167 5.25 L 1.167 4.75 C 0.801 4.75 0.5 4.449 0.5 4.084 L 0 4.084 Z M 1.167 5.25 L 1.167 5.75 L 3.5 5.75 L 3.5 5.25 L 3.5 4.75 L 1.167 4.75 L 1.167 5.25 Z M 3.5 5.25 L 3.5 5.75 C 3.942 5.75 4.366 5.575 4.679 5.262 L 4.325 4.909 L 3.971 4.555 C 3.846 4.68 3.677 4.75 3.5 4.75 L 3.5 5.25 Z M 4.325 4.909 L 4.679 5.262 C 4.991 4.95 5.167 4.526 5.167 4.084 L 4.667 4.084 L 4.167 4.084 C 4.167 4.261 4.096 4.43 3.971 4.555 L 4.325 4.909 Z M 4.667 4.084 L 5.167 4.084 L 5.167 0 L 4.667 0 L 4.167 0 L 4.167 4.084 L 4.667 4.084 Z M 2.333 0 L 1.833 0 L 1.833 11.668 L 2.333 11.668 L 2.833 11.668 L 2.833 0 L 2.333 0 Z M 10.5 7.584 L 11 7.584 L 11 0 L 10.5 0 L 10 0 L 10 7.584 L 10.5 7.584 Z M 10.5 0 L 10.5 -0.5 C 9.594 -0.5 8.725 -0.14 8.084 0.501 L 8.438 0.854 L 8.791 1.208 C 9.244 0.755 9.859 0.5 10.5 0.5 L 10.5 0 Z M 8.438 0.854 L 8.084 0.501 C 7.443 1.142 7.083 2.011 7.083 2.917 L 7.583 2.917 L 8.083 2.917 C 8.083 2.276 8.338 1.661 8.791 1.208 L 8.438 0.854 Z M 7.583 2.917 L 7.083 2.917 L 7.083 6.417 L 7.583 6.417 L 8.083 6.417 L 8.083 2.917 L 7.583 2.917 Z M 7.583 6.417 L 7.083 6.417 C 7.083 7.335 7.832 8.084 8.75 8.084 L 8.75 7.584 L 8.75 7.084 C 8.385 7.084 8.083 6.783 8.083 6.417 L 7.583 6.417 Z M 8.75 7.584 L 8.75 8.084 L 10.5 8.084 L 10.5 7.584 L 10.5 7.084 L 8.75 7.084 L 8.75 7.584 Z M 10.5 7.584 L 10 7.584 L 10 11.668 L 10.5 11.668 L 11 11.668 L 11 7.584 L 10.5 7.584 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "Full-service dining & bar")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    button: "pill/hollow"
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    button: "pill"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-b3c31bc49a5e826b",
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "40px 20px 40px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(146,116,23)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Things to do in Savannah"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 25,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Four Hours, Your Way"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Savannah is yours to explore. Whether you want to see the city's most iconic sights or simply follow wherever the day takes you, you will arrive with plenty of time to make it your own.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-b63792158bb1b05a",
    style: {
      position: "relative",
      width: 115,
      height: 116,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 236,
      opacity: 0.6,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 208,
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0
    }
  }, "See Savannah by Trolley"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "100%",
      color: "rgb(74,85,101)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Board Old Town Trolley on River Street and explore Savannah\u2019s sites, squares, and stories."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 115,
      height: 116,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 236,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Shop, Sip, & Stroll"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "100%",
      color: "rgb(74,85,101)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Explore Savannah by Old Town Trolley with River Street entry to its landmarks and squares."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-af4b9646e4fa2755",
    style: {
      position: "relative",
      width: 115,
      height: 116,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 236,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Take it Slow"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "100%",
      color: "rgb(74,85,101)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Find a favorite restaurant, relax beneath the oaks, and explore Savannah at your own pace.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 350,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      display: "flex",
      flexDirection: "row",
      gap: 6.6666669845581055,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 7.333,
      height: 7.333,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 331,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Old Town Trolley Tour tickets are available for purchase onboard."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(242,240,239)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "40px 20px 40px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(146,116,23)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Know before you go"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 25,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "What's Included + \nGood to Know")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 340,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "Review everything included with your cruise, available add-ons, and important details before you book.")), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-6c7f8fed8b09d45e",
    style: {
      position: "relative",
      height: 205,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 56,
      overflow: "hidden",
      borderTop: "1px solid rgb(209,213,219)",
      borderRight: "1px solid rgb(209,213,219)",
      borderBottom: "1px solid rgb(209,213,219)",
      borderLeft: "1px solid rgb(209,213,219)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 0px 16px 0px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 292,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0
    }
  }, "Where do we depart, and is there parking?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(223,175,44)",
      flexShrink: 0
    }
  }, "[ + ]")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 56,
      overflow: "hidden",
      borderTop: "1px solid rgb(209,213,219)",
      borderRight: "1px solid rgb(209,213,219)",
      borderBottom: "1px solid rgb(209,213,219)",
      borderLeft: "1px solid rgb(209,213,219)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 0px 16px 0px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 292,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0
    }
  }, "Is the Savannah cruise accessible?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(223,175,44)",
      flexShrink: 0
    }
  }, "[ + ]")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 56,
      overflow: "hidden",
      borderTop: "1px solid rgb(209,213,219)",
      borderRight: "1px solid rgb(209,213,219)",
      borderBottom: "1px solid rgb(209,213,219)",
      borderLeft: "1px solid rgb(209,213,219)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 0px 16px 0px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 292,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0
    }
  }, "What is available onboard?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(223,175,44)",
      flexShrink: 0
    }
  }, "[ + ]")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 56,
      overflow: "hidden",
      borderTop: "1px solid rgb(209,213,219)",
      borderRight: "1px solid rgb(209,213,219)",
      borderBottom: "1px solid rgb(209,213,219)",
      borderLeft: "1px solid rgb(209,213,219)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 0px 16px 0px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 292,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0
    }
  }, "Can I add an Old Town Trolley Tour?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(223,175,44)",
      flexShrink: 0
    }
  }, "[ + ]")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 56,
      overflow: "hidden",
      borderTop: "1px solid rgb(209,213,219)",
      borderRight: "1px solid rgb(209,213,219)",
      borderBottom: "1px solid rgb(209,213,219)",
      borderLeft: "1px solid rgb(209,213,219)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 0px 16px 0px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 292,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0
    }
  }, "Where does the boat arrive in Savannah?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(223,175,44)",
      flexShrink: 0
    }
  }, "[ + ]")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 56,
      overflow: "hidden",
      borderTop: "1px solid rgb(209,213,219)",
      borderRight: "1px solid rgb(209,213,219)",
      borderBottom: "1px solid rgb(209,213,219)",
      borderLeft: "1px solid rgb(209,213,219)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 0px 16px 0px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 292,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0
    }
  }, "How long is the Historic Savannah Cruise?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(223,175,44)",
      flexShrink: 0
    }
  }, "[ + ]")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 56,
      overflow: "hidden",
      borderTop: "1px solid rgb(209,213,219)",
      borderRight: "1px solid rgb(209,213,219)",
      borderBottom: "1px solid rgb(209,213,219)",
      borderLeft: "1px solid rgb(209,213,219)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 0px 16px 0px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 292,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0
    }
  }, "What is the cancellation policy?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(223,175,44)",
      flexShrink: 0
    }
  }, "[ + ]")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(90deg, rgba(1,11,19,0.902) 0.00%, rgba(1,11,19,0.6) 100.00%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "55px 16px 55px 16px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      boxShadow: "0px 8px 24px -8px rgba(0,0,0,0.0706)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.335,
    height: 12.715,
    viewBox: "0 0 13.335 12.715",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.333,
      top: 1.333,
      width: 13.335,
      height: 12.715,
      color: "var(--darker-gold-no-whitebg)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.351 0.197 L 5.455 -0.247 L 5.454 -0.246 L 6.351 0.197 Z M 6.668 0 L 6.668 -1 L 6.668 0 Z M 6.985 0.197 L 7.881 -0.246 L 7.881 -0.247 L 6.985 0.197 Z M 8.525 3.316 L 7.628 3.759 L 7.628 3.759 L 8.525 3.316 Z M 9.588 4.089 L 9.443 5.079 L 9.443 5.079 L 9.588 4.089 Z M 13.032 4.593 L 12.887 5.583 L 12.888 5.583 L 13.032 4.593 Z M 13.228 5.196 L 13.926 5.912 L 13.926 5.912 L 13.228 5.196 Z M 10.737 7.621 L 10.04 6.905 L 10.039 6.905 L 10.737 7.621 Z M 10.33 8.873 L 9.344 9.042 L 9.344 9.042 L 10.33 8.873 Z M 10.918 12.3 L 9.932 12.469 L 9.933 12.474 L 10.918 12.3 Z M 10.404 12.673 L 10.874 11.791 L 10.869 11.788 L 10.404 12.673 Z M 7.325 11.055 L 7.791 10.169 L 7.79 10.169 L 7.325 11.055 Z M 6.668 10.892 L 6.668 9.892 L 6.668 10.892 Z M 6.01 11.055 L 5.545 10.169 L 5.544 10.17 L 6.01 11.055 Z M 2.932 12.673 L 2.466 11.788 L 2.464 11.789 L 2.932 12.673 Z M 2.419 12.3 L 3.403 12.473 L 3.404 12.469 L 2.419 12.3 Z M 3.006 8.874 L 2.02 8.705 L 2.02 8.705 L 3.006 8.874 Z M 2.599 7.621 L 3.296 6.905 L 3.296 6.905 L 2.599 7.621 Z M 0.108 5.197 L 0.805 4.48 L 0.803 4.477 L 0.108 5.197 Z M 0.304 4.593 L 0.444 5.583 L 0.449 5.582 L 0.304 4.593 Z M 3.747 4.089 L 3.603 3.1 L 3.603 3.1 L 3.747 4.089 Z M 4.812 3.316 L 5.708 3.759 L 5.709 3.758 L 4.812 3.316 Z M 6.351 0.197 L 7.247 0.64 C 7.194 0.748 7.111 0.839 7.009 0.903 L 6.482 0.053 L 5.954 -0.796 C 5.74 -0.663 5.567 -0.473 5.455 -0.247 L 6.351 0.197 Z M 6.482 0.053 L 7.009 0.903 C 6.907 0.966 6.788 1 6.668 1 L 6.668 0 L 6.668 -1 C 6.416 -1 6.168 -0.929 5.954 -0.796 L 6.482 0.053 Z M 6.668 0 L 6.668 1 C 6.547 1 6.429 0.966 6.327 0.903 L 6.854 0.053 L 7.382 -0.796 C 7.167 -0.929 6.92 -1 6.668 -1 L 6.668 0 Z M 6.854 0.053 L 6.327 0.903 C 6.224 0.839 6.142 0.748 6.088 0.64 L 6.985 0.197 L 7.881 -0.247 C 7.769 -0.473 7.596 -0.663 7.382 -0.796 L 6.854 0.053 Z M 6.985 0.197 L 6.088 0.639 L 7.628 3.759 L 8.525 3.316 L 9.421 2.873 L 7.881 -0.246 L 6.985 0.197 Z M 8.525 3.316 L 7.628 3.759 C 7.801 4.109 8.057 4.412 8.373 4.642 L 8.961 3.834 L 9.549 3.025 C 9.495 2.985 9.451 2.933 9.421 2.873 L 8.525 3.316 Z M 8.961 3.834 L 8.373 4.642 C 8.689 4.872 9.056 5.022 9.443 5.079 L 9.588 4.089 L 9.733 3.1 C 9.667 3.09 9.603 3.064 9.549 3.025 L 8.961 3.834 Z M 9.588 4.089 L 9.443 5.079 L 12.887 5.583 L 13.032 4.593 L 13.177 3.604 L 9.733 3.1 L 9.588 4.089 Z M 13.032 4.593 L 12.888 5.583 C 12.769 5.566 12.657 5.515 12.565 5.437 L 13.209 4.673 L 13.853 3.908 C 13.66 3.745 13.425 3.64 13.175 3.604 L 13.032 4.593 Z M 13.209 4.673 L 12.565 5.437 C 12.472 5.36 12.404 5.258 12.366 5.143 L 13.317 4.834 L 14.268 4.524 C 14.19 4.284 14.046 4.071 13.853 3.908 L 13.209 4.673 Z M 13.317 4.834 L 12.366 5.143 C 12.329 5.028 12.324 4.905 12.353 4.788 L 13.324 5.028 L 14.295 5.267 C 14.356 5.022 14.346 4.765 14.268 4.524 L 13.317 4.834 Z M 13.324 5.028 L 12.353 4.788 C 12.382 4.671 12.443 4.564 12.53 4.48 L 13.228 5.196 L 13.926 5.912 C 14.107 5.736 14.235 5.512 14.295 5.267 L 13.324 5.028 Z M 13.228 5.196 L 12.53 4.479 L 10.04 6.905 L 10.737 7.621 L 11.435 8.338 L 13.926 5.912 L 13.228 5.196 Z M 10.737 7.621 L 10.039 6.905 C 9.759 7.178 9.549 7.515 9.428 7.888 L 10.379 8.197 L 11.33 8.506 C 11.351 8.442 11.387 8.384 11.435 8.337 L 10.737 7.621 Z M 10.379 8.197 L 9.428 7.888 C 9.307 8.26 9.278 8.656 9.344 9.042 L 10.33 8.873 L 11.316 8.705 C 11.304 8.639 11.309 8.57 11.33 8.506 L 10.379 8.197 Z M 10.33 8.873 L 9.344 9.042 L 9.932 12.469 L 10.918 12.3 L 11.903 12.131 L 11.315 8.704 L 10.33 8.873 Z M 10.918 12.3 L 9.933 12.474 C 9.912 12.354 9.925 12.232 9.97 12.119 L 10.898 12.494 L 11.825 12.868 C 11.92 12.633 11.947 12.376 11.903 12.126 L 10.918 12.3 Z M 10.898 12.494 L 9.97 12.119 C 10.016 12.007 10.092 11.909 10.19 11.838 L 10.778 12.647 L 11.365 13.456 C 11.57 13.307 11.73 13.103 11.825 12.868 L 10.898 12.494 Z M 10.778 12.647 L 10.19 11.838 C 10.288 11.767 10.404 11.725 10.525 11.716 L 10.594 12.714 L 10.664 13.711 C 10.917 13.694 11.16 13.605 11.365 13.456 L 10.778 12.647 Z M 10.594 12.714 L 10.525 11.716 C 10.646 11.708 10.767 11.734 10.874 11.791 L 10.404 12.673 L 9.934 13.556 C 10.158 13.675 10.411 13.729 10.664 13.711 L 10.594 12.714 Z M 10.404 12.673 L 10.869 11.788 L 7.791 10.169 L 7.325 11.055 L 6.86 11.94 L 9.938 13.558 L 10.404 12.673 Z M 7.325 11.055 L 7.79 10.169 C 7.444 9.987 7.059 9.892 6.668 9.892 L 6.668 10.892 L 6.668 11.892 C 6.735 11.892 6.801 11.909 6.86 11.94 L 7.325 11.055 Z M 6.668 10.892 L 6.668 9.892 C 6.276 9.892 5.891 9.987 5.545 10.169 L 6.01 11.055 L 6.475 11.94 C 6.534 11.909 6.6 11.892 6.668 11.892 L 6.668 10.892 Z M 6.01 11.055 L 5.544 10.17 L 2.466 11.788 L 2.932 12.673 L 3.397 13.558 L 6.475 11.94 L 6.01 11.055 Z M 2.932 12.673 L 2.464 11.789 C 2.571 11.733 2.692 11.707 2.812 11.716 L 2.742 12.713 L 2.671 13.711 C 2.923 13.729 3.176 13.676 3.4 13.557 L 2.932 12.673 Z M 2.742 12.713 L 2.812 11.716 C 2.933 11.725 3.049 11.767 3.147 11.838 L 2.559 12.647 L 1.971 13.455 C 2.175 13.604 2.418 13.693 2.671 13.711 L 2.742 12.713 Z M 2.559 12.647 L 3.147 11.838 C 3.245 11.909 3.321 12.006 3.366 12.119 L 2.439 12.493 L 1.512 12.868 C 1.607 13.103 1.766 13.306 1.971 13.455 L 2.559 12.647 Z M 2.439 12.493 L 3.366 12.119 C 3.411 12.231 3.424 12.354 3.403 12.473 L 2.419 12.3 L 1.434 12.127 C 1.39 12.377 1.417 12.633 1.512 12.868 L 2.439 12.493 Z M 2.419 12.3 L 3.404 12.469 L 3.991 9.043 L 3.006 8.874 L 2.02 8.705 L 1.433 12.131 L 2.419 12.3 Z M 3.006 8.874 L 3.991 9.043 C 4.058 8.657 4.029 8.261 3.908 7.888 L 2.957 8.197 L 2.006 8.507 C 2.027 8.57 2.032 8.639 2.02 8.705 L 3.006 8.874 Z M 2.957 8.197 L 3.908 7.888 C 3.787 7.516 3.577 7.178 3.296 6.905 L 2.599 7.621 L 1.901 8.338 C 1.949 8.385 1.985 8.443 2.006 8.507 L 2.957 8.197 Z M 2.599 7.621 L 3.296 6.905 L 0.805 4.48 L 0.108 5.197 L -0.59 5.913 L 1.901 8.338 L 2.599 7.621 Z M 0.108 5.197 L 0.803 4.477 C 0.89 4.561 0.951 4.668 0.981 4.786 L 0.011 5.028 L -0.96 5.27 C -0.898 5.516 -0.769 5.74 -0.587 5.916 L 0.108 5.197 Z M 0.011 5.028 L 0.981 4.786 C 1.01 4.903 1.006 5.027 0.968 5.142 L 0.017 4.833 L -0.934 4.525 C -1.012 4.766 -1.021 5.024 -0.96 5.27 L 0.011 5.028 Z M 0.017 4.833 L 0.968 5.142 C 0.931 5.257 0.862 5.36 0.769 5.438 L 0.126 4.672 L -0.517 3.906 C -0.711 4.069 -0.856 4.284 -0.934 4.525 L 0.017 4.833 Z M 0.126 4.672 L 0.769 5.438 C 0.677 5.515 0.564 5.566 0.444 5.583 L 0.304 4.593 L 0.164 3.602 C -0.087 3.638 -0.323 3.743 -0.517 3.906 L 0.126 4.672 Z M 0.304 4.593 L 0.449 5.582 L 3.892 5.079 L 3.747 4.089 L 3.603 3.1 L 0.159 3.603 L 0.304 4.593 Z M 3.747 4.089 L 3.891 5.079 C 4.278 5.023 4.646 4.873 4.963 4.643 L 4.375 3.834 L 3.787 3.025 C 3.733 3.064 3.67 3.09 3.603 3.1 L 3.747 4.089 Z M 4.375 3.834 L 4.963 4.643 C 5.279 4.413 5.535 4.11 5.708 3.759 L 4.812 3.316 L 3.915 2.873 C 3.886 2.933 3.842 2.985 3.787 3.025 L 4.375 3.834 Z M 4.812 3.316 L 5.709 3.758 L 7.248 0.639 L 6.351 0.197 L 5.454 -0.246 L 3.915 2.873 L 4.812 3.316 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.335,
    height: 12.715,
    viewBox: "0 0 13.335 12.715",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.333,
      top: 1.333,
      width: 13.335,
      height: 12.715,
      color: "var(--darker-gold-no-whitebg)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.351 0.197 L 5.455 -0.247 L 5.454 -0.246 L 6.351 0.197 Z M 6.668 0 L 6.668 -1 L 6.668 0 Z M 6.985 0.197 L 7.881 -0.246 L 7.881 -0.247 L 6.985 0.197 Z M 8.525 3.316 L 7.628 3.759 L 7.628 3.759 L 8.525 3.316 Z M 9.588 4.089 L 9.443 5.079 L 9.443 5.079 L 9.588 4.089 Z M 13.032 4.593 L 12.887 5.583 L 12.888 5.583 L 13.032 4.593 Z M 13.228 5.196 L 13.926 5.912 L 13.926 5.912 L 13.228 5.196 Z M 10.737 7.621 L 10.04 6.905 L 10.039 6.905 L 10.737 7.621 Z M 10.33 8.873 L 9.344 9.042 L 9.344 9.042 L 10.33 8.873 Z M 10.918 12.3 L 9.932 12.469 L 9.933 12.474 L 10.918 12.3 Z M 10.404 12.673 L 10.874 11.791 L 10.869 11.788 L 10.404 12.673 Z M 7.325 11.055 L 7.791 10.169 L 7.79 10.169 L 7.325 11.055 Z M 6.668 10.892 L 6.668 9.892 L 6.668 10.892 Z M 6.01 11.055 L 5.545 10.169 L 5.544 10.17 L 6.01 11.055 Z M 2.932 12.673 L 2.466 11.788 L 2.464 11.789 L 2.932 12.673 Z M 2.419 12.3 L 3.403 12.473 L 3.404 12.469 L 2.419 12.3 Z M 3.006 8.874 L 2.02 8.705 L 2.02 8.705 L 3.006 8.874 Z M 2.599 7.621 L 3.296 6.905 L 3.296 6.905 L 2.599 7.621 Z M 0.108 5.197 L 0.805 4.48 L 0.803 4.477 L 0.108 5.197 Z M 0.304 4.593 L 0.444 5.583 L 0.449 5.582 L 0.304 4.593 Z M 3.747 4.089 L 3.603 3.1 L 3.603 3.1 L 3.747 4.089 Z M 4.812 3.316 L 5.708 3.759 L 5.709 3.758 L 4.812 3.316 Z M 6.351 0.197 L 7.247 0.64 C 7.194 0.748 7.111 0.839 7.009 0.903 L 6.482 0.053 L 5.954 -0.796 C 5.74 -0.663 5.567 -0.473 5.455 -0.247 L 6.351 0.197 Z M 6.482 0.053 L 7.009 0.903 C 6.907 0.966 6.788 1 6.668 1 L 6.668 0 L 6.668 -1 C 6.416 -1 6.168 -0.929 5.954 -0.796 L 6.482 0.053 Z M 6.668 0 L 6.668 1 C 6.547 1 6.429 0.966 6.327 0.903 L 6.854 0.053 L 7.382 -0.796 C 7.167 -0.929 6.92 -1 6.668 -1 L 6.668 0 Z M 6.854 0.053 L 6.327 0.903 C 6.224 0.839 6.142 0.748 6.088 0.64 L 6.985 0.197 L 7.881 -0.247 C 7.769 -0.473 7.596 -0.663 7.382 -0.796 L 6.854 0.053 Z M 6.985 0.197 L 6.088 0.639 L 7.628 3.759 L 8.525 3.316 L 9.421 2.873 L 7.881 -0.246 L 6.985 0.197 Z M 8.525 3.316 L 7.628 3.759 C 7.801 4.109 8.057 4.412 8.373 4.642 L 8.961 3.834 L 9.549 3.025 C 9.495 2.985 9.451 2.933 9.421 2.873 L 8.525 3.316 Z M 8.961 3.834 L 8.373 4.642 C 8.689 4.872 9.056 5.022 9.443 5.079 L 9.588 4.089 L 9.733 3.1 C 9.667 3.09 9.603 3.064 9.549 3.025 L 8.961 3.834 Z M 9.588 4.089 L 9.443 5.079 L 12.887 5.583 L 13.032 4.593 L 13.177 3.604 L 9.733 3.1 L 9.588 4.089 Z M 13.032 4.593 L 12.888 5.583 C 12.769 5.566 12.657 5.515 12.565 5.437 L 13.209 4.673 L 13.853 3.908 C 13.66 3.745 13.425 3.64 13.175 3.604 L 13.032 4.593 Z M 13.209 4.673 L 12.565 5.437 C 12.472 5.36 12.404 5.258 12.366 5.143 L 13.317 4.834 L 14.268 4.524 C 14.19 4.284 14.046 4.071 13.853 3.908 L 13.209 4.673 Z M 13.317 4.834 L 12.366 5.143 C 12.329 5.028 12.324 4.905 12.353 4.788 L 13.324 5.028 L 14.295 5.267 C 14.356 5.022 14.346 4.765 14.268 4.524 L 13.317 4.834 Z M 13.324 5.028 L 12.353 4.788 C 12.382 4.671 12.443 4.564 12.53 4.48 L 13.228 5.196 L 13.926 5.912 C 14.107 5.736 14.235 5.512 14.295 5.267 L 13.324 5.028 Z M 13.228 5.196 L 12.53 4.479 L 10.04 6.905 L 10.737 7.621 L 11.435 8.338 L 13.926 5.912 L 13.228 5.196 Z M 10.737 7.621 L 10.039 6.905 C 9.759 7.178 9.549 7.515 9.428 7.888 L 10.379 8.197 L 11.33 8.506 C 11.351 8.442 11.387 8.384 11.435 8.337 L 10.737 7.621 Z M 10.379 8.197 L 9.428 7.888 C 9.307 8.26 9.278 8.656 9.344 9.042 L 10.33 8.873 L 11.316 8.705 C 11.304 8.639 11.309 8.57 11.33 8.506 L 10.379 8.197 Z M 10.33 8.873 L 9.344 9.042 L 9.932 12.469 L 10.918 12.3 L 11.903 12.131 L 11.315 8.704 L 10.33 8.873 Z M 10.918 12.3 L 9.933 12.474 C 9.912 12.354 9.925 12.232 9.97 12.119 L 10.898 12.494 L 11.825 12.868 C 11.92 12.633 11.947 12.376 11.903 12.126 L 10.918 12.3 Z M 10.898 12.494 L 9.97 12.119 C 10.016 12.007 10.092 11.909 10.19 11.838 L 10.778 12.647 L 11.365 13.456 C 11.57 13.307 11.73 13.103 11.825 12.868 L 10.898 12.494 Z M 10.778 12.647 L 10.19 11.838 C 10.288 11.767 10.404 11.725 10.525 11.716 L 10.594 12.714 L 10.664 13.711 C 10.917 13.694 11.16 13.605 11.365 13.456 L 10.778 12.647 Z M 10.594 12.714 L 10.525 11.716 C 10.646 11.708 10.767 11.734 10.874 11.791 L 10.404 12.673 L 9.934 13.556 C 10.158 13.675 10.411 13.729 10.664 13.711 L 10.594 12.714 Z M 10.404 12.673 L 10.869 11.788 L 7.791 10.169 L 7.325 11.055 L 6.86 11.94 L 9.938 13.558 L 10.404 12.673 Z M 7.325 11.055 L 7.79 10.169 C 7.444 9.987 7.059 9.892 6.668 9.892 L 6.668 10.892 L 6.668 11.892 C 6.735 11.892 6.801 11.909 6.86 11.94 L 7.325 11.055 Z M 6.668 10.892 L 6.668 9.892 C 6.276 9.892 5.891 9.987 5.545 10.169 L 6.01 11.055 L 6.475 11.94 C 6.534 11.909 6.6 11.892 6.668 11.892 L 6.668 10.892 Z M 6.01 11.055 L 5.544 10.17 L 2.466 11.788 L 2.932 12.673 L 3.397 13.558 L 6.475 11.94 L 6.01 11.055 Z M 2.932 12.673 L 2.464 11.789 C 2.571 11.733 2.692 11.707 2.812 11.716 L 2.742 12.713 L 2.671 13.711 C 2.923 13.729 3.176 13.676 3.4 13.557 L 2.932 12.673 Z M 2.742 12.713 L 2.812 11.716 C 2.933 11.725 3.049 11.767 3.147 11.838 L 2.559 12.647 L 1.971 13.455 C 2.175 13.604 2.418 13.693 2.671 13.711 L 2.742 12.713 Z M 2.559 12.647 L 3.147 11.838 C 3.245 11.909 3.321 12.006 3.366 12.119 L 2.439 12.493 L 1.512 12.868 C 1.607 13.103 1.766 13.306 1.971 13.455 L 2.559 12.647 Z M 2.439 12.493 L 3.366 12.119 C 3.411 12.231 3.424 12.354 3.403 12.473 L 2.419 12.3 L 1.434 12.127 C 1.39 12.377 1.417 12.633 1.512 12.868 L 2.439 12.493 Z M 2.419 12.3 L 3.404 12.469 L 3.991 9.043 L 3.006 8.874 L 2.02 8.705 L 1.433 12.131 L 2.419 12.3 Z M 3.006 8.874 L 3.991 9.043 C 4.058 8.657 4.029 8.261 3.908 7.888 L 2.957 8.197 L 2.006 8.507 C 2.027 8.57 2.032 8.639 2.02 8.705 L 3.006 8.874 Z M 2.957 8.197 L 3.908 7.888 C 3.787 7.516 3.577 7.178 3.296 6.905 L 2.599 7.621 L 1.901 8.338 C 1.949 8.385 1.985 8.443 2.006 8.507 L 2.957 8.197 Z M 2.599 7.621 L 3.296 6.905 L 0.805 4.48 L 0.108 5.197 L -0.59 5.913 L 1.901 8.338 L 2.599 7.621 Z M 0.108 5.197 L 0.803 4.477 C 0.89 4.561 0.951 4.668 0.981 4.786 L 0.011 5.028 L -0.96 5.27 C -0.898 5.516 -0.769 5.74 -0.587 5.916 L 0.108 5.197 Z M 0.011 5.028 L 0.981 4.786 C 1.01 4.903 1.006 5.027 0.968 5.142 L 0.017 4.833 L -0.934 4.525 C -1.012 4.766 -1.021 5.024 -0.96 5.27 L 0.011 5.028 Z M 0.017 4.833 L 0.968 5.142 C 0.931 5.257 0.862 5.36 0.769 5.438 L 0.126 4.672 L -0.517 3.906 C -0.711 4.069 -0.856 4.284 -0.934 4.525 L 0.017 4.833 Z M 0.126 4.672 L 0.769 5.438 C 0.677 5.515 0.564 5.566 0.444 5.583 L 0.304 4.593 L 0.164 3.602 C -0.087 3.638 -0.323 3.743 -0.517 3.906 L 0.126 4.672 Z M 0.304 4.593 L 0.449 5.582 L 3.892 5.079 L 3.747 4.089 L 3.603 3.1 L 0.159 3.603 L 0.304 4.593 Z M 3.747 4.089 L 3.891 5.079 C 4.278 5.023 4.646 4.873 4.963 4.643 L 4.375 3.834 L 3.787 3.025 C 3.733 3.064 3.67 3.09 3.603 3.1 L 3.747 4.089 Z M 4.375 3.834 L 4.963 4.643 C 5.279 4.413 5.535 4.11 5.708 3.759 L 4.812 3.316 L 3.915 2.873 C 3.886 2.933 3.842 2.985 3.787 3.025 L 4.375 3.834 Z M 4.812 3.316 L 5.709 3.758 L 7.248 0.639 L 6.351 0.197 L 5.454 -0.246 L 3.915 2.873 L 4.812 3.316 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.335,
    height: 12.715,
    viewBox: "0 0 13.335 12.715",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.333,
      top: 1.333,
      width: 13.335,
      height: 12.715,
      color: "var(--darker-gold-no-whitebg)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.351 0.197 L 5.455 -0.247 L 5.454 -0.246 L 6.351 0.197 Z M 6.668 0 L 6.668 -1 L 6.668 0 Z M 6.985 0.197 L 7.881 -0.246 L 7.881 -0.247 L 6.985 0.197 Z M 8.525 3.316 L 7.628 3.759 L 7.628 3.759 L 8.525 3.316 Z M 9.588 4.089 L 9.443 5.079 L 9.443 5.079 L 9.588 4.089 Z M 13.032 4.593 L 12.887 5.583 L 12.888 5.583 L 13.032 4.593 Z M 13.228 5.196 L 13.926 5.912 L 13.926 5.912 L 13.228 5.196 Z M 10.737 7.621 L 10.04 6.905 L 10.039 6.905 L 10.737 7.621 Z M 10.33 8.873 L 9.344 9.042 L 9.344 9.042 L 10.33 8.873 Z M 10.918 12.3 L 9.932 12.469 L 9.933 12.474 L 10.918 12.3 Z M 10.404 12.673 L 10.874 11.791 L 10.869 11.788 L 10.404 12.673 Z M 7.325 11.055 L 7.791 10.169 L 7.79 10.169 L 7.325 11.055 Z M 6.668 10.892 L 6.668 9.892 L 6.668 10.892 Z M 6.01 11.055 L 5.545 10.169 L 5.544 10.17 L 6.01 11.055 Z M 2.932 12.673 L 2.466 11.788 L 2.464 11.789 L 2.932 12.673 Z M 2.419 12.3 L 3.403 12.473 L 3.404 12.469 L 2.419 12.3 Z M 3.006 8.874 L 2.02 8.705 L 2.02 8.705 L 3.006 8.874 Z M 2.599 7.621 L 3.296 6.905 L 3.296 6.905 L 2.599 7.621 Z M 0.108 5.197 L 0.805 4.48 L 0.803 4.477 L 0.108 5.197 Z M 0.304 4.593 L 0.444 5.583 L 0.449 5.582 L 0.304 4.593 Z M 3.747 4.089 L 3.603 3.1 L 3.603 3.1 L 3.747 4.089 Z M 4.812 3.316 L 5.708 3.759 L 5.709 3.758 L 4.812 3.316 Z M 6.351 0.197 L 7.247 0.64 C 7.194 0.748 7.111 0.839 7.009 0.903 L 6.482 0.053 L 5.954 -0.796 C 5.74 -0.663 5.567 -0.473 5.455 -0.247 L 6.351 0.197 Z M 6.482 0.053 L 7.009 0.903 C 6.907 0.966 6.788 1 6.668 1 L 6.668 0 L 6.668 -1 C 6.416 -1 6.168 -0.929 5.954 -0.796 L 6.482 0.053 Z M 6.668 0 L 6.668 1 C 6.547 1 6.429 0.966 6.327 0.903 L 6.854 0.053 L 7.382 -0.796 C 7.167 -0.929 6.92 -1 6.668 -1 L 6.668 0 Z M 6.854 0.053 L 6.327 0.903 C 6.224 0.839 6.142 0.748 6.088 0.64 L 6.985 0.197 L 7.881 -0.247 C 7.769 -0.473 7.596 -0.663 7.382 -0.796 L 6.854 0.053 Z M 6.985 0.197 L 6.088 0.639 L 7.628 3.759 L 8.525 3.316 L 9.421 2.873 L 7.881 -0.246 L 6.985 0.197 Z M 8.525 3.316 L 7.628 3.759 C 7.801 4.109 8.057 4.412 8.373 4.642 L 8.961 3.834 L 9.549 3.025 C 9.495 2.985 9.451 2.933 9.421 2.873 L 8.525 3.316 Z M 8.961 3.834 L 8.373 4.642 C 8.689 4.872 9.056 5.022 9.443 5.079 L 9.588 4.089 L 9.733 3.1 C 9.667 3.09 9.603 3.064 9.549 3.025 L 8.961 3.834 Z M 9.588 4.089 L 9.443 5.079 L 12.887 5.583 L 13.032 4.593 L 13.177 3.604 L 9.733 3.1 L 9.588 4.089 Z M 13.032 4.593 L 12.888 5.583 C 12.769 5.566 12.657 5.515 12.565 5.437 L 13.209 4.673 L 13.853 3.908 C 13.66 3.745 13.425 3.64 13.175 3.604 L 13.032 4.593 Z M 13.209 4.673 L 12.565 5.437 C 12.472 5.36 12.404 5.258 12.366 5.143 L 13.317 4.834 L 14.268 4.524 C 14.19 4.284 14.046 4.071 13.853 3.908 L 13.209 4.673 Z M 13.317 4.834 L 12.366 5.143 C 12.329 5.028 12.324 4.905 12.353 4.788 L 13.324 5.028 L 14.295 5.267 C 14.356 5.022 14.346 4.765 14.268 4.524 L 13.317 4.834 Z M 13.324 5.028 L 12.353 4.788 C 12.382 4.671 12.443 4.564 12.53 4.48 L 13.228 5.196 L 13.926 5.912 C 14.107 5.736 14.235 5.512 14.295 5.267 L 13.324 5.028 Z M 13.228 5.196 L 12.53 4.479 L 10.04 6.905 L 10.737 7.621 L 11.435 8.338 L 13.926 5.912 L 13.228 5.196 Z M 10.737 7.621 L 10.039 6.905 C 9.759 7.178 9.549 7.515 9.428 7.888 L 10.379 8.197 L 11.33 8.506 C 11.351 8.442 11.387 8.384 11.435 8.337 L 10.737 7.621 Z M 10.379 8.197 L 9.428 7.888 C 9.307 8.26 9.278 8.656 9.344 9.042 L 10.33 8.873 L 11.316 8.705 C 11.304 8.639 11.309 8.57 11.33 8.506 L 10.379 8.197 Z M 10.33 8.873 L 9.344 9.042 L 9.932 12.469 L 10.918 12.3 L 11.903 12.131 L 11.315 8.704 L 10.33 8.873 Z M 10.918 12.3 L 9.933 12.474 C 9.912 12.354 9.925 12.232 9.97 12.119 L 10.898 12.494 L 11.825 12.868 C 11.92 12.633 11.947 12.376 11.903 12.126 L 10.918 12.3 Z M 10.898 12.494 L 9.97 12.119 C 10.016 12.007 10.092 11.909 10.19 11.838 L 10.778 12.647 L 11.365 13.456 C 11.57 13.307 11.73 13.103 11.825 12.868 L 10.898 12.494 Z M 10.778 12.647 L 10.19 11.838 C 10.288 11.767 10.404 11.725 10.525 11.716 L 10.594 12.714 L 10.664 13.711 C 10.917 13.694 11.16 13.605 11.365 13.456 L 10.778 12.647 Z M 10.594 12.714 L 10.525 11.716 C 10.646 11.708 10.767 11.734 10.874 11.791 L 10.404 12.673 L 9.934 13.556 C 10.158 13.675 10.411 13.729 10.664 13.711 L 10.594 12.714 Z M 10.404 12.673 L 10.869 11.788 L 7.791 10.169 L 7.325 11.055 L 6.86 11.94 L 9.938 13.558 L 10.404 12.673 Z M 7.325 11.055 L 7.79 10.169 C 7.444 9.987 7.059 9.892 6.668 9.892 L 6.668 10.892 L 6.668 11.892 C 6.735 11.892 6.801 11.909 6.86 11.94 L 7.325 11.055 Z M 6.668 10.892 L 6.668 9.892 C 6.276 9.892 5.891 9.987 5.545 10.169 L 6.01 11.055 L 6.475 11.94 C 6.534 11.909 6.6 11.892 6.668 11.892 L 6.668 10.892 Z M 6.01 11.055 L 5.544 10.17 L 2.466 11.788 L 2.932 12.673 L 3.397 13.558 L 6.475 11.94 L 6.01 11.055 Z M 2.932 12.673 L 2.464 11.789 C 2.571 11.733 2.692 11.707 2.812 11.716 L 2.742 12.713 L 2.671 13.711 C 2.923 13.729 3.176 13.676 3.4 13.557 L 2.932 12.673 Z M 2.742 12.713 L 2.812 11.716 C 2.933 11.725 3.049 11.767 3.147 11.838 L 2.559 12.647 L 1.971 13.455 C 2.175 13.604 2.418 13.693 2.671 13.711 L 2.742 12.713 Z M 2.559 12.647 L 3.147 11.838 C 3.245 11.909 3.321 12.006 3.366 12.119 L 2.439 12.493 L 1.512 12.868 C 1.607 13.103 1.766 13.306 1.971 13.455 L 2.559 12.647 Z M 2.439 12.493 L 3.366 12.119 C 3.411 12.231 3.424 12.354 3.403 12.473 L 2.419 12.3 L 1.434 12.127 C 1.39 12.377 1.417 12.633 1.512 12.868 L 2.439 12.493 Z M 2.419 12.3 L 3.404 12.469 L 3.991 9.043 L 3.006 8.874 L 2.02 8.705 L 1.433 12.131 L 2.419 12.3 Z M 3.006 8.874 L 3.991 9.043 C 4.058 8.657 4.029 8.261 3.908 7.888 L 2.957 8.197 L 2.006 8.507 C 2.027 8.57 2.032 8.639 2.02 8.705 L 3.006 8.874 Z M 2.957 8.197 L 3.908 7.888 C 3.787 7.516 3.577 7.178 3.296 6.905 L 2.599 7.621 L 1.901 8.338 C 1.949 8.385 1.985 8.443 2.006 8.507 L 2.957 8.197 Z M 2.599 7.621 L 3.296 6.905 L 0.805 4.48 L 0.108 5.197 L -0.59 5.913 L 1.901 8.338 L 2.599 7.621 Z M 0.108 5.197 L 0.803 4.477 C 0.89 4.561 0.951 4.668 0.981 4.786 L 0.011 5.028 L -0.96 5.27 C -0.898 5.516 -0.769 5.74 -0.587 5.916 L 0.108 5.197 Z M 0.011 5.028 L 0.981 4.786 C 1.01 4.903 1.006 5.027 0.968 5.142 L 0.017 4.833 L -0.934 4.525 C -1.012 4.766 -1.021 5.024 -0.96 5.27 L 0.011 5.028 Z M 0.017 4.833 L 0.968 5.142 C 0.931 5.257 0.862 5.36 0.769 5.438 L 0.126 4.672 L -0.517 3.906 C -0.711 4.069 -0.856 4.284 -0.934 4.525 L 0.017 4.833 Z M 0.126 4.672 L 0.769 5.438 C 0.677 5.515 0.564 5.566 0.444 5.583 L 0.304 4.593 L 0.164 3.602 C -0.087 3.638 -0.323 3.743 -0.517 3.906 L 0.126 4.672 Z M 0.304 4.593 L 0.449 5.582 L 3.892 5.079 L 3.747 4.089 L 3.603 3.1 L 0.159 3.603 L 0.304 4.593 Z M 3.747 4.089 L 3.891 5.079 C 4.278 5.023 4.646 4.873 4.963 4.643 L 4.375 3.834 L 3.787 3.025 C 3.733 3.064 3.67 3.09 3.603 3.1 L 3.747 4.089 Z M 4.375 3.834 L 4.963 4.643 C 5.279 4.413 5.535 4.11 5.708 3.759 L 4.812 3.316 L 3.915 2.873 C 3.886 2.933 3.842 2.985 3.787 3.025 L 4.375 3.834 Z M 4.812 3.316 L 5.709 3.758 L 7.248 0.639 L 6.351 0.197 L 5.454 -0.246 L 3.915 2.873 L 4.812 3.316 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.335,
    height: 12.715,
    viewBox: "0 0 13.335 12.715",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.333,
      top: 1.333,
      width: 13.335,
      height: 12.715,
      color: "var(--darker-gold-no-whitebg)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.351 0.197 L 5.455 -0.247 L 5.454 -0.246 L 6.351 0.197 Z M 6.668 0 L 6.668 -1 L 6.668 0 Z M 6.985 0.197 L 7.881 -0.246 L 7.881 -0.247 L 6.985 0.197 Z M 8.525 3.316 L 7.628 3.759 L 7.628 3.759 L 8.525 3.316 Z M 9.588 4.089 L 9.443 5.079 L 9.443 5.079 L 9.588 4.089 Z M 13.032 4.593 L 12.887 5.583 L 12.888 5.583 L 13.032 4.593 Z M 13.228 5.196 L 13.926 5.912 L 13.926 5.912 L 13.228 5.196 Z M 10.737 7.621 L 10.04 6.905 L 10.039 6.905 L 10.737 7.621 Z M 10.33 8.873 L 9.344 9.042 L 9.344 9.042 L 10.33 8.873 Z M 10.918 12.3 L 9.932 12.469 L 9.933 12.474 L 10.918 12.3 Z M 10.404 12.673 L 10.874 11.791 L 10.869 11.788 L 10.404 12.673 Z M 7.325 11.055 L 7.791 10.169 L 7.79 10.169 L 7.325 11.055 Z M 6.668 10.892 L 6.668 9.892 L 6.668 10.892 Z M 6.01 11.055 L 5.545 10.169 L 5.544 10.17 L 6.01 11.055 Z M 2.932 12.673 L 2.466 11.788 L 2.464 11.789 L 2.932 12.673 Z M 2.419 12.3 L 3.403 12.473 L 3.404 12.469 L 2.419 12.3 Z M 3.006 8.874 L 2.02 8.705 L 2.02 8.705 L 3.006 8.874 Z M 2.599 7.621 L 3.296 6.905 L 3.296 6.905 L 2.599 7.621 Z M 0.108 5.197 L 0.805 4.48 L 0.803 4.477 L 0.108 5.197 Z M 0.304 4.593 L 0.444 5.583 L 0.449 5.582 L 0.304 4.593 Z M 3.747 4.089 L 3.603 3.1 L 3.603 3.1 L 3.747 4.089 Z M 4.812 3.316 L 5.708 3.759 L 5.709 3.758 L 4.812 3.316 Z M 6.351 0.197 L 7.247 0.64 C 7.194 0.748 7.111 0.839 7.009 0.903 L 6.482 0.053 L 5.954 -0.796 C 5.74 -0.663 5.567 -0.473 5.455 -0.247 L 6.351 0.197 Z M 6.482 0.053 L 7.009 0.903 C 6.907 0.966 6.788 1 6.668 1 L 6.668 0 L 6.668 -1 C 6.416 -1 6.168 -0.929 5.954 -0.796 L 6.482 0.053 Z M 6.668 0 L 6.668 1 C 6.547 1 6.429 0.966 6.327 0.903 L 6.854 0.053 L 7.382 -0.796 C 7.167 -0.929 6.92 -1 6.668 -1 L 6.668 0 Z M 6.854 0.053 L 6.327 0.903 C 6.224 0.839 6.142 0.748 6.088 0.64 L 6.985 0.197 L 7.881 -0.247 C 7.769 -0.473 7.596 -0.663 7.382 -0.796 L 6.854 0.053 Z M 6.985 0.197 L 6.088 0.639 L 7.628 3.759 L 8.525 3.316 L 9.421 2.873 L 7.881 -0.246 L 6.985 0.197 Z M 8.525 3.316 L 7.628 3.759 C 7.801 4.109 8.057 4.412 8.373 4.642 L 8.961 3.834 L 9.549 3.025 C 9.495 2.985 9.451 2.933 9.421 2.873 L 8.525 3.316 Z M 8.961 3.834 L 8.373 4.642 C 8.689 4.872 9.056 5.022 9.443 5.079 L 9.588 4.089 L 9.733 3.1 C 9.667 3.09 9.603 3.064 9.549 3.025 L 8.961 3.834 Z M 9.588 4.089 L 9.443 5.079 L 12.887 5.583 L 13.032 4.593 L 13.177 3.604 L 9.733 3.1 L 9.588 4.089 Z M 13.032 4.593 L 12.888 5.583 C 12.769 5.566 12.657 5.515 12.565 5.437 L 13.209 4.673 L 13.853 3.908 C 13.66 3.745 13.425 3.64 13.175 3.604 L 13.032 4.593 Z M 13.209 4.673 L 12.565 5.437 C 12.472 5.36 12.404 5.258 12.366 5.143 L 13.317 4.834 L 14.268 4.524 C 14.19 4.284 14.046 4.071 13.853 3.908 L 13.209 4.673 Z M 13.317 4.834 L 12.366 5.143 C 12.329 5.028 12.324 4.905 12.353 4.788 L 13.324 5.028 L 14.295 5.267 C 14.356 5.022 14.346 4.765 14.268 4.524 L 13.317 4.834 Z M 13.324 5.028 L 12.353 4.788 C 12.382 4.671 12.443 4.564 12.53 4.48 L 13.228 5.196 L 13.926 5.912 C 14.107 5.736 14.235 5.512 14.295 5.267 L 13.324 5.028 Z M 13.228 5.196 L 12.53 4.479 L 10.04 6.905 L 10.737 7.621 L 11.435 8.338 L 13.926 5.912 L 13.228 5.196 Z M 10.737 7.621 L 10.039 6.905 C 9.759 7.178 9.549 7.515 9.428 7.888 L 10.379 8.197 L 11.33 8.506 C 11.351 8.442 11.387 8.384 11.435 8.337 L 10.737 7.621 Z M 10.379 8.197 L 9.428 7.888 C 9.307 8.26 9.278 8.656 9.344 9.042 L 10.33 8.873 L 11.316 8.705 C 11.304 8.639 11.309 8.57 11.33 8.506 L 10.379 8.197 Z M 10.33 8.873 L 9.344 9.042 L 9.932 12.469 L 10.918 12.3 L 11.903 12.131 L 11.315 8.704 L 10.33 8.873 Z M 10.918 12.3 L 9.933 12.474 C 9.912 12.354 9.925 12.232 9.97 12.119 L 10.898 12.494 L 11.825 12.868 C 11.92 12.633 11.947 12.376 11.903 12.126 L 10.918 12.3 Z M 10.898 12.494 L 9.97 12.119 C 10.016 12.007 10.092 11.909 10.19 11.838 L 10.778 12.647 L 11.365 13.456 C 11.57 13.307 11.73 13.103 11.825 12.868 L 10.898 12.494 Z M 10.778 12.647 L 10.19 11.838 C 10.288 11.767 10.404 11.725 10.525 11.716 L 10.594 12.714 L 10.664 13.711 C 10.917 13.694 11.16 13.605 11.365 13.456 L 10.778 12.647 Z M 10.594 12.714 L 10.525 11.716 C 10.646 11.708 10.767 11.734 10.874 11.791 L 10.404 12.673 L 9.934 13.556 C 10.158 13.675 10.411 13.729 10.664 13.711 L 10.594 12.714 Z M 10.404 12.673 L 10.869 11.788 L 7.791 10.169 L 7.325 11.055 L 6.86 11.94 L 9.938 13.558 L 10.404 12.673 Z M 7.325 11.055 L 7.79 10.169 C 7.444 9.987 7.059 9.892 6.668 9.892 L 6.668 10.892 L 6.668 11.892 C 6.735 11.892 6.801 11.909 6.86 11.94 L 7.325 11.055 Z M 6.668 10.892 L 6.668 9.892 C 6.276 9.892 5.891 9.987 5.545 10.169 L 6.01 11.055 L 6.475 11.94 C 6.534 11.909 6.6 11.892 6.668 11.892 L 6.668 10.892 Z M 6.01 11.055 L 5.544 10.17 L 2.466 11.788 L 2.932 12.673 L 3.397 13.558 L 6.475 11.94 L 6.01 11.055 Z M 2.932 12.673 L 2.464 11.789 C 2.571 11.733 2.692 11.707 2.812 11.716 L 2.742 12.713 L 2.671 13.711 C 2.923 13.729 3.176 13.676 3.4 13.557 L 2.932 12.673 Z M 2.742 12.713 L 2.812 11.716 C 2.933 11.725 3.049 11.767 3.147 11.838 L 2.559 12.647 L 1.971 13.455 C 2.175 13.604 2.418 13.693 2.671 13.711 L 2.742 12.713 Z M 2.559 12.647 L 3.147 11.838 C 3.245 11.909 3.321 12.006 3.366 12.119 L 2.439 12.493 L 1.512 12.868 C 1.607 13.103 1.766 13.306 1.971 13.455 L 2.559 12.647 Z M 2.439 12.493 L 3.366 12.119 C 3.411 12.231 3.424 12.354 3.403 12.473 L 2.419 12.3 L 1.434 12.127 C 1.39 12.377 1.417 12.633 1.512 12.868 L 2.439 12.493 Z M 2.419 12.3 L 3.404 12.469 L 3.991 9.043 L 3.006 8.874 L 2.02 8.705 L 1.433 12.131 L 2.419 12.3 Z M 3.006 8.874 L 3.991 9.043 C 4.058 8.657 4.029 8.261 3.908 7.888 L 2.957 8.197 L 2.006 8.507 C 2.027 8.57 2.032 8.639 2.02 8.705 L 3.006 8.874 Z M 2.957 8.197 L 3.908 7.888 C 3.787 7.516 3.577 7.178 3.296 6.905 L 2.599 7.621 L 1.901 8.338 C 1.949 8.385 1.985 8.443 2.006 8.507 L 2.957 8.197 Z M 2.599 7.621 L 3.296 6.905 L 0.805 4.48 L 0.108 5.197 L -0.59 5.913 L 1.901 8.338 L 2.599 7.621 Z M 0.108 5.197 L 0.803 4.477 C 0.89 4.561 0.951 4.668 0.981 4.786 L 0.011 5.028 L -0.96 5.27 C -0.898 5.516 -0.769 5.74 -0.587 5.916 L 0.108 5.197 Z M 0.011 5.028 L 0.981 4.786 C 1.01 4.903 1.006 5.027 0.968 5.142 L 0.017 4.833 L -0.934 4.525 C -1.012 4.766 -1.021 5.024 -0.96 5.27 L 0.011 5.028 Z M 0.017 4.833 L 0.968 5.142 C 0.931 5.257 0.862 5.36 0.769 5.438 L 0.126 4.672 L -0.517 3.906 C -0.711 4.069 -0.856 4.284 -0.934 4.525 L 0.017 4.833 Z M 0.126 4.672 L 0.769 5.438 C 0.677 5.515 0.564 5.566 0.444 5.583 L 0.304 4.593 L 0.164 3.602 C -0.087 3.638 -0.323 3.743 -0.517 3.906 L 0.126 4.672 Z M 0.304 4.593 L 0.449 5.582 L 3.892 5.079 L 3.747 4.089 L 3.603 3.1 L 0.159 3.603 L 0.304 4.593 Z M 3.747 4.089 L 3.891 5.079 C 4.278 5.023 4.646 4.873 4.963 4.643 L 4.375 3.834 L 3.787 3.025 C 3.733 3.064 3.67 3.09 3.603 3.1 L 3.747 4.089 Z M 4.375 3.834 L 4.963 4.643 C 5.279 4.413 5.535 4.11 5.708 3.759 L 4.812 3.316 L 3.915 2.873 C 3.886 2.933 3.842 2.985 3.787 3.025 L 4.375 3.834 Z M 4.812 3.316 L 5.709 3.758 L 7.248 0.639 L 6.351 0.197 L 5.454 -0.246 L 3.915 2.873 L 4.812 3.316 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.335,
    height: 12.715,
    viewBox: "0 0 13.335 12.715",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.333,
      top: 1.333,
      width: 13.335,
      height: 12.715,
      color: "var(--darker-gold-no-whitebg)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.351 0.197 L 5.455 -0.247 L 5.454 -0.246 L 6.351 0.197 Z M 6.668 0 L 6.668 -1 L 6.668 0 Z M 6.985 0.197 L 7.881 -0.246 L 7.881 -0.247 L 6.985 0.197 Z M 8.525 3.316 L 7.628 3.759 L 7.628 3.759 L 8.525 3.316 Z M 9.588 4.089 L 9.443 5.079 L 9.443 5.079 L 9.588 4.089 Z M 13.032 4.593 L 12.887 5.583 L 12.888 5.583 L 13.032 4.593 Z M 13.228 5.196 L 13.926 5.912 L 13.926 5.912 L 13.228 5.196 Z M 10.737 7.621 L 10.04 6.905 L 10.039 6.905 L 10.737 7.621 Z M 10.33 8.873 L 9.344 9.042 L 9.344 9.042 L 10.33 8.873 Z M 10.918 12.3 L 9.932 12.469 L 9.933 12.474 L 10.918 12.3 Z M 10.404 12.673 L 10.874 11.791 L 10.869 11.788 L 10.404 12.673 Z M 7.325 11.055 L 7.791 10.169 L 7.79 10.169 L 7.325 11.055 Z M 6.668 10.892 L 6.668 9.892 L 6.668 10.892 Z M 6.01 11.055 L 5.545 10.169 L 5.544 10.17 L 6.01 11.055 Z M 2.932 12.673 L 2.466 11.788 L 2.464 11.789 L 2.932 12.673 Z M 2.419 12.3 L 3.403 12.473 L 3.404 12.469 L 2.419 12.3 Z M 3.006 8.874 L 2.02 8.705 L 2.02 8.705 L 3.006 8.874 Z M 2.599 7.621 L 3.296 6.905 L 3.296 6.905 L 2.599 7.621 Z M 0.108 5.197 L 0.805 4.48 L 0.803 4.477 L 0.108 5.197 Z M 0.304 4.593 L 0.444 5.583 L 0.449 5.582 L 0.304 4.593 Z M 3.747 4.089 L 3.603 3.1 L 3.603 3.1 L 3.747 4.089 Z M 4.812 3.316 L 5.708 3.759 L 5.709 3.758 L 4.812 3.316 Z M 6.351 0.197 L 7.247 0.64 C 7.194 0.748 7.111 0.839 7.009 0.903 L 6.482 0.053 L 5.954 -0.796 C 5.74 -0.663 5.567 -0.473 5.455 -0.247 L 6.351 0.197 Z M 6.482 0.053 L 7.009 0.903 C 6.907 0.966 6.788 1 6.668 1 L 6.668 0 L 6.668 -1 C 6.416 -1 6.168 -0.929 5.954 -0.796 L 6.482 0.053 Z M 6.668 0 L 6.668 1 C 6.547 1 6.429 0.966 6.327 0.903 L 6.854 0.053 L 7.382 -0.796 C 7.167 -0.929 6.92 -1 6.668 -1 L 6.668 0 Z M 6.854 0.053 L 6.327 0.903 C 6.224 0.839 6.142 0.748 6.088 0.64 L 6.985 0.197 L 7.881 -0.247 C 7.769 -0.473 7.596 -0.663 7.382 -0.796 L 6.854 0.053 Z M 6.985 0.197 L 6.088 0.639 L 7.628 3.759 L 8.525 3.316 L 9.421 2.873 L 7.881 -0.246 L 6.985 0.197 Z M 8.525 3.316 L 7.628 3.759 C 7.801 4.109 8.057 4.412 8.373 4.642 L 8.961 3.834 L 9.549 3.025 C 9.495 2.985 9.451 2.933 9.421 2.873 L 8.525 3.316 Z M 8.961 3.834 L 8.373 4.642 C 8.689 4.872 9.056 5.022 9.443 5.079 L 9.588 4.089 L 9.733 3.1 C 9.667 3.09 9.603 3.064 9.549 3.025 L 8.961 3.834 Z M 9.588 4.089 L 9.443 5.079 L 12.887 5.583 L 13.032 4.593 L 13.177 3.604 L 9.733 3.1 L 9.588 4.089 Z M 13.032 4.593 L 12.888 5.583 C 12.769 5.566 12.657 5.515 12.565 5.437 L 13.209 4.673 L 13.853 3.908 C 13.66 3.745 13.425 3.64 13.175 3.604 L 13.032 4.593 Z M 13.209 4.673 L 12.565 5.437 C 12.472 5.36 12.404 5.258 12.366 5.143 L 13.317 4.834 L 14.268 4.524 C 14.19 4.284 14.046 4.071 13.853 3.908 L 13.209 4.673 Z M 13.317 4.834 L 12.366 5.143 C 12.329 5.028 12.324 4.905 12.353 4.788 L 13.324 5.028 L 14.295 5.267 C 14.356 5.022 14.346 4.765 14.268 4.524 L 13.317 4.834 Z M 13.324 5.028 L 12.353 4.788 C 12.382 4.671 12.443 4.564 12.53 4.48 L 13.228 5.196 L 13.926 5.912 C 14.107 5.736 14.235 5.512 14.295 5.267 L 13.324 5.028 Z M 13.228 5.196 L 12.53 4.479 L 10.04 6.905 L 10.737 7.621 L 11.435 8.338 L 13.926 5.912 L 13.228 5.196 Z M 10.737 7.621 L 10.039 6.905 C 9.759 7.178 9.549 7.515 9.428 7.888 L 10.379 8.197 L 11.33 8.506 C 11.351 8.442 11.387 8.384 11.435 8.337 L 10.737 7.621 Z M 10.379 8.197 L 9.428 7.888 C 9.307 8.26 9.278 8.656 9.344 9.042 L 10.33 8.873 L 11.316 8.705 C 11.304 8.639 11.309 8.57 11.33 8.506 L 10.379 8.197 Z M 10.33 8.873 L 9.344 9.042 L 9.932 12.469 L 10.918 12.3 L 11.903 12.131 L 11.315 8.704 L 10.33 8.873 Z M 10.918 12.3 L 9.933 12.474 C 9.912 12.354 9.925 12.232 9.97 12.119 L 10.898 12.494 L 11.825 12.868 C 11.92 12.633 11.947 12.376 11.903 12.126 L 10.918 12.3 Z M 10.898 12.494 L 9.97 12.119 C 10.016 12.007 10.092 11.909 10.19 11.838 L 10.778 12.647 L 11.365 13.456 C 11.57 13.307 11.73 13.103 11.825 12.868 L 10.898 12.494 Z M 10.778 12.647 L 10.19 11.838 C 10.288 11.767 10.404 11.725 10.525 11.716 L 10.594 12.714 L 10.664 13.711 C 10.917 13.694 11.16 13.605 11.365 13.456 L 10.778 12.647 Z M 10.594 12.714 L 10.525 11.716 C 10.646 11.708 10.767 11.734 10.874 11.791 L 10.404 12.673 L 9.934 13.556 C 10.158 13.675 10.411 13.729 10.664 13.711 L 10.594 12.714 Z M 10.404 12.673 L 10.869 11.788 L 7.791 10.169 L 7.325 11.055 L 6.86 11.94 L 9.938 13.558 L 10.404 12.673 Z M 7.325 11.055 L 7.79 10.169 C 7.444 9.987 7.059 9.892 6.668 9.892 L 6.668 10.892 L 6.668 11.892 C 6.735 11.892 6.801 11.909 6.86 11.94 L 7.325 11.055 Z M 6.668 10.892 L 6.668 9.892 C 6.276 9.892 5.891 9.987 5.545 10.169 L 6.01 11.055 L 6.475 11.94 C 6.534 11.909 6.6 11.892 6.668 11.892 L 6.668 10.892 Z M 6.01 11.055 L 5.544 10.17 L 2.466 11.788 L 2.932 12.673 L 3.397 13.558 L 6.475 11.94 L 6.01 11.055 Z M 2.932 12.673 L 2.464 11.789 C 2.571 11.733 2.692 11.707 2.812 11.716 L 2.742 12.713 L 2.671 13.711 C 2.923 13.729 3.176 13.676 3.4 13.557 L 2.932 12.673 Z M 2.742 12.713 L 2.812 11.716 C 2.933 11.725 3.049 11.767 3.147 11.838 L 2.559 12.647 L 1.971 13.455 C 2.175 13.604 2.418 13.693 2.671 13.711 L 2.742 12.713 Z M 2.559 12.647 L 3.147 11.838 C 3.245 11.909 3.321 12.006 3.366 12.119 L 2.439 12.493 L 1.512 12.868 C 1.607 13.103 1.766 13.306 1.971 13.455 L 2.559 12.647 Z M 2.439 12.493 L 3.366 12.119 C 3.411 12.231 3.424 12.354 3.403 12.473 L 2.419 12.3 L 1.434 12.127 C 1.39 12.377 1.417 12.633 1.512 12.868 L 2.439 12.493 Z M 2.419 12.3 L 3.404 12.469 L 3.991 9.043 L 3.006 8.874 L 2.02 8.705 L 1.433 12.131 L 2.419 12.3 Z M 3.006 8.874 L 3.991 9.043 C 4.058 8.657 4.029 8.261 3.908 7.888 L 2.957 8.197 L 2.006 8.507 C 2.027 8.57 2.032 8.639 2.02 8.705 L 3.006 8.874 Z M 2.957 8.197 L 3.908 7.888 C 3.787 7.516 3.577 7.178 3.296 6.905 L 2.599 7.621 L 1.901 8.338 C 1.949 8.385 1.985 8.443 2.006 8.507 L 2.957 8.197 Z M 2.599 7.621 L 3.296 6.905 L 0.805 4.48 L 0.108 5.197 L -0.59 5.913 L 1.901 8.338 L 2.599 7.621 Z M 0.108 5.197 L 0.803 4.477 C 0.89 4.561 0.951 4.668 0.981 4.786 L 0.011 5.028 L -0.96 5.27 C -0.898 5.516 -0.769 5.74 -0.587 5.916 L 0.108 5.197 Z M 0.011 5.028 L 0.981 4.786 C 1.01 4.903 1.006 5.027 0.968 5.142 L 0.017 4.833 L -0.934 4.525 C -1.012 4.766 -1.021 5.024 -0.96 5.27 L 0.011 5.028 Z M 0.017 4.833 L 0.968 5.142 C 0.931 5.257 0.862 5.36 0.769 5.438 L 0.126 4.672 L -0.517 3.906 C -0.711 4.069 -0.856 4.284 -0.934 4.525 L 0.017 4.833 Z M 0.126 4.672 L 0.769 5.438 C 0.677 5.515 0.564 5.566 0.444 5.583 L 0.304 4.593 L 0.164 3.602 C -0.087 3.638 -0.323 3.743 -0.517 3.906 L 0.126 4.672 Z M 0.304 4.593 L 0.449 5.582 L 3.892 5.079 L 3.747 4.089 L 3.603 3.1 L 0.159 3.603 L 0.304 4.593 Z M 3.747 4.089 L 3.891 5.079 C 4.278 5.023 4.646 4.873 4.963 4.643 L 4.375 3.834 L 3.787 3.025 C 3.733 3.064 3.67 3.09 3.603 3.1 L 3.747 4.089 Z M 4.375 3.834 L 4.963 4.643 C 5.279 4.413 5.535 4.11 5.708 3.759 L 4.812 3.316 L 3.915 2.873 C 3.886 2.933 3.842 2.985 3.787 3.025 L 4.375 3.834 Z M 4.812 3.316 L 5.709 3.758 L 7.248 0.639 L 6.351 0.197 L 5.454 -0.246 L 3.915 2.873 L 4.812 3.316 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\"We went on a day trip to Savannah with Vagabond cruises. The boat rip was a 1.75 hr and was most enjoyable. We spent 4hours in the historic district before returning for the return trip back to Hilton Head. The boat docks in the historic district so everything is walkable. The Captain and crew were courteous and friendly. Also passenger safety was a priority while aboard.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(242,240,239)",
      flexShrink: 0
    }
  }, "Barrie A."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 77,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(242,240,239)",
      flexShrink: 0
    }
  }, "TripAdvisor")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      padding: "45px 75px 45px 75px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 350,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "100%",
      color: "rgb(146,116,23)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Guest Favorites"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 25,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Related Trips"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 350,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 152,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Daufuskie Island\nMorning Ferry"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(17,24,39)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Spend three hours exploring Daufuskie Island. Rent a golf cart, grab lunch at Old Daufuskie Crab Co., and explore this unique island at your own pace.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 398,
      display: "flex",
      flexDirection: "row",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "wrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0,
      color: "rgb(44,48,119)"
    },
    icon: "boat"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "The Vagabond")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0,
      color: "rgb(44,48,119)"
    },
    icon: "duration"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "4 Hours")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0,
      color: "rgb(44,48,119)"
    },
    icon: "clock"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "9AM - 1PM"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 40,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(113,113,130)",
      flexShrink: 0
    }
  }, "STARTING FROM"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(227,61,24)",
      flexShrink: 0
    }
  }, "$39.95"))), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 310 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(209,213,219)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 310 0 L 310 -0.5 L 310 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 292,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(242,240,239)",
      flexShrink: 0
    }
  }, "Book Now")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      opacity: 0.85,
      borderRadius: 100,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "Learn More")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 152,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: "100%",
      color: "rgb(17,24,39)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Daufuskie Island \nAfternoon Ferry"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(17,24,39)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Trips depart daily, with limited winter availability. Rent a golf cart, grab lunch at Old Daufuskie Crab Co., and explore the island at your own pace.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 398,
      display: "flex",
      flexDirection: "row",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "wrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0,
      color: "rgb(44,48,119)"
    },
    icon: "duration"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "4.5 Hours")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet, {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0,
      color: "rgb(44,48,119)"
    },
    icon: "clock"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "11:30AM - 5PM"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 40,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(113,113,130)",
      flexShrink: 0
    }
  }, "STARTING FROM"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(227,61,24)",
      flexShrink: 0
    }
  }, "$44.95"))), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 310 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(209,213,219)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 310 0 L 310 -0.5 L 310 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 292,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(242,240,239)",
      flexShrink: 0
    }
  }, "Book Now")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      opacity: 0.85,
      borderRadius: 100,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "Learn More")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.85,
      borderRadius: 100,
      boxShadow: "inset 0 0 0 1px rgb(147,44,26)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(205,43,7)",
      flexShrink: 0
    }
  }, "Explore More Cruises"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(44,48,119)",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      padding: "35px 75px 35px 75px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 350,
      display: "flex",
      flexDirection: "column",
      gap: 32,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 25,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 25,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 255,
      display: "flex",
      flexDirection: "column",
      gap: 15,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-353da7d089c45dcb",
    style: {
      position: "relative",
      width: 155,
      height: 134.957,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 34.5,
      height: 34.5,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement(Facebook, {
    style: {
      transform: "scale(0.067, 0.067)",
      transformOrigin: "0 0",
      color: "rgb(255,255,255)"
    },
    type: "flat"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 34.5,
      height: 34.5,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement(Instagram, {
    style: {
      transform: "scale(0.067, 0.067)",
      transformOrigin: "0 0",
      color: "rgb(255,255,255)"
    },
    type: "flat"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 46,
      height: 46,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement(Tripadvisor, {
    style: {
      transform: "scale(0.090, 0.090)",
      transformOrigin: "0 0",
      color: "rgb(255,255,255)"
    },
    type: "flat"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 29.307,
      height: 34,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.307,
    height: 34,
    viewBox: "0 0 29.307 34",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.307,
      height: 34,
      color: "var(--darker-gold-no-whitebg)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.625 0 L 21.296 0 C 21.357 0.248 21.404 0.499 21.438 0.751 C 21.611 2.724 22.513 4.561 23.968 5.903 C 25.423 7.246 27.327 7.997 29.307 8.011 L 29.307 13.356 C 29.042 13.442 28.763 13.481 28.485 13.47 C 27.165 13.324 25.858 13.087 24.571 12.761 C 23.461 12.333 22.381 11.831 21.339 11.258 L 21.339 11.967 C 21.339 14.802 21.339 17.723 21.339 20.601 C 21.353 21.773 21.277 22.944 21.112 24.103 C 20.863 26.039 20.123 27.879 18.961 29.448 C 17.799 31.017 16.255 32.262 14.476 33.064 C 13.431 33.449 12.36 33.761 11.272 34 L 9.301 34 C 9.219 33.961 9.133 33.928 9.046 33.901 C 7.048 33.647 5.172 32.803 3.657 31.477 C 2.141 30.151 1.056 28.403 0.539 26.457 C 0.301 25.61 0.121 24.748 0 23.877 L 0 22.218 C 0.156 21.438 0.269 20.658 0.496 19.892 C 1.135 17.848 2.37 16.041 4.042 14.702 C 5.714 13.363 7.748 12.554 9.882 12.378 C 10.52 12.279 11.158 12.25 11.839 12.193 C 11.839 14.037 11.839 15.738 11.839 17.454 C 11.839 17.865 11.626 17.922 11.286 18.021 C 10.199 18.27 9.133 18.602 8.096 19.013 C 7.298 19.314 6.612 19.854 6.132 20.56 C 5.652 21.265 5.402 22.102 5.416 22.955 C 5.356 23.922 5.582 24.886 6.066 25.726 C 6.55 26.565 7.271 27.244 8.138 27.676 C 8.932 28.167 9.853 28.41 10.785 28.375 C 11.716 28.339 12.617 28.027 13.37 27.478 C 13.935 27.074 14.408 26.556 14.76 25.958 C 15.111 25.359 15.334 24.694 15.412 24.004 C 15.582 22.593 15.653 21.172 15.625 19.751 C 15.625 13.455 15.625 7.155 15.625 0.851 C 15.667 0.553 15.639 0.284 15.625 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 31.312,
      height: 32,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.312,
    height: 32,
    viewBox: "0 0 31.312 32",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 31.312,
      height: 32,
      color: "var(--darker-gold-no-whitebg)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.635 13.55 L 30.291 0 L 27.529 0 L 17.408 11.765 L 9.324 0 L 0 0 L 12.224 17.791 L 0 32 L 2.762 32 L 13.451 19.576 L 21.988 32 L 31.312 32 L 18.634 13.55 L 18.635 13.55 Z M 14.851 17.948 L 13.613 16.176 L 3.758 2.079 L 8.001 2.079 L 15.954 13.456 L 17.192 15.227 L 27.53 30.015 L 23.288 30.015 L 14.851 17.948 L 14.851 17.948 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 25,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(227,61,24)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(242,240,239)",
      flexShrink: 0
    }
  }, "Book Now"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 24,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(223,175,44)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Get in Touch"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.6)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Phone"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "(843) 363-9026\n")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.6)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Local Phone"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "(843) 938-3040\n")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 85.333,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -1,
      width: 349,
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.6)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Location"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "149 Lighthouse Rd.\u2028Hilton Head Island, SC, 29928"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 37.333,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.333,
      width: 349,
      height: 30,
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 24,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(223,175,44)"
    }
  }, "Experiences")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Cruises"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Sailing Experiences"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Private Charters & Events"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Weddings"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 15,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 37.333,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.333,
      width: 350,
      height: 30,
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 24,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(223,175,44)"
    }
  }, "Company")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "About Us"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "FAQ"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Our Fleet"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Blog"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Employment"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Area Guide"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Contact Us"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 112,
      borderTop: "1.333px solid rgb(204,204,204)",
      borderRight: "1.333px solid rgb(204,204,204)",
      borderBottom: "1.333px solid rgb(204,204,204)",
      borderLeft: "1.333px solid rgb(204,204,204)",
      display: "flex",
      flexDirection: "column",
      padding: "25px 0px 25px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 26.667,
      display: "flex",
      flexDirection: "column",
      gap: 15,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 27,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: -0.5,
      top: -1,
      width: 349,
      height: 24,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.8)"
    }
  }, "\xA9 2020 Vagabond Cruises. All rights reserved.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 26,
      display: "flex",
      flexDirection: "row",
      gap: 32,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 112,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.667,
      width: 112,
      height: 24,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.8)"
    }
  }, "Terms of Service")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 84,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.667,
      width: 84,
      height: 24,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.8)"
    }
  }, "Accessibility")))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 802,
      width: 393,
      height: 58,
      overflow: "hidden",
      backgroundColor: "rgb(227,61,24)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(242,240,239)",
      flexShrink: 0
    }
  }, "Book Now")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 0,
      width: 393,
      height: 120,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(1,11,19)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 16px 6px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(242,240,239)",
      flexShrink: 0
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 10,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.280,
    height: 6.114,
    viewBox: "0 0 17.280 6.114",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 2.193,
      width: 17.28,
      height: 6.114,
      color: "rgb(242,240,239)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.28 0.573 C 17.28 0.257 16.85 0 16.32 0 L 15.36 0 C 14.83 0 14.4 0.257 14.4 0.573 L 14.4 5.541 C 14.4 5.857 14.83 6.114 15.36 6.114 L 16.32 6.114 C 16.85 6.114 17.28 5.857 17.28 5.541 L 17.28 0.573 Z M 10.589 1.223 L 11.549 1.223 C 12.08 1.223 12.509 1.486 12.509 1.81 L 12.509 5.527 C 12.509 5.851 12.08 6.114 11.549 6.114 L 10.589 6.114 C 10.059 6.114 9.629 5.851 9.629 5.527 L 9.629 1.81 C 9.629 1.486 10.059 1.223 10.589 1.223 Z M 6.691 2.548 L 5.731 2.548 C 5.201 2.548 4.771 2.814 4.771 3.142 L 4.771 5.52 C 4.771 5.848 5.201 6.114 5.731 6.114 L 6.691 6.114 C 7.221 6.114 7.651 5.848 7.651 5.52 L 7.651 3.142 C 7.651 2.814 7.221 2.548 6.691 2.548 Z M 1.92 3.77 L 0.96 3.77 C 0.43 3.77 0 4.033 0 4.356 L 0 5.528 C 0 5.852 0.43 6.114 0.96 6.114 L 1.92 6.114 C 2.45 6.114 2.88 5.852 2.88 5.528 L 2.88 4.356 C 2.88 4.033 2.45 3.77 1.92 3.77 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 10,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.713,
    height: 6.164,
    viewBox: "0 0 13.713 6.164",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.8,
      top: 1.668,
      width: 13.713,
      height: 6.164,
      color: "rgb(242,240,239)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.857 1.233 C 8.847 1.233 10.76 1.694 12.202 2.521 C 12.311 2.585 12.484 2.584 12.591 2.519 L 13.629 1.887 C 13.684 1.855 13.714 1.81 13.713 1.764 C 13.713 1.717 13.682 1.673 13.627 1.641 C 9.842 -0.547 3.871 -0.547 0.086 1.641 C 0.032 1.673 0.001 1.717 0 1.764 C -0.001 1.81 0.03 1.855 0.084 1.887 L 1.122 2.519 C 1.229 2.584 1.403 2.585 1.511 2.521 C 2.953 1.694 4.867 1.233 6.857 1.233 Z M 6.854 3.343 C 7.94 3.343 8.987 3.599 9.792 4.061 C 9.901 4.127 10.073 4.125 10.179 4.058 L 11.208 3.398 C 11.263 3.364 11.293 3.317 11.292 3.268 C 11.291 3.219 11.26 3.173 11.204 3.139 C 8.753 1.693 4.958 1.693 2.506 3.139 C 2.451 3.173 2.419 3.219 2.419 3.268 C 2.418 3.317 2.448 3.364 2.503 3.398 L 3.532 4.058 C 3.638 4.125 3.81 4.127 3.919 4.061 C 4.723 3.599 5.769 3.344 6.854 3.343 Z M 8.874 4.74 C 8.875 4.793 8.846 4.844 8.792 4.88 L 7.051 6.108 C 7 6.144 6.93 6.164 6.857 6.164 C 6.785 6.164 6.715 6.144 6.664 6.108 L 4.922 4.88 C 4.869 4.843 4.839 4.793 4.841 4.74 C 4.842 4.687 4.875 4.637 4.931 4.602 C 6.043 3.945 7.672 3.945 8.784 4.602 C 8.84 4.637 8.872 4.687 8.874 4.74 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22,
      height: 11,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21.472,
    height: 7.150,
    viewBox: "0 0 21.472 7.150",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 2.2,
      width: 21.472,
      height: 7.15,
      color: "rgb(242,240,239)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.536 0 C 16.147 0 16.952 0 17.586 0.189 C 18.391 0.428 19.031 0.877 19.374 1.44 C 19.643 1.883 19.643 2.447 19.643 3.575 C 19.643 4.703 19.643 5.267 19.374 5.71 L 19.306 5.814 C 18.951 6.329 18.34 6.737 17.586 6.961 L 17.464 6.995 C 16.848 7.15 16.046 7.15 14.536 7.15 L 5.107 7.15 L 4.04 7.147 C 3.104 7.139 2.532 7.103 2.057 6.961 C 1.302 6.737 0.692 6.329 0.337 5.814 L 0.269 5.71 C 0 5.267 0 4.703 0 3.575 C 0 2.518 0 1.956 0.222 1.525 L 0.269 1.44 C 0.59 0.912 1.173 0.484 1.908 0.236 L 2.057 0.189 C 2.532 0.047 3.104 0.012 4.04 0.003 L 5.107 0 L 14.536 0 Z M 5.107 0.55 C 4.291 0.55 3.718 0.55 3.27 0.572 C 2.83 0.594 2.568 0.634 2.365 0.694 C 1.747 0.878 1.255 1.223 0.992 1.655 C 0.906 1.797 0.848 1.981 0.817 2.289 C 0.786 2.603 0.786 3.003 0.786 3.575 C 0.786 4.147 0.786 4.547 0.817 4.861 C 0.848 5.169 0.906 5.353 0.992 5.495 C 1.255 5.927 1.747 6.272 2.365 6.456 C 2.568 6.516 2.83 6.556 3.27 6.578 C 3.718 6.6 4.291 6.6 5.107 6.6 L 14.536 6.6 C 15.352 6.6 15.924 6.6 16.373 6.578 C 16.813 6.556 17.075 6.516 17.278 6.456 C 17.896 6.272 18.388 5.927 18.651 5.495 C 18.737 5.353 18.795 5.169 18.826 4.861 C 18.857 4.547 18.857 4.147 18.857 3.575 C 18.857 3.003 18.857 2.603 18.826 2.289 C 18.795 1.981 18.737 1.797 18.651 1.655 C 18.388 1.223 17.896 0.878 17.278 0.694 C 17.075 0.634 16.813 0.594 16.373 0.572 C 15.924 0.55 15.352 0.55 14.536 0.55 L 5.107 0.55 Z M 14.929 1.1 C 16.029 1.1 16.579 1.1 16.999 1.25 C 17.368 1.382 17.669 1.592 17.857 1.851 C 18.071 2.145 18.071 2.53 18.071 3.3 L 18.071 3.85 C 18.071 4.62 18.071 5.005 17.857 5.299 C 17.669 5.558 17.368 5.768 16.999 5.9 C 16.579 6.05 16.029 6.05 14.929 6.05 L 4.714 6.05 C 3.614 6.05 3.064 6.05 2.644 5.9 C 2.275 5.768 1.974 5.558 1.786 5.299 C 1.571 5.005 1.571 4.62 1.571 3.85 L 1.571 3.3 C 1.571 2.53 1.571 2.145 1.786 1.851 C 1.974 1.592 2.275 1.382 2.644 1.25 C 3.064 1.1 3.614 1.1 4.714 1.1 L 14.929 1.1 Z M 20.429 2.475 C 21.061 2.665 21.472 3.107 21.472 3.596 C 21.472 4.085 21.061 4.527 20.429 4.716 L 20.429 2.475 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 93,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(209,213,219)",
      borderRight: "1px solid rgb(209,213,219)",
      borderBottom: "1px solid rgb(209,213,219)",
      borderLeft: "1px solid rgb(209,213,219)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 16px 12px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-9ceb0b9a1aed9d1d-2f7224f4",
    style: {
      position: "relative",
      width: 64,
      height: 56,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      boxShadow: "inset 0 0 0 1px rgb(44,48,119)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.332,
    height: 11.668,
    viewBox: "0 0 13.332 11.668",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.334,
      top: 4.166,
      width: 13.332,
      height: 11.668,
      color: "rgb(44,48,119)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 0 L 0 -1 Z M 13.332 1 C 13.884 1 14.332 0.552 14.332 0 C 14.332 -0.552 13.884 -1 13.332 -1 L 13.332 0 L 13.332 1 Z M 0 4.834 C -0.552 4.834 -1 5.282 -1 5.834 C -1 6.386 -0.552 6.834 0 6.834 L 0 5.834 L 0 4.834 Z M 13.332 6.834 C 13.884 6.834 14.332 6.386 14.332 5.834 C 14.332 5.282 13.884 4.834 13.332 4.834 L 13.332 5.834 L 13.332 6.834 Z M 0 10.668 C -0.552 10.668 -1 11.116 -1 11.668 C -1 12.22 -0.552 12.668 0 12.668 L 0 11.668 L 0 10.668 Z M 13.332 12.668 C 13.884 12.668 14.332 12.22 14.332 11.668 C 14.332 11.116 13.884 10.668 13.332 10.668 L 13.332 11.668 L 13.332 12.668 Z M 0 0 L 0 1 L 13.332 1 L 13.332 0 L 13.332 -1 L 0 -1 L 0 0 Z M 0 5.834 L 0 6.834 L 13.332 6.834 L 13.332 5.834 L 13.332 4.834 L 0 4.834 L 0 5.834 Z M 0 11.668 L 0 12.668 L 13.332 12.668 L 13.332 11.668 L 13.332 10.668 L 0 10.668 L 0 11.668 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))));
}

window.ItemPageDesktop = ItemPageDesktop;
window.ItemPageDesktopMobile390 = ItemPageDesktopMobile390;
})();
