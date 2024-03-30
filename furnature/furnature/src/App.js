import './App.css';
import Header from "./component/Header/Index";
import  Slider from "./component/Slider/Index"
import Footer from "./component/Footer/Index";
import Delivery from "./component/Delivery/Index";
import Gallery from "./component/Galery/Index";
import About from "./component/About/Index";
import Contact from "./component/Contact/Index";

function App() {
  return (
    <div>
       <Header />
       <main>
            <Slider />
       </main>
        <Delivery />
        <Gallery />
        <About />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
