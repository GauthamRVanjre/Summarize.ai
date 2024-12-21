import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";

const page = () => {
  return (
    <>
      <h1>Admin</h1>
      <LogoutLink>Logout</LogoutLink>
    </>
  );
};

export default page;
