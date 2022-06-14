
import { useState } from 'react';
import Dropdown from './Dropdown'
const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
    const activeClass = dropdown ? "activeClass" : ""
    return (
        <li className="menu-items">
            {items.submenu ? (
                <>
                    <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)} className = {activeClass}>
                        <img src={items.src} />
                        <div className='menu-items_title'>{items.title}</div>
                    </button>
                    <Dropdown submenus={items.submenu} dropdown={dropdown}/>
                </>
            ) :
            <>
                {/* <img src={items.src} /> */}
                <a href="/#">
                    <img src={items.src} />
                    <div className='menu-items_title'>{items.title}</div>
                </a>
            </>
            }
        </li>
    )
}
export default MenuItems;