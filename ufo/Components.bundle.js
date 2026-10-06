// Components bundle — 14 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 6963:3049 Button (48 variants)
const __venc_Button2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Button2 = p => "type=" + __venc_Button2(p.type) + '|' + "state=" + __venc_Button2(p.state) + '|' + "size=" + __venc_Button2(p.size) + '|' + "width=" + __venc_Button2(p.width);
function Button2(_p = {}) {
  const props = {
    ..._p,
    showArrow: _p.showArrow ?? true,
    type: _p.type ?? "primary",
    leftIcon: _p.leftIcon ?? "",
    state: _p.state ?? "default",
    size: _p.size ?? "lg",
    showLeftIcon: _p.showLeftIcon ?? false,
    width: _p.width ?? "fit content"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "→"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "→"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(72,152,58)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "→"));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(72,152,58)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "→"));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(57,121,46)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "→"));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(57,121,46)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "→"));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 44,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(72,152,58)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 44,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(72,152,58)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(57,121,46)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 44,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(57,121,46)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 38,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 38,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 38,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(72,152,58)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 38,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(72,152,58)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 38,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(57,121,46)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 38,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(57,121,46)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 2px rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,61,102)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "→"));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 2px rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "→"));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgba(88,186,71,0.08)",
      boxShadow: "inset 0 0 0 2px rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "→"));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgba(88,186,71,0.08)",
      boxShadow: "inset 0 0 0 2px rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "→"));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgba(88,186,71,0.15)",
      boxShadow: "inset 0 0 0 2px rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "→"));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgba(88,186,71,0.15)",
      boxShadow: "inset 0 0 0 2px rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "→"));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 2px rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,61,102)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 44,
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 2px rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgba(88,186,71,0.08)",
      boxShadow: "inset 0 0 0 2px rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 44,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgba(88,186,71,0.08)",
      boxShadow: "inset 0 0 0 2px rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgba(88,186,71,0.15)",
      boxShadow: "inset 0 0 0 2px rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 44,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgba(88,186,71,0.15)",
      boxShadow: "inset 0 0 0 2px rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 38,
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 2px rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,61,102)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 38,
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 2px rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 38,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgba(88,186,71,0.08)",
      boxShadow: "inset 0 0 0 2px rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 38,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgba(88,186,71,0.08)",
      boxShadow: "inset 0 0 0 2px rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 38,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgba(88,186,71,0.15)",
      boxShadow: "inset 0 0 0 2px rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 38,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgba(88,186,71,0.15)",
      boxShadow: "inset 0 0 0 2px rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(35,31,32)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(35,31,32)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "→"));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      overflow: "hidden",
      borderRadius: 999,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(35,31,32)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(35,31,32)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "→"));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(35,31,32)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(35,31,32)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "→"));
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      overflow: "hidden",
      borderRadius: 999,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(35,31,32)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(35,31,32)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "→"));
  const __body40 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 38,
      overflow: "hidden",
      borderRadius: 999,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(35,31,32)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(35,31,32)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __body41 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 38,
      overflow: "hidden",
      borderRadius: 999,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(35,31,32)",
      flexShrink: 0
    }
  }, props.text1 ?? "Book Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(35,31,32)",
      flexShrink: 0
    }
  }, props.text2 ?? "→"));
  const __impls = {
    // figma: Type=Primary, State=Default, Width=Fit Content, Size=Large
    "type=primary|state=default|size=lg|width=fit content": __body0,
    // figma: Type=Primary, State=Default, Width=Full Width, Size=Large
    "type=primary|state=default|size=lg|width=full width": __body1,
    // figma: Type=Primary, State=Hover, Width=Fit Content, Size=Large
    "type=primary|state=hover|size=lg|width=fit content": __body2,
    // figma: Type=Primary, State=Hover, Width=Full Width, Size=Large
    "type=primary|state=hover|size=lg|width=full width": __body3,
    // figma: Type=Primary, State=Pressed, Width=Fit Content, Size=Large
    "type=primary|state=pressed|size=lg|width=fit content": __body4,
    // figma: Type=Primary, State=Pressed, Width=Full Width, Size=Large
    "type=primary|state=pressed|size=lg|width=full width": __body5,
    // figma: Type=Primary, State=Default, Width=Fit Content, Size=Medium
    "type=primary|state=default|size=md|width=fit content": __body6,
    // figma: Type=Primary, State=Default, Width=Full Width, Size=Medium
    "type=primary|state=default|size=md|width=full width": __body7,
    // figma: Type=Primary, State=Hover, Width=Fit Content, Size=Medium
    "type=primary|state=hover|size=md|width=fit content": __body8,
    // figma: Type=Primary, State=Hover, Width=Full Width, Size=Medium
    "type=primary|state=hover|size=md|width=full width": __body9,
    // figma: Type=Primary, State=Pressed, Width=Fit Content, Size=Medium
    "type=primary|state=pressed|size=md|width=fit content": __body10,
    // figma: Type=Primary, State=Pressed, Width=Full Width, Size=Medium
    "type=primary|state=pressed|size=md|width=full width": __body11,
    // figma: Type=Primary, State=Default, Width=Fit Content, Size=Small
    "type=primary|state=default|size=sm|width=fit content": __body12,
    // figma: Type=Primary, State=Default, Width=Full Width, Size=Small
    "type=primary|state=default|size=sm|width=full width": __body13,
    // figma: Type=Primary, State=Hover, Width=Fit Content, Size=Small
    "type=primary|state=hover|size=sm|width=fit content": __body14,
    // figma: Type=Primary, State=Hover, Width=Full Width, Size=Small
    "type=primary|state=hover|size=sm|width=full width": __body15,
    // figma: Type=Primary, State=Pressed, Width=Fit Content, Size=Small
    "type=primary|state=pressed|size=sm|width=fit content": __body16,
    // figma: Type=Primary, State=Pressed, Width=Full Width, Size=Small
    "type=primary|state=pressed|size=sm|width=full width": __body17,
    // figma: Type=Secondary, State=Default, Width=Fit Content, Size=Large
    "type=secondary|state=default|size=lg|width=fit content": __body18,
    // figma: Type=Secondary, State=Default, Width=Full Width, Size=Large
    "type=secondary|state=default|size=lg|width=full width": __body19,
    // figma: Type=Secondary, State=Hover, Width=Fit Content, Size=Large
    "type=secondary|state=hover|size=lg|width=fit content": __body20,
    // figma: Type=Secondary, State=Hover, Width=Full Width, Size=Large
    "type=secondary|state=hover|size=lg|width=full width": __body21,
    // figma: Type=Secondary, State=Pressed, Width=Fit Content, Size=Large
    "type=secondary|state=pressed|size=lg|width=fit content": __body22,
    // figma: Type=Secondary, State=Pressed, Width=Full Width, Size=Large
    "type=secondary|state=pressed|size=lg|width=full width": __body23,
    // figma: Type=Secondary, State=Default, Width=Fit Content, Size=Medium
    "type=secondary|state=default|size=md|width=fit content": __body24,
    // figma: Type=Secondary, State=Default, Width=Full Width, Size=Medium
    "type=secondary|state=default|size=md|width=full width": __body25,
    // figma: Type=Secondary, State=Hover, Width=Fit Content, Size=Medium
    "type=secondary|state=hover|size=md|width=fit content": __body26,
    // figma: Type=Secondary, State=Hover, Width=Full Width, Size=Medium
    "type=secondary|state=hover|size=md|width=full width": __body27,
    // figma: Type=Secondary, State=Pressed, Width=Fit Content, Size=Medium
    "type=secondary|state=pressed|size=md|width=fit content": __body28,
    // figma: Type=Secondary, State=Pressed, Width=Full Width, Size=Medium
    "type=secondary|state=pressed|size=md|width=full width": __body29,
    // figma: Type=Secondary, State=Default, Width=Fit Content, Size=Small
    "type=secondary|state=default|size=sm|width=fit content": __body30,
    // figma: Type=Secondary, State=Default, Width=Full Width, Size=Small
    "type=secondary|state=default|size=sm|width=full width": __body31,
    // figma: Type=Secondary, State=Hover, Width=Fit Content, Size=Small
    "type=secondary|state=hover|size=sm|width=fit content": __body32,
    // figma: Type=Secondary, State=Hover, Width=Full Width, Size=Small
    "type=secondary|state=hover|size=sm|width=full width": __body33,
    // figma: Type=Secondary, State=Pressed, Width=Fit Content, Size=Small
    "type=secondary|state=pressed|size=sm|width=fit content": __body34,
    // figma: Type=Secondary, State=Pressed, Width=Full Width, Size=Small
    "type=secondary|state=pressed|size=sm|width=full width": __body35,
    // figma: Type=Tertiary, State=Default, Width=Fit Content, Size=Large
    "type=tertiary|state=default|size=lg|width=fit content": __body36,
    // figma: Type=Tertiary, State=Default, Width=Full Width, Size=Large
    "type=tertiary|state=default|size=lg|width=full width": __body37,
    // figma: Type=Tertiary, State=Hover, Width=Fit Content, Size=Large
    "type=tertiary|state=hover|size=lg|width=fit content": __body36,
    // figma: Type=Tertiary, State=Hover, Width=Full Width, Size=Large
    "type=tertiary|state=hover|size=lg|width=full width": __body37,
    // figma: Type=Tertiary, State=Default, Width=Fit Content, Size=Medium
    "type=tertiary|state=default|size=md|width=fit content": __body38,
    // figma: Type=Tertiary, State=Default, Width=Full Width, Size=Medium
    "type=tertiary|state=default|size=md|width=full width": __body39,
    // figma: Type=Tertiary, State=Hover, Width=Fit Content, Size=Medium
    "type=tertiary|state=hover|size=md|width=fit content": __body38,
    // figma: Type=Tertiary, State=Hover, Width=Full Width, Size=Medium
    "type=tertiary|state=hover|size=md|width=full width": __body39,
    // figma: Type=Tertiary, State=Default, Width=Fit Content, Size=Small
    "type=tertiary|state=default|size=sm|width=fit content": __body40,
    // figma: Type=Tertiary, State=Default, Width=Full Width, Size=Small
    "type=tertiary|state=default|size=sm|width=full width": __body41,
    // figma: Type=Tertiary, State=Hover, Width=Fit Content, Size=Small
    "type=tertiary|state=hover|size=sm|width=fit content": __body40,
    // figma: Type=Tertiary, State=Hover, Width=Full Width, Size=Small
    "type=tertiary|state=hover|size=sm|width=full width": __body41
  };
  return (__impls[__vkey_Button2(props)] ?? __body0)();
}

// figma node: 7043:6067 Facebook (2 variants)
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

// figma node: 6963:2970 iconSet2 (18 variants)
const __venc_IconSet2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconSet2 = p => "icon=" + __venc_IconSet2(p.icon);
function IconSet2(_p = {}) {
  const props = {
    ..._p,
    icon: _p.icon ?? "mapMarker"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "100%",
      height: "100%",
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
    width: 53.766,
    height: 63.138,
    viewBox: "0 0 53.766 63.138",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 36.749 47.055 C 46.71 48.275 53.766 51.28 53.766 54.803 C 53.765 59.407 41.734 63.138 26.885 63.138 C 12.037 63.138 0.001 59.407 0 54.803 C 0 51.293 7.003 48.295 16.906 47.065 L 18.553 49.689 C 10.387 50.511 4.623 52.488 4.623 54.803 C 4.624 57.849 14.608 60.319 26.927 60.319 C 39.242 60.319 49.23 57.849 49.23 54.803 C 49.23 52.472 43.373 50.48 35.106 49.674 L 36.749 47.055 Z M 26.718 0 C 36.899 0 45.153 8.7 45.153 19.429 C 45.153 24.209 43.388 28.297 40.79 31.963 L 26.739 54.371 L 26.721 54.565 L 26.672 54.485 L 26.661 54.495 L 26.66 54.465 L 12.324 31.604 C 9.81 27.947 8.281 24.031 8.281 19.429 C 8.281 8.7 16.535 0 26.718 0 Z M 26.716 9.475 C 22.176 9.475 18.493 13.156 18.493 17.697 C 18.493 22.237 22.176 25.918 26.716 25.918 C 31.257 25.918 34.936 22.237 34.937 17.697 C 34.937 13.156 31.257 9.475 26.716 9.475 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "100%",
      height: "100%",
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
    width: 54.132,
    height: 65,
    viewBox: "0 0 54.132 65",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 54.105 60.181 C 54.392 62.752 52.378 65 49.794 65 L 4.338 65 C 1.754 65 -0.26 62.752 0.027 60.181 C 1.286 48.86 6.92 39.308 14.706 34.317 C 16.035 33.465 16.035 31.533 14.706 30.681 C 6.92 25.693 1.286 16.14 0.027 4.819 C -0.26 2.248 1.754 0 4.338 0 L 49.794 0 C 52.378 0 54.392 2.248 54.105 4.819 C 52.846 16.14 47.212 25.692 39.426 30.683 C 38.097 31.535 38.097 33.467 39.426 34.319 C 47.212 39.307 52.846 48.86 54.105 60.181 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "100%",
      height: "100%",
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
    width: 75.906,
    height: 75.955,
    viewBox: "0 0 75.906 75.955",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 37.108 C 0 37.858 0.423 38.913 1.138 39.526 L 29.112 63.103 C 28.698 64.17 28.471 65.307 28.471 66.465 C 28.471 71.684 32.742 75.955 37.961 75.955 C 43.213 75.955 47.452 71.684 47.452 66.465 C 47.452 65.308 47.235 64.172 46.832 63.11 C 56.393 55.04 74.263 40.016 74.897 39.418 C 75.427 38.927 75.886 37.919 75.906 37.196 C 75.76 36.88 74.242 0.056 37.931 0 C 17.145 0 0.157 16.608 0 37.044 L 0 37.107 L 0 37.108 Z M 52.736 37.102 C 52.756 33.295 65.282 31.519 69.108 36.059 L 45.529 55.933 C 52.757 37.437 52.736 38.315 52.736 37.102 L 52.736 37.102 Z M 37.93 33.343 C 42.515 33.343 45.86 35.277 46.316 36.77 L 38.3 57.006 C 38.083 56.998 37.87 56.996 37.654 57.004 L 29.617 36.724 C 30.113 35.259 33.311 33.343 37.931 33.343 L 37.93 33.343 Z M 14.71 33.343 C 19.645 33.343 23.188 35.589 23.188 37.108 C 23.188 38.226 23.665 38.73 30.423 55.933 L 6.819 36.04 C 7.905 34.726 10.786 33.343 14.71 33.343 L 14.71 33.343 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "100%",
      height: "100%",
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
    width: 51.329,
    height: 65,
    viewBox: "0 0 51.329 65",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 35.847 28.915 C 44.951 32.858 51.329 41.929 51.329 52.475 C 51.329 56.052 49.056 59.154 44.909 61.298 C 40.241 63.714 32.962 65 25.664 65 C 18.37 65 11.09 63.711 6.42 61.298 C 2.273 59.153 0 56.051 0 52.475 C 0 41.926 6.377 32.858 15.482 28.915 C 11.78 25.935 9.413 21.368 9.413 16.252 C 9.413 7.282 16.695 0 25.662 0 C 34.629 0 41.911 7.282 41.911 16.252 C 41.911 21.368 39.54 25.936 35.841 28.915 L 35.847 28.915 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "100%",
      height: "100%",
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
    width: 72.223,
    height: 65,
    viewBox: "0 0 72.223 65",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 72.223 21.667 L 72.223 55.069 C 72.223 60.553 67.776 65 62.292 65 L 9.931 65 C 4.447 65 0 60.553 0 55.069 L 0 21.667 L 72.223 21.667 Z M 10.833 9.931 C 10.833 13.422 13.661 16.25 17.152 16.25 C 20.643 16.25 23.473 13.422 23.473 9.931 L 23.473 8.125 L 48.75 8.125 L 48.75 9.931 C 48.75 13.422 51.578 16.25 55.069 16.25 C 58.56 16.25 61.389 13.422 61.389 9.931 L 61.389 8.125 L 62.292 8.125 C 67.776 8.125 72.223 12.572 72.223 18.056 L 72.223 19.861 L 0 19.861 L 0 18.056 C 0 12.572 4.447 8.125 9.931 8.125 L 10.833 8.125 L 10.833 9.931 Z M 17.152 0 C 19.646 0 21.667 2.021 21.667 4.514 L 21.667 9.931 C 21.667 12.424 19.646 14.444 17.152 14.444 C 14.659 14.444 12.639 12.424 12.639 9.931 L 12.639 4.514 C 12.639 2.021 14.659 0 17.152 0 Z M 55.069 0 C 57.563 0 59.583 2.021 59.583 4.514 L 59.583 9.931 C 59.583 12.424 57.563 14.444 55.069 14.444 C 52.576 14.444 50.556 12.424 50.556 9.931 L 50.556 4.514 C 50.556 2.021 52.576 0 55.069 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "100%",
      height: "100%",
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
    width: 99.500,
    height: 99.501,
    viewBox: "0 0 99.500 99.501",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 87.079 55.555 C 86.898 55.821 86.643 56.028 86.345 56.149 C 86.047 56.269 85.72 56.3 85.404 56.235 C 83.547 55.884 81.653 55.767 79.766 55.887 C 74.73 46.84 68.652 38.413 61.657 30.779 C 63.581 30.381 70.745 29.253 74.825 33.333 C 74.925 33.423 75.009 33.529 75.073 33.648 L 87.146 53.747 C 87.311 54.022 87.392 54.34 87.38 54.66 C 87.369 54.981 87.264 55.292 87.079 55.555 Z M 30.862 61.989 C 30.82 62.02 30.786 62.06 30.762 62.105 C 30.613 62.354 27.164 68.308 34.029 75.19 C 34.338 75.494 34.757 75.662 35.19 75.654 C 35.411 75.656 35.63 75.617 35.837 75.538 C 36.139 75.408 36.397 75.193 36.579 74.919 C 36.762 74.646 36.861 74.325 36.865 73.996 C 37.038 72.192 37.871 70.515 39.203 69.286 C 36.534 67.18 33.747 64.759 30.862 61.989 Z M 19.9 0 C 18.14 0 16.453 0.698 15.209 1.942 C 13.965 3.186 13.266 4.874 13.267 6.633 C 13.263 7.952 12.737 9.215 11.805 10.147 C 10.873 11.079 9.61 11.605 8.292 11.608 L 1.658 11.608 C 1.066 11.608 0.518 11.925 0.222 12.438 C -0.074 12.951 -0.074 13.583 0.222 14.096 C 0.518 14.609 1.066 14.925 1.658 14.925 L 8.292 14.925 C 10.49 14.924 12.599 14.05 14.154 12.496 C 15.709 10.941 16.583 8.832 16.583 6.633 C 16.583 5.448 17.216 4.354 18.242 3.761 C 19.268 3.168 20.532 3.168 21.558 3.761 C 22.585 4.353 23.217 5.448 23.217 6.633 L 23.217 19.635 C 23.298 19.605 23.381 19.583 23.465 19.568 C 23.897 19.486 24.991 19.287 26.533 19.071 L 26.533 6.634 C 26.534 4.874 25.835 3.187 24.591 1.943 C 23.347 0.699 21.66 0 19.9 0 Z M 99.497 73.807 C 99.453 74.583 99.453 74.583 97.257 76.324 C 94.603 78.428 89.081 82.805 85.944 85.944 C 82.806 89.083 78.428 94.603 76.325 97.258 C 74.584 99.454 74.584 99.454 73.808 99.5 C 73.776 99.501 73.744 99.501 73.713 99.501 C 73.272 99.502 72.85 99.326 72.539 99.015 C 68.083 94.559 68.012 87.051 71.779 80.493 C 65.537 80.219 50.745 77.221 31.316 57.791 C 29.195 55.684 27.366 53.304 25.876 50.713 C 28.422 52.897 31.553 54.286 34.881 54.708 C 35.345 54.753 35.797 54.776 36.237 54.776 C 39.838 54.73 43.295 53.358 45.947 50.923 C 46.351 50.501 46.504 49.898 46.349 49.335 C 46.194 48.772 45.754 48.332 45.19 48.176 C 44.627 48.021 44.024 48.174 43.602 48.578 C 41.309 50.63 38.275 51.652 35.208 51.407 C 30.896 50.981 26.636 47.897 22.523 42.289 C 21.078 36.242 21.195 29.926 22.865 23.938 C 22.955 23.656 23.119 23.404 23.339 23.208 C 23.56 23.011 23.829 22.877 24.118 22.819 C 24.974 22.647 45.206 18.731 54.774 28.299 C 57.176 30.701 77.859 51.831 82.082 70.948 C 88.231 68.054 94.914 68.441 99.014 72.538 C 99.348 72.873 99.525 73.334 99.497 73.807 Z M 45.726 31.316 C 44.882 30.472 43.738 29.999 42.544 29.999 C 41.351 29.999 40.207 30.474 39.363 31.317 C 38.52 32.161 38.046 33.306 38.046 34.499 C 38.046 35.692 38.52 36.836 39.363 37.68 C 40.207 38.524 41.351 38.998 42.544 38.999 C 43.738 38.999 44.882 38.525 45.726 37.682 C 46.568 36.837 47.041 35.692 47.041 34.499 C 47.041 33.306 46.568 32.161 45.726 31.316 Z M 42.543 33.314 C 41.978 33.314 41.491 33.714 41.381 34.268 C 41.27 34.823 41.567 35.378 42.09 35.594 C 42.612 35.811 43.215 35.627 43.529 35.157 C 43.842 34.687 43.781 34.061 43.381 33.661 C 43.158 33.439 42.857 33.314 42.543 33.314 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "100%",
      height: "100%",
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
    width: 59.192,
    height: 59.192,
    viewBox: "0 0 59.192 59.192",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.596 0 C 21.747 0 14.219 3.118 8.668 8.668 C 3.118 14.219 0 21.747 0 29.596 C 0 37.445 3.118 44.973 8.668 50.524 C 14.219 56.074 21.747 59.192 29.596 59.192 C 37.445 59.192 44.973 56.074 50.524 50.524 C 56.074 44.973 59.192 37.445 59.192 29.596 C 59.183 21.749 56.062 14.227 50.514 8.678 C 44.965 3.13 37.443 0.009 29.596 0 Z M 29.596 56.673 C 22.415 56.673 15.527 53.82 10.449 48.743 C 5.371 43.665 2.519 36.777 2.519 29.596 C 2.519 22.415 5.372 15.527 10.449 10.449 C 15.527 5.371 22.415 2.519 29.596 2.519 C 36.777 2.519 43.665 5.372 48.743 10.449 C 53.821 15.527 56.673 22.415 56.673 29.596 C 56.665 36.775 53.81 43.657 48.734 48.734 C 43.658 53.81 36.775 56.665 29.596 56.673 Z M 36.496 50.861 C 36.496 51.195 36.364 51.515 36.128 51.751 C 35.892 51.987 35.571 52.12 35.237 52.12 L 27.747 52.12 C 25.807 52.12 23.962 51.279 22.688 49.816 C 21.415 48.352 20.838 46.408 21.106 44.486 L 23.629 26.441 L 21.437 26.441 C 20.987 26.441 20.571 26.201 20.346 25.811 C 20.121 25.422 20.121 24.942 20.346 24.552 C 20.571 24.162 20.987 23.922 21.437 23.922 L 28.979 23.922 C 30.92 23.922 32.765 24.763 34.038 26.227 C 35.312 27.691 35.889 29.634 35.62 31.556 L 33.098 49.601 L 35.237 49.601 C 35.571 49.601 35.892 49.734 36.128 49.97 C 36.364 50.206 36.497 50.527 36.497 50.861 L 36.496 50.861 Z M 23.076 13.385 C 23.076 11.711 23.741 10.105 24.925 8.921 C 26.109 7.737 27.715 7.072 29.389 7.072 C 31.063 7.072 32.669 7.737 33.853 8.921 C 35.037 10.105 35.702 11.711 35.702 13.385 C 35.702 15.059 35.037 16.665 33.853 17.849 C 32.669 19.033 31.063 19.698 29.389 19.698 C 27.715 19.696 26.111 19.03 24.927 17.847 C 23.744 16.663 23.078 15.058 23.076 13.385 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "100%",
      height: "100%",
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
    width: 55.179,
    height: 44,
    viewBox: "0 0 55.179 44",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48.131 5.561 L 39.896 5.561 L 38.54 3.301 C 37.311 1.263 35.074 0 32.693 0 L 22.48 0 C 20.099 0 17.863 1.263 16.634 3.301 L 15.277 5.561 L 7.042 5.561 C 3.157 5.561 0 8.718 0 12.604 L 0 36.958 C 0 40.843 3.157 44 7.042 44 L 48.137 44 C 52.023 44 55.179 40.843 55.179 36.958 L 55.179 12.604 C 55.179 8.718 52.023 5.561 48.137 5.561 L 48.131 5.561 Z M 8.836 11.811 L 12.343 11.811 C 13.296 11.811 14.062 12.577 14.062 13.53 C 14.062 14.484 13.296 15.25 12.343 15.25 L 8.836 15.25 C 7.883 15.25 7.117 14.477 7.117 13.53 C 7.117 12.583 7.883 11.811 8.836 11.811 Z M 27.636 35.557 C 21.315 35.557 16.177 30.415 16.177 24.106 C 16.177 17.795 21.319 12.647 27.636 12.647 C 33.956 12.647 39.094 17.789 39.094 24.106 C 39.094 30.426 33.953 35.557 27.636 35.557 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "100%",
      height: "100%",
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
    width: 71.291,
    height: 71.753,
    viewBox: "0 0 71.291 71.753",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.86 1.287 C 5.289 0.429 6.441 0.253 7.123 0.935 L 68.049 61.862 C 69.18 62.993 69.766 64.476 69.766 65.959 C 69.766 67.441 69.18 68.924 68.049 70.055 C 65.786 72.318 62.118 72.318 59.856 70.055 L 36.308 46.509 L 33.558 49.26 C 33.109 49.708 32.387 49.688 31.939 49.24 L 8.899 26.199 C 5.602 22.902 3.573 18.766 2.831 14.396 C 2.129 10.026 2.772 5.442 4.86 1.287 Z M 20.466 42.634 C 21.013 42.087 21.901 42.086 22.447 42.634 L 28.659 48.847 C 29.206 49.395 29.206 50.281 28.659 50.828 L 9.809 69.679 C 8.677 70.81 7.195 71.395 5.712 71.395 C 4.257 71.395 2.801 70.831 1.678 69.74 C -0.643 67.486 -0.507 63.608 1.78 61.32 L 20.466 42.634 Z M 52.734 0.961 C 53.935 -0.24 55.794 -0.327 56.888 0.766 C 57.982 1.86 57.895 3.721 56.694 4.922 L 45.831 15.784 C 44.962 16.654 44.899 18 45.691 18.792 L 45.733 18.834 C 46.508 19.609 47.819 19.567 48.694 18.738 L 60.155 7.874 C 61.253 6.833 62.901 6.781 63.875 7.755 C 64.87 8.749 64.791 10.441 63.698 11.534 L 52.64 22.593 C 51.77 23.462 51.707 24.808 52.499 25.6 C 53.291 26.392 54.638 26.329 55.508 25.46 L 66.37 14.597 C 67.571 13.397 69.431 13.31 70.525 14.403 C 71.618 15.497 71.531 17.357 70.33 18.558 L 56.158 32.73 C 52.194 36.694 46.055 36.981 42.446 33.372 L 37.919 28.846 C 34.31 25.237 34.598 19.098 38.562 15.134 L 52.734 0.961 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "100%",
      height: "100%",
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
    width: 77.608,
    height: 54.128,
    viewBox: "0 0 77.608 54.128",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 56.141 0 C 56.35 0 56.618 0.01 56.735 0.022 C 56.851 0.035 57.048 0.061 57.177 0.084 C 57.303 0.103 57.529 0.152 57.674 0.19 C 57.823 0.226 58.055 0.298 58.194 0.343 C 58.332 0.391 58.549 0.472 58.671 0.526 C 58.797 0.581 58.987 0.668 59.097 0.727 C 59.207 0.781 59.407 0.891 59.539 0.965 C 59.672 1.042 59.894 1.182 60.036 1.278 C 60.178 1.372 60.418 1.543 60.563 1.652 C 60.711 1.762 60.959 1.956 61.117 2.085 C 61.276 2.211 61.582 2.463 61.798 2.644 C 62.014 2.824 62.34 3.105 62.528 3.263 C 62.712 3.424 63.095 3.754 63.379 3.999 C 63.663 4.244 64.009 4.534 64.145 4.644 C 64.28 4.753 64.557 4.97 64.757 5.118 C 64.957 5.27 65.326 5.528 65.577 5.696 C 65.826 5.864 66.168 6.08 66.332 6.18 C 66.5 6.28 66.733 6.412 66.849 6.477 C 66.968 6.541 67.236 6.68 67.443 6.783 C 67.652 6.886 67.978 7.039 68.165 7.116 C 68.356 7.197 68.669 7.323 68.863 7.394 C 69.056 7.468 69.401 7.587 69.627 7.661 C 69.853 7.735 70.176 7.835 70.347 7.884 C 70.515 7.932 70.773 8.001 70.921 8.036 C 71.07 8.072 71.457 8.165 71.782 8.239 C 72.108 8.313 72.535 8.414 72.732 8.462 C 72.925 8.51 73.215 8.588 73.373 8.633 C 73.531 8.678 73.745 8.749 73.848 8.784 C 73.951 8.823 74.12 8.888 74.223 8.93 C 74.326 8.972 74.494 9.052 74.6 9.104 C 74.706 9.155 74.877 9.252 74.984 9.313 C 75.09 9.378 75.249 9.481 75.339 9.546 C 75.429 9.61 75.587 9.737 75.694 9.827 C 75.8 9.917 75.961 10.072 76.055 10.172 C 76.149 10.272 76.297 10.446 76.381 10.563 C 76.468 10.679 76.581 10.843 76.636 10.927 C 76.688 11.011 76.781 11.173 76.839 11.282 C 76.897 11.392 76.998 11.605 77.059 11.75 C 77.12 11.898 77.211 12.138 77.259 12.286 C 77.307 12.435 77.369 12.641 77.395 12.744 C 77.421 12.851 77.466 13.051 77.491 13.192 C 77.517 13.334 77.553 13.577 77.573 13.729 C 77.598 13.932 77.604 14.154 77.608 14.551 C 77.608 14.851 77.598 15.222 77.585 15.374 C 77.572 15.526 77.54 15.819 77.514 16.025 C 77.488 16.232 77.446 16.529 77.417 16.688 C 77.391 16.846 77.343 17.104 77.311 17.262 C 77.279 17.42 77.201 17.746 77.14 17.991 C 77.079 18.233 76.975 18.601 76.91 18.808 C 76.846 19.014 76.733 19.349 76.662 19.553 C 76.591 19.756 76.479 20.056 76.417 20.221 C 76.356 20.385 76.262 20.611 76.213 20.728 C 76.165 20.844 76.058 21.086 75.978 21.264 C 75.897 21.441 75.727 21.796 75.601 22.048 C 75.472 22.3 75.29 22.651 75.194 22.822 C 75.097 22.997 74.932 23.287 74.825 23.471 C 74.719 23.655 74.552 23.929 74.458 24.084 C 74.362 24.239 74.187 24.506 74.074 24.681 C 73.958 24.855 73.777 25.116 73.67 25.265 C 73.564 25.413 73.361 25.684 73.219 25.868 C 73.077 26.052 72.855 26.33 72.729 26.481 C 72.603 26.633 72.386 26.884 72.25 27.036 C 72.115 27.188 71.847 27.469 71.657 27.659 C 71.466 27.849 71.196 28.105 71.054 28.228 C 70.912 28.35 70.679 28.541 70.533 28.65 C 70.391 28.76 70.143 28.938 69.989 29.044 C 69.831 29.15 69.589 29.305 69.447 29.389 C 69.305 29.473 69.095 29.592 68.982 29.65 C 68.869 29.708 68.668 29.805 68.539 29.863 C 68.41 29.921 68.2 30.003 68.074 30.048 C 67.949 30.09 67.752 30.15 67.636 30.183 C 67.52 30.215 67.356 30.25 67.272 30.267 C 67.188 30.283 67.013 30.309 66.887 30.325 C 66.761 30.341 66.523 30.357 66.362 30.363 C 66.197 30.37 65.948 30.367 65.806 30.357 C 65.664 30.348 65.545 30.342 65.541 30.345 C 65.539 30.353 65.555 30.441 65.574 30.548 C 65.593 30.658 65.623 30.861 65.642 30.996 C 65.658 31.132 65.681 31.396 65.694 31.58 C 65.707 31.787 65.713 32.106 65.703 32.413 C 65.697 32.687 65.678 33.071 65.661 33.265 C 65.645 33.458 65.606 33.807 65.574 34.039 C 65.541 34.271 65.481 34.636 65.439 34.853 C 65.397 35.069 65.306 35.488 65.239 35.785 C 65.171 36.082 65.055 36.547 64.984 36.821 C 64.909 37.096 64.793 37.502 64.725 37.731 C 64.657 37.957 64.528 38.36 64.438 38.628 C 64.347 38.896 64.212 39.274 64.138 39.471 C 64.064 39.668 63.941 39.974 63.866 40.154 C 63.792 40.335 63.653 40.652 63.56 40.861 C 63.466 41.071 63.308 41.406 63.208 41.606 C 63.108 41.81 62.937 42.139 62.827 42.339 C 62.718 42.539 62.547 42.84 62.45 43.001 C 62.354 43.162 62.134 43.508 61.963 43.766 C 61.792 44.024 61.566 44.353 61.463 44.495 C 61.36 44.637 61.201 44.85 61.111 44.963 C 61.02 45.079 60.843 45.305 60.711 45.47 C 60.579 45.634 60.347 45.912 60.192 46.093 C 60.037 46.27 59.778 46.563 59.616 46.744 C 59.455 46.925 59.116 47.274 58.865 47.525 C 58.613 47.774 58.245 48.122 58.048 48.3 C 57.851 48.477 57.525 48.752 57.325 48.913 C 57.126 49.074 56.829 49.3 56.664 49.419 C 56.5 49.538 56.235 49.723 56.071 49.829 C 55.906 49.936 55.667 50.091 55.534 50.168 C 55.402 50.249 55.183 50.375 55.047 50.452 C 54.912 50.53 54.605 50.687 54.366 50.807 C 54.131 50.926 53.789 51.088 53.612 51.165 C 53.434 51.242 53.091 51.388 52.856 51.481 C 52.62 51.575 52.256 51.717 52.053 51.791 C 51.847 51.868 51.398 52.024 51.056 52.137 C 50.714 52.25 50.214 52.408 49.946 52.488 C 49.678 52.569 49.264 52.685 49.026 52.75 C 48.79 52.815 48.342 52.93 48.029 53.008 C 47.719 53.085 47.248 53.196 46.987 53.257 C 46.722 53.315 46.247 53.415 45.934 53.479 C 45.618 53.544 45.157 53.628 44.908 53.67 C 44.66 53.712 44.25 53.776 43.998 53.812 C 43.747 53.847 43.378 53.895 43.185 53.918 C 42.991 53.941 42.64 53.976 42.41 53.995 C 42.178 54.014 41.781 54.047 41.53 54.063 C 41.278 54.08 40.771 54.102 40.409 54.111 C 40.045 54.121 39.506 54.128 39.212 54.128 C 38.919 54.125 38.592 54.121 38.492 54.118 L 38.495 54.124 C 38.395 54.121 38.089 54.112 37.815 54.099 C 37.54 54.089 37.063 54.059 36.753 54.04 C 36.443 54.021 35.946 53.979 35.653 53.953 C 35.359 53.927 34.962 53.889 34.772 53.866 C 34.581 53.847 34.249 53.808 34.032 53.779 C 33.816 53.753 33.439 53.702 33.191 53.663 C 32.942 53.628 32.532 53.56 32.281 53.518 C 32.029 53.476 31.593 53.395 31.313 53.337 C 31.032 53.279 30.703 53.211 30.574 53.186 C 30.448 53.16 30.151 53.088 29.915 53.03 C 29.68 52.972 29.367 52.892 29.215 52.85 C 29.067 52.808 28.763 52.717 28.54 52.649 C 28.318 52.582 27.927 52.45 27.669 52.359 C 27.411 52.269 26.959 52.095 26.665 51.979 C 26.372 51.859 25.936 51.675 25.698 51.571 C 25.462 51.465 25.072 51.285 24.836 51.172 C 24.601 51.056 24.216 50.862 23.984 50.736 C 23.751 50.61 23.47 50.458 23.361 50.394 C 23.251 50.329 22.999 50.184 22.806 50.068 C 22.612 49.952 22.283 49.748 22.076 49.619 C 21.87 49.487 21.587 49.3 21.445 49.203 C 21.303 49.106 21.112 48.975 21.022 48.913 C 20.931 48.852 20.776 48.738 20.676 48.667 C 20.576 48.596 20.37 48.441 20.218 48.325 C 20.066 48.209 19.827 48.025 19.692 47.912 C 19.556 47.802 19.359 47.641 19.259 47.558 C 19.162 47.477 18.969 47.306 18.833 47.187 C 18.698 47.064 18.408 46.799 18.192 46.599 C 17.975 46.395 17.591 46.022 17.339 45.767 C 17.084 45.508 16.771 45.182 16.639 45.04 C 16.507 44.895 16.284 44.646 16.142 44.481 C 15.997 44.32 15.794 44.085 15.691 43.956 C 15.584 43.83 15.422 43.633 15.328 43.517 C 15.235 43.4 15.022 43.12 14.851 42.895 C 14.68 42.669 14.471 42.378 14.38 42.249 C 14.29 42.12 14.125 41.871 14.012 41.693 C 13.899 41.516 13.729 41.238 13.635 41.077 C 13.541 40.913 13.383 40.615 13.282 40.412 C 13.182 40.209 13.044 39.909 12.973 39.741 C 12.902 39.574 12.805 39.319 12.75 39.174 C 12.699 39.029 12.608 38.751 12.55 38.561 C 12.492 38.37 12.408 38.063 12.36 37.879 C 12.314 37.695 12.244 37.392 12.208 37.208 C 12.17 37.024 12.105 36.666 12.063 36.414 C 12.021 36.162 11.97 35.817 11.95 35.649 C 11.928 35.482 11.895 35.162 11.872 34.939 C 11.853 34.717 11.821 34.355 11.805 34.136 C 11.789 33.913 11.766 33.551 11.756 33.332 C 11.746 33.109 11.738 32.606 11.738 32.213 C 11.738 31.819 11.746 31.339 11.756 31.151 C 11.769 30.961 11.786 30.715 11.795 30.605 C 11.805 30.496 11.815 30.389 11.815 30.373 C 11.815 30.347 11.779 30.341 11.579 30.328 C 11.45 30.322 11.195 30.302 11.014 30.286 C 10.833 30.27 10.553 30.238 10.392 30.209 C 10.231 30.183 9.965 30.131 9.804 30.096 C 9.639 30.06 9.375 29.993 9.21 29.944 C 9.046 29.899 8.781 29.812 8.616 29.754 C 8.452 29.696 8.194 29.596 8.042 29.531 C 7.891 29.467 7.633 29.347 7.468 29.263 C 7.303 29.182 7.067 29.056 6.945 28.985 C 6.819 28.914 6.606 28.783 6.467 28.692 C 6.328 28.602 6.086 28.431 5.928 28.312 C 5.77 28.192 5.516 27.989 5.361 27.856 C 5.209 27.724 4.963 27.498 4.815 27.35 C 4.666 27.204 4.457 26.978 4.351 26.853 C 4.241 26.727 4.053 26.494 3.934 26.333 C 3.815 26.175 3.635 25.92 3.534 25.769 C 3.434 25.617 3.273 25.352 3.176 25.185 C 3.079 25.017 2.889 24.655 2.753 24.381 C 2.618 24.107 2.447 23.742 2.369 23.567 C 2.295 23.393 2.175 23.112 2.108 22.944 C 2.04 22.777 1.94 22.525 1.888 22.39 C 1.836 22.254 1.739 21.993 1.678 21.815 C 1.613 21.635 1.53 21.386 1.488 21.26 C 1.446 21.134 1.346 20.814 1.262 20.55 C 1.178 20.285 1.043 19.83 0.959 19.533 C 0.875 19.24 0.752 18.801 0.688 18.559 C 0.623 18.317 0.526 17.907 0.468 17.649 C 0.41 17.391 0.333 17.016 0.297 16.819 C 0.255 16.626 0.204 16.312 0.178 16.132 C 0.152 15.948 0.117 15.674 0.101 15.522 C 0.085 15.368 0.058 15.07 0.042 14.86 C 0.029 14.651 0.01 14.315 0.003 14.115 C -0.003 13.915 0 13.56 0.013 13.328 C 0.026 13.096 0.052 12.78 0.072 12.628 C 0.091 12.476 0.129 12.243 0.158 12.114 C 0.184 11.982 0.233 11.785 0.265 11.676 C 0.297 11.566 0.352 11.392 0.391 11.292 C 0.43 11.192 0.514 10.995 0.581 10.859 C 0.649 10.724 0.762 10.524 0.833 10.414 C 0.904 10.308 1.036 10.133 1.123 10.026 C 1.21 9.92 1.362 9.759 1.459 9.669 C 1.553 9.579 1.711 9.442 1.808 9.371 C 1.901 9.3 2.049 9.197 2.133 9.146 C 2.217 9.094 2.372 9.007 2.482 8.952 C 2.588 8.901 2.746 8.827 2.833 8.791 C 2.92 8.756 3.095 8.694 3.221 8.658 C 3.35 8.619 3.534 8.574 3.634 8.552 C 3.734 8.532 3.928 8.497 4.067 8.478 C 4.273 8.449 4.435 8.445 5.051 8.445 C 5.564 8.445 5.922 8.458 6.219 8.48 C 6.458 8.497 6.913 8.52 7.236 8.526 C 7.632 8.533 7.906 8.529 8.077 8.513 C 8.219 8.5 8.462 8.468 8.614 8.442 C 8.768 8.417 8.991 8.371 9.114 8.342 C 9.233 8.31 9.42 8.255 9.524 8.22 C 9.63 8.181 9.804 8.113 9.91 8.064 C 10.017 8.019 10.194 7.929 10.304 7.871 C 10.41 7.81 10.588 7.704 10.692 7.636 C 10.798 7.568 10.995 7.426 11.134 7.322 C 11.27 7.222 11.511 7.025 11.669 6.89 C 11.837 6.748 12.396 6.206 13.019 5.58 C 13.606 4.993 14.241 4.373 14.438 4.198 C 14.631 4.024 14.936 3.763 15.107 3.618 C 15.281 3.473 15.554 3.253 15.719 3.134 C 15.88 3.011 16.151 2.821 16.323 2.708 C 16.49 2.595 16.758 2.424 16.916 2.33 C 17.074 2.237 17.336 2.085 17.5 1.998 C 17.665 1.911 17.943 1.772 18.117 1.688 C 18.295 1.608 18.585 1.478 18.769 1.407 C 18.95 1.333 19.26 1.224 19.453 1.159 C 19.647 1.095 19.908 1.017 20.028 0.984 C 20.15 0.952 20.376 0.9 20.534 0.868 C 20.693 0.836 20.95 0.794 21.112 0.771 C 21.273 0.752 21.573 0.724 21.78 0.714 C 22.057 0.698 22.248 0.698 22.512 0.714 C 22.709 0.727 22.989 0.752 23.138 0.774 C 23.286 0.797 23.526 0.839 23.674 0.871 C 23.823 0.903 24.094 0.982 24.278 1.043 C 24.461 1.104 24.713 1.197 24.832 1.252 C 24.955 1.307 25.152 1.404 25.275 1.469 C 25.397 1.533 25.594 1.646 25.717 1.724 C 25.84 1.801 26.011 1.917 26.101 1.981 C 26.188 2.049 26.339 2.169 26.433 2.246 C 26.526 2.327 26.73 2.514 26.882 2.669 C 27.034 2.824 27.269 3.072 27.405 3.224 C 27.54 3.375 27.728 3.595 27.824 3.711 C 27.921 3.827 28.095 4.054 28.211 4.212 C 28.331 4.37 28.486 4.59 28.56 4.699 C 28.634 4.809 28.731 4.964 28.776 5.038 C 28.821 5.115 28.869 5.176 28.879 5.177 C 28.892 5.177 28.909 5.17 28.918 5.16 C 28.929 5.15 29.058 5.076 29.205 4.996 C 29.354 4.915 29.673 4.75 29.915 4.631 C 30.157 4.512 30.538 4.338 30.757 4.244 C 30.98 4.151 31.331 4.008 31.541 3.928 C 31.751 3.85 32.055 3.74 32.213 3.686 C 32.371 3.631 32.658 3.54 32.855 3.482 C 33.048 3.424 33.368 3.337 33.565 3.289 C 33.758 3.241 34.081 3.166 34.278 3.124 C 34.474 3.082 34.817 3.018 35.033 2.982 C 35.253 2.947 35.608 2.895 35.821 2.869 C 36.037 2.843 36.42 2.805 36.672 2.782 C 36.924 2.76 37.425 2.734 37.78 2.721 C 38.283 2.701 38.574 2.701 39.093 2.721 C 39.458 2.734 39.951 2.76 40.19 2.782 C 40.425 2.805 40.758 2.837 40.929 2.859 C 41.097 2.879 41.403 2.924 41.61 2.956 C 41.813 2.988 42.171 3.053 42.404 3.099 C 42.636 3.147 42.969 3.218 43.143 3.263 C 43.317 3.305 43.627 3.388 43.83 3.446 C 44.037 3.504 44.427 3.628 44.701 3.715 C 44.975 3.805 45.353 3.937 45.543 4.008 C 45.734 4.079 46.018 4.192 46.176 4.257 C 46.334 4.321 46.592 4.434 46.75 4.505 C 46.908 4.576 47.147 4.69 47.28 4.751 C 47.412 4.815 47.67 4.944 47.854 5.041 C 48.038 5.138 48.19 5.212 48.197 5.209 C 48.2 5.206 48.28 5.061 48.377 4.89 C 48.474 4.719 48.622 4.464 48.712 4.328 C 48.803 4.193 48.939 3.999 49.013 3.896 C 49.09 3.795 49.249 3.605 49.362 3.473 C 49.478 3.34 49.716 3.092 49.897 2.918 C 50.074 2.744 50.346 2.498 50.497 2.369 C 50.649 2.243 50.914 2.033 51.088 1.904 C 51.259 1.775 51.514 1.595 51.653 1.501 C 51.791 1.407 52.04 1.249 52.201 1.152 C 52.363 1.056 52.631 0.907 52.795 0.826 C 52.96 0.742 53.189 0.636 53.305 0.588 C 53.421 0.539 53.666 0.449 53.85 0.388 C 54.034 0.326 54.312 0.246 54.47 0.207 C 54.625 0.168 54.883 0.117 55.044 0.091 C 55.205 0.065 55.431 0.032 55.547 0.022 C 55.663 0.01 55.931 0 56.141 0 Z M 37.654 4.638 C 37.395 4.651 37.027 4.673 36.84 4.689 C 36.65 4.706 36.379 4.731 36.237 4.747 C 36.095 4.763 35.83 4.798 35.653 4.824 C 35.472 4.85 35.169 4.902 34.972 4.94 C 34.778 4.976 34.472 5.044 34.291 5.086 C 34.114 5.128 33.823 5.203 33.649 5.251 C 33.474 5.299 33.116 5.409 32.848 5.499 C 32.583 5.589 32.164 5.741 31.919 5.841 C 31.674 5.938 31.355 6.074 31.206 6.142 C 31.058 6.209 30.78 6.342 30.589 6.438 C 30.399 6.535 30.099 6.696 29.928 6.793 C 29.757 6.89 29.499 7.041 29.357 7.132 C 29.215 7.222 28.995 7.365 28.869 7.455 C 28.744 7.542 28.543 7.687 28.427 7.777 C 28.311 7.868 28.095 8.048 27.947 8.181 C 27.798 8.313 27.563 8.536 27.424 8.678 C 27.285 8.82 27.088 9.036 26.985 9.162 C 26.881 9.285 26.723 9.491 26.633 9.617 C 26.543 9.743 26.387 9.975 26.287 10.133 C 26.187 10.291 26.027 10.559 25.93 10.727 C 25.833 10.894 25.671 11.179 25.574 11.359 C 25.478 11.54 25.307 11.866 25.198 12.089 C 25.088 12.312 24.945 12.602 24.887 12.737 C 24.826 12.873 24.729 13.102 24.674 13.244 C 24.616 13.386 24.52 13.654 24.458 13.838 C 24.397 14.022 24.316 14.293 24.278 14.441 C 24.242 14.59 24.194 14.809 24.171 14.929 C 24.142 15.08 24.125 15.283 24.113 15.58 C 24.1 15.942 24.09 16.029 24.058 16.126 C 24.035 16.187 23.991 16.28 23.958 16.332 C 23.926 16.384 23.851 16.468 23.793 16.52 C 23.735 16.571 23.635 16.639 23.571 16.671 C 23.506 16.703 23.406 16.736 23.351 16.749 C 23.296 16.762 23.206 16.771 23.155 16.771 C 23.103 16.771 23.015 16.762 22.957 16.749 C 22.902 16.736 22.799 16.7 22.732 16.668 C 22.648 16.629 22.564 16.568 22.48 16.484 C 22.396 16.401 22.335 16.316 22.296 16.232 C 22.264 16.165 22.225 16.052 22.212 15.987 C 22.196 15.9 22.193 15.751 22.199 15.471 C 22.206 15.255 22.225 14.98 22.241 14.864 C 22.258 14.748 22.293 14.545 22.319 14.416 C 22.344 14.284 22.393 14.076 22.425 13.957 C 22.457 13.834 22.519 13.621 22.561 13.479 C 22.603 13.338 22.702 13.054 22.78 12.848 C 22.857 12.641 22.941 12.421 22.967 12.356 C 22.993 12.292 23.067 12.124 23.128 11.982 C 23.19 11.84 23.318 11.566 23.415 11.372 C 23.509 11.178 23.655 10.892 23.736 10.74 C 23.816 10.589 23.948 10.346 24.026 10.204 C 24.106 10.062 24.249 9.811 24.342 9.649 C 24.436 9.485 24.606 9.21 24.719 9.036 C 24.832 8.862 25.006 8.604 25.11 8.462 C 25.213 8.32 25.365 8.122 25.443 8.022 C 25.523 7.922 25.685 7.735 25.804 7.606 C 25.923 7.478 26.019 7.362 26.02 7.352 C 26.02 7.342 25.729 7.058 25.371 6.723 C 25.023 6.381 24.71 6.086 24.681 6.061 L 24.629 6.016 L 24.51 6.177 C 24.446 6.264 24.339 6.422 24.278 6.528 C 24.216 6.635 24.097 6.854 24.013 7.016 C 23.929 7.18 23.803 7.451 23.729 7.619 C 23.655 7.787 23.519 8.12 23.429 8.358 C 23.335 8.594 23.174 9.023 23.071 9.307 C 22.964 9.591 22.802 10.042 22.705 10.313 C 22.612 10.581 22.47 10.988 22.393 11.214 C 22.315 11.44 22.189 11.824 22.109 12.066 C 22.028 12.308 21.903 12.705 21.828 12.947 C 21.754 13.189 21.522 13.996 21.309 14.738 C 21.096 15.48 20.844 16.355 20.743 16.681 C 20.643 17.007 20.524 17.398 20.476 17.543 C 20.427 17.691 20.347 17.923 20.302 18.059 C 20.254 18.194 20.16 18.456 20.092 18.64 C 20.024 18.82 19.892 19.162 19.798 19.395 C 19.705 19.627 19.588 19.914 19.536 20.03 C 19.488 20.146 19.385 20.376 19.311 20.537 C 19.237 20.702 19.094 20.999 18.994 21.199 C 18.894 21.399 18.755 21.667 18.688 21.793 C 18.62 21.919 18.481 22.161 18.381 22.328 C 18.281 22.496 18.13 22.738 18.046 22.864 C 17.962 22.99 17.82 23.193 17.73 23.313 C 17.639 23.435 17.494 23.622 17.404 23.735 C 17.313 23.845 17.143 24.045 17.027 24.178 C 16.907 24.31 16.726 24.501 16.622 24.601 C 16.519 24.701 16.358 24.845 16.261 24.926 C 16.167 25.006 15.993 25.142 15.877 25.232 C 15.761 25.32 15.555 25.465 15.419 25.556 C 15.284 25.646 15.058 25.781 14.919 25.855 C 14.78 25.933 14.59 26.03 14.496 26.075 C 14.403 26.12 14.212 26.201 14.074 26.259 C 13.935 26.314 13.699 26.401 13.554 26.446 C 13.406 26.495 13.15 26.562 12.983 26.601 C 12.815 26.636 12.58 26.681 12.46 26.697 C 12.338 26.713 12.125 26.73 11.983 26.739 C 11.838 26.746 11.605 26.743 11.453 26.73 C 11.305 26.718 11.079 26.691 10.956 26.672 C 10.83 26.649 10.617 26.604 10.482 26.565 C 10.346 26.527 10.11 26.45 9.965 26.392 C 9.817 26.334 9.621 26.246 9.524 26.197 C 9.43 26.149 9.243 26.046 9.111 25.969 C 8.978 25.891 8.781 25.758 8.668 25.678 C 8.559 25.597 8.391 25.468 8.294 25.391 C 8.201 25.313 8.003 25.133 7.855 24.987 C 7.71 24.845 7.512 24.642 7.422 24.535 C 7.332 24.429 7.171 24.232 7.068 24.094 C 6.964 23.958 6.809 23.736 6.722 23.606 C 6.635 23.474 6.503 23.255 6.422 23.119 C 6.342 22.984 6.225 22.771 6.16 22.651 C 6.096 22.529 5.98 22.293 5.903 22.125 C 5.825 21.957 5.69 21.648 5.606 21.435 C 5.522 21.225 5.395 20.889 5.324 20.692 C 5.257 20.496 5.148 20.163 5.086 19.953 C 5.025 19.743 4.938 19.443 4.896 19.285 C 4.854 19.127 4.782 18.85 4.741 18.669 C 4.705 18.488 4.637 18.201 4.602 18.026 C 4.566 17.855 4.502 17.507 4.46 17.256 C 4.418 17.004 4.331 16.378 4.267 15.868 C 4.202 15.355 4.118 14.725 4.079 14.467 C 4.021 14.077 4.008 13.951 4.011 13.702 C 4.011 13.473 4.021 13.36 4.053 13.205 C 4.076 13.095 4.121 12.927 4.154 12.834 C 4.186 12.74 4.253 12.58 4.305 12.477 C 4.357 12.373 4.451 12.215 4.512 12.121 C 4.577 12.028 4.67 11.895 4.725 11.827 C 4.78 11.759 4.915 11.611 5.028 11.495 C 5.141 11.382 5.383 11.169 5.571 11.021 C 5.755 10.875 6.016 10.678 6.148 10.585 L 6.39 10.414 L 6.241 10.401 C 6.161 10.395 5.928 10.379 5.728 10.369 C 5.528 10.356 5.134 10.353 4.857 10.356 C 4.457 10.363 4.305 10.375 4.124 10.407 C 3.998 10.43 3.808 10.479 3.699 10.515 C 3.589 10.55 3.44 10.611 3.363 10.649 C 3.285 10.688 3.166 10.756 3.098 10.805 C 3.03 10.85 2.915 10.934 2.847 10.995 C 2.776 11.053 2.656 11.182 2.575 11.279 C 2.498 11.376 2.401 11.508 2.366 11.572 C 2.327 11.637 2.275 11.738 2.249 11.799 C 2.223 11.86 2.172 12.002 2.133 12.115 C 2.098 12.228 2.049 12.412 2.027 12.521 C 2.004 12.631 1.975 12.832 1.959 12.964 C 1.943 13.096 1.927 13.367 1.92 13.567 C 1.914 13.768 1.917 14.119 1.93 14.352 C 1.943 14.584 1.966 14.909 1.982 15.08 C 1.998 15.248 2.027 15.516 2.049 15.674 C 2.072 15.832 2.111 16.091 2.137 16.249 C 2.163 16.407 2.217 16.694 2.259 16.891 C 2.301 17.084 2.378 17.427 2.43 17.646 C 2.485 17.866 2.573 18.208 2.624 18.401 C 2.679 18.598 2.782 18.963 2.856 19.218 C 2.93 19.469 3.056 19.892 3.14 20.156 C 3.224 20.421 3.347 20.796 3.414 20.989 C 3.482 21.183 3.576 21.447 3.624 21.573 C 3.673 21.699 3.763 21.935 3.827 22.093 C 3.892 22.251 4.018 22.552 4.105 22.755 C 4.195 22.958 4.331 23.261 4.411 23.426 C 4.489 23.59 4.618 23.838 4.696 23.98 C 4.773 24.122 4.896 24.336 4.967 24.455 C 5.041 24.578 5.174 24.784 5.264 24.913 C 5.354 25.045 5.515 25.261 5.621 25.391 C 5.728 25.523 5.925 25.746 6.064 25.888 C 6.199 26.03 6.422 26.239 6.551 26.355 C 6.683 26.472 6.913 26.656 7.058 26.769 C 7.206 26.878 7.419 27.033 7.535 27.107 C 7.651 27.182 7.816 27.285 7.9 27.33 C 7.983 27.378 8.164 27.475 8.303 27.543 C 8.442 27.611 8.671 27.717 8.81 27.775 C 8.952 27.833 9.191 27.928 9.343 27.979 C 9.495 28.031 9.733 28.105 9.868 28.141 C 10.007 28.176 10.217 28.227 10.34 28.253 C 10.463 28.279 10.682 28.318 10.827 28.341 C 10.976 28.363 11.244 28.388 11.421 28.401 C 11.624 28.414 11.924 28.421 12.224 28.411 C 12.489 28.405 12.789 28.392 12.896 28.379 C 13.002 28.369 13.221 28.337 13.389 28.312 C 13.553 28.286 13.831 28.23 14.002 28.188 C 14.173 28.147 14.425 28.076 14.564 28.034 C 14.699 27.989 14.905 27.918 15.022 27.873 C 15.138 27.828 15.332 27.746 15.454 27.691 C 15.577 27.637 15.783 27.53 15.912 27.456 C 16.045 27.382 16.239 27.266 16.342 27.195 C 16.449 27.124 16.619 27.001 16.726 26.917 C 16.832 26.836 17.007 26.685 17.114 26.585 C 17.223 26.485 17.394 26.305 17.497 26.188 C 17.601 26.072 17.755 25.881 17.839 25.771 C 17.923 25.659 18.069 25.452 18.165 25.313 C 18.259 25.171 18.407 24.939 18.494 24.794 C 18.582 24.649 18.717 24.404 18.798 24.249 C 18.911 24.033 18.972 23.942 19.059 23.852 C 19.136 23.771 19.221 23.712 19.318 23.664 C 19.411 23.619 19.511 23.587 19.608 23.574 C 19.73 23.555 19.782 23.558 19.905 23.584 C 19.988 23.6 20.107 23.642 20.172 23.674 C 20.243 23.709 20.341 23.781 20.408 23.849 C 20.486 23.926 20.547 24.01 20.589 24.101 C 20.625 24.175 20.666 24.297 20.676 24.368 C 20.689 24.439 20.692 24.548 20.686 24.606 C 20.679 24.665 20.66 24.759 20.641 24.811 C 20.625 24.863 20.537 25.043 20.447 25.214 C 20.356 25.382 20.208 25.65 20.112 25.808 C 20.015 25.966 19.859 26.211 19.766 26.353 C 19.672 26.495 19.499 26.74 19.379 26.898 C 19.26 27.057 19.069 27.292 18.952 27.424 C 18.836 27.556 18.634 27.769 18.501 27.898 C 18.369 28.027 18.162 28.211 18.046 28.305 C 17.93 28.401 17.733 28.551 17.611 28.638 C 17.488 28.725 17.294 28.854 17.178 28.925 C 17.062 28.996 16.862 29.115 16.73 29.186 C 16.598 29.257 16.345 29.379 16.171 29.46 C 15.997 29.537 15.739 29.644 15.597 29.699 C 15.455 29.751 15.197 29.838 15.026 29.893 C 14.855 29.944 14.564 30.022 14.383 30.063 C 14.202 30.105 13.989 30.151 13.908 30.164 C 13.831 30.177 13.757 30.193 13.75 30.199 C 13.74 30.209 13.719 30.418 13.699 30.661 C 13.68 30.906 13.651 31.354 13.641 31.654 C 13.625 32.051 13.625 32.371 13.641 32.823 C 13.654 33.165 13.68 33.688 13.699 33.981 C 13.722 34.275 13.754 34.685 13.777 34.892 C 13.799 35.098 13.838 35.421 13.864 35.611 C 13.889 35.802 13.934 36.085 13.96 36.243 C 13.986 36.401 14.034 36.657 14.067 36.809 C 14.099 36.96 14.167 37.257 14.222 37.47 C 14.274 37.679 14.367 37.999 14.422 38.18 C 14.48 38.357 14.586 38.66 14.66 38.848 C 14.735 39.038 14.88 39.361 14.984 39.567 C 15.087 39.774 15.241 40.065 15.328 40.21 C 15.416 40.358 15.577 40.616 15.687 40.784 C 15.796 40.952 15.962 41.193 16.052 41.319 C 16.142 41.445 16.323 41.691 16.455 41.865 C 16.588 42.04 16.804 42.314 16.936 42.479 C 17.068 42.643 17.291 42.908 17.433 43.072 C 17.575 43.237 17.816 43.508 17.968 43.676 C 18.123 43.844 18.407 44.144 18.601 44.344 C 18.794 44.544 19.149 44.889 19.385 45.111 C 19.624 45.334 19.933 45.621 20.075 45.747 C 20.217 45.873 20.418 46.044 20.518 46.131 C 20.618 46.215 20.808 46.37 20.941 46.477 C 21.073 46.583 21.318 46.774 21.486 46.899 C 21.653 47.025 21.967 47.251 22.18 47.402 C 22.393 47.551 22.728 47.78 22.925 47.906 C 23.122 48.032 23.412 48.216 23.571 48.313 C 23.729 48.409 23.971 48.554 24.107 48.632 C 24.242 48.713 24.494 48.852 24.661 48.945 C 24.829 49.039 25.188 49.223 25.455 49.358 C 25.723 49.494 26.043 49.648 26.165 49.703 C 26.288 49.758 26.523 49.865 26.691 49.936 C 26.859 50.01 27.169 50.139 27.382 50.223 C 27.592 50.307 27.949 50.442 28.175 50.526 C 28.401 50.607 28.766 50.733 28.983 50.801 C 29.199 50.869 29.502 50.959 29.654 51.001 C 29.805 51.043 30.073 51.113 30.244 51.155 C 30.419 51.2 30.75 51.279 30.983 51.327 C 31.215 51.379 31.587 51.456 31.806 51.498 C 32.029 51.54 32.432 51.614 32.706 51.659 C 32.981 51.704 33.391 51.769 33.616 51.801 C 33.842 51.833 34.242 51.885 34.507 51.917 C 34.772 51.949 35.22 51.998 35.504 52.023 C 35.788 52.052 36.304 52.095 36.653 52.121 C 37.001 52.147 37.518 52.176 37.802 52.188 C 38.086 52.201 38.37 52.211 38.435 52.214 C 38.5 52.217 38.861 52.22 39.238 52.224 C 39.618 52.227 40.174 52.218 40.474 52.208 L 40.487 52.204 C 40.787 52.194 41.245 52.172 41.503 52.156 C 41.761 52.14 42.194 52.104 42.462 52.078 C 42.73 52.052 43.088 52.014 43.256 51.991 C 43.424 51.969 43.766 51.923 44.011 51.885 C 44.256 51.849 44.715 51.769 45.028 51.714 C 45.341 51.656 45.818 51.562 46.092 51.504 C 46.366 51.446 46.828 51.342 47.118 51.274 C 47.409 51.207 47.844 51.097 48.086 51.036 C 48.328 50.972 48.755 50.856 49.035 50.778 C 49.316 50.698 49.707 50.581 49.904 50.52 C 50.104 50.458 50.465 50.339 50.707 50.255 C 50.953 50.171 51.327 50.039 51.543 49.958 C 51.759 49.877 52.073 49.755 52.243 49.688 C 52.411 49.62 52.695 49.496 52.875 49.419 C 53.053 49.338 53.347 49.203 53.528 49.112 C 53.705 49.022 53.992 48.874 54.159 48.777 C 54.327 48.684 54.564 48.545 54.68 48.474 C 54.796 48.399 55.003 48.267 55.138 48.177 C 55.273 48.086 55.547 47.89 55.747 47.738 C 55.947 47.587 56.231 47.366 56.373 47.247 C 56.515 47.128 56.755 46.922 56.907 46.783 C 57.055 46.648 57.332 46.382 57.519 46.195 C 57.706 46.008 57.964 45.744 58.09 45.608 C 58.216 45.473 58.442 45.221 58.587 45.053 C 58.736 44.885 58.939 44.646 59.042 44.523 C 59.146 44.401 59.356 44.14 59.507 43.943 C 59.662 43.747 59.888 43.44 60.014 43.266 C 60.14 43.091 60.34 42.798 60.459 42.61 C 60.579 42.426 60.749 42.158 60.833 42.013 C 60.92 41.867 61.05 41.645 61.124 41.513 C 61.199 41.38 61.34 41.109 61.444 40.906 C 61.544 40.703 61.685 40.416 61.753 40.268 C 61.821 40.119 61.96 39.806 62.057 39.577 C 62.154 39.345 62.302 38.97 62.389 38.744 C 62.473 38.518 62.599 38.164 62.666 37.957 C 62.734 37.751 62.834 37.441 62.889 37.267 C 62.941 37.092 63.028 36.795 63.079 36.604 C 63.131 36.414 63.218 36.088 63.27 35.875 C 63.321 35.665 63.399 35.336 63.441 35.146 C 63.483 34.955 63.544 34.668 63.576 34.504 C 63.609 34.339 63.651 34.094 63.673 33.958 C 63.696 33.822 63.725 33.587 63.741 33.442 C 63.758 33.294 63.779 33.01 63.792 32.81 C 63.805 32.597 63.812 32.254 63.806 31.986 C 63.799 31.735 63.783 31.422 63.767 31.296 C 63.751 31.17 63.725 30.983 63.705 30.883 C 63.689 30.783 63.648 30.599 63.616 30.47 C 63.583 30.344 63.528 30.15 63.492 30.037 C 63.457 29.928 63.422 29.827 63.412 29.814 C 63.405 29.801 63.301 29.754 63.189 29.702 C 63.073 29.654 62.851 29.547 62.693 29.47 C 62.535 29.389 62.283 29.257 62.134 29.173 C 61.986 29.089 61.738 28.937 61.579 28.837 C 61.421 28.737 61.166 28.569 61.014 28.463 C 60.862 28.356 60.643 28.201 60.527 28.117 C 60.41 28.033 60.181 27.859 60.02 27.733 C 59.855 27.608 59.62 27.417 59.494 27.311 C 59.369 27.204 59.213 27.072 59.149 27.014 C 59.084 26.955 58.894 26.775 58.72 26.61 C 58.546 26.446 58.29 26.185 58.152 26.033 C 58.013 25.878 57.813 25.646 57.709 25.514 C 57.606 25.381 57.448 25.171 57.358 25.045 C 57.271 24.919 57.17 24.764 57.135 24.703 C 57.1 24.639 57.057 24.541 57.041 24.483 C 57.025 24.425 57.013 24.313 57.013 24.232 C 57.013 24.152 57.026 24.039 57.045 23.98 C 57.061 23.922 57.096 23.832 57.125 23.78 C 57.151 23.729 57.226 23.632 57.287 23.567 C 57.349 23.503 57.452 23.422 57.513 23.39 C 57.574 23.357 57.681 23.319 57.745 23.303 C 57.813 23.287 57.916 23.273 57.974 23.273 C 58.032 23.273 58.129 23.287 58.191 23.303 C 58.252 23.319 58.349 23.358 58.41 23.387 C 58.472 23.419 58.555 23.474 58.6 23.513 C 58.645 23.551 58.742 23.674 58.82 23.787 C 58.897 23.9 59.023 24.077 59.104 24.184 C 59.184 24.29 59.327 24.464 59.42 24.577 C 59.517 24.687 59.733 24.916 59.901 25.087 C 60.068 25.255 60.321 25.491 60.456 25.613 C 60.592 25.733 60.824 25.927 60.972 26.046 C 61.12 26.165 61.328 26.324 61.431 26.404 C 61.537 26.485 61.699 26.604 61.795 26.672 C 61.889 26.74 62.108 26.892 62.282 27.008 C 62.457 27.124 62.676 27.265 62.77 27.323 C 62.863 27.381 63.041 27.485 63.163 27.553 C 63.286 27.62 63.46 27.717 63.557 27.763 C 63.65 27.811 63.828 27.891 63.95 27.946 C 64.073 27.998 64.312 28.091 64.487 28.149 C 64.661 28.207 64.922 28.286 65.071 28.324 C 65.219 28.36 65.438 28.404 65.558 28.424 C 65.719 28.45 65.891 28.456 66.2 28.456 C 66.545 28.456 66.661 28.446 66.845 28.414 C 66.968 28.391 67.149 28.35 67.242 28.324 C 67.336 28.298 67.497 28.24 67.604 28.201 C 67.707 28.159 67.898 28.075 68.027 28.011 C 68.156 27.946 68.355 27.837 68.475 27.766 C 68.594 27.695 68.811 27.556 68.959 27.456 C 69.108 27.356 69.317 27.204 69.427 27.12 C 69.537 27.036 69.704 26.897 69.801 26.813 C 69.898 26.73 70.102 26.539 70.253 26.391 C 70.405 26.242 70.631 26.007 70.76 25.871 C 70.886 25.735 71.111 25.474 71.263 25.297 C 71.411 25.119 71.634 24.842 71.757 24.684 C 71.88 24.526 72.054 24.29 72.151 24.158 C 72.244 24.026 72.4 23.803 72.496 23.661 C 72.59 23.519 72.741 23.287 72.831 23.145 C 72.922 23.003 73.099 22.709 73.225 22.493 C 73.351 22.277 73.516 21.989 73.59 21.851 C 73.664 21.715 73.816 21.418 73.929 21.195 C 74.042 20.973 74.184 20.673 74.248 20.534 C 74.313 20.395 74.422 20.144 74.493 19.973 C 74.564 19.805 74.678 19.524 74.742 19.353 C 74.807 19.181 74.919 18.862 74.993 18.643 C 75.068 18.427 75.165 18.111 75.213 17.946 C 75.262 17.778 75.329 17.52 75.365 17.368 C 75.4 17.217 75.462 16.939 75.497 16.752 C 75.533 16.565 75.585 16.258 75.614 16.074 C 75.639 15.89 75.674 15.606 75.694 15.441 C 75.71 15.277 75.729 14.967 75.736 14.751 C 75.742 14.503 75.739 14.264 75.723 14.1 C 75.684 13.964 75.655 13.748 75.636 13.625 C 75.617 13.506 75.568 13.292 75.532 13.153 C 75.497 13.015 75.429 12.805 75.381 12.686 C 75.336 12.566 75.249 12.373 75.191 12.257 C 75.133 12.141 75.032 11.966 74.971 11.872 C 74.906 11.779 74.8 11.637 74.733 11.557 C 74.665 11.479 74.536 11.35 74.449 11.275 C 74.358 11.201 74.223 11.095 74.142 11.043 C 74.064 10.991 73.935 10.911 73.855 10.869 C 73.777 10.827 73.632 10.756 73.538 10.717 C 73.445 10.675 73.264 10.604 73.135 10.563 C 73.009 10.517 72.79 10.45 72.648 10.414 C 72.506 10.375 72.122 10.281 71.796 10.207 C 71.47 10.13 71.199 10.072 71.196 10.075 C 71.193 10.079 71.251 10.176 71.324 10.291 C 71.399 10.407 71.537 10.64 71.634 10.808 C 71.731 10.975 71.89 11.276 71.987 11.476 C 72.083 11.676 72.212 11.953 72.27 12.089 C 72.328 12.224 72.419 12.457 72.474 12.599 C 72.529 12.744 72.609 12.983 72.655 13.135 C 72.7 13.287 72.777 13.564 72.825 13.754 C 72.874 13.944 72.935 14.202 72.961 14.328 C 72.987 14.454 73.032 14.696 73.058 14.864 C 73.084 15.032 73.119 15.297 73.135 15.448 C 73.151 15.6 73.171 15.916 73.177 16.148 C 73.183 16.397 73.18 16.713 73.167 16.92 C 73.154 17.11 73.132 17.378 73.116 17.514 C 73.099 17.649 73.064 17.885 73.038 18.036 C 73.009 18.188 72.954 18.452 72.912 18.62 C 72.87 18.788 72.812 19.017 72.78 19.127 C 72.747 19.237 72.68 19.456 72.625 19.614 C 72.574 19.772 72.473 20.04 72.408 20.208 C 72.341 20.376 72.245 20.618 72.19 20.744 C 72.135 20.87 72.008 21.138 71.908 21.338 C 71.808 21.538 71.666 21.809 71.592 21.941 C 71.518 22.074 71.399 22.277 71.324 22.39 C 71.25 22.506 71.128 22.696 71.047 22.813 C 70.966 22.929 70.824 23.125 70.731 23.254 C 70.637 23.38 70.453 23.609 70.327 23.761 C 70.198 23.912 69.989 24.148 69.857 24.287 C 69.724 24.423 69.505 24.632 69.369 24.755 C 69.234 24.874 69.02 25.049 68.901 25.143 C 68.778 25.236 68.578 25.378 68.452 25.465 C 68.327 25.549 68.126 25.672 68.01 25.739 C 67.894 25.807 67.684 25.917 67.542 25.981 C 67.4 26.049 67.174 26.142 67.035 26.188 C 66.897 26.233 66.697 26.288 66.594 26.311 C 66.488 26.333 66.329 26.358 66.239 26.368 C 66.148 26.378 65.964 26.388 65.825 26.388 C 65.687 26.388 65.467 26.375 65.335 26.358 C 65.203 26.342 64.997 26.314 64.877 26.291 C 64.755 26.268 64.561 26.227 64.445 26.194 C 64.328 26.165 64.135 26.104 64.012 26.065 C 63.889 26.023 63.719 25.958 63.628 25.923 C 63.538 25.884 63.383 25.817 63.28 25.769 C 63.176 25.72 62.992 25.623 62.866 25.552 C 62.741 25.481 62.524 25.349 62.382 25.252 C 62.24 25.158 62.073 25.039 62.008 24.99 C 61.943 24.942 61.808 24.835 61.701 24.748 C 61.595 24.664 61.385 24.474 61.234 24.326 C 61.082 24.178 60.882 23.967 60.791 23.854 C 60.698 23.745 60.563 23.571 60.489 23.471 C 60.414 23.371 60.279 23.177 60.192 23.038 C 60.101 22.903 59.946 22.644 59.846 22.47 C 59.746 22.292 59.591 22.009 59.507 21.838 C 59.42 21.667 59.297 21.405 59.233 21.257 C 59.168 21.108 59.052 20.837 58.978 20.653 C 58.904 20.469 58.794 20.182 58.736 20.015 C 58.674 19.847 58.607 19.647 58.581 19.572 C 58.556 19.498 58.481 19.262 58.413 19.046 C 58.346 18.83 58.229 18.446 58.155 18.194 C 58.08 17.943 57.971 17.559 57.913 17.343 C 57.855 17.127 57.729 16.643 57.635 16.271 C 57.541 15.897 57.422 15.407 57.37 15.181 C 57.319 14.955 57.242 14.609 57.197 14.415 C 57.155 14.221 57.048 13.747 56.964 13.363 C 56.88 12.979 56.761 12.463 56.702 12.215 C 56.644 11.966 56.525 11.476 56.438 11.124 C 56.351 10.772 56.228 10.304 56.17 10.088 C 56.109 9.872 56.006 9.52 55.942 9.304 C 55.874 9.088 55.77 8.768 55.712 8.594 C 55.654 8.42 55.554 8.142 55.49 7.975 C 55.428 7.807 55.318 7.536 55.25 7.371 C 55.183 7.207 55.063 6.941 54.986 6.783 C 54.908 6.625 54.776 6.39 54.689 6.258 C 54.598 6.122 54.47 5.957 54.386 5.873 C 54.305 5.792 54.199 5.708 54.151 5.683 C 54.099 5.66 54.024 5.634 53.986 5.628 C 53.928 5.621 53.886 5.632 53.792 5.677 C 53.728 5.709 53.605 5.787 53.521 5.845 C 53.437 5.906 53.292 6.029 53.199 6.119 C 53.105 6.21 52.944 6.393 52.837 6.525 C 52.731 6.661 52.572 6.874 52.489 7.003 C 52.405 7.132 52.282 7.342 52.221 7.468 C 52.16 7.594 52.092 7.755 52.075 7.826 L 52.043 7.955 L 52.321 8.239 C 52.472 8.394 52.698 8.633 52.821 8.771 C 52.943 8.907 53.14 9.143 53.263 9.291 C 53.386 9.439 53.583 9.694 53.705 9.855 C 53.825 10.017 54.001 10.259 54.095 10.395 C 54.189 10.53 54.364 10.791 54.48 10.979 C 54.596 11.165 54.737 11.398 54.795 11.498 C 54.853 11.598 54.96 11.792 55.034 11.931 C 55.105 12.066 55.218 12.292 55.282 12.428 C 55.347 12.563 55.451 12.802 55.512 12.954 C 55.573 13.106 55.657 13.347 55.702 13.489 C 55.748 13.631 55.806 13.851 55.835 13.977 C 55.864 14.102 55.906 14.322 55.925 14.464 C 55.957 14.68 55.967 14.809 55.967 15.248 C 55.967 15.571 55.958 15.829 55.945 15.913 C 55.932 15.99 55.902 16.096 55.883 16.151 C 55.864 16.206 55.806 16.303 55.761 16.364 C 55.716 16.426 55.625 16.513 55.564 16.562 C 55.502 16.607 55.406 16.662 55.351 16.685 C 55.296 16.704 55.193 16.732 55.118 16.745 C 55.018 16.761 54.953 16.762 54.847 16.742 C 54.76 16.729 54.65 16.691 54.56 16.646 C 54.453 16.591 54.379 16.539 54.302 16.455 C 54.244 16.391 54.173 16.3 54.151 16.248 C 54.125 16.2 54.092 16.113 54.073 16.055 C 54.047 15.964 54.043 15.887 54.053 15.51 C 54.063 15.216 54.06 14.999 54.044 14.857 C 54.031 14.741 53.999 14.547 53.973 14.425 C 53.947 14.302 53.895 14.118 53.86 14.012 C 53.824 13.905 53.763 13.738 53.724 13.638 C 53.685 13.538 53.588 13.324 53.511 13.163 C 53.434 13.002 53.305 12.754 53.224 12.608 C 53.143 12.463 52.998 12.221 52.905 12.069 C 52.811 11.918 52.659 11.685 52.569 11.553 C 52.478 11.42 52.314 11.192 52.204 11.047 C 52.095 10.898 51.914 10.666 51.801 10.53 C 51.691 10.395 51.507 10.179 51.398 10.053 C 51.288 9.927 51.071 9.694 50.916 9.539 C 50.765 9.381 50.53 9.158 50.401 9.039 C 50.268 8.92 50.055 8.736 49.923 8.63 C 49.794 8.523 49.565 8.345 49.416 8.232 C 49.268 8.123 49 7.932 48.82 7.813 C 48.642 7.693 48.422 7.555 48.335 7.503 C 48.248 7.451 48.067 7.345 47.932 7.265 C 47.796 7.184 47.558 7.048 47.4 6.961 C 47.242 6.874 46.941 6.716 46.728 6.612 C 46.518 6.506 46.235 6.37 46.096 6.306 C 45.96 6.241 45.686 6.125 45.492 6.041 C 45.299 5.96 44.979 5.835 44.785 5.764 C 44.592 5.693 44.292 5.589 44.115 5.531 C 43.94 5.473 43.637 5.379 43.44 5.321 C 43.243 5.263 42.891 5.17 42.656 5.112 C 42.42 5.054 42.065 4.976 41.871 4.94 C 41.678 4.905 41.375 4.853 41.2 4.824 C 41.026 4.798 40.729 4.76 40.538 4.737 C 40.348 4.715 40.022 4.686 39.809 4.67 C 39.599 4.654 39.132 4.634 38.774 4.628 C 38.367 4.621 37.947 4.625 37.654 4.638 Z M 39.358 28.25 C 39.484 28.26 39.693 28.285 39.825 28.308 C 39.955 28.327 40.164 28.372 40.283 28.401 C 40.406 28.434 40.58 28.482 40.667 28.515 C 40.758 28.544 40.897 28.599 40.978 28.631 C 41.059 28.663 41.213 28.734 41.32 28.789 C 41.426 28.844 41.59 28.934 41.684 28.992 C 41.777 29.05 41.939 29.16 42.042 29.237 C 42.146 29.315 42.317 29.46 42.423 29.563 C 42.53 29.667 42.682 29.828 42.759 29.925 C 42.836 30.022 42.949 30.173 43.007 30.267 C 43.065 30.357 43.162 30.531 43.22 30.65 C 43.278 30.77 43.352 30.958 43.388 31.067 C 43.423 31.177 43.469 31.338 43.485 31.422 C 43.501 31.506 43.524 31.654 43.533 31.748 C 43.543 31.842 43.553 31.99 43.553 32.074 C 43.553 32.158 43.543 32.306 43.533 32.399 C 43.524 32.493 43.501 32.642 43.485 32.726 C 43.469 32.809 43.423 32.971 43.388 33.081 C 43.352 33.191 43.275 33.378 43.22 33.497 C 43.162 33.616 43.068 33.787 43.007 33.881 C 42.949 33.971 42.837 34.126 42.759 34.223 C 42.682 34.319 42.53 34.481 42.423 34.584 C 42.317 34.687 42.146 34.833 42.042 34.91 C 41.939 34.988 41.777 35.097 41.684 35.155 C 41.59 35.213 41.426 35.305 41.32 35.359 C 41.213 35.414 41.042 35.492 40.939 35.53 C 40.835 35.572 40.671 35.63 40.571 35.662 C 40.471 35.694 40.284 35.746 40.152 35.775 L 39.915 35.83 L 39.929 35.966 C 39.935 36.04 39.964 36.26 39.99 36.453 C 40.015 36.647 40.067 36.953 40.103 37.134 C 40.138 37.315 40.203 37.586 40.248 37.737 C 40.29 37.889 40.374 38.153 40.432 38.324 C 40.49 38.495 40.58 38.738 40.632 38.86 C 40.684 38.983 40.771 39.16 40.825 39.254 C 40.88 39.347 40.987 39.512 41.068 39.618 C 41.145 39.725 41.293 39.893 41.397 39.993 C 41.497 40.093 41.642 40.215 41.716 40.264 C 41.79 40.312 41.93 40.393 42.03 40.441 C 42.13 40.49 42.31 40.564 42.433 40.603 C 42.556 40.641 42.756 40.697 42.875 40.726 C 42.998 40.751 43.172 40.784 43.269 40.797 C 43.372 40.81 43.559 40.816 43.737 40.81 C 43.966 40.803 44.079 40.786 44.231 40.751 C 44.337 40.725 44.508 40.67 44.605 40.635 C 44.702 40.596 44.863 40.522 44.963 40.471 C 45.063 40.419 45.227 40.319 45.33 40.251 C 45.434 40.183 45.595 40.054 45.689 39.964 C 45.782 39.874 45.902 39.748 45.95 39.684 C 45.999 39.619 46.076 39.486 46.121 39.393 C 46.167 39.296 46.222 39.148 46.244 39.061 C 46.267 38.973 46.306 38.857 46.331 38.802 C 46.36 38.747 46.415 38.66 46.457 38.611 C 46.499 38.563 46.586 38.489 46.651 38.444 C 46.715 38.402 46.825 38.347 46.896 38.324 C 46.983 38.295 47.073 38.282 47.186 38.282 C 47.299 38.282 47.39 38.295 47.474 38.321 C 47.542 38.344 47.641 38.39 47.69 38.422 C 47.741 38.454 47.825 38.525 47.873 38.576 C 47.925 38.628 47.996 38.731 48.032 38.802 C 48.067 38.876 48.109 38.996 48.122 39.073 C 48.142 39.183 48.141 39.244 48.125 39.37 C 48.112 39.457 48.071 39.625 48.035 39.744 C 47.997 39.864 47.912 40.074 47.848 40.213 C 47.784 40.348 47.68 40.535 47.622 40.625 C 47.564 40.715 47.464 40.854 47.4 40.932 C 47.335 41.012 47.193 41.164 47.086 41.271 C 46.976 41.377 46.812 41.529 46.715 41.604 C 46.621 41.681 46.444 41.807 46.322 41.888 C 46.199 41.968 45.973 42.097 45.815 42.178 C 45.657 42.258 45.425 42.365 45.302 42.413 C 45.176 42.461 44.969 42.533 44.84 42.568 C 44.711 42.604 44.498 42.652 44.369 42.675 C 44.185 42.707 44.036 42.716 43.71 42.723 C 43.43 42.726 43.22 42.72 43.084 42.704 L 43.069 42.714 C 42.956 42.701 42.749 42.665 42.607 42.636 C 42.465 42.607 42.23 42.552 42.081 42.51 C 41.933 42.468 41.729 42.404 41.622 42.365 C 41.519 42.326 41.339 42.248 41.223 42.193 C 41.107 42.139 40.929 42.046 40.832 41.984 C 40.732 41.923 40.567 41.813 40.467 41.739 C 40.367 41.665 40.158 41.478 40.006 41.326 C 39.842 41.162 39.658 40.951 39.558 40.815 C 39.464 40.69 39.331 40.5 39.267 40.394 C 39.199 40.287 39.096 40.103 39.034 39.98 C 38.973 39.858 38.899 39.699 38.87 39.625 C 38.841 39.551 38.808 39.483 38.802 39.477 C 38.795 39.469 38.737 39.561 38.673 39.68 C 38.609 39.802 38.509 39.977 38.448 40.067 C 38.386 40.158 38.27 40.322 38.183 40.429 C 38.099 40.535 37.934 40.716 37.818 40.835 C 37.701 40.951 37.528 41.113 37.431 41.19 C 37.334 41.271 37.175 41.39 37.075 41.461 C 36.975 41.529 36.805 41.643 36.696 41.707 C 36.586 41.772 36.415 41.865 36.315 41.91 C 36.215 41.959 36.069 42.019 35.994 42.052 C 35.917 42.081 35.778 42.133 35.685 42.165 C 35.591 42.197 35.417 42.242 35.298 42.268 C 35.179 42.293 35.011 42.326 34.927 42.336 C 34.843 42.346 34.694 42.362 34.601 42.368 C 34.507 42.375 34.301 42.371 34.143 42.358 C 33.985 42.345 33.755 42.319 33.636 42.297 C 33.513 42.278 33.303 42.229 33.164 42.193 C 33.026 42.158 32.833 42.097 32.733 42.062 C 32.633 42.026 32.445 41.949 32.32 41.891 C 32.191 41.833 31.983 41.726 31.861 41.655 C 31.735 41.584 31.57 41.48 31.49 41.429 C 31.412 41.377 31.28 41.281 31.197 41.22 C 31.116 41.158 30.947 41.016 30.822 40.909 C 30.699 40.799 30.421 40.538 30.205 40.325 C 29.989 40.112 29.75 39.89 29.676 39.835 C 29.599 39.777 29.509 39.69 29.473 39.642 C 29.437 39.593 29.389 39.515 29.366 39.47 C 29.344 39.425 29.312 39.335 29.299 39.271 C 29.283 39.203 29.27 39.105 29.27 39.054 C 29.27 39.002 29.283 38.903 29.299 38.835 C 29.315 38.767 29.354 38.661 29.386 38.603 C 29.418 38.541 29.499 38.441 29.564 38.376 C 29.628 38.315 29.734 38.237 29.795 38.205 C 29.857 38.173 29.957 38.138 30.012 38.125 C 30.077 38.109 30.18 38.105 30.289 38.108 C 30.412 38.115 30.496 38.131 30.574 38.163 C 30.635 38.189 30.764 38.263 30.861 38.334 C 30.974 38.415 31.209 38.628 31.516 38.928 C 31.78 39.186 32.074 39.467 32.167 39.548 C 32.261 39.629 32.436 39.76 32.552 39.838 C 32.668 39.915 32.864 40.028 32.993 40.093 C 33.119 40.154 33.3 40.235 33.397 40.268 C 33.49 40.3 33.659 40.348 33.772 40.374 C 33.881 40.4 34.062 40.428 34.171 40.441 C 34.287 40.454 34.442 40.458 34.542 40.451 C 34.636 40.445 34.775 40.425 34.846 40.409 C 34.92 40.393 35.047 40.361 35.127 40.332 C 35.208 40.306 35.395 40.222 35.543 40.151 C 35.692 40.077 35.885 39.964 35.979 39.896 C 36.069 39.832 36.214 39.716 36.301 39.642 C 36.385 39.567 36.518 39.438 36.592 39.354 C 36.666 39.271 36.782 39.119 36.85 39.019 C 36.918 38.919 37.012 38.753 37.057 38.653 C 37.102 38.553 37.173 38.385 37.211 38.282 C 37.25 38.179 37.315 37.963 37.354 37.805 C 37.392 37.647 37.441 37.414 37.46 37.285 C 37.483 37.127 37.492 36.93 37.495 36.653 C 37.495 36.431 37.486 36.153 37.473 36.03 C 37.46 35.908 37.444 35.789 37.441 35.763 C 37.434 35.721 37.411 35.708 37.292 35.669 C 37.215 35.646 37.06 35.588 36.944 35.543 C 36.827 35.498 36.643 35.417 36.533 35.362 C 36.424 35.307 36.26 35.213 36.166 35.155 C 36.073 35.097 35.911 34.988 35.808 34.91 C 35.705 34.833 35.534 34.687 35.427 34.584 C 35.321 34.481 35.169 34.319 35.091 34.223 C 35.014 34.126 34.901 33.974 34.843 33.881 C 34.785 33.791 34.688 33.616 34.63 33.497 C 34.572 33.378 34.498 33.191 34.462 33.081 C 34.427 32.971 34.382 32.809 34.366 32.726 C 34.349 32.642 34.326 32.493 34.317 32.399 C 34.307 32.306 34.297 32.158 34.297 32.074 C 34.297 31.99 34.307 31.842 34.317 31.748 C 34.326 31.654 34.349 31.506 34.366 31.422 C 34.382 31.338 34.427 31.177 34.462 31.067 C 34.498 30.958 34.575 30.77 34.63 30.65 C 34.688 30.531 34.782 30.36 34.843 30.267 C 34.901 30.176 35.014 30.022 35.091 29.925 C 35.169 29.828 35.321 29.667 35.427 29.563 C 35.534 29.46 35.705 29.315 35.808 29.237 C 35.911 29.16 36.073 29.05 36.166 28.992 C 36.26 28.934 36.424 28.844 36.531 28.789 C 36.637 28.734 36.792 28.663 36.872 28.631 C 36.953 28.599 37.096 28.547 37.183 28.515 C 37.273 28.486 37.447 28.434 37.567 28.401 C 37.689 28.369 37.896 28.327 38.025 28.308 C 38.154 28.288 38.367 28.263 38.492 28.25 C 38.618 28.24 38.812 28.23 38.925 28.23 C 39.035 28.23 39.229 28.24 39.358 28.25 Z M 39.225 29.309 C 39.112 29.309 39.054 29.318 38.992 29.351 C 38.944 29.373 38.89 29.421 38.861 29.463 C 38.835 29.502 38.809 29.569 38.802 29.611 C 38.796 29.653 38.799 29.721 38.806 29.757 C 38.812 29.799 38.847 29.86 38.896 29.912 C 38.941 29.964 39.002 30.002 39.044 30.015 C 39.083 30.024 39.161 30.034 39.219 30.034 C 39.277 30.034 39.416 30.053 39.526 30.079 C 39.635 30.105 39.839 30.166 39.974 30.215 C 40.109 30.263 40.293 30.341 40.377 30.383 C 40.461 30.425 40.603 30.509 40.694 30.573 C 40.784 30.635 40.923 30.744 41 30.815 C 41.078 30.886 41.197 30.98 41.265 31.019 C 41.333 31.057 41.442 31.116 41.513 31.145 C 41.584 31.173 41.671 31.199 41.706 31.199 C 41.745 31.199 41.794 31.186 41.817 31.17 L 41.823 31.18 C 41.845 31.164 41.874 31.115 41.884 31.073 C 41.9 31.012 41.897 30.974 41.874 30.887 C 41.858 30.825 41.81 30.715 41.768 30.638 C 41.726 30.56 41.665 30.463 41.629 30.418 C 41.594 30.376 41.504 30.282 41.423 30.215 C 41.346 30.147 41.184 30.028 41.068 29.95 C 40.951 29.873 40.758 29.763 40.635 29.705 C 40.512 29.647 40.286 29.557 40.128 29.502 C 39.97 29.447 39.738 29.382 39.609 29.356 C 39.48 29.331 39.309 29.309 39.225 29.309 Z M 28.939 18.975 C 30.392 18.975 31.57 20.742 31.57 22.921 C 31.57 25.1 30.392 26.867 28.939 26.867 C 27.486 26.867 26.308 25.1 26.308 22.921 C 26.308 20.742 27.486 18.975 28.939 18.975 Z M 47.354 18.975 C 48.807 18.975 49.985 20.742 49.985 22.921 C 49.985 25.1 48.807 26.867 47.354 26.867 C 45.901 26.867 44.723 25.1 44.723 22.921 C 44.723 20.742 45.901 18.975 47.354 18.975 Z M 26.478 5.103 C 26.469 5.103 26.485 5.128 26.514 5.16 C 26.543 5.192 26.572 5.219 26.575 5.219 C 26.577 5.217 26.561 5.191 26.539 5.16 C 26.517 5.128 26.487 5.103 26.478 5.103 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "100%",
      height: "100%",
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
    width: 50.576,
    height: 70.000,
    viewBox: "0 0 50.576 70.000",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 47.069 25.345 L 44.655 25.345 C 44.173 25.345 43.811 25.466 43.449 25.586 L 43.449 7.241 C 43.449 3.259 40.19 0 36.207 0 L 14.483 0 C 10.5 0 7.241 3.259 7.241 7.241 L 7.241 25.586 C 6.879 25.466 6.517 25.345 6.035 25.345 L 3.621 25.345 C 1.569 25.345 0 26.914 0 28.966 L 0 53.104 C 0 54.673 0.966 56 2.414 56.483 L 2.414 60.345 C 2.414 61.069 2.897 61.552 3.621 61.552 L 4.828 61.552 L 4.828 68.794 C 4.828 69.518 5.31 70 6.035 70 L 10.862 70 C 11.345 70 11.828 69.759 11.948 69.276 L 15.207 61.552 L 35.362 61.552 L 38.621 69.276 C 38.862 69.759 39.224 70 39.707 70 L 44.534 70 C 45.259 70 45.741 69.518 45.741 68.794 L 45.741 61.552 L 46.948 61.552 C 47.672 61.552 48.155 61.069 48.155 60.345 L 48.155 56.483 C 49.603 56 50.569 54.673 50.569 53.104 L 50.569 28.966 C 50.69 26.914 49.121 25.345 47.069 25.345 L 47.069 25.345 Z M 20.879 16.534 C 20.396 16.052 20.396 15.327 20.879 14.845 C 21.362 14.362 22.086 14.362 22.569 14.845 L 25.345 17.62 L 28.121 14.845 C 28.603 14.362 29.327 14.362 29.81 14.845 C 30.293 15.327 30.293 16.052 29.81 16.534 L 27.034 19.31 L 29.81 22.086 C 30.293 22.569 30.293 23.293 29.81 23.776 C 29.569 24.017 29.327 24.138 28.965 24.138 C 28.603 24.138 28.362 24.017 28.121 23.776 L 25.345 21 L 22.569 23.776 C 22.327 24.017 22.086 24.138 21.724 24.138 C 21.362 24.138 21.121 24.017 20.879 23.776 C 20.396 23.293 20.396 22.569 20.879 22.086 L 23.655 19.31 L 20.879 16.534 Z M 9.655 41.034 C 9.655 38.379 11.827 36.206 14.482 36.206 L 36.207 36.206 C 38.862 36.206 41.034 38.379 41.034 41.034 L 41.034 47.069 L 9.655 47.069 L 9.655 41.034 Z M 10.017 67.586 L 7.241 67.586 L 7.241 61.551 L 12.672 61.551 L 10.017 67.586 Z M 43.448 67.586 L 40.672 67.586 L 38.138 61.551 L 43.448 61.551 L 43.448 67.586 Z M 48.276 53.103 C 48.276 53.827 47.793 54.31 47.069 54.31 L 3.62 54.31 C 2.896 54.31 2.413 53.827 2.413 53.103 L 2.413 28.965 C 2.413 28.241 2.896 27.758 3.62 27.758 L 6.034 27.758 C 6.758 27.758 7.241 28.241 7.241 28.965 L 7.241 48.276 C 7.241 49 7.724 49.482 8.448 49.482 L 42.241 49.482 C 42.965 49.482 43.448 49 43.448 48.276 L 43.448 28.965 C 43.448 28.241 43.931 27.758 44.655 27.758 L 47.069 27.758 C 47.793 27.758 48.276 28.241 48.276 28.965 L 48.276 53.103 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "100%",
      height: "100%",
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
    width: 70.371,
    height: 64.001,
    viewBox: "0 0 70.371 64.001",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 55.186 33.63 C 63.556 33.63 70.371 40.445 70.371 48.815 C 70.371 57.186 63.556 64.001 55.186 64.001 C 46.815 64.001 40.001 57.186 40.001 48.815 C 40.001 40.445 46.815 33.63 55.186 33.63 Z M 62.297 43.63 C 61.556 42.815 60.297 42.815 59.482 43.63 L 53.26 49.853 L 50.89 47.482 C 50.149 46.668 48.89 46.668 48.075 47.482 C 47.26 48.223 47.26 49.482 48.075 50.297 L 51.853 54.075 C 52.223 54.445 52.742 54.668 53.26 54.668 C 53.778 54.668 54.297 54.445 54.667 54.075 L 62.297 46.445 C 63.112 45.63 63.111 44.371 62.297 43.63 Z M 59.26 0 C 62.667 0 65.408 2.741 65.408 6.148 L 65.408 32.593 C 64.001 31.704 62.519 31.037 60.964 30.519 L 60.964 6.148 C 60.964 5.259 60.223 4.444 59.26 4.444 L 16.001 4.444 C 15.112 4.444 14.297 5.185 14.297 6.148 L 14.297 9.852 L 49.408 9.852 C 52.816 9.852 55.557 12.593 55.557 16 L 55.557 29.556 L 55.186 29.556 C 53.778 29.556 52.445 29.704 51.112 30 L 51.112 26.667 L 4.445 26.667 L 4.444 43.037 C 4.444 44 5.185 44.741 6.148 44.741 L 36.371 44.741 C 36.075 46.075 35.926 47.408 35.926 48.815 L 35.926 49.186 L 6.148 49.187 C 2.741 49.187 0 46.445 0 43.038 L 0 16.001 C 0 12.593 2.741 9.853 6.148 9.853 L 9.852 9.853 L 9.852 6.148 C 9.852 2.741 12.593 0 16 0 L 59.26 0 Z M 15.186 35.926 C 15.556 35.926 15.853 36.222 15.853 36.593 L 15.853 40 C 15.852 40.37 15.556 40.666 15.186 40.666 L 9.334 40.667 C 8.964 40.667 8.667 40.37 8.667 40 L 8.667 36.593 C 8.667 36.222 8.964 35.926 9.334 35.926 L 15.186 35.926 Z M 25.556 35.926 C 25.926 35.926 26.223 36.222 26.223 36.593 L 26.223 40 C 26.222 40.37 25.926 40.666 25.556 40.666 L 19.704 40.667 C 19.334 40.667 19.037 40.37 19.037 40 L 19.037 36.593 C 19.037 36.222 19.334 35.926 19.704 35.926 L 25.556 35.926 Z M 35.927 35.927 C 36.223 35.927 36.52 36.222 36.594 36.593 L 36.594 40 C 36.594 40.37 36.297 40.667 35.927 40.667 L 30.001 40.667 C 29.631 40.667 29.334 40.37 29.334 40 L 29.334 36.593 C 29.334 36.223 29.631 35.927 30.001 35.927 L 35.927 35.927 Z M 6.148 14.296 C 5.186 14.296 4.445 15.037 4.445 16 L 4.445 19.63 L 51.112 19.63 L 51.112 16 C 51.112 15.111 50.371 14.296 49.408 14.296 L 6.148 14.296 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "100%",
      height: "100%",
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
    width: 57.086,
    height: 61.999,
    viewBox: "0 0 57.086 61.999",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 55.672 12.563 L 37.282 12.563 L 46.535 6.202 C 47.09 5.824 47.366 5.153 47.241 4.49 C 47.124 3.836 46.621 3.304 45.975 3.151 L 33.272 0.048 C 32.399 -0.162 31.509 0.338 31.247 1.191 L 27.98 11.639 L 24.709 1.191 C 24.439 0.338 23.552 -0.162 22.685 0.048 L 9.982 3.151 C 9.328 3.304 8.833 3.836 8.708 4.49 C 8.591 5.153 8.867 5.821 9.421 6.202 L 18.675 12.563 L 1.413 12.563 C 0.634 12.563 0 13.198 0 13.977 L 0 24.882 C 0 25.662 0.634 26.296 1.413 26.296 L 2.483 26.296 L 2.483 60.586 C 2.483 61.365 3.117 61.999 3.896 61.999 L 53.196 61.999 C 53.975 61.999 54.609 61.365 54.609 60.586 L 54.609 26.293 L 55.673 26.293 C 56.452 26.293 57.086 25.659 57.086 24.88 L 57.083 13.974 C 57.083 13.195 56.452 12.564 55.673 12.564 L 55.672 12.563 Z M 22.665 16.951 L 22.665 23.469 L 5.309 23.467 L 2.826 23.467 L 2.826 15.387 L 22.665 15.387 L 22.665 16.951 Z M 22.665 26.293 L 22.665 36.733 L 5.309 36.733 L 5.309 26.293 L 22.665 26.293 Z M 5.309 59.17 L 5.309 48.577 L 22.665 48.577 L 22.665 59.17 L 5.309 59.17 Z M 34.444 48.577 L 51.785 48.577 L 51.785 59.17 L 34.444 59.17 L 34.444 48.577 Z M 51.785 36.732 L 34.444 36.732 L 34.444 26.292 L 51.785 26.292 L 51.785 36.732 Z M 54.259 23.465 L 34.443 23.465 L 34.443 15.386 L 54.259 15.386 L 54.259 23.465 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "100%",
      height: "100%",
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
    width: 94.346,
    height: 80,
    viewBox: "0 0 94.346 80",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.301 80 L 12.313 80 L 12.313 34.76 L 18.301 34.76 L 18.301 80 Z M 75.052 36.666 C 77.442 36.666 79.706 37.83 81.09 39.764 C 81.829 40.786 84.109 44.135 85.571 48.098 L 90.761 48.098 C 92.742 48.098 94.345 49.717 94.346 51.682 C 94.346 53.018 93.606 54.245 92.427 54.858 L 90.761 55.738 C 91.012 57.012 91.122 58.364 91.122 59.779 L 91.122 65.959 C 91.122 66.053 91.122 66.163 91.106 66.258 L 91.106 76.871 C 91.106 78.6 89.707 80 87.978 80 L 82.112 80 C 80.383 80 78.984 78.6 78.983 76.871 L 78.983 75.519 C 72.804 75.88 65.163 76.242 58.842 76.242 C 52.521 76.242 44.863 75.88 38.684 75.519 L 38.684 76.871 C 38.683 78.6 37.284 80 35.555 80 L 29.69 80 C 27.961 80 26.546 78.601 26.546 76.871 L 26.546 59.779 C 26.546 58.364 26.656 57.013 26.907 55.739 L 25.24 54.858 C 24.061 54.245 23.322 53.019 23.322 51.683 C 23.322 49.717 24.926 48.098 26.907 48.098 L 32.096 48.098 C 33.558 44.12 35.838 40.786 36.577 39.764 C 37.961 37.83 40.225 36.666 42.615 36.666 L 75.052 36.666 Z M 34.155 56.635 C 31.483 56.572 30.932 57.798 30.822 58.537 C 30.586 60.125 31.703 62.799 33.479 64.858 C 35.272 66.934 37.473 68.082 39.658 68.082 C 44.297 68.082 45.807 65.157 45.948 63.616 L 45.947 63.317 C 45.555 58.915 37.253 56.729 34.155 56.635 Z M 50.774 60.598 C 48.793 60.598 47.174 62.28 47.174 64.34 C 47.174 66.399 48.794 68.082 50.774 68.082 L 66.892 68.082 C 68.873 68.082 70.492 66.399 70.492 64.34 C 70.492 62.28 68.873 60.598 66.892 60.598 L 50.774 60.598 Z M 83.511 56.635 C 80.43 56.729 72.112 58.915 71.719 63.317 L 71.719 63.616 C 71.86 65.157 73.354 68.082 78.008 68.082 C 80.193 68.082 82.394 66.934 84.187 64.858 C 85.963 62.799 87.08 60.125 86.844 58.537 C 86.734 57.798 86.152 56.588 83.511 56.635 Z M 42.614 39.811 C 41.231 39.811 39.926 40.487 39.124 41.604 C 38.495 42.469 36.64 45.189 35.335 48.475 C 41.86 48.302 53.07 48.098 58.841 48.098 C 64.611 48.098 75.838 48.302 82.348 48.475 C 81.027 45.188 79.155 42.468 78.542 41.604 C 77.74 40.487 76.435 39.811 75.052 39.811 L 42.614 39.811 Z M 26.541 0 C 28.837 0 30.692 1.856 30.692 4.151 L 30.692 27.783 C 30.692 30.063 28.837 31.918 26.541 31.918 L 4.151 31.918 C 1.856 31.918 0 30.063 0 27.783 L 0 4.151 C 0 1.856 1.856 0 4.151 0 L 26.541 0 Z M 11.116 6.398 C 10.252 6.399 9.544 7.106 9.544 7.971 L 9.544 23.836 C 9.544 24.716 10.252 25.408 11.116 25.408 C 11.981 25.408 12.688 24.716 12.688 23.836 L 12.688 18.191 L 18.616 18.191 C 21.242 18.191 23.396 16.053 23.396 13.428 L 23.396 11.179 C 23.396 8.553 21.242 6.398 18.616 6.398 L 11.116 6.398 Z M 18.616 9.544 C 19.512 9.544 20.252 10.283 20.252 11.179 L 20.252 13.428 C 20.252 14.324 19.512 15.047 18.616 15.047 L 12.688 15.047 L 12.688 9.544 L 18.616 9.544 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: 0,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(35,31,32)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 59,
      height: 59,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 51.625,
    height: 51.625,
    viewBox: "0 0 51.625 51.625",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.688,
      top: 3.688,
      width: 51.625,
      height: 51.625
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48.366 20.009 C 47.497 19.101 46.598 18.166 46.26 17.343 C 45.946 16.589 45.928 15.34 45.909 14.13 C 45.875 11.881 45.838 9.332 44.066 7.559 C 42.293 5.787 39.744 5.75 37.495 5.716 C 36.285 5.697 35.036 5.679 34.282 5.365 C 33.462 5.027 32.524 4.128 31.616 3.259 C 30.025 1.731 28.219 0 25.813 0 C 23.406 0 21.602 1.731 20.009 3.259 C 19.101 4.128 18.166 5.027 17.343 5.365 C 16.594 5.679 15.34 5.697 14.13 5.716 C 11.881 5.75 9.332 5.787 7.559 7.559 C 5.787 9.332 5.762 11.881 5.716 14.13 C 5.697 15.34 5.679 16.589 5.365 17.343 C 5.027 18.163 4.128 19.101 3.259 20.009 C 1.731 21.6 0 23.406 0 25.813 C 0 28.219 1.731 30.023 3.259 31.616 C 4.128 32.524 5.027 33.459 5.365 34.282 C 5.679 35.036 5.697 36.285 5.716 37.495 C 5.75 39.744 5.787 42.293 7.559 44.066 C 9.332 45.838 11.881 45.875 14.13 45.909 C 15.34 45.928 16.589 45.946 17.343 46.26 C 18.163 46.598 19.101 47.497 20.009 48.366 C 21.6 49.894 23.406 51.625 25.813 51.625 C 28.219 51.625 30.023 49.894 31.616 48.366 C 32.524 47.497 33.459 46.598 34.282 46.26 C 35.036 45.946 36.285 45.928 37.495 45.909 C 39.744 45.875 42.293 45.838 44.066 44.066 C 45.838 42.293 45.875 39.744 45.909 37.495 C 45.928 36.285 45.946 35.036 46.26 34.282 C 46.598 33.462 47.497 32.524 48.366 31.616 C 49.894 30.025 51.625 28.219 51.625 25.813 C 51.625 23.406 49.894 21.602 48.366 20.009 Z M 36.336 21.586 L 23.429 34.492 C 23.258 34.663 23.055 34.799 22.831 34.892 C 22.607 34.985 22.367 35.033 22.125 35.033 C 21.883 35.033 21.643 34.985 21.419 34.892 C 21.195 34.799 20.992 34.663 20.821 34.492 L 15.289 28.961 C 14.943 28.615 14.749 28.146 14.749 27.656 C 14.749 27.167 14.943 26.698 15.289 26.352 C 15.635 26.006 16.104 25.811 16.594 25.811 C 17.083 25.811 17.552 26.006 17.898 26.352 L 22.125 30.581 L 33.727 18.977 C 33.898 18.805 34.101 18.67 34.325 18.577 C 34.549 18.484 34.789 18.436 35.031 18.436 C 35.274 18.436 35.513 18.484 35.737 18.577 C 35.961 18.67 36.164 18.805 36.336 18.977 C 36.507 19.148 36.643 19.351 36.736 19.575 C 36.828 19.799 36.876 20.039 36.876 20.281 C 36.876 20.524 36.828 20.763 36.736 20.987 C 36.643 21.211 36.507 21.414 36.336 21.586 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "100%",
      height: "100%",
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
    width: 65.489,
    height: 70,
    viewBox: "0 0 65.489 70",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.267 70 L 13.3 70 L 13.3 0 L 17.267 0 L 17.267 70 Z M 52.188 70 L 48.3 70 L 48.3 0 L 52.188 0 L 52.188 70 Z M 10.967 62.223 L 0 62.223 L 0 54.444 L 10.967 54.444 L 10.967 62.223 Z M 45.967 62.223 L 19.522 62.223 L 19.522 54.444 L 45.967 54.444 L 45.967 62.223 Z M 65.411 62.223 L 54.444 62.223 L 54.444 54.444 L 65.411 54.444 L 65.411 62.223 Z M 11.044 46.667 L 0.078 46.667 L 0.078 38.889 L 11.044 38.889 L 11.044 46.667 Z M 45.889 46.667 L 19.444 46.667 L 19.444 38.889 L 45.889 38.889 L 45.889 46.667 Z M 65.489 46.667 L 54.522 46.667 L 54.522 38.889 L 65.489 38.889 L 65.489 46.667 Z M 11.044 31.111 L 0.078 31.111 L 0.078 23.333 L 11.044 23.333 L 11.044 31.111 Z M 45.967 31.111 L 19.522 31.111 L 19.522 23.333 L 45.967 23.333 L 45.967 31.111 Z M 65.489 31.111 L 54.522 31.111 L 54.522 23.333 L 65.489 23.333 L 65.489 31.111 Z M 11.044 15.556 L 0.078 15.556 L 0.078 7.778 L 11.044 7.778 L 11.044 15.556 Z M 45.967 15.556 L 19.522 15.556 L 19.522 7.778 L 45.967 7.778 L 45.967 15.556 Z M 65.489 15.556 L 54.522 15.556 L 54.522 7.778 L 65.489 7.778 L 65.489 15.556 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "100%",
      height: "100%",
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
    width: 59,
    height: 57.451,
    viewBox: "0 0 59 57.451",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 58.864 50.634 L 52.514 21.768 C 51.947 19.194 49.666 17.362 47.034 17.362 L 38.199 17.362 C 39.555 15.549 40.368 13.307 40.368 10.869 C 40.368 4.867 35.5 0 29.499 0 C 23.497 0 18.63 4.867 18.63 10.869 C 18.63 13.307 19.442 15.548 20.798 17.362 L 11.964 17.362 C 9.328 17.362 7.048 19.194 6.484 21.768 L 0.133 50.634 C -0.637 54.136 2.029 57.451 5.613 57.451 L 53.387 57.451 C 56.971 57.451 59.637 54.134 58.867 50.634 L 58.864 50.634 Z M 29.496 7.764 C 31.209 7.764 32.601 9.156 32.601 10.869 C 32.601 12.582 31.209 13.974 29.496 13.974 C 27.782 13.974 26.39 12.582 26.39 10.869 C 26.39 9.156 27.782 7.764 29.496 7.764 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "100%",
      height: "100%",
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
    width: 65.044,
    height: 65.000,
    viewBox: "0 0 65.044 65.000",
    fill: "none",
    style: { position: "relative", width: "100%", height: "100%", flexShrink: 1 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 25.665 0 C 29.651 0 33.302 1.438 36.133 3.821 C 39.671 6.805 41.916 11.269 41.916 16.252 C 41.916 20.198 40.505 23.822 38.162 26.637 C 37.467 27.472 36.69 28.237 35.846 28.916 L 35.848 28.919 C 44.953 32.862 51.332 41.934 51.332 52.48 C 51.332 53.949 50.954 55.315 50.241 56.57 C 48.937 58.868 46.35 60.855 42.809 62.257 C 36.01 64.945 25.421 65.685 16.702 64.356 C 11.412 63.552 6.807 61.949 3.943 59.752 C 1.365 57.774 0 55.293 0 52.48 C 0 41.931 6.379 32.862 15.484 28.919 C 11.782 25.939 9.414 21.37 9.414 16.254 C 9.414 7.283 16.697 0 25.665 0 Z M 41.87 0.003 C 50.043 0.003 56.677 6.64 56.677 14.81 C 56.677 19.262 54.708 23.257 51.594 25.975 C 59.532 29.653 65.044 37.695 65.044 47.014 C 65.044 49.82 63.584 52.288 60.817 54.184 C 58.98 55.442 56.468 56.457 53.576 57.186 C 54.241 55.717 54.585 54.147 54.585 52.486 C 54.585 42.232 49.234 33.218 41.177 28.084 C 43.685 24.802 45.171 20.703 45.171 16.261 C 45.171 10.279 42.474 4.924 38.229 1.344 C 37.962 1.118 37.69 0.903 37.41 0.689 L 37.411 0.686 C 38.819 0.241 40.316 0.003 41.87 0.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: icon=mapMarker
    "icon=mapMarker": __body0,
    // figma: icon=duration
    "icon=duration": __body1,
    // figma: icon=parsail
    "icon=parsail": __body2,
    // figma: icon=user
    "icon=user": __body3,
    // figma: icon=calendar
    "icon=calendar": __body4,
    // figma: icon=gear
    "icon=gear": __body5,
    // figma: icon=info
    "icon=info": __body6,
    // figma: icon=camera
    "icon=camera": __body7,
    // figma: icon=food
    "icon=food": __body8,
    // figma: icon=dog
    "icon=dog": __body9,
    // figma: icon=seat
    "icon=seat": __body10,
    // figma: icon=pay
    "icon=pay": __body11,
    // figma: icon=gift
    "icon=gift": __body12,
    // figma: icon=parking
    "icon=parking": __body13,
    // figma: icon=vip
    "icon=vip": __body14,
    // figma: icon=track
    "icon=track": __body15,
    // figma: icon=weight
    "icon=weight": __body16,
    // figma: icon=group
    "icon=group": __body17
  };
  return (__impls[__vkey_IconSet2(props)] ?? __body0)();
}

// figma node: 7043:6100 Instagram (2 variants)
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

// figma node: 7043:6095 Mask group
function MaskGroup(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 35,
      height: 35,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 35,
      height: 35,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 35,
    height: 29.167,
    viewBox: "0 0 35 29.167",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 2.333,
      width: 35,
      height: 29.167
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 33.848 13.867 C 33.569 14.182 32.887 14.485 32.857 14.728 L 32.86 27.359 C 32.6 28.253 31.927 28.778 31.116 29.167 L 3.783 29.122 C 2.865 28.571 2.229 28.051 2.13 26.93 C 1.79 23.039 2.395 18.673 2.137 14.73 L 2.061 14.512 C 0.768 13.644 -0.225 12.234 0.044 10.615 C 1.14 7.83 1.642 4.588 2.769 1.842 C 3.08 1.084 3.477 0.464 4.181 0 L 30.921 0.05 C 31.128 0.186 31.348 0.309 31.524 0.485 C 32.434 1.395 33.526 6.015 33.955 7.492 C 34.69 10.013 35.936 11.493 33.848 13.865 L 33.848 13.867 Z M 30.359 14.954 C 28.583 14.954 26.555 13.877 26.231 11.426 C 25.349 16.127 18.842 16.305 17.578 11.72 C 16.561 15.458 11.538 16.309 9.476 12.941 L 8.852 11.575 C 8.436 14.197 6.417 14.952 4.497 14.952 L 4.587 21.144 L 4.678 26.169 C 4.895 26.619 5.456 26.693 5.909 26.72 L 28.948 26.72 C 29.91 26.631 30.247 26.453 30.359 25.466 L 30.359 14.954 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.667,
    height: 10.500,
    viewBox: "0 0 11.667 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.833,
      top: 18.667,
      width: 11.667,
      height: 10.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.742 6.466 L 5.91 6.466 L 5.91 4.16 L 11.575 4.16 C 12.601 9.737 4.781 12.856 1.162 8.331 C -3.008 3.12 5.03 -2.956 9.8 1.608 L 8.214 3.098 C 6.783 2.389 5.702 2.028 4.158 2.779 C 1.928 3.863 2.244 7.286 4.703 8.001 C 6.334 8.475 8.017 7.951 8.742 6.468 L 8.742 6.466 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
}

// figma node: 7043:6960 Mask group
function MaskGroup2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 29,
      height: 29,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29,
      height: 29,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.867,
      top: 0.967,
      width: 21.267,
      height: 28.147,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.757,
    height: 13.761,
    viewBox: "0 0 8.757 13.761",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.502,
      top: 0,
      width: 8.757,
      height: 13.761
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.911 0.001 C 7.581 0.204 8 0.537 8.11 1.286 C 8.268 4.51 8.644 7.742 8.746 10.969 C 8.778 11.981 8.812 13.313 7.686 13.682 C 6.731 13.994 6.118 13.328 5.611 12.594 C 3.641 9.737 2.021 6.426 0.101 3.514 C -0.425 2.035 1.228 1.388 2.274 0.98 C 3.458 0.518 4.788 0.164 6.051 0.057 L 6.177 0 L 6.911 0 L 6.911 0.001 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.506,
    height: 9.382,
    viewBox: "0 0 7.506 9.382",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.753,
      top: 18.765,
      width: 7.506,
      height: 9.382
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.221 9.376 C 5.999 9.362 5.763 9.396 5.542 9.376 C 4.312 9.269 1.293 8.224 0.446 7.338 C -0.302 6.557 -0.002 5.848 0.56 5.107 C 1.769 3.514 3.322 2.041 4.557 0.451 C 5.529 -0.449 7.225 0.071 7.468 1.366 C 7.378 3.404 7.585 5.537 7.47 7.565 C 7.451 7.904 7.413 8.339 7.253 8.635 C 7.019 9.065 6.654 9.199 6.221 9.377 L 6.221 9.376 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.757,
    height: 8.131,
    viewBox: "0 0 8.757 8.131",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.51,
      top: 8.131,
      width: 8.757,
      height: 8.131
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.79 0.003 C 5.143 -0.023 5.603 0.154 5.879 0.373 C 6.876 1.166 8.857 4.057 8.753 5.364 C 8.676 6.331 8.044 6.508 7.288 6.736 C 5.565 7.257 3.745 7.557 2.023 8.102 C 1.255 8.241 0.519 7.877 0.182 7.146 C -0.171 6.383 0.03 5.956 0.439 5.317 C 1.337 3.916 2.705 1.938 3.75 0.673 C 4.033 0.33 4.324 0.037 4.792 0.003 L 4.79 0.003 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.382,
    height: 7.506,
    viewBox: "0 0 9.382 7.506",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 12.51,
      width: 9.382,
      height: 7.506
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.757 0.004 C 2.092 -0.025 2.43 0.119 2.746 0.225 C 4.418 0.783 6.633 1.657 8.231 2.393 C 9.554 3.002 9.78 4.425 8.682 5.368 C 6.712 6.044 4.699 6.767 2.675 7.303 C 1.903 7.507 1.235 7.724 0.61 7.05 C -0.262 6.108 -0.039 2.701 0.297 1.512 C 0.505 0.777 0.885 0.079 1.756 0.004 L 1.757 0.004 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.757,
    height: 8.131,
    viewBox: "0 0 8.757 8.131",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.51,
      top: 17.514,
      width: 8.757,
      height: 8.131
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.293 0.021 C 1.504 -0.012 1.794 -0.005 2.005 0.033 C 3.845 0.739 5.886 1.184 7.706 1.909 C 8.579 2.258 8.953 2.861 8.657 3.8 C 8.301 4.935 6.119 7.756 4.95 8.067 C 3.944 8.334 3.582 7.733 3.105 7.03 C 2.061 5.492 1.151 3.854 0.145 2.291 C -0.299 1.435 0.331 0.173 1.293 0.022 L 1.293 0.021 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
}

// figma node: 6910:1221 Menu Items (4 variants)
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
      fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(35,31,32)",
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
      fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(35,31,32)",
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
      color: "rgb(169,67,36)",
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
      fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(35,31,32)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Nav Item")), /*#__PURE__*/React.createElement("svg", {
    height: 2,
    viewBox: "0 -1 77 2",
    fill: "none",
    style: {
      position: "relative",
      height: 2,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1 L 0 0 L 77 0 L 77 -1 L 77 -2 L 0 -2 L 0 -1 Z",
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
      fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(35,31,32)",
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
    viewBox: "0 -1 104 2",
    fill: "none",
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      color: "rgb(169,67,36)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1 L 0 0 L 104 0 L 104 -1 L 104 -2 L 0 -2 L 0 -1 Z",
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

// figma node: 9273:481 message
function Message(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      position: "relative",
      color: "var(--color-icon-default)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 13.500,
    viewBox: "0 0 14 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1.25,
      width: 14,
      height: 13.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.5 2.867 C 12.5 2.501 12.357 2.152 12.105 1.896 C 11.855 1.641 11.517 1.5 11.167 1.5 L 2.833 1.5 C 2.483 1.5 2.145 1.641 1.895 1.896 C 1.643 2.152 1.5 2.501 1.5 2.867 L 1.5 8.515 C 1.5 8.881 1.643 9.231 1.895 9.486 C 2.145 9.741 2.483 9.883 2.833 9.883 L 4.917 9.883 L 5.065 9.897 C 5.211 9.927 5.346 9.999 5.451 10.106 L 7 11.681 L 8.549 10.106 L 8.663 10.011 C 8.786 9.928 8.932 9.883 9.083 9.883 L 11.167 9.883 C 11.517 9.883 11.855 9.741 12.105 9.486 C 12.357 9.231 12.5 8.881 12.5 8.515 L 12.5 2.867 Z M 8.389 6.353 C 8.803 6.353 9.138 6.689 9.139 7.103 C 9.139 7.517 8.803 7.853 8.389 7.853 L 4.223 7.853 C 3.808 7.853 3.473 7.517 3.473 7.103 C 3.473 6.689 3.809 6.353 4.223 6.353 L 8.389 6.353 Z M 9.777 3.529 C 10.192 3.529 10.527 3.865 10.527 4.279 C 10.527 4.694 10.192 5.029 9.777 5.029 L 4.223 5.029 C 3.808 5.029 3.473 4.694 3.473 4.279 C 3.473 3.865 3.808 3.529 4.223 3.529 L 9.777 3.529 Z M 14 8.515 C 14 9.271 13.705 9.999 13.175 10.538 C 12.645 11.077 11.922 11.383 11.167 11.383 L 9.397 11.383 L 7.534 13.276 C 7.393 13.419 7.201 13.5 7 13.5 C 6.799 13.5 6.607 13.419 6.466 13.276 L 4.603 11.383 L 2.833 11.383 C 2.078 11.383 1.355 11.077 0.825 10.538 C 0.295 9.999 0 9.271 0 8.515 L 0 2.867 C 0 2.111 0.296 1.383 0.825 0.845 C 1.355 0.306 2.078 0 2.833 0 L 11.167 0 C 11.922 0 12.645 0.306 13.175 0.845 C 13.704 1.383 14 2.111 14 2.867 L 14 8.515 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 7043:6074 Tripadvisor (2 variants)
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 87.326,
      top: 5.278,
      width: 326.875,
      height: 238.098,
      color: "rgb(250,196,21)"
    , width: 326.875, height: 238.098, borderRadius: 53.914, backgroundColor: "currentColor"}
  }), /*#__PURE__*/React.createElement("svg", {
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

// figma node: 9301:1592 Final Home - Desktop
function FinalHomeDesktop(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1512,
      height: 5135,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1512,
      height: 720,
      overflow: "hidden",
      background: "linear-gradient(0deg, rgb(0,0,0) 0.00%, rgba(0,0,0,0.35) 15.11%, rgba(0,0,0,0.12) 42.69%), url(/ufo/x1.webp) center / cover no-repeat"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 293,
      width: 1512,
      display: "flex",
      flexDirection: "column",
      padding: "0px 80px 0px 80px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
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
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 576,
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      lineHeight: "100%",
      color: "rgb(151,201,61)",
      flexShrink: 0
    }
  }, "UFO Parasail"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 64,
      lineHeight: "100%",
      color: "rgb(242,240,239)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(255,255,255)"
    }
  }, "See Hawaii"), "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(255,255,255)"
    }
  }, "From Above")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 622,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 22,
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "See Hawaii from a whole new perspective. Choose Maui or Kona, pick your flight, and get ready for an unforgettable day on the water.")), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement(Button2, {
    style: {
      position: "relative",
      height: 48,
      flexGrow: 1,
      width: "auto"
    },
    text1: "Explore Maui",
    type: "secondary",
    state: "default",
    size: "lg",
    width: "full width"
  }), /*#__PURE__*/React.createElement(Button2, {
    style: {
      position: "relative",
      height: 48,
      flexGrow: 1,
      width: "auto"
    },
    text1: "Explore Kona",
    type: "secondary",
    state: "default",
    size: "lg",
    width: "full width"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 814,
      width: 1512,
      height: 812,
      backgroundColor: "rgb(247,251,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 75,
      top: 45,
      width: 1362,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(29,48,101)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "start your adventure"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 48,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(23,29,28)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Choose your island")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 139,
      width: 1362,
      height: 24,
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgb(23,29,28)"
    }
  }, "Explore local parasailing options, availability, check-in details, and everything you need to know before booking."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 116,
      top: 180,
      width: 1280,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      padding: "24px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 32,
      backgroundColor: "rgb(255,255,255)",
      backdropFilter: "blur(18px)",
      boxShadow: "inset 0 0 0 1px rgba(18,136,214,0.2), 0px 0px 40px -12px rgba(0,61,102,0.102)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 303,
      overflow: "hidden",
      borderRadius: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgba(18,136,214,0.2)"
    , width: 564, height: 303, borderRadius: 16, backgroundColor: "currentColor"}
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 16 1 L 548 1 L 548 0 L 548 -1 L 16 -1 L 16 0 Z M 564 16 L 563 16 L 563 287 L 564 287 L 565 287 L 565 16 L 564 16 Z M 548 303 L 548 302 L 16 302 L 16 303 L 16 304 L 548 304 L 548 303 Z M 0 287 L 1 287 L 1 16 L 0 16 L -1 16 L -1 287 L 0 287 Z M 16 303 L 16 302 C 7.716 302 1 295.284 1 287 L 0 287 L -1 287 C -1 296.389 6.611 304 16 304 L 16 303 Z M 564 287 L 563 287 C 563 295.284 556.284 302 548 302 L 548 303 L 548 304 C 557.389 304 565 296.389 565 287 L 564 287 Z M 548 0 L 548 1 C 556.284 1 563 7.716 563 16 L 564 16 L 565 16 C 565 6.611 557.389 -1 548 -1 L 548 0 Z M 16 0 L 16 -1 C 6.611 -1 -1 6.611 -1 16 L 0 16 L 1 16 C 1 7.716 7.716 1 16 1 L 16 0 Z",
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
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 34,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(0,61,102)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "K\u0101\u2019anapali Beach, Maui"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(0,61,102)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Board via beach & zodiac from Kaanapali Beach")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 45,
      borderRadius: 999,
      backgroundColor: "rgb(29,48,101)",
      boxShadow: "0px 0px 20px 0px rgba(0,61,102,0.251)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(247,251,255)",
      flexShrink: 0
    }
  }, "View K\u0101\u2019anapali Beach, Maui Activities "))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 32,
      backgroundColor: "rgb(255,255,255)",
      backdropFilter: "blur(18px)",
      boxShadow: "inset 0 0 0 1px rgba(18,136,214,0.2), 0px 0px 40px -12px rgba(0,61,102,0.102)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 303,
      overflow: "hidden",
      borderRadius: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgba(18,136,214,0.2)"
    , width: 564, height: 303, borderRadius: 16, backgroundColor: "currentColor"}
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 16 1 L 548 1 L 548 0 L 548 -1 L 16 -1 L 16 0 Z M 564 16 L 563 16 L 563 287 L 564 287 L 565 287 L 565 16 L 564 16 Z M 548 303 L 548 302 L 16 302 L 16 303 L 16 304 L 548 304 L 548 303 Z M 0 287 L 1 287 L 1 16 L 0 16 L -1 16 L -1 287 L 0 287 Z M 16 303 L 16 302 C 7.716 302 1 295.284 1 287 L 0 287 L -1 287 C -1 296.389 6.611 304 16 304 L 16 303 Z M 564 287 L 563 287 C 563 295.284 556.284 302 548 302 L 548 303 L 548 304 C 557.389 304 565 296.389 565 287 L 564 287 Z M 548 0 L 548 1 C 556.284 1 563 7.716 563 16 L 564 16 L 565 16 C 565 6.611 557.389 -1 548 -1 L 548 0 Z M 16 0 L 16 -1 C 6.611 -1 -1 6.611 -1 16 L 0 16 L 1 16 C 1 7.716 7.716 1 16 1 L 16 0 Z",
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
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 34,
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(0,61,102)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Kona, Big Island"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(0,61,102)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Board directly from the dock at Kailua-Kona Pier")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 45,
      borderRadius: 999,
      backgroundColor: "rgb(119,184,240)",
      boxShadow: "0px 0px 20px 0px rgba(0,61,102,0.251)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(29,48,101)",
      flexShrink: 0
    }
  }, "View Kona, Big Island Activities")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1185,
      top: 91,
      borderRadius: 32,
      backgroundColor: "rgb(151,201,61)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 28,
      height: 28,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Message, {
    style: {
      transform: "scale(1.750, 1.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(23,29,28)",
      flexShrink: 0
    }
  }, "Have a question? Text us"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 4671,
      width: 1512,
      backgroundColor: "rgb(29,48,101)",
      display: "flex",
      flexDirection: "column",
      gap: 25,
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 335,
      display: "flex",
      flexDirection: "column",
      gap: 35,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15,
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
      gap: 15,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-fb8be23baf1fdde1",
    style: {
      position: "relative",
      width: 107,
      height: 100,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-8d5a875a4412c65a",
    style: {
      position: "relative",
      width: 175,
      height: 62,
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-59d7623bbbd38226",
    style: {
      position: "relative",
      width: 145.43,
      height: 108,
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 47,
      display: "flex",
      flexDirection: "row",
      gap: 15,
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
      backgroundColor: "rgb(62,169,218)",
      boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Cabin, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(13,32,76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Book Now")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgba(240,240,240,0.12)",
      backdropFilter: "blur(4px)",
      boxShadow: "inset 0 0 0 2px rgb(62,169,218)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Cabin, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Buy Gift Card")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 285,
      display: "flex",
      flexDirection: "column",
      gap: 25,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 13,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 260,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(247,220,158)",
      flexShrink: 0
    }
  }, "Maui"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Maui Parasail"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Maui Fishing"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Banana Boat Rides"))), /*#__PURE__*/React.createElement("div", {
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(247,220,158)",
      flexShrink: 0
    }
  }, "Get in Touch"), /*#__PURE__*/React.createElement("div", {
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
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "pre-wrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Email: ", "flymaui@ufoparasail.net"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Kaanapali Beach, Maui:  ", "2435 Kaanappali Parkway ", "\n", "Lahaina, HI 96761")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 285,
      display: "flex",
      flexDirection: "column",
      gap: 25,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 13,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 260,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(247,220,158)",
      flexShrink: 0
    }
  }, "Kona"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Kona Parasail"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Maui Fishing"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Banana Boat Rides"))), /*#__PURE__*/React.createElement("div", {
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(247,220,158)",
      flexShrink: 0
    }
  }, "Get in Touch"), /*#__PURE__*/React.createElement("div", {
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
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "pre-wrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Email: ", "flykona@ufoparasail.net"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Kona, Big Island:  ", "75-5660 Palani Road Kailua-Kona, HI. 96740")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 260,
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(247,220,158)",
      flexShrink: 0
    }
  }, "Company"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "About UFO"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "FAQ"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Blog"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Shop UFO Gear"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Disconts"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Contact Us"))), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 1362 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(0,113,188)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 1362 0 L 1362 -0.5 L 1362 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
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
      width: 259,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 34.5,
      height: 34.5,
      flexShrink: 0,
      color: "rgb(206,175,120)"
    }
  }, /*#__PURE__*/React.createElement(Facebook, {
    style: {
      transform: "scale(0.067, 0.067)",
      transformOrigin: "0 0",
      color: "rgb(206,175,120)"
    },
    type: "flat"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 39,
      height: 39,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement(Tripadvisor, {
    style: {
      transform: "scale(0.076, 0.076)",
      transformOrigin: "0 0",
      color: "rgb(0,0,0)"
    },
    type: "flat"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 34,
      height: 34,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement(MaskGroup, {
    style: {
      transform: "scale(0.971, 0.971)",
      transformOrigin: "0 0",
      color: "rgb(0,0,0)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement(MaskGroup2, {
    style: {
      transform: "scale(1.241, 1.241)",
      transformOrigin: "0 0",
      color: "rgb(0,0,0)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 34.5,
      height: 34.5,
      flexShrink: 0,
      color: "rgb(206,175,120)"
    }
  }, /*#__PURE__*/React.createElement(Instagram, {
    style: {
      transform: "scale(0.067, 0.067)",
      transformOrigin: "0 0",
      color: "rgb(206,175,120)"
    },
    type: "flat"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36.411,
      height: 36.411,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 36.4114875793457,
      height: 36.4114875793457,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 33.984,
    height: 23.061,
    viewBox: "0 0 33.984 23.061",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.214,
      top: 7.282,
      width: 33.984,
      height: 23.061,
      color: "rgb(247,220,158)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 33.984 9.856 L 33.984 13.197 C 33.846 13.576 33.938 14.046 33.92 14.452 C 33.788 17.502 33.745 21.597 30.005 22.416 C 27.372 22.993 23.807 22.9 21.075 22.957 C 15.962 23.064 10.007 23.242 4.964 22.565 C 1.3 22.073 0.644 20.221 0.278 16.953 L 0.012 13.197 C 0.04 12.065 -0.026 10.923 0.012 9.792 C 0.07 8.037 0.189 5.99 0.562 4.255 C 1.395 0.392 4.51 0.427 7.939 0.219 C 13.058 -0.093 18.409 -0.034 23.531 0.16 C 26.128 0.258 30.7 -0.02 32.457 2.053 C 33.784 3.619 33.918 7.836 33.984 9.856 Z M 13.614 6.645 L 13.614 16.408 L 22.373 11.495 L 13.614 6.645 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(247,220,158)",
      flexShrink: 0
    }
  }, "\xA9 2020 UFO Parasail. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(247,220,158)",
      flexShrink: 0
    }
  }, "Terms of Service"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(247,220,158)",
      flexShrink: 0
    }
  }, "Accessibility"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 3447,
      width: 1512,
      height: 527,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 48,
      padding: "80px 80px 80px 80px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -120,
      top: -120,
      width: 320,
      height: 320,
      borderRadius: "50%",
      filter: "blur(80px)",
      backgroundColor: "rgba(156,199,228,0.102)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1372,
      top: 220,
      width: 280,
      height: 280,
      borderRadius: "50%",
      filter: "blur(80px)",
      backgroundColor: "rgba(18,136,214,0.102)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -78,
      top: 337,
      width: 220,
      height: 220,
      borderRadius: "50%",
      filter: "blur(80px)",
      backgroundColor: "rgba(102,169,215,0.0706)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 48,
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
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(29,48,101)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "WHY fly with UFO"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 48,
      lineHeight: "100%",
      color: "rgb(23,29,28)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Hawaii\u2019s Original Parasailing.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 45,
      borderRadius: 999,
      backgroundColor: "rgb(151,201,61)",
      boxShadow: "0px 0px 20px 0px rgba(88,186,71,0.251)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 28px 14px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(29,48,101)",
      flexShrink: 0
    }
  }, "Learn About UFO Parasail"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-2e3e1c27a4a08e18-c019b6e2",
    style: {
      position: "relative",
      width: 100,
      height: 100,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,61,102)",
      flexShrink: 0
    }
  }, "40+ Years of History"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(0,61,102)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "First established in 1985, pioneer of commercial parasailing in Hawaii.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-60035de53869a77d-2624ecc6",
    style: {
      position: "relative",
      width: 100,
      height: 100,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,61,102)",
      flexShrink: 0
    }
  }, "Experienced Crew"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(0,61,102)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "USCG licensed captains with thousands of combined flight hours.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-7df232af1e509d95-cbf946c6",
    style: {
      position: "relative",
      width: 100,
      height: 100,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,61,102)",
      flexShrink: 0
    }
  }, "Safety Reassurance"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(0,61,102)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Strict maintenance protocols and daily weather assessments.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-6152b173ce232e19-933ab58a",
    style: {
      position: "relative",
      width: 100,
      height: 100,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,61,102)",
      flexShrink: 0
    }
  }, "Two Ways To Fly"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(23,29,28)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Choose Maui or Kona for an island-specific parasailing experience.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 2318,
      width: 1512,
      height: 708,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1512,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      padding: "45px 75px 45px 75px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 124,
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(84,131,0)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Follow the Adventure @ufoparasail"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 48,
      lineHeight: "100%",
      color: "rgb(29,48,101)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "See Your Next Vacation Memory."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.9,
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(23,29,28)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "From first flights to big group celebrations, explore recent moments from Maui and Kona.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-end",
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
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 320,
      height: 420,
      overflow: "hidden",
      borderRadius: 24,
      backdropFilter: "blur(10px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      filter: "drop-shadow(0px 0px 20px rgba(18,136,214,0.102))",
      color: "rgba(18,136,214,0.2)"
    , width: 320, height: 420, borderRadius: 24, backgroundColor: "currentColor"}
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24 0 L 24 1 L 296 1 L 296 0 L 296 -1 L 24 -1 L 24 0 Z M 320 24 L 319 24 L 319 396 L 320 396 L 321 396 L 321 24 L 320 24 Z M 296 420 L 296 419 L 24 419 L 24 420 L 24 421 L 296 421 L 296 420 Z M 0 396 L 1 396 L 1 24 L 0 24 L -1 24 L -1 396 L 0 396 Z M 24 420 L 24 419 C 11.297 419 1 408.703 1 396 L 0 396 L -1 396 C -1 409.807 10.193 421 24 421 L 24 420 Z M 320 396 L 319 396 C 319 408.703 308.703 419 296 419 L 296 420 L 296 421 C 309.807 421 321 409.807 321 396 L 320 396 Z M 296 0 L 296 1 C 308.703 1 319 11.297 319 24 L 320 24 L 321 24 C 321 10.193 309.807 -1 296 -1 L 296 0 Z M 24 0 L 24 -1 C 10.193 -1 -1 10.193 -1 24 L 0 24 L 1 24 C 1 11.297 11.297 1 24 1 L 24 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 320,
      height: 420,
      overflow: "hidden",
      borderRadius: 24,
      backdropFilter: "blur(10px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      filter: "drop-shadow(0px 0px 20px rgba(18,136,214,0.102))",
      color: "rgba(18,136,214,0.2)"
    , width: 320, height: 420, borderRadius: 24, backgroundColor: "currentColor"}
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24 0 L 24 1 L 296 1 L 296 0 L 296 -1 L 24 -1 L 24 0 Z M 320 24 L 319 24 L 319 396 L 320 396 L 321 396 L 321 24 L 320 24 Z M 296 420 L 296 419 L 24 419 L 24 420 L 24 421 L 296 421 L 296 420 Z M 0 396 L 1 396 L 1 24 L 0 24 L -1 24 L -1 396 L 0 396 Z M 24 420 L 24 419 C 11.297 419 1 408.703 1 396 L 0 396 L -1 396 C -1 409.807 10.193 421 24 421 L 24 420 Z M 320 396 L 319 396 C 319 408.703 308.703 419 296 419 L 296 420 L 296 421 C 309.807 421 321 409.807 321 396 L 320 396 Z M 296 0 L 296 1 C 308.703 1 319 11.297 319 24 L 320 24 L 321 24 C 321 10.193 309.807 -1 296 -1 L 296 0 Z M 24 0 L 24 -1 C 10.193 -1 -1 10.193 -1 24 L 0 24 L 1 24 C 1 11.297 11.297 1 24 1 L 24 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 320,
      height: 420,
      overflow: "hidden",
      borderRadius: 16,
      backdropFilter: "blur(10px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      filter: "drop-shadow(0px 0px 20px rgba(18,136,214,0.102))",
      color: "rgba(18,136,214,0.2)"
    , width: 320, height: 420, borderRadius: 16, backgroundColor: "currentColor"}
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 16 1 L 304 1 L 304 0 L 304 -1 L 16 -1 L 16 0 Z M 320 16 L 319 16 L 319 404 L 320 404 L 321 404 L 321 16 L 320 16 Z M 304 420 L 304 419 L 16 419 L 16 420 L 16 421 L 304 421 L 304 420 Z M 0 404 L 1 404 L 1 16 L 0 16 L -1 16 L -1 404 L 0 404 Z M 16 420 L 16 419 C 7.716 419 1 412.284 1 404 L 0 404 L -1 404 C -1 413.389 6.611 421 16 421 L 16 420 Z M 320 404 L 319 404 C 319 412.284 312.284 419 304 419 L 304 420 L 304 421 C 313.389 421 321 413.389 321 404 L 320 404 Z M 304 0 L 304 1 C 312.284 1 319 7.716 319 16 L 320 16 L 321 16 C 321 6.611 313.389 -1 304 -1 L 304 0 Z M 16 0 L 16 -1 C 6.611 -1 -1 6.611 -1 16 L 0 16 L 1 16 C 1 7.716 7.716 1 16 1 L 16 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 320,
      height: 420,
      overflow: "hidden",
      borderRadius: 24,
      backdropFilter: "blur(10px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      filter: "drop-shadow(0px 0px 20px rgba(18,136,214,0.102))",
      color: "rgba(18,136,214,0.2)"
    , width: 320, height: 420, borderRadius: 24, backgroundColor: "currentColor"}
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24 0 L 24 1 L 296 1 L 296 0 L 296 -1 L 24 -1 L 24 0 Z M 320 24 L 319 24 L 319 396 L 320 396 L 321 396 L 321 24 L 320 24 Z M 296 420 L 296 419 L 24 419 L 24 420 L 24 421 L 296 421 L 296 420 Z M 0 396 L 1 396 L 1 24 L 0 24 L -1 24 L -1 396 L 0 396 Z M 24 420 L 24 419 C 11.297 419 1 408.703 1 396 L 0 396 L -1 396 C -1 409.807 10.193 421 24 421 L 24 420 Z M 320 396 L 319 396 C 319 408.703 308.703 419 296 419 L 296 420 L 296 421 C 309.807 421 321 409.807 321 396 L 320 396 Z M 296 0 L 296 1 C 308.703 1 319 11.297 319 24 L 320 24 L 321 24 C 321 10.193 309.807 -1 296 -1 L 296 0 Z M 24 0 L 24 -1 C 10.193 -1 -1 10.193 -1 24 L 0 24 L 1 24 C 1 11.297 11.297 1 24 1 L 24 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgba(255,255,255,0.2)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgba(255,255,255,0.2)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgba(255,255,255,0.2)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgba(255,255,255,0.2)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgba(255,255,255,0.2)",
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 56,
      top: 389,
      width: 1402,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 45,
      height: 45,
      borderRadius: 22.5,
      backgroundColor: "rgba(38,64,137,0.45)",
      backdropFilter: "blur(9.375px)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.5,
      height: 22.5,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.625,
    height: 11.250,
    viewBox: "0 0 5.625 11.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.438,
      top: 5.625,
      width: 5.625,
      height: 11.25,
      color: "rgb(38,64,137)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.962 11.913 C 5.328 12.279 5.922 12.279 6.288 11.913 C 6.654 11.547 6.654 10.953 6.288 10.587 L 5.625 11.25 L 4.962 11.913 Z M 0 5.625 L -0.663 4.962 L -1.326 5.625 L -0.663 6.288 L 0 5.625 Z M 6.288 0.663 C 6.654 0.297 6.654 -0.297 6.288 -0.663 C 5.922 -1.029 5.328 -1.029 4.962 -0.663 L 5.625 0 L 6.288 0.663 Z M 5.625 11.25 L 6.288 10.587 L 0.663 4.962 L 0 5.625 L -0.663 6.288 L 4.962 11.913 L 5.625 11.25 Z M 0 5.625 L 0.663 6.288 L 6.288 0.663 L 5.625 0 L 4.962 -0.663 L -0.663 4.962 L 0 5.625 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 45,
      height: 45,
      borderRadius: 22.5,
      backgroundColor: "rgba(38,64,137,0.45)",
      backdropFilter: "blur(9.375px)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.5,
      height: 22.5,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.625,
    height: 11.250,
    viewBox: "0 0 5.625 11.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.437,
      top: 5.625,
      width: 5.625,
      height: 11.25,
      color: "rgb(38,64,137)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.663 10.587 C -1.029 10.953 -1.029 11.547 -0.663 11.913 C -0.297 12.279 0.297 12.279 0.663 11.913 L 0 11.25 L -0.663 10.587 Z M 5.625 5.625 L 6.288 6.288 L 6.951 5.625 L 6.288 4.962 L 5.625 5.625 Z M 0.663 -0.663 C 0.297 -1.029 -0.297 -1.029 -0.663 -0.663 C -1.029 -0.297 -1.029 0.297 -0.663 0.663 L 0 0 L 0.663 -0.663 Z M 0 11.25 L 0.663 11.913 L 6.288 6.288 L 5.625 5.625 L 4.962 4.962 L -0.663 10.587 L 0 11.25 Z M 5.625 5.625 L 6.288 4.962 L 0.663 -0.663 L 0 0 L -0.663 0.663 L 4.962 6.288 L 5.625 5.625 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 3974,
      width: 1513,
      backgroundColor: "rgb(247,251,255)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "64px 75px 64px 75px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 64,
      alignItems: "center",
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
      gap: 24,
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: 1.2000000476837158,
      color: "rgb(29,48,101)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Good to Know Before You Go"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 48,
      lineHeight: "100%",
      color: "rgb(23,29,28)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "First time parasailing? You are in the right place.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 24,
      background: "linear-gradient(rgb(29,48,101),rgb(29,48,101))",
      boxShadow: "0px 4px 14px 0px rgba(37,32,31,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "16px 20px 16px 20px",
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
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 432,
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.2000000476837158,
      color: "rgb(151,201,61)",
      flexShrink: 0
    }
  }, "Need Help Choosing?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 432,
      opacity: 0.91,
      fontFamily: "Edmondsans, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 410,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Not sure which trip fits your group? Call or text us and we\u2019ll help you choose the right charter and answer any trip-planning questions.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      opacity: 0.6,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgba(77,140,204,0.4)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 14,
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
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(151,201,61)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Call"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Edmondsans, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 410,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--color-base-white)",
      flexShrink: 0
    }
  }, "1-800-359-4836")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(151,201,61)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Text"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Edmondsans, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 410,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--color-base-white)",
      flexShrink: 0
    }
  }, "1-808-661-7836"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 18,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Button2, {
    style: {
      position: "relative",
      height: 48,
      flexGrow: 1,
      width: "auto"
    },
    text1: "View All FAQ",
    type: "primary",
    state: "default",
    size: "lg",
    width: "full width"
  }), /*#__PURE__*/React.createElement(Button2, {
    style: {
      position: "relative",
      height: 48,
      flexGrow: 1,
      width: "auto"
    },
    showArrow: false,
    text1: "Send Us a Message",
    type: "secondary",
    state: "default",
    size: "lg",
    width: "fit content"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 56,
      borderRadius: 24,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,113,188,0.3), 0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "22px 28px 22px 28px",
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.2000000476837158,
      color: "rgb(29,48,101)",
      flexGrow: 1
    }
  }, "Do we get wet, and do I need to know how to swim?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
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
      fontSize: 22,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(119,184,240)",
      flexShrink: 0
    }
  }, "\u2212"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.85,
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(23,29,28)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Swimming skills are not required because you wear a secure life vest and take off/land directly on a dry platform. You can stay completely dry if you wish! However, if you are looking for fun, ask your captain for a \u201CUFO Dip\u201D. The captain will gently slow the boat to let your feet and legs splash into the Pacific before reeling you back up.\xA0Dips are completely optional and subject to wind safety."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 56,
      borderRadius: 24,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(229,231,235,0.6), 0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      padding: "22px 28px 22px 28px",
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.2000000476837158,
      color: "rgb(29,48,101)",
      flexGrow: 1
    }
  }, "Is parasailing in Hawaii safe?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
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
      fontSize: 22,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,114,128)",
      flexShrink: 0
    }
  }, "+")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 56,
      borderRadius: 24,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(229,231,235,0.6), 0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      padding: "22px 28px 22px 28px",
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.2000000476837158,
      color: "rgb(29,48,101)",
      flexGrow: 1
    }
  }, "How many times can we go up, and how high do we go?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
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
      fontSize: 22,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,114,128)",
      flexShrink: 0
    }
  }, "+")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 56,
      borderRadius: 24,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(229,231,235,0.6), 0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      padding: "22px 28px 22px 28px",
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(29,48,101)",
      flexShrink: 0
    }
  }, "Where do we check in for Maui or Kona adventures?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
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
      fontSize: 22,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,114,128)",
      flexShrink: 0
    }
  }, "+")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 56,
      borderRadius: 24,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(229,231,235,0.6), 0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      padding: "22px 28px 22px 28px",
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.2000000476837158,
      color: "rgb(29,48,101)",
      flexGrow: 1
    }
  }, "what is your cancellation and trip modification policy?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
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
      fontSize: 22,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,114,128)",
      flexShrink: 0
    }
  }, "+")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 56,
      borderRadius: 24,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(229,231,235,0.6), 0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      padding: "22px 28px 22px 28px",
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.2000000476837158,
      color: "rgb(29,48,101)",
      flexGrow: 1
    }
  }, "Where do trips depart?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
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
      fontSize: 22,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,114,128)",
      flexShrink: 0
    }
  }, "+"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 717,
      width: 1512,
      backgroundColor: "rgb(119,184,240)",
      display: "flex",
      flexDirection: "row",
      padding: "32px 75px 32px 75px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: "rgb(243,244,246)",
      boxShadow: "inset 0 0 0 1px rgb(209,213,219)",
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
      width: 22,
      height: 22,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement(Tripadvisor, {
    style: {
      transform: "scale(0.043, 0.043)",
      transformOrigin: "0 0",
      color: "rgb(0,0,0)"
    },
    type: "flat"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(29,48,101)",
      flexShrink: 0
    }
  }, "USA Today Award"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(16,71,117)",
      flexShrink: 0
    }
  }, "Voted Best Parasail Company, 2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: "rgb(243,244,246)",
      boxShadow: "inset 0 0 0 1px rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet2, {
    style: {
      position: "relative",
      width: 23.334,
      height: 23.334,
      flexShrink: 0
    },
    icon: "parsail"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(29,48,101)",
      flexShrink: 0
    }
  }, "Hawaii Adventures Since 1985"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(16,71,117)",
      flexShrink: 0
    }
  }, "Decades of experience on the water"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: "rgb(243,244,246)",
      boxShadow: "inset 0 0 0 1px rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet2, {
    style: {
      position: "relative",
      width: 28,
      height: 28,
      flexShrink: 0
    },
    icon: "vip"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(29,48,101)",
      flexShrink: 0
    }
  }, "USCG-Certified Vessels"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(16,71,117)",
      flexShrink: 0
    }
  }, "Safety comes first on every flight"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: "rgb(243,244,246)",
      boxShadow: "inset 0 0 0 1px rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet2, {
    style: {
      position: "relative",
      width: 28,
      height: 28,
      flexShrink: 0
    },
    icon: "camera"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(29,48,101)",
      flexShrink: 0
    }
  }, "Thousands of 5-Star Reviews"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(16,71,117)",
      flexShrink: 0
    }
  }, "Loved by families and first-time flyers")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 3026,
      width: 1512,
      height: 421,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1512,
      overflow: "hidden",
      background: "linear-gradient(rgb(247,220,158),rgb(247,220,158))",
      display: "flex",
      flexDirection: "row",
      gap: 48,
      padding: "72px 75px 72px 75px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 580,
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(120,95,36)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Thousands of Five-Star Reviews"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 48,
      lineHeight: "100%",
      color: "rgb(20,20,26)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Guests Arrive Excited, Leave Wanting More."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-1aa5d74d9ba09b7c-c428b9c2",
    style: {
      position: "relative",
      width: 75,
      height: 76,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-29a60e5aec44c154-39e08762",
    style: {
      position: "relative",
      width: 67,
      height: 72.937,
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 713,
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(119,184,240), 0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "25px 25px 25px 25px",
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
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(151,201,61)",
      flexShrink: 0
    }
  }, "\u2605\u2605\u2605\u2605\u2605")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.7699999809265137,
      color: "rgb(23,29,28)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\"We had a wonderful time! My sister has a fear of heights and the tour guides kept her at ease the entire time. Would definitely recommend!\""), /*#__PURE__*/React.createElement("div", {
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "rgb(20,20,26)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "- Savanna C."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(81,126,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Tripadvisor (UFO Parasail)"))), /*#__PURE__*/React.createElement("div", {
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
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(20,20,26)",
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
      width: 22.5,
      height: 22.5,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.625,
    height: 11.250,
    viewBox: "0 0 5.625 11.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.438,
      top: 5.625,
      width: 5.625,
      height: 11.25,
      color: "rgb(20,20,26)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.96 11.915 C 5.327 12.282 5.923 12.282 6.29 11.915 C 6.657 11.548 6.657 10.952 6.29 10.585 L 5.625 11.25 L 4.96 11.915 Z M 0 5.625 L -0.665 4.96 L -1.329 5.625 L -0.665 6.29 L 0 5.625 Z M 6.29 0.665 C 6.657 0.298 6.657 -0.298 6.29 -0.665 C 5.923 -1.032 5.327 -1.032 4.96 -0.665 L 5.625 0 L 6.29 0.665 Z M 5.625 11.25 L 6.29 10.585 L 0.665 4.96 L 0 5.625 L -0.665 6.29 L 4.96 11.915 L 5.625 11.25 Z M 0 5.625 L 0.665 6.29 L 6.29 0.665 L 5.625 0 L 4.96 -0.665 L -0.665 4.96 L 0 5.625 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
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
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(20,20,26)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(220,220,223)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(220,220,223)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(20,20,26)",
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
      width: 22.5,
      height: 22.5,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.625,
    height: 11.250,
    viewBox: "0 0 5.625 11.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.438,
      top: 5.625,
      width: 5.625,
      height: 11.25,
      color: "rgb(20,20,26)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.665 10.585 C -1.032 10.952 -1.032 11.548 -0.665 11.915 C -0.298 12.282 0.298 12.282 0.665 11.915 L 0 11.25 L -0.665 10.585 Z M 5.625 5.625 L 6.29 6.29 L 6.954 5.625 L 6.29 4.96 L 5.625 5.625 Z M 0.665 -0.665 C 0.298 -1.032 -0.298 -1.032 -0.665 -0.665 C -1.032 -0.298 -1.032 0.298 -0.665 0.665 L 0 0 L 0.665 -0.665 Z M 0 11.25 L 0.665 11.915 L 6.29 6.29 L 5.625 5.625 L 4.96 4.96 L -0.665 10.585 L 0 11.25 Z M 5.625 5.625 L 6.29 4.96 L 0.665 -0.665 L 0 0 L -0.665 0.665 L 4.96 6.29 L 5.625 5.625 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 1626,
      width: 1512,
      height: 692,
      overflow: "hidden",
      boxShadow: "inset 0 0 0 1px rgba(18,136,214,0.2), 0px 14px 34px -12px rgba(0,61,102,0.149)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1255,
      top: 621,
      height: 45,
      borderRadius: 999,
      backgroundColor: "rgb(119,184,240)",
      boxShadow: "0px 0px 20px 0px rgba(29,48,101,0.251)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 28px 14px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(29,48,101)",
      flexShrink: 0
    }
  }, "See What to Expect")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 653,
      top: 515,
      width: 800,
      height: 60,
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 48,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)"
    }
  }, "What It Feels Like To Fly"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 653,
      top: 583,
      width: 800,
      height: 24,
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)"
    }
  }, "Quiet, calm, and breathtakingly scenic. It's surprisingly tranquil up there. Anyone of almost any age can fly.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1512,
      height: 164,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
  }, "Help")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 34,
      width: 1512,
      backgroundColor: "rgb(247,251,255)",
      backdropFilter: "blur(6px)",
      display: "flex",
      flexDirection: "row",
      padding: "15px 75px 15px 75px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-fb8be23baf1fdde1",
    style: {
      position: "relative",
      width: 100,
      height: 100,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 74,
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
      height: 125,
      width: 245,
      flexShrink: 0
    },
    text1: "Kā’anapali Beach, Maui",
    menuItem: "nested"
  }), /*#__PURE__*/React.createElement(MenuItems2, {
    style: {
      position: "relative",
      height: 125,
      width: 190,
      flexShrink: 0
    },
    text1: "Kona, Big Island",
    menuItem: "nested"
  }), /*#__PURE__*/React.createElement(MenuItems2, {
    style: {
      position: "relative",
      height: 125,
      width: 237,
      flexShrink: 0
    },
    text1: "plan your adventure",
    menuItem: "nested"
  }), /*#__PURE__*/React.createElement(MenuItems2, {
    style: {
      position: "relative",
      height: 125,
      flexShrink: 0
    },
    text1: "about ufo",
    menuItem: "nested"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgb(151,201,61)",
      boxShadow: "0px 0px 20px 0px rgba(88,186,71,0.251)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(23,29,28)",
      flexShrink: 0
    }
  }, "View All Locations")))))));
}

// figma node: 7210:9998 Battery / Dark (6 variants)
const __venc_BatteryDark = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_BatteryDark = p => "status=" + __venc_BatteryDark(p.status) + '|' + "level=" + __venc_BatteryDark(p.level);
function BatteryDark(_p = {}) {
  const props = {
    ..._p,
    status: _p.status ?? "normal",
    level: _p.level ?? "10"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 25,
      height: 12,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 12,
    viewBox: "0 0 8 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 0,
      width: 8,
      height: 12,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.438 7.077 L 3.582 7.077 L 1.938 11.32 C 1.701 11.932 2.345 12.251 2.763 11.76 L 7.845 5.706 C 7.948 5.585 8 5.463 8 5.332 C 8 5.099 7.814 4.927 7.562 4.927 L 4.418 4.927 L 6.057 0.679 C 6.294 0.072 5.649 -0.252 5.237 0.239 L 0.149 6.293 C 0.046 6.419 0 6.536 0 6.667 C 0 6.905 0.186 7.077 0.438 7.077 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 23,
    height: 12,
    viewBox: "0 0 23 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 23,
      height: 12,
      color: "rgba(235,235,245,0.3)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.291 1 L 3 1 C 1.895 1 1 1.895 1 3 L 1 9 C 1 10.105 1.895 11 3 11 L 8.99 11 C 8.874 11.323 8.856 11.678 8.95 12 L 3 12 C 1.343 12 0 10.657 0 9 L 0 3 C 0 1.343 1.343 0 3 0 L 12.132 0 L 11.291 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.707 11 L 20 11 C 21.105 11 22 10.105 22 9 L 22 3 C 22 1.895 21.105 1 20 1 L 15.004 1 C 15.121 0.676 15.139 0.321 15.045 0 L 20 0 C 21.657 0 23 1.343 23 3 L 23 9 C 23 10.657 21.657 12 20 12 L 11.867 12 L 12.707 11 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 4,
    viewBox: "0 0 1 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 24,
      top: 4,
      width: 1,
      height: 4,
      color: "rgba(235,235,245,0.3)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.552 0 1 0.448 1 1 L 1 3 C 1 3.552 0.552 4 0 4 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 19,
      height: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.000,
    height: 8,
    viewBox: "0 0 19.000 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19,
      height: 8,
      color: "rgb(52,199,89)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.379 3.655 L 8.451 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 7 C 0 7.552 0.448 8 1 8 L 7.377 8 L 8.123 6.077 L 6.438 6.077 C 5.7 6.077 5 5.522 5 4.667 C 5 4.255 5.162 3.922 5.374 3.661 L 5.379 3.655 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.875 1.927 L 12.619 0 L 18 0 C 18.552 0 19 0.448 19 1 L 19 7 C 19 7.552 18.552 8 18 8 L 11.546 8 L 14.61 4.351 C 14.825 4.097 15 3.756 15 3.332 C 15 2.474 14.291 1.927 13.562 1.927 L 11.875 1.927 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 25,
      height: 12,
      position: "relative",
      color: "rgba(235,235,245,0.3)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 4,
    viewBox: "0 0 1 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 24,
      top: 4,
      width: 1,
      height: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.552 0 1 0.448 1 1 L 1 3 C 1 3.552 0.552 4 0 4 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 23,
    height: 12,
    viewBox: "0 0 23 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 23,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 20 0 C 21.657 0 23 1.343 23 3 L 23 9 C 23 10.657 21.657 12 20 12 L 3 12 C 1.343 12 0 10.657 0 9 L 0 3 C 0 1.343 1.343 0 3 0 Z M 3 1 C 1.895 1 1 1.895 1 3 L 1 9 C 1 10.105 1.895 11 3 11 L 20 11 C 21.105 11 22 10.105 22 9 L 22 3 C 22 1.895 21.105 1 20 1 L 3 1 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 19,
      height: 8,
      borderRadius: 1,
      backgroundColor: "rgb(255,255,255)"
    }
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 25,
      height: 12,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 12,
    viewBox: "0 0 8 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 0,
      width: 8,
      height: 12,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.438 7.077 L 3.582 7.077 L 1.938 11.32 C 1.701 11.932 2.345 12.251 2.763 11.76 L 7.845 5.706 C 7.948 5.585 8 5.463 8 5.332 C 8 5.099 7.814 4.927 7.562 4.927 L 4.418 4.927 L 6.057 0.679 C 6.294 0.072 5.649 -0.252 5.237 0.239 L 0.149 6.293 C 0.046 6.419 0 6.536 0 6.667 C 0 6.905 0.186 7.077 0.438 7.077 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 23,
    height: 12,
    viewBox: "0 0 23 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 23,
      height: 12,
      color: "rgba(235,235,245,0.3)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.291 1 L 3 1 C 1.895 1 1 1.895 1 3 L 1 9 C 1 10.105 1.895 11 3 11 L 8.99 11 C 8.874 11.323 8.856 11.678 8.95 12 L 3 12 C 1.343 12 0 10.657 0 9 L 0 3 C 0 1.343 1.343 0 3 0 L 12.132 0 L 11.291 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.707 11 L 20 11 C 21.105 11 22 10.105 22 9 L 22 3 C 22 1.895 21.105 1 20 1 L 15.004 1 C 15.121 0.676 15.139 0.321 15.045 0 L 20 0 C 21.657 0 23 1.343 23 3 L 23 9 C 23 10.657 21.657 12 20 12 L 11.867 12 L 12.707 11 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 4,
    viewBox: "0 0 1 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 24,
      top: 4,
      width: 1,
      height: 4,
      color: "rgba(235,235,245,0.3)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.552 0 1 0.448 1 1 L 1 3 C 1 3.552 0.552 4 0 4 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 8.451,
      height: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.451,
    height: 8,
    viewBox: "0 0 8.451 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.451,
      height: 8,
      color: "rgb(52,199,89)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.451 0 L 5.379 3.655 L 5.374 3.661 C 5.162 3.922 5 4.255 5 4.667 C 5 5.522 5.7 6.077 6.438 6.077 L 8.123 6.077 L 7.377 8 L 1 8 C 0.448 8 0 7.552 0 7 L 0 1 C 0 0.448 0.448 0 1 0 L 8.451 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 25,
      height: 12,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 4,
    viewBox: "0 0 1 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 24,
      top: 4,
      width: 1,
      height: 4,
      color: "rgba(235,235,245,0.3)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.552 0 1 0.448 1 1 L 1 3 C 1 3.552 0.552 4 0 4 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 23,
    height: 12,
    viewBox: "0 0 23 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 23,
      height: 12,
      color: "rgba(235,235,245,0.3)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 20 0 C 21.657 0 23 1.343 23 3 L 23 9 C 23 10.657 21.657 12 20 12 L 3 12 C 1.343 12 0 10.657 0 9 L 0 3 C 0 1.343 1.343 0 3 0 Z M 3 1 C 1.895 1 1 1.895 1 3 L 1 9 C 1 10.105 1.895 11 3 11 L 20 11 C 21.105 11 22 10.105 22 9 L 22 3 C 22 1.895 21.105 1 20 1 L 3 1 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 8,
    viewBox: "0 0 9 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 9,
      height: 8,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9 0 L 0.9 0 C 0.403 0 0 0.448 0 1 L 0 7 C 0 7.552 0.403 8 0.9 8 L 9 8 L 9 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 25,
      height: 12,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 12,
    viewBox: "0 0 8 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 0,
      width: 8,
      height: 12,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.438 7.077 L 3.582 7.077 L 1.938 11.32 C 1.701 11.932 2.345 12.251 2.763 11.76 L 7.845 5.706 C 7.948 5.585 8 5.463 8 5.332 C 8 5.099 7.814 4.927 7.562 4.927 L 4.418 4.927 L 6.057 0.679 C 6.294 0.072 5.649 -0.252 5.237 0.239 L 0.149 6.293 C 0.046 6.419 0 6.536 0 6.667 C 0 6.905 0.186 7.077 0.438 7.077 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 23,
    height: 12,
    viewBox: "0 0 23 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 23,
      height: 12,
      color: "rgba(235,235,245,0.3)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.291 1 L 3 1 C 1.895 1 1 1.895 1 3 L 1 9 C 1 10.105 1.895 11 3 11 L 8.99 11 C 8.874 11.323 8.856 11.678 8.95 12 L 3 12 C 1.343 12 0 10.657 0 9 L 0 3 C 0 1.343 1.343 0 3 0 L 12.132 0 L 11.291 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.707 11 L 20 11 C 21.105 11 22 10.105 22 9 L 22 3 C 22 1.895 21.105 1 20 1 L 15.004 1 C 15.121 0.676 15.139 0.321 15.045 0 L 20 0 C 21.657 0 23 1.343 23 3 L 23 9 C 23 10.657 21.657 12 20 12 L 11.867 12 L 12.707 11 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 4,
    viewBox: "0 0 1 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 24,
      top: 4,
      width: 1,
      height: 4,
      color: "rgba(235,235,245,0.3)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.552 0 1 0.448 1 1 L 1 3 C 1 3.552 0.552 4 0 4 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 3,
      height: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 8,
    viewBox: "0 0 3 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3,
      height: 8,
      color: "rgb(50,215,75)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 7 C 0 7.552 0.448 8 1 8 L 3 8 L 3 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 25,
      height: 12,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 4,
    viewBox: "0 0 1 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 24,
      top: 4,
      width: 1,
      height: 4,
      color: "rgba(235,235,245,0.3)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.552 0 1 0.448 1 1 L 1 3 C 1 3.552 0.552 4 0 4 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 8,
    viewBox: "0 0 3 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 3,
      height: 8,
      color: "rgb(255,59,48)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 7 C 0 7.552 0.448 8 1 8 L 3 8 L 3 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 23,
    height: 12,
    viewBox: "0 0 23 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 23,
      height: 12,
      color: "rgba(235,235,245,0.3)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 20 0 C 21.657 0 23 1.343 23 3 L 23 9 C 23 10.657 21.657 12 20 12 L 3 12 C 1.343 12 0 10.657 0 9 L 0 3 C 0 1.343 1.343 0 3 0 Z M 3 1 C 1.895 1 1 1.895 1 3 L 1 9 C 1 10.105 1.895 11 3 11 L 20 11 C 21.105 11 22 10.105 22 9 L 22 3 C 22 1.895 21.105 1 20 1 L 3 1 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __impls = {
    // figma: Status=Charging, Level=100
    "status=charging|level=100": __body0,
    // figma: Status=Normal, Level=100
    "status=normal|level=100": __body1,
    // figma: Status=Charging, Level=50
    "status=charging|level=50": __body2,
    // figma: Status=Normal, Level=50
    "status=normal|level=50": __body3,
    // figma: Status=Charging, Level=10
    "status=charging|level=10": __body4,
    // figma: Status=Normal, Level=10
    "status=normal|level=10": __body5
  };
  return (__impls[__vkey_BatteryDark(props)] ?? __body5)();
}

// figma node: 7210:9931 Network Signal / Dark (5 variants)
const __venc_NetworkSignalDark = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_NetworkSignalDark = p => "property1=" + __venc_NetworkSignalDark(p.property1);
function NetworkSignalDark(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "0 bars"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 14,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 8,
    viewBox: "0 0 3 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 11,
      top: 4,
      width: 3,
      height: 8,
      color: "rgb(209,209,214)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 7 C 3 7.552 2.552 8 2 8 L 1 8 C 0.448 8 0 7.552 0 7 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.5,
      top: 6,
      width: 3,
      height: 6,
      color: "rgb(209,209,214)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 5 C 3 5.552 2.552 6 2 6 L 1 6 C 0.448 6 0 5.552 0 5 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 4.500,
    viewBox: "0 0 3 4.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 7.5,
      width: 3,
      height: 4.5,
      color: "rgb(209,209,214)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 3.5 C 3 4.052 2.552 4.5 2 4.5 L 1 4.5 C 0.448 4.5 0 4.052 0 3.5 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 10,
    viewBox: "0 0 3 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.5,
      top: 2,
      width: 3,
      height: 10,
      color: "rgb(209,209,214)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 9 C 3 9.552 2.552 10 2 10 L 1 10 C 0.448 10 0 9.552 0 9 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 8,
    viewBox: "0 0 3 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 11,
      top: 4,
      width: 3,
      height: 8,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 7 C 3 7.552 2.552 8 2 8 L 1 8 C 0.448 8 0 7.552 0 7 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.5,
      top: 6,
      width: 3,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 5 C 3 5.552 2.552 6 2 6 L 1 6 C 0.448 6 0 5.552 0 5 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 4.500,
    viewBox: "0 0 3 4.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 7.5,
      width: 3,
      height: 4.5,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 3.5 C 3 4.052 2.552 4.5 2 4.5 L 1 4.5 C 0.448 4.5 0 4.052 0 3.5 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 10,
    viewBox: "0 0 3 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.5,
      top: 2,
      width: 3,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 9 C 3 9.552 2.552 10 2 10 L 1 10 C 0.448 10 0 9.552 0 9 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 14,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 8,
    viewBox: "0 0 3 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 11,
      top: 4,
      width: 3,
      height: 8,
      color: "rgb(209,209,214)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 7 C 3 7.552 2.552 8 2 8 L 1 8 C 0.448 8 0 7.552 0 7 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.5,
      top: 6,
      width: 3,
      height: 6,
      color: "rgb(209,209,214)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 5 C 3 5.552 2.552 6 2 6 L 1 6 C 0.448 6 0 5.552 0 5 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 4.500,
    viewBox: "0 0 3 4.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 7.5,
      width: 3,
      height: 4.5,
      color: "rgb(209,209,214)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 3.5 C 3 4.052 2.552 4.5 2 4.5 L 1 4.5 C 0.448 4.5 0 4.052 0 3.5 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 10,
    viewBox: "0 0 3 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.5,
      top: 2,
      width: 3,
      height: 10,
      color: "rgba(235,235,245,0.3)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 9 C 3 9.552 2.552 10 2 10 L 1 10 C 0.448 10 0 9.552 0 9 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 8,
    viewBox: "0 0 3 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 11,
      top: 4,
      width: 3,
      height: 8,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 7 C 3 7.552 2.552 8 2 8 L 1 8 C 0.448 8 0 7.552 0 7 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.5,
      top: 6,
      width: 3,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 5 C 3 5.552 2.552 6 2 6 L 1 6 C 0.448 6 0 5.552 0 5 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 4.500,
    viewBox: "0 0 3 4.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 7.5,
      width: 3,
      height: 4.5,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 3.5 C 3 4.052 2.552 4.5 2 4.5 L 1 4.5 C 0.448 4.5 0 4.052 0 3.5 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 14,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 8,
    viewBox: "0 0 3 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 11,
      top: 4,
      width: 3,
      height: 8,
      color: "rgba(235,235,245,0.3)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 7 C 3 7.552 2.552 8 2 8 L 1 8 C 0.448 8 0 7.552 0 7 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.5,
      top: 6,
      width: 3,
      height: 6,
      color: "rgb(209,209,214)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 5 C 3 5.552 2.552 6 2 6 L 1 6 C 0.448 6 0 5.552 0 5 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 4.500,
    viewBox: "0 0 3 4.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 7.5,
      width: 3,
      height: 4.5,
      color: "rgb(209,209,214)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 3.5 C 3 4.052 2.552 4.5 2 4.5 L 1 4.5 C 0.448 4.5 0 4.052 0 3.5 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 10,
    viewBox: "0 0 3 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.5,
      top: 2,
      width: 3,
      height: 10,
      color: "rgba(235,235,245,0.3)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 9 C 3 9.552 2.552 10 2 10 L 1 10 C 0.448 10 0 9.552 0 9 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.5,
      top: 6,
      width: 3,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 5 C 3 5.552 2.552 6 2 6 L 1 6 C 0.448 6 0 5.552 0 5 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 4.500,
    viewBox: "0 0 3 4.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 7.5,
      width: 3,
      height: 4.5,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 3.5 C 3 4.052 2.552 4.5 2 4.5 L 1 4.5 C 0.448 4.5 0 4.052 0 3.5 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 14,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 8,
    viewBox: "0 0 3 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 11,
      top: 4,
      width: 3,
      height: 8,
      color: "rgba(235,235,245,0.3)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 7 C 3 7.552 2.552 8 2 8 L 1 8 C 0.448 8 0 7.552 0 7 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.5,
      top: 6,
      width: 3,
      height: 6,
      color: "rgba(235,235,245,0.3)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 5 C 3 5.552 2.552 6 2 6 L 1 6 C 0.448 6 0 5.552 0 5 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 4.500,
    viewBox: "0 0 3 4.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 7.5,
      width: 3,
      height: 4.5,
      color: "rgb(209,209,214)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 3.5 C 3 4.052 2.552 4.5 2 4.5 L 1 4.5 C 0.448 4.5 0 4.052 0 3.5 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 10,
    viewBox: "0 0 3 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.5,
      top: 2,
      width: 3,
      height: 10,
      color: "rgba(235,235,245,0.3)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 9 C 3 9.552 2.552 10 2 10 L 1 10 C 0.448 10 0 9.552 0 9 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 4.500,
    viewBox: "0 0 3 4.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 7.5,
      width: 3,
      height: 4.5,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 3.5 C 3 4.052 2.552 4.5 2 4.5 L 1 4.5 C 0.448 4.5 0 4.052 0 3.5 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 14,
      position: "relative",
      color: "rgba(235,235,245,0.3)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 3,
    viewBox: "0 0 3 3",
    fill: "none",
    style: {
      position: "absolute",
      left: 11,
      top: 9,
      width: 3,
      height: 3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 2 C 3 2.552 2.552 3 2 3 L 1 3 C 0.448 3 0 2.552 0 2 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 3,
    viewBox: "0 0 3 3",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.5,
      top: 9,
      width: 3,
      height: 3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 2 C 3 2.552 2.552 3 2 3 L 1 3 C 0.448 3 0 2.552 0 2 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 3,
    viewBox: "0 0 3 3",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 9,
      width: 3,
      height: 3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 2 C 3 2.552 2.552 3 2 3 L 1 3 C 0.448 3 0 2.552 0 2 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 3,
    viewBox: "0 0 3 3",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.5,
      top: 9,
      width: 3,
      height: 3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 2 0 C 2.552 0 3 0.448 3 1 L 3 2 C 3 2.552 2.552 3 2 3 L 1 3 C 0.448 3 0 2.552 0 2 L 0 1 C 0 0.448 0.448 0 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __impls = {
    // figma: Property 1=4 Bars
    "property1=4 bars": __body0,
    // figma: Property 1=3 Bars
    "property1=3 bars": __body1,
    // figma: Property 1=2 Bars
    "property1=2 bars": __body2,
    // figma: Property 1=1 Bars
    "property1=1 bars": __body3,
    // figma: Property 1=0 Bars
    "property1=0 bars": __body4
  };
  return (__impls[__vkey_NetworkSignalDark(props)] ?? __body4)();
}

// figma node: 7210:9977 WiFi Signal / Dark (4 variants)
const __venc_WiFiSignalDark = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_WiFiSignalDark = p => "property1=" + __venc_WiFiSignalDark(p.property1);
function WiFiSignalDark(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "0 bars"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 14,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.372,
    height: 3.060,
    viewBox: "0 0 4.372 3.060",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.938,
      top: 8.94,
      width: 4.372,
      height: 3.06
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.194 0 C 2.834 0 3.455 0.168 4.003 0.488 L 4.225 0.618 C 4.393 0.717 4.422 0.947 4.285 1.085 L 2.39 2.973 C 2.274 3.089 2.086 3.089 1.969 2.973 L 0.087 1.097 C -0.05 0.96 -0.021 0.731 0.145 0.631 L 0.365 0.501 C 0.917 0.173 1.547 0 2.194 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.320,
    height: 3.314,
    viewBox: "0 0 9.320 3.314",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.465,
      top: 5.47,
      width: 9.32,
      height: 3.314
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.668 0 C 6.259 0 7.786 0.528 9.03 1.505 L 9.206 1.643 C 9.346 1.753 9.359 1.961 9.233 2.087 L 8.102 3.214 C 7.997 3.319 7.832 3.331 7.713 3.242 L 7.575 3.14 C 6.735 2.515 5.721 2.18 4.668 2.18 C 3.608 2.18 2.588 2.52 1.745 3.151 L 1.607 3.255 C 1.489 3.344 1.323 3.332 1.218 3.227 L 0.087 2.1 C -0.039 1.974 -0.027 1.767 0.113 1.657 L 0.288 1.519 C 1.535 0.533 3.069 0 4.668 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.250,
    height: 4.323,
    viewBox: "0 0 14.250 4.323",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 2,
      width: 14.25,
      height: 4.323
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.133 0 C 9.657 0 12.072 0.891 13.983 2.523 L 14.146 2.662 C 14.278 2.775 14.285 2.976 14.163 3.098 L 13.036 4.222 C 12.926 4.331 12.752 4.338 12.634 4.24 L 12.494 4.123 C 10.989 2.865 9.104 2.18 7.133 2.18 C 5.155 2.18 3.263 2.869 1.756 4.135 L 1.617 4.253 C 1.498 4.352 1.324 4.345 1.214 4.236 L 0.087 3.112 C -0.035 2.99 -0.028 2.789 0.104 2.676 L 0.266 2.537 C 2.18 0.896 4.601 0 7.133 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 14,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.372,
    height: 3.060,
    viewBox: "0 0 4.372 3.060",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.938,
      top: 8.94,
      width: 4.372,
      height: 3.06,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.194 0 C 2.834 0 3.455 0.168 4.003 0.488 L 4.225 0.618 C 4.393 0.717 4.422 0.947 4.285 1.085 L 2.39 2.973 C 2.274 3.089 2.086 3.089 1.969 2.973 L 0.087 1.097 C -0.05 0.96 -0.021 0.731 0.145 0.631 L 0.365 0.501 C 0.917 0.173 1.547 0 2.194 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.320,
    height: 3.314,
    viewBox: "0 0 9.320 3.314",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.465,
      top: 5.47,
      width: 9.32,
      height: 3.314,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.668 0 C 6.259 0 7.786 0.528 9.03 1.505 L 9.206 1.643 C 9.346 1.753 9.359 1.961 9.233 2.087 L 8.102 3.214 C 7.997 3.319 7.832 3.331 7.713 3.242 L 7.575 3.14 C 6.735 2.515 5.721 2.18 4.668 2.18 C 3.608 2.18 2.588 2.52 1.745 3.151 L 1.607 3.255 C 1.489 3.344 1.323 3.332 1.218 3.227 L 0.087 2.1 C -0.039 1.974 -0.027 1.767 0.113 1.657 L 0.288 1.519 C 1.535 0.533 3.069 0 4.668 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.250,
    height: 4.323,
    viewBox: "0 0 14.250 4.323",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 2,
      width: 14.25,
      height: 4.323,
      color: "rgba(235,235,245,0.3)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.133 0 C 9.657 0 12.072 0.891 13.983 2.523 L 14.146 2.662 C 14.278 2.775 14.285 2.976 14.163 3.098 L 13.036 4.222 C 12.926 4.331 12.752 4.338 12.634 4.24 L 12.494 4.123 C 10.989 2.865 9.104 2.18 7.133 2.18 C 5.155 2.18 3.263 2.869 1.756 4.135 L 1.617 4.253 C 1.498 4.352 1.324 4.345 1.214 4.236 L 0.087 3.112 C -0.035 2.99 -0.028 2.789 0.104 2.676 L 0.266 2.537 C 2.18 0.896 4.601 0 7.133 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 14,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.372,
    height: 3.060,
    viewBox: "0 0 4.372 3.060",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.938,
      top: 8.94,
      width: 4.372,
      height: 3.06,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.194 0 C 2.834 0 3.455 0.168 4.003 0.488 L 4.225 0.618 C 4.393 0.717 4.422 0.947 4.285 1.085 L 2.39 2.973 C 2.274 3.089 2.086 3.089 1.969 2.973 L 0.087 1.097 C -0.05 0.96 -0.021 0.731 0.145 0.631 L 0.365 0.501 C 0.917 0.173 1.547 0 2.194 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.320,
    height: 3.314,
    viewBox: "0 0 9.320 3.314",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.465,
      top: 5.47,
      width: 9.32,
      height: 3.314,
      color: "rgba(235,235,245,0.3)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.668 0 C 6.259 0 7.786 0.528 9.03 1.505 L 9.206 1.643 C 9.346 1.753 9.359 1.961 9.233 2.087 L 8.102 3.214 C 7.997 3.319 7.832 3.331 7.713 3.242 L 7.575 3.14 C 6.735 2.515 5.721 2.18 4.668 2.18 C 3.608 2.18 2.588 2.52 1.745 3.151 L 1.607 3.255 C 1.489 3.344 1.323 3.332 1.218 3.227 L 0.087 2.1 C -0.039 1.974 -0.027 1.767 0.113 1.657 L 0.288 1.519 C 1.535 0.533 3.069 0 4.668 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.250,
    height: 4.323,
    viewBox: "0 0 14.250 4.323",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 2,
      width: 14.25,
      height: 4.323,
      color: "rgba(235,235,245,0.3)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.133 0 C 9.657 0 12.072 0.891 13.983 2.523 L 14.146 2.662 C 14.278 2.775 14.285 2.976 14.163 3.098 L 13.036 4.222 C 12.926 4.331 12.752 4.338 12.634 4.24 L 12.494 4.123 C 10.989 2.865 9.104 2.18 7.133 2.18 C 5.155 2.18 3.263 2.869 1.756 4.135 L 1.617 4.253 C 1.498 4.352 1.324 4.345 1.214 4.236 L 0.087 3.112 C -0.035 2.99 -0.028 2.789 0.104 2.676 L 0.266 2.537 C 2.18 0.896 4.601 0 7.133 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 14,
      position: "relative",
      color: "rgba(235,235,245,0.3)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.372,
    height: 3.060,
    viewBox: "0 0 4.372 3.060",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.938,
      top: 8.94,
      width: 4.372,
      height: 3.06
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.194 0 C 2.834 0 3.455 0.168 4.003 0.488 L 4.225 0.618 C 4.393 0.717 4.422 0.947 4.285 1.085 L 2.39 2.973 C 2.274 3.089 2.086 3.089 1.969 2.973 L 0.087 1.097 C -0.05 0.96 -0.021 0.731 0.145 0.631 L 0.365 0.501 C 0.917 0.173 1.547 0 2.194 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.320,
    height: 3.314,
    viewBox: "0 0 9.320 3.314",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.465,
      top: 5.47,
      width: 9.32,
      height: 3.314
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.668 0 C 6.259 0 7.786 0.528 9.03 1.505 L 9.206 1.643 C 9.346 1.753 9.359 1.961 9.233 2.087 L 8.102 3.214 C 7.997 3.319 7.832 3.331 7.713 3.242 L 7.575 3.14 C 6.735 2.515 5.721 2.18 4.668 2.18 C 3.608 2.18 2.588 2.52 1.745 3.151 L 1.607 3.255 C 1.489 3.344 1.323 3.332 1.218 3.227 L 0.087 2.1 C -0.039 1.974 -0.027 1.767 0.113 1.657 L 0.288 1.519 C 1.535 0.533 3.069 0 4.668 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.250,
    height: 4.323,
    viewBox: "0 0 14.250 4.323",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 2,
      width: 14.25,
      height: 4.323
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.133 0 C 9.657 0 12.072 0.891 13.983 2.523 L 14.146 2.662 C 14.278 2.775 14.285 2.976 14.163 3.098 L 13.036 4.222 C 12.926 4.331 12.752 4.338 12.634 4.24 L 12.494 4.123 C 10.989 2.865 9.104 2.18 7.133 2.18 C 5.155 2.18 3.263 2.869 1.756 4.135 L 1.617 4.253 C 1.498 4.352 1.324 4.345 1.214 4.236 L 0.087 3.112 C -0.035 2.99 -0.028 2.789 0.104 2.676 L 0.266 2.537 C 2.18 0.896 4.601 0 7.133 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Property 1=3 Bars
    "property1=3 bars": __body0,
    // figma: Property 1=2 Bars
    "property1=2 bars": __body1,
    // figma: Property 1=1 Bars
    "property1=1 bars": __body2,
    // figma: Property 1=0 Bars
    "property1=0 bars": __body3
  };
  return (__impls[__vkey_WiFiSignalDark(props)] ?? __body3)();
}

// figma node: 9301:598 Final Home - Mobile
function FinalHomeMobile(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 390,
      height: 7146,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -3,
      top: 5784,
      width: 393,
      backgroundColor: "rgb(29,48,101)",
      display: "flex",
      flexDirection: "column",
      gap: 25,
      padding: "35px 25px 85px 25px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 350,
      display: "flex",
      flexDirection: "column",
      gap: 25,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 321,
      display: "flex",
      flexDirection: "column",
      gap: 35,
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
      gap: 15,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 15,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-fb8be23baf1fdde1",
    style: {
      position: "relative",
      width: 107,
      height: 100,
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 259,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 34.5,
      height: 34.5,
      flexShrink: 0,
      color: "rgb(206,175,120)"
    }
  }, /*#__PURE__*/React.createElement(Facebook, {
    style: {
      transform: "scale(0.067, 0.067)",
      transformOrigin: "0 0",
      color: "rgb(206,175,120)"
    },
    type: "flat"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 39,
      height: 39,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement(Tripadvisor, {
    style: {
      transform: "scale(0.076, 0.076)",
      transformOrigin: "0 0",
      color: "rgb(0,0,0)"
    },
    type: "flat"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 34,
      height: 34,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement(MaskGroup, {
    style: {
      transform: "scale(0.971, 0.971)",
      transformOrigin: "0 0",
      color: "rgb(0,0,0)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement(MaskGroup2, {
    style: {
      transform: "scale(1.241, 1.241)",
      transformOrigin: "0 0",
      color: "rgb(0,0,0)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 34.5,
      height: 34.5,
      flexShrink: 0,
      color: "rgb(206,175,120)"
    }
  }, /*#__PURE__*/React.createElement(Instagram, {
    style: {
      transform: "scale(0.067, 0.067)",
      transformOrigin: "0 0",
      color: "rgb(206,175,120)"
    },
    type: "flat"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36.411,
      height: 36.411,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 36.4114875793457,
      height: 36.4114875793457,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 33.984,
    height: 23.061,
    viewBox: "0 0 33.984 23.061",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.214,
      top: 7.282,
      width: 33.984,
      height: 23.061,
      color: "rgb(247,220,158)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 33.984 9.856 L 33.984 13.197 C 33.846 13.576 33.938 14.046 33.92 14.452 C 33.788 17.502 33.745 21.597 30.005 22.416 C 27.372 22.993 23.807 22.9 21.075 22.957 C 15.962 23.064 10.007 23.242 4.964 22.565 C 1.3 22.073 0.644 20.221 0.278 16.953 L 0.012 13.197 C 0.04 12.065 -0.026 10.923 0.012 9.792 C 0.07 8.037 0.189 5.99 0.562 4.255 C 1.395 0.392 4.51 0.427 7.939 0.219 C 13.058 -0.093 18.409 -0.034 23.531 0.16 C 26.128 0.258 30.7 -0.02 32.457 2.053 C 33.784 3.619 33.918 7.836 33.984 9.856 Z M 13.614 6.645 L 13.614 16.408 L 22.373 11.495 L 13.614 6.645 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 47,
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
      height: 47,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(62,169,218)",
      boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.25)",
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
      fontFamily: "Cabin, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(13,32,76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Book Now")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgba(240,240,240,0.12)",
      backdropFilter: "blur(4px)",
      boxShadow: "inset 0 0 0 2px rgb(62,169,218)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
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
      fontFamily: "Cabin, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Buy Gift Card")))), /*#__PURE__*/React.createElement("div", {
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
      display: "flex",
      flexDirection: "column",
      gap: 13,
      justifyContent: "center",
      alignItems: "center",
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
      alignItems: "center",
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
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(247,220,158)",
      flexShrink: 0
    }
  }, "Maui"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Maui Parasail"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Maui Fishing"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Banana Boat Rides"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(247,220,158)",
      flexShrink: 0
    }
  }, "Get in Touch"), /*#__PURE__*/React.createElement("div", {
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
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Email: ", "flymaui@ufoparasail.net"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Kaanapali Beach, Maui:  ", "2435 Kaanappali Parkway ", "\n", "Lahaina, HI 96761")))))), /*#__PURE__*/React.createElement("div", {
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
      display: "flex",
      flexDirection: "column",
      gap: 13,
      justifyContent: "center",
      alignItems: "center",
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
      alignItems: "center",
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
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(247,220,158)",
      flexShrink: 0
    }
  }, "Kona"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Kona Parasail"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Maui Fishing"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Banana Boat Rides"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(247,220,158)",
      flexShrink: 0
    }
  }, "Get in Touch"), /*#__PURE__*/React.createElement("div", {
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
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Email: ", "flykona@ufoparasail.net"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Kona, Big Island:  ", "75-5660 Palani Road Kailua-Kona, HI. 96740")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(247,220,158)",
      flexShrink: 0
    }
  }, "Company"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "About UFO"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "FAQ"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Blog"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Shop UFO Gear"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Disconts"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "Contact Us"))), /*#__PURE__*/React.createElement("svg", {
    width: 350,
    height: 1,
    viewBox: "0 -0.500 350 1",
    fill: "none",
    style: {
      position: "relative",
      width: 350,
      height: 1,
      flexShrink: 0,
      color: "rgb(0,113,188)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 350 0 L 350 -0.5 L 350 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 350,
      display: "flex",
      flexDirection: "column",
      gap: 25,
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
      justifyContent: "center",
      alignItems: "center",
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
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(247,220,158)",
      flexShrink: 0
    }
  }, "\xA9 2020 UFO Parasail. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(247,220,158)",
      flexShrink: 0
    }
  }, "Terms of Service"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(247,220,158)",
      flexShrink: 0
    }
  }, "Accessibility"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393,
      height: 720,
      overflow: "hidden",
      background: "linear-gradient(0deg, rgb(0,0,0) 0.00%, rgba(0,0,0,0.35) 15.11%, rgba(0,0,0,0.12) 42.69%), url(/ufo/x1.webp) center / cover no-repeat"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 407,
      width: 393,
      display: "flex",
      flexDirection: "row",
      padding: "25px 25px 25px 25px",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 350,
      display: "flex",
      flexDirection: "column",
      gap: 16,
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
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(151,201,61)",
      flexShrink: 0
    }
  }, "UFO Parasail"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "See Hawaii\nFrom Above"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "See Hawaii from a whole new perspective. Choose Maui or Kona, pick your flight, and get ready for an unforgettable day on the water.")), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement(Button2, {
    style: {
      position: "relative",
      height: 48,
      flexGrow: 1,
      width: "auto"
    },
    text1: "Explore Maui",
    type: "secondary",
    state: "default",
    size: "lg",
    width: "full width"
  }), /*#__PURE__*/React.createElement(Button2, {
    style: {
      position: "relative",
      height: 48,
      flexGrow: 1,
      width: "auto"
    },
    text1: "Explore Kona",
    type: "secondary",
    state: "default",
    size: "lg",
    width: "full width"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -3,
      top: 720,
      width: 393,
      height: 249,
      backgroundColor: "rgb(119,184,240)",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      padding: "25px 25px 25px 25px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: "rgb(243,244,246)",
      boxShadow: "inset 0 0 0 1px rgb(209,213,219)",
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
      width: 22,
      height: 22,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement(Tripadvisor, {
    style: {
      transform: "scale(0.043, 0.043)",
      transformOrigin: "0 0",
      color: "rgb(0,0,0)"
    },
    type: "flat"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(29,48,101)",
      flexShrink: 0
    }
  }, "USA Today Award"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(16,71,117)",
      flexShrink: 0
    }
  }, "Voted Best Parasail Company, 2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: "rgb(243,244,246)",
      boxShadow: "inset 0 0 0 1px rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet2, {
    style: {
      position: "relative",
      width: 23.334,
      height: 23.334,
      flexShrink: 0
    },
    icon: "parsail"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(29,48,101)",
      flexShrink: 0
    }
  }, "Hawaii Adventures Since 1985"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(16,71,117)",
      flexShrink: 0
    }
  }, "Decades of experience on the water"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: "rgb(243,244,246)",
      boxShadow: "inset 0 0 0 1px rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet2, {
    style: {
      position: "relative",
      width: 28,
      height: 28,
      flexShrink: 0
    },
    icon: "vip"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(29,48,101)",
      flexShrink: 0
    }
  }, "USCG-Certified Vessels"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(16,71,117)",
      flexShrink: 0
    }
  }, "Safety comes first on every flight"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: "rgb(243,244,246)",
      boxShadow: "inset 0 0 0 1px rgb(209,213,219)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconSet2, {
    style: {
      position: "relative",
      width: 28,
      height: 28,
      flexShrink: 0
    },
    icon: "camera"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(29,48,101)",
      flexShrink: 0
    }
  }, "Thousands of 5-Star Reviews"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(16,71,117)",
      flexShrink: 0
    }
  }, "Loved by families and first-time flyers")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -2,
      top: 969,
      width: 390,
      minHeight: 844,
      overflow: "hidden",
      backgroundColor: "rgb(247,251,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "25px 25px 25px 25px",
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "100%",
      color: "rgb(29,48,101)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "START YOUR ADVENTURE"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 25,
      lineHeight: "100%",
      color: "rgb(23,29,28)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Where Are You Visiting?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(23,29,28)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Choose your island to explore local parasailing options, availability, check-in details, and everything you need to know before booking.")), /*#__PURE__*/React.createElement("div", {
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
      borderRadius: 24,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(18,136,214,0.2), 0px 8px 24px -4px rgba(0,61,102,0.102)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ea7d9b9c01cdc80a",
    style: {
      position: "relative",
      height: 180,
      borderRadius: 14,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 22,
      lineHeight: "100%",
      color: "rgb(29,48,101)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "K\u0101\u2019anapali Beach, Maui"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(29,48,101)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Board via beach & zodiac from Kaanapali Beach")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      borderRadius: 999,
      backgroundColor: "rgb(29,48,101)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexGrow: 1
    }
  }, "View K\u0101\u2019anapali Beach Activities"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(18,136,214,0.2), 0px 8px 24px -4px rgba(0,61,102,0.102)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 180,
      borderRadius: 14,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 22,
      lineHeight: "100%",
      color: "rgb(29,48,101)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Kona, Big Island"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(29,48,101)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Board directly from the dock at  ", "Kailua-Kona Pier")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      borderRadius: 999,
      backgroundColor: "rgb(119,184,240)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(29,48,101)",
      flexGrow: 1
    }
  }, "View Kona, Big Island Activities")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -2,
      top: 1930,
      width: 390,
      height: 228,
      overflow: "hidden",
      color: "rgba(18,136,214,0.2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 -1 L -1 -1 L -1 0 L 0 0 Z M 390 0 L 391 0 L 391 -1 L 390 -1 L 390 0 Z M 390 228 L 390 229 L 391 229 L 391 228 L 390 228 Z M 0 228 L -1 228 L -1 229 L 0 229 L 0 228 Z M 0 0 L 0 1 L 390 1 L 390 0 L 390 -1 L 0 -1 L 0 0 Z M 390 0 L 389 0 L 389 228 L 390 228 L 391 228 L 391 0 L 390 0 Z M 390 228 L 390 227 L 0 227 L 0 228 L 0 229 L 390 229 L 390 228 Z M 0 228 L 1 228 L 1 0 L 0 0 L -1 0 L -1 228 L 0 228 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -2,
      top: 2158,
      width: 390,
      backgroundColor: "rgb(247,251,255)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "25px 25px 25px 25px",
      justifyContent: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 25,
      lineHeight: "100%",
      color: "rgb(29,48,101)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "What It Feels Like To Fly"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(29,48,101)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Quiet, calm, and breathtakingly scenic. It's surprisingly tranquil up there. Anyone of almost any age can fly.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 45,
      borderRadius: 999,
      backgroundColor: "rgb(29,48,101)",
      boxShadow: "0px 0px 20px 0px rgba(29,48,101,0.251)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 28px 14px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(247,251,255)",
      flexShrink: 0
    }
  }, "See What to Expect"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -3,
      top: 2367,
      width: 393,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      padding: "25px 25px 25px 25px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 350,
      overflow: "hidden",
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(84,131,0)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Follow the Adventure @ufoparasail"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 25,
      lineHeight: "100%",
      color: "rgb(29,48,101)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "See Your Next Vacation Memory."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.9,
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(23,29,28)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "From first flights to big group celebrations, explore recent moments from Maui and Kona.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
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
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 320,
      height: 420,
      overflow: "hidden",
      borderRadius: 16,
      backdropFilter: "blur(10px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      filter: "drop-shadow(0px 0px 20px rgba(18,136,214,0.102))",
      color: "rgba(18,136,214,0.2)"
    , width: 320, height: 420, borderRadius: 16, backgroundColor: "currentColor"}
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 16 1 L 304 1 L 304 0 L 304 -1 L 16 -1 L 16 0 Z M 320 16 L 319 16 L 319 404 L 320 404 L 321 404 L 321 16 L 320 16 Z M 304 420 L 304 419 L 16 419 L 16 420 L 16 421 L 304 421 L 304 420 Z M 0 404 L 1 404 L 1 16 L 0 16 L -1 16 L -1 404 L 0 404 Z M 16 420 L 16 419 C 7.716 419 1 412.284 1 404 L 0 404 L -1 404 C -1 413.389 6.611 421 16 421 L 16 420 Z M 320 404 L 319 404 C 319 412.284 312.284 419 304 419 L 304 420 L 304 421 C 313.389 421 321 413.389 321 404 L 320 404 Z M 304 0 L 304 1 C 312.284 1 319 7.716 319 16 L 320 16 L 321 16 C 321 6.611 313.389 -1 304 -1 L 304 0 Z M 16 0 L 16 -1 C 6.611 -1 -1 6.611 -1 16 L 0 16 L 1 16 C 1 7.716 7.716 1 16 1 L 16 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 320,
      height: 420,
      overflow: "hidden",
      borderRadius: 16,
      backdropFilter: "blur(10px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      filter: "drop-shadow(0px 0px 20px rgba(18,136,214,0.102))",
      color: "rgba(18,136,214,0.2)"
    , width: 320, height: 420, borderRadius: 16, backgroundColor: "currentColor"}
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 16 1 L 304 1 L 304 0 L 304 -1 L 16 -1 L 16 0 Z M 320 16 L 319 16 L 319 404 L 320 404 L 321 404 L 321 16 L 320 16 Z M 304 420 L 304 419 L 16 419 L 16 420 L 16 421 L 304 421 L 304 420 Z M 0 404 L 1 404 L 1 16 L 0 16 L -1 16 L -1 404 L 0 404 Z M 16 420 L 16 419 C 7.716 419 1 412.284 1 404 L 0 404 L -1 404 C -1 413.389 6.611 421 16 421 L 16 420 Z M 320 404 L 319 404 C 319 412.284 312.284 419 304 419 L 304 420 L 304 421 C 313.389 421 321 413.389 321 404 L 320 404 Z M 304 0 L 304 1 C 312.284 1 319 7.716 319 16 L 320 16 L 321 16 C 321 6.611 313.389 -1 304 -1 L 304 0 Z M 16 0 L 16 -1 C 6.611 -1 -1 6.611 -1 16 L 0 16 L 1 16 C 1 7.716 7.716 1 16 1 L 16 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 320,
      height: 420,
      overflow: "hidden",
      borderRadius: 16,
      backdropFilter: "blur(10px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      filter: "drop-shadow(0px 0px 20px rgba(18,136,214,0.102))",
      color: "rgba(18,136,214,0.2)"
    , width: 320, height: 420, borderRadius: 16, backgroundColor: "currentColor"}
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 16 1 L 304 1 L 304 0 L 304 -1 L 16 -1 L 16 0 Z M 320 16 L 319 16 L 319 404 L 320 404 L 321 404 L 321 16 L 320 16 Z M 304 420 L 304 419 L 16 419 L 16 420 L 16 421 L 304 421 L 304 420 Z M 0 404 L 1 404 L 1 16 L 0 16 L -1 16 L -1 404 L 0 404 Z M 16 420 L 16 419 C 7.716 419 1 412.284 1 404 L 0 404 L -1 404 C -1 413.389 6.611 421 16 421 L 16 420 Z M 320 404 L 319 404 C 319 412.284 312.284 419 304 419 L 304 420 L 304 421 C 313.389 421 321 413.389 321 404 L 320 404 Z M 304 0 L 304 1 C 312.284 1 319 7.716 319 16 L 320 16 L 321 16 C 321 6.611 313.389 -1 304 -1 L 304 0 Z M 16 0 L 16 -1 C 6.611 -1 -1 6.611 -1 16 L 0 16 L 1 16 C 1 7.716 7.716 1 16 1 L 16 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 320,
      height: 420,
      overflow: "hidden",
      borderRadius: 16,
      backdropFilter: "blur(10px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      filter: "drop-shadow(0px 0px 20px rgba(18,136,214,0.102))",
      color: "rgba(18,136,214,0.2)"
    , width: 320, height: 420, borderRadius: 16, backgroundColor: "currentColor"}
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 16 1 L 304 1 L 304 0 L 304 -1 L 16 -1 L 16 0 Z M 320 16 L 319 16 L 319 404 L 320 404 L 321 404 L 321 16 L 320 16 Z M 304 420 L 304 419 L 16 419 L 16 420 L 16 421 L 304 421 L 304 420 Z M 0 404 L 1 404 L 1 16 L 0 16 L -1 16 L -1 404 L 0 404 Z M 16 420 L 16 419 C 7.716 419 1 412.284 1 404 L 0 404 L -1 404 C -1 413.389 6.611 421 16 421 L 16 420 Z M 320 404 L 319 404 C 319 412.284 312.284 419 304 419 L 304 420 L 304 421 C 313.389 421 321 413.389 321 404 L 320 404 Z M 304 0 L 304 1 C 312.284 1 319 7.716 319 16 L 320 16 L 321 16 C 321 6.611 313.389 -1 304 -1 L 304 0 Z M 16 0 L 16 -1 C 6.611 -1 -1 6.611 -1 16 L 0 16 L 1 16 C 1 7.716 7.716 1 16 1 L 16 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
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
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgba(255,255,255,0.2)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgba(255,255,255,0.2)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgba(255,255,255,0.2)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgba(255,255,255,0.2)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgba(255,255,255,0.2)",
      flexShrink: 0
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -2,
      top: 3013,
      width: 390,
      overflow: "hidden",
      background: "linear-gradient(rgb(247,220,158),rgb(247,220,158))",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      padding: "48px 20px 48px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "100%",
      color: "rgb(120,95,36)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Thousands of Five-Star Reviews"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 25,
      lineHeight: "100%",
      color: "rgb(20,20,26)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Guests Arrive Excited, Leave Wanting More."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-1aa5d74d9ba09b7c-aa34cada",
    style: {
      position: "relative",
      width: 64,
      height: 64,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-1aa5d74d9ba09b7c-945b5fba",
    style: {
      position: "relative",
      width: 50,
      height: 52,
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(119,184,240), 0px 4px 12px 0px rgba(0,0,0,0.149)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
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
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(151,201,61)",
      flexShrink: 0
    }
  }, "\u2605\u2605\u2605\u2605\u2605")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(23,29,28)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\"We had a wonderful time! My sister has a fear of heights and the tour guides kept her at ease the entire time. Would definitely recommend!\""), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "100%",
      color: "rgb(20,20,26)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "- Savanna C."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(81,126,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Tripadvisor (UFO Parasail)"))), /*#__PURE__*/React.createElement("div", {
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
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(20,20,26)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 15,
    viewBox: "0 0 10 15",
    fill: "none",
    style: {
      position: "relative",
      width: 10,
      height: 15,
      flexShrink: 0,
      color: "rgb(20,20,26)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.4 15.8 C 9.842 16.131 10.469 16.042 10.8 15.6 C 11.131 15.158 11.042 14.531 10.6 14.2 L 10 15 L 9.4 15.8 Z M 0 7.5 L -0.6 6.7 L -1.667 7.5 L -0.6 8.3 L 0 7.5 Z M 10.6 0.8 C 11.042 0.469 11.131 -0.158 10.8 -0.6 C 10.469 -1.042 9.842 -1.131 9.4 -0.8 L 10 0 L 10.6 0.8 Z M 10 15 L 10.6 14.2 L 0.6 6.7 L 0 7.5 L -0.6 8.3 L 9.4 15.8 L 10 15 Z M 0 7.5 L 0.6 8.3 L 10.6 0.8 L 10 0 L 9.4 -0.8 L -0.6 6.7 L 0 7.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
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
      backgroundColor: "rgb(20,20,26)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(220,220,223)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(220,220,223)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(20,20,26)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 15,
    viewBox: "0 0 10 15",
    fill: "none",
    style: {
      position: "relative",
      width: 10,
      height: 15,
      flexShrink: 0,
      color: "rgb(20,20,26)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.6 14.2 C -1.042 14.531 -1.131 15.158 -0.8 15.6 C -0.469 16.042 0.158 16.131 0.6 15.8 L 0 15 L -0.6 14.2 Z M 10 7.5 L 10.6 8.3 L 11.667 7.5 L 10.6 6.7 L 10 7.5 Z M 0.6 -0.8 C 0.158 -1.131 -0.469 -1.042 -0.8 -0.6 C -1.131 -0.158 -1.042 0.469 -0.6 0.8 L 0 0 L 0.6 -0.8 Z M 0 15 L 0.6 15.8 L 10.6 8.3 L 10 7.5 L 9.4 6.7 L -0.6 14.2 L 0 15 Z M 10 7.5 L 10.6 6.7 L 0.6 -0.8 L 0 0 L -0.6 0.8 L 9.4 8.3 L 10 7.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -3,
      top: 3583,
      width: 393,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 25,
      padding: "35px 25px 35px 25px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -120,
      top: -120,
      width: 320,
      height: 320,
      borderRadius: "50%",
      filter: "blur(80px)",
      backgroundColor: "rgba(156,199,228,0.102)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 253,
      top: 220,
      width: 280,
      height: 280,
      borderRadius: "50%",
      filter: "blur(80px)",
      backgroundColor: "rgba(18,136,214,0.102)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -78,
      top: 337,
      width: 220,
      height: 220,
      borderRadius: "50%",
      filter: "blur(80px)",
      backgroundColor: "rgba(102,169,215,0.0706)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 350,
      display: "flex",
      flexDirection: "row",
      gap: 48,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0
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
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(29,48,101)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "WHY fly with UFO"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 25,
      lineHeight: "100%",
      color: "rgb(23,29,28)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Hawaii\u2019s Original Parasailing.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 45,
      borderRadius: 999,
      backgroundColor: "rgb(151,201,61)",
      boxShadow: "0px 0px 20px 0px rgba(88,186,71,0.251)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 28px 14px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(29,48,101)",
      flexShrink: 0
    }
  }, "Learn About UFO Parasail"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-2e3e1c27a4a08e18-c019b6e2",
    style: {
      position: "relative",
      width: 66,
      height: 66,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,61,102)",
      flexShrink: 0
    }
  }, "40+ Years of History"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(0,61,102)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "First established in 1985, pioneer of commercial parasailing in Hawaii.")), /*#__PURE__*/React.createElement("div", {
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
    className: "fig-asset-60035de53869a77d-2624ecc6",
    style: {
      position: "relative",
      width: 66,
      height: 66,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,61,102)",
      flexShrink: 0
    }
  }, "Experienced Crew"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(0,61,102)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "USCG licensed captains with thousands of combined flight hours.")), /*#__PURE__*/React.createElement("div", {
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
    className: "fig-asset-7df232af1e509d95-cbf946c6",
    style: {
      position: "relative",
      width: 66,
      height: 66,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,61,102)",
      flexShrink: 0
    }
  }, "Safety Reassurance"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(0,61,102)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Strict maintenance protocols and daily weather assessments.")), /*#__PURE__*/React.createElement("div", {
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
    className: "fig-asset-6152b173ce232e19-933ab58a",
    style: {
      position: "relative",
      width: 66,
      height: 66,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,61,102)",
      flexShrink: 0
    }
  }, "Two Ways To Fly"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(23,29,28)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Choose Maui or Kona for an island-specific parasailing experience."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 45,
      borderRadius: 999,
      backgroundColor: "rgb(151,201,61)",
      boxShadow: "0px 0px 20px 0px rgba(88,186,71,0.251)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 28px 14px 28px",
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(29,48,101)",
      flexShrink: 0
    }
  }, "Learn About UFO Parasail"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -2,
      top: 4490,
      width: 390,
      height: 1294,
      overflow: "hidden",
      backgroundColor: "rgb(247,251,255)",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      padding: "32px 20px 32px 20px",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "100%",
      color: "rgb(29,48,101)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Good to Know Before You Go"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 25,
      lineHeight: "100%",
      color: "rgb(23,29,28)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "First time parasailing? You are in the right place.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 746,
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
      minHeight: 56,
      borderRadius: 24,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,113,188,0.3), 0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "22px 28px 22px 28px",
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 17,
      lineHeight: "100%",
      color: "rgb(29,48,101)",
      flexGrow: 1
    }
  }, "Do we get wet, and do I need to know how to swim?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
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
      fontSize: 22,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(119,184,240)",
      flexShrink: 0
    }
  }, "\u2212"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.85,
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(23,29,28)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Swimming skills are not required because you wear a secure life vest and take off/land directly on a dry platform. You can stay completely dry if you wish! However, if you are looking for fun, ask your captain for a \u201CUFO Dip\u201D. The captain will gently slow the boat to let your feet and legs splash into the Pacific before reeling you back up.\xA0Dips are completely optional and subject to wind safety."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 56,
      borderRadius: 24,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(229,231,235,0.6), 0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      padding: "22px 28px 22px 28px",
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 17,
      lineHeight: "100%",
      color: "rgb(29,48,101)",
      flexGrow: 1
    }
  }, "Is parasailing in Hawaii safe?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
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
      fontSize: 22,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,114,128)",
      flexShrink: 0
    }
  }, "+")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 56,
      borderRadius: 24,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(229,231,235,0.6), 0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      padding: "22px 28px 22px 28px",
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 17,
      lineHeight: "100%",
      color: "rgb(29,48,101)",
      flexGrow: 1
    }
  }, "How many times can we go up, and how high do we go?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
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
      fontSize: 22,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,114,128)",
      flexShrink: 0
    }
  }, "+")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 56,
      borderRadius: 24,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(229,231,235,0.6), 0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      padding: "22px 28px 22px 28px",
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
      width: 235,
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 17,
      lineHeight: "100%",
      color: "rgb(29,48,101)",
      flexShrink: 0
    }
  }, "Where do we check in for Maui or Kona adventures?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
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
      fontSize: 22,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,114,128)",
      flexShrink: 0
    }
  }, "+")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 56,
      borderRadius: 24,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(229,231,235,0.6), 0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      padding: "22px 28px 22px 28px",
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 17,
      lineHeight: "100%",
      color: "rgb(29,48,101)",
      flexGrow: 1
    }
  }, "what is your cancellation and trip modification policy?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
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
      fontSize: 22,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,114,128)",
      flexShrink: 0
    }
  }, "+")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 56,
      borderRadius: 24,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(229,231,235,0.6), 0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      padding: "22px 28px 22px 28px",
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 17,
      lineHeight: "100%",
      color: "rgb(29,48,101)",
      flexGrow: 1
    }
  }, "Where do trips depart?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
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
      fontSize: 22,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,114,128)",
      flexShrink: 0
    }
  }, "+"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      background: "linear-gradient(rgb(0,61,102),rgb(0,61,102))",
      boxShadow: "0px 4px 14px 0px rgba(37,32,31,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 20px 16px 20px",
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "100%",
      color: "rgb(151,201,61)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Need Help Choosing?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Not sure which flight fits your group? Call or text us and we\u2019ll help match you with the right experience.")), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 310 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      opacity: 0.6,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgba(77,140,204,0.4)"
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
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(151,201,61)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Call"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "1-800-359-4836")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(151,201,61)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Text"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-base-white)",
      flexShrink: 0
    }
  }, "1-808-661-7836"))))), /*#__PURE__*/React.createElement("div", {
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
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,61,102)",
      flexShrink: 0
    }
  }, "View All FAQ"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(240,240,240)",
      flexShrink: 0
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 2px rgb(165,70,55)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 24px 14px 24px",
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
      fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(88,186,71)",
      flexShrink: 0
    }
  }, "Send Us a Message"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(165,70,55)",
      flexShrink: 0
    }
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 854,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      backgroundColor: "rgb(0,0,0)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 24px 0px 24px",
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
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(NetworkSignalDark, {
    style: {
      position: "relative",
      width: 20,
      height: 14,
      flexShrink: 0
    },
    property1: "4 bars"
  }), /*#__PURE__*/React.createElement(WiFiSignalDark, {
    style: {
      position: "relative",
      width: 16,
      height: 14,
      flexShrink: 0
    },
    property1: "3 bars"
  }), /*#__PURE__*/React.createElement(BatteryDark, {
    style: {
      position: "relative",
      width: 25,
      height: 12,
      flexShrink: 0
    },
    status: "normal",
    level: "100"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 390,
      height: 74,
      backgroundColor: "rgb(247,251,255)",
      backdropFilter: "blur(6px)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a5d0e396e0ec1d7d",
    style: {
      position: "relative",
      width: 54,
      height: 54,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 3,
      backgroundColor: "rgb(151,201,61)",
      display: "flex",
      flexDirection: "row",
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
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.998,
    height: 14.002,
    viewBox: "0 0 15.998 14.002",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.001,
      top: 4.999,
      width: 15.998,
      height: 14.002,
      color: "rgb(242,240,239)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 0 L 0 -1 Z M 15.998 1 C 16.551 1 16.998 0.552 16.998 0 C 16.998 -0.552 16.551 -1 15.998 -1 L 15.998 0 L 15.998 1 Z M 0 6.001 C -0.552 6.001 -1 6.449 -1 7.001 C -1 7.553 -0.552 8.001 0 8.001 L 0 7.001 L 0 6.001 Z M 15.998 8.001 C 16.551 8.001 16.998 7.553 16.998 7.001 C 16.998 6.449 16.551 6.001 15.998 6.001 L 15.998 7.001 L 15.998 8.001 Z M 0 13.002 C -0.552 13.002 -1 13.449 -1 14.002 C -1 14.554 -0.552 15.002 0 15.002 L 0 14.002 L 0 13.002 Z M 15.998 15.002 C 16.551 15.002 16.998 14.554 16.998 14.002 C 16.998 13.449 16.551 13.002 15.998 13.002 L 15.998 14.002 L 15.998 15.002 Z M 0 0 L 0 1 L 15.998 1 L 15.998 0 L 15.998 -1 L 0 -1 L 0 0 Z M 0 7.001 L 0 8.001 L 15.998 8.001 L 15.998 7.001 L 15.998 6.001 L 0 6.001 L 0 7.001 Z M 0 14.002 L 0 15.002 L 15.998 15.002 L 15.998 14.002 L 15.998 13.002 L 0 13.002 L 0 14.002 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 390,
      backgroundColor: "rgb(151,201,61)",
      boxShadow: "0px 10px 30px -5px rgba(1,53,93,0.2)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(29,48,101)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 900,
      fontSize: 18,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(247,251,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "View Maui ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 900,
      fontSize: 18,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(29,48,101)",
      flexShrink: 0
    }
  }, "View Kona"))))));
}

// Globals for scripts loaded after this file.
window.Button2 = Button2;
window.Facebook = Facebook;
window.IconSet2 = IconSet2;
window.Instagram = Instagram;
window.MaskGroup = MaskGroup;
window.MaskGroup2 = MaskGroup2;
window.MenuItems2 = MenuItems2;
window.Message = Message;
window.Tripadvisor = Tripadvisor;
window.FinalHomeDesktop = FinalHomeDesktop;
window.BatteryDark = BatteryDark;
window.NetworkSignalDark = NetworkSignalDark;
window.WiFiSignalDark = WiFiSignalDark;
window.FinalHomeMobile = FinalHomeMobile;