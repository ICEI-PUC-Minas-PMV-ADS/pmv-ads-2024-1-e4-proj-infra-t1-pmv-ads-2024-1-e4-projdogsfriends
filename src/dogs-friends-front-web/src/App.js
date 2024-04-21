import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import Rodape from "./components/Rodape";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Rodape />
    </BrowserRouter>
  );
}

export default App;
