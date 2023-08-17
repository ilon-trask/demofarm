"use client";
import React from "react";
import { Container, ContainerProps } from "@chakra-ui/react";
export default function MyContainer(props: ContainerProps) {
  return (
    <Container maxW={"container.lg"} {...props}>
      {props.children}
    </Container>
  );
}
