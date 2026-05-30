const featuredPosts = [
  {
    id: 1,
    title: 'Golden hour glasshouse',
    author: 'Mira Kapoor',
    avatar: 'MK',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    category: 'Architecture',
    caption:
      'Soft evening light pouring through a quiet conservatory after a long city walk.',
    likes: '8.9k',
    comments: 214,
    accent: '#f6b64d',
  },
  {
    id: 2,
    title: 'Alpine blue hour',
    author: 'Dev Sharma',
    avatar: 'DS',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
    category: 'Nature',
    caption:
      'A cold trail, one warm jacket, and mountains that made the whole morning quieter.',
    likes: '12.4k',
    comments: 389,
    accent: '#58b7ff',
  },
  {
    id: 3,
    title: 'Neon corner table',
    author: 'Aanya Rao',
    avatar: 'AR',
    image:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
    category: 'Street',
    caption:
      'Late-night colors, reflections on rain, and a cafe that looked cinematic by accident.',
    likes: '6.1k',
    comments: 142,
    accent: '#ff6b8a',
  },
  {
    id: 4,
    title: 'Editorial breakfast',
    author: 'Nikhil Verma',
    avatar: 'NV',
    image:
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    category: 'Food',
    caption:
      'A quiet morning frame with fresh fruit, strong coffee, and a very patient table.',
    likes: '4.7k',
    comments: 96,
    accent: '#64c48a',
  },
  {
    id: 5,
    title: 'Studio portrait study',
    author: 'Sara Mehta',
    avatar: 'SM',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    category: 'Portrait',
    caption:
      'Clean shadows, gentle contrast, and a portrait session built around eye contact.',
    likes: '15.2k',
    comments: 501,
    accent: '#b283ff',
  },
]

const statCards = [
  { label: 'Shared today', value: '248' },
  { label: 'Featured artists', value: '36' },
  { label: 'Collections', value: '19' },
]

const Feed = () => {
  const heroPost = featuredPosts[0]

  return (
    <div className="feed-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Community picks</p>
          <h1>Discover visual stories worth slowing down for.</h1>
          <p>
            A polished front-end experience for browsing, saving, and presenting
            image posts with a modern social-gallery feel.
          </p>
          <div className="hero-actions">
            <a href="#gallery" className="primary-action">
              Browse Feed
            </a>
            <a href="/create-post" className="secondary-action">
              Start Creating
            </a>
          </div>
        </div>

        <article className="hero-card">
          <img src={heroPost.image} alt={heroPost.title} />
          <div className="hero-card-overlay">
            <span>{heroPost.category}</span>
            <h2>{heroPost.title}</h2>
            <p>by {heroPost.author}</p>
          </div>
        </article>
      </section>

      <section className="stats-strip" aria-label="Platform highlights">
        {statCards.map((stat) => (
          <div key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="feed-toolbar" aria-label="Feed filters">
        <div>
          <p className="eyebrow">Explore feed</p>
          <h2>Fresh uploads</h2>
        </div>
        <div className="filter-pills" aria-label="Popular categories">
          <button type="button" className="active">
            All
          </button>
          <button type="button">Nature</button>
          <button type="button">Portrait</button>
          <button type="button">Street</button>
        </div>
      </section>

      <section id="gallery" className="gallery-grid" aria-label="Image feed">
        {featuredPosts.map((post) => (
          <article className="post-card" key={post.id}>
            <div className="post-image-wrap">
              <img src={post.image} alt={post.title} />
              <span style={{ '--accent': post.accent }}>{post.category}</span>
            </div>
            <div className="post-content">
              <div className="post-author">
                <span className="avatar">{post.avatar}</span>
                <div>
                  <strong>{post.title}</strong>
                  <small>{post.author}</small>
                </div>
              </div>
              <p>{post.caption}</p>
              <div className="post-meta">
                <span>{post.likes} likes</span>
                <span>{post.comments} comments</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Feed
