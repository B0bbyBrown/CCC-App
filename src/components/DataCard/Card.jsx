import React, { useState } from "react";
import styles from "./Card.module.css";

export const Card = ({ category, data }) => {
  const [flipped, setFlipped] = useState(false);

  const handleMouseEnter = () => {
    setFlipped(true);
  };

  const handleMouseLeave = () => {
    setFlipped(false);
  };

  return (
    <div
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${styles.cardInner} ${flipped ? styles.flipped : ""}`}>
        <div className={styles.cardFront}>
          <div className={styles.gradientBackground}></div>
          <div className={styles.overlay}></div>
          <h3 className={styles.text}>{category}</h3>
        </div>
        <div className={styles.cardBack}>
          <h4 className={styles.text}>{category}</h4>
          <pre className={styles.text}>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};
