import React from "react";

import { UserButton } from "@clerk/nextjs";
import LangSwitch from "./lang-switch";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />

      <div className="flex w-full justify-end gap-3">
        <UserButton afterSignOutUrl="/" />
        <LangSwitch />
      </div>
    </div>
  );
};

export default Navbar;
