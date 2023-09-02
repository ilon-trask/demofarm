"use client";
import Div from "@/components/ui/Div";
import MyText from "@/components/ui/MyText";
import { Select } from "@chakra-ui/react";
import React from "react";
import { Specializations } from "../../farmData/[farmId]/components/Quiz/Quiz";
import { Region } from "@prisma/client";

export default function TableFilters({ regions }: { regions: Region[] }) {
  return (
    <Div display={"grid"} gridTemplateColumns={"1fr 1fr 1fr"} gap={"10px"}>
      <Div>
        <MyText fontWeight={"bold"} fontSize={20}>
          Регіон
        </MyText>
        <Select size={"sm"} fontSize={"17px"}>
          <option defaultChecked>Вся Україна</option>
          {regions.map((el) => (
            <option key={el.id}>{el.name}</option>
          ))}
        </Select>
      </Div>
      <Div>
        <MyText fontWeight={"bold"} fontSize={20}>
          Напрям
        </MyText>
        <Select size={"sm"} fontSize={"17px"}>
          <option value="">Всі</option>
          {Specializations.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
          <option value="">Інші</option>
        </Select>
      </Div>
      <Div>
        <MyText fontWeight={"bold"} fontSize={20}>
          Формат
        </MyText>
        <Select size={"sm"} fontSize={"17px"}>
          <option value="">Всі</option>
          <option value="">Демонстація</option>
          <option value="">Відео демонстація</option>
          <option value="">Екскурсія</option>
          <option value="">Відео екскурсія</option>
          <option value="">Майстерклас</option>
          <option value="">Відео майстерклас</option>
          <option value="">День поля</option>
          <option value="">Семінар</option>
          <option value="">Вебінар</option>
        </Select>
      </Div>
    </Div>
  );
}
