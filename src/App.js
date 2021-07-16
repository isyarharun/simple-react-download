import "./App.css";
import Header from "./components/Header";
import Home from "./components";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;