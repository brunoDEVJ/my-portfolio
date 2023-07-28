import Image from 'next/image'
import './header.scss'

export function Header() {
  return (
    <header className="header">
      <h1>Oi, eu sou Bruno! 🌎</h1>
      <h2>Software Engineer</h2>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={325}
        height={310}
        priority
      />
    </header>
  )
}