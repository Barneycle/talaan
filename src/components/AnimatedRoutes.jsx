import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./sections/Home";
import { Decide } from "./sections/Decide";
import { Evaluation } from "./sections/Evaluation";
import { Tasks } from "./sections/Tasks";

function AnimatedRoutes() {

  const location = useLocation();

  return (

    <div>
        
      <Routes location={location} key={location.pathname}>

        <Route path="/" element={ <div> <Home /> </div>}/>
        <Route path="/decide" element={ <div> <Decide /> </div>}/>
        <Route path="/evaluation" element={ <div> <Evaluation /> </div>}/>
        <Route path="/tasks" element={ <div> <Tasks /> </div>}/>

      </Routes>

    </div>
  );
}

export default AnimatedRoutes;
