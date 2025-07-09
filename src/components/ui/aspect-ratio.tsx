
import * as React from "react"
import { cn } from "@/lib/utils"

interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number
  children?: React.ReactNode
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = 16 / 9, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative", className)}
      style={{ aspectRatio: ratio }}
      {...props}
    >
      {children}
    </div>
  )
)
AspectRatio.displayName = "AspectRatio"

export { AspectRatio }
