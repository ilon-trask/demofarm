import MyContainer from "@/components/ui/MyContainer";
import MyHeading from "@/components/ui/MyHeading";
import React from "react";
import FarmDataSection from "./components/FarmDataSection/FarmDataSection";
import prismadb from "@/lib/prismadb";
import getRegions from "@/hooks/getRegions";
import createServerClient from "@/lib/createServerClient";

export default async function page({ params }: { params: { farmId: string } }) {
  const farm = await prismadb.demonstrationFarm.findFirst({
    where: { id: +params.farmId },
    include: {
      Enterprise: {
        include: {
          Region: true,
        },
      },
      FarmSpecialization: {
        include: {
          AmountSpecialization: true,
          Specialization: true,
        },
      },
    },
  });
  if (!farm) throw new Error("не має ферми з таким id");
  console.log(farm);
  const regions = await getRegions();
  const supabase = createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const prismaUserData = await prismadb.user.findFirst({
    where: { sub: user?.id! },
  });
  return (
    <MyContainer>
      <MyHeading>Загальна інформація про господарство/підприємство</MyHeading>
      <FarmDataSection
        farm={farm}
        regions={regions}
        farmId={params.farmId}
        prismaUserData={prismaUserData}
        user={user}
      />
    </MyContainer>
  );
}
