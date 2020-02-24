import React from "react";
import { actions } from "@storybook/addon-actions";
import { Button } from "./../button/index.tsx";

export default {
  title: "Button",
  component: Button
};
const eventsFromNames = actions("onClick", "onMouseOver");

export const Text = () => <Button {...eventsFromNames} label="Hello Button" />;

export const Emoji = () => (
  <Button {...eventsFromNames} label="😀 😎 👍 💯"></Button>
);
