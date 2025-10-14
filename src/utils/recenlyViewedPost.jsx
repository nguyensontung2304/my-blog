// utils/viewedPosts.js

const VIEWED_POSTS_KEY = "viewedPosts";

/**
 * Thêm một bài viết vào danh sách đã xem
 * @param {Object} post - object bài viết {id, title, slug, date}
 */
export const addViewedPost = (post) => {
  const viewedPosts = JSON.parse(localStorage.getItem(VIEWED_POSTS_KEY)) || [];

  // Loại bỏ bài trùng
  const filtered = viewedPosts.filter((item) => item !== post);

  // Thêm bài mới lên đầu
  const updatedPosts = [post, ...filtered];

  // Giới hạn 5 bài
  localStorage.setItem(
    VIEWED_POSTS_KEY,
    JSON.stringify(updatedPosts.slice(0, 5))
  );
};

/**
 * Lấy danh sách bài đã xem
 * @returns {Array} - danh sách bài đã xem
 */
export const getViewedPosts = () => {
  try {
    return JSON.parse(localStorage.getItem(VIEWED_POSTS_KEY)) || [];
  } catch (error) {
    return [];
  }
};
