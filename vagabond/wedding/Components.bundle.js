(function(){
// Components bundle — 7 component(s) materialized from a .fig as one
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

// figma node: 786:187 Form
function Form(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 112,
      height: 99,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 99.750,
    height: 77.344,
    viewBox: "0 0 99.750 77.344",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.125,
      top: 10.829,
      width: 99.75,
      height: 77.344
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 99.75 33.83 C 99.746 34.444 99.469 35.033 98.98 35.47 L 83.737 48.928 C 83.251 49.37 82.58 49.616 81.882 49.608 C 81.185 49.613 80.516 49.367 80.027 48.928 C 79.54 48.491 79.267 47.902 79.267 47.288 C 79.267 46.674 79.54 46.085 80.027 45.648 L 93.415 33.83 L 90.475 31.231 L 87.377 34.031 L 57.925 60.019 L 47.582 61.566 L 49.332 52.423 L 50.085 51.758 L 55.825 56.817 C 56.306 57.266 56.98 57.513 57.68 57.497 C 58.378 57.507 59.05 57.261 59.535 56.817 C 60.022 56.38 60.295 55.791 60.295 55.177 C 60.295 54.563 60.022 53.974 59.535 53.537 L 53.795 48.463 L 72.275 32.082 L 81.882 23.589 L 90.3 30.937 L 93.922 27.735 L 98.98 32.205 C 99.468 32.636 99.745 33.22 99.75 33.83 L 99.75 33.83 Z M 96.355 26.096 C 97.007 25.516 97.372 24.732 97.372 23.914 C 97.372 23.097 97.007 22.313 96.355 21.733 L 92.68 18.485 C 92.024 17.909 91.137 17.585 90.212 17.585 C 89.288 17.585 88.4 17.909 87.745 18.485 L 85.662 20.264 L 94.29 27.843 L 96.355 26.096 Z M 59.604 64.52 L 44.817 66.701 L 44.379 66.701 C 43.683 66.701 43.016 66.456 42.524 66.021 C 41.927 65.488 41.655 64.735 41.789 63.994 L 44.257 50.908 C 44.357 50.436 44.613 50 44.992 49.655 L 67.742 29.545 L 67.742 3.094 C 67.742 2.273 67.374 1.486 66.717 0.906 C 66.061 0.326 65.17 0 64.242 0 L 20.353 0 L 20.353 16.366 C 20.353 16.982 20.076 17.572 19.584 18.007 C 19.091 18.442 18.424 18.686 17.728 18.686 L 7.875 18.686 C 6.937 18.686 6.071 18.244 5.602 17.526 C 5.133 16.809 5.133 15.924 5.602 15.206 C 6.071 14.488 6.937 14.046 7.875 14.046 L 15.173 14.046 L 15.173 3.465 L 0.98 16.397 C 0.346 16.978 -0.006 17.756 0 18.563 L 0 74.25 C 0 75.071 0.369 75.858 1.025 76.438 C 1.681 77.018 2.572 77.344 3.5 77.344 L 64.331 77.344 C 65.259 77.344 66.149 77.018 66.806 76.438 C 67.462 75.858 67.831 75.071 67.831 74.25 L 67.831 57.822 L 61.04 63.824 C 60.645 64.158 60.145 64.379 59.605 64.458 L 59.604 64.52 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
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

// figma node: 9359:20827 wedding - desktop
function WeddingDesktop(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1512,
      minHeight: 1024,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 145,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
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
  }, "Inquire")))), /*#__PURE__*/React.createElement("div", {
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
  }, "Help"))))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-3bfebdc239df3f0d",
    style: {
      position: "relative",
      height: 535,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "45px 75px 45px 75px",
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
      width: 548,
      backgroundColor: "rgba(255,255,255,0.85)",
      boxShadow: "0px 8px 24px 0px rgba(0,0,0,0.0784)",
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
      fontSize: 48,
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Say \"I Do\" \non the Open Sea")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 22,
      lineHeight: 1.5,
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Unforgettable views. Exceptional service. Timeless memories. Your perfect wedding begins here."), /*#__PURE__*/React.createElement("div", {
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
  }, "Inquire")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(243,223,191,0.349)",
      display: "flex",
      flexDirection: "row",
      gap: 80,
      padding: "75px 75px 55px 75px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 494,
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
  }, "About Vagabond"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: "100%",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Creating Magical Moments on the Open Sea Since 2010")), /*#__PURE__*/React.createElement("span", {
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
  }, "Vagabond Wedding Cruises was born from a simple belief: your wedding day should be as unique and extraordinary as your love story. We specialize in creating unforgettable wedding experiences aboard our fleet of luxury yachts. From intimate ceremonies to grand celebrations, our dedicated team works tirelessly to ensure every detail is perfect. With stunning ocean views, world-class service, and memories that last a lifetime, we're honored to be part of your special day."), /*#__PURE__*/React.createElement("div", {
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
  }, "Inquire Today"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 410,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-5aa2b3d1f181cfbf",
    style: {
      position: "relative",
      width: 296,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 468,
      display: "flex",
      flexDirection: "column",
      gap: 26,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-d2da6438b62c31be",
    style: {
      position: "relative",
      height: 192,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-7d5d0a6692e62940",
    style: {
      position: "relative",
      height: 192,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      padding: "45px 75px 55px 75px",
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
      lineHeight: "20px",
      letterSpacing: "1.500px",
      color: "rgb(146,116,23)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "EXPLORE OUR OFFERINGS"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 40,
      lineHeight: "48px",
      letterSpacing: "-0.500px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Wedding Experiences for Every Celebration")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-d8132ecac4999d35-6e8a0149",
    style: {
      position: "relative",
      width: 328.5,
      height: 320,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1.2000000476837158,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Ceremonies & Receptions "), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Exchange vows on the deck at sunset, followed by a beautiful customized reception on the climate-controlled lower salon."))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-7d5d0a6692e62940-d56777f8",
    style: {
      position: "relative",
      width: 328.5,
      height: 320,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1.2000000476837158,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Brunch & Rehearsal Dinners"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Host an intimate pre-wedding gathering or celebration featuring premium Lowcountry menus and curated pairings."))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-151488b2cd84607c-4d5e3ea8",
    style: {
      position: "relative",
      width: 328.5,
      height: 320,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1.2000000476837158,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Elopements & Micro Weddings"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "A simplified option for couples seeking an elegant, high-impact celebration with their closest friends and family."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 328.5,
      height: 320,
      overflow: "hidden",
      background: "linear-gradient(180deg, rgba(0,0,0,0) 55.00%, rgba(1,11,19,0.9804) 100.00%), url(vagabond/assets/x-w1.webp) center / cover no-repeat",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1.2000000476837158,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Bridal & Bachelorette Events "), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Raise a glass to the bride-to-be with scenic custom day cruises, island-style music, and customized onboard packages."))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 48,
      padding: "55px 75px 55px 75px",
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
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 761,
      display: "flex",
      flexDirection: "column",
      gap: 16,
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
      lineHeight: "20px",
      letterSpacing: "1.500px",
      color: "rgb(146,116,23)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "FIND YOUR PERFECT FIT"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 40,
      lineHeight: "48px",
      letterSpacing: "-0.500px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Wedding Packages Designed For You")), /*#__PURE__*/React.createElement("div", {
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
  }, "Inquire Today"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.251)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 244,
      overflow: "hidden",
      background: "url(vagabond/wedding/assets/7d5d0a6692e62940.webp) center / cover no-repeat",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "32px 32px 32px 32px",
      alignItems: "flex-end",
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
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Intimate Dinner Wedding ")), /*#__PURE__*/React.createElement("div", {
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
      color: "rgb(74,85,101)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Exchange vows on Spirit of Harbour Town, then celebrate with dinner and the sunset cruise with your closest family and friends.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 380,
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
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "2 Hours")), /*#__PURE__*/React.createElement("div", {
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
  }, "Up to 40 Guests")))), /*#__PURE__*/React.createElement("div", {
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
  }, "$3,500")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 45,
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
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "Learn More ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 270,
      borderRadius: 100,
      backgroundColor: "rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 24px 12px 24px",
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
      lineHeight: "100%",
      letterSpacing: "0.500px",
      color: "rgb(242,240,239)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Inquire"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.251)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 244,
      overflow: "hidden",
      background: "url(vagabond/assets/dd2bd13b9da312ad.webp) center / cover no-repeat",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "32px 32px 32px 32px",
      alignItems: "flex-end",
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
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Silver Wedding")), /*#__PURE__*/React.createElement("div", {
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
      color: "rgb(74,85,101)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Host a refined three-hour wedding celebration on the water, with dinner, drinks, and space for your closest family and friends.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 380,
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
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "3 Hours")), /*#__PURE__*/React.createElement("div", {
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
  }, "Up to 70 Guests")))), /*#__PURE__*/React.createElement("div", {
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
  }, "$8,750")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 45,
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
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "Learn More")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 270,
      borderRadius: 100,
      backgroundColor: "rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 24px 12px 24px",
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
      lineHeight: "100%",
      letterSpacing: "0.500px",
      color: "rgb(242,240,239)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Inquire"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.251)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 244,
      overflow: "hidden",
      background: "url(vagabond/wedding/assets/3bfebdc239df3f0d.webp) center / cover no-repeat",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "32px 32px 32px 32px",
      alignItems: "flex-end",
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
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Gold Wedding")), /*#__PURE__*/React.createElement("div", {
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
      color: "rgb(74,85,101)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Enjoy a four-hour wedding celebration on the water, with elevated dining, sunset views, and more time with your closest guests.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 380,
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
  }, "Up to 70 Guests"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 380,
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
  }, "$9,800")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 380,
      height: 45,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
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
      lineHeight: "100%",
      color: "rgb(44,48,119)",
      flexShrink: 0
    }
  }, "Learn More")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 270,
      borderRadius: 100,
      backgroundColor: "rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 24px 12px 24px",
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
      lineHeight: "100%",
      letterSpacing: "0.500px",
      color: "rgb(242,240,239)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Inquire"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 16,
      backgroundColor: "rgba(243,223,191,0.349)",
      boxShadow: "inset 0 0 0 1px rgb(243,223,191)",
      display: "flex",
      flexDirection: "row",
      padding: "24px 40px 24px 40px",
      justifyContent: "space-between",
      alignItems: "center",
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
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(16,24,40)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.004 5.747 C 0.459 13.925 10.075 23.541 18.253 23.996 C 20.966 24.147 26.672 20.097 22.552 17.211 C 21.015 16.216 19.019 15.117 18.428 15.006 C 17.09 14.755 15.61 15.981 14.303 17.201 C 12.349 19.024 4.976 11.652 6.798 9.697 C 8.019 8.389 9.245 6.91 8.994 5.571 C 8.883 4.982 7.783 2.986 6.789 1.447 C 3.904 -2.672 -0.147 3.035 0.004 5.747 L 0.004 5.747 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, "Not sure which package is right for you? Submit a request \u2014 We\u2019ll help you decide in minutes.")), /*#__PURE__*/React.createElement("div", {
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
  }, "Submit A Request")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 796,
      background: "url(vagabond/assets/x-w2.webp) center / cover no-repeat",
      display: "flex",
      flexDirection: "column",
      gap: 48,
      padding: "88px 72px 88px 72px",
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
  }, "PLAN YOUR DAY"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: "100%",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Everything You Need to Know")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 80,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 606,
      display: "flex",
      flexDirection: "column",
      gap: 24,
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
      lineHeight: "100%",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Your Planning Journey"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
      flexDirection: "row",
      gap: 24,
      padding: "0px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 100,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
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
      color: "rgb(227,61,24)",
      flexShrink: 0
    }
  }, "12 Months"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 2,
      height: 40,
      backgroundColor: "rgb(229,231,235)",
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
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.2000000476837158,
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Book Date"), /*#__PURE__*/React.createElement("span", {
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
  }, "Lock in your preferred yacht, date, and sunset window with our team."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      padding: "0px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 100,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
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
      color: "rgb(227,61,24)",
      flexShrink: 0
    }
  }, "6 Months"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 2,
      height: 40,
      backgroundColor: "rgb(229,231,235)",
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
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.2000000476837158,
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Menu Tasting"), /*#__PURE__*/React.createElement("span", {
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
  }, "Sip, taste, and craft your custom buffet or plated dinner offerings."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      padding: "0px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 100,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
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
      color: "rgb(227,61,24)",
      flexShrink: 0
    }
  }, "3 Months"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 2,
      height: 40,
      backgroundColor: "rgb(229,231,235)",
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
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.2000000476837158,
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Final Guest Count"), /*#__PURE__*/React.createElement("span", {
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
  }, "Refine specifications and provide accurate group tallies."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      padding: "0px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 100,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
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
      color: "rgb(227,61,24)",
      flexShrink: 0
    }
  }, "1 Month"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 2,
      height: 40,
      backgroundColor: "rgb(229,231,235)",
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
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.2000000476837158,
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Walkthrough"), /*#__PURE__*/React.createElement("span", {
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
  }, "Step on board with your coordinator to perfect floor plans."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      padding: "0px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 100,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
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
      color: "rgb(227,61,24)",
      flexShrink: 0
    }
  }, "Day-of")), /*#__PURE__*/React.createElement("div", {
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
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.2000000476837158,
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "We Handle Everything"), /*#__PURE__*/React.createElement("span", {
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
  }, "Enjoy your moment while our professional crew handles setup to dock."))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235), 0px 8px 24px 0px rgba(0,0,0,0.0784)",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      padding: "40px 40px 40px 40px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "What's Always Included"), /*#__PURE__*/React.createElement("div", {
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
      width: 12,
      height: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(74,85,101)",
      flexGrow: 1
    }
  }, "Day-of Wedding Coordinator")), /*#__PURE__*/React.createElement("div", {
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
      width: 12,
      height: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(74,85,101)",
      flexGrow: 1
    }
  }, "Custom Menu & Culinary Planning")), /*#__PURE__*/React.createElement("div", {
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
      width: 12,
      height: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(74,85,101)",
      flexGrow: 1
    }
  }, "Licensed Captain & Professional Crew")), /*#__PURE__*/React.createElement("div", {
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
      width: 12,
      height: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(74,85,101)",
      flexGrow: 1
    }
  }, "Integrated Sound & Media Setup")), /*#__PURE__*/React.createElement("div", {
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
      width: 12,
      height: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(74,85,101)",
      flexGrow: 1
    }
  }, "Atmospheric Lighting Packages")), /*#__PURE__*/React.createElement("div", {
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
      width: 12,
      height: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(74,85,101)",
      flexGrow: 1
    }
  }, "Coordinated Table Linens & Decor")), /*#__PURE__*/React.createElement("div", {
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
      width: 12,
      height: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11,
      borderRadius: "50%",
      backgroundColor: "var(--darker-gold-no-whitebg)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(74,85,101)",
      flexGrow: 1
    }
  }, "Priority Dockside Boarding")))))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-bb4c781f87256fb8",
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      padding: "88px 72px 88px 72px",
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
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 8px 24px 0px rgba(0,0,0,0.0784)",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      padding: "40px 40px 40px 40px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 493,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: "1.500px",
      color: "rgb(146,116,23)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "START YOUR JOURNEY"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Libre Baskerville\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 40,
      lineHeight: "48px",
      letterSpacing: "-0.500px",
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Ready to Start Planning Your Dream Wedding?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "28px",
      color: "rgb(1,11,19)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Connect with one of our dedicated wedding specialists today. We will guide you through vessel selection, package customization, and availability.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 493,
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 100,
      backgroundColor: "rgb(227,61,24)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 24px 12px 24px",
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
      fontSize: 14,
      whiteSpace: "pre-wrap",
      lineHeight: "100%",
      letterSpacing: "0.500px",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "S", /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: "none",
      fontVariant: "normal"
    }
  }, "tart Your Wedding Inquiry"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "pre-wrap",
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0
    }
  }, "Call Us: ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "rgb(146,116,23)"
    }
  }, "(843) 363-9026")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "pre-wrap",
      lineHeight: "100%",
      color: "rgb(1,11,19)",
      flexShrink: 0
    }
  }, "Email: ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "rgb(146,116,23)"
    }
  }, "weddings@vagabondcruise.com")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgba(243,223,191,0.349)",
      display: "flex",
      flexDirection: "column",
      gap: 28,
      padding: "49px 43px 49px 49px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1,
      height: 1
    }
  }, /*#__PURE__*/React.createElement(Form, {
    style: {
      transform: "scale(0.009, 0.010)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 20,
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
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(23,32,51)",
      flexShrink: 0
    }
  }, "Full Name *"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 38,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(185,189,195)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 13px 0px 13px",
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
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(138,141,147)",
      flexGrow: 1
    }
  }, "Full Name"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(23,32,51)",
      flexShrink: 0
    }
  }, "Phone *"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 38,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(185,189,195)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 13px 0px 13px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.332,
    height: 11.668,
    viewBox: "0 0 9.332 11.668",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.334,
      top: 1.166,
      width: 9.332,
      height: 11.668,
      color: "rgb(117,122,130)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.5 11.668 C -0.5 11.944 -0.276 12.168 0 12.168 C 0.276 12.168 0.5 11.944 0.5 11.668 L 0 11.668 L -0.5 11.668 Z M 0.233 0.7 L -0.067 0.3 L -0.067 0.3 L 0.233 0.7 Z M 2.333 0 L 2.333 -0.5 L 2.333 0 Z M 8.399 0.7 L 8.699 1.1 L 8.699 1.1 L 8.399 0.7 Z M 9.099 7.467 L 9.399 7.867 L 9.399 7.867 L 9.099 7.467 Z M 6.999 8.167 L 6.999 7.667 L 6.999 8.167 Z M 2.333 7.001 L 2.333 6.501 L 2.333 6.501 L 2.333 7.001 Z M -0.333 7.519 C -0.539 7.703 -0.557 8.02 -0.373 8.225 C -0.189 8.431 0.128 8.449 0.333 8.265 L 0 7.892 L -0.333 7.519 Z M 0 11.668 L 0.5 11.668 L 0.5 1.167 L 0 1.167 L -0.5 1.167 L -0.5 11.668 L 0 11.668 Z M 0 1.167 L 0.5 1.167 C 0.5 1.154 0.503 1.141 0.509 1.129 L 0.062 0.906 L -0.386 0.682 C -0.461 0.833 -0.5 0.999 -0.5 1.167 L 0 1.167 Z M 0.062 0.906 L 0.509 1.129 C 0.515 1.118 0.523 1.108 0.533 1.1 L 0.233 0.7 L -0.067 0.3 C -0.201 0.401 -0.31 0.532 -0.386 0.682 L 0.062 0.906 Z M 0.233 0.7 L 0.533 1.1 C 1.053 0.711 1.684 0.5 2.333 0.5 L 2.333 0 L 2.333 -0.5 C 1.468 -0.5 0.626 -0.219 -0.067 0.3 L 0.233 0.7 Z M 2.333 0 L 2.333 0.5 C 3.096 0.5 3.743 0.752 4.421 1.043 C 5.067 1.32 5.805 1.667 6.61 1.667 L 6.61 1.167 L 6.61 0.667 C 6.055 0.667 5.529 0.43 4.815 0.124 C 4.132 -0.169 3.32 -0.5 2.333 -0.5 L 2.333 0 Z M 6.61 1.167 L 6.61 1.667 C 7.445 1.667 8.164 1.501 8.699 1.1 L 8.399 0.7 L 8.099 0.3 C 7.804 0.521 7.331 0.667 6.61 0.667 L 6.61 1.167 Z M 8.399 0.7 L 8.699 1.1 C 8.712 1.091 8.726 1.085 8.742 1.084 L 8.697 0.586 L 8.652 0.088 C 8.451 0.106 8.26 0.179 8.099 0.3 L 8.399 0.7 Z M 8.697 0.586 L 8.742 1.084 C 8.757 1.082 8.773 1.085 8.786 1.092 L 9.01 0.645 L 9.234 0.198 C 9.054 0.108 8.852 0.07 8.652 0.088 L 8.697 0.586 Z M 9.01 0.645 L 8.786 1.092 C 8.8 1.099 8.812 1.11 8.82 1.123 L 9.245 0.86 L 9.671 0.597 C 9.565 0.426 9.414 0.288 9.234 0.198 L 9.01 0.645 Z M 9.245 0.86 L 8.82 1.123 C 8.828 1.136 8.832 1.151 8.832 1.167 L 9.332 1.167 L 9.832 1.167 C 9.832 0.966 9.776 0.768 9.671 0.597 L 9.245 0.86 Z M 9.332 1.167 L 8.832 1.167 L 8.832 7.001 L 9.332 7.001 L 9.832 7.001 L 9.832 1.167 L 9.332 1.167 Z M 9.332 7.001 L 8.832 7.001 C 8.832 7.014 8.829 7.026 8.824 7.038 L 9.271 7.261 L 9.718 7.485 C 9.793 7.335 9.832 7.169 9.832 7.001 L 9.332 7.001 Z M 9.271 7.261 L 8.824 7.038 C 8.818 7.049 8.809 7.06 8.799 7.067 L 9.099 7.467 L 9.399 7.867 C 9.534 7.766 9.643 7.635 9.718 7.485 L 9.271 7.261 Z M 9.099 7.467 L 8.799 7.067 C 8.28 7.457 7.648 7.667 6.999 7.667 L 6.999 8.167 L 6.999 8.667 C 7.865 8.667 8.707 8.387 9.399 7.867 L 9.099 7.467 Z M 6.999 8.167 L 6.999 7.667 C 6.234 7.667 5.59 7.415 4.852 7.12 C 4.132 6.832 3.318 6.501 2.333 6.501 L 2.333 7.001 L 2.333 7.501 C 3.098 7.501 3.742 7.753 4.48 8.048 C 5.201 8.336 6.015 8.667 6.999 8.667 L 6.999 8.167 Z M 2.333 7.001 L 2.333 6.501 C 1.349 6.501 0.4 6.863 -0.333 7.519 L 0 7.892 L 0.333 8.265 C 0.883 7.773 1.595 7.501 2.333 7.501 L 2.333 7.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(138,141,147)",
      flexGrow: 1
    }
  }, "\u25BE  Phone")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 20,
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
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(23,32,51)",
      flexShrink: 0
    }
  }, "Email *"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 38,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(185,189,195)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 13px 0px 13px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.668,
    height: 9.332,
    viewBox: "0 0 11.668 9.332",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.166,
      top: 2.334,
      width: 11.668,
      height: 9.332,
      color: "rgb(117,122,130)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.936 2.172 C 12.169 2.023 12.238 1.714 12.089 1.481 C 11.941 1.248 11.632 1.18 11.399 1.328 L 11.668 1.75 L 11.936 2.172 Z M 6.422 5.09 L 6.674 5.523 L 6.682 5.517 L 6.691 5.512 L 6.422 5.09 Z M 5.836 5.248 L 5.836 4.748 L 5.836 5.248 Z M 5.25 5.09 L 4.982 5.512 L 4.991 5.518 L 4.999 5.523 L 5.25 5.09 Z M 0.268 1.328 C 0.035 1.18 -0.274 1.248 -0.422 1.481 C -0.57 1.714 -0.501 2.023 -0.268 2.172 L 0 1.75 L 0.268 1.328 Z M 11.668 1.75 L 11.399 1.328 L 6.154 4.669 L 6.422 5.09 L 6.691 5.512 L 11.936 2.172 L 11.668 1.75 Z M 6.422 5.09 L 6.171 4.658 C 6.07 4.717 5.954 4.748 5.836 4.748 L 5.836 5.248 L 5.836 5.748 C 6.13 5.748 6.419 5.67 6.674 5.523 L 6.422 5.09 Z M 5.836 5.248 L 5.836 4.748 C 5.719 4.748 5.603 4.717 5.502 4.658 L 5.25 5.09 L 4.999 5.523 C 5.254 5.67 5.542 5.748 5.836 5.748 L 5.836 5.248 Z M 5.25 5.09 L 5.519 4.668 L 0.268 1.328 L 0 1.75 L -0.268 2.172 L 4.982 5.512 L 5.25 5.09 Z M 1.167 0 L 1.167 0.5 L 10.501 0.5 L 10.501 0 L 10.501 -0.5 L 1.167 -0.5 L 1.167 0 Z M 10.501 0 L 10.501 0.5 C 10.869 0.5 11.168 0.799 11.168 1.167 L 11.668 1.167 L 12.168 1.167 C 12.168 0.246 11.421 -0.5 10.501 -0.5 L 10.501 0 Z M 11.668 1.167 L 11.168 1.167 L 11.168 8.166 L 11.668 8.166 L 12.168 8.166 L 12.168 1.167 L 11.668 1.167 Z M 11.668 8.166 L 11.168 8.166 C 11.168 8.534 10.869 8.832 10.501 8.832 L 10.501 9.332 L 10.501 9.832 C 11.421 9.832 12.168 9.086 12.168 8.166 L 11.668 8.166 Z M 10.501 9.332 L 10.501 8.832 L 1.167 8.832 L 1.167 9.332 L 1.167 9.832 L 10.501 9.832 L 10.501 9.332 Z M 1.167 9.332 L 1.167 8.832 C 0.798 8.832 0.5 8.534 0.5 8.166 L 0 8.166 L -0.5 8.166 C -0.5 9.086 0.246 9.832 1.167 9.832 L 1.167 9.332 Z M 0 8.166 L 0.5 8.166 L 0.5 1.167 L 0 1.167 L -0.5 1.167 L -0.5 8.166 L 0 8.166 Z M 0 1.167 L 0.5 1.167 C 0.5 0.799 0.798 0.5 1.167 0.5 L 1.167 0 L 1.167 -0.5 C 0.246 -0.5 -0.5 0.246 -0.5 1.167 L 0 1.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(138,141,147)",
      flexGrow: 1
    }
  }, "Email"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(23,32,51)",
      flexShrink: 0
    }
  }, "Wedding Cruises Desired Date *"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 38,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(185,189,195)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 13px 0px 13px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
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
      color: "rgb(117,122,130)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.417 0 C 3.417 -0.276 3.193 -0.5 2.917 -0.5 C 2.641 -0.5 2.417 -0.276 2.417 0 L 2.917 0 L 3.417 0 Z M 2.417 2.334 C 2.417 2.61 2.641 2.834 2.917 2.834 C 3.193 2.834 3.417 2.61 3.417 2.334 L 2.917 2.334 L 2.417 2.334 Z M 8.083 0 C 8.083 -0.276 7.859 -0.5 7.583 -0.5 C 7.307 -0.5 7.083 -0.276 7.083 0 L 7.583 0 L 8.083 0 Z M 7.083 2.334 C 7.083 2.61 7.307 2.834 7.583 2.834 C 7.859 2.834 8.083 2.61 8.083 2.334 L 7.583 2.334 L 7.083 2.334 Z M 0 4.167 C -0.276 4.167 -0.5 4.391 -0.5 4.667 C -0.5 4.943 -0.276 5.167 0 5.167 L 0 4.667 L 0 4.167 Z M 10.5 5.167 C 10.776 5.167 11 4.943 11 4.667 C 11 4.391 10.776 4.167 10.5 4.167 L 10.5 4.667 L 10.5 5.167 Z M 2.917 0 L 2.417 0 L 2.417 2.334 L 2.917 2.334 L 3.417 2.334 L 3.417 0 L 2.917 0 Z M 7.583 0 L 7.083 0 L 7.083 2.334 L 7.583 2.334 L 8.083 2.334 L 8.083 0 L 7.583 0 Z M 0 4.667 L 0 5.167 L 10.5 5.167 L 10.5 4.667 L 10.5 4.167 L 0 4.167 L 0 4.667 Z M 1.167 1.167 L 1.167 1.667 L 9.333 1.667 L 9.333 1.167 L 9.333 0.667 L 1.167 0.667 L 1.167 1.167 Z M 9.333 1.167 L 9.333 1.667 C 9.701 1.667 10 1.965 10 2.334 L 10.5 2.334 L 11 2.334 C 11 1.413 10.254 0.667 9.333 0.667 L 9.333 1.167 Z M 10.5 2.334 L 10 2.334 L 10 10.501 L 10.5 10.501 L 11 10.501 L 11 2.334 L 10.5 2.334 Z M 10.5 10.501 L 10 10.501 C 10 10.869 9.701 11.168 9.333 11.168 L 9.333 11.668 L 9.333 12.168 C 10.254 12.168 11 11.421 11 10.501 L 10.5 10.501 Z M 9.333 11.668 L 9.333 11.168 L 1.167 11.168 L 1.167 11.668 L 1.167 12.168 L 9.333 12.168 L 9.333 11.668 Z M 1.167 11.668 L 1.167 11.168 C 0.799 11.168 0.5 10.869 0.5 10.501 L 0 10.501 L -0.5 10.501 C -0.5 11.421 0.246 12.168 1.167 12.168 L 1.167 11.668 Z M 0 10.501 L 0.5 10.501 L 0.5 2.334 L 0 2.334 L -0.5 2.334 L -0.5 10.501 L 0 10.501 Z M 0 2.334 L 0.5 2.334 C 0.5 1.965 0.799 1.667 1.167 1.667 L 1.167 1.167 L 1.167 0.667 C 0.246 0.667 -0.5 1.413 -0.5 2.334 L 0 2.334 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(138,141,147)",
      flexGrow: 1
    }
  }, "When would you like to celebrate?")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 20,
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
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(23,32,51)",
      flexShrink: 0
    }
  }, "Wedding Cruises Event Size *"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 38,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(185,189,195)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 13px 0px 13px",
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
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(138,141,147)",
      flexGrow: 1
    }
  }, "Estimated number of guests"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 2.500,
    viewBox: "0 0 5 2.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 3.75,
      width: 5,
      height: 2.5,
      color: "rgb(117,122,130)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.354 -0.354 C 0.158 -0.549 -0.158 -0.549 -0.354 -0.354 C -0.549 -0.158 -0.549 0.158 -0.354 0.354 L 0 0 L 0.354 -0.354 Z M 2.5 2.5 L 2.146 2.854 L 2.5 3.207 L 2.854 2.854 L 2.5 2.5 Z M 5.354 0.354 C 5.549 0.158 5.549 -0.158 5.354 -0.354 C 5.158 -0.549 4.842 -0.549 4.646 -0.354 L 5 0 L 5.354 0.354 Z M 0 0 L -0.354 0.354 L 2.146 2.854 L 2.5 2.5 L 2.854 2.146 L 0.354 -0.354 L 0 0 Z M 2.5 2.5 L 2.854 2.854 L 5.354 0.354 L 5 0 L 4.646 -0.354 L 2.146 2.146 L 2.5 2.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(23,32,51)",
      flexShrink: 0
    }
  }, "Wedding Cruises Event Budget *"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 38,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(185,189,195)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 13px 0px 13px",
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
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(138,141,147)",
      flexGrow: 1
    }
  }, "Estimated total budget"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 2.500,
    viewBox: "0 0 5 2.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 3.75,
      width: 5,
      height: 2.5,
      color: "rgb(117,122,130)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.354 -0.354 C 0.158 -0.549 -0.158 -0.549 -0.354 -0.354 C -0.549 -0.158 -0.549 0.158 -0.354 0.354 L 0 0 L 0.354 -0.354 Z M 2.5 2.5 L 2.146 2.854 L 2.5 3.207 L 2.854 2.854 L 2.5 2.5 Z M 5.354 0.354 C 5.549 0.158 5.549 -0.158 5.354 -0.354 C 5.158 -0.549 4.842 -0.549 4.646 -0.354 L 5 0 L 5.354 0.354 Z M 0 0 L -0.354 0.354 L 2.146 2.854 L 2.5 2.5 L 2.854 2.146 L 0.354 -0.354 L 0 0 Z M 2.5 2.5 L 2.854 2.854 L 5.354 0.354 L 5 0 L 4.646 -0.354 L 2.146 2.146 L 2.5 2.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 20,
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 10,
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
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(23,32,51)",
      flexShrink: 0
    }
  }, "Wedding Cruises Event Type *"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 38,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(185,189,195)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 13px 0px 13px",
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
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(138,141,147)",
      flexGrow: 1
    }
  }, "Please select an option"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 2.500,
    viewBox: "0 0 5 2.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 3.75,
      width: 5,
      height: 2.5,
      color: "rgb(117,122,130)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.354 -0.354 C 0.158 -0.549 -0.158 -0.549 -0.354 -0.354 C -0.549 -0.158 -0.549 0.158 -0.354 0.354 L 0 0 L 0.354 -0.354 Z M 2.5 2.5 L 2.146 2.854 L 2.5 3.207 L 2.854 2.854 L 2.5 2.5 Z M 5.354 0.354 C 5.549 0.158 5.549 -0.158 5.354 -0.354 C 5.158 -0.549 4.842 -0.549 4.646 -0.354 L 5 0 L 5.354 0.354 Z M 0 0 L -0.354 0.354 L 2.146 2.854 L 2.5 2.5 L 2.854 2.146 L 0.354 -0.354 L 0 0 Z M 2.5 2.5 L 2.854 2.854 L 5.354 0.354 L 5 0 L 4.646 -0.354 L 2.146 2.146 L 2.5 2.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 62,
      opacity: 0,
      flexGrow: 1
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 10,
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
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(23,32,51)",
      flexShrink: 0
    }
  }, "Wedding Cruises Additional Notes"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 113,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(185,189,195)",
      display: "flex",
      flexDirection: "column",
      padding: "13px 13px 13px 13px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"PT Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(138,141,147)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Describe your ideal wedding cruise experience"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 100,
      backgroundColor: "rgb(44,48,119)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 24px 12px 24px",
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
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "0.500px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Submit"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(44,48,119)",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      padding: "55px 75px 55px 75px",
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
      color: "rgb(223,175,44)",
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
      color: "rgb(242,240,239)"
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
      color: "rgb(242,240,239)"
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
      left: 181.5,
      top: 644,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 8px 24px 0px rgba(0,0,0,0.0784)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "12px 24px 12px 24px",
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
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 253,
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 47,
      height: 47,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "7px 5px 7px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 30,
    height: 26,
    viewBox: "0 0 30 26",
    fill: "none",
    style: {
      position: "relative",
      width: 30,
      height: 26,
      flexShrink: 0,
      color: "rgb(44,48,119)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.554 18.3 C 11.655 18.962 11.827 19.601 12.059 20.208 C 11.618 20.355 11.162 20.47 10.693 20.549 C 10.195 20.633 9.68 20.677 9.156 20.677 C 6.628 20.677 4.339 19.654 2.682 17.999 C 1.025 16.345 0 14.06 0 11.537 C 0 9.014 1.025 6.729 2.682 5.074 C 4.339 3.42 6.628 2.397 9.156 2.397 C 11.683 2.397 13.972 3.42 15.629 5.074 C 17.286 6.728 18.311 9.014 18.311 11.537 C 18.311 13.112 17.913 14.593 17.21 15.886 C 16.507 17.182 15.498 18.287 14.282 19.11 C 14.046 18.42 13.913 17.682 13.908 16.915 C 14.66 16.251 15.272 15.434 15.694 14.51 C 16.109 13.603 16.339 12.598 16.339 11.538 C 16.339 9.558 15.535 7.764 14.235 6.467 C 12.936 5.17 11.139 4.367 9.156 4.367 C 7.172 4.367 5.375 5.17 4.076 6.467 C 2.776 7.765 1.972 9.558 1.972 11.538 C 1.972 13.518 2.776 15.312 4.076 16.609 C 5.376 17.906 7.172 18.71 9.156 18.71 C 9.595 18.71 10.028 18.67 10.449 18.594 C 10.829 18.525 11.198 18.426 11.552 18.301 L 11.554 18.3 Z M 27.32 10.398 C 25.663 8.744 23.373 7.721 20.846 7.721 C 20.321 7.721 19.808 7.765 19.308 7.848 C 18.839 7.928 18.383 8.042 17.942 8.189 C 18.174 8.797 18.346 9.437 18.448 10.097 C 18.804 9.972 19.171 9.873 19.551 9.805 C 19.972 9.729 20.405 9.689 20.844 9.689 C 22.828 9.689 24.625 10.492 25.924 11.789 C 27.224 13.087 28.028 14.881 28.028 16.86 C 28.028 18.84 27.224 20.634 25.924 21.931 C 24.624 23.229 22.828 24.032 20.844 24.032 C 18.861 24.032 17.064 23.229 15.765 21.931 C 14.465 20.634 13.661 18.84 13.661 16.86 C 13.661 15.801 13.891 14.794 14.306 13.888 C 14.728 12.965 15.34 12.146 16.092 11.483 C 16.087 10.715 15.956 9.977 15.718 9.287 C 14.502 10.109 13.493 11.215 12.79 12.511 C 12.087 13.804 11.689 15.285 11.689 16.86 C 11.689 19.383 12.714 21.669 14.371 23.323 C 16.028 24.977 18.317 26 20.844 26 C 23.372 26 25.661 24.977 27.318 23.323 C 28.975 21.669 30 19.383 30 16.86 C 30 14.337 28.975 12.052 27.318 10.398 L 27.32 10.398 Z M 16.539 4.98 C 17.211 5.573 17.908 6.188 18.358 7.094 C 18.809 6.19 19.506 5.573 20.177 4.98 C 21.094 4.17 21.963 3.402 22.023 1.993 L 22.023 1.992 C 22.05 1.38 21.846 0.884 21.516 0.54 C 21.293 0.307 21.012 0.144 20.708 0.062 C 20.403 -0.02 20.074 -0.022 19.753 0.069 C 19.267 0.209 18.799 0.565 18.467 1.179 L 18.467 1.18 L 18.465 1.182 L 18.465 1.183 C 18.464 1.186 18.461 1.191 18.459 1.194 L 18.459 1.195 L 18.44 1.214 L 18.439 1.214 C 18.436 1.217 18.433 1.218 18.429 1.22 L 18.427 1.22 L 18.426 1.221 L 18.423 1.223 L 18.421 1.223 L 18.42 1.224 L 18.417 1.226 L 18.415 1.226 C 18.401 1.232 18.386 1.235 18.371 1.236 L 18.364 1.236 C 18.349 1.236 18.334 1.232 18.32 1.226 L 18.318 1.226 L 18.315 1.224 L 18.314 1.223 L 18.312 1.223 L 18.309 1.221 L 18.308 1.22 L 18.307 1.22 C 18.304 1.218 18.299 1.216 18.296 1.214 L 18.295 1.214 L 18.276 1.195 L 18.276 1.194 C 18.273 1.191 18.271 1.188 18.27 1.183 L 18.27 1.182 L 18.268 1.18 L 18.268 1.179 C 17.936 0.565 17.468 0.209 16.982 0.069 C 16.661 -0.022 16.332 -0.022 16.028 0.062 C 15.723 0.144 15.442 0.308 15.219 0.54 C 14.89 0.884 14.685 1.38 14.71 1.992 L 14.71 1.993 C 14.77 3.402 15.639 4.17 16.557 4.98 L 16.539 4.98 Z M 23.935 6.13 C 24.41 6.549 24.904 6.985 25.223 7.627 C 25.542 6.987 26.036 6.549 26.511 6.13 C 27.161 5.556 27.775 5.013 27.819 4.015 L 27.819 4.013 C 27.838 3.58 27.693 3.229 27.459 2.986 C 27.302 2.821 27.102 2.705 26.887 2.647 C 26.671 2.588 26.439 2.588 26.211 2.652 C 25.865 2.751 25.535 3.003 25.299 3.438 L 25.299 3.441 C 25.298 3.444 25.296 3.445 25.295 3.448 L 25.276 3.467 C 25.273 3.469 25.271 3.47 25.268 3.471 L 25.265 3.471 L 25.264 3.473 L 25.261 3.473 C 25.251 3.477 25.24 3.48 25.23 3.48 L 25.224 3.48 C 25.214 3.48 25.204 3.477 25.193 3.473 L 25.19 3.473 L 25.189 3.471 L 25.186 3.471 C 25.183 3.47 25.182 3.469 25.179 3.467 L 25.16 3.448 C 25.158 3.445 25.157 3.444 25.155 3.441 L 25.155 3.438 C 24.92 3.003 24.589 2.751 24.244 2.652 C 24.017 2.588 23.783 2.588 23.567 2.647 C 23.351 2.705 23.153 2.821 22.995 2.986 C 22.762 3.229 22.617 3.58 22.635 4.013 L 22.635 4.015 C 22.678 5.013 23.294 5.556 23.944 6.13 L 23.935 6.13 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "500+ Weddings Hosted"))), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 35,
    viewBox: "-1 0 2 35",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,-0.013,0.013,1,269,6.001)",
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
      width: 250,
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 47,
      height: 47,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "7px 5px 7px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 28,
    height: 25,
    viewBox: "0 0 28 25",
    fill: "none",
    style: {
      position: "relative",
      width: 28,
      height: 25,
      flexShrink: 0,
      color: "rgb(44,48,119)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.041 0.095 L 14.748 1.967 C 14.769 2.023 14.819 2.059 14.878 2.062 L 16.868 2.16 C 17.004 2.166 17.059 2.338 16.953 2.423 L 15.401 3.678 C 15.354 3.716 15.335 3.774 15.351 3.832 L 15.873 5.764 C 15.909 5.896 15.764 6.002 15.65 5.927 L 13.984 4.83 C 13.933 4.797 13.872 4.797 13.822 4.83 L 12.156 5.927 C 12.042 6.002 11.897 5.896 11.933 5.764 L 12.455 3.832 C 12.471 3.774 12.452 3.715 12.405 3.678 L 10.852 2.423 C 10.747 2.338 10.802 2.166 10.938 2.16 L 12.927 2.062 C 12.987 2.059 13.037 2.023 13.058 1.967 L 13.765 0.095 C 13.813 -0.032 13.993 -0.032 14.041 0.095 Z M 23.275 15.5 C 25.884 15.5 28 17.627 28 20.25 C 28 22.873 25.884 25 23.275 25 C 20.665 25 18.549 22.873 18.549 20.25 C 18.549 17.626 20.665 15.5 23.275 15.5 Z M 22.654 20.669 L 21.598 19.608 C 21.324 19.333 20.88 19.333 20.607 19.608 C 20.333 19.883 20.333 20.329 20.607 20.604 L 22.16 22.165 C 22.434 22.441 22.878 22.441 23.151 22.165 C 24.087 21.225 25.013 20.273 25.944 19.327 C 26.216 19.052 26.215 18.607 25.941 18.333 C 25.668 18.06 25.224 18.06 24.952 18.336 L 22.654 20.669 Z M 13.903 7.637 C 15.841 7.637 17.412 9.216 17.412 11.164 C 17.412 13.113 15.841 14.692 13.903 14.692 C 11.965 14.692 10.393 13.113 10.393 11.164 C 10.393 9.216 11.965 7.637 13.903 7.637 Z M 7.685 21.504 L 17.754 21.504 C 17.664 21.101 17.615 20.681 17.615 20.25 C 17.615 19.081 17.966 17.994 18.568 17.09 C 17.336 15.964 15.699 15.278 13.902 15.278 C 10.567 15.278 7.781 17.643 7.114 20.796 C 7.036 21.163 7.312 21.504 7.685 21.504 Z M 27.772 8.224 L 26.513 9.776 C 26.475 9.822 26.469 9.884 26.496 9.937 L 27.407 11.718 C 27.469 11.839 27.349 11.973 27.223 11.924 L 25.366 11.199 C 25.31 11.178 25.25 11.19 25.208 11.233 L 23.804 12.654 C 23.709 12.751 23.545 12.678 23.552 12.542 L 23.664 10.542 C 23.667 10.482 23.637 10.429 23.583 10.402 L 21.805 9.499 C 21.684 9.438 21.703 9.259 21.834 9.224 L 23.76 8.713 C 23.818 8.697 23.859 8.652 23.868 8.592 L 24.172 6.613 C 24.193 6.478 24.368 6.441 24.442 6.555 L 25.521 8.239 C 25.553 8.289 25.609 8.314 25.668 8.305 L 27.635 7.984 C 27.768 7.962 27.858 8.119 27.773 8.224 L 27.772 8.224 Z M 21.99 2.31 C 22.011 2.177 21.856 2.086 21.751 2.172 L 20.208 3.438 C 20.162 3.476 20.101 3.482 20.047 3.455 L 18.275 2.539 C 18.155 2.477 18.022 2.597 18.071 2.724 L 18.792 4.591 C 18.813 4.647 18.8 4.708 18.758 4.75 L 17.344 6.161 C 17.248 6.257 17.321 6.421 17.456 6.414 L 19.445 6.302 C 19.505 6.298 19.558 6.329 19.585 6.383 L 20.483 8.17 C 20.544 8.292 20.723 8.273 20.757 8.141 L 21.266 6.205 C 21.281 6.147 21.326 6.106 21.386 6.096 L 23.354 5.79 C 23.488 5.769 23.526 5.593 23.412 5.52 L 21.737 4.435 C 21.687 4.402 21.662 4.346 21.671 4.287 L 21.99 2.31 Z M 0.171 7.985 L 2.138 8.305 C 2.197 8.315 2.252 8.29 2.285 8.239 L 3.364 6.556 C 3.437 6.441 3.613 6.479 3.633 6.613 L 3.938 8.592 C 3.947 8.652 3.988 8.697 4.046 8.713 L 5.972 9.224 C 6.103 9.259 6.122 9.438 6.001 9.499 L 4.223 10.402 C 4.169 10.429 4.139 10.482 4.142 10.542 L 4.253 12.542 C 4.261 12.678 4.097 12.751 4.002 12.655 L 2.598 11.234 C 2.556 11.191 2.496 11.178 2.44 11.2 L 0.583 11.924 C 0.457 11.973 0.337 11.839 0.399 11.718 L 1.31 9.937 C 1.337 9.884 1.331 9.823 1.293 9.776 L 0.033 8.225 C -0.052 8.119 0.038 7.963 0.171 7.985 L 0.171 7.985 Z M 6.054 2.172 C 5.95 2.086 5.794 2.177 5.816 2.311 L 6.134 4.287 C 6.144 4.347 6.119 4.403 6.069 4.435 L 4.394 5.52 C 4.28 5.594 4.317 5.77 4.451 5.791 L 6.42 6.097 C 6.479 6.106 6.525 6.147 6.54 6.206 L 7.049 8.142 C 7.083 8.274 7.262 8.293 7.323 8.171 L 8.221 6.383 C 8.248 6.33 8.301 6.299 8.36 6.302 L 10.349 6.414 C 10.485 6.422 10.558 6.257 10.462 6.161 L 9.048 4.75 C 9.005 4.708 8.993 4.648 9.014 4.592 L 9.735 2.725 C 9.784 2.598 9.651 2.477 9.53 2.54 L 7.758 3.455 C 7.705 3.483 7.644 3.476 7.598 3.438 L 6.054 2.172 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "15 Years Experience"))), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 35,
    viewBox: "-1 0 2 35",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,-0.013,0.013,1,551.454,6.001)",
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
      width: 250,
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 47,
      height: 47,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "7px 5px 7px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 32,
    viewBox: "0 0 24 32",
    fill: "none",
    style: {
      position: "relative",
      width: 24,
      height: 32,
      flexShrink: 0,
      color: "rgb(44,48,119)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.454 16.316 L 23.802 15.024 C 23.997 14.895 24.063 14.637 23.932 14.443 L 22.367 12.311 C 22.269 12.182 22.269 11.988 22.367 11.859 L 23.899 9.695 C 24.03 9.501 23.965 9.21 23.769 9.113 L 21.422 7.853 C 21.259 7.756 21.194 7.595 21.226 7.433 L 21.683 4.817 C 21.715 4.591 21.552 4.365 21.291 4.365 L 18.618 4.268 C 18.455 4.268 18.292 4.139 18.26 3.977 L 17.51 1.425 C 17.444 1.199 17.184 1.07 16.955 1.167 L 14.51 2.2 C 14.315 2.298 14.152 2.233 14.021 2.104 L 12.228 0.134 C 12.065 -0.06 11.772 -0.028 11.609 0.134 L 9.848 2.136 C 9.75 2.265 9.555 2.298 9.392 2.233 L 6.914 1.232 C 6.686 1.135 6.425 1.264 6.36 1.49 L 5.643 4.042 C 5.61 4.203 5.447 4.333 5.284 4.333 L 2.611 4.494 C 2.383 4.494 2.187 4.72 2.252 4.979 L 2.741 7.563 C 2.774 7.724 2.676 7.886 2.546 7.983 L 0.198 9.275 C 0.003 9.404 -0.063 9.662 0.068 9.856 L 1.633 11.988 C 1.731 12.117 1.731 12.311 1.633 12.44 L 0.101 14.604 C -0.03 14.798 0.035 15.089 0.231 15.186 L 2.578 16.446 C 2.741 16.543 2.806 16.704 2.774 16.866 L 2.317 19.482 C 2.285 19.708 2.448 19.934 2.709 19.934 L 5.382 20.031 C 5.545 20.031 5.708 20.16 5.74 20.322 L 6.49 22.874 C 6.556 23.1 6.816 23.229 7.045 23.132 L 9.49 22.099 C 9.653 22.034 9.848 22.066 9.946 22.196 L 11.739 24.166 C 11.902 24.36 12.196 24.327 12.359 24.166 L 14.119 22.163 C 14.217 22.034 14.413 22.002 14.576 22.066 L 17.053 23.068 C 17.282 23.165 17.542 23.035 17.608 22.809 L 18.325 20.257 C 18.357 20.096 18.52 19.967 18.683 19.967 L 21.357 19.805 C 21.585 19.805 21.78 19.579 21.715 19.321 L 21.226 16.737 C 21.226 16.575 21.324 16.381 21.454 16.316 Z M 12.033 20.031 C 7.664 20.031 4.11 16.51 4.11 12.182 C 4.11 7.853 7.664 4.333 12.033 4.333 C 16.401 4.333 19.955 7.853 19.955 12.182 C 19.955 16.478 16.401 20.031 12.033 20.031 Z M 12.033 5.722 C 8.446 5.722 5.545 8.596 5.545 12.149 C 5.545 15.703 8.446 18.577 12.033 18.577 C 15.619 18.577 18.52 15.703 18.52 12.149 C 18.52 8.596 15.619 5.722 12.033 5.722 Z M 16.662 11.374 L 14.575 13.118 L 15.227 15.735 C 15.358 16.219 14.804 16.607 14.38 16.349 L 12.033 14.927 L 9.718 16.349 C 9.294 16.607 8.74 16.219 8.87 15.735 L 9.522 13.118 L 7.436 11.374 C 7.045 11.051 7.24 10.405 7.762 10.373 L 10.5 10.179 L 11.544 7.66 C 11.739 7.175 12.424 7.175 12.619 7.66 L 13.663 10.179 L 16.401 10.373 C 16.825 10.405 17.053 11.051 16.662 11.374 L 16.662 11.374 Z M 18.553 23.972 L 20.574 30.141 C 20.639 30.367 20.444 30.593 20.216 30.529 L 17.803 29.85 C 17.673 29.818 17.575 29.85 17.477 29.947 L 15.945 31.885 C 15.782 32.079 15.488 32.014 15.423 31.788 L 13.304 25.296 C 13.337 25.264 13.402 25.231 13.435 25.199 L 14.739 24.004 L 16.434 24.521 C 16.629 24.585 16.825 24.618 17.021 24.618 C 17.64 24.585 18.162 24.359 18.553 23.972 Z M 6.262 29.818 L 3.882 30.496 C 3.654 30.561 3.426 30.335 3.523 30.109 L 5.512 23.972 C 5.903 24.359 6.425 24.585 7.012 24.585 C 7.207 24.585 7.403 24.553 7.599 24.488 L 9.294 23.972 L 10.598 25.167 C 10.631 25.199 10.696 25.231 10.728 25.264 L 8.609 31.756 C 8.544 31.982 8.251 32.047 8.088 31.853 L 6.555 29.915 C 6.523 29.818 6.392 29.786 6.262 29.818 L 6.262 29.818 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "50+ Awards Won"))), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 35,
    viewBox: "-1 0 2 35",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,-0.013,0.013,1,833.909,6.001)",
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
      width: 250,
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 47,
      height: 47,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "7px 5px 7px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 46,
    height: 13,
    viewBox: "0 0 46 13",
    fill: "none",
    style: {
      position: "relative",
      width: 46,
      height: 13,
      flexShrink: 0,
      color: "rgb(44,48,119)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 46 6.357 C 46 6.213 45.897 6.118 45.743 6.118 C 43.795 6.165 39.385 6.357 34.205 6.548 L 34.205 6.357 C 34.205 5.783 33.744 5.305 33.179 5.257 L 33.128 5.257 C 33.128 5.257 26 4.493 25.179 4.349 L 23.949 4.349 L 23.949 4.11 C 23.949 3.441 23.436 2.868 22.769 2.724 L 16.666 1.051 L 14.256 1.051 L 11.795 0 L 9.846 0 L 10.205 0.335 L 11.025 0.335 L 12.512 1.195 L 8.512 3.202 L 22.102 3.202 C 22.769 3.202 23.282 3.68 23.333 4.301 L 6.821 4.301 L 6.769 4.301 C 6.718 4.301 6.615 4.301 6.564 4.349 L 4.103 5.162 L 2.975 6.357 L 32.974 5.879 C 33.333 5.879 33.59 6.118 33.59 6.452 L 33.59 6.596 C 27.026 6.787 20.461 7.026 19.949 7.026 C 19.744 7.026 19.59 7.121 19.487 7.217 L 18.564 8.077 C 18.513 8.125 18.41 8.173 18.308 8.173 L 2 8.173 L 1.436 8.173 C 1.077 8.173 0.82 8.412 0.82 8.746 L 0.82 11.423 L 0.154 11.71 L 0 13 L 37.795 13 C 37.795 13 39.949 10.802 41.949 9.32 C 43.333 8.316 45.846 6.595 45.898 6.595 C 45.949 6.5 46 6.452 46 6.357 L 46 6.357 Z M 25.026 9.846 C 24.667 9.846 24.359 9.559 24.359 9.224 C 24.359 8.89 24.667 8.603 25.026 8.603 C 25.385 8.603 25.692 8.89 25.692 9.224 C 25.692 9.559 25.436 9.846 25.026 9.846 Z M 29.487 9.798 C 29.128 9.798 28.821 9.511 28.821 9.177 C 28.821 8.842 29.128 8.555 29.487 8.555 C 29.846 8.555 30.154 8.842 30.154 9.177 C 30.154 9.511 29.846 9.798 29.487 9.798 Z M 33.898 9.75 C 33.539 9.75 33.231 9.463 33.231 9.129 C 33.231 8.794 33.539 8.507 33.898 8.507 C 34.257 8.507 34.564 8.794 34.564 9.129 C 34.564 9.463 34.257 9.75 33.898 9.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "5 Luxury Yachts"))))));
}

window.WeddingDesktop = WeddingDesktop;
})();
