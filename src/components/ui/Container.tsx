import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`gvContainer ${className}`.trim()}>{children}</div>;
}
