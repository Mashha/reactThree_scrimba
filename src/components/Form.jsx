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

  console.log(meme);

  function eventHandler(e) {
    const { name, value } = e.target;
    setMemeImage((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  return (
    <>
      <div className="form-container">
        <div className="form">
          <input
            type="text"
            placeholder="Top text"
            name="topText"
            value={meme.topText}
            onChange={eventHandler}
          />
          <input
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={eventHandler}
          />
          <button className="submit-btn" onClick={getMemeImage}>
            Get a new meme image 🖼
          </button>
        </div>
      </div>

      <div className="image">
        <img src={meme.randomImage} alt="meme image" className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </>
  );
}
