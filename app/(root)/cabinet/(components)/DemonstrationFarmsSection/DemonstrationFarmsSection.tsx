"use client";
import React, { useState } from "react";
import DemonstrationFarmsDialog from "./DemonstrationFarmsDialog/DemonstrationFarmsDialog";
import DemonstrationFarmsTable from "@/app/(root)/(components)/DemonstrationFarmsTable";
import MyButton from "@/components/ui/MyButton";
import { DemonstrationFarmWithSpecialization } from "@/types/DemonstrationFarmsTypes";

function DemonstrationFarmsSection({
  farms,
}: {
  farms: DemonstrationFarmWithSpecialization[];
}) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <DemonstrationFarmsTable
        farms={farms}
        isCabinet
        setIsOpen={setIsOpen}
        setIsUpdate={setIsUpdate}
      />
      <MyButton onClick={() => setIsOpen(true)}>
        Створення демонстраційної ферми
      </MyButton>
      <DemonstrationFarmsDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
      />
    </>
  );
}

export default DemonstrationFarmsSection;
