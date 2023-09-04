"use client";
import Div from "@/components/ui/Div";
import MyText from "@/components/ui/MyText";
import { useRouter } from "next/navigation";
import React from "react";

export default function ContentButtons() {
  const router = useRouter();
  return (
    <Div
      display={"grid"}
      gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
      mt={"50px"}
    >
      <Div>
        <MyText
          fontWeight={"bold"}
          fontSize={"20px"}
          textTransform={"uppercase"}
        >
          Цілі проекту
        </MyText>
        {/* <Div display={"flex"} justifyContent={"space-evenly"}> */}
        <Div display={"grid"} gridTemplateColumns={"1fr 1fr 1fr"}>
          <Div textAlign={"center"}>
            <MyText fontSize={"35px"} fontWeight={"bold"} color={"#289D4E"}>
              50+
            </MyText>
            <MyText textTransform={"uppercase"} fontSize={"20px"}>
              Демоферм
            </MyText>
          </Div>
          <Div borderLeft={"2px"} borderRight={"2px"} textAlign={"center"}>
            <MyText fontSize={"35px"} fontWeight={"bold"} color={"#289D4E"}>
              100+
            </MyText>
            <MyText textTransform={"uppercase"} fontSize={"20px"}>
              Тренерів
            </MyText>
          </Div>
          <Div textAlign={"center"}>
            <MyText fontSize={"35px"} fontWeight={"bold"} color={"#289D4E"}>
              1000+
            </MyText>
            <MyText textTransform={"uppercase"} fontSize={"20px"}>
              Заходів
            </MyText>
          </Div>
        </Div>
        <MyText mt={5}>Ключові показники:</MyText>
        <MyText fontSize={"14px"}>
          кількість створених демонстраційних ферм, що є учасниками мережі;
          <br /> кількість тренерів, що беруть участь у демонстраційних показах;
          кількість нових господарств, що застосували новації завдяки
          демонстраційним фермам;
          <br /> кількість представників господарств, що були учасниками
          демонстраційних показів;
          <br /> економічний та соціальний ефект від впроваджених інновацій.
        </MyText>
      </Div>
      <Div display={"grid"} gridTemplateColumns={"1fr 1fr"}>
        <Div>
          <MyText
            fontWeight={"bold"}
            fontSize={"20px"}
            textTransform={"uppercase"}
          >
            Мета проекту
          </MyText>
          <MyText>
            Створити доступ до кращих інноваційних продуктів суб’єктів
            сільськогосподарського мікро-, малого та середнього підприємництва;
            <br /> Створити умови для підвищення ефективності
            сільськогосподарського виробництва суб’єктів мікро-, малого та
            середнього підприємництва;
          </MyText>
        </Div>
        <Div display={"flex"} gap={4} flexDirection={"column"} mt={"24px"}>
          <Div
            bgColor={"#289D4E"}
            cursor={"pointer"}
            _hover={{ bgColor: "#548135" }}
          >
            <MyText
              color={"white"}
              fontSize={"20px"}
              textAlign={"center"}
              onClick={() => router.push("/concept")}
            >
              Концепція
              <br /> створення
              <br /> та розвитку УМДФ
            </MyText>
          </Div>
          <Div
            bgColor={"#289D4E"}
            cursor={"pointer"}
            _hover={{ bgColor: "#548135" }}
            onClick={() => router.push("/farmInf")}
          >
            <MyText color={"white"} fontSize={"20px"} textAlign={"center"}>
              Корисні <br />
              матеріали <br />
              для демоферм
            </MyText>
          </Div>
          <Div
            bgColor={"#289D4E"}
            cursor={"pointer"}
            _hover={{ bgColor: "#548135" }}
            onClick={() => router.push("/coachInf")}
          >
            <MyText color={"white"} fontSize={"20px"} textAlign={"center"}>
              Корисні <br />
              матеріали <br />
              для тренерів
            </MyText>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
