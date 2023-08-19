"use client";
import { usePrismaUserData } from "@/hooks/use_prismaUserData ";
import { useUserData } from "@/hooks/use_userData";
import { DemonstrationFarmWithSpecialization } from "@/types/DemonstrationFarmsTypes";
import {
  List,
  ListItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import { User } from "@prisma/client";
import React, { useEffect, useState } from "react";

function FarmDataTable({
  farm,
  prismaUserData,
}: {
  farm: DemonstrationFarmWithSpecialization;
  prismaUserData: User | null;
}) {
  const { prismaUser, setPrismaUser } = usePrismaUserData();
  const [prismaUserState, setPrismaUserState] = useState(prismaUserData);
  useEffect(() => {
    if (!prismaUserData) setPrismaUser(prismaUserData);
  }, []);
  useEffect(() => {
    if (prismaUser) setPrismaUserState(prismaUser);
  }, [JSON.stringify(prismaUser)]);

  const { user } = useUserData();
  return (
    <TableContainer maxW={"800px"} mx={"auto"}>
      <Table>
        <Tbody>
          <Tr>
            <Td fontWeight={"bold"}>Повна назва</Td>
            <Td>{farm.name}</Td>
          </Tr>
          <Tr>
            <Td fontWeight={"bold"}>Код</Td>
            <Td>{farm.Enterprise?.code}</Td>
          </Tr>
          <Tr>
            <Td fontWeight={"bold"}>Область</Td>
            <Td>{farm.Enterprise?.Region.name}</Td>
          </Tr>
          <Tr>
            <Td fontWeight={"bold"}>Район</Td>
            <Td>{farm.Enterprise?.district}</Td>
          </Tr>
          <Tr>
            <Td fontWeight={"bold"}>Населений пункт</Td>
            <Td>{farm.Enterprise?.village}</Td>
          </Tr>
          <Tr>
            <Td fontWeight={"bold"}>Сторінки в Інтернеті</Td>
            <Td>{farm.Enterprise?.pagesOnInternet}</Td>
          </Tr>
          <Tr>
            <Td fontWeight={"bold"}>Сторінки в соціальних мережах</Td>
            <Td>{farm.Enterprise?.pagesOnNetworks}</Td>
          </Tr>
          <Tr>
            <Td fontWeight={"bold"}>Контактні дані:</Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>
              <UnorderedList>
                <ListItem>П. І. Б.</ListItem>
                <ListItem>Посада контактної особи</ListItem>
                <ListItem>Робочий телефон</ListItem>
                <ListItem>Мобільний телефон </ListItem>
                <ListItem>Email</ListItem>
              </UnorderedList>
            </Td>
            <Td>
              <List>
                <ListItem>
                  {prismaUserState
                    ? prismaUserState.firstName +
                      " " +
                      prismaUserState.secondName
                    : null}
                </ListItem>
                <ListItem>
                  {prismaUserState ? prismaUserState.position : null}
                </ListItem>
                <ListItem>
                  {prismaUserState ? prismaUserState.workPhone : null}
                </ListItem>
                <ListItem>
                  {prismaUserState ? prismaUserState.phone : null}
                </ListItem>
                <ListItem>{user?.email}</ListItem>
              </List>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default FarmDataTable;
