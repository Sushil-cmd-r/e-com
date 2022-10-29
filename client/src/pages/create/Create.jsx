import './create.scss'
import { placeholder } from '../../assets/images'
import { Close } from '../../assets/svgs'
import { useState, useRef } from "react";

const Create = () => {
  const [image, setImage] = useState(placeholder);
  const fileRef = useRef(null);

  const handleImage = (e) => {
    e.preventDefault();
    const file = e.target?.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  return (
    <main className='create'>
      <div className="create-container">
        <div className="create-image">
          <label htmlFor="image">
            <input
              type="file"
              style={{ display: "none" }}
              id="image"
              ref={fileRef}
              onChange={handleImage}
            />
            <img src={image} alt="" />
          </label>
        </div>
        <div className="create-info">
          <div className="detail">
            <span className="key">
              Product Name:
            </span>
            <span className="value">
              <input type="text" />
            </span>
          </div>
          <div className="detail">
            <span className="key">
              Description:
            </span>
            <span className="value description">
              <textarea name="desc" id="desc" rows="3"></textarea>
            </span>
          </div>
          <div className="detail">
            <span className="key">
              Price:
            </span>
            <span className="value">
              <input type="text" />
            </span>
          </div>
          <button className="buy">
            Create
          </button>
        </div>
      </div>
    </main>
  )
}

export default Create