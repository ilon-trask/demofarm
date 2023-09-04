import MyContainer from "@/components/ui/MyContainer";
import MyText from "@/components/ui/MyText";
import React from "react";

export default function Home() {
  return (
    <MyContainer textAlign={"center"}>
      <MyText fontWeight={"bold"} fontSize={"30px"}>
        Демонстраційна ферма
      </MyText>
      - це суб’єкт підприємницької діяльності, що використовується як інструмент
      демонстрації ідей, новітніх продуктів, техніки, технологій, менеджменту,
      маркетингу у сфері сільського господарства.
    </MyContainer>
  );
}
