"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useLocale, useTranslations } from "next-intl";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LOGO_FONT = Bebas_Neue({
  weight: ["400"],
});

const Sidebar = () => {
  const locale = useLocale();
  const t = useTranslations("DashboardRoute");
  const routes = t.raw("sidebar-routes");

  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#162023] text-white">
      <div className="px-3 py-2 flex-1">
        <Link
          href={`/dashboard`}
          className={cn(
            `flex flex-row items-center justify-start gap-3 mb-14`,
            locale === "ar" ? "justify-start" : null
          )}
        >
          <div className="relative w-12 h-12 ">
            <Image fill alt="logo" src={`/logo.svg`} />
          </div>
          <h1 className={cn("text-3xl font-black", LOGO_FONT.className)}>
            MARO-AI
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route: any) => (
            <Link
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400",
                locale === "ar" && "font-light"
              )}
              href={route.href}
              key={route.href}
            >
              <div className="flex items-center flex-1 text-lg gap-3">
                <Icon
                  icon={route.icon}
                  width={24}
                  height={24}
                  className={route.color}
                />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
