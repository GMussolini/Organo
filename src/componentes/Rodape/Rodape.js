import './Rodape.css'

export const Rodape = () => {
    return (<footer className="footer" >
        <section>
            <ul>
                <li>
                    <a href="https://www.instagram.com/gihco_/" target="_blank">
                        <img src="/imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img className='logo' src="/imagens/giphy.gif" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Giovanni Mussolini.
            </p>
        </section>
    </footer>)
}