import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";
import ClientComponentUser from "./ClientComponentUser";

const page = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  return (
    <>
      <main className="pt-12">
        <h1>Weclome</h1>
        <div className="text-white">Hello, {JSON.stringify(user)}</div>
        <ClientComponentUser />
      </main>
    </>
  );
};

export default page;
