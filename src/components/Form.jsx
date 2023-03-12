import memesData from "./memesData";

import React from "react";

export default function Form() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomImage =
      memesArray[Math.floor(Math.random() * memesArray.length)];
    setMemeImage(randomImage.url);
  }
  return (
    <>
      <div className="form-container">
        <div className="form">
          <input type="text" placeholder="Top text" />
          <input type="text" placeholder="Bottom text" />
          <button className="submit-btn" onClick={getMemeImage}>
            Get a new meme image 🖼
          </button>
        </div>
      </div>

      <div className="image">
        <img src={memeImage} alt="meme image" className="meme-image" />
      </div>
    </>
  );
}
