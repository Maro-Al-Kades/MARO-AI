"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

const DashboardRoute = () => {
  const router = useRouter();
  const locale = useLocale();

  const t = useTranslations("DashboardRoute");
  const tools = t.raw("tools");
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl text-primary md:text-4xl font-bold text-center">
          {t("title")}
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          {t("description")}
        </p>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool: any) => (
          <Card
            key={tool.href}
            className="hover:shadow-md transition cursor-pointer"
            onClick={() => router.push(tool.href)}
          >
            <div className="p-4 border-black/5 flex items-center justify-between ">
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <Icon
                    icon={tool.icon}
                    className={tool.color}
                    width={24}
                    height={24}
                  />
                </div>

                <div className="font-medium">{tool.label}</div>
              </div>

              {locale === "en" ? (
                <Icon
                  icon="hugeicons:square-arrow-right-01"
                  width="22"
                  height="22"
                  className="text-primary"
                />
              ) : (
                <Icon
                  icon="hugeicons:square-arrow-left-01"
                  width="22"
                  height="22"
                  className="text-primary"
                />
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardRoute;
