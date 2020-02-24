import React, { useState, FunctionComponent } from "react";

import Button from "./button";
import Input from "./input";

type Task = { id: string; value: string };
type Props = {
  tasks: Task[];
  handleAddTask: Function;
  handleRemoveTask: Function;
};

const App: FunctionComponent<Props> = props => {
  /**
   * name of new task
   */
  const [newTask, setNewTask] = useState("");

  return (
    <div className="todo" data-testid="todo">
      <div className="add-new-task">
        <Input
          value={newTask}
          handleChange={(newValue: string) => {
            setNewTask(newValue);
          }}
        />
        <Button label="Add" handleClick={() => props.handleAddTask(newTask)} />
      </div>
      <div className="tasks-list">
        {props.tasks.map(task => {
          return (
            <div className="task-line" key={task.id}>
              <span className="task-label"> {task.value}</span>
              <Button
                label="x"
                handleClick={() => props.handleRemoveTask(task.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
