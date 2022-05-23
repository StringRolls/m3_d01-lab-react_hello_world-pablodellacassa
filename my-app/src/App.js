import Header from "./components/Header";
import Info from "./components/Info";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Header>
      <Button linkTo="https://www.react.com" prompt="Awesome!" />
      </Header>
      <Info />
    </div>
  );
}

export default App;
