import React, { useState } from "react";
import styles from "./dialog.module.css";
import Info from "../Info/info";
import { useAppContext } from "../../AppContext";
function Dialog({ thankYouBool }) {
  const [visible, setVisible] = useState(false);
  const { data, tableNo, customerName } = useAppContext();
  const [allergy, setAllergy] = useState("");

  let filterdata = data.filter((item) => item.count > 0);

  let allInfo = [
    {
      tableNo: tableNo,
      customerName: customerName,
      ...(allergy.trim() !== "" ? { allergy: allergy.trim() } : {}),
      itemSelected: filterdata,
    },
  ];

  const nodeApiUrl =
    "https://mhz7s6nfke.execute-api.us-east-2.amazonaws.com/default/NodeBackend";
  const dialogOpen = () => {
    setVisible(true);
  };
  const dialogClose = () => {
    setVisible(false);
  };

  const clickPlace = async () => {
    try {
      // Ensure allInfo is defined before sending the request
      if (!allInfo) {
        console.error("Print data is missing.");
        return;
      }

      const response = await fetch(`${nodeApiUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ allInfo }),
      });

      if (response.ok) {
        console.log("Print job initiated successfully");
        thankYouBool(true);
      } else {
        console.error("Error initiating print job:", response.statusText);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const handleChange = (e) => {
    setAllergy(e.target.value);
  };
  return (
    <div>
      <div className={styles.buttonDialog}>
        <div className={styles.dialogOpener}>
          <fluent-button
            appearance="accent"
            id="dialogOpener"
            onClick={dialogOpen}
          >
            <p className={styles.showDialog}>Review Order</p>
          </fluent-button>
        </div>
        {visible && (
          <fluent-dialog id="defaultDialog" trap-focus modal>
            <div className={styles.dialogContainer}>
              <p className={styles.text}>
                Please Review your Order before Placing it!
              </p>
              <p className={styles.allergyText}>
                If you have any Allergy or special requirements, Please mention
                it here
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
                    id={item.id}
                    items={item.name}
                    count={item.count}
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
