import React, { useState } from "react";
import styles from "./dialog.module.css";
import Info from "../Info/info";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../AppContext";
function Dialog() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const { data, updateAllergy, tableNo, customerName } = useAppContext();
  const [allergy, setAllergy] = useState("");

  let filterdata = data.filter((item) => item.count > 0);
  const updatedInfo = filterdata.map(item => {
    // Check if the 'allergy' property exists and is a string
    if (typeof item.allergy === 'string' && item.allergy.trim() === '') {
      // If it's an empty string after trimming, create a new object without the 'allergy' property
      const { allergy, ...itemWithoutAllergy } = item;
      return itemWithoutAllergy;
    }
    // If 'allergy' is not an empty string or not a string, leave the object as is
    return item;
  });
  let allInfo = [
    { tableNo: tableNo, customerName: customerName, itemSelected: updatedInfo },
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
    console.log(allInfo)

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
      navigate("/thankyou");

      if (response.ok) {
        console.log("Print job initiated successfully");
      } else {
        console.error("Error initiating print job:", response.statusText);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
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
                    id={item.id}
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
