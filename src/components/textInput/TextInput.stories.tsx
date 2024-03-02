import { Meta, StoryObj } from "@storybook/react";
import { TextInput } from ".";
import { SendIcon } from "@icon";

export default {
  component: TextInput.Root,
  title: "myComponents/TextInputRoot",
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <TextInput.Icon>
          <SendIcon />
        </TextInput.Icon>
        <TextInput.Input placeholder="testing my design system" />,
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof TextInput.Root>;

export const Primary: StoryObj<typeof TextInput.Root> = {};
