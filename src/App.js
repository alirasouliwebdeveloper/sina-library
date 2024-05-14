import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route exact path="/dashboard" Component={Dashboard} />
          <Route exact path="/users" Component={Users} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
