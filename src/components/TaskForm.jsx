import React, { useContext } from "react";
import { useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setDescription("");
    setTitle("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSumbit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-gray-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-gray-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 hover:bg-green-400 rounded-md text-white">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
