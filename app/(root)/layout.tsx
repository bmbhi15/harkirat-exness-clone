import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect("/log-in");
  }

  const userName = session.user.name;
  if (!userName) return;
  return (
    <main>
      <Header userName={userName} />
      {children}
    </main>
  );
}
