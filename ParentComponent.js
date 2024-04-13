import React, { useState } from 'react';
import BlogPage from './BlogPage';
import CreateNewPage from './CreateNewPage';

const ParentComponent = () => {
    const [blogs, setBlogs] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleEdit = (index) => {
        setEditingIndex(index);
    };

    const handleUpdate = (updatedBlog) => {
        setBlogs(prevBlogs => {
            return prevBlogs.map((blog, index) => {
                if (index === editingIndex) {
                    return updatedBlog;
                }
                return blog;
            });
        });
        setEditingIndex(null);
    };

    const handleDelete = (index) => {
        const updatedBlogs = blogs.filter((_, i) => i !== index);
        setBlogs(updatedBlogs);
    };

    return (
        <div>
            {editingIndex !== null ? (
                <CreateNewPage
                    onUpdate={(blog) => handleUpdate(blog)}
                    blogToEdit={blogs[editingIndex]}
                    onCancel={() => setEditingIndex(null)}
                />
            ) : (
                <div>
                    <CreateNewPage
                        onPublish={(blog) => setBlogs([...blogs, blog])}
                    />
                    <BlogPage blogs={blogs} onEdit={handleEdit} onDelete={handleDelete} />
                </div>
            )}
        </div>
    );
};

export default ParentComponent;
