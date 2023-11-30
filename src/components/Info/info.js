import React from "react";
import styles from "./info.module.css";
import { Icon } from "@fluentui/react";

function Info(props) {
  const { items, count, allergy } = props;
  return (
    <div className={styles.text}>
      <span>
        {count} <Icon iconName="Cancel" className={styles.cross} /> {items}
      </span>
      {allergy?.trim() && <div>, (Allergy - {allergy})</div>}
    </div>
  );
}

export default Info;
