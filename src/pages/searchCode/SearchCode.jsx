import React, { useState } from "react";
import "./SearchCode.css";
import { BLOG_DATA } from "../../constants/blogData";
import PostItem from "../../components/PostItem/PostItem";
import { Search } from "lucide-react";

function SearchCode() {
  const [search, setSearch] = useState("");

  const filteredSearch = BLOG_DATA.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.content.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="container">
      <span className="input-container">
        <Search width={20} height={20} />
        <input
          className="input"
          type="text"
          placeholder=" Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </span>

      <ul>
        {filteredSearch.length > 0 ? (
          filteredSearch.map((item) => (
            <li key={item.slug}>
              <PostItem data={item} />
            </li>
          ))
        ) : (
          <p className="text">Không tìm thấy bài viết nào</p>
        )}
      </ul>
    </div>
  );
}
export default SearchCode;
