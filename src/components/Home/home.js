import Item from "../Item/item";
import styles from "./home.module.css";
import Data from "../../services/Data"; // Adjust the import path
import {
  provideFluentDesignSystem,
  fluentDialog,
} from "@fluentui/web-components";
import Dialog from "../Dialog/dialog";

provideFluentDesignSystem().register(fluentDialog());
function Home() {
  const itemInstance = new Data();
  const menuItemsAppetizer = itemInstance.menuItemsAppetizer();
  const menuItemsMainCourse = itemInstance.menuItemsMainCourse();
  const menuItemsDessert = itemInstance.menuItemsDessert();


  return (
    <div className={styles.homeContainer}>
      
      <div className={styles.title}>Appetizer</div>
      <div className={styles.appContainer}>
        {menuItemsAppetizer.map((item, idx) => (
          <Item
            key={idx}
            id={item.id}
            name={item.name}
            subdetails={item.subdetails}
            price={item.price}
          />
        ))}
      </div>
      <div className={styles.title}>Main Course</div>
      <div className={styles.appContainer}>
        {menuItemsMainCourse.map((item, idx) => (
          <Item
            id={item.id}
            key={menuItemsMainCourse.length + idx}
            name={item.name}
            subdetails={item.subdetails}
            price={item.price}
          />
        ))}
      </div>
      <div className={styles.title}>Desert</div>
      <div className={styles.appContainer}>
        {menuItemsDessert.map((item, idx) => (
          <Item
            id={item.id}
            key={2 * menuItemsDessert.length + idx}
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
