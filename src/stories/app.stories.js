import React, { createContext, useState } from "react";
import { actions } from "@storybook/addon-actions";
import { withState, Store, State } from "@sambego/storybook-state";
import { addDecorator, addParameters } from "@storybook/react";
import App from "../app";

const uuid = () =>
  Math.random()
    .toString(36)
    .substring(2) + Date.now().toString(36);

const tasksMockupValues = [
  "make coffee",
  "dring coffee",
  "make another coffee"
];

const tasksMockup = values =>
  values.map(value => ({
    id: uuid(),
    value
  }));

const simpleStore = new Store({
  tasks: tasksMockup(tasksMockupValues),
  handleRemoveTask: taskToRemoveId => {
    taskRemove(taskToRemoveId, simpleStore);
  },
  handleAddTask: newTaskValue => {
    taskAdd(newTaskValue, simpleStore);
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

addDecorator(withState());
addParameters({
  state: {
    simpleStore
  }
});

export default {
  title: "App"
};

export const Simple = () => (
  <State store={simpleStore}>
    <App />
  </State>
);
