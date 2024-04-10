import { X } from "@phosphor-icons/react"
import * as T from "@radix-ui/react-toast"
import { ComponentProps } from "react"

import { Text } from "../Text"
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from "./styles"

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <>
      <ToastRoot {...props}>
        <ToastTitle asChild>
          <Text
            as="h3"
            size="lg"
          >
            {title}
          </Text>
        </ToastTitle>
        <ToastDescription asChild>
          <Text size="sm">{description}</Text>
        </ToastDescription>

        <ToastClose asChild>
          <X />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </>
  )
}

export function ToastProvider(props: T.ToastProviderProps) {
  return <T.Provider {...props} />
}
