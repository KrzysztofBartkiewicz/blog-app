import Link from 'next/link'

type LayoutProps = {
  children: React.ReactNode
}

const navLinks = [
  { path: '/', label: 'Blog', id: 1 },
  { path: '/about', label: 'About', id: 2 },
  { path: '/projects', label: 'Projects', id: 3 }
]

const Layout = ({ children }: LayoutProps) => (
  <div className="p-10 font-mono">
    <nav className="bg-blue-400 p-5 flex justify-center">
      {navLinks.map(({ path, label, id }) => (
        <Link href={path} key={id}>
          <a className="shaddow md:w-40 bg-blue-50 p-2 m-2 text-center hover:bg-gray-50 cursor-pointer">
            {label}
          </a>
        </Link>
      ))}
    </nav>

    <main className="bg-gray-100 p-5">{children}</main>

    <footer className="bg-blue-400 p-5 text-gray-100 text-center">
      &#169; {new Date().getFullYear()}
    </footer>
  </div>
)

export default Layout
