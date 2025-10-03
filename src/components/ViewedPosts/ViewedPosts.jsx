import { useState, useEffect } from "react";
import { BLOG_DATA } from "../../constants/blogData";
import { getViewedPosts } from "../../pages/watchedpost/WatchedPost";
import PostItem from "../PostItem/PostItem";

// function ViewedPosts() {
// const [viewedPosts, setViewedPosts] = useState([]);

// useEffect(() => {
//   const viewedPosts = getViewedPosts();
//   const posts = BLOG_DATA.filter((item) => viewedPosts.includes(item.slug));
//   console.log(posts);

//   setViewedPosts(posts);
// }, []);

// if (!viewedPosts?.length) {
//   return null;
// }

function ViewedPosts(props) {
  const [viewedPosts, setViewedPosts] = useState([]);

  useEffect(() => {
    const viewedPosts = getViewedPosts();
    const posts = props.data.filter((item) => viewedPosts.includes(item.slug));
    console.log(posts);

    setViewedPosts(posts);
  }, []);

  if (!viewedPosts?.length) {
    return null;
  }
  return (
    <div>
      <h3>Bài đã xem</h3>
      {viewedPosts.map((post) => (
        <PostItem key={post.id} data={post} />
      ))}
    </div>
  );
}
export default ViewedPosts;
