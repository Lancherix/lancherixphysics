import './Physics.css';
import { Link } from 'react-router-dom';

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
      <div className='Physics-intro'>
          <div className='Physics-introVideo'></div>
      </div>
      <div className='Physics-desc'>
        <p>Welcome to the captivating world of physics, where we unravel the mysteries of the universe, one equation at a time! As you embark on this thrilling adventure, you'll discover the fundamental laws that govern everything from the tiniest subatomic particles to the vast expanse of the cosmos.</p>
        <p>Imagine this: you're standing on a bridge, gazing at the flowing river below. Physics helps us understand the forces at play – the water's momentum, the pull of gravity, and the resistance of the riverbed. It's like lifting the veil on nature's hidden mechanisms, revealing the beauty and logic behind every phenomenon.</p>
        <p>Your journey through physics will be filled with awe-inspiring discoveries. You'll explore the elegant simplicity of Newton's laws of motion, delve into the mind-bending world of quantum mechanics, and contemplate the vastness of space-time with Einstein's theory of relativity.</p>
        <p>Along the way, you'll encounter challenges that will test your problem-solving skills and analytical thinking. But don't worry, every hurdle you overcome will bring you closer to a deeper understanding of the universe. Remember, the most rewarding part of this adventure is the thrill of unraveling the secrets of the physical world, one equation at a time.</p>
        <p>So, fasten your seatbelt and prepare for an exhilarating ride through the wonders of physics!</p>
      </div>
      <div className='Physics-next'><Link to="/physics/option1">Chapter 1: Quantities and units</Link></div>
    </div>
  );
}

export default Physics;