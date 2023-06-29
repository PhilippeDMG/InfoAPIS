import styles from "./perseonajesid.module.css"
import { useParams } from "react-router-dom"
import { useGetData } from "../../hooks/useGetData"
import { ApiResponse } from "../../types"
import Error from "../Error/error"
import Loading from "../Loading/loading"

export default function PersonajeId() {
  const id = useParams().id
  const { data, error, loading } = useGetData<ApiResponse>(
    `https://rickandmortyapi.com/api/character/${id}`
  )
  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {data && (
        <div className={styles.container}>
          <img src={data.image} />
          <div className={styles.texto}>
            {Object.entries(data)
              .slice(0, 6)
              .map(([key, value]) => (
                <h3 key={key}>
                  <strong>{key}:</strong> {JSON.stringify(value)}
                </h3>
              ))}
            <h3>
              <strong>origin:</strong> {data.origin.name}
            </h3>
          </div>
        </div>
      )}
    </>
  )
}
