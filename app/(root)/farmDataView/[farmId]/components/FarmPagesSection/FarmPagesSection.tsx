"use client";
import MyButton from "@/components/ui/MyButton";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FarmPagesDialog from "./components/FarmPagesDialog/FarmPagesDialog";
import { DemonstrationFarmWithSpecialization } from "@/types/DemonstrationFarmsTypes";
import { useFarmsData } from "@/hooks/use_farmsData";

export default function FarmPagesSection({
  farmId,
  farm,
}: {
  farmId: number;
  farm: DemonstrationFarmWithSpecialization;
}) {
  const [farmState, setFarmState] = useState(farm);
  const { farms, updateFarm } = useFarmsData();
  useEffect(() => updateFarm(farm), []);
  useEffect(
    () => setFarmState(farms.find((el) => el.id == farmId) || farm),
    [JSON.stringify(farms.find((el) => el.id == farmId))]
  );
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>№</Th>
              <Th>Назва сторінки</Th>
              <Th>Посилання</Th>
            </Tr>
          </Thead>
          <Tbody>
            {farmState.WebResource.map((el, ind) => (
              <Tr key={el.id}>
                <Td>{ind + 1}</Td>
                <Td>{el.name}</Td>
                <Td>{el.link}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <MyButton onClick={() => setIsOpen(true)}>Додати</MyButton>
      <FarmPagesDialog isOpen={isOpen} setIsOpen={setIsOpen} farmId={farmId} />
    </>
  );
}
