"use client";

import { useState } from "react";
import Task from "./Task";

export default function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  let d = new Date();
  let taskDate = `${d.getHours()}:${d.getMinutes()} h, ${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  function addTask(e) {
    e.preventDefault();

    if (text !== "") {
      const newTask = {
        id: Date.now(),
        text,
        date: taskDate,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setText("");
      console.log(tasks);
    }
  }

  function deleteTask(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }
  return (
    <div className="mx-2 lg:mx-0 mt-8">
      <div className="w-full lg:w-2/3 mx-auto p-6 bg-white">
        <h2 className="text-2xl mb-3">ToDo Ukolníček</h2>
        <form className="flex flex-col p-3 mb-5">
          <label htmlFor="taskInput" className="mb-1">
            Co je dnes potřeba udělat?
          </label>
          <input
            type="text"
            id="taskInput"
            onChange={handleChange}
            value={text}
            className="outline outline-1 outline-blue-300 p-1 mb-3"
          />
          <button
            type="submit"
            onClick={addTask}
            className="bg-blue-500 text-white p-1 rounded hover:bg-blue-600 active:bg-blue-700 w-1/2 lg:w-36 lg:h-12 self-center"
          >
            Přidat úkol
          </button>
        </form>
        <h3>Aktualni úkoly</h3>
        <Task taskText="Testovací úkol" date={taskDate} id={1} />
        <Task taskText="Testovací úkol 2" date={taskDate} id={2} />
        <ul>
          {tasks.map((item) => (
            <li key={item.id}>
              <Task
                taskText={item.text}
                date={item.date}
                id={item.id}
                btnDelete={() => deleteTask(item.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
