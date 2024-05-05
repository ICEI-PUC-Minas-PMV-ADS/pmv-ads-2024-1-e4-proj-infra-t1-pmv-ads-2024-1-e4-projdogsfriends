import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";

import Rodape from "./components/Rodape";
import Header from "./components/Header";

import {Toaster} from "react-hot-toast"

import { Provider } from 'react-redux';

import { persistor, store } from './store/store';
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}> 
      <BrowserRouter>
        <Toaster />
          <Header />
            <Router />
          <Rodape />
      </BrowserRouter>
      </PersistGate>
      </Provider>
  );
}

export default App;
