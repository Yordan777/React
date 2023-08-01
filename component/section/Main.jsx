import "./main.css";

export function Main (){

    

    return (
        <article className="main-conent">
            <div className="main-conent-person">
                <img
                alt="person"
                className="main-conent-person-img"
                src="https://framerusercontent.com/images/y7C8Tq6Y80QfTS5ckuu9DvLbQ.jpg" /> 
            </div>  

            <div className="main-conent-minim">
                <div className="main-conent-minim-dv">
                    <h2 className="main-conent-minim-text">
                        Encuentra los mejores estilos 
                        de zapatos para cualquier ocasión,  
                        desde eventos formales hasta deportivos.
                    </h2>
                </div>
                <span className="main-conent-minim-list">
                            <div data-border={true} className="main-conent-minim-list-text after">Facebook</div>
                            <div className="main-conent-minim-list-text after">Twitter</div>
                            <div className="main-conent-minim-list-text after">Instagram</div>
                            <div className="main-conent-minim-list-text ">Pinterest</div>
                </span>
            </div>

            <div className="main-conent-zapato">
                <img
                alt="person"
                className="main-conent-zapato-img"
                src="https://framerusercontent.com/images/dpL4OQ0kC71cAZpjgt5eR8GKs.jpg" /> 
            </div>  
        </article>   
    )
}                