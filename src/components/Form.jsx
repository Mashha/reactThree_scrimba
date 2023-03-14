import React from "react";

export default function Form() {
  React.useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  function getMemeImage() {
    const memesArray = allMemes;
    const randomImage =
      memesArray[Math.floor(Math.random() * memesArray.length)];

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: randomImage.url,
    }));
  }

  function eventHandler(e) {
    const { name, value } = e.target;
    setMeme((prevData) => {
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
