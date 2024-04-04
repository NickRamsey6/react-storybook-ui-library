import { ComponentProps, forwardRef } from "react";

type BoxProps = ComponentProps<"div">;

export const Box = forwardRef<HTMLDivElement, BoxProps>(({ ...props }, ref) => {
    return <div ref={ref} {...props} />;
});
