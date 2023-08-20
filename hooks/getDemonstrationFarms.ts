"use server";

import prismadb from "@/lib/prismadb";
import { DemonstrationFarmWithSpecialization } from "@/types/DemonstrationFarmsTypes";

export async function getDemonstrationFarms() {
  const farms: DemonstrationFarmWithSpecialization[] =
    await prismadb.demonstrationFarm.findMany({
      include: {
        WebResource: true,
        Enterprise: { include: { Region: true } },
        FarmSpecialization: {
          include: { AmountSpecialization: true, Specialization: true },
        },
      },
    });
  return farms;
}

export async function getDemonstrationFarm(farmId: number) {
  const farm: DemonstrationFarmWithSpecialization | null =
    await prismadb.demonstrationFarm.findFirst({
      where: { id: farmId },
      include: {
        WebResource: true,
        Enterprise: { include: { Region: true } },
        FarmSpecialization: {
          include: { AmountSpecialization: true, Specialization: true },
        },
      },
    });
  return farm;
}
