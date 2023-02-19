import "./App.css";
import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const isDarkMode = useSelector((state) => {
    return state.modeReducer.isDarkMode;
  });
  const dispatch = useDispatch();
  return (
    <div
      className={`App ${
        isDarkMode ? "is-dark-mode-true" : "is-dark-mode-false"
      }`}
    >
      <div className="mode-changer">
        <input
          onChange={(e) => dispatch({ type: e.target.checked })}
          type="checkbox"
        />
        <p>Dark Mode</p>
      </div>

      <h1>React App</h1>
    </div>
  );
}

export default App;
