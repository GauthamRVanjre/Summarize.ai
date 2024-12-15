"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

const ClientComponentUser = () => {
  const { user, isLoading } = useKindeBrowserClient();

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          Hello, {user?.given_name} with {user?.id}
        </div>
      )}
    </>
  );
};

export default ClientComponentUser;
