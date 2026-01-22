import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { MdEditSquare } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { id: uuidv4(), todo: "sampleTask", isCompleted: false },
  ]);
  const [showCompleted, setShowCompleted] = useState(false);

  const handleAdd = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  };

  const handleUpdate = (id) => {
    const selectedTodo = todos.find((todo) => todo.id === id);
    setTodo(selectedTodo.todo);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handlechange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  // Decide which todos to display
  const visibleTodos = showCompleted
    ? todos.filter((todo) => todo.isCompleted) // only completed
    : todos; // all tasks

  return (
    <>
      <Navbar />
      <div className="mx-10 my-5 rounded-xl px-5 py-5 bg-purple-100 min-h-[80vh]">

        <div className="addTodo">
          <h1 className="text-lg font-bold">ADD A TODO</h1>
          <input
            value={todo}
            onChange={handlechange}
            type="text"
            className="w-full mx-auto h-10 bg-white px-5 py-5 font-bold text-2xl text-center rounded mb-5"
            placeholder="Create a Task"
          />
          <button
            onClick={handleAdd}
            className="h-10 w-full bg-purple-600 font-bold rounded-xl text-white cursor-pointer hover:font-extrabold mb-5 transition-all duration-100 "
          >
            ADD
          </button>
        </div>

        <hr />


        <div>
          <h2
            className="text-2xl font-bold my-5 cursor-pointer"
            onClick={() => setShowCompleted(!showCompleted)}
          >
            {showCompleted
              ? "Showing Completed Tasks Only"
              : "Show Completed Tasks"}
          </h2>


          <div className="todos">
            <ul>
              {visibleTodos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex items-center text-xl font-bold text-purple-950 my-5  "
                >

                  <input
                    className="scale-200 mr-7"
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => handleCheckbox(todo.id)}
                  />

                  {/* Task text with line-through if completed */}
                  <span className={todo.isCompleted ? "line-through" : ""}>
                    {todo.todo}
                  </span>

                  {/* Buttons aligned to right */}
                  <div className="ml-auto flex">
                    <button
                      onClick={() => handleUpdate(todo.id)}
                      className="bg-purple-600 hover:bg-purple-950 p-2 py-1 font-bold rounded-md text-white cursor-pointer hover:font-extrabold transition-all duration-100 mx-2"
                    >
                      <MdEditSquare />
                    </button>
                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="bg-purple-600 hover:bg-purple-950 p-2 py-1 font-bold rounded-md text-white cursor-pointer hover:font-extrabold transition-all duration-100 mx-2"
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
