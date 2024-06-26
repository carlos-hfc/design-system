import { Button, ButtonProps } from "@carlos-hfc-ignite-ui/react"
import { ArrowRight } from "@phosphor-icons/react"
import type { Meta, StoryObj } from "@storybook/react"

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Send",
    variant: "primary",
    size: "md",
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "select",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    children: "Create",
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: "tertiary",
    children: "Cancel",
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
    children: "Small",
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: "Disabled",
    disabled: true,
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}
