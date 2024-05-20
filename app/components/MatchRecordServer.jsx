import React from "react";
import MatchRecords from "./MatchRecords.jsx";
import { currentUser } from "@clerk/nextjs";

const MatchRecordServer = async () => {
  const user = await currentUser();
  //   const userGame = user?.id;
  return (
    <div className="py-24 bg-[#F3F5F8] mt-4">
      <MatchRecords userName={user ? true : false} />
    </div>
  );
};

export default MatchRecordServer;
