import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import useOnClickOutside from "./useOnClickOutside";

function Modal({ setModal, children }) {
  const ref = useRef();
  useOnClickOutside(ref, () => setModal(false));
  useEffect(() => {
    const listener1 = (e) => {
      if (e.key === "Escape") {
        setModal(false);
      }
      if (e.key === "Enter") {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", listener1);

    return () => {
      document.removeEventListener("keydown", listener1);
    };
  }, []);

  return (
    <div
      ref={ref}
      onClick={(e) => e.stopPropagation()}
      className={styles.container}
    >
      {children}
    </div>
  );
}

export default Modal;
