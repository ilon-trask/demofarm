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
import AdvisoryServicesTable from "./(components)/AdvisoryServicesTable";
import TerritorialCommunitiesTable from "./(components)/TerritorialCommunitiesTable";
import PartnersTable from "./(components)/PartnersTable";
import createServerClient from "@/lib/createServerClient";
import Image from "next/image";
import MyButton from "@/components/ui/MyButton";
import CommunityTable from "./(components)/CommunityTable";

export default async function Home() {
  const activities: DemonstrationActivityWithUser[] | null =
    await prismadb.demonstrationActivity.findMany({
      include: { user: true },
    });
  const farms: DemonstrationFarmWithSpecialization[] =
    await getDemonstrationFarms();
  const supabase = createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <>
      {user ? (
        <>
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
            <MyHeading>Дорадчі служби та дорадники</MyHeading>
            <Div display={"grid"} gridTemplateColumns={"1fr 3fr"}>
              <Div>
                <MyText>Фільтри</MyText>
              </Div>
              <Div>
                <AdvisoryServicesTable />
              </Div>
            </Div>
            <MyHeading>Об'єднані територіальні громади</MyHeading>
            <Div display={"grid"} gridTemplateColumns={"1fr 3fr"}>
              <Div>
                <MyText>Фільтри</MyText>
              </Div>
              <Div>
                <TerritorialCommunitiesTable />
              </Div>
            </Div>
            <MyHeading>Партнери УМДФ</MyHeading>
            <Div display={"grid"} gridTemplateColumns={"1fr 3fr"}>
              <Div>
                <MyText>Фільтри</MyText>
              </Div>
              <Div>
                <PartnersTable />
              </Div>
            </Div>
          </MyContainer>
        </>
      ) : (
        <>
          <Div
            display={"flex"}
            justifyContent={"end"}
            gap={"15px"}
            fontWeight={"bold"}
            fontSize={"20px"}
            background={"#289D4E"}
            px={5}
            py={5}
            color={"white"}
          >
            <MyText>Заходи УМДФ</MyText>
            <MyText>Демо ферми УМДФ</MyText>
            <MyText>Тренери УМДФ</MyText>
            <MyText>Спільнота УМДФ</MyText>
          </Div>
          <MyContainer color={"#289D4E"}>
            <Image
              src={"/content.jpg"}
              alt="контент"
              width={1555}
              height={1456}
            />
            <MyHeading textAlign={"left"}>Заходи УМДФ</MyHeading>
            <Div>
              <DemonstrationActivitiesTable
                activities={activities}
                isCabinet={false}
              />
              {/* <MyButton></MyButton> */}
            </Div>
            <MyHeading textAlign={"left"}>Демо ферми УМДФ</MyHeading>
            <Div>
              <Div>
                <DemonstrationFarmsTable isCabinet={false} farms={farms} />
              </Div>
            </Div>
            <MyHeading textAlign={"left"}>Тренери УМДФ</MyHeading>
            <Div>
              <Div>
                <TrainerTables />
              </Div>
            </Div>
            <MyHeading textAlign={"left"}>Спільнота УМДФ</MyHeading>
            <Div>
              <CommunityTable />
            </Div>
          </MyContainer>
        </>
      )}
    </>
  );
}
