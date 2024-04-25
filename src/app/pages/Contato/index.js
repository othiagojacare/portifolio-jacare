import './contato.css'

export default function Contato(){
    return(
        <div id='contato'>
            <h3 id='titulo-contato'>Segue aí e não perca nada!</h3>
            <div id='sociais'>
                <div className="card">
                    <h5>Instagram</h5>
                    <a href="#">o</a>
                </div>
                <div className="card">
                    <h5>GitHub</h5>
                </div>
                <div className="card">
                    <h5>Linkedin</h5>
                    <a href='https://www.linkedin.com/in/thiago-vinicius-da-silva-034247260/'>o</a>
                </div>
            </div>
        </div>
    )
}