import React from "react";

// Main Tabs container
export function Tabs({ activeTab, setActiveTab, children }) {
  return <div className="tabs">{children}</div>;
}

// TabsList container for tab triggers
export function TabsList({ children }) {
  return <div className="tabs-list">{children}</div>;
}

// TabsTrigger for each individual tab
export function TabsTrigger({ children, value, activeTab, setActiveTab }) {
  return (
    <button
      className={value === activeTab ? "active" : ""}
      onClick={() => setActiveTab(value)} // Change active tab when clicked
    >
      {children}
    </button>
  );
}

// TabsContent renders the content of the active tab
export function TabsContent({ value, activeTab, children }) {
  return value === activeTab ? (
    <div className="tabs-content">{children}</div>
  ) : null;
}
