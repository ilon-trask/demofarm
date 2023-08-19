"use client";
import React, { useEffect, useState } from "react";
import FarmDataTable from "../FarmDataTable";
import MyButton from "@/components/ui/MyButton";
import FarmDataDialog from "./component/FarmDataDialog/FarmDataDialog";
import { DemonstrationFarm, Region, User } from "@prisma/client";
import { DemonstrationFarmWithSpecialization } from "@/types/DemonstrationFarmsTypes";
import { useFarmsData } from "@/hooks/use_farmsData";

function FarmDataSection({
  farm,
  regions,
  farmId,
  prismaUserData,
}: {
  farm: DemonstrationFarmWithSpecialization;
  regions: Region[] | [];
  farmId: string;
  prismaUserData: User | null;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [farmState, setFarmState] = useState(farm);
  const { farms } = useFarmsData();
  useEffect(() => {
    const farm = farms.find((el) => el.id == +farmId);
    if (farm) setFarmState(farm);
  }, [JSON.stringify(farms)]);
  return (
    <>
      <FarmDataTable farm={farm} prismaUserData={prismaUserData} />
      <MyButton onClick={() => setIsOpen(true)}>Редагувати</MyButton>
      <FarmDataDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        regions={regions}
        farm={farmState}
        enterprise={farmState.Enterprise}
      />
    </>
  );
}

export default FarmDataSection;
