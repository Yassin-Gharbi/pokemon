import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import api from "../services/api"

function PokeDetails() {
  const { id } = useParams()
  const [poke, setPoke] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    api.get(`/pokemon/${id}`)
      .then(res => {
        setPoke(res.data)
        setLoading(false)
      })
      .catch(() => {
        setError("Pokémon introuvable")
        setLoading(false)
      })
  }, [id])

  if (loading) return <p className="status">Chargement...</p>
  if (error) return <p className="status error">{error}</p>
  if (!poke) return null

  const element = poke.types[0].type.name

  return (
    <div>
      <Link to="/" className="back">Retour à la liste</Link>

      <article className="detail" data-type={element}>
        <div className="detail-art">
          <img src={poke.sprites.front_default} alt={poke.name} />
        </div>

        <div className="detail-body">
          <p className="detail-id">#{String(poke.id).padStart(3, "0")}</p>
          <h1 className="detail-name">{poke.name}</h1>
          <span className="badge">{element}</span>

          <dl className="stats">
            <div>
              <dt>Poids</dt>
              <dd>{poke.weight / 10} kg</dd>
            </div>
            <div>
              <dt>Taille</dt>
              <dd>{poke.height / 10} m</dd>
            </div>
          </dl>
        </div>
      </article>
    </div>
  )
}

export default PokeDetails