import React, { useState, useEffect } from "react";
import "./BlogPage.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("http://localhost:5000/blogs");
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error.message);
    }
  };

  return (
    <div className="blog-page">
      <h2>Our Blog</h2>
      <ul className="blog-list">
        {blogs.map((blog) => (
          <li key={blog.id} className="blog-card">
            {blog.image && (
              <img
                src={`http://localhost:5000${blog.image}`}
                alt={blog.title}
              />
            )}
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <p>
                <strong>Author:</strong> {blog.author}
              </p>
              <p>
                <strong>Date:</strong> {blog.date}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
