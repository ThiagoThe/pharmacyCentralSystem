import "./App.css";
import { Outlet } from "react-router-dom";
import { MedProvider } from "./contexts/medContext";
import { FarmProvider } from "./contexts/farmContext";

function App() {
  return (
    <div className="App">
      <MedProvider>
        <FarmProvider>
          <Outlet />
        </FarmProvider>
      </MedProvider>
    </div>
  );
}

export default App;
