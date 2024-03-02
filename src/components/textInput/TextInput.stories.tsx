import { Meta, StoryObj } from "@storybook/react";
import { TextInput } from ".";
import { DeleteAllIcon, SendIcon } from "@icon";

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
        <TextInput.Icon>
          <DeleteAllIcon />
        </TextInput.Icon>
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
