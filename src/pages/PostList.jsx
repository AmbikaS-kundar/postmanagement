// src/pages/PostList.jsx

import React, { useState, useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const initialPosts = []; 

function PostList({ onGoBack, initialShowForm = false }) { 
    const [posts, setPosts] = useState(initialPosts);
    const [editingPost, setEditingPost] = useState(null); 
    const [isFormVisible, setIsFormVisible] = useState(initialShowForm); 

    useEffect(() => {
        setIsFormVisible(initialShowForm);
    }, [initialShowForm]);

    // --- CRUD Logic ---
    const handleSavePost = (postData) => {
        if (editingPost) {
            setPosts(posts.map(post => post.id === postData.id ? postData : post));
        } else {
            const newPost = { ...postData, id: Date.now() };
            setPosts([newPost, ...posts]);
        }
        setEditingPost(null);
        setIsFormVisible(false); 
    };

    const handleDelete = (postId) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            setPosts(posts.filter(post => post.id !== postId));
        }
    };

    const handleEditStart = (post) => {
        setEditingPost(post);
        setIsFormVisible(true);
    };
    
    const handleCancel = () => {
        setEditingPost(null);
        setIsFormVisible(false);
    }
    
    const startNewPost = () => {
        setEditingPost(null); 
        setIsFormVisible(true);
    }

    return (
        <div className="app-container">
            
            {/* --- Header Bar with Attractive Back Button --- */}
            <div className="main-header-bar">
                {/* "Back to Dashboard" button using the passed prop */}
                <span className="back-button" onClick={onGoBack}>
                    &larr; Back to Dashboard 
                </span>
                
                {/* Button to open the form if user is already on the list page */}
                <div className="header-action-button" onClick={startNewPost}>
                    <span className="plus-icon">+</span> Create New Post
                </div>
            </div>
            
            {/* The Form Modal */}
            {isFormVisible && (
                <div className="form-modal-overlay">
                    <div className="form-modal-content">
                        <PostForm 
                            onSubmit={handleSavePost}
                            initialPostData={editingPost}
                            onCancelEdit={handleCancel}
                            // Author is now a free text field in PostForm.jsx
                        />
                    </div>
                </div>
            )}
            
            {/* The Post List Area showing posters */}
            <div className="posts-display-area">
                <h2 className="list-heading">Recent Posts ({posts.length})</h2>
                <div className="post-cards-grid">
                    {posts.length === 0 ? (
                        <p className="empty-message">No posts found. Click 'Create New Post' above!</p>
                    ) : (
                        posts.map((post, index) => (
                            <PostCard 
                                key={post.id} 
                                post={post} 
                                onDelete={handleDelete}
                                onEdit={handleEditStart}
                                postIndex={index} // Used for poster coloring
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default PostList;