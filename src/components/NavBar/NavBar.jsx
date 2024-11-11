import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo1 from '../ArtWork/Lancherix.png';
import searchIcon from '../ArtWork/search.svg';

function NavBar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleSubMenuMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleSubMenuMouseLeave = () => {
    setHoveredItem(null);
  };

  useEffect(() => {
    console.log("Hovered item:", hoveredItem);
  }, [hoveredItem]);

  return (
    <div className="NavBar">
      <div className="NavBar-Top">
        <Link to="/"><img className="NavBar-Logo1" src={logo1} alt="Logo" /></Link>
        <div
          className="NavBar-Store"
          onMouseEnter={() => handleMouseEnter('store')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/store" className="Link"><button className='NavBar-button'>Store</button></Link>
          {hoveredItem === 'store' && (
            <div
              className="NavBar-SubMenu"
              onMouseEnter={() => handleSubMenuMouseEnter('store')}
              onMouseLeave={handleSubMenuMouseLeave}
            >
              <div className="NavBar-Item">
                <Link to="/store/option1">Option 1</Link>
                <Link to="/store/option2">Option 2</Link>
                <Link to="/store/option3">Option 3</Link>
              </div>
            </div>
          )}
        </div>
        <div
          className="NavBar-Physics"
          onMouseEnter={() => handleMouseEnter('physics')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/physics" className="Link"><button className='NavBar-button'>Physics</button></Link>
          {hoveredItem === 'physics' && (
            <div
              className="NavBar-SubMenu"
              onMouseEnter={() => handleSubMenuMouseEnter('physics')}
              onMouseLeave={handleSubMenuMouseLeave}
            >
              <div className="NavBar-Item">
                <Link to="/physics/option1">Kinematics</Link>
                <Link to="/physics/option2">Vectors & Scalars</Link>
                <Link to="/physics/option3">Dynamics</Link>
              </div>
            </div>
          )}
        </div>
        <div
          className="NavBar-Music"
          onMouseEnter={() => handleMouseEnter('music')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/" className="Link"><button className='NavBar-button'>Music</button></Link>
          {hoveredItem === 'music' && (
            <div
              className="NavBar-SubMenu"
              onMouseEnter={() => handleSubMenuMouseEnter('music')}
              onMouseLeave={handleSubMenuMouseLeave}
            >
              <div className="NavBar-Item">
                <Link to="/music/option1">Option 1</Link>
                <Link to="/music/option2">Option 2</Link>
                <Link to="/music/option3">Option 3</Link>
              </div>
            </div>
          )}
        </div>
        <div
          className="NavBar-Sports"
          onMouseEnter={() => handleMouseEnter('sports')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/" className="Link"><button className='NavBar-button'>Sports</button></Link>
          {hoveredItem === 'sports' && (
            <div
              className="NavBar-SubMenu"
              onMouseEnter={() => handleSubMenuMouseEnter('sports')}
              onMouseLeave={handleSubMenuMouseLeave}
            >
              <div className="NavBar-Item">
                <Link to="/sports/option1">Option 1</Link>
                <Link to="/sports/option2">Option 2</Link>
                <Link to="/sports/option3">Option 3</Link>
              </div>
            </div>
          )}
        </div>
        <Link to="/"><img className="NavBar-searchIcon" src={searchIcon} alt="Search" /></Link>
      </div>
    </div>
  );
}

export default NavBar;