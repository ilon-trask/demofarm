"use client";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

export default function TrainerTables() {
  return (
    <TableContainer maxW={"1100px"} mx={"auto"}>
      <Table>
        <Thead>
          <Tr>
            <Th>П.І.Б</Th>
            <Th>Напрямок</Th>
            <Th>Контакт</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td></Td>
            <Td>Немає данних</Td>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
