import "./App.css";
import { Outlet } from "react-router-dom";
import { MedProvider } from "./contexts/medContext";
import { FarmProvider } from "./contexts/farmContext";

function App() {
  return (
    <div className="App">
      <FarmProvider>
        <MedProvider>
          <Outlet />
        </MedProvider>
      </FarmProvider>
    </div>
  );
}

export default App;
