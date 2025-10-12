// src/App.jsx

import React, { useState } from 'react';
import PostList from './pages/PostList';
import './index.css'; 

const PAGES = {
    DASHBOARD: 'dashboard',
    RECENT_POSTS: 'recentPosts'
};

function App() {
    const [currentPage, setCurrentPage] = useState(PAGES.DASHBOARD); 

    // --- Dashboard/Welcome View Component (Single Action) ---
    const DashboardView = () => (
        <div className="main-layout welcome-container">
            <h1 className="welcome-heading">Welcome to POST Management</h1>
            <p className="welcome-text">
                Manage your content, see recent activity, and create new posts with ease.
            </p>
            
            <div className="dashboard-actions">
                {/* ✅ ONLY THE "CREATE NEW POST" TAB REMAINS 
                  It navigates to the PostList page and immediately opens the form.
                */}
                <div 
                    className="action-tab create-tab" 
                    onClick={() => setCurrentPage({ page: PAGES.RECENT_POSTS, showForm: true })}
                >
                    Create New Post
                </div>
            </div>
            <p className="instruction-text">
                Note: All posts are visible in the management section after creation.
            </p>
        </div>
    );

    return (
        <div className="app-main-wrapper">
            {currentPage === PAGES.DASHBOARD && <DashboardView />}
            
            {(currentPage === PAGES.RECENT_POSTS || currentPage.page === PAGES.RECENT_POSTS) && (
                <PostList 
                    onGoBack={() => setCurrentPage(PAGES.DASHBOARD)}
                    initialShowForm={currentPage.showForm || false}
                />
            )}
        </div>
    );
}

export default App;