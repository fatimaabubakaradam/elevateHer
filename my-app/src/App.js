import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Add other routes like /forum if needed */}
      </Routes>
    </Router>
  );
}

export default App;
