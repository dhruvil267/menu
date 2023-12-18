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
  const ENTREES = itemInstance.ENTREES();
  const BÁNHMÌ = itemInstance.BÁNHMÌ();
  const SAUTÉS = itemInstance.SAUTÉS();
  const SOUPES = itemInstance.SOUPES();
  const REPASCOMBINES = itemInstance.REPASCOMBINES();
  const GRILLADESAVECSALADE = itemInstance.GRILLADESAVECSALADE();
  const SPECIALITÉS = itemInstance.SPECIALITÉS();
  const REPASSIGNATUREMADAMELY = itemInstance.REPASSIGNATUREMADAMELY();
  const SOUPETRIO = itemInstance.SOUPETRIO();
  const BÁNHMÌTRIO = itemInstance.BÁNHMÌTRIO();
  const DESSERTSETBREUVAGES = itemInstance.DESSERTSETBREUVAGES();

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
          <div className={styles.title}>ENTREES</div>
          <div className={styles.appContainer}>
            {ENTREES.map((item, idx) => (
              <Item
                key={idx}
                id={item.id}
                name={item.name}
                subdetails={item.subdetails}
                price={item.price}
              />
            ))}
          </div>
          <div className={styles.title}>BÁNH MÌ</div>
          <div className={styles.appContainer}>
            {BÁNHMÌ.map((item, idx) => (
              <Item
                id={item.id}
                key={ENTREES.length + idx}
                name={item.name}
                subdetails={item.subdetails}
                price={item.price}
              />
            ))}
          </div>
          <div className={styles.title}>SAUTÉS</div>
          <div className={styles.appContainer}>
            {SAUTÉS.map((item, idx) => (
              <Item
                id={item.id}
                key={ENTREES.length + BÁNHMÌ.length + idx}
                name={item.name}
                subdetails={item.subdetails}
                price={item.price}
              />
            ))}
          </div>
          <div className={styles.title}>SOUPES</div>
          <div className={styles.appContainer}>
            {SOUPES.map((item, idx) => (
              <Item
                id={item.id}
                key={ENTREES.length + BÁNHMÌ.length + SAUTÉS.length + idx}
                name={item.name}
                subdetails={item.subdetails}
                price={item.price}
              />
            ))}
          </div>
          <div className={styles.title}>REPAS COMBINES</div>
          <div className={styles.appContainer}>
            {REPASCOMBINES.map((item, idx) => (
              <Item
                id={item.id}
                key={
                  ENTREES.length +
                  BÁNHMÌ.length +
                  SAUTÉS.length +
                  SOUPES.length +
                  idx
                }
                name={item.name}
                subdetails={item.subdetails}
                price={item.price}
              />
            ))}
          </div>
          <div className={styles.title}>GRILLADES AVEC SALADE</div>
          <div className={styles.appContainer}>
            {GRILLADESAVECSALADE.map((item, idx) => (
              <Item
                id={item.id}
                key={
                  ENTREES.length +
                  BÁNHMÌ.length +
                  SAUTÉS.length +
                  SOUPES.length +
                  REPASCOMBINES.length +
                  idx
                }
                name={item.name}
                subdetails={item.subdetails}
                price={item.price}
              />
            ))}
          </div>
          <div className={styles.title}>SPECIALITÉS</div>
          <div className={styles.appContainer}>
            {SPECIALITÉS.map((item, idx) => (
              <Item
                id={item.id}
                key={
                  ENTREES.length +
                  BÁNHMÌ.length +
                  SAUTÉS.length +
                  SOUPES.length +
                  REPASCOMBINES.length +
                  GRILLADESAVECSALADE.length +
                  idx
                }
                name={item.name}
                subdetails={item.subdetails}
                price={item.price}
              />
            ))}
          </div>
          <div className={styles.title}>REPAS SIGNATURE MADAME LY</div>
          <div className={styles.appContainer}>
            {REPASSIGNATUREMADAMELY.map((item, idx) => (
              <Item
                id={item.id}
                key={
                  ENTREES.length +
                  BÁNHMÌ.length +
                  SAUTÉS.length +
                  SOUPES.length +
                  REPASCOMBINES.length +
                  GRILLADESAVECSALADE.length +
                  SPECIALITÉS.length +
                  idx
                }
                name={item.name}
                subdetails={item.subdetails}
                price={item.price}
              />
            ))}
          </div>
          <div className={styles.title}>SOUPE TRIO</div>
          <div className={styles.appContainer}>
            {SOUPETRIO.map((item, idx) => (
              <Item
                id={item.id}
                key={
                  ENTREES.length +
                  BÁNHMÌ.length +
                  SAUTÉS.length +
                  SOUPES.length +
                  REPASCOMBINES.length +
                  GRILLADESAVECSALADE.length +
                  SPECIALITÉS.length +
                  REPASSIGNATUREMADAMELY.length +
                  idx
                }
                name={item.name}
                subdetails={item.subdetails}
                price={item.price}
              />
            ))}
          </div>
          <div className={styles.title}>BÁNH MÌ TRIO</div>
          <div className={styles.appContainer}>
            {BÁNHMÌTRIO.map((item, idx) => (
              <Item
                id={item.id}
                key={
                  ENTREES.length +
                  BÁNHMÌ.length +
                  SAUTÉS.length +
                  SOUPES.length +
                  REPASCOMBINES.length +
                  GRILLADESAVECSALADE.length +
                  SPECIALITÉS.length +
                  REPASSIGNATUREMADAMELY.length +
                  SOUPETRIO.length +
                  idx
                }
                name={item.name}
                subdetails={item.subdetails}
                price={item.price}
              />
            ))}
          </div>
          <div className={styles.title}>DESSERTS ET BREUVAGES</div>
          <div className={styles.appContainer}>
            {DESSERTSETBREUVAGES.map((item, idx) => (
              <Item
                id={item.id}
                key={
                  ENTREES.length +
                  BÁNHMÌ.length +
                  SAUTÉS.length +
                  SOUPES.length +
                  REPASCOMBINES.length +
                  GRILLADESAVECSALADE.length +
                  SPECIALITÉS.length +
                  REPASSIGNATUREMADAMELY.length +
                  SOUPETRIO.length +
                  BÁNHMÌTRIO.length +
                  idx
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
        <Thankyou help={help} />
      )}
    </div>
  );
}

export default Home;
