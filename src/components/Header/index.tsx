import './style.css'

const Header = () => {
    return (
        <header className="cabecalho">
            <div className="imagem-logo" role="img" aria-label='Logo do Sorteador'></div>
            <img className='participant' src="/images/participant.png" alt="The secret santa participant" />
        </header>
    )
}

export default Header;