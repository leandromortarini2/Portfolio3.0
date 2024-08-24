import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar";
import { Home } from "./View/Home/Home";
import { Project } from "./View/Project/Project";
import { Footer } from "./Components/Footer/Footer";
import Experience from "./View/Experience/Experience";
import { About } from "./View/About/About";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className="md:w-1/5 h-screen bg-slate-600">
          <NavBar />
        </div>
        <div className="w-full md:w-4/5  ">
          <Home />
          <About />
          <Experience />
          <Project />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
