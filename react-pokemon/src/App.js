import { Routes, Route } from "react-router-dom";
import Devs from "./pages/Devs";
import Home from "./pages/Home";
import Navigation from "./pages/Navigation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="devs" element={<Devs />} />
      </Route>
    </Routes>
  );
};

export default App;
