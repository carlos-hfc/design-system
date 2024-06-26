import { Text, TextProps } from "@carlos-hfc-ignite-ui/react"
import type { Meta, StoryObj } from "@storybook/react"

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque odio, exercitationem numquam repudiandae cupiditate hic sequi iure nostrum minus? Non rem quos adipisci quaerat atque repudiandae nesciunt labore cum eveniet.",
    size: "md",
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "select",
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: { children: "Strong text", as: "strong" },
}
