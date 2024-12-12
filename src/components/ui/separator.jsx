"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cn } from "@/lib/utils"

const Separator = React.forwardRef(({
  className, 
  orientation = "horizontal", 
  decorative = true, 
  color = "bg-secondary/50", // Custom color prop
  thickness = "h-[1px]", // Custom thickness
  ...props
}, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "shrink-0", 
      color, // Apply custom color here
      orientation === "horizontal" 
        ? `${thickness} w-full` // Set thickness for horizontal
        : `h-full w-[1px]`, // Set height for vertical
      className // Merge additional custom classes
    )}
    {...props} 
  />
))
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
