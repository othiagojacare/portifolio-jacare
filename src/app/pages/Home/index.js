import Header from '@/app/components/Header'
import Banner from '../Banner'
import Habilidades from '../Habilidades'
import Projetos from '../Projetos'

export default function Home(){
    return(
        <div>
            <Header />
            <Banner />
            <Habilidades />
            <Projetos/>
        </div>
    )
}

