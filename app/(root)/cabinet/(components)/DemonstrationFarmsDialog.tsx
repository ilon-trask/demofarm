"use client";
import Dialog from "@/components/ui/Dialog";
import Div from "@/components/ui/Div";
import MyButton from "@/components/ui/MyButton";
import {
  Checkbox,
  FormLabel,
  Input,
  Table,
  Td,
  Tr,
  ModalHeader,
  ModalBody,
  Th,
  Thead,
  ModalFooter,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AddIcon } from "@chakra-ui/icons";
export default function DemonstrationFarmsDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
    },
  });
  const mockData = [
    { name: "перше", area: 0, amount: 0 },
    { name: "друге", area: 0, amount: 0 },
    { name: "третє", area: 0, amount: 0 },
    { name: "четверте", area: 0, amount: 0 },
  ];
  return (
    <>
      <MyButton onClick={() => setIsOpen(true)}>
        Добавити демонстраційну ферму
      </MyButton>
      <Dialog
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          reset();
        }}
      >
        <ModalHeader>Створення демонстраційної ферми</ModalHeader>
        <ModalBody>
          <form action="">
            <FormLabel>
              Назва
              <Input {...register("name", { required: true })} />
            </FormLabel>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Спеціалізація</Th>
                  <Th>обсяг</Th>
                  <Th>Сума</Th>
                </Tr>
              </Thead>
              {mockData.map((el) => (
                <Tr key={el.name}>
                  <Td>
                    <Checkbox></Checkbox>
                  </Td>
                  <Td>{el.name}</Td>
                  <Td>{el.area}</Td>
                  <Td>{el.amount}</Td>
                </Tr>
              ))}
              <Tr>
                <Td></Td>
                <Td>
                  <Input size={"sm"}></Input>
                </Td>
                <Td>
                  <Input size={"sm"}></Input>
                </Td>
                <Td>
                  <Input size={"sm"}></Input>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <AddIcon />
                </Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
            </Table>
          </form>
        </ModalBody>
        <ModalFooter>
          <MyButton type="submit">Збегерти</MyButton>
        </ModalFooter>
      </Dialog>
    </>
  );
}
