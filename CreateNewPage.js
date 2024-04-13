import React, { useState, useEffect } from 'react';
import './CreateNewPage.css';

const CreateNewPage = ({ onPublish, onUpdate, blogToEdit, onCancel }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState(null);
    const [titleError, setTitleError] = useState('');
    const [authorError, setAuthorError] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (blogToEdit) {
            setTitle(blogToEdit.title);
            setAuthor(blogToEdit.author);
            setBody(blogToEdit.body);
            setIsEditing(true);
        } else {
            setTitle('');
            setAuthor('');
            setBody('');
            setIsEditing(false);
        }
    }, [blogToEdit]);

    const handlePublish = () => {
        if (!title) {
            setTitleError('Please enter a title.');
            return;
        } else {
            setTitleError('');
        }
        if (!author) {
            setAuthorError('Please enter an author name.');
            return;
        } else {
            setAuthorError('');
        }

        const newBlogPost = {
            title,
            author,
            body,
            image
        };

        if (isEditing) {
            onUpdate({ ...blogToEdit, ...newBlogPost });
            onCancel(); // Reset editing state after update
        } else {
            onPublish(newBlogPost);
        }

        setTitle('');
        setAuthor('');
        setBody('');
        setImage(null);
    };

    const handleFileChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

    return (
        <div className="container">
            <h2>{isEditing ? 'Edit Blog' : 'Add New Blog'}</h2>
            <div className="input-group">
                <label>Blog Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                {titleError && <p className="error-message">{titleError}</p>}
            </div>
            <div className="input-group">
                <label>Blog Author:</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
                {authorError && <p className="error-message">{authorError}</p>}
            </div>
            <div className="input-group">
                <label>Blog Body:</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
            <div className="input-group">
                <label>Blog Image:</label>
                <input type="file" onChange={handleFileChange} />
                {image && <p>{image.name}</p>}
            </div>
            <button onClick={handlePublish}>{isEditing ? 'Update' : 'Publish'}</button>
            {isEditing && <button onClick={onCancel}>Cancel</button>}
        </div>
    );
}

export default CreateNewPage;
