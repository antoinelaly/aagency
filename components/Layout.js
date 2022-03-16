import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>agence</span>
              <span>Aarno</span>
            </h1>
            <h2>image de marques</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Aarno</p>
      </footer>
    </div>
  )
}