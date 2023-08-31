"use client";
import MyButton from "@/components/ui/MyButton";
import { useFarmsData } from "@/hooks/use_farmsData";
import { DemonstrationFarmWithSpecialization } from "@/types/DemonstrationFarmsTypes";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
type props = { farms: DemonstrationFarmWithSpecialization[] } & (
  | {
      isCabinet: true;
      setIsUpdate: Dispatch<SetStateAction<boolean>>;
      setIsOpen: Dispatch<SetStateAction<boolean>>;
    }
  | { isCabinet: false }
);
export default function DemonstrationFarmsTable(props: props) {
  const [farmsData, setFarmsData] = useState<
    DemonstrationFarmWithSpecialization[]
  >(props.farms);
  const { farms, setFarms } = useFarmsData();
  useEffect(() => {
    if (!farms[0]) setFarms(farmsData);
  }, []);
  useEffect(() => setFarmsData(farms), [farms]);
  const router = useRouter();
  return (
    <TableContainer maxW={"1100px"} mx={"auto"}>
      <Table>
        <Thead>
          <Tr>
            <Th>Назва</Th>
            <Th>Спеціалізація</Th>
            <Th>Інтегральний показник</Th>
            {props.isCabinet && <Th>Інформація</Th>}
          </Tr>
        </Thead>
        <Tbody>
          {farmsData.length > 0 ? (
            farmsData.map((el) => (
              <Tr key={el.id}>
                <Td>{el.name}</Td>
                <Td></Td>
                <Td>{}</Td>
                {props.isCabinet && (
                  <Td>
                    <MyButton
                      size={"sm"}
                      onClick={() => router.push(`/farmData/${el.id}`)}
                    >
                      Додати
                    </MyButton>
                  </Td>
                )}
              </Tr>
            ))
          ) : (
            <Tr>
              <Td></Td>
              <Td>Немає данних</Td>
              <Td></Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
