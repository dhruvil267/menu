import React from "react";
import styles from "./customerRepresentative.module.css";
import { Icon } from "@fluentui/react";
import { useAppContext } from "../../AppContext";

function CustomerRepresentative({ helpBool }) {
  const { tableNo, customerName } = useAppContext();
  const nodeApiUrl =
    "https://mhz7s6nfke.execute-api.us-east-2.amazonaws.com/default/NodeBackend";
  let allInfo = [
    { tableNo: tableNo, customerName: customerName, needHelp: true },
  ];
  const handleCustomer = async () => {
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
        helpBool(true);
      } else {
        console.error("Error initiating print job:", response.statusText);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };
  return (
    <div className={styles.containerStyle} onClick={handleCustomer}>
      <Icon iconName="Telemarketer" className={styles.icon} />
      <span className={styles.representative}>Aide</span>
    </div>
  );
}

export default CustomerRepresentative;
