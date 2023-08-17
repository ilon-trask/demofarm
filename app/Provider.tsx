"use client";
import NavBar from "@/components/ui/NavBar";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { User } from "@supabase/auth-helpers-nextjs";
import ModalProvider from "@/providers/modal-provider";

function Provider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <NavBar user={user} />

        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}

export default Provider;
