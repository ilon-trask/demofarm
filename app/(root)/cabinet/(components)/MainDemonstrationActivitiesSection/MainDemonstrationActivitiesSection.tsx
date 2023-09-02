"use client";
import DemonstrationActivitiesTable from "@/app/(root)/(components)/DemonstrationActivitiesTable";
import { Specializations } from "@/app/(root)/farmData/[farmId]/components/Quiz/Quiz";
import Div from "@/components/ui/Div";
import MyButton from "@/components/ui/MyButton";
import MyText from "@/components/ui/MyText";
import { DemonstrationActivityWithUser } from "@/types/DemonstrationActivitiesTypes";
import { Input } from "@chakra-ui/react";
import { Region } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";
import TableFilters from "../TableFilters";

export default function MainDemonstrationActivitiesSection({
  activities,
  regions,
}: {
  activities: DemonstrationActivityWithUser[];
  regions: Region[];
}) {
  const router = useRouter();
  return (
    <>
      <TableFilters regions={regions} />
      <DemonstrationActivitiesTable activities={activities} isCabinet={false} />
      <Div display={"flex"} alignItems={"center"}>
        <MyText fontSize={20}>Архів</MyText>
        <MyText fontSize={20} ml={2}>
          З:
        </MyText>
        <Input type="date" />
        <MyText fontSize={20} ml={2}>
          До:
        </MyText>
        <Input type="date" />
      </Div>
      <MyButton
        mt={3}
        backgroundColor={"#cae9b7"}
        _hover={{ backgroundColor: "#a7c297" }}
      >
        Переглянути усі заходи УМДФ
      </MyButton>
      <MyButton
        backgroundColor={"#cae9b7"}
        _hover={{ backgroundColor: "#a7c297" }}
        ml={4}
        onClick={() => router.push("/sing-up")}
      >
        Приєднатися до УМДФ та створювати власні заходи
      </MyButton>
    </>
  );
}
