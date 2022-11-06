import { Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import {Dashboard} from "./pages/Dashboard";
import { Events } from "./pages/Events";
import { Functions } from "./pages/Functions";
import {LandingPage} from "./pages/LandingPage";
import { Objects } from "./pages/Objects";
import {Types} from "./pages/Types";

function App() {
  return (

    <GlobalProvider>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>

      <Route path="/dashboard" element={<Dashboard/>} />


      <Route path="/types" element={<Types/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/functions" element={<Functions/>} />
      <Route path="/objects" element={<Objects/>} />

    </Routes>
    </GlobalProvider>
  );
}

export default App;
