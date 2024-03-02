import { ComponentProps } from "react";

export function TextInputInput(args: ComponentProps<"input">) {
  return (
    <input
      className="text-stone-400 ring-transparent focus:outline-none placeholder:text-stone-700 bg-transparent flex-1"
      {...args}
    />
  );
}
