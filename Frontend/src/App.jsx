import { useState } from 'react'
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

const starterPosts = [
  {
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    caption: 'Golden light spilling across a quiet glasshouse after rain.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Blue hour in the mountains, where everything feels slower.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
    caption: 'A neon street corner turning an ordinary night cinematic.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    caption: 'Breakfast arranged like a tiny editorial shoot.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    caption: 'Soft studio portrait with clean contrast and calm shadows.',
  },
]

const App = () => {
  const [posts, setPosts] = useState(starterPosts)

  const addPost = (post) => {
    setPosts((currentPosts) => [post, ...currentPosts])
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
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
