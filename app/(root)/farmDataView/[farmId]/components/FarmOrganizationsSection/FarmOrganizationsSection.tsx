"use client";
import MyButton from "@/components/ui/MyButton";
import { Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

export default function FarmOrganizationsSection() {
  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>№</Th> <Th>Назва організації</Th> <Th>Статус</Th>
            </Tr>
          </Thead>
        </Table>
      </TableContainer>
      <MyButton>Редагувати</MyButton>
    </>
  );
}
