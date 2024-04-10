import * as Tooltip from "@radix-ui/react-tooltip"

import { styled } from "../../styles"

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: "$xs",
  padding: "$3 $4",
  fontSize: "$sm",
  lineHeight: "$short",
  color: "$gray100",
  backgroundColor: "$gray900",
  fontWeight: "$medium",
  fontFamily: "$default",
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: "$gray900",
})
