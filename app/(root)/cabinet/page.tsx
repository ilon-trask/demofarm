import MyContainer from "@/components/ui/MyContainer";
import MyHeading from "@/components/ui/MyHeading";
import React from "react";
import TrainerTables from "../(components)/TrainerTables";
import TrainerDialog from "./(components)/TrainerDialog";
import CheckPrismaUser from "./CheckPrismaUser";
import DemonstrationActivitiesSection from "./(components)/DemonstrationActivitiesSection/DemonstrationActivitiesSection";
import prismadb from "@/lib/prismadb";
import createServerClient from "@/lib/createServerClient";
import { DemonstrationActivityWithUser } from "@/types/DemonstrationActivitiesTypes";
import { DemonstrationFarmWithSpecialization } from "@/types/DemonstrationFarmsTypes";
import DemonstrationFarmsSection from "./(components)/DemonstrationFarmsSection/DemonstrationFarmsSection";
import UserDataSection from "./(components)/UserDataSection/UserDataSection";

export default async function Page() {
  const supabase = createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("немає аккаунту");
  const prismaUser = await prismadb.user.findFirst({
    where: { sub: user.id },
  });
  if (!prismaUser) throw new Error("немає прізма юзера");
  const activities: DemonstrationActivityWithUser[] | [] =
    await prismadb.demonstrationActivity.findMany({
      include: { user: true },
      where: { user: { sub: user.id } },
    });
  const farms: DemonstrationFarmWithSpecialization[] =
    await prismadb.demonstrationFarm.findMany({
      include: {
        Enterprise: { include: { Region: true } },
        FarmSpecialization: {
          include: {
            AmountSpecialization: true,
            Specialization: true,
          },
        },
      },
      where: { user: { sub: user.id } },
    });

  return (
    <MyContainer>
      <CheckPrismaUser />
      <MyHeading>Персональний кабінет</MyHeading>
      <UserDataSection user={user} prismaUser={prismaUser} />
      <MyHeading>Мої демонстраційні заходи</MyHeading>
      <DemonstrationActivitiesSection activities={activities} />
      <MyHeading>Мої демонстраційні ферми</MyHeading>
      <DemonstrationFarmsSection farms={farms} />
      <MyHeading>Мої заявки тренера</MyHeading>
      <TrainerTables />
      <TrainerDialog />
    </MyContainer>
  );
}
