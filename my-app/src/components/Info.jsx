import declarativeLogo from "../images/icon1.png";
import componentsLogo from "../images/icon2.png";
import singlewayLogo from "../images/icon3.png";
import jsxLogo from "../images/icon4.png";
import "../components/Info.css";

export default function Info(props) {
  return (
    <div className="infoMain">
        <div className="infoDeclarative">
            <img src={declarativeLogo} alt=""/>
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="infoComponents">
            <img src={componentsLogo} alt=""/>
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p> 
        </div>
        <div className="infoSingleWay">
            <img src={singlewayLogo} alt=""/>
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="infoJSX">
            <img src={jsxLogo} alt=""/>
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
    </div>
  );
}









