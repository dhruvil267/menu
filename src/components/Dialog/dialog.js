import React, { useState } from "react";
import styles from "./dialog.module.css";
import Data from "../../services/Data"; 
import Info from "../Info/info";
function Dialog() {
  const [visible, setVisible] = useState(false);

  const dialogOpen = () => {
    setVisible(true);
  };
  const dialogClose = () => {
    setVisible(false);
  };
  const itemInstance = new Data();
  const people = itemInstance.people();
  return (
    <div>
      <div className={styles.buttonDialog}>
        <fluent-button
          appearance="accent"
          id="dialogOpener"
          onClick={dialogOpen}
        >
          <p className={styles.showDialog}>Review Order</p>
        </fluent-button>
        {visible && (
          <fluent-dialog id="defaultDialog" trap-focus modal style={{ width: '50vw' }}>
            <div className={styles.dialogContainer}>
              <p className={styles.text}>
                Please Review your Order before Placing it!!!
              </p>
              <p className={styles.allergyText}>
                If you have any Allergy, Please mention it here
                <input className={styles.inputText}></input>
              </p>
              <div className={styles.infoDiv}>
                {people.map((person) => (
                  <Info name={person.name} items={person.items} />
                ))}
              </div>
              <div className={styles.actionButtons}>
                <fluent-button
                  id="dialogCloser"
                  appearance="accent"
                  onClick={dialogClose}
                >
                  <p className={styles.showDialog}>Back</p>
                </fluent-button>
                <p className={styles.showDialog}>Place Order</p>
              </div>
            </div>
          </fluent-dialog>
        )}
      </div>
    </div>
  );
}

export default Dialog;
