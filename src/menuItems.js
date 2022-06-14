import  Account from './assets/images/person-sharp.svg';
import  Orders from './assets/images/orders-icon.svg';
import  Cart from './assets/images/cart-sharp.svg';

export const menuItems = [
    {
     title: "Account",
     src: Account,
     submenu: [
        {
            title: "Account",
        },
        {
            title: "Call Us",
        },
        {
            title: "Give Feedback"
        },
        {
            title: "Logout"
        }
     ]
    },
    {
     title: "Orders",
     src: Orders
    },
    {
     title: "Cart",
     src: Cart
    }
   ];