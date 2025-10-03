import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import TopPost from "./TopPost/TopPost";
import NewPost from "./NewPost/NewPost";
import ViewedPosts from "../../components/ViewedPosts/ViewedPosts";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const navigate = useNavigate();

  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
    <>
      <div className="container">
        <NewPost data={state} />
        <ViewedPosts data={state} />
        <TopPost data={state} />

        <div className="login">
          <div className="input">
            <p>example@gmail.com</p>
          </div>
          <div className="button">
            <span>Đăng ký</span>
          </div>
        </div>

        <div className="trangtong">
          <span className="trang">Trang 2</span>
        </div>
      </div>
    </>
  );
};
export default Home;
