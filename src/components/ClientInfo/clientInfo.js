import React, { useState, useEffect } from "react";
import styles from "./clientInfo.module.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../AppContext";
import { useLocation } from "react-router-dom";

const ClientInfo = () => {
  const navigate = useNavigate();
  const { updateCustomerName, updateTableNo } = useAppContext();
  const location = useLocation();
  const id = location.hash.replace("#/", "");
  const initialClientName = localStorage.getItem("inputValue") || "";
  const [name, setName] = useState(initialClientName);
  //const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    updateTableNo(id);
    updateCustomerName(name);
    navigate("/home");
  };

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
