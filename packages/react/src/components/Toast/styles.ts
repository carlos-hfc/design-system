import * as Toast from "@radix-ui/react-toast"

import { styled } from "../../styles"

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: "$gray900",
  border: "1px solid $gray600",
  display: "flex",
  flexDirection: "column",
  gap: "$1",
  padding: "$3 $5",
  borderRadius: "$sm",
})

export const ToastViewport = styled(Toast.Viewport, {
  position: "fixed",
  bottom: "$6",
  right: "$6",
  width: 360,
  maxWidth: "100vw",
  margin: 0,
  listStyle: "none",
  zIndex: 1000,
  outline: "none",
})

export const ToastTitle = styled(Toast.Title, {
  color: "$white",
})

export const ToastDescription = styled(Toast.Description, {
  color: "$gray200",
})

export const ToastClose = styled(Toast.Close, {
  position: "absolute",
  right: "$4",
  top: "$4",
  color: "$gray100",
  fontSize: "$lg",
  cursor: "pointer",
})
