import React from 'react';
import './BlogPage.css';

const BlogPage = ({ blogs, onEdit, onDelete }) => {
    return (
        <div className="blog-page-container">
            <h2>Blog Posts</h2>
            {blogs.length === 0 ? (
                <p>No blogs posted yet.</p>
            ) : (
                <div className="blog-posts-container">
                    {blogs.map((blog, index) => (
                        <div key={index} className="blog-post-container">
                            <div className="blog-image-container">
                                {blog.image && typeof blog.image === 'string' ? (
                                    <img src={blog.image} alt={blog.title} className="blog-image" />
                                ) : blog.image && typeof blog.image === 'object' ? (
                                    <img src={URL.createObjectURL(blog.image)} alt={blog.title} className="blog-image" />
                                ) : null}
                            </div>
                            <div className="blog-content">
                                <h3>{blog.title}</h3>
                                <p>By: {blog.author}</p>
                                <p>{blog.body}</p>
                            </div>
                            <div className="blog-post-actions">
                                <button className="edit-button" onClick={() => onEdit(index)}>Edit</button>
                                <button className="delete-button" onClick={() => onDelete(index)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default BlogPage;
