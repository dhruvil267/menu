import Item from "../Item/item";
import styles from "./home.module.css";
import React, { useState } from "react";
import {
  provideFluentDesignSystem,
  fluentDialog,
} from "@fluentui/web-components";
import Dialog from "../Dialog/dialog";
import CustomerRepresentative from "../CustomerRespresentative/customerRepresentative";
import Thankyou from "../ThankYou/thankyou";
import { useAppContext } from "../../AppContext";

provideFluentDesignSystem().register(fluentDialog());
function Home() {
  const [finalPageVisible, setFinalPageVisible] = useState(false);
  const [help, setHelp] = useState(false);

  const { menuItems } = useAppContext();

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
          <CustomerRepresentative helpBool={helpBool} />
          {menuItems.map((item) => (
            <div key={item.type}>
              <div className={styles.title}>{item.type}</div>
              <div className={styles.appContainer}>
                {item.items.map((itm) => (
                  <Item
                    key={itm.id}
                    id={itm.id}
                    name={itm.name}
                    subdetails={itm.subdetails}
                    price={itm.price}
                  />
                ))}
              </div>
            </div>
          ))}
          <Dialog thankYouBool={thankYouBool} />
        </div>
      ) : (
        <Thankyou help={help} />
      )}
    </div>
  );
}

export default Home;
