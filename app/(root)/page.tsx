import DemonstrationActivitiesTable from "@/app/(root)/(components)/DemonstrationActivitiesTable";
import MyHeading from "@/components/ui/MyHeading";
import MyText from "@/components/ui/MyText";
// import ModalProvider from "@/providers/modal-provider";
import MyButton from "@/components/ui/MyButton";
import Div from "@/components/ui/Div";
import MyContainer from "@/components/ui/MyContainer";
import DemonstrationFarmsTable from "./(components)/DemonstrationFarmsTable";
import TrainerTables from "./(components)/TrainerTables";

export default function Home() {
  return (
    <MyContainer>
      <MyHeading>Демонстраційні заходи</MyHeading>
      <Div display={"grid"} gridTemplateColumns={"1fr 3fr"}>
        <Div>
          <MyText>Фільтри</MyText>
        </Div>
        <Div>
          <DemonstrationActivitiesTable />
        </Div>
      </Div>
      <MyHeading>Демонстраційні ферми</MyHeading>
      <Div display={"grid"} gridTemplateColumns={"1fr 3fr"}>
        <Div>
          <MyText>Фільтри</MyText>
        </Div>
        <Div>
          <DemonstrationFarmsTable />
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
