import React, { useReducer } from "react";
import "./App.css";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./app/routes/Routes";
import { userReducer } from "./app/reducers";
import { MasterContext } from "./app/useContext/MasterContext";

import Home from "./app/layout/Home";
import Signin from "./app/components/auth/Signin";

function App() {
  const [state, dispatch] = useReducer(
    userReducer.reducer,
    userReducer.initialState
  );
  return (
    <div>
      <Router>
        <MasterContext.Provider
          value={{ state: state, userDispatch: dispatch }}
        >
          <Home />
        </MasterContext.Provider>
      </Router>
    </div>
  );
}

export default App;
