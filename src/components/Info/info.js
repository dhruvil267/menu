import React from "react";
import { useAppContext } from "../../AppContext";
import styles from "./info.module.css";
import { Icon } from "@fluentui/react";

function Info(props) {
  const { items, count, id } = props;
  const { updateItem } = useAppContext();


  const increment = () => {
    updateItem(id, items, count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      updateItem(id, items, count - 1);
    }
  };
  return (
    <div className={styles.infoContainer}>
      <div className={styles.text}>
        <span>
          {count} <Icon iconName="Cancel" className={styles.cross} /> {items}
        </span>
      </div>
      <div className={styles.countContainer}>
        <Icon iconName="Remove" onClick={decrement} className={styles.minus} />
        <span className={styles.count}>{count}</span>
        <Icon iconName="Add" onClick={increment} className={styles.plus} />
      </div>
    </div>
  );
}

export default Info;
