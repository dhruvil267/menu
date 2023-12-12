import React from "react";
import styles from "./thankyou.module.css";
function Thankyou(props) {
  const { help } = props;
  return (
    <div className={styles.containerStyle}>
      {!help ? (
        <div>
          <p className={styles.font30px}>Thank you for placing the order! </p>
          <p className={styles.font25px}>Your order will be ready soon!!!</p>
        </div>
      ) : (
        <div>
          <p className={styles.font30px}>Thank you for waiting! </p>
          <p className={styles.font25px}>
            Someone will be here to assist you shortly!!!
          </p>
        </div>
      )}

      <span role="img" aria-label="smile" className={styles.emojiStyle}>
        😊
      </span>
    </div>
  );
}

export default Thankyou;
