import { Box, Text, Textarea, TextareaProps } from "@carlos-hfc-ignite-ui/react"
import type { Meta, StoryObj } from "@storybook/react"

export default {
  title: "Form/Textarea",
  component: Textarea,
  decorators: [
    Story => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextareaProps>

export const Primary: StoryObj<TextareaProps> = {
  args: {
    placeholder: "Add any observations...",
  },
}

export const Disabled: StoryObj<TextareaProps> = {
  args: {
    disabled: true,
  },
}
