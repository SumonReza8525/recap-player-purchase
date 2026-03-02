import React from "react";

const AddedPlayerCard = ({ p, handleDelete }) => {
  return (
    <div className="flex justify-between items-center bg-accent-content p-3 rounded-xl max-w-225 mx-auto">
      <div className="flex gap-3 items-center">
        <img
          className="w-28 object-cover rounded-2xl"
          src={p.playerImage}
          alt=""
        />

        <div className="text-white">
          <h2 className="text-xl md:text-2xl font-bold">{p.playerName}</h2>
          <p className="text-gray-300">{p.playerCountry}</p>
        </div>
      </div>
      <p
        onClick={() => handleDelete(p)}
        className="text-red-500 hover:text-red-700 transition-colors duration-200 font-semibold cursor-pointer"
      >
        Delete
      </p>
    </div>
  );
};

export default AddedPlayerCard;
