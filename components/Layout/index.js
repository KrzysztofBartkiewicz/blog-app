import Link from 'next/link'

const Layout = ({ children }) => (
  <div className="p-10 font-mono">
    <nav className="bg-blue-400 p-5 flex justify-center">
      <Link href="/">
        <a className="shaddow md:w-40 bg-blue-50 p-2 m-2 text-center hover:bg-gray-50 cursor-pointer">
          Blog
        </a>
      </Link>
      <Link href="/about">
        <a className="shaddow md:w-40 bg-blue-50 p-2 m-2 text-center hover:bg-gray-50 cursor-pointer">
          About
        </a>
      </Link>
    </nav>

    <main className="bg-gray-100 p-5">{children}</main>

    <footer className="bg-blue-400 p-5 text-gray-100 text-center">
      &#169; {new Date().getFullYear()}
    </footer>
  </div>
)

export default Layout
