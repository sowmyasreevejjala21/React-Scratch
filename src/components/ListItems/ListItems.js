import { useEffect, useState } from "react"
import Approved from '../../assets/images/approved.svg';
import GreenCheck from '../../assets/images/greencheck.svg'
import orangeCheck from '../../assets/images/orangecheck.svg'
import redCheck from '../../assets/images/redcheck.svg'
import CartLogo from '../../assets/images/cart-sharp-black.svg'
import CartAddLogo from '../../assets/images/cart-plus.svg'

import './ListItems.scss'

const ListItems = ({ listData }) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(listData);
    }, [])
    const decrementHandler = (id) => {
        let ind = list.findIndex( item => item.id === id);
        if(ind > -1) {
            let obj = list[ind];
            obj.quantity = obj.quantity-1;
            let newList = [...list]
            newList.splice(ind,1,obj);
            setList(newList);
        }
    }
    const incrementHandler = (id) => {
        let ind = list.findIndex( item => item.id === id);
        if(ind > -1) {
            let obj = list[ind];
            obj.quantity = obj.quantity+1;
            let newList = [...list]
            newList.splice(ind,1,obj);
            setList(newList);
        }
    }
    return (
        <>
            {list.map((items, id) => (

                <div className="listItems-desktop">
                        <div className="listItems-desktop_details_title">
                            {items.name}
                        </div>
                        <div className="listItems-desktop_details_img">
                            <img src={Approved} />
                        </div>
                        <div className="listItems-desktop_details_dimensions">
                            {items.dimensions}
                            <div className="listItems-desktop_details_type">
                                {items.type}
                            </div>
                        </div>
                        <div className="listItems-desktop_details_stockcheck">
                            {items.inStock=== "yes" ? <div className="checkicon available"><div>Stock</div><img src={GreenCheck} /></div> : items.inStock=== "limited" ? <div className="checkicon"><div className="checkicon_wrap"><div>Stock</div><div className="checkicon_wrap_img"><img src= {orangeCheck} /> <span>!</span></div> </div><div className="checkicon_wrap_info">8 Tires Left</div></div> : <div className="checkicon"><div className="checkicon_wrap"><div>Stock</div><div className="checkicon_wrap_img"><img src = {redCheck}/><span>x</span></div></div><div className="checkicon_wrap_info">Back in 1 week</div></div> }
                        </div>
                        <div className="listItems-desktop_details_price">
                            <div>Price</div> 
                            <div>{items.price}</div>
                        </div>

                        <div className="listItems-desktop_details_cartdetails">
                            <div className="listItems-desktop_details_cartdetails_pricecount">
                                <button disabled= {items.quantity < 1} onClick ={()=>decrementHandler(items.id)}>-</button>
                                <div className="listItems-desktop_details_cartdetails_totalcount">{items.quantity}</div>
                                <button onClick ={()=>incrementHandler(items.id)}>+</button>
                            </div>
                        </div>
                        <div className="listItems-desktop_details_totalprice">
                            <div>Total</div>
                            <div className="listItems-desktop_details_totalprice_price">{items.price * items.quantity}</div>
                        </div>

                        <div className="listItems-desktop_details_cartdetails_addcart">
                        <div className="listItems-desktop_details_cartdetails_addcart_img">
                                <img src={CartLogo} alt="cart logo"/>
                                <img className="listItems-desktop_details_cartdetails_addcart_img_plus" src={CartAddLogo} alt="cart plus" />
                            </div>
                            <div className="listItems-desktop_details_cartdetails_addcart_text">
                                Add to cart
                            </div>
                        </div>
                </div>

            ))}

        </>
    )
}

export default ListItems;