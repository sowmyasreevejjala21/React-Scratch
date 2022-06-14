import { menuItems } from '../../menuItems';
import MenuItems from './MenuItems'
import './Navbar.scss';

const Navbar = () => {
    return(
        <nav>
            <ul className="menus">
                {menuItems.map((menu, index) =>(
                    <MenuItems items={menu} key={index}/>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;