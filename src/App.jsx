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
  // toggle between Available and Selected Players
  const [toggle, setToggle] = useState(true);

  // Choose players / Select Players
  const [choosePlayer, setChoosePlayer] = useState([]);

  const handleChoose = (p) => {
    setChoosePlayer((prev) => {
      const exist = prev.find((item) => item.id === p.id);
      if (exist) return prev;

      // if (prev.length >= 6) {
      //   toast("Maximum 6 players allowed");
      //   return prev;
      // }

      return [...prev, p];
    });
  };

  // Delete Players from Cart Or list
  const handleDelete = (player) => {
    const updated = choosePlayer.filter((item) => item.id !== player.id);
    setChoosePlayer([...updated]);
  };

  // Players array loading from json data
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/players.json");
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
