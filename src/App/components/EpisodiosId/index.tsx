import styles from "./styles.module.css"
import { useParams } from "react-router-dom"
import { useGetData } from "../../hooks/useGetData"
import { ApiResponse } from "../../types"
import Error from "../Error/error"
import Loading from "../Loading/loading"
import Personajes from "../Personajes"

export default function EpisodiosId() {
  const id = useParams().id
  const { data, error, loading } = useGetData<ApiResponse>(
    `https://rickandmortyapi.com/api/episode/${id}`
  )

  const personajes: string[] = data?.characters.map((url: string) =>
    url.split("/").slice(-1)
  )
  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {data && (
        <>
          <h1>EPISODIO {id}</h1>
          <div className={styles.container}>
            <div className={styles.texto}>
              {Object.entries(data)
                .slice(1, 4)
                .map(([key, value]) => (
                  <div key={key}>
                    <strong>{key}:</strong> {JSON.stringify(value)}
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.abajo}>
            <Personajes personajes={personajes.join(",")} />
          </div>
        </>
      )}
    </>
  )
}
