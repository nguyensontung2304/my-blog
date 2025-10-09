import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { BLOG_DATA } from "../../../constants/blogData";
import PostItem from "../../../components/PostItem/PostItem";

// function TopPost() {
//   const navigate = useNavigate();
//   const topPosts = [...BLOG_DATA].sort((a, b) => b.view - a.view).slice(0, 5);

//   return (
//     <div>
//       <h2 className="topposts">Top Posts</h2>
//       {topPosts.map((item) => (
//         <PostItem data={item} />
//       ))}
//     </div>
//   );
// }

function TopPost(props) {
  const topPosts = [...props.data].sort((a, b) => b.view - a.view).slice(0, 5);

  return (
    <div>
      <h2 className="topposts">🏋️‍♂️ Top Posts</h2>
      {topPosts.map((item) => (
        <PostItem data={item} />
      ))}
    </div>
  );
}
export default TopPost;
