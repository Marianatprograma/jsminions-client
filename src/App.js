import { Route, Routes } from "react-router-dom";
import {Dashboard} from "./pages/Dashboard";
import { Events } from "./pages/Events";
import { Functions } from "./pages/Functions";
import {LandingPage} from "./pages/LandingPage";
import {Types} from "./pages/Types";

function App() {
  return (

    <Routes>
      <Route path="/" element={<LandingPage/>}/>

      <Route path="/dashboard" element={<Dashboard/>} />


      <Route path="/types" element={<Types/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/functions" element={<Functions/>} />

      
      

      



    </Routes>
  );
}

export default App;
