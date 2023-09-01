"use client";
import MyButton from "@/components/ui/MyButton";
import { Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

export default function FarmDirectionSection() {
  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>№</Th> <Th>Назва напрямку</Th> <Th>Коротикий опис</Th>
            </Tr>
          </Thead>
        </Table>
      </TableContainer>
      <MyButton>Редагувати</MyButton>
    </>
  );
}
