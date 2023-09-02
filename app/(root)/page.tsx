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
import CommunityTable from "./(components)/CommunityTable";
import BusinessPlanSection from "./cabinet/(components)/BusinessPlanSection/BusinessPlanSection";
import MyButton from "@/components/ui/MyButton";
import MainDemonstrationActivitiesSection from "./cabinet/(components)/MainDemonstrationActivitiesSection/MainDemonstrationActivitiesSection";
import getRegions from "@/hooks/getRegions";
import TableFilters from "./cabinet/(components)/TableFilters";

export default async function Home() {
  const activities: DemonstrationActivityWithUser[] | null =
    await prismadb.demonstrationActivity.findMany({
      include: { user: true },
    });
  const farms: DemonstrationFarmWithSpecialization[] =
    await getDemonstrationFarms();
  const regions = await getRegions();
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
            <MyHeading>Бізнес-план</MyHeading>
            <Div display={"grid"} gridTemplateColumns={"1fr 3fr"}>
              <Div>
                <MyText>Фільтри</MyText>
              </Div>
              <Div>
                <BusinessPlanSection showTags={false} />
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
            <MyText>Демоферми УМДФ</MyText>
            <MyText>Тренери УМДФ</MyText>
            <MyText>Спільнота УМДФ</MyText>
          </Div>
          <MyContainer color={"#548135"}>
            <Image
              src={"/content.jpg"}
              alt="контент"
              width={1555}
              height={1456}
            />
            <MyHeading textAlign={"left"} mt={"50px"}>
              Заходи УМДФ
            </MyHeading>
            <Div mt={"30px"}>
              <MainDemonstrationActivitiesSection
                activities={activities}
                regions={regions}
              />
            </Div>
            <MyHeading textAlign={"left"} mt={"50px"}>
              Демоферми УМДФ
            </MyHeading>
            <Div mt={"30px"}>
              <Div>
                <TableFilters regions={regions} />
                <DemonstrationFarmsTable isCabinet={false} farms={farms} />
                <MyButton
                  backgroundColor={"#cae9b7"}
                  _hover={{ backgroundColor: "#a7c297" }}
                >
                  Геопортал УМДФ
                </MyButton>
                <MyButton
                  backgroundColor={"#cae9b7"}
                  _hover={{ backgroundColor: "#a7c297" }}
                  ml={4}
                >
                  Переглянути всі Демо ферми
                </MyButton>
                <MyButton
                  backgroundColor={"#cae9b7"}
                  _hover={{ backgroundColor: "#a7c297" }}
                  ml={4}
                >
                  Приєднатися до УМДФ та створити свою демоферму
                </MyButton>
              </Div>
            </Div>
            <MyHeading textAlign={"left"} mt={"50px"}>
              Тренери УМДФ
            </MyHeading>
            <Div mt={"30px"}>
              <Div>
                <TableFilters regions={regions} />
                <TrainerTables />
                <MyButton
                  backgroundColor={"#cae9b7"}
                  _hover={{ backgroundColor: "#a7c297" }}
                >
                  Переглянути усіх тренерів УМДФ
                </MyButton>
                <MyButton
                  backgroundColor={"#cae9b7"}
                  _hover={{ backgroundColor: "#a7c297" }}
                  ml={4}
                >
                  Приєднатися до УМДФ та стати тренером
                </MyButton>
              </Div>
            </Div>
            <MyHeading textAlign={"left"} mt={"50px"}>
              Спільнота УМДФ
            </MyHeading>
            <Div mt={"30px"}>
              <CommunityTable />
              <MyButton
                backgroundColor={"#cae9b7"}
                _hover={{ backgroundColor: "#a7c297" }}
              >
                Переглянути усіх партнерів УМДФ
              </MyButton>
              <MyButton
                backgroundColor={"#cae9b7"}
                _hover={{ backgroundColor: "#a7c297" }}
                ml={4}
              >
                Приєднатися до УМДФ та стати партнером
              </MyButton>
            </Div>
          </MyContainer>
        </>
      )}
    </>
  );
}
