import React from "react";
import "./App.css";
import Todo from "./todo";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <div id="root" className="todo-app__root">
        <header className="todo-app__header">todos</header>
        <Todo />
      </div>
    </div>
  );
};

export default App;
