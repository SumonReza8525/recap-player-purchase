import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Hero from "./components/Hero";
import Players from "./components/Players";

const App = () => {
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

  console.log(players);
  return (
    <div>
      <Container>
        <Navbar></Navbar>
        <Hero></Hero>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {players.map((player) => (
            <Players key={player.id} player={player}></Players>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default App;
