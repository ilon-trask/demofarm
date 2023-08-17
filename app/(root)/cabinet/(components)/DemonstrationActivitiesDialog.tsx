"use client";
import Dialog from "@/components/ui/Dialog";
import MyButton from "@/components/ui/MyButton";
import {
  Button,
  FormLabel,
  Input,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function DemonstrationActivitiesDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: "",
      name: "",
    },
  });
  const onSubmit = () => {};
  return (
    <>
      <MyButton onClick={() => setIsOpen(true)}>
        Добавити демонстраційний захід
      </MyButton>
      <Dialog
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          reset();
        }}
      >
        <ModalHeader>Стоврення демонстраційного заходу</ModalHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FormLabel m={0}>
              Назва
              <Input {...register("name", { required: true })} />
            </FormLabel>
            <FormLabel m={0}>
              Дата
              <Input {...register("date", { required: true })} type="date" />
            </FormLabel>
          </ModalBody>
          <ModalFooter>
            <Button type="submit">Збегерти</Button>
          </ModalFooter>
        </form>
      </Dialog>
    </>
  );
}
