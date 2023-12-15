import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import styles from "./App.module.css";

import LandingPage from "./routes/LandingPage";
import Root from "./routes/Root";
import Error from "./routes/Error";
import Home from "./routes/Home";
import Topic from "./routes/Topic";

import FeedPost from "./components/feed/feed_posts/post_cards/FeedPost";
import Hot from "./components/feed/hot/Hot";
import Latest from "./components/feed/latest/Latest";
import CommunityPage from "./components/feed/community/CommunityPage";
import Discover from "./components/feed/discover/Discover";

import TopicFeed from "./components/Topics/topics_list/TopicFeed";
import TopicDetails from "./components/Topics/topic_details/TopicDetails";
import HotTopicsList from "./components/Topics/topics_list/HotTopicsList";
import AllTopics from "./components/Topics/topics_list/AllTopics";

const router = createBrowserRouter([
  // {
  //   path: "",
  //   element: <LandingPage />,
  // },
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
      {
        path: "topic",
        element: <Topic />,
        children: [
          { path: "", element: <TopicFeed /> },
          { path: "hot-topics", element: <HotTopicsList /> },
          { path: "all-topics", element: <AllTopics /> },
          {
            path: ":topicId",
            element: <TopicDetails />,
          },
        ],
      },
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
