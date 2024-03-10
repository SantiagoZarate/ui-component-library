import { ComponentProps } from "react";

export function TextInputRoot(args: ComponentProps<"div">) {
  return (
    <div
      data-testid="text-input-root"
      className="p-2 rounded-md border border-white/10 bg-stone-900 flex items-center gap-2"
      {...args}
    />
  );
}
