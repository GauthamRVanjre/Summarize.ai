import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";
import ClientComponentUser from "./ClientComponentUser";

const page = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  return (
    <>
      <div>
        Hello, {user.given_name} with id {user.id}
      </div>
      <ClientComponentUser />
    </>
  );
};

export default page;
