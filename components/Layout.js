import Link from 'next/link'
import Navbar from './Navbar'

export default function Layout({ children }) {

  return (
    <div className="layout page-content">
      <Navbar />
      <div className="">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Aarno</p>
      </footer>
    </div>
  )
}