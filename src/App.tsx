import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar";
import { About } from "./View/About/About";
import { Home } from "./View/Home/Home";
import { Project } from "./View/Project/Project";
import { Footer } from "./Components/Footer/Footer";

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
          <Project />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
