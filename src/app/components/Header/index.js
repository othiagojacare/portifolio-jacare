'use client'
import './header.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <header className='header'>
            <h1 id='logo'>JacareDev</h1>
            <nav>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Skills</a></li>
                    <li><a href='#'>Projetos</a></li>
                    <li><a href='#'>Contato</a></li>
                    <Link to='/cadastro'>Cadastro</Link>
                </ul>
            </nav>
        </header>
    )
}

