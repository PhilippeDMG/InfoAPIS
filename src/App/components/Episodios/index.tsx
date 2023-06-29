import { useGetData } from "../../hooks/useGetData"
import Error from "../Error/error"
import Loading from "../Loading/loading"
import Pagination from "../Pagination"
import styles from "./styles.module.css"
import { useState } from "react"
import { ApiResponse, EpisodioProp } from "../../types"
import { Link } from "react-router-dom"

function Episodio({ name, episode, id }: EpisodioProp) {
  return (
    <div className={styles.episodio} key={id}>
      <h3 className='texto'>Episode name:</h3>
      <div className='texto'>
        <strong>{name}</strong>
      </div>
      <h3 className='texto'>Episode number:</h3>
      <div className='texto'>
        <strong>{episode}</strong>
      </div>
    </div>
  )
}
export default function Episodios() {
  const [nroPagina, setNroPagina] = useState<number>(1)

  const [url, setUrl] = useState<string>(
    "https://rickandmortyapi.com/api/episode"
  )
  const { data, error, loading } = useGetData<ApiResponse>(url)

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {data && (
        <>
          <h1>EPISODIOS</h1>

          <div className={styles.episodios}>
            {data.results.map(({ name, episode, id }: EpisodioProp) => (
              <Link to={`/episodios/${id}`}>
                <Episodio name={name} episode={episode} id={id} />
              </Link>
            ))}
          </div>
          <Pagination
            prev={data.info.prev}
            setUrl={setUrl}
            next={data.info.next}
            nroPagina={nroPagina}
            setNroPagina={setNroPagina}
          />
        </>
      )}
    </>
  )
}
