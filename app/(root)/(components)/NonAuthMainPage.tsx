"use client";
import Div from "@/components/ui/Div";
import MyContainer from "@/components/ui/MyContainer";
import MyText from "@/components/ui/MyText";
import Image from "next/image";
import React, { useRef } from "react";
import ContentButtons from "./ContentButtons";
import MyHeading from "@/components/ui/MyHeading";
import MainDemonstrationActivitiesSection from "../cabinet/(components)/MainDemonstrationActivitiesSection/MainDemonstrationActivitiesSection";
import TableFilters from "../cabinet/(components)/TableFilters";
import DemonstrationFarmsTable from "./DemonstrationFarmsTable";
import MyButton from "@/components/ui/MyButton";
import TrainerTables from "./TrainerTables";
import CommunityTable from "./CommunityTable";
import { DemonstrationActivityWithUser } from "@/types/DemonstrationActivitiesTypes";
import { Region } from "@prisma/client";
import { DemonstrationFarmWithSpecialization } from "@/types/DemonstrationFarmsTypes";

export default function NonAuthMainPage({
  activities,
  regions,
  farms,
}: {
  activities: DemonstrationActivityWithUser[];
  regions: Region[];
  farms: DemonstrationFarmWithSpecialization[];
}) {
  const activitiesRef = useRef<HTMLElement>();
  const farmRef = useRef<HTMLElement>();
  const coachRef = useRef<HTMLElement>();
  const communityRef = useRef<HTMLElement>();
  return (
    <>
      <Div
        display={"flex"}
        justifyContent={"end"}
        gap={"15px"}
        fontWeight={"bold"}
        fontSize={"20px"}
        background={"#289D4E"}
        px={5}
        py={5}
        color={"white"}
      >
        <MyText
          cursor={"pointer"}
          onClick={() => {
            console.log("sdf");
            if (activitiesRef.current)
              activitiesRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Заходи УМДФ
        </MyText>
        <MyText
          cursor={"pointer"}
          onClick={() => {
            if (farmRef.current)
              farmRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Демоферми УМДФ
        </MyText>
        <MyText
          cursor={"pointer"}
          onClick={() => {
            if (coachRef.current)
              coachRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Тренери УМДФ
        </MyText>
        <MyText
          cursor={"pointer"}
          onClick={() => {
            if (communityRef.current)
              communityRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Спільнота УМДФ
        </MyText>
      </Div>
      <MyContainer color={"#548135"}>
        <Image
          src={"/content_first.png"}
          alt="контент"
          width={1555}
          height={556}
        />
        <ContentButtons />
        <Image
          src={"/content_second.png"}
          alt="контент"
          width={1555}
          height={500}
        />
        <MyHeading textAlign={"left"} mt={"50px"} aref={activitiesRef}>
          Заходи УМДФ
        </MyHeading>
        <Div mt={"30px"}>
          <MainDemonstrationActivitiesSection
            activities={activities}
            regions={regions}
          />
        </Div>
        <MyHeading textAlign={"left"} mt={"50px"} aref={farmRef}>
          Демоферми УМДФ
        </MyHeading>
        <Div mt={"30px"}>
          <Div>
            <TableFilters regions={regions} />
            <DemonstrationFarmsTable isCabinet={false} farms={farms} />
            <MyButton
              backgroundColor={"#cae9b7"}
              _hover={{ backgroundColor: "#a7c297" }}
            >
              Геопортал УМДФ
            </MyButton>
            <MyButton
              backgroundColor={"#cae9b7"}
              _hover={{ backgroundColor: "#a7c297" }}
              ml={4}
            >
              Переглянути всі Демо ферми
            </MyButton>
            <MyButton
              backgroundColor={"#cae9b7"}
              _hover={{ backgroundColor: "#a7c297" }}
              ml={4}
            >
              Приєднатися до УМДФ та створити свою демоферму
            </MyButton>
          </Div>
        </Div>
        <MyHeading textAlign={"left"} mt={"50px"} aref={coachRef}>
          Тренери УМДФ
        </MyHeading>
        <Div mt={"30px"}>
          <Div>
            <TableFilters regions={regions} />
            <TrainerTables />
            <MyButton
              backgroundColor={"#cae9b7"}
              _hover={{ backgroundColor: "#a7c297" }}
            >
              Переглянути усіх тренерів УМДФ
            </MyButton>
            <MyButton
              backgroundColor={"#cae9b7"}
              _hover={{ backgroundColor: "#a7c297" }}
              ml={4}
            >
              Приєднатися до УМДФ та стати тренером
            </MyButton>
          </Div>
        </Div>
        <MyHeading textAlign={"left"} mt={"50px"} aref={communityRef}>
          Спільнота УМДФ
        </MyHeading>
        <Div mt={"30px"}>
          <CommunityTable />
          <MyButton
            backgroundColor={"#cae9b7"}
            _hover={{ backgroundColor: "#a7c297" }}
          >
            Переглянути усіх партнерів УМДФ
          </MyButton>
          <MyButton
            backgroundColor={"#cae9b7"}
            _hover={{ backgroundColor: "#a7c297" }}
            ml={4}
          >
            Приєднатися до УМДФ та стати партнером
          </MyButton>
        </Div>
      </MyContainer>
    </>
  );
}
