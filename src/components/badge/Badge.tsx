import { ComponentProps } from "react";
// import { cva } from "class-variance-authority";

// const badgeStyles = cva({});

type Props = ComponentProps<"span">;

export function Badge(args: Props) {
  return <span {...args} />;
}
