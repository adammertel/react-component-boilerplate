import React, { useState } from "react";

import Button from "./button";
import Input from "./input";

type Task = { id: string; value: string };

const uuid = (): string =>
  Math.random()
    .toString(36)
    .substring(2) + Date.now().toString(36);

const tasksMockupValues = [
  "make coffee",
  "dring coffee",
  "make another coffee"
];

const tasksMockup = tasksMockupValues.map(value => ({
  id: uuid(),
  value
}));

const App = () => {
  /**
   * name of new task
   */
  const [newTask, setNewTask] = useState("");

  /**
   * handling the list of stored tasks
   */
  const [tasks, setTasks] = useState<Task[]>(tasksMockup);
  const taskAdd = (newTaskValue: string) => {
    if (newTaskValue !== "") {
      const newTask = {
        id: uuid(),
        value: newTaskValue
      };
      setTasks([...tasks, newTask]);
    }
  };
  const taskRemove = (taskToRemoveId: string) => {
    setTasks([...tasks.filter(task => task.id !== taskToRemoveId)]);
  };

  return (
    <div className="app">
      <div className="add-new-task">
        <Input
          value={newTask}
          handleChange={(newValue: string) => {
            setNewTask(newValue);
          }}
        />
        <Button label="Add" handleClick={() => taskAdd(newTask)} />
      </div>
      <div className="tasks-list">
        {tasks.map(task => {
          return (
            <div className="task-line">
              <span className="task-label"> {task.value}</span>
              <Button label="x" handleClick={() => taskRemove(task.id)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
