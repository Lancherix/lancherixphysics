import './Physics.css';

import physicsLogo from '../ArtWork/logo2.png';
import physicsVideo from '../ArtWork/PhysicsHero.mp4';

function Physics() {
  return (
    <div className="Physics">
      <div className='Physics-hero'>
        <video autoPlay loop muted className="Physics-heroVideo"><source src={physicsVideo} type="video/mp4" /></video>
        <div className='Physics-heroCover'>
          <img src={physicsLogo} alt="Lancherix Physics" className='Physics-heroLogo' />
          <p>Discover the secrets and mysteries hidden behind physics wonders.</p>
          <button>Start Learning</button>
        </div>
      </div>
    </div>
  );
}

export default Physics;