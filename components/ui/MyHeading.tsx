"use client";
import { Heading, HeadingProps } from "@chakra-ui/react";
import React, { MutableRefObject } from "react";
interface props extends HeadingProps {
  aref?: MutableRefObject<any> | undefined;
}
function MyHeading(props: props) {
  return (
    <Heading textAlign={"center"} {...props} ref={props.aref}>
      {props.children}
    </Heading>
  );
}

export default MyHeading;
