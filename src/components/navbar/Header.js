import React from "react";
import logoLET from "../../assets/let_logo.jpg";
import styles from "./Header.module.css";

import LoginButton from "./login/LoginButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <img src={logoLET} alt="let-logo-img" className={styles.logo}></img>
        <div className={styles.actions}>
          <LoginButton onOpenModal={props.onShowModal} />
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
