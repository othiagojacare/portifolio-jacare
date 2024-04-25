import Header from '@/app/components/Header'
import Banner from '../Banner'
import  Sobre  from '../Sobre'
import Contato from '../Contato'
import Certificacoes from '../Certificacoes'

export default function Home(){
    return(
        <div>
            <Header />
            <Banner />
            <Sobre />
            <Contato />
            <Certificacoes />
        </div>
    )
}

