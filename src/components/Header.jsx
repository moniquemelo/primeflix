import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return(
    <header>
      <Link className='logo' to="/">Primeflix</Link>
      <Link className='favoritos' to="/">Meus filmes</Link>
    </header>
  )
}