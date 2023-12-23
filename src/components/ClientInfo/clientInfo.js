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
  const hashParts = location.hash.split("/");

  const tableName = hashParts[1];
  const id = hashParts[2];

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
      "https://lsizpwqao4.execute-api.us-east-2.amazonaws.com/default/madamely";

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

        const resultArray = Object.keys(organizedItems).map((type) => ({
          type,
          items: organizedItems[type],
        }));
        updateMenuItems(resultArray);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  // Update the localStorage whenever the inputValue changes
  useEffect(() => {
    localStorage.setItem("inputValue", name);
  }, [name]);

  return (
    <div className={styles.clientInfo}>
      <div className={styles.nameInputContainer}>
        <h2>Bienvenue chez Madame Ly</h2>
        {id && (
          <div className={styles.tableContainer}>
            <span>Table No:</span>
            <span>{id}</span>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <span className={styles.nameText}>
            Nom:
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
            Suivante
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientInfo;
