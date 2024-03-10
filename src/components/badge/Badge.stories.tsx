import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

export default {
  title: "Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Esto es un badge",
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    intent: {
      options: ["primary", "secondary", "terciary"],
    },
    size: {
      options: ["big", "regular", "small"],
    },
  },
} satisfies Meta;

type Props = StoryObj<typeof Badge>;

export const Primary: Props = {
  args: {
    intent: "primary",
  },
};
export const Secondary: Props = {
  args: {
    intent: "secondary",
  },
};
export const Terciary: Props = {
  args: {
    intent: "terciary",
  },
};
