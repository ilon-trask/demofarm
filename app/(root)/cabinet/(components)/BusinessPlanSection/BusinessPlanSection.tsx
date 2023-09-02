"use client";
import MyButton from "@/components/ui/MyButton";
import {
  HStack,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function BusinessPlanSection({
  showTags = true,
}: {
  showTags?: boolean;
}) {
  const router = useRouter();
  return (
    <>
      {showTags && (
        <HStack spacing={3}>
          <Tag cursor={"pointer"} variant="solid">
            Демоферми
          </Tag>
          <Tag cursor={"pointer"} variant="solid">
            Тренера
          </Tag>
        </HStack>
      )}
      <TableContainer maxW={"1100px"} mx={"auto"}>
        <Table>
          <Thead>
            <Tr>
              <Td>Назва бізнес-плану</Td>
              <Td>Дата початку</Td>
              <Td>Плановий період ,років</Td>
              <Td></Td>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Назва</Td>
              <Td>01.02.2023</Td>
              <Td>5</Td>
              <Td>
                <MyButton
                  size={"sm"}
                  onClick={() => router.push("/businessPlan/1")}
                >
                  Детальніше
                </MyButton>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
