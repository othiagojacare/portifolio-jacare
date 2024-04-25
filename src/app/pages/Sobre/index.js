import './sobre.css'
import IconReact from '@/app/components/icons/react'
import IconJs from '@/app/components/icons/javascript'
import IconHtml5 from '@/app/components/icons/html5'
import IconCss3 from '@/app/components/icons/css3'

export default function Sobre(){
    return(
        <div>
            <div id='habilidadesferramentas'>
                <div>
                    <h2 className='subtitulo'>Sobre</h2>
                    <h3 className='sub-subtitulo'>Minhas ferramentas e habilidades</h3>
                    <p className='texto'>Essas sao as principais ferramentas e habilidades que eu trabalho</p>
                </div>
                <div id='ferramentas'>
                    <a>{<IconReact/>}</a>
                    <a>{<IconJs />}</a>
                    <a>{<IconHtml5/>}</a>
                    <a>{<IconCss3 />}</a>
                </div>
            </div>
            <div id='sobre'>
                <div id='tt'>
                    1
                </div>
                <div id='sobre-mim'>
                    <div>
                        <h3 className='sub-subtitulo'>Quem sou eu</h3>
                        <p className='texto'>Lorem ipsum dolor sit amet. Eos repellat tempore eum voluptatem quaerat ut molestiae quisquam a exercitationem commodi et ducimus nihil est cupiditate quia. Aut doloremque expedita eum eligendi accusantium non nesciunt unde aut consectetur quod. Eum aliquam dicta aut quidem eligendi qui voluptatem voluptas et voluptas possimus vel officia consequatur qui repellendus fugit!
                            Sit sint sapiente aut provident consequatur et error quidem sed voluptatem quia aut nihil velit. Qui architecto molestiae ut voluptas nisi in praesentium fugiat 33 excepturi quidem.
                        </p>
                    </div>
                    <div>
                        <h3 className='sub-subtitulo'>Principal tecnologia</h3>
                        <p className='texto'>Lorem ipsum dolor sit amet. Eos repellat tempore eum voluptatem quaerat ut molestiae quisquam a exercitationem commodi et ducimus nihil est cupiditate quia. Aut doloremque expedita eum eligendi accusantium non nesciunt unde aut consectetur quod. Eum aliquam dicta aut quidem eligendi qui voluptatem voluptas et voluptas possimus vel officia consequatur qui repellendus fugit!
                            Sit sint sapiente aut provident consequatur et error quidem sed voluptatem quia aut nihil velit. Qui architecto molestiae ut voluptas nisi in praesentium fugiat 33 excepturi quidem.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}