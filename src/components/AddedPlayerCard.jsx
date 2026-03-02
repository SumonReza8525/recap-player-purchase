import React from "react";

const AddedPlayerCard = ({ p }) => {
  return (
    <div className="flex justify-between items-center bg-accent-content p-3 rounded-xl">
      <div className="flex gap-3 items-center">
        <img
          className="w-28 object-cover rounded-2xl"
          src={p.playerImage}
          alt=""
        />

        <div className="text-white">
          <h2 className="text-2xl  font-bold">{p.playerName}</h2>
          <p className="text-gray-300">{p.playerCountry}</p>
        </div>
      </div>
      <p className="text-red-600 font-extrabold">Delete</p>
    </div>
  );
};

export default AddedPlayerCard;
