import ImgZoldinho from "./assets/Zoldinho.png"
import "./App.css"

function App() {
  const HandleRedirect = () => {
    window.location.href = "https://zoldpc.com/";
  }

  return (
    <>
      <div className="main">
        <figure><img src={ImgZoldinho} alt="Logo Zoldinho"/></figure>
        <h1>Site em Desenvolvimento</h1>
        <p>Estamos trabalhando arduamente para trazer a você uma experiência incrível! Nosso site está em fase de desenvolvimento e, em breve, estará disponível com todas as funcionalidades.</p>
        <p>Agradecemos sua paciência e convidamos você a voltar em breve para conferir as novidades.</p>
        <p>Clique no botão abaixo para visitar a página da nossa empresa:</p>
        <button className="redirect-button" onClick={HandleRedirect}>
          Visitar Página
        </button>
      </div>
    </>
  )
}

export default App
