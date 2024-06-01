import React, { createContext, useState, useEffect } from "react";
// On crée le contexte
export const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
  // Déclare l'état `tasks`
  const [tasks, setTasks] = useState([]);

  // Utilise useEffect pour charger les tâches depuis le local storage au montage du composant
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Utilise useEffect pour stocker les tâches dans le local storage chaque fois que `tasks` est mis à jour
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Fonction pour ajouter une nouvelle tâche
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Fournit les tâches et la fonction addTask aux composants enfants
  return (
    <TaskContext.Provider value={{ tasks, setTasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
