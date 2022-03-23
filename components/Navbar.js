import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
      <div className="la-navbar">
        <Link href="/">
          <div className="logo">
          <Image src="/aarno_noir.png" alt="site logo" width={124} height={25} />
          </div>
        </Link>
        <nav>
          <Link href="/about"><a>About</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </nav>
      </div>
      
    )
}
export default Navbar;