import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import styles from "./App.module.css";
import Header from "./components/navbar/Header";

import Login from "./components/navbar/login/Login";
import Sidebar from "./components/right-sidebar/Sidebar";
import Trending from "./components/left-sidebar/Trending";
import Feed from "./components/feed/Feed";

import Root from "./routes/Root";
import Error from "./routes/Error";
import Home from "./routes/Home";
import FeedPost from "./components/feed/feed_posts/post_cards/FeedPost";
import Hot from "./components/feed/hot/Hot";
import Latest from "./components/feed/latest/Latest";
import CommunityPage from "./components/feed/community/CommunityPage";
import Discover from "./components/feed/discover/Discover";
import TabNav from "./components/nav/TabNav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,

    children: [
      {
        path: "",
        element: <Home />,
        children: [
          { path: "", element: <FeedPost /> },
          { path: "latest", element: <Latest /> },
          { path: "hot", element: <Hot /> },
          { path: "discover", element: <Discover /> },
          { path: "communities", element: <CommunityPage /> },
        ],
      },
      // { path: "latest", element: <Latest /> },
      // { path: "hot", element: <Hot /> },
      // { path: "discover", element: <Discover /> },
      // { path: "communities", element: <CommunityPage /> },
    ],
  },
]);

function App() {
  // const [modalOn, setModalOn] = useState(false);

  // const openModalHandler = (e) => {
  //   setModalOn(true);
  // };

  // const closeModalHandler = (e) => {
  //   setModalOn(false);
  // };

  return (
    <RouterProvider router={router}>
      {/* {modalOn && <Login onHideModal={closeModalHandler}></Login>}
      <Header onShowModal={openModalHandler} />
      <div className={styles.container}>
        <Sidebar />
        <Feed />
        <Trending />
      </div> */}
    </RouterProvider>
  );
}

export default App;
