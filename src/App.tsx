import './index.css'

import Navbar from "./components/navbar/navbar.components";
import Dashboard from "./components/dashboard/dashboard.components";

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
