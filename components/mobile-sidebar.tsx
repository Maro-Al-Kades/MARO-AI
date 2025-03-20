"use client";

import { Icon } from "@iconify/react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

const MobileSidebar = () => {
  const locale = useLocale();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant={`default`}
          color="primary"
          size={`icon`}
          className="md:hidden"
        >
          <Icon icon="hugeicons:menu-collapse" width="26" height="26" />
        </Button>
      </SheetTrigger>
      <SheetContent side={locale === "ar" ? "right" : "left"} className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
