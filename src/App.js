import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./App.css";

import rootReducer from "./rootReducer";
import TopBar from "./components/sites/topBar/TopBar";
import Content from "./components/content/Content";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="game-container">
        <TopBar />
        <Content />
      </div>
    </Provider>
  );
}

export default App;
