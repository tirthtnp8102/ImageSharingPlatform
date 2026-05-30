import { useEffect, useMemo, useState } from 'react'

const CreatePost = () => {
  const [caption, setCaption] = useState(
    'Chasing quiet light and clean compositions.'
  )
  const [category, setCategory] = useState('Travel')
  const [preview, setPreview] = useState('')

  const captionCount = useMemo(() => caption.trim().length, [caption])

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview)
      }
    }
  }, [preview])

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    if (preview) {
      URL.revokeObjectURL(preview)
    }

    setPreview(URL.createObjectURL(file))
  }

  return (
    <div className="create-page">
      <section className="create-intro">
        <p className="eyebrow">Create post</p>
        <h1>Prepare a beautiful image post before it goes live.</h1>
        <p>
          This screen is intentionally front-end only. It previews uploads and
          copy locally without sending data to the backend.
        </p>
      </section>

      <section className="creator-layout">
        <form className="post-form">
          <label className="upload-zone">
            <input type="file" name="image" accept="image/*" onChange={handleFileChange} />
            <span className="upload-icon">+</span>
            <strong>Drop in your best image</strong>
            <small>PNG, JPG, or WEBP previewed locally</small>
          </label>

          <label>
            Caption
            <textarea
              name="caption"
              rows="5"
              maxLength="180"
              value={caption}
              onChange={(event) => setCaption(event.target.value)}
              placeholder="Write a short story behind this image"
              required
            />
            <small>{captionCount}/180 characters</small>
          </label>

          <label>
            Category
            <select
              name="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option>Travel</option>
              <option>Nature</option>
              <option>Portrait</option>
              <option>Food</option>
              <option>Street</option>
              <option>Architecture</option>
            </select>
          </label>

          <div className="form-row">
            <button type="button" className="primary-action">
              Preview Post
            </button>
            <button type="reset" className="secondary-action">
              Clear
            </button>
          </div>
        </form>

        <aside className="live-preview" aria-label="Live post preview">
          <div className="phone-frame">
            <div className="phone-header">
              <span className="avatar">PS</span>
              <div>
                <strong>You</strong>
                <small>{category}</small>
              </div>
            </div>
            <div className="preview-image">
              {preview ? (
                <img src={preview} alt="Selected upload preview" />
              ) : (
                <img
                  src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80"
                  alt="Desert landscape preview placeholder"
                />
              )}
            </div>
            <div className="preview-copy">
              <p>{caption || 'Your caption will appear here.'}</p>
              <div className="post-meta">
                <span>New post</span>
                <span>Ready to share</span>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default CreatePost
