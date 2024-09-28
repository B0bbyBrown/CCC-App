import React from "react";
import "./ScrollArea.css";

export function ScrollArea({ children, className }) {
  return <div className={`scroll-area ${className}`}>{children}</div>;
}
