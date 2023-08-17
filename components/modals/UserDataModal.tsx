"use client";
import { useUserDataModal } from "@/hooks/use-userData-modal";
import React from "react";
import Dialog from "../ui/Dialog";
import { useForm } from "react-hook-form";
import { ModalHeader } from "@chakra-ui/react";

export default function UserDataModal() {
  const { isOpen, onClose } = useUserDataModal();
  const {} = useForm();
  return (
    <Dialog isOpen={isOpen} onClose={onClose} onOverlayClick={onClose}>
      <ModalHeader>Введіть данні роширеного користувача</ModalHeader>
    </Dialog>
  );
}
