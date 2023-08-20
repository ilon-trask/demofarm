import DemonstrationActivitiesTable from "@/app/(root)/(components)/DemonstrationActivitiesTable";
import MyHeading from "@/components/ui/MyHeading";
import MyText from "@/components/ui/MyText";
import Div from "@/components/ui/Div";
import MyContainer from "@/components/ui/MyContainer";
import DemonstrationFarmsTable from "./(components)/DemonstrationFarmsTable";
import TrainerTables from "./(components)/TrainerTables";
import prismadb from "@/lib/prismadb";
import { DemonstrationActivityWithUser } from "@/types/DemonstrationActivitiesTypes";
import { DemonstrationFarmWithSpecialization } from "@/types/DemonstrationFarmsTypes";
import { getDemonstrationFarms } from "@/hooks/getDemonstrationFarms";

export default async function Home() {
  const activities: DemonstrationActivityWithUser[] | null =
    await prismadb.demonstrationActivity.findMany({
      include: { user: true },
    });
  const farms: DemonstrationFarmWithSpecialization[] =
    await getDemonstrationFarms();
  return (
    <MyContainer>
      <MyHeading>Демонстраційні заходи</MyHeading>
      <Div display={"grid"} gridTemplateColumns={"1fr 3fr"}>
        <Div>
          <MyText>Фільтри</MyText>
        </Div>
        <Div>
          <DemonstrationActivitiesTable
            activities={activities}
            isCabinet={false}
          />
        </Div>
      </Div>
      <MyHeading>Демонстраційні ферми</MyHeading>
      <Div display={"grid"} gridTemplateColumns={"1fr 3fr"}>
        <Div>
          <MyText>Фільтри</MyText>
        </Div>
        <Div>
          <DemonstrationFarmsTable isCabinet={false} farms={farms} />
        </Div>
      </Div>
      <MyHeading>Тренери</MyHeading>
      <Div display={"grid"} gridTemplateColumns={"1fr 3fr"}>
        <Div>
          <MyText>Фільтри</MyText>
        </Div>
        <Div>
          <TrainerTables />
        </Div>
      </Div>
    </MyContainer>
  );
}
