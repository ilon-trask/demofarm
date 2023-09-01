"use client";
import MyButton from "@/components/ui/MyButton";
import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import React from "react";

export default function FarmSpecializationSection() {
  return (
    <>
      <TableContainer>
        <Table>
          <Thead></Thead>
          <Tbody>
            <Tr borderWidth={"2px"}>
              <Td>Звітний рік</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr borderWidth={"2px"}>
              <Td>Кількість працівників</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr borderWidth={"2px"}>
              <Td>Річний дохід за {},грн</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr borderWidth={"2px"}>
              <Td>
                Вартість активів підприємства <br />
                станом на кінець {}року,грн
              </Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr borderWidth={"2px"}>
              <Td>
                Сектор, в яких здійснює
                <br /> діяльність господарство
              </Td>
              <Td>Позначка</Td>
              <Td>Площа (га), поголів'я (голів)</Td>
              <Td>Обсяг виробництва за {}р.,грн</Td>
            </Tr>
            <Tr borderWidth={"2px"}>
              <Td>М’ясо ВРХ</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr borderWidth={"2px"}>
              <Td>М’ясо свиней</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr borderWidth={"2px"}>
              <Td>Молоко</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr borderWidth={"2px"}>
              <Td>Птиця</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr borderWidth={"2px"}>
              <Td>Аквакультура</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr borderWidth={"2px"}>
              <Td>Мед</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr borderWidth={"2px"}>
              <Td>Ягоди</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr borderWidth={"2px"}>
              <Td>Фрукти</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr borderWidth={"2px"}>
              <Td>Овочі</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr borderWidth={"2px"}>
              <Td>Кондитерська продукція</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr borderWidth={"2px"}>
              <Td>
                Інші види діяльності{" "}
                <MyButton size={"sm"} ml={2}>
                  Додати
                </MyButton>
              </Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr borderWidth={"2px"}>
              <Td colSpan={2}>Загальна площа землекористування, га</Td>

              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr borderWidth={"2px"} fontSize={"sm"}>
              <Td colSpan={2}>У т.ч. орендована земля, га</Td>

              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr borderWidth={"2px"} fontSize={"sm"}>
              <Td colSpan={2}>
                Середній (основний) строк договорів <br />
                оренди земельних ділянок, роки
              </Td>

              <Td></Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <MyButton>Редагувати</MyButton>
    </>
  );
}
