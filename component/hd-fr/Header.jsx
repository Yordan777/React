import "./header.css";
import logoZapatos from "./img/zapatos-1-removebg-preview.png"
import logoDeModa from "./img/de_moda-removebg-preview.png"

export function Header() {
    return(
        <>
            <header className="content-header">
                <nav className="content-header-menu">
                    <ul className="content-header-menu-list">
                        <li>INICIO</li>
                        <li>CATALOGO</li>
                        <li>OFERTA</li>
                        <li>CONTACTO</li>
                    </ul>
                </nav>

                <div className="content-header-logos">
                    <span className="content-header-logo-z">
                        <img 
                            alt="logo de zapatos"
                            src={logoZapatos}
                        />
                    </span>
                    <span className="content-header-logo-m">
                        <img 
                            alt="logo de moda"
                            src={logoDeModa}
                        />
                    </span>
                </div>
            </header>
        </>
    )
}
