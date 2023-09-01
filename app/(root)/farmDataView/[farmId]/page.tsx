import MyButton from "@/components/ui/MyButton";
import MyContainer from "@/components/ui/MyContainer";
import MyHeading from "@/components/ui/MyHeading";
import { getDemonstrationFarm } from "@/hooks/getDemonstrationFarms";
import getRegions from "@/hooks/getRegions";
import createServerClient from "@/lib/createServerClient";
import prismadb from "@/lib/prismadb";
import { DemonstrationFarmWithSpecialization } from "@/types/DemonstrationFarmsTypes";
import React from "react";
import FarmDataSection from "./components/FarmDataSection/FarmDataSection";
import FarmSpecializationSection from "./components/FarmSpecializationSection/FarmSpecializationSection";
import FarmInnovationSection from "./components/FarmInnovationsSection/FarmInnovationSection";
import FarmProcessSection from "./components/FarmProcessSection/FarmProcessSection";
import FarmDirectionSection from "./components/FarmDirectionSection/FarmDirectionSection";
import FarmOrganizationsSection from "./components/FarmOrganizationsSection/FarmOrganizationsSection";
import FarmEcologySection from "./components/FarmEcologySection/FarmEcologySection";
import FarmScientificProjectSection from "./components/FarmScientificProjectSection/FarmScientificProjectSection";
import FarmPagesSection from "./components/FarmPagesSection/FarmPagesSection";

export default async function Home({ params }: { params: { farmId: string } }) {
  const farm: DemonstrationFarmWithSpecialization | null =
    await getDemonstrationFarm(+params.farmId);
  if (!farm) throw new Error("не має ферми з таким id");

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
      <MyHeading>Дані про спеціалізацію господарства</MyHeading>
      <FarmSpecializationSection />
      <MyHeading>
        Перелік найважливіших впроваджених інновацій за останні три роки з
        коротким описом:
      </MyHeading>
      <FarmInnovationSection />
      <MyHeading>
        Перелік сертифікованих процесів (сертифікатів) з коротким описом:
      </MyHeading>
      <FarmProcessSection />
      <MyHeading>
        Перелік напрямів демонстраційної діяльності з коротким описом:
      </MyHeading>
      <FarmDirectionSection />
      <MyHeading>
        Перелік професійних організацій, членами яких є підприємство:
      </MyHeading>
      <FarmOrganizationsSection />
      <MyHeading>
        Перелік запроваджених екологічних програм/заходів/інновацій з коротким
        описом:
      </MyHeading>
      <FarmEcologySection />
      <MyHeading>
        Перелік спільних проектів з науковими та освітніми установами/дорадчими
        службами з коротким описом:
      </MyHeading>
      <FarmScientificProjectSection />
      <MyHeading>
        Перелік спільних проектів з територіальними громадами з коротким описом:
      </MyHeading>
      <FarmProcessSection />
      {/* <FarmTabs /> */}
      <MyHeading>Перелік сторінок в інтернеті та соціальних мережах</MyHeading>
      <FarmPagesSection farmId={+params.farmId} farm={farm} />
      <MyHeading>Бізнес-план</MyHeading>
      <MyButton>Редагувати</MyButton>
      <MyHeading color={"red"}>Структура інвестиційного проєкту</MyHeading>
      <MyButton>Редагувати</MyButton>
    </MyContainer>
  );
}
