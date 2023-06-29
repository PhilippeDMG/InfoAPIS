import styles from "./styles.module.css"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg'
        alt='logo'
      />
      <div className={styles.links}>
        <Link className={styles["navbar-link"]} to='/personajes'>
          Personajes
        </Link>
        <Link className={styles["navbar-link"]} to='/ubicaciones'>
          Ubicaciones
        </Link>
        <Link className={styles["navbar-link"]} to='/episodios'>
          Episodios
        </Link>
      </div>
    </nav>
  )
}
