import {Routes, Route} from "react-router-dom";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PromoBanner from "./components/PromoBanner";

import Guitars from "./pages/Guitars";
import Accessories from "./pages/Accessories";
import Storage from "./pages/Storage";
import Lessons from "./pages/Lessons";
import Repairs from "./pages/Repairs";


const App = () => {

  return (
    <div 
    className="relative">
      <div className="fixed top-0 w-full z-50">
        <Navbar/>
      </div>

     <Routes>
      <Route path="/" element={
        <>
          <Hero/>
          <PromoBanner/>
        </>
        }/>

      <Route path="/guitars" element={<Guitars/>}/>
      <Route path="/accessories" element={<Accessories/>}/>
      <Route path="/storage" element={<Storage/>}/>
      <Route path="/lessons" element={<Lessons/>}/>
      <Route path="/repairs" element={<Repairs/>}/>
     </Routes>
    </div>
  )
}

export default App;