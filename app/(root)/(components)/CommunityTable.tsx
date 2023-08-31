"use client";
import Div from "@/components/ui/Div";
import {
  HStack,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

export default function CommunityTable() {
  return (
    <Div>
      <HStack>
        <Tag size="lg">Дорадчі служби</Tag>
        <Tag size="lg">Дорадники</Tag>
        <Tag size="lg">ОТГ</Tag>
      </HStack>
      <TableContainer maxW={"1100px"} mx={"auto"}>
        <Table>
          <Thead>
            <Tr>
              <Th>Назва</Th>
              {/* <Th>Спецалізації</Th>
            <Th>Контакти</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Немає данних</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Div>
  );
}
