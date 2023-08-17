import MyContainer from "@/components/ui/MyContainer";
import MyHeading from "@/components/ui/MyHeading";
import React from "react";
import DemonstrationActivitiesTable from "../(components)/DemonstrationActivitiesTable";
import MyButton from "@/components/ui/MyButton";
import DemonstrationFarmsTable from "../(components)/DemonstrationFarmsTable";
import TrainerTables from "../(components)/TrainerTables";
import DemonstrationActivitiesDialog from "./(components)/DemonstrationActivitiesDialog";
import DemonstrationFarmsDialog from "./(components)/DemonstrationFarmsDialog";
import TrainerDialog from "./(components)/TrainerDialog";

export default function Page() {
  return (
    <MyContainer>
      <MyHeading>Мої демонстраційні заходи</MyHeading>
      <DemonstrationActivitiesTable />
      <DemonstrationActivitiesDialog />
      <MyHeading>Мої демонстраційні ферми</MyHeading>
      <DemonstrationFarmsTable />
      <DemonstrationFarmsDialog />
      <MyHeading>Мої заявки тренера</MyHeading>
      <TrainerTables />
      <TrainerDialog />
    </MyContainer>
  );
}
