
import Navbar from "./Components/Navbar";
import CartoonGrid from "./Components/CartoonGrid";
import cartoons from "./Data";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <CartoonGrid cartoons={cartoons} />
    </div>
  );
}

export default App;
