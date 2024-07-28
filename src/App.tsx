import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar";
import { About } from "./View/About/About";
import { Home } from "./View/Home/Home";

function App() {
  return (
    <div className="flex justify-center">
      <div className=" md:w-1/5 h-screen bg-slate-600">
        <NavBar />
      </div>
      {/* <div className="hidden md:w-1/5 h-screen bg-slate-600">
        <NavBar />
      </div> */}
      <div className="w-full md:w-4/5 overflow-y-auto h-screen  ">
        <Home />
        <About />
        <div className="w-full h-screen"></div>
      </div>
    </div>
  );
}

export default App;
