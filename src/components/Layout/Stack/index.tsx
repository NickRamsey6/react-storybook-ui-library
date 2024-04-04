import { cn } from "@/utils";
import { Box, BoxProps } from "@/components";

type StackProps = BoxProps;

export const Stack = ({ className, ...props }: StackProps) => {
    return <Box className={cn("flex flex-col items-start", className)} {...props} />;
};