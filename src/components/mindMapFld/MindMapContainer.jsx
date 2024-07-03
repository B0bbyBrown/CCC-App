import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MindMap } from "./MindMap";

export const MindMapContainer = () => {
  const [isMindMapOpen, setIsMindMapOpen] = useState(false);
  const navigate = useNavigate();

  const openMindMap = () => {
    setIsMindMapOpen(true);
  };

  const closeMindMap = () => {
    setIsMindMapOpen(false);
  };

  return (
    <>
      <button onClick={openMindMap} style={buttonStyle}>
        Open Mind Map
      </button>
      {isMindMapOpen && (
        <MindMap
          onClose={closeMindMap}
          navigateTo={(path) => {
            closeMindMap();
            navigate(path);
          }}
        />
      )}
    </>
  );
};

const buttonStyle = {
  position: "absolute",
  top: "10px",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "10px 20px",
  backgroundColor: "#800080",
  color: "#ffffff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  zIndex: 10,
};
