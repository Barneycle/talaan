import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./sections/Home";
import { Decide } from "./sections/Decide"; 

function AnimatedRoutes() {

  const location = useLocation();

  return (

    <div>
        
      <Routes location={location} key={location.pathname}>

        <Route path="/" element={ <div> <Home /> </div>}/>
        <Route path="/decide" element={ <div> <Decide /> </div>}/>

      </Routes>

    </div>
  );
}

export default AnimatedRoutes;
