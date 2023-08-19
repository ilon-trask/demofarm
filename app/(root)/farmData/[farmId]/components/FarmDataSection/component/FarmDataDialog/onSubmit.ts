"use server";
import prismadb from "@/lib/prismadb";
import { DemonstrationFarmWithSpecialization } from "@/types/DemonstrationFarmsTypes";

export default async function onSubmit(
  data: {
    id?: number;
    code: number;
    regionId: number;
    district: string;
    village: string;
    pagesOnInternet: string;
    pagesOnNetworks: string;
  },
  userId: number,
  farmId: number
) {
  const enterprise = await prismadb.enterprise.findFirst({
    where: { id: data.id! },
  });
  if (enterprise) {
    await prismadb.enterprise.update({
      data: {
        ...data,
        creatorId: userId,
        demonstrationFarmId: farmId,
      },
      where: { id: data.id },
    });
    const res: DemonstrationFarmWithSpecialization | null =
      await prismadb.demonstrationFarm.findFirst({
        where: { id: farmId },
        include: {
          Enterprise: { include: { Region: true } },
          FarmSpecialization: {
            include: { AmountSpecialization: true, Specialization: true },
          },
        },
      });
    return res;
  } else {
    await prismadb.enterprise.create({
      data: {
        ...data,
        creatorId: userId,
        demonstrationFarmId: farmId,
      },
    });
    const res: DemonstrationFarmWithSpecialization | null =
      await prismadb.demonstrationFarm.findFirst({
        where: { id: farmId },
        include: {
          Enterprise: { include: { Region: true } },
          FarmSpecialization: {
            include: { AmountSpecialization: true, Specialization: true },
          },
        },
      });
    return res;
  }
}
