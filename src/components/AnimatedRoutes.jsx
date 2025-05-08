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
        <Route path="/" element={<Home />} />
        <Route path="/decide" element={<Decide />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </div>
  );
}

export default AnimatedRoutes;
