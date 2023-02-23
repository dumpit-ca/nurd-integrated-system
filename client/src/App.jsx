import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../src/assets/sass/main.scss";

function App() {
   return (
      <div className="App">
         <Navbar />
         <div className="content"></div>
         <Footer />
      </div>
   );
}

export default App;
