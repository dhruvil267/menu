import React from "react";
import styles from "./thankyou.module.css";
function Thankyou(props) {
  const { help } = props;
  return (
    <div className={styles.containerStyle}>
      {!help ? (
        <div>
          <p className={styles.font30px}>Merci d'avoir passé la commande ! </p>
          <p className={styles.font25px}>
            Votre commande sera bientôt prête !!!
          </p>
        </div>
      ) : (
        <div>
          <p className={styles.font30px}>Merci pour l'attente! </p>
          <p className={styles.font25px}>
            Quelqu'un sera là pour vous aider sous peu !!!
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
