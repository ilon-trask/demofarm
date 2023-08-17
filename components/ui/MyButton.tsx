"use client";
import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
function MyButton(props: ButtonProps) {
  return <Button {...props}>{props.children}</Button>;
}

export default MyButton;
