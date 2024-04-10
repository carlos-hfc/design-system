import * as T from "@radix-ui/react-tooltip"
import { ComponentProps, ReactNode } from "react"

import { TooltipArrow, TooltipContent } from "./styles"

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  trigger: ReactNode
}

export function Tooltip({ trigger, ...props }: TooltipProps) {
  return (
    <T.Root>
      <T.Trigger asChild>{trigger}</T.Trigger>
      <T.Portal>
        <TooltipContent
          {...props}
          side="top"
        >
          {props.children}
          <TooltipArrow />
        </TooltipContent>
      </T.Portal>
    </T.Root>
  )
}

export function TooltipProvider(props: T.TooltipProviderProps) {
  return <T.Provider {...props} />
}
