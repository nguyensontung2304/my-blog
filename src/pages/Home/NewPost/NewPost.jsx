import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BLOG_DATA } from "../../../constants/blogData";
import PostItem from "../../../components/PostItem/PostItem";

// function NewPost() {
//   const navigate = useNavigate();
//   const sortedPosts = [...BLOG_DATA].sort(
//     (a, b) => new Date(b.date) - new Date(a.date)
//   );

//   return (
//     <div>
//       <ul>
//         <h2 className="newposts">New Posts</h2>
//         {sortedPosts.map((item) => (
//           <PostItem data={item} />
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default NewPost;

function NewPost(props) {
  const sortedPosts = [...props.data]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div>
      <ul>
        <h2 className="newposts">🏋️‍♂️ New Posts</h2>
        {sortedPosts.map((item) => (
          <PostItem data={item} />
        ))}
      </ul>
    </div>
  );
}
export default NewPost;
