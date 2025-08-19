import React from "react";

const actions = [
  {
    icon: "👤", // Replace with SVG or <img> for real icons
    title: "Hi",
    subtitle: "Sign In",
  },
  {
    icon: "📦",
    title: "Recent Order",
    subtitle: "Track Package",
  },
  {
    icon: "🔍",
    title: "Find your Perfect Rug",
    subtitle: "Visual Search",
  },
  {
    icon: "❓",
    title: "Have a Question?",
    subtitle: "Help & FAQ",
  },
];

export default function FAQ() {
  return (
    <div style={{
      display: "flex",
      gap: "2rem",
      background: "#f6f6f6",
      padding: "1rem",
      justifyContent: "center"
    }}>
      {actions.map((action, idx) => (
        <div key={idx} style={{
          background: "#fff",
          borderRadius: "1rem",
          padding: "2rem",
          minWidth: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
        }}>
          <span style={{ fontSize: "2.5rem", color: "#00838f" }}>{action.icon}</span>
          <h2 style={{ margin: "1rem 0 0 0", fontWeight: 700 }}>{action.title}</h2>
          <span style={{ color: "#444", marginTop: "0.5rem" }}>{action.subtitle}</span>
        </div>
      ))}
    </div>
  );
}