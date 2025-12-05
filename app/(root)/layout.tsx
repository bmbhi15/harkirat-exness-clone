import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { authClient } from "@/lib/better-auth/auth-client";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = authClient.getSession();
  if (!session) {
    redirect("/log-in");
  }

  const userName = session.;
  return (
    <main>
      <Header userName={userName} />
      {children}
    </main>
  );
}
