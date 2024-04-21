import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";

import Rodape from "./components/Rodape";
import Header from "./components/Header";

import {Toaster} from "react-hot-toast"

import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Toaster />
          <Header />
            <Router />
          <Rodape />
      </BrowserRouter>
      </Provider>
  );
}

export default App;
