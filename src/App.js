import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import RenderInput from "./components/RenderInput";
import FrameworkList from "./components/FrameworkList";
import MockServer from "./mock/MockServer";
import Redux from "./rtk/Redux";
import ReduxAsync from "./rtk/ReduxAsync";
import CustomHooks from "./hooks/CustomHooks";
import ClickRender from "./ClickRender";

function App() {
  const data = [
    {
      id: 1,
      item: "React",
    },
    {
      id: 2,
      item: "Angular",
    },
    {
      id: 3,
      item: "Vue",
    },
  ];

  const output = (text) => {
    console.log(text);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <RenderInput outputConsole={output} />
        <FrameworkList frameworks={data} />
        {/* <FrameworkList /> */}
        <MockServer />
        <Redux />
        <ReduxAsync />
        <CustomHooks />
        <ClickRender />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
