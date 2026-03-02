import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Hero from "./components/Hero";
import Players from "./components/Players";
import FooterContainer from "./components/FooterContainer";
import TogglePlayers from "./components/TogglePlayers";
import SelectedContainer from "./components/SelectedContainer";
import { ToastContainer } from "react-toastify";

const App = () => {
  // toggle
  const [toggle, setToggle] = useState(true);

  // Choose players
  const [choosePlayer, setChoosePlayer] = useState([]);

  const handleChoose = (p) => {
    const exist = choosePlayer.find((item) => item.id === p.id);
    if (!exist && choosePlayer.length < 6) {
      setChoosePlayer([...choosePlayer, p]);
    }
  };

  // const [deletePlayer, setDeletePlayer] = useState([]);
  const handleDelete = (player) => {
    // console.log("delete btn clicked", player);

    const updated = choosePlayer.filter((item) => item.id !== player.id);
    setChoosePlayer(updated);
  };

  // console.log(choosePlayer);
  // Players array loading from json data
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/public/players.json");
        if (!res.ok) throw new Error("data can not fetch");
        const data = await res.json();
        setPlayers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading)
    return <span className="loading loading-spinner loading-xl"></span>;
  if (error) return <p>Error : {error}</p>;
  // Players array data loads end here

  // console.log(players);

  // toggle available player and selected player

  return (
    <div className="">
      <Container>
        <Navbar></Navbar>
        <Hero></Hero>
        <TogglePlayers
          choosePlayer={choosePlayer}
          toggle={toggle}
          setToggle={setToggle}
        ></TogglePlayers>

        {toggle ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {players.map((player) => (
              <Players
                handleChoose={handleChoose}
                key={player.id}
                player={player}
                choosePlayer={choosePlayer}
              ></Players>
            ))}
          </div>
        ) : (
          <SelectedContainer
            choosePlayer={choosePlayer}
            handleDelete={handleDelete}
          ></SelectedContainer>
        )}

        <ToastContainer></ToastContainer>
      </Container>
      <FooterContainer></FooterContainer>
    </div>
  );
};

export default App;
