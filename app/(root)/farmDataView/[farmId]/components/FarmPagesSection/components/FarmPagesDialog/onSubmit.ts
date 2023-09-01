"use server";

import prismadb from "@/lib/prismadb";
import { CreatePagesType } from "./FarmPagesDialog";
import { DemonstrationFarmWithSpecialization } from "@/types/DemonstrationFarmsTypes";
import { getDemonstrationFarm } from "@/hooks/getDemonstrationFarms";

export default async function onSubmit(data: CreatePagesType, farmId: number) {
  const res = await prismadb.webResource.create({
    data: {
      link: data.link,
      name: data.name,
      type: data.type,
      demonstrationFarmId: farmId,
    },
  });
  const farm: DemonstrationFarmWithSpecialization | null =
    await getDemonstrationFarm(farmId);
  return farm;
}
