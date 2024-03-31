import { useEffect } from "react";
import "./App.css";
import { getAllPokemon } from "./utils/pokemon.js";
import { useState } from "react";
import { getPokemon } from "./utils/pokemon.js";
import { Card } from "./components/Card/Card.js";
import Navbar from "./components/Navbar/Navbar.js";

function App() {
  //endpoint for the pokemon API
  const initialURL = "https://pokeapi.co/api/v2/pokemon/";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      //全てのポケモンのデータを取得
      const res = await getAllPokemon(initialURL);
      //各ポケモンの詳細なデータを取得
      loadPokemon(res.results);

      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  console.log(pokemonData);

  return (
    <>
      <Navbar />
      <div className='App'>
        {loading ? (
          <h1>ロード中...</h1>
        ) : (
          <>
            <div className='pokemonCardContainer'>
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />;
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
