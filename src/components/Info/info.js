import React from "react";
import styles from "./info.module.css"
function Info(props) {
  const { name, items } = props;
  return (
    <div>
      <span className={styles.text}>
        {name}: <span>{items}</span>
      </span>
    </div>
  );
}

export default Info;
