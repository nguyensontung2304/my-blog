import React from "react";
import { useNavigate } from "react-router-dom";
import "./PostItem.css";

const PostItem = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="layout" onClick={() => navigate("/detail/" + data.id)}>
      <div className="top">
        <span className="top_number">{data.view}</span>
        <span className="top_time">{data.date}</span>
      </div>
      <div className="text1">
        <h4>{data.title}</h4>
      </div>
      <div className="text2">
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default PostItem;
