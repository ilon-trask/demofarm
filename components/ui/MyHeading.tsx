"use client";
import { Heading, HeadingProps } from "@chakra-ui/react";
import React from "react";

function MyHeading(props: HeadingProps) {
  return (
    <Heading textAlign={"center"} {...props}>
      {props.children}
    </Heading>
  );
}

export default MyHeading;
