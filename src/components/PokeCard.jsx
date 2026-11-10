import { Link } from "react-router-dom"

function PokeCard({ pokemon }) {
  return (
    <article className="card" data-type={pokemon.element}>
      <div className="card-art">
        <span className="card-id">#{String(pokemon.id).padStart(3, "0")}</span>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="card-body">
        <h3 className="card-name">{pokemon.name}</h3>
        <span className="badge">{pokemon.element}</span>
        <Link to={`/poke/${pokemon.id}`} className="btn">Voir détails</Link>
      </div>
    </article>
  )
}

export default PokeCard