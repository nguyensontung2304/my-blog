import { useEffect, useState } from "react";
import { getViewedPosts } from "../../utils/recenlyViewedPost";
import PostItem from "../PostItem/PostItem";
import "./viewedposts.css";

function ViewedPosts(props) {
  const [viewedPosts, setViewedPosts] = useState([]);

  // useEffect(() => {
  //   const viewedPosts = getViewedPosts();
  //   const posts = props.data.filter((item) => viewedPosts.includes(item.id));

  //   console.log(posts);

  //   setViewedPosts(posts);

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [props.data]);

  // if (!viewedPosts?.length) {
  //   return null;
  // }
  useEffect(() => {
    if (!props.data?.length) {
      setViewedPosts([]);
      return;
    }

    // Lấy mảng id đã xem (theo thứ tự: mới -> cũ)
    const viewedIds = getViewedPosts(); // ví dụ: ["5","3","1"]

    // Map theo thứ tự trong viewedIds, tìm object tương ứng trong props.data
    const postsInOrder = viewedIds
      .map((id) =>
        // so sánh kiểu an toàn: chuyển item.id sang string
        props.data.find((item) => String(item.id) === String(id))
      )
      .filter(Boolean); // loại các phần tử undefined (nếu có bài bị xóa, ...)

    setViewedPosts(postsInOrder);
  }, [props.data]);

  if (!viewedPosts?.length) return null;
  return (
    <div>
      <h3 className="viewedposts">🏋️‍♂️ Viewed Posts</h3>
      {viewedPosts.map((post) => (
        <PostItem key={post.id} data={post} />
      ))}
    </div>
  );
}
export default ViewedPosts;
