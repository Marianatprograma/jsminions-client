import { Route, Routes } from "react-router-dom";
import {Dashboard} from "./pages/Dashboard";
import {LandingPage} from "./pages/LandingPage";
import {Types} from "./pages/Types";

function App() {
  return (

    <Routes>
      <Route path="/" element={<LandingPage/>}/>

      <Route path="/dashboard" element={<Dashboard/>} />


      <Route path="/types" element={<Types/>} />

      
      

      



    </Routes>
  );
}

export default App;
