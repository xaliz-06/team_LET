import React, { useState } from "react";

import styles from "./Feed.module.css";
import Break from "../../ui/Break";
import FeedPost from "./feed_posts/post_cards/FeedPost";

const Feed = () => {
  const tabs = [
    { name: "Home Feed", id: "#1" },
    { name: "Latest", id: "#2" },
    { name: "Hot", id: "#3" },
    { name: "Discover", id: "#4" },
    { name: "Communities", id: "#5" },
  ];

  const [tabSelect, setTabSelect] = useState(tabs[0].id);

  const tabs_section = (
    <div className={styles.section_control}>
      <ul className={styles.tabs_list}>
        {tabs.map((tab) => (
          <li
            className={`${styles.tab} ${
              tabSelect === tab.id ? styles.selected : ""
            }`}
            key={tab.id}
            onClick={() => changeTabHandler(tab.id)}
          >
            {tab.name}
          </li>
        ))}
      </ul>
      <Break />
    </div>
  );

  const changeTabHandler = (id) => {
    setTabSelect(id);
  };

  return (
    <React.Fragment>
      <div className={styles.feed}>
        {tabs_section}
        <FeedPost />
      </div>
    </React.Fragment>
  );
};

export default Feed;
