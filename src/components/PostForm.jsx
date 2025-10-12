// src/components/PostForm.jsx

import React, { useState, useEffect } from 'react';

const initialData = { title: '', author: '', content: '', tags: '' };

function PostForm({ onSubmit, initialPostData, onCancelEdit }) { 
    const [form, setForm] = useState(initialData);
    const isEditing = !!initialPostData;

    useEffect(() => {
        setForm(initialPostData || initialData);
    }, [initialPostData]); 

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.title || !form.author || !form.content) {
            alert("Please fill out all required fields.");
            return;
        }
        onSubmit(form); 
    };
    

    return (
        <div className="post-container">
            <h1 className="title">{isEditing ? "Edit Post" : "Create New Post"}</h1>
            
            <form onSubmit={handleSubmit}>

                <div className="field-row">
                    <div className="form-group">
                        <label htmlFor="post-title">Title</label>
                        <input type="text" id="post-title" name="title" value={form.title} onChange={handleChange} placeholder="Enter post title" required />
                    </div>
                    {/* ✅ Author is a free text input */}
                    <div className="form-group">
                        <label htmlFor="post-author">Author Name</label>
                        <input type="text" id="post-author" name="author" value={form.author} onChange={handleChange} placeholder="Enter your name" required />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="post-content">Content</label>
                    <textarea id="post-content" name="content" value={form.content} onChange={handleChange} rows="8" placeholder="Start writing post content here..." required />
                </div>

                <div className="form-group">
                    <label htmlFor="post-tags">Tags</label>
                    <input type="text" id="post-tags" name="tags" value={form.tags} onChange={handleChange} placeholder="tags (comma-separated)" />
                </div>


                <div className="form-buttons">
                    <button type="button" className="tab-button cancel-button" onClick={onCancelEdit}>
                        Cancel
                    </button>
                    <button type="submit" className="tab-button save-button">
                        {isEditing ? "Update Post" : "Save Post"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PostForm;