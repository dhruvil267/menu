import React, { useState } from "react";
import styles from "./dialog.module.css";
import Info from "../Info/info";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../AppContext";
import axios from "axios";

function Dialog() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const { data, updateAllergy, tableNo, customerName } = useAppContext();
  const [allergy, setAllergy] = useState("");
  let filterdata = data.filter((item) => item.count > 0);
  let allInfo = [
    { tableNo: tableNo, customerName: customerName, itemSelected: filterdata },
  ];
  const apiUrl =
    "https://7nljo5xu0j.execute-api.us-east-2.amazonaws.com/default/printOrderData";

  const dialogOpen = () => {
    setVisible(true);
  };
  const dialogClose = () => {
    setVisible(false);
  };
  const clickPlace = async () => {
    try {
      // Assuming filteredData is an object containing the data you want to send
      const response = await axios.post(apiUrl, allInfo);
      // Handle the response as needed
      console.log("API Response:", response.data);
      navigate("/thankyou");
    } catch (error) {
      // Handle errors
      console.error("Error sending data to the backend:", error);
    }
    console.log(allInfo);

    // navigate("/thankyou");
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
