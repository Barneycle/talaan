import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./sections/Home"; 

function AnimatedRoutes() {

  const location = useLocation();

  return (

    <div>
        
      <Routes location={location} key={location.pathname}>

        <Route path="/" element={ <div> <Home /> </div>}/>

      </Routes>

    </div>
  );
}

export default AnimatedRoutes;
