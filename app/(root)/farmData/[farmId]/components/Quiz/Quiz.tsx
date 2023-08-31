"use client";
import Div from "@/components/ui/Div";
import MyButton from "@/components/ui/MyButton";
import MyText from "@/components/ui/MyText";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabProps,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FarmDataDialogContent,
  FarmDataType,
} from "../FarmDataSection/component/FarmDataDialog/FarmDataDialog";
import { DemonstrationFarm, Region, User as PrismaUser } from "@prisma/client";
import { User } from "@supabase/auth-helpers-nextjs";
function Buttons({
  screen,
  setScreen,
}: {
  setScreen: Dispatch<SetStateAction<number>>;
  screen: number;
}) {
  return (
    <Div>
      {screen > 0 && (
        <MyButton onClick={() => setScreen((prev) => prev - 1)}>Назад</MyButton>
      )}
      <MyButton
        ml={"auto"}
        mr={0}
        onClick={() => setScreen((prev) => prev + 1)}
      >
        Далі
      </MyButton>
    </Div>
  );
}
const MyTab = (props: TabProps) => (
  <Tab display={"block"} _selected={{ backgroundColor: "#cae9b7" }} {...props}>
    {props.children}
  </Tab>
);
export default function Quiz({
  farm,
  regions,
  prismaUser,
  user,
}: {
  farm: DemonstrationFarm;
  regions: Region[] | [];
  prismaUser: PrismaUser | null;
  user: User | null;
}) {
  const [screen, setScreen] = useState(0);
  //   const farmDataForm = useMemo(() => useForm<FarmDataType>(), []);
  const farmDataForm = useForm<FarmDataType>();
  return (
    <Div>
      <Tabs variant="soft-rounded" index={screen}>
        <TabList>
          <MyTab>
            <Div
              mx={"auto"}
              border={"1px"}
              borderRadius={"100px"}
              h={7}
              w={7}
              display="flex"
              justifyContent={"center"}
            >
              1
            </Div>
            <MyText>Загальні данні</MyText>
          </MyTab>
          <MyTab>
            <Div
              mx={"auto"}
              border={"1px"}
              borderRadius={"100px"}
              h={7}
              w={7}
              display="flex"
              justifyContent={"center"}
            >
              2
            </Div>
            Спеціалізація
          </MyTab>
          <MyTab>
            <Div
              mx={"auto"}
              border={"1px"}
              borderRadius={"100px"}
              h={7}
              w={7}
              display="flex"
              justifyContent={"center"}
            >
              3
            </Div>
            Ефективність
          </MyTab>
          <MyTab>
            <Div
              mx={"auto"}
              border={"1px"}
              borderRadius={"100px"}
              h={7}
              w={7}
              display="flex"
              justifyContent={"center"}
            >
              4
            </Div>
            Маркетинг
          </MyTab>
          <MyTab>
            <Div
              mx={"auto"}
              border={"1px"}
              borderRadius={"100px"}
              h={7}
              w={7}
              display="flex"
              justifyContent={"center"}
            >
              5
            </Div>
            Інновації та сертифікати
          </MyTab>
          <MyTab>
            <Div
              mx={"auto"}
              border={"1px"}
              borderRadius={"100px"}
              h={7}
              w={7}
              display="flex"
              justifyContent={"center"}
            >
              6
            </Div>
            Участь у спільноті
          </MyTab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FarmDataDialogContent
              control={farmDataForm.control}
              errors={farmDataForm.formState.errors}
              handleSubmit={farmDataForm.handleSubmit}
              register={farmDataForm.register}
              ClientSubmit={(data: FarmDataType) => {}}
              farm={farm}
              regions={regions}
              prismaUser={prismaUser}
              user={user}
            />
            <Buttons screen={screen} setScreen={setScreen} />
          </TabPanel>
          <TabPanel>
            <Buttons screen={screen} setScreen={setScreen} />
          </TabPanel>
          <TabPanel>
            <Buttons screen={screen} setScreen={setScreen} />
          </TabPanel>
          <TabPanel>
            <Buttons screen={screen} setScreen={setScreen} />
          </TabPanel>
          <TabPanel>
            <Buttons screen={screen} setScreen={setScreen} />
          </TabPanel>
          <TabPanel>
            <Buttons screen={screen} setScreen={setScreen} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Div>
  );
}
