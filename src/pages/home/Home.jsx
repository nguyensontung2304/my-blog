import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import ViewedPosts from "../../components/ViewedPosts/ViewedPosts";
import "./Home.css";
import NewPost from "./NewPost/NewPost";
import TopPost from "./TopPost/TopPost";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://67e105a058cc6bf78523e2e1.mockapi.io/api/v1/post")
      .then((res) => res.json())
      .then((json) => setState(json))
      .then(() => setLoading(false))
      .catch(() => setError(true));
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div className="container">
      <ViewedPosts data={state} />
      <NewPost data={state} />
      <TopPost data={state} />

      <div className="pagination">
        <button
          onClick={() => navigate("/BlogDetail2")}
          className="pagination_nextpage"
        >
          Trang 2
        </button>
      </div>
    </div>
  );
};
export default Home;
