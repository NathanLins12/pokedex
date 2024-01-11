import { Link } from "react-router-dom";
import { PokemonCard } from "../../components/PokemonCard";
import { useQuerypokemonPage } from "../../hooks/useQueryPokePage";
import { Container } from "./style";

export function Home() {
  const { data, isLoading, error, nextPage, prevPage, page, totalPages } =
    useQuerypokemonPage();

  if (error) console.error(error);

  return (
    <Container>
      <h1>bem vindo à Pokedex do Reprograma Jucás.</h1>

      {isLoading && <span className="feedbackLoading">Loading...</span>}
      {!isLoading && error && <span className="feedbackLoading">Error...</span>}

      <div className="gridCards">
        {data?.map((pokemon) => {
          return (
            <Link to={`/details/${pokemon.name}`} key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />;
            </Link>
          );
        })}
      </div>

      <div className="paginationComponent">
        <button onClick={prevPage} disabled={page <= 1}>
          &lt; Anterior
        </button>

        <span className="boxNumberPage">
          {String(page).padStart(2, "0")} /{" "}
          {String(totalPages).padStart(2, "0")}
        </span>

        <button onClick={nextPage} disabled={page >= totalPages}>
          &lt; Próxima
        </button>
      </div>
    </Container>
  );
}
