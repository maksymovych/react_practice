import "./App.css";

function App() {
  const dogAPI = "https://dog.ceo/api/breeds/image/random";
  const [picURL, setPicURL] = React.useState("");
  return (
    <div className="App">
      <img className="dogImg" src={picURL} alt="randomImgOfDog" />
    </div>
  );
}

export default App;
