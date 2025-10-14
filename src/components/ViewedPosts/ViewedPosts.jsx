import { useEffect, useState } from "react";
import { getViewedPosts } from "../../utils/recenlyViewedPost";
import PostItem from "../PostItem/PostItem";

function ViewedPosts(props) {
  const [viewedPosts, setViewedPosts] = useState([]);

  useEffect(() => {
    const viewedPosts = getViewedPosts();
    const posts = props.data.filter((item) => viewedPosts.includes(item.slug));
    console.log(posts);

    setViewedPosts(posts);

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
