import { useMemo, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const fallbackImage =
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80'

const CreatePost = ({ onCreatePost }) => {
  const navigate = useNavigate();
  const [image, setImage] = useState('')
  const [caption, setCaption] = useState('')
  const [imageName, setImageName] = useState('')

  const captionCount = useMemo(() => caption.trim().length, [caption])
  const previewImage = image || fallbackImage

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    const reader = new FileReader()

    reader.onload = () => {
      setImage(String(reader.result))
      setImageName(file.name)
    }

    reader.readAsDataURL(file)
  }

  const handleSubmit = (event) => {
    event.preventDefault()


    if (!image || !caption.trim()) {
      return
    }

    const formData = new FormData(event.target);

    let post;

    axios.post("http://localhost:3000/create-post", formData)
      .then((res) => {
        post = res.data.post;
        onCreatePost(post);
        navigate('/feed');
      })

  }

  const handleReset = () => {
    setImage('')
    setCaption('')
    setImageName('')
  }

  return (
    <div className="create-page">
      <section className="create-intro">
        <p className="eyebrow">Create post</p>
        <h1>Build a post with only an image and caption.</h1>
        <p>
          No backend integration is used here. The form creates a local
          front-end post matching your Mongoose schema fields.
        </p>
      </section>

      <section className="creator-layout">
        <form className="post-form" onSubmit={handleSubmit} onReset={handleReset}>
          <label className="upload-zone">
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageUpload}
              required
            />
            <span className="upload-icon">+</span>
            <strong>{imageName || 'Choose an image'}</strong>
            <small>The image is converted to a string preview locally.</small>
          </label>

          <label className="field-group">
            Caption
            <textarea
              name="caption"
              rows="5"
              maxLength="160"
              value={caption}
              onChange={(event) => setCaption(event.target.value)}
              placeholder="Write a caption for this image"
              required
            />
            <small>{captionCount}/160 characters</small>
          </label>

          <div className="form-row">
            <button type="submit" className="primary-action">
              Create Post
            </button>
            <button type="reset" className="secondary-action">
              Clear
            </button>
          </div>
        </form>

        <aside className="live-preview" aria-label="Post preview">
          <article className="preview-card">
            <div className="preview-image">
              <img src={previewImage} alt={caption || 'Selected post preview'} />
            </div>
            <p>{caption || 'Your caption preview will appear here.'}</p>
          </article>
        </aside>
      </section>
    </div>
  )
}

export default CreatePost
