'use client'
import { useEffect } from 'react'
import './banner.css' 



export default function Banner(){
    const frases = ['Não importa a cor do céu, quem faz o dia bonito é você...' , 'Tu te tornas eternamente responsável por aquilo que cativas', 'Ser feliz sem motivo é a mais autêntica forma de felicidade.', 'Embora ninguém possa voltar atrás e fazer um novo começo, qualquer um pode começar agora e fazer um novo fim.']

    function randomNumber(){
        return Math.floor(Math.random() * 10)
    }
   randomNumber()
    

    return(
        <div className="banner">  
            <img className="foto" src="https://www.pngarts.com/files/11/Male-Actor-Transparent-Image.png" alt="suposta foto de perfil do jacare" />
            <h1 className='frases-text'>{frases[3]}</h1>              
        </div>
    )
}
