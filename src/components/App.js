import Navbar from './Navbar/Navbar';
import Searchbar from './Searchbar/Searchbar'
import { ReactComponent as LogoDesktop } from '../assets/images/logo.svg';
import { ReactComponent as HamBurger } from '../assets/images/options-sharp.svg';
import { ReactComponent as LogoBelowDesktop } from '../assets/images/Logo_belowdesktop.svg';
import './App.scss';

const App = () => {
  let width = window.innerWidth;

  return (
    <header>
      <div className="nav-area">
        <div className='nav-area_logo'>
          <div className='nav-area_logo_wrap'>
            <a href="/#" className="logo">
              <HamBurger />
            </a>
            <a href="/#" className="logo" id="img">
              {width > 768 ? <LogoDesktop/> : <LogoBelowDesktop/>}
            </a>
          </div>
        </div>
        <Searchbar />
        <div>
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default App;
