import React, { useState, useEffect } from "react";
import styles from "./clientInfo.module.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../AppContext";
import { useLocation } from "react-router-dom";

const ClientInfo = () => {
  const navigate = useNavigate();
  const { updateCustomerName, updateTableNo, updateMenuItems } =
    useAppContext();
  const location = useLocation();
  const urlData = location.hash.split("/");
  const base64 = urlData[1];
  let decodedFragment = atob(base64);
  decodedFragment=decodedFragment.split("/")

  const tableName = decodedFragment[1];
  const restaurantName = decodedFragment[2];
  const id = decodedFragment[3];
  const initialClientName = localStorage.getItem("inputValue") || "";
  const [name, setName] = useState(initialClientName);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    updateTableNo(id);
    updateCustomerName(name);
    navigate("/home");
  };
  useEffect(() => {
    const nodeApiUrl =
      "https://mhz7s6nfke.execute-api.us-east-2.amazonaws.com/default/NodeBackend";

    const urlWithQueryParam = `${nodeApiUrl}?tableName=${encodeURIComponent(
      tableName
    )}`;
    fetch(urlWithQueryParam, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const organizedItems = {};
        data.Items.forEach((item) => {
          if (!organizedItems[item.type]) {
            organizedItems[item.type] = [];
          }
          organizedItems[item.type].push(item);
        });

        let resultArray = Object.keys(organizedItems).map((type) => ({
          type,
          sequence: organizedItems[type][0].sequence,
          items: organizedItems[type],
        }));
        resultArray = resultArray.sort((a, b) => a.sequence - b.sequence);
        updateMenuItems(resultArray);
      })
      .catch((error) => console.error("Error:", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Update the localStorage whenever the inputValue changes
  useEffect(() => {
    localStorage.setItem("inputValue", name);
  }, [name]);

  return (
    <div className={styles.clientInfo}>
      <div className={styles.nameInputContainer}>
        <h2>Welcome to {restaurantName}</h2>
        {id && (
          <div className={styles.tableContainer}>
            <span>Table No:</span>
            <span>{id}</span>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <span className={styles.nameText}>
            Name:
            <input
              type="text"
              value={name}
              onChange={handleChange}
              placeholder="Enter your name here..."
              className={styles.nameInput}
            />
          </span>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={name?.trim().length === 0}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientInfo;
