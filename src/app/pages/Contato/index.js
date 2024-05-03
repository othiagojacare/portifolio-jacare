import './contato.css'
import { useState } from 'react'
import { db } from '@/app/firebaseConnection'
import { doc , setDoc, collection , addDoc } from 'firebase/firestore'

export default function Contato(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')

    async function addMsg(){
      /*await setDoc(doc(db, "msg", "1243"),{  ----------------------------escolher o id 
        nome : nome ,
        email : email ,
        assunto : assunto ,
        mensagem : mensagem
      })
      .then(() => {
        console.log('ok')
        setNome('')
        setEmail('')
        setAssunto('')
        setMensagem('')
      })
      .catch((error) =>{
        console.log(error)
      })*/

      await addDoc(collection(db, 'msg'), {
        nome : nome ,
        email : email ,
        assunto : assunto ,
        mensagem : mensagem
      })
      .then(() => {
        console.log('ok')
        setNome('')
        setEmail('')
        setAssunto('')
        setMensagem('')
      })
      .catch((error) =>{
        console.log(error)
      })
    }

    return(
        <div>
            <div className="contato-container">
                <h1>Contato</h1>
                <h3>Vamos conversar</h3>
                <p>Estou pronto para facilitar sua vida! Preencha meu formulario rapido.</p>
                <div id='contato-inputarea'>
                    <input className='contato-botao' type="text" placeholder="Nome" value={nome} onChange={ (e) => setNome(e.target.value)}/>
                    <input className='contato-botao' type="email" placeholder="E-mail" value={email} onChange={ (e) => setEmail(e.target.value)}/>
                    <input className='contato-botao' type="text" placeholder="Assunto" value={assunto} onChange={ (e) => setAssunto(e.target.value)}/>
                    <input className='contato-botao mensagem' type="text" placeholder="Sua Mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)}/>
                    <button onClick={addMsg}>Enviar</button>
                </div>
            </div>
        </div>
    )
}