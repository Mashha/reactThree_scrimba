import memesData from "./memesData";

import React from "react";

export default function Form() {
  const [meme, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomImage =
      memesArray[Math.floor(Math.random() * memesArray.length)];
    //console.log(randomImage.url)
    setMemeImage((prevMeme) => ({
      ...prevMeme,
      randomImage: randomImage.url,
    }));
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
        <img src={meme.randomImage} alt="meme image" className="meme-image" />
      </div>
    </>
  );
}
