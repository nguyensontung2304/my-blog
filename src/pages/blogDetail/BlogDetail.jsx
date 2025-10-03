import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Related from "./Related/Related";
import { addViewedPost } from "../watchedpost/WatchedPost";
import "./BlogDetail.css";
import Loading from "../../components/Loading/Loading";

function BlogDetail() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!params.id) return;

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

  if (loading) return <Loading />;

  if (error) return <div>Error...</div>;

  if (!data) return null;

  return (
    <div className="detail">
      <div className="detail_title">{data.title}</div>
      <div className="detail_content">{data.content}</div>
      <Related type={data.type} />
    </div>
  );
}

export default BlogDetail;

// vòng đời component khi chạy
// giai đoạn initialization sẽ khởi tạo
// const params = useParams();
// const [data, setData] = useState(null);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(false);
// và rơi vào
// if (loading) return <Loading />;
// if (error) return <div>Error...</div>;
// if (!data) return null;
// xong qua giai đoạn mounting để render ra dom
// thì useEffect chạy khi useEffect chạy xong thì có data
// và loading false thì có sự thay đổi của state nên component render lại
// thì bắt đầu vào giai đoạn updation rơi vào nhánh đã có data
// và loading false thì nó không chạy 3 dòng if nữa nó chạy xuống return trong return có Related thì
// component Related chạy vòng đời của riêng nó
