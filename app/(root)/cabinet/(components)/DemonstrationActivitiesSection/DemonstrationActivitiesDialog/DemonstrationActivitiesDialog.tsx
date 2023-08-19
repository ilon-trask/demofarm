"use client";
import Dialog from "@/components/ui/Dialog";
import { useUserData } from "@/hooks/use_userData";
import {
  Button,
  FormLabel,
  Input,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import onSubmit from "./onSubmit";
import { usePrismaUserData } from "@/hooks/use_prismaUserData ";
import { useActivitiesData } from "@/hooks/use_activitiesData";
export type Activities = {
  date: string;
  name: string;
};
type props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isUpdate: boolean;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
};
export default function DemonstrationActivitiesDialog({
  isOpen,
  isUpdate,
  setIsOpen,
  setIsUpdate,
}: props) {
  const { user } = useUserData();
  const { setNewActivities } = useActivitiesData();
  const { prismaUser } = usePrismaUserData();
  if (prismaUser == null) throw new Error("Немає прізма юзера");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Activities>({
    defaultValues: {
      date: "",
      name: "",
    },
  });
  const ClientSubmit = async (data: Activities) => {
    if (!prismaUser) throw new Error("Немає прізма юзера");
    const res = await onSubmit(data, isUpdate, prismaUser.id);
    if (res) setNewActivities(res);
    reset();
    setIsOpen(false);
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
        reset();
      }}
    >
      <ModalHeader>Стоврення демонстраційного заходу</ModalHeader>
      <form onSubmit={handleSubmit(ClientSubmit)}>
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
  );
}
