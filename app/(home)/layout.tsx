import { FloatingNav } from "@/components/ui/floating-navbar";
import type { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = cookies();
  const user = cookie.get("user");
  let username = "";
  if (user) {
    const userData = JSON.parse(user.value);
    username = userData.username;
  }

  const links = [
    { name: "Home", link: "/" },
    { name: "Seller", link: "/seller" },
  ];
  return (
    <>
      <FloatingNav navItems={links} username={username} />
      <main className="mt-20">{children}</main>;
    </>
  );
}
