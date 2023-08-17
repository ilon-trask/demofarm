"use client";
import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

function MyText(props: TextProps) {
  return <Text {...props}>{props.children}</Text>;
}

export default MyText;
