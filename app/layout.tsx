import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./Provider";
import createServerClient from "@/lib/createServerClient";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "demoFarm",
  description: "demoFarm",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <html lang="uk">
      <body
        className={inter.className}
        style={{
          minHeight: "100vh",
        }}
      >
        <Provider user={user}>{children}</Provider>
      </body>
    </html>
  );
}
