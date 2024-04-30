import Header from '@/app/components/Header'
import Banner from '../Banner'
import  Sobre  from '../Sobre'
import Redes from '../Redes'
import Certificacoes from '../Certificacoes'
import Projetos from '../Projetos'
import Contato from '../Contato'

export default function Home(){
    return(
        <div>
            <Header />
            <Banner />
            <Sobre />
            <Redes />
            <Certificacoes />
            <Projetos />
            <Contato />
        </div>
    )
}

