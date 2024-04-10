import {
  Box,
  Button,
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from "@carlos-hfc-ignite-ui/react"
import type { Meta, StoryObj } from "@storybook/react"

export default {
  title: "Data display/Tooltip",
  component: Tooltip,
  decorators: [
    Story => {
      return (
        <Box
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "$10 0",
            position: "relative",
          }}
        >
          <TooltipProvider>{Story()}</TooltipProvider>
        </Box>
      )
    },
  ],
  args: {
    trigger: <Button>21</Button>,
    children: "21 de Outubro - Disponível",
    sideOffset: -14,
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
