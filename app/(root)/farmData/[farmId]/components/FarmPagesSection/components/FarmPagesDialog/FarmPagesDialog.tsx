"use client";
import Dialog from "@/components/ui/Dialog";
import Div from "@/components/ui/Div";
import ErrorText from "@/components/ui/ErrorText";
import MyButton from "@/components/ui/MyButton";
import MyText from "@/components/ui/MyText";
import {
  Grid,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import onSubmit from "./onSubmit";
import { useFarmsData } from "@/hooks/use_farmsData";
export interface CreatePagesType {
  name: string;
  link: string;
  type: "Сторінка в інтернеті" | "Сторінка в соц. мережі";
}
export default function FarmPagesDialog({
  isOpen,
  setIsOpen,
  farmId,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  farmId: number;
}) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePagesType>({
    defaultValues: {
      name: "",
      link: "",
      //@ts-ignore
      type: "",
    },
  });
  const { updateFarm } = useFarmsData();
  const clientSubmit = async (data: CreatePagesType) => {
    console.log(data);
    const res = await onSubmit(data, farmId);
    if (res) updateFarm(res);
    reset();
    setIsOpen(false);
  };
  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <ModalHeader>Сторінки в інтернеті і соціальних мережах</ModalHeader>
      {/*@ts-ignore*/}
      <form onSubmit={handleSubmit(clientSubmit)}>
        <ModalBody>
          <Div>
            <Grid templateColumns={"1fr 1fr"}>
              <MyText>Назва</MyText>
              <Input
                {...register("name", { required: true })}
                isInvalid={!!errors.name}
              />
            </Grid>
            {errors["name"] ? (
              <ErrorText>{errors["name"].message}</ErrorText>
            ) : null}
          </Div>
          <Div mt={2}>
            <Grid templateColumns={"1fr 1fr"}>
              <MyText>Посилання</MyText>
              <Input
                {...register("link", { required: true })}
                isInvalid={!!errors.link}
              />
            </Grid>
            {errors["link"] ? (
              <ErrorText>{errors["link"].message}</ErrorText>
            ) : null}
          </Div>
          <Div mt={2}>
            <Grid templateColumns={"1fr 1fr"}>
              <MyText>Тип</MyText>
              <Select
                {...register("type", { required: true })}
                isInvalid={!!errors.type}
              >
                <option value="" defaultChecked hidden>
                  Виберіть опцію
                </option>
                {[
                  { id: 1, name: "Сторінка в інтернеті" },
                  { id: 2, name: "Сторінка в соц. мережі" },
                ].map((el) => (
                  <option value={el.name} key={el.id}>
                    {el.name}
                  </option>
                ))}
              </Select>
            </Grid>
            {errors["type"] ? (
              <ErrorText>{errors["type"].message}</ErrorText>
            ) : null}
          </Div>
        </ModalBody>
        <ModalFooter>
          <MyButton type="submit">Збегерти</MyButton>
        </ModalFooter>
      </form>
    </Dialog>
  );
}
