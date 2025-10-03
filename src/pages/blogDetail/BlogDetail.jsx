// import { useParams } from "react-router-dom";
// import { BLOG_DATA } from "../../constants/blogData";
// import "./BlogDetail.css";
// import React, { useEffect, useState } from "react";
// import { addViewedPost } from "../watchedpost/WatchedPost";

// function BlogDetail() {
//   const params = useParams();
//   const [state, setState] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     fetch(
//       `https://67e105a058cc6bf78523e2e1.mockapi.io/api/v1/post/${params.id}`
//     )
//       .then((res) => res.json())
//       .then((json) => setState(json))
//       .then(() => setLoading(false))
//       .catch(() => setError(true));
//   }, []);

//   // const data = BLOG_DATA.find((item) => item.slug === params.slug);

//   // useEffect(() => {
//   //   if (params.slug) {
//   //     addViewedPost(params.slug);
//   //   }
//   // }, []);

//   return (
//     <div className="detail">
//       <div className="detail_title">{data.title}</div>
//       <div className="detail_content">{data.content}</div>
//     </div>
//   );
// }

// export default BlogDetail;

import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { addViewedPost } from "../watchedpost/WatchedPost";
import "./BlogDetail.css";

function BlogDetail() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!params.id) return;

    setLoading(true);

    fetch(
      `https://67e105a058cc6bf78523e2e1.mockapi.io/api/v1/post/${params.id}`
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setError(true));

    // lưu bài đã xem
    addViewedPost(params.id);
  }, [params.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return null;

  return (
    <div className="detail">
      <div className="detail_title">{data.title}</div>
      <div className="detail_content">{data.content}</div>
    </div>
  );
}

export default BlogDetail;
