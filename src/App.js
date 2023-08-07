import React, { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/navbar/Header";

import Login from "./components/navbar/login/Login";

function App() {
  const [modalOn, setModalOn] = useState(true);

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
    </React.Fragment>
  );
}

export default App;
