import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/front/About";
import "../src/assets/sass/main.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
