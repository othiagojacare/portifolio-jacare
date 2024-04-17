import Header from './components/Header'
import Banner from './pages/Banner'
import Habilidades from './pages/Habilidades'
import Projetos from './pages/Projetos'
import './global.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
      <div>
       <Header />
       <Banner />
       <Habilidades/>
       <Projetos />
      </div>
  );
}
