import React, { useState } from "react";
import userImg from "../assets/user.png";
import flagImg from "../assets/report.png";
import { toast } from "react-toastify";
const Players = ({
  player,
  handleChoose,
  choosePlayer,
  setAvailableBalance,
  availableBalance,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleIsSelected = (player) => {
    if (choosePlayer.length >= 6) {
      toast("You can select only 6 players");
      return;
    }
    if (availableBalance < player.playerPrice) {
      toast("not enough coins");
      return;
    }
    handleChoose(player);
    setIsSelected(true);
    setAvailableBalance(availableBalance - player.playerPrice);
  };
  // console.log(availableBalance);
  return (
    <div
      className="border-3 border-[rgba(96,165,250,0.6)] rounded-2xl p-5 
space-y-4 transition-all duration-300 
hover:-translate-y-2 
hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] 
hover:border-[rgba(96,165,250,0.93)]"
    >
      <img
        className="w-full object-cover rounded-2xl"
        src={player.playerImage}
        alt=""
      />
      <div className="flex gap-1 items-center">
        <img className="w-5" src={userImg} alt="" />{" "}
        <h2 className="font-bold text-lg">{player.playerName}</h2>{" "}
      </div>
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div className="flex items-center gap-1.5">
          <img className="" src={flagImg} alt="" />
          <p>{player.playerCountry}</p>
        </div>
        <div>Rating : {player.rating}</div>
      </div>

      <div className="flex justify-between items-center">
        <p className="font-semibold">{player.battingStyle}</p>
        <p className="text-gray-500">{player.bowlingStyle}</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="font-semibold">
          Price : $<span>{player.playerPrice}</span>
        </p>
        <button
          disabled={isSelected}
          onClick={() => handleIsSelected(player)}
          className={`px-3 py-1.5 rounded-xl  font-semibold ${isSelected ? "bg-blue-400" : "bg-gray-300"}`}
        >
          {isSelected ? "Selected" : "Choose Player"}
        </button>
      </div>
    </div>
  );
};

export default Players;
