"use client";
import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <div>Щось пішло не так</div>;
}
