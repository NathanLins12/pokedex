import { PokemonCard } from "../../components/PokemonCard";
import { useQuerypokemonPage } from "../../hooks/useQueryPokePage";
import { Container } from "./style";

export function Home() {
  const { data } = useQuerypokemonPage();
  console.log(data);

  return (
    <Container>
      <h1>"bem vindo à Pokedex do Reprograma Jucás."</h1>

      <div className="gridCards">
        {data?.map((pokemon) => {
          return <PokemonCard pokemon={pokemon}/>;
        })}
      </div>
    </Container>
  );
}
