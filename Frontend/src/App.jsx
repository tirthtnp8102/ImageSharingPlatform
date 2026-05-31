import { useState, useEffect } from 'react'
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
import axios from "axios";

const starterPosts = [
  {
    _id: 0,
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    caption: 'Golden light spilling across a quiet glasshouse after rain.',
  }
]

const App = () => {
  const [posts, setPosts] = useState(starterPosts);

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then((res) => {
        setPosts(res.data.posts);
      })
  }, []);

  const addPost = (post) => {
    setPosts((currentPosts) => [post, ...currentPosts]);
  }

  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="topbar">
          <NavLink to="/feed" className="brand" aria-label="PixelShare home">
            <span className="brand-mark">PS</span>
            <span>
              <strong>PixelShare</strong>
              <small>Share images with captions</small>
            </span>
          </NavLink>

          <nav className="main-nav" aria-label="Primary navigation">
            <NavLink to="/feed">Feed</NavLink>
            <NavLink to="/create-post">Create</NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/feed" replace />} />
            <Route path="/feed" element={<Feed posts={posts} />} />
            <Route
              path="/create-post"
              element={<CreatePost onCreatePost={addPost} />}
            />
            <Route path="*" element={<Navigate to="/feed" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
