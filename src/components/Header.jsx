import logo from "../assets/Troll_Face.png";

export default function Header() {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-left">
          <img src={logo} alt="" />
          <h3>Meme Generator</h3>
        </div>
        <div className="nav-right">
          <p>React Course - Project 3</p>
        </div>
      </nav>
    </>
  );
}
