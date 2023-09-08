import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Enter from "./pages/Enter";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/enter" element={ <Enter /> } />
          </Routes>
        </div>
      </Router>
    
    
    </>
  );
}

export default App;
