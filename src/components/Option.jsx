import React, { useState, useContext } from "react";
import { Ellipsis } from "lucide-react";
import { TaskContext } from "./TaskContext";

const Option = ({ id }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [showOptions, setShowOptions] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newContent, setNewContent] = useState("");

  const handleEdit = (id) => {
    // on met editMode à true pour afficher le champ d'édition
    setEditMode(true);
    const task = tasks.find(task => task.id === id);
    setNewContent(task.content);
  };

  const handleSaveEdit = (id) => {
    // on met à jour le contenu de la tâche
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, content: newContent } : task
    ));
    setEditMode(false);
  };

  const handleDelete = (id) => {
    // on filtre les tâches pour ne garder que celles dont l'id est différent de l'id de la tâche à supprimer
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };
  // on crée une fonction handleFinish qui prend en paramètre l'id de la tâche à terminer
  const handleFinish = (id) => {
    const updatedTasks = tasks.map(task => 
        // on vérifie si l'id de la tâche est égal à l'id de la tâche à terminer
      task.id === id ? { ...task, state: "finished" } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="relative">
      <Ellipsis
        size={30}
        className="cursor-pointer"
        onClick={() => setShowOptions(!showOptions)}
        color="#fff"
      />
      {showOptions && (
        <div className="absolute bg-[#2B2C30] p-2 rounded-lg shadow-lg">
          {!editMode ? (
            <>
              <button onClick={() => handleFinish(id)} className="block text-white">Finished</button>
              <button onClick={() => handleEdit(id)} className="block text-white">Edit</button>
              <button onClick={() => handleDelete(id)} className="block text-white">Delete</button>
            </>
          ) : (
            <>
              <input
                type="text"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="p-1 mb-2 rounded-md"
              />
              <button onClick={() => handleSaveEdit(id)} className="block text-white">Save</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Option;
