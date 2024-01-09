import { useQuery } from "@tanstack/react-query";
import { API } from "../configs/api";
import { Pokemon } from "../@types/pokemon";

export function useQuerypokemonPage() {
  async function getPokemonPage() {
    // API
    const { data } = await API.get("pokemon");

    const pokemonPromises = data.results.map(
      async (pokemon: { url: string }) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
      }
    );

    const pokemonData = await Promise.all(pokemonPromises);

    return pokemonData as Pokemon[];
  }
  const query = useQuery({
    queryKey: ["getPokemonPage"],
    queryFn: getPokemonPage,
  });

  return { ...query };
}
