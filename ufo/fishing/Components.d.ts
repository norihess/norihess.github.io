// Components.d.ts — the complete catalog of the 15 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.BatteryDark) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Battery / Dark" (node 7210:9998)
export interface BatteryDarkProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "normal" | "charging";
  level?: "10" | "100" | "50";
}

// figma layer: "Button" (node 6963:3049)
export interface Button2Props {
  className?: string;
  style?: React.CSSProperties;
  showArrow?: boolean;
  type?: "primary" | "secondary" | "tertiary";
  leftIcon?: string;
  state?: "default" | "hover" | "pressed";
  size?: "lg" | "md" | "sm";
  showLeftIcon?: boolean;
  width?: "fit content" | "full width";
  /** Text content; defaults to "Book Now". */
  text1?: string;
  /** Text content; defaults to "→". */
  text2?: string;
}

// figma layer: "Facebook" (node 7043:6067)
export interface FacebookProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "flat";
}

// figma layer: "Final Homepage - Desktop" (node 7580:1174)
export interface FinalHomepageDesktopProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Homepage - Mobile" (node 7599:10174)
export interface HomepageMobileProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "iconSet2" (node 6963:2970)
export interface IconSet2Props {
  className?: string;
  style?: React.CSSProperties;
  icon?: "mapMarker" | "duration" | "ticket" | "user" | "calendar" | "gear" | "info" | "alert" | "food" | "dog" | "seat" | "pay" | "gift" | "parking" | "vip" | "track" | "weight" | "group";
}

// figma layer: "inshoreVSsport" (node 7061:7899)
export interface InshoreVSsportProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Inshore Fishing". */
  text1?: string;
  /** Text content; defaults to "Sport Fishing". */
  text2?: string;
  /** Text content; defaults to "MOST POPULAR". */
  text3?: string;
  /** Text content; defaults to "Calm nearshore waters, light tackle, and high-action fun along Maui’s coast.". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "Instagram" (node 7043:6100)
export interface InstagramProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "flat";
}

// figma layer: "Mask group" (node 7043:6095)
export interface MaskGroupProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Mask group" (node 7043:6960)
export interface MaskGroup2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Menu Items" (node 6910:1221)
export interface MenuItems2Props {
  className?: string;
  style?: React.CSSProperties;
  menuItem?: "nested" | "active" | "active - nested" | "default";
  /** Text content; defaults to "Nav Item". */
  text1?: string;
}

// figma layer: "message" (node 7732:273)
export interface MessageProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Network Signal / Dark" (node 7210:9931)
export interface NetworkSignalDarkProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "0 bars" | "1 bars" | "2 bars" | "3 bars" | "4 bars";
}

// figma layer: "Tripadvisor" (node 7043:6074)
export interface TripadvisorProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "flat";
}

// figma layer: "WiFi Signal / Dark" (node 7210:9977)
export interface WiFiSignalDarkProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "0 bars" | "1 bars" | "2 bars" | "3 bars";
}

declare const BatteryDark: React.FC<BatteryDarkProps>;
declare const Button2: React.FC<Button2Props>;
declare const Facebook: React.FC<FacebookProps>;
declare const FinalHomepageDesktop: React.FC<FinalHomepageDesktopProps>;
declare const HomepageMobile: React.FC<HomepageMobileProps>;
declare const IconSet2: React.FC<IconSet2Props>;
declare const InshoreVSsport: React.FC<InshoreVSsportProps>;
declare const Instagram: React.FC<InstagramProps>;
declare const MaskGroup: React.FC<MaskGroupProps>;
declare const MaskGroup2: React.FC<MaskGroup2Props>;
declare const MenuItems2: React.FC<MenuItems2Props>;
declare const Message: React.FC<MessageProps>;
declare const NetworkSignalDark: React.FC<NetworkSignalDarkProps>;
declare const Tripadvisor: React.FC<TripadvisorProps>;
declare const WiFiSignalDark: React.FC<WiFiSignalDarkProps>;
declare global {
  interface Window {
    BatteryDark: React.FC<BatteryDarkProps>;
    Button2: React.FC<Button2Props>;
    Facebook: React.FC<FacebookProps>;
    FinalHomepageDesktop: React.FC<FinalHomepageDesktopProps>;
    HomepageMobile: React.FC<HomepageMobileProps>;
    IconSet2: React.FC<IconSet2Props>;
    InshoreVSsport: React.FC<InshoreVSsportProps>;
    Instagram: React.FC<InstagramProps>;
    MaskGroup: React.FC<MaskGroupProps>;
    MaskGroup2: React.FC<MaskGroup2Props>;
    MenuItems2: React.FC<MenuItems2Props>;
    Message: React.FC<MessageProps>;
    NetworkSignalDark: React.FC<NetworkSignalDarkProps>;
    Tripadvisor: React.FC<TripadvisorProps>;
    WiFiSignalDark: React.FC<WiFiSignalDarkProps>;
  }
}
