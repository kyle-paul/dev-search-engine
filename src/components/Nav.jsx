import Link from 'next/link'
import styles from './nav.module.scss' // Import the custom SCSS file

const Nav = () => {
  return (
    <nav className={`${styles.navbar}`} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className={`${styles.navbaritem}`}>Developer Search Engine</a>
        </Link>

        <a
          role="button"
          className="{`${styles.navbarburger}`} burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      {/* <div id="navbarBasicExample" className={`${styles.navbarmenu}`}>
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">Home</a>
          </Link>
          <Link href="/about">
            <a className="navbar-item">About</a>
          </Link>
        </div>
      </div> */}
    </nav>
  )
}

export default Nav
