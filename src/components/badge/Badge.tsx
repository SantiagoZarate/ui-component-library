import { ComponentProps } from "react";
import { VariantProps, cva } from "class-variance-authority";

const badgeStyles = cva(
  `
  rounded-full px-4 py-2 uppercase font-bold flex items-center gap-2 w-fit
  `,
  {
    variants: {
      intent: {
        primary: "bg-green-200 text-green-500",
        secondary: "outline-1 outline outline-green-500 text-green-500",
        terciary: "bg-green-200/50 bg-green-400",
      },
      size: {
        regular: "text-sm",
        big: "text-base",
        small: "text-xs",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "regular",
    },
  }
);

type Props = ComponentProps<"span"> & VariantProps<typeof badgeStyles>;

export function Badge({ intent, size, className, ...args }: Props) {
  return (
    <span className={badgeStyles({ intent, size, className })} {...args} />
  );
}
