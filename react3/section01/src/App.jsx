import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  const buttonProps = {
    text: "mail",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      <Button {...buttonProps} />
      <Button text={"cafe"} />
      <Button text={"blog"}>
        <div>자식요소</div>
        <Header />
      </Button>
    </>
  );
}

export default App;
