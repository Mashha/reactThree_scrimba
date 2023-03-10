export default function Form() {
  return (
    <div className="form-container">
      <form action="">
        <input type="text" placeholder="Top text" />
        <input type="text" placeholder="Bottom text" />
        <button type="submit" className="submit-btn">
          Get a new meme image 🖼
        </button>
      </form>
    </div>
  );
}
