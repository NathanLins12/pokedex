import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./style";
import { useQuerypokemonDetails } from "../../hooks/useQueryPokeTails";
import { useEffect } from "react";

export function Details() {
  const { name } = useParams();
  const { data, isLoading, error } = useQuerypokemonDetails(name!);
  if (error) console.error(isLoading);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Container>
      {isLoading && <span className="feedbackLoading">Loading...</span>}
      {!isLoading && error && <span className="feedbackLoading">Error...</span>}

      {data && (
        <div className="boxDetails">
          <button onClick={() => navigate(-1)} className="buttonBackPage">
            &lt; voltar
          </button>

          <div className="pokemonImage">
            <img
              src={data.sprites.other["official-artwork"].front_default}
              alt={data.name}
            />
          </div>

          <div className="boxStatus">
          <strong>
            #{data.id} {data.name}
          </strong>
          </div>

        </div>
      )}
    </Container>
  );
}
