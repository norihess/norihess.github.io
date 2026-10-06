// Components.d.ts — the complete catalog of the 8 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.CustomDesktop) and usable directly in JSX.
import * as React from 'react';

// figma layer: "custom - desktop" (node 9360:24483)
export interface CustomDesktopProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Facebook" (node 8925:1597)
export interface FacebookProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "flat";
}

// figma layer: "Form" (node 786:187)
export interface FormProps {
  className?: string;
  style?: React.CSSProperties;
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

// figma layer: "Menu Items" (node 8925:1753)
export interface MenuItems2Props {
  className?: string;
  style?: React.CSSProperties;
  menuItem?: "nested" | "active" | "active - nested" | "default";
  /** Text content; defaults to "Nav Item". */
  text1?: string;
}

// figma layer: "private - desktop" (node 9360:23030)
export interface PrivateDesktopProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Tripadvisor" (node 8925:1610)
export interface TripadvisorProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "flat";
}

declare const CustomDesktop: React.FC<CustomDesktopProps>;
declare const Facebook: React.FC<FacebookProps>;
declare const Form: React.FC<FormProps>;
declare const IconSet: React.FC<IconSetProps>;
declare const Instagram: React.FC<InstagramProps>;
declare const MenuItems2: React.FC<MenuItems2Props>;
declare const PrivateDesktop: React.FC<PrivateDesktopProps>;
declare const Tripadvisor: React.FC<TripadvisorProps>;
declare global {
  interface Window {
    CustomDesktop: React.FC<CustomDesktopProps>;
    Facebook: React.FC<FacebookProps>;
    Form: React.FC<FormProps>;
    IconSet: React.FC<IconSetProps>;
    Instagram: React.FC<InstagramProps>;
    MenuItems2: React.FC<MenuItems2Props>;
    PrivateDesktop: React.FC<PrivateDesktopProps>;
    Tripadvisor: React.FC<TripadvisorProps>;
  }
}
