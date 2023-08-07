import React from "react";

import styles from "./LoginButton.module.css";

const LoginButton = (props) => {
  const iconClasses = "fa-regular fa-user fa-xl";

  return (
    <button className={styles.btn} onClick={props.onOpenModal}>
      <span className={styles.icon}>
        <i className={iconClasses}></i>
      </span>
    </button>
  );
};

export default LoginButton;
