import React from "react";
import { actions } from "@storybook/addon-actions";
import { Store, State } from "@sambego/storybook-state";
import { uuid } from "../util";
import App from "../app";

const shortMockup = ["make coffee", "dring coffee", "make another coffee"];
const longMockup = [
  "wake up",
  "boil water",
  "prepare coffee",
  "grab a piece of cake",
  "eat cake",
  "drink coffee",
  "code"
];

const tasksMockup = values =>
  values.map(value => ({
    id: uuid(),
    value
  }));

const shortStore = new Store({
  tasks: tasksMockup(shortMockup),
  handleRemoveTask: taskToRemoveId => {
    taskRemove(taskToRemoveId, shortStore);
  },
  handleAddTask: newTaskValue => {
    taskAdd(newTaskValue, shortStore);
  }
});
const longStore = new Store({
  tasks: tasksMockup(longMockup),
  handleRemoveTask: taskToRemoveId => {
    taskRemove(taskToRemoveId, longStore);
  },
  handleAddTask: newTaskValue => {
    taskAdd(newTaskValue, longStore);
  }
});

/**
 * handling the list of stored tasks
 */
const taskAdd = (newTaskValue, store) => {
  if (newTaskValue !== "") {
    const newTask = {
      id: uuid(),
      value: newTaskValue
    };
    store.set({ tasks: [...store.get("tasks"), newTask] });
  }
};
const taskRemove = (taskToRemoveId, store) => {
  console.log(store.get("tasks"));
  store.set({
    tasks: [...store.get("tasks").filter(task => task.id !== taskToRemoveId)]
  });
  console.log(store.get("tasks"));
};

export default {
  title: "App"
};

export const Short = () => (
  <State store={shortStore}>
    <App />
  </State>
);
export const Longer = () => (
  <State store={longStore}>
    <App />
  </State>
);
