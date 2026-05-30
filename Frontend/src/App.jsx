import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="topbar">
          <NavLink to="/feed" className="brand" aria-label="PixelShare home">
            <span className="brand-mark">P</span>
            <span>
              <strong>PixelShare</strong>
              <small>Image sharing studio</small>
            </span>
          </NavLink>

          <nav className="main-nav" aria-label="Primary navigation">
            <NavLink to="/feed">Explore</NavLink>
            <NavLink to="/create-post">Create</NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/feed" replace />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
