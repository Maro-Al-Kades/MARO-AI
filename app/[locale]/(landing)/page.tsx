import { Button } from "@/components/ui/button";

import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <Link href={`/sign-in`}>
        <Button>Sign in</Button>
      </Link>
      <Link href={`/sign-up`}>
        <Button>Sign up</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
