import React, { useState } from "react";
import styles from "./clientInfo.module.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const ClientInfo = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name)
    navigate("/home");
  };

  const { id } = useParams();


  return (
    <div className={styles.clientInfo}>
      <div className={styles.nameInputContainer}>
        <h2>Welcome to XYZ</h2>
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
          <button type="submit" className={styles.submitButton}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientInfo;
