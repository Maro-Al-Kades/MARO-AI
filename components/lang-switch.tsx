"use client";

import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

const languages = {
  en: "English",
  ar: "عربي",
};

const LangSwitch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const currentLocale = pathname.split("/")[1];

  const switchLocale = (locale: string) => {
    if (locale === currentLocale) return;
    const newPath = `/${locale}${pathname.substring(currentLocale.length + 1)}`;

    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          color="primary"
          size="icon"
          disabled={isPending}
        >
          <Icon icon="lucide:earth" width="18" height="18" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([locale, label]) => (
          <DropdownMenuItem key={locale} onClick={() => switchLocale(locale)}>
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangSwitch;
