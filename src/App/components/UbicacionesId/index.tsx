import styles from "./styles.module.css"
import { useParams } from "react-router-dom"
import { useGetData } from "../../hooks/useGetData"
import { ApiResponse } from "../../types"
import Error from "../Error/error"
import Loading from "../Loading/loading"

export default function PersonajeId() {
  const id = useParams().id
  const { data, error, loading } = useGetData<ApiResponse>(
    `https://rickandmortyapi.com/api/location/${id}`
  )
  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {data && (
        <div className={styles["ubicaciones-id"]}>
          <div className={styles.texto}>
            {Object.entries(data)
              .slice(1, 3)
              .map(([key, value]) => (
                <h2 key={key}>
                  <strong>{key}:</strong> {JSON.stringify(value)}
                </h2>
              ))}
            <h2>
              <strong>created:</strong> {data.created}
            </h2>
          </div>
        </div>
      )}
    </>
  )
}
