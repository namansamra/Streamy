import React, { useState } from "react";
import styles from "./styles.module.css";

export default function ToggleButton({ label, on = false, setOn = () => {} }) {
  // const [on, setOn] = useState(false);
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div
        onClick={() => setOn(!on)}
        className={
          styles.switch + " " + (on ? styles.switchOn : styles.switchOff)
        }
      >
        <span className={styles.button}></span>
        {on ? (
          <span className={styles.text}>Yes</span>
        ) : (
          <span className={styles.text}>No</span>
        )}
      </div>
    </div>
  );
}
