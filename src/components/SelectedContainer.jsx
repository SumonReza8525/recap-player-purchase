import React from "react";
import AddedPlayerCard from "./AddedPlayerCard";

const SelectedContainer = ({
  choosePlayer,
  handleDelete,
  availableBalance,
  setAvailableBalance,
}) => {
  return (
    <div className=" w-full  rounded-2xl space-y-4 p-4">
      {choosePlayer.map((p) => (
        <AddedPlayerCard
          handleDelete={handleDelete}
          p={p}
          key={p.id}
          setAvailableBalance={setAvailableBalance}
          availableBalance={availableBalance}
        ></AddedPlayerCard>
      ))}
    </div>
  );
};

export default SelectedContainer;
