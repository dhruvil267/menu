import Item from "../Item/item";
import styles from "./home.module.css";
import Data from "../../services/Data"; // Adjust the import path
import { useParams } from "react-router-dom";
import {
  provideFluentDesignSystem,
  fluentDialog,
} from "@fluentui/web-components";
import Dialog from "../Dialog/dialog";

provideFluentDesignSystem().register(fluentDialog());
function Home() {
  const itemInstance = new Data();
  const menuItems = itemInstance.menuItems();
  const { id } = useParams();

  return (
    <div>
      {id && (
        <div className={styles.tableContainer}>
          <span>Table No:</span>
          <span>{id}</span>
        </div>
      )}
      <div className={styles.title}>Appetizer</div>
      <div className={styles.appContainer}>
        {menuItems.map((item) => (
          <Item
            name={item.name}
            subdetails={item.subdetails}
            price={item.price}
          />
        ))}
      </div>
      <div className={styles.title}>Main Course</div>
      <div className={styles.appContainer}>
        {menuItems.map((item) => (
          <Item
            name={item.name}
            subdetails={item.subdetails}
            price={item.price}
          />
        ))}
      </div>
      <div className={styles.title}>Desert</div>
      <div className={styles.appContainer}>
        {menuItems.map((item) => (
          <Item
            name={item.name}
            subdetails={item.subdetails}
            price={item.price}
          />
        ))}
      </div>
      <Dialog />
    </div>
  );
}

export default Home;
