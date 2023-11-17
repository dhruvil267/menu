import React, { useState } from "react";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { Icon } from "@fluentui/react";
import styles from "./item.module.css";
initializeIcons(); // This initializes the default set of Fluent UI icons

function Item(props) {
  const { name, subdetails } = props;

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.itemName}>
        <p className={styles.header}>{name}</p>
        <p className={styles.subtext}>{subdetails}</p>
      </div>
      <div className={styles.countContainer}>
        <Icon iconName="Remove" onClick={decrement} className={styles.minus} />
        <span className={styles.count}>{count}</span>
        <Icon iconName="Add" onClick={increment} className={styles.plus} />
      </div>
    </div>
  );
}

export default Item;
