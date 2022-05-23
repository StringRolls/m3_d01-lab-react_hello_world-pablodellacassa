import ironhacklogo from "../images/ironhack-logo-xs.png";
import menuLogo from "../images/menu-top-xs.png";
import "../components/Header.css";

export default function Header(props) {
  return (
    <nav className="navbar">
      <div className="icons">
        <img src={ironhacklogo} alt="logo" className="logo" />
        <img src={menuLogo} alt="logo" className="menu" />
      </div>
      <div className="headertxt">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
      </div>
      {props.children}
    </nav>
  );
}



















      <div className="headertext">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </div>

