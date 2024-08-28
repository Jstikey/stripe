import "./App.css";
import { Hero } from "../public/hero";
import { Navbar } from "./Navbar";
import { Sidebar } from "./sidebar";
import { Submenu } from "./submenu";

const App = () => {
  //
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  );
};
export default App;
