import Item from "../Item/item";
import styles from "./home.module.css";
import Data from "../../services/Data"; // Adjust the import path
import React, { useState } from "react";
import {
  provideFluentDesignSystem,
  fluentDialog,
} from "@fluentui/web-components";
import Dialog from "../Dialog/dialog";
import CustomerRepresentative from "../CustomerRespresentative/customerRepresentative";
import Thankyou from "../ThankYou/thankyou";

provideFluentDesignSystem().register(fluentDialog());
function Home() {
  const [finalPageVisible, setFinalPageVisible] = useState(false);
  const [help, setHelp] = useState(false);

  const itemInstance = new Data();
  const menuItemsAppetizer = itemInstance.menuItemsAppetizer();
  const menuItemsMainCourse = itemInstance.menuItemsMainCourse();
  const menuItemsDessert = itemInstance.menuItemsDessert();
  const thankYouBool = (thankYouBool) => {
    setFinalPageVisible(thankYouBool);
  };
  const helpBool = (helpBool) => {
    setFinalPageVisible(helpBool);
    setHelp(true);
  };
  return (
    <div>
      {!finalPageVisible ? (
        <div className={styles.homeContainer}>
          <CustomerRepresentative helpBool={helpBool}/>
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
                key={menuItemsAppetizer.length + idx}
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
                key={
                  menuItemsAppetizer.length + menuItemsMainCourse.length + idx
                }
                name={item.name}
                subdetails={item.subdetails}
                price={item.price}
              />
            ))}
          </div>
          <Dialog thankYouBool={thankYouBool} />
        </div>
      ) : (
        <Thankyou help={help}/>
      )}
    </div>
  );
}

export default Home;
