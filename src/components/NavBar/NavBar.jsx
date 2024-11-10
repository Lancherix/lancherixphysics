import './NavBar.css';
import { Link } from 'react-router-dom';
import logo1 from '../ArtWork/Lancherix.png';
import searchIcon from '../ArtWork/search.svg';

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar-Top">    
        <Link to="/"><img to='/' className="NavBar-Logo1" src={logo1} alt="Logo" /></Link>
        <Link to="/store" className='Link'>Store</Link>
        <Link to="/physics" className='Link'>Physics</Link>
        <Link to="/" className='Link'>Music</Link>
        <Link to="/" className='Link'>Sports</Link>
        <Link to="/"><img to='/' className="NavBar-searchIcon" src={searchIcon} alt="Search" /></Link>
      </div>
    </div>
  );
}

export default NavBar;