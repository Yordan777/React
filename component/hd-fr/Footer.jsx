import "./footer.css";
import { FaChevronRight } from 'react-icons/fa';
import { VscCheck } from "react-icons/vsc";
import { BiSolidTruck } from "react-icons/bi"; 
import { AiFillCreditCard } from "react-icons/ai";
export function Footer() {

    return(
        <div className="cnt-footer">
                <div className="cnt-footer-up">
                
                    <div className="cnt-footer-offers">
                        <div className="cnt-footer-offers-txt">
                             <span>Descubre nuestras ofertas exclusivas y rebajas en la mejor selección de zapatos.</span>
                        </div>
                        <div className="cnt-footer-buy-now">
                            <p className="txt">Comprar Ahora </p>
                            <span className="icon"> <FaChevronRight /> </span>
                        </div>
                        <div className="cnt-footer-sub">
                            <p className="txt-sub">Suscríbete</p>
                            <span className="icon-sub"> <FaChevronRight /> </span>
                        </div>
                    </div>


                    <div className="cnt-footer-offers">
                        <div className="cnt-footer-quality">
                            <span className="icon"> <VscCheck/> </span>
                            <p className="txt">Calidad</p>
                        </div>
                        <div className="cnt-footer-fstshipping">
                            <span className="icon"> <BiSolidTruck /> </span>
                            <p className="txt">Envío Rápido</p>
                        </div>
                        <div className="cnt-footer-Scrpayment">
                            <span className="icon"> <AiFillCreditCard /> </span>
                            <p className="txt">Pago Seguro</p>
                        </div>
                    </div>
                </div>
               
        </div>
    )
}