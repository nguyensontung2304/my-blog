import React, { useEffect, useState } from "react";
import PostItem from "../../../components/PostItem/PostItem";
import Loading from "../../../components/Loading/Loading";
import "./related.css";

function Related({ type }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const relatedPosts = data.filter((item) => item.type === type).slice(0, 5);

  useEffect(() => {
    setLoading(true);
    fetch("https://67e105a058cc6bf78523e2e1.mockapi.io/api/v1/post")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!relatedPosts.length) {
    return null;
  }

  return (
    <div>
      <h1 className="related">Related posts</h1>
      {relatedPosts.map((post) => (
        <PostItem key={post.id} data={post} />
      ))}
    </div>
  );
}
export default Related;
