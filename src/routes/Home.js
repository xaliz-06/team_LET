import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/right-sidebar/Sidebar";
import Feed from "../components/feed/Feed";
import Trending from "../components/left-sidebar/Trending";
import TabNav from "../components/nav/TabNav";

import styles from "./route-styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      {/* <Feed /> */}
      <TabNav />
      <Trending />
    </div>
  );
};

export default Home;
