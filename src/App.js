
import Header from "./Header";
import Services from "./Services";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
      <Routes>

        <Route exact path="/" element={<Header />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route Component={Error}/>



      </Routes>


    </>
  )
}
