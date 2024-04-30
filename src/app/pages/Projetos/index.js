
import './projetos.css'

function Projetos(){
    function slide1(){
        document.getElementById('id').src="1.bmp";
        setTimeout("slide2()", 3000)
        document.getElementById('aId').href="https://www.pngarts.com/files/11/Male-Actor-Transparent-Image.png"
        }
        
    function slide2(){
        document.getElementById('id').src="2.bmp";
        setTimeout("slide3()", 3000)
        document.getElementById('aId').href="https://www.pngarts.com/files/16/Electric-Car-Vector-PNG-Picture.png"
    }
        
    function slide3(){
        document.getElementById('id').src="3.bmp";
        setTimeout("slide1()", 3000)
        document.getElementById('aId').href="https://www.pngarts.com/files/16/Electric-Car-Vector-PNG-Picture.png"
    }
    return(
        <div className='container' onLoad="slide1()">
            <div id='carrossel-apresentacao'>
                <h2>Meus Projetos</h2>
                <p>Aqui esta meus principais projetos e mais recentes</p>
            </div>
            <div id='carrosel'>
                <div className='box'></div>
                <div className='box'></div>
                <div className='box'></div>
                <div className='box'></div>
            </div>
 
        </div>
    )
}

export default Projetos