import React, { useState } from "react";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { Icon } from "@fluentui/react";
import styles from "./item.module.css";
import { useAppContext } from "../../AppContext";

initializeIcons(); // This initializes the default set of Fluent UI icons

function Item(props) {
  const { name, subdetails, price, id } = props;
  const { updateItem, data } = useAppContext();

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    updateItem(id, name, count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      updateItem(id, name, count - 1);
    }
  };
  let filterdata = data.filter((item) => item.count > 0);
  console.log(filterdata);
  return (
    <div className={styles.wrapper}>
      <div className={styles.itemName}>
        <p className={styles.header}>{name}</p>
        <p className={styles.subtext}>{subdetails}</p>
      </div>
      <div className={styles.priceContainer}>
        <p className={styles.price}>${price}</p>
        <div className={styles.countContainer}>
          <Icon
            iconName="Remove"
            onClick={decrement}
            className={styles.minus}
          />
          <span className={styles.count}>{count}</span>
          <Icon iconName="Add" onClick={increment} className={styles.plus} />
        </div>
      </div>
    </div>
  );
}

export default Item;
