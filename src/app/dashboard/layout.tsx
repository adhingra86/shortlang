import Image from "next/image";
import Link from "next/link";

import { GridIcon } from "@/components/icons/grid";
import { HomeIcon } from "@/components/icons/home";
import { SettingsIcon } from "@/components/icons/settings";
import { UserIcon } from "@/components/icons/user";
import Logo from "@/assets/logo.png";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav className="fixed flex flex-col gap-6 top-0 left-0 p-4 h-full bg-slate-100">
        <Link href={"/"}>
          <HomeIcon width="22px" height="22px" />
        </Link>
        <Link href={"/"}>
          <GridIcon width="22px" height="22px" />
        </Link>
        <Link href={"/"}>
          <UserIcon width="22px" height="22px" />
        </Link>
        <Link href={"/"}>
          <SettingsIcon width="22px" height="22px" />
        </Link>
      </nav>
      <header className="fixed flex top-0 left-0 ml-[54px] p-2">
        <Image width={200} src={Logo} alt="Shortlang logo" />
      </header>

      {children}
    </section>
  );
}
