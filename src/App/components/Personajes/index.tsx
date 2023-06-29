import { useGetData } from "../../hooks/useGetData"
import Error from "../Error/error"
import Loading from "../Loading/loading"
import Pagination from "../Pagination"
import styles from "./styles.module.css"
import { useState } from "react"
import { ApiResponse, PersonajeProp } from "../../types"
import { Link } from "react-router-dom"

export function Personaje({ image, name, species, id }: PersonajeProp) {
  return (
    <div className={styles.personaje} key={id}>
      <img src={image} alt='foto' className={styles.imagen} />
      <h3 className='texto'>{name}</h3>
      <div className='texto'>
        <strong>Species: {species}</strong>
      </div>
    </div>
  )
}
type personajesProp = {
  personajes?: string
}

export default function Personajes({ personajes }: personajesProp) {
  console.log(
    "Hecho por Philippe Maurel. Tercer trabajo del informatorio. Junio 2023"
  )
  const [nroPagina, setNroPagina] = useState<number>(1)
  const [url, setUrl] = useState<string>(
    `https://rickandmortyapi.com/api/character/${personajes ? personajes : ""}`
  )
  let { data, error, loading } = useGetData<ApiResponse>(url)

  const info = data && data.info
  if (data) data = personajes ? data : data.results
  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {data && (
        <>
          {personajes ? (
            <h3>Los personajes que aparecen en este episodio son:</h3>
          ) : (
            <h1>PERSONAJES</h1>
          )}
          <div className={styles.personajes}>
            {data.map(({ name, image, species, id }: PersonajeProp) => (
              <Link to={`/personajes/${id}`}>
                <Personaje
                  name={name}
                  image={image}
                  species={species}
                  id={id}
                />
              </Link>
            ))}
          </div>
          {!personajes && (
            <Pagination
              prev={info.prev}
              setUrl={setUrl}
              next={info.next}
              nroPagina={nroPagina}
              setNroPagina={setNroPagina}
            />
          )}
        </>
      )}
    </>
  )
}
