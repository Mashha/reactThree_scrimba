import memesData from "./memesData";

export default function Form() {
  function showUrl() {
    const memesArray = memesData.data.memes
    const randomImage =
      memesArray[
        Math.floor(Math.random() * memesArray.length)
      ];
    console.log(randomImage.url);
  }
  return (
    <div className="form-container">
      <div className="form">
        <input type="text" placeholder="Top text" />
        <input type="text" placeholder="Bottom text" />
        <button className="submit-btn" onClick={showUrl}>
          Get a new meme image 🖼
        </button>
      </div>
    </div>
  );
}
