import { Link } from 'react-router-dom'

const Feed = ({ posts }) => {
  const featuredPost = posts[0]

  return (
    <div className="feed-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Image + Caption</p>
          <h1>A beautiful feed for simple visual stories.</h1>
          <p>
            This frontend follows your post schema exactly. Every post displayed
            here is shaped as an image string and a caption string.
          </p>
          <div className="hero-actions">
            <a href="#feed-gallery" className="primary-action">
              Explore Feed
            </a>
            <Link to="/create-post" className="secondary-action">
              Create Post
            </Link>
          </div>
        </div>

        {featuredPost && (
          <article className="hero-preview">
            <img src={featuredPost.image} alt={featuredPost.caption} />
            <div className="hero-preview-copy">
              <span>Featured post</span>
              <p>{featuredPost.caption}</p>
            </div>
          </article>
        )}
      </section>

      <section className="feed-heading">
        <div>
          <p className="eyebrow">Latest posts</p>
          <h2>Community gallery</h2>
        </div>
        <Link to="/create-post" className="compact-action">
          Add Image
        </Link>
      </section>

      <section id="feed-gallery" className="gallery-grid" aria-label="Image feed">
        {posts.length > 0 ? (
          posts.map((post) => (
            <article className="post-card" key={post._id}>
              <div className="post-image-wrap">
                <img src={post.image} alt={post.caption} />
              </div>
              <p>{post.caption}</p>
            </article>
          ))
        ) : (
          <div className="empty-state">
            <h2>No posts yet</h2>
            <p>Create the first image post with only an image and caption.</p>
            <Link to="/create-post" className="primary-action">
              Create Post
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}

export default Feed
