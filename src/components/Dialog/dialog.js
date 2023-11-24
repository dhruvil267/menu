import React, { useState } from "react";
import styles from "./dialog.module.css";
import Info from "../Info/info";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../AppContext";

function Dialog() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const { data, updateAllergy } = useAppContext();
  const [allergy, setAllergy] = useState("");
  let filterdata = data.filter((item) => item.count > 0);

  const dialogOpen = () => {
    setVisible(true);
  };
  const dialogClose = () => {
    setVisible(false);
  };
  const clickPlace = () => {
    console.log(filterdata);
    navigate("/thankyou");
  };

  const handleChange = (e) => {
    setAllergy(e.target.value);
    updateAllergy(e.target.value);
  };
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
          <fluent-dialog id="defaultDialog" trap-focus modal>
            <div className={styles.dialogContainer}>
              <p className={styles.text}>
                Please Review your Order before Placing it!
              </p>
              <p className={styles.allergyText}>
                If you have any Allergy, Please mention it here
                <input
                  className={styles.inputText}
                  onChange={handleChange}
                  value={allergy}
                ></input>
              </p>
              <div className={styles.infoDiv}>
                {filterdata.map((item, idx) => (
                  <Info
                    key={idx}
                    name={item.customerName}
                    items={item.name}
                    count={item.count}
                    allergy={allergy}
                  />
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
                <button
                  className={styles.showDialog}
                  onClick={clickPlace}
                  disabled={filterdata.length === 0}
                >
                  Place Order
                </button>
              </div>
            </div>
          </fluent-dialog>
        )}
      </div>
    </div>
  );
}

export default Dialog;
