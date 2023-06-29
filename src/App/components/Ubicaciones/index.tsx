import { useGetData } from "../../hooks/useGetData"
import Error from "../Error/error"
import Loading from "../Loading/loading"
import Pagination from "../Pagination"
import styles from "./styles.module.css"
import { useState } from "react"
import { ApiResponse, UbicacionProp } from "../../types"
import { Link } from "react-router-dom"

function Ubicacion({ name, type, dimension }: UbicacionProp) {
  return (
    <div className={styles.ubicacion} key={name}>
      <h3 className='texto'>Nombre:</h3>
      <div className='texto'>
        <strong>{name}</strong>
      </div>
      <h3 className='texto'>Tipo:</h3>
      <div className='texto'>
        <strong>{type}</strong>
      </div>
      <h3 className='texto'>Dimensión:</h3>
      <div className='texto'>
        <strong>{dimension}</strong>
      </div>
    </div>
  )
}
export default function Ubicaciones() {
  const [nroPagina, setNroPagina] = useState<number>(1)

  const [url, setUrl] = useState<string>(
    "https://rickandmortyapi.com/api/location"
  )
  const { data, error, loading } = useGetData<ApiResponse>(url)

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {data && (
        <>
          <h1>UBICACIONES</h1>

          <div className={styles["cartas-ubicacion"]}>
            {data.results.map(
              ({ name, type, dimension, id }: UbicacionProp) => (
                <Link to={`/ubicaciones/${id}`}>
                  <Ubicacion
                    name={name}
                    type={type}
                    dimension={dimension}
                    id={id}
                  />
                </Link>
              )
            )}
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
