import React from "react";
import styles from "./thankyou.module.css";
function Thankyou() {
  return (
    <div className={styles.containerStyle}>
      <p className={styles.font30px}>Thank you for placing the order! </p>
      <p className={styles.font25px}>Your order will be ready soon!!!</p>
      <span role="img" aria-label="smile" className={styles.emojiStyle}>
        😊
      </span>
    </div>
  );
}

export default Thankyou;
