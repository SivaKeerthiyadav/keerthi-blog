import React, { useState } from 'react';
import HomePage from './HomePage';
import CreateNewPage from './CreateNewPage';
import BlogPage from './BlogPage';

const App = () => {
    const [blogs, setBlogs] = useState([]);
    const [editingBlog, setEditingBlog] = useState(null);

    const handlePublish = (newBlogPost) => {
        setBlogs([...blogs, newBlogPost]);
    };

    const handleEdit = (blog) => {
        setEditingBlog(blog);
    };

    const handleUpdate = (updatedBlog) => {
        // Update the blog in the list of blogs
        const updatedBlogs = blogs.map(blog =>
            blog.id === updatedBlog.id ? updatedBlog : blog
        );
        setBlogs(updatedBlogs);
        setEditingBlog(null);
    };

    const handleDelete = (blogId) => {
        // Filter out the blog with the specified id
        const updatedBlogs = blogs.filter(blog => blog.id !== blogId);
        setBlogs(updatedBlogs);
    };

    return (
        <div>
            <HomePage />
            <CreateNewPage onPublish={handlePublish} blogToEdit={editingBlog} />
            <BlogPage blogs={blogs} onEdit={handleEdit} onDelete={handleDelete} onUpdate={handleUpdate} />
        </div>
    );
}

export default App;
