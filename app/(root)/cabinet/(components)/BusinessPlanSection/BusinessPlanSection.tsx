"use client";
import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import React from "react";

export default function BusinessPlanSection() {
  return (
    <>
      <TableContainer maxW={"1100px"} mx={"auto"}>
        <Table>
          <Thead>
            <Tr>
              <Td>Назва бізнес-плану</Td>
              <Td>Дата початку</Td>
              <Td>Плановий період ,років</Td>
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
    </>
  );
}
