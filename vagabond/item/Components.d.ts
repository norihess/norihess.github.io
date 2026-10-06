// Components.d.ts — the complete catalog of the 10 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Button) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Button" (node 195:601)
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  hasIcon?: boolean;
  textInput?: string;
  button?: "square" | "square/hollow" | "rounded" | "rounded/hollow" | "pill" | "pill/hollow";
  icon?: React.ReactNode;
}

// figma layer: "Check Calendar" (node 273:2240)
export interface CheckCalendarProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Facebook" (node 8925:1597)
export interface FacebookProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "flat";
}

// figma layer: "iconSet" (node 8999:890)
export interface IconSetProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: "mapMarker" | "duration" | "pickup" | "user" | "calendar" | "boat" | "users" | "snowflake" | "hotel" | "snorkel" | "food" | "sun" | "clock";
}

// figma layer: "Instagram" (node 8925:1605)
export interface InstagramProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "flat";
}

// figma layer: "Item Page - Desktop" (node 9359:21129)
export interface ItemPageDesktopProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Item Page - Desktop — Mobile 390" (node 9359:22136)
export interface ItemPageDesktopMobile390Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Menu Items" (node 8925:1753)
export interface MenuItems2Props {
  className?: string;
  style?: React.CSSProperties;
  menuItem?: "nested" | "active" | "active - nested" | "default";
  /** Text content; defaults to "Nav Item". */
  text1?: string;
}

// figma layer: "Navigation - Mobile" (node 714:1060)
export interface NavigationMobileProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "MENU". */
  text1?: string;
}

// figma layer: "Tripadvisor" (node 8925:1610)
export interface TripadvisorProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "flat";
}

declare const Button: React.FC<ButtonProps>;
declare const CheckCalendar: React.FC<CheckCalendarProps>;
declare const Facebook: React.FC<FacebookProps>;
declare const IconSet: React.FC<IconSetProps>;
declare const Instagram: React.FC<InstagramProps>;
declare const ItemPageDesktop: React.FC<ItemPageDesktopProps>;
declare const ItemPageDesktopMobile390: React.FC<ItemPageDesktopMobile390Props>;
declare const MenuItems2: React.FC<MenuItems2Props>;
declare const NavigationMobile: React.FC<NavigationMobileProps>;
declare const Tripadvisor: React.FC<TripadvisorProps>;
declare global {
  interface Window {
    Button: React.FC<ButtonProps>;
    CheckCalendar: React.FC<CheckCalendarProps>;
    Facebook: React.FC<FacebookProps>;
    IconSet: React.FC<IconSetProps>;
    Instagram: React.FC<InstagramProps>;
    ItemPageDesktop: React.FC<ItemPageDesktopProps>;
    ItemPageDesktopMobile390: React.FC<ItemPageDesktopMobile390Props>;
    MenuItems2: React.FC<MenuItems2Props>;
    NavigationMobile: React.FC<NavigationMobileProps>;
    Tripadvisor: React.FC<TripadvisorProps>;
  }
}
