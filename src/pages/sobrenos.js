import Sidebar from "../components/Sidebar";
import '.././pages/sobrenos.css'
import img1 from "../assets/lukinha.png"
import img2 from "../assets/gui.png"
import img3 from "../assets/ricker.png"
import img4 from "../assets/kawan.png"
import img5 from "../assets/vitor.png"
import img6 from "../assets/viini.jpg"
import img7 from "../assets/miguel.png"
import img8 from "../assets/breno.png"


export default function SobreNos() {
    return (
        <>
            <Sidebar />

            <div className="conatiner">
                <div className="content">
                    <h1>Sobre Nós</h1>
                    <p>Bem-vindo ao Inter Classe! Oferecemos uma plataforma inovadora para escolas e educadores com ferramentas interativas, recursos personalizados e suporte contínuo. Explore nossos cursos online e materiais exclusivos para transformar o ensino e alcançar a excelência educacional. Junte-se a nós na sua jornada de aprendizado</p>
                    <h1>Grupo de  desenvolvimento de sistema</h1>
                </div>

                <div className="imagens-cima">
                    <img src={img1} />
                    <img src={img2} />

                </div>

                <div className="imagens-baixo">
                    <img src={img3} />
                    <img src={img4} />

                </div>

                <div className="content">
                    <h1>Grupo de  desenvolvimento de sistema</h1>
                </div>

                <div className="imagens-baixo">
                    <img src={img5} />
                    <img src={img6} />

                </div>

                <div className="imagens-baixo">
                    <img src={img7} />
                    <img src={img8} />

                </div>
            </div>
        </>


    )
}