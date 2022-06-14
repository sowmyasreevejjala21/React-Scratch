import { useState, useEffect } from "react"
import Wheel from '../../assets/images/wheel.svg';
import AutoExpress from '../../assets/images/auto-express.svg'
import Approved from '../../assets/images/approved.svg'
import CartLogo from '../../assets/images/cart-sharp-black.svg'
import CartAddLogo from '../../assets/images/cart-plus.svg'
import GreenCheck from '../../assets/images/greencheck.svg'
import orangeCheck from '../../assets/images/orangecheck.svg'
import redCheck from '../../assets/images/redcheck.svg'
import './Card.scss'

const Card = ({ cardData }) => {
    const [card, setCard] = useState({});
    // const [totalPrice, settotalPrice] = useState(0);

    useEffect(() => {
        setCard(cardData);
    }, [])
    const decrementHandler = () => {
        let obj = {...card};
            obj.quantity = obj.quantity-1;
            setCard(obj);
    }
    const incrementHandler = () => {
            let obj = {...card};
            obj.quantity = obj.quantity+1;
            setCard(obj);
    }

    return (
        <div className="card-wrap">
            <div className="card-desktop">
                <div className="card-seller">
                    {card.bestSeller}
                </div>
                <div className="card-details">
                    <div className="card-image">
                        <img src={Wheel} />
                        <div className="card-image_child">
                            <img src={AutoExpress} />
                        </div>
                    </div>
                    <div className="card-wrap_details">
                        <div className="card-wrap_details_title">
                            {card.name}
                        </div>
                        <div className="card-wrap_details_list">
                            <div className="card-wrap_details_list_img_dimensions">
                                <div className="card-wrap_details_img">
                                    <img src={Approved} />
                                </div>
                                <div className="card-wrap_details_dimensions">
                                    {card.dimensions}
                                    <div className="card-wrap_details_type">
                                        {card.type}
                                    </div>
                                </div>
                            </div>
                            <div className="card-wrap_details_list_stockprice">
                                <div className="card-wrap_details_stockcheck">
                                    <div className="card-wrap_details_stockcheck_wrap">
                                        Stock {card.inStock === "yes" ? <div className="checkicon"><img src={GreenCheck} /></div> : card.inStock === "limited" ? <div className="checkicon"><img src={orangeCheck} /> <span>!</span></div> : <div className="checkicon"><img src={redCheck} /><span>x</span></div>}
                                    </div>
                                    <div className="card-wrap_details_pricewrap">
                                        <div>Price</div>
                                        <div className="card-wrap_details_pricewrap_price">{card.price}</div>
                                    </div>
                                </div>
                                <div className="card-wrap_details_totalprice">
                                    <div>Total</div>
                                    <div>
                                    {card.price * card.quantity}
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div className="card-wrap_cartdetails">
                <div className="card-wrap_cartdetails_pricecount">
                    <button disabled={card.quantity < 1} onClick={() => decrementHandler()}>-</button>
                    <div className="card-wrap_cartdetails_totalcount">{card.quantity}</div>
                    <button onClick={() => incrementHandler()}>+</button>
                </div>
                <div className="card-wrap_cartdetails_addcart">
                    <div className="card-wrap_cartdetails_addcart_img">
                        <img src={CartLogo} />
                        <img className="card-wrap_cartdetails_addcart_img_plus" src={CartAddLogo} />
                    </div>
                    <div className="card-wrap_cartdetails_addcart_text">
                        Add to cart
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card;