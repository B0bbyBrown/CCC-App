import React, { useEffect, useRef, useState } from "react";
import { PopupContent } from "./PopupContent";
import styles from "./PopupMain.module.css";

export const PopupMain = ({ position, label, data }) => {
  const popupRef = useRef(null);
  const [popupPosition, setPopupPosition] = useState({
    x: position.x,
    y: position.y,
  });
  const [transformStyle, setTransformStyle] = useState(
    "translate(-50%, -100%)"
  );

  useEffect(() => {
    if (popupRef.current) {
      const popup = popupRef.current;
      const rect = popup.getBoundingClientRect();
      const headerHeight = 80;
      const footerHeight = 60;
      const padding = 20;

      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      let newX = position.x;
      let newY = position.y;
      let newTransform = "translate(-50%, -100%)";

      // Vertical positioning
      if (position.y - rect.height < headerHeight + padding) {
        newY = position.y + 20;
        newTransform = "translate(-50%, 0)";
      } else {
        newY = position.y - 10;
      }

      // Horizontal positioning
      if (position.x + rect.width / 2 > viewportWidth - padding) {
        newX = viewportWidth - padding - rect.width / 2;
      } else if (position.x - rect.width / 2 < padding) {
        newX = padding + rect.width / 2;
      }

      setPopupPosition({ x: newX, y: newY });
      setTransformStyle(newTransform);
    }
  }, [position]);

  return (
    <div
      ref={popupRef}
      className={`${styles.popup} ${
        data ? styles.popupWithData : styles.popupNoData
      }`}
      style={{
        left: `${popupPosition.x}px`,
        top: `${popupPosition.y}px`,
        transform: transformStyle,
      }}
    >
      <div className={styles.content}>
        <PopupContent label={label} data={data} />
      </div>
    </div>
  );
};
