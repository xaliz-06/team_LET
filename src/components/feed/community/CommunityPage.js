import React from "react";

import styles from "./CommunityPage.module.css";
import PostCard from "../feed_posts/post_cards/PostCard";

const CommunityPage = () => {
  const feed_posts = [];

  let output = feed_posts.map((post) => <PostCard key={post.id} post={post} />);

  if (feed_posts.length === 0) {
    output = (
      <div className={styles.error_box}>
        <p className={styles.p_special}>
          Sorry! looks like we have nothing to show you at the moment. Please
          try again after some time!
        </p>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className={styles.feed_posts_container}>{output}</div>
    </React.Fragment>
  );
};

export default CommunityPage;
