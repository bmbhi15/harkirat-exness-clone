import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // if (!session || session.error) {
  //   console.log("user session");
  //   console.log(session);
  //   redirect("/log-in");
  // }
  // console.log("user session");
  // console.log(session);

  // const userName = session.data?.user.name;
  const userName = "Anagh Pranshu";
  console.log(userName);
  if (!userName) return;
  return (
    <main>
      <Header userName={userName} />
      {children}
    </main>
  );
}
