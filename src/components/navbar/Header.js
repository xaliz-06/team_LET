import React from "react";
import { Link } from "react-router-dom";

import logoLET from "../../assets/let-better-logo.png";
import styles from "./Header.module.css";

import LoginButton from "./login/LoginButton";
import Group from "./groups/Group";
import Notification from "./notications/Notification";
import SearchBar from "./search_bar/SearchBar";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <Link to="/">
          <img src={logoLET} alt="let-logo-img" className={styles.logo}></img>
        </Link>

        <div className={styles.search_bar}>
          <SearchBar></SearchBar>
        </div>
        <div className={styles.actions}>
          <Notification />
          <Group />
          <LoginButton onOpenModal={props.onShowModal} />
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
