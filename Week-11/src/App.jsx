import "./App.css";
import { Fragment, useState } from "react";
function App() {
  const [IsLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState("");

  const submitHandler = async (url = "") => {
    let res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    let data = await res.json();
    setData((prev) => {
      return [...prev, data.result.full_short_link];
    });
  };
  return (
    <div className="App">
      <input
        value={inputData}
        type="text"
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
      <button onClick={() => submitHandler(inputData)}>Submit</button>
      <main>
        {data.map((el) => (
          <Fragment key={el}>
            <a href={el} target="_blank">
              {el.toUpperCase()}
            </a>
          </Fragment>
        ))}
      </main>
    </div>
  );
}

export default App;
