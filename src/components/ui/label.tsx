
import * as React from "react"

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={`text-sm font-medium leading-none ${className || ''}`}
    {...props}
  />
))
Label.displayName = "Label"

export { Label }
