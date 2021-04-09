import React from "react";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import "./App.css";
import "./flexibleContainer.css";

import rootReducer from "./rootReducer";
import Maincontent from "./Content/Maincontent/Maincontent";

//const store = createStore(rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer /* preloadedState, */, composeEnhancers());

function App() {
  return (
    <Provider store={store}>
      <div className="game-container">
        <Maincontent />
      </div>
    </Provider>
  );
}

export default App;
