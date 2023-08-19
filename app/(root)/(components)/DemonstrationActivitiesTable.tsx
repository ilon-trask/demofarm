"use client";
import useGetDateFromDate from "@/hooks/useGetDateFromDate";
import { useActivitiesData } from "@/hooks/use_activitiesData";
import { DemonstrationActivityWithUser } from "@/types/DemonstrationActivitiesTypes";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { DemonstrationActivity } from "@prisma/client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
type props = {
  activities: DemonstrationActivityWithUser[] | [];
} & (
  | {
      isCabinet: true;
      setIsUpdate: Dispatch<SetStateAction<boolean>>;
      setIsOpen: Dispatch<SetStateAction<boolean>>;
    }
  | { isCabinet: false }
);
export default function DemonstrationActivitiesTable(props: props) {
  const [activitiesData, setActivitiesData] = useState<
    DemonstrationActivityWithUser[]
  >(props.activities);
  const { activities, setActivities } = useActivitiesData();
  useEffect(() => {
    if (!activities[0]) setActivities(activitiesData);
  }, []);
  useEffect(() => setActivitiesData(activities), [activities]);
  return (
    <TableContainer maxW={"1100px"} mx={"auto"}>
      <Table>
        <Thead>
          <Tr>
            <Th>Дата</Th>
            <Th>Назва заходу</Th>
            <Th>Ініціатор</Th>
          </Tr>
        </Thead>
        <Tbody>
          {activitiesData.map((el) => (
            <Tr key={el.id}>
              <Td>{useGetDateFromDate(el.date)}</Td>
              <Td>{el.name}</Td>
              <Td>{el.user.firstName + " " + el.user.secondName}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
