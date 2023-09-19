import React, { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/navbar/Header";

import Login from "./components/navbar/login/Login";
import Sidebar from "./components/right-sidebar/Sidebar";
import Trending from "./components/left-sidebar/Trending";
import Feed from "./components/feed/Feed";

function App() {
  const [modalOn, setModalOn] = useState(false);

  const openModalHandler = (e) => {
    setModalOn(true);
  };

  const closeModalHandler = (e) => {
    setModalOn(false);
  };

  return (
    <React.Fragment>
      {modalOn && <Login onHideModal={closeModalHandler}></Login>}
      <Header onShowModal={openModalHandler} />
      <div className={styles.container}>
        <Sidebar />
        <Feed />
        <Trending />
      </div>
    </React.Fragment>
  );
}

export default App;
