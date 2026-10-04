export type AppIconName =
  | "plane"
  | "bed"
  | "document"
  | "users"
  | "chart"
  | "box"
  | "play"
  | "arrow"
  | "check"
  | "shield"
  | "bolt"
  | "menu"
  | "close";

export function AppIcon({ name, size = 22 }: { name: AppIconName; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (name) {
    case "plane": return <svg {...common}><path d="m22 2-8.4 8.4-4.8-1.2-2 2 3.9 2.1-3.2 3.2-2.6-.7-1.4 1.4 3.7 2.3 2.3 3.7 1.4-1.4-.7-2.6 3.2-3.2 2.1 3.9 2-2-1.2-4.8L22 2Z" /></svg>;
    case "bed": return <svg {...common}><path d="M3 18V6m0 8h18v4M7 10h4a3 3 0 0 1 3 3v1H7Z" /><path d="M7 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></svg>;
    case "document": return <svg {...common}><path d="M6 3h8l4 4v14H6Z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></svg>;
    case "users": return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
    case "chart": return <svg {...common}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>;
    case "box": return <svg {...common}><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9Z" /><path d="m4.3 7.3 7.7 4.4 7.7-4.4M12 21v-9.3" /></svg>;
    case "play": return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4Z" /></svg>;
    case "arrow": return <svg {...common}><path d="M5 12h14M14 7l5 5-5 5" /></svg>;
    case "check": return <svg {...common}><path d="m5 12 4 4L19 6" /></svg>;
    case "shield": return <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg>;
    case "bolt": return <svg {...common}><path d="m13 2-9 12h7l-1 8 9-12h-7Z" /></svg>;
    case "menu": return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case "close": return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>;
  }
}
