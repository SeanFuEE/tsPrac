import React, { useState, useEffect } from "react";

const Todo: React.FC = () => {
  type thing = {
    name: string;
    status: boolean; //status=0:未完成, status=1:已完成
  };
  const [todos, setTodos] = useState<thing[]>([]);
  const [filter, setFilter] = useState<boolean>(false);
  const [options, setOptions] = useState<boolean>(false);
  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input: HTMLInputElement = e.target as HTMLInputElement;
    const str: string = input.value;
    if (e.key === "Enter") {
      const newThing: thing = { name: str, status: false };
      const newTodos: thing[] = [...todos];
      newTodos.push(newThing);
      setTodos(newTodos);
    }
  };

  const handleChangeStatus = (index: number) => {
    let newTodos: thing[] = [...todos];
    newTodos[index] = { ...newTodos[index], status: !newTodos[index].status };
    setTodos(newTodos);
  };
  return (
    <>
      <section className="todo-app__main">
        <input className="todo-app__input" onKeyPress={(e) => handleInput(e)}></input>
        <ul className="todo-app__list" id="todo-list">
          {todos.map((t: thing, index: number) =>
            !filter || t.status === options ? (
              <li className="todo-app__item" key={t.name + index}>
                <div className="todo-app__checkbox">
                  <input
                    id={t.name + index}
                    type="checkbox"
                    checked={t.status}
                    onChange={() => {
                      handleChangeStatus(index);
                    }}
                  ></input>
                  <label htmlFor={t.name + index}></label>
                </div>
                <h1 className="todo-app__item-detail">{t.name}</h1>
              </li>
            ) : null
          )}
        </ul>
      </section>
      <footer className="todo-app__footer" id="todo-footer">
        <div className="todo-app__total"></div>
        <ul className="todo-app__view-buttons">
          <button
            onClick={() => {
              setFilter(false);
            }}
          >
            All
          </button>
          <button
            onClick={() => {
              setFilter(true);
              setOptions(false);
            }}
          >
            Active
          </button>
          <button
            onClick={() => {
              setFilter(true);
              setOptions(true);
            }}
          >
            Completed
          </button>
        </ul>
        <div className="todo-app__clean"></div>
      </footer>
    </>
  );
};
export default Todo;
