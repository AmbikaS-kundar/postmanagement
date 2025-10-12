// src/components/PostCard.jsx

import React from 'react';

// Define a set of appealing poster background colors
const POSTER_COLORS = [
    '#F0F8FF', // AliceBlue (very light blue)
    '#FFF8E1', // Pale Yellow
    '#F5F5F5', // Light Gray
    '#FAF0E6', // Linen (pale beige)
];

function PostCard({ post, onEdit, onDelete, postIndex }) {
    // Determine the color based on the index
    const cardStyle = {
        backgroundColor: POSTER_COLORS[postIndex % POSTER_COLORS.length]
    };

    return (
        <div className="post-card" style={cardStyle}>
            <h3 className="card-title">{post.title}</h3>
            <p className="card-author">By: {post.author}</p>
            <p className="card-content">{post.content.substring(0, 150)}...</p>
            <div className="card-tags">
                {post.tags.split(',').map((tag, index) => (
                    tag.trim() && (
                        <span key={index} className="tag-pill">
                            {tag.trim()}
                        </span>
                    )
                ))}
            </div>

            <div className="card-actions">
                <button 
                    className="action-button edit-button"
                    onClick={() => onEdit(post)}
                >
                    Edit
                </button>
                <button 
                    className="action-button delete-button"
                    onClick={() => onDelete(post.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default PostCard;