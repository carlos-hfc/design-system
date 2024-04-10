import {
  Box,
  Button,
  Toast,
  ToastProps,
  ToastProvider,
} from "@carlos-hfc-ignite-ui/react"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

export default {
  title: "Data display/Toast",
  component: Toast,
  args: {
    title: "Agendamento realizado",
    description: "Quarta-feira, 23 de Outubro às 16h",
  },
  decorators: [
    (_, ctx) => {
      const [open, setOpen] = useState(true)

      return (
        <Box>
          <ToastProvider>
            <Button onClick={() => setOpen(prev => !prev)}>Toast me</Button>

            <Toast
              open={open}
              onOpenChange={setOpen}
              {...ctx.args}
            />
          </ToastProvider>
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
