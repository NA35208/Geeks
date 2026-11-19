import React from "react";

function CelebrityCard({ title, imageUrl, description, buttonLabel, buttonUrl }) {
  return (
    <div style={{
      maxWidth: "380px",
      background: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
      padding: "20px",
      margin: "12px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <div>
        <img
          src={imageUrl}
          alt={title}
          style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "8px", marginBottom: "12px" }}
        />
        <h2 style={{ fontSize: "20px", fontWeight: "bold", margin: "0 0 8px 0", color: "#1f2937" }}>
          {title}
        </h2>
        <p style={{ color: "#4b5563", fontSize: "14px", lineHeight: "1.5", marginBottom: "16px" }}>
          {description}
        </p>
      </div>
      <a
        href={buttonUrl}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          textAlign: "center",
          background: "#3b82f6",
          color: "#ffffff",
          padding: "10px 16px",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "600"
        }}
      >
        {buttonLabel}
      </a>
    </div>
  );
}

export default CelebrityCard;
