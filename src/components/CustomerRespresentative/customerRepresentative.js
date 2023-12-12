import React from "react";
import styles from "./customerRepresentative.module.css";
import { Icon } from "@fluentui/react";

function CustomerRepresentative() {
  const handleCustomer = () => {

  };
  return (
    <div className={styles.containerStyle}>
      <Icon
        iconName="Telemarketer"
        onClick={handleCustomer}
        className={styles.icon}
      />
      <span className={styles.representative}>Help</span>
    </div>
  );
}

export default CustomerRepresentative;
