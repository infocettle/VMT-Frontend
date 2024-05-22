import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Auth from "./pages/Auth/Auth";
import Subscription from "./pages/Auth/Subscription/Subscription";


function App() {
  return (
    <>
     
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/subscription" element={<Subscription />} />
    
        </Routes>
      </Router>
   
    </>
  );
}

export default App;
