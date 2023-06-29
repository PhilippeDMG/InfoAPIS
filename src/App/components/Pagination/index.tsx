import styles from "./styles.module.css"
import { useState } from "react"

type Pagination = {
  prev: string
  next: string
  setUrl: any
  nroPagina: number
  setNroPagina: any
}

function Pagination({
  prev,
  next,
  setUrl,
  nroPagina,
  setNroPagina,
}: Pagination) {
  const handleClickMinus = () => {
    setUrl(prev)
    setNroPagina(nroPagina - 1)
  }

  const handleClickPlus = () => {
    setUrl(next)
    setNroPagina(nroPagina + 1)
  }
  return (
    <div className={styles.pagination}>
      <button
        disabled={prev ? false : true}
        className={styles.boton}
        onClick={() => handleClickMinus()}
      >
        &lt;
      </button>
      <div className={styles.texto}>Página {nroPagina}</div>
      <button
        disabled={next ? false : true}
        className={styles.boton}
        onClick={() => handleClickPlus()}
      >
        &gt;
      </button>
    </div>
  )
}
export default Pagination
