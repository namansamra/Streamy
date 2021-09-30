import React, { useState } from "react";
import useNavigation from "../GoToRoute/useNavigation";
import styles from "./styles.module.css";

export default function FilterIcon({
  name,
  id,
  enable,
  setFilterId,
  redirectTo,
  onMouseMove,
}) {
  const goTo = useNavigation();

  return (
    <div
      onClick={() => {
        if (redirectTo) {
          goTo(redirectTo);
        }

        if (id != undefined) setFilterId(id);
      }}
      className={styles.container + " " + (enable ? styles.enable : "")}
    >
      {name}
    </div>
  );
}
