import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Logo from "../Logo";

const meta: Meta = {
  title: "Components/Atoms/Logo",
  component: Logo,
  tags: ["autodocs"],
};

export default meta;

type Logo = StoryObj<typeof Logo>;

export const BgBlack: Logo = {
  args: {
    id: 1,
    link: "/",
    size: "medium",
    bgColor: "black",
  },
};
export const BgWhite: Logo = {
  args: {
    id: 1,
    link: "/",
    size: "medium",
    bgColor: "white",
  },
};
export const SmallBlack: Logo = {
  args: {
    id: 1,
    link: "/",
    size: "small",
    bgColor: "black",
  },
};
