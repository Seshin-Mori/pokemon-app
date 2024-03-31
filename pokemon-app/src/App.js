import { useEffect } from "react";
import "./App.css";
import { getAllPokemon } from "./utils/pokemon.js";
import { useState } from "react";

function App() {
  //endpoint for the pokemon API
  const initialURL = "https://pokeapi.co/api/v2/pokemon/";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      //全てのポケモンのデータを取得
      const res = await getAllPokemon(initialURL);
      console.log(res);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  return (
    <div className='App'>
      {loading ? <h1>ロード中...</h1> : <h1>ポケモンデータを取得しました。</h1>}
    </div>
  );
}

export default App;
