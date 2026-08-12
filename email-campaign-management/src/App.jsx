
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
