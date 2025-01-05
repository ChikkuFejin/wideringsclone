import React from "react"

import { HTMLMotionProps, motion } from "framer-motion";

export function MotionContainer({
    isAnimation = true,
    children,
    ...props
}: {
    isAnimation?: boolean;
    children: React.ReactNode;
} & HTMLMotionProps<"div">) {

    if (isAnimation) {
        return <motion.div {...props}>{children}</motion.div>;
    }

    return <>{children}</>;
}