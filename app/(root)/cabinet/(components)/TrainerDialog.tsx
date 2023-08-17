"use client";
import Dialog from "@/components/ui/Dialog";
import MyButton from "@/components/ui/MyButton";
import {
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function TrainerDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      direction: "",
      contact: "",
    },
  });
  const onSubmit = () => {};
  return (
    <>
      <MyButton onClick={() => setIsOpen(true)}>Добавити тренера</MyButton>
      <Dialog
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          reset();
        }}
      >
        <ModalHeader>Створення заявки тренера</ModalHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FormLabel>
              Прізвище Ім'я Побатькові
              <Input {...register("name", { required: true })} />
            </FormLabel>
            <FormLabel>
              Напрямок
              <Input {...register("direction", { required: true })} />
            </FormLabel>
            <FormLabel>
              Контакт
              <Input {...register("contact", { required: true })} />
            </FormLabel>
          </ModalBody>
          <ModalFooter>
            <MyButton type="submit">Збегерти</MyButton>
          </ModalFooter>
        </form>
      </Dialog>
    </>
  );
}
