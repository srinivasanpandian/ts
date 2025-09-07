import React from 'react';
import './App.css';
import logo from './images.jpeg';
import vendor from './ven.jpg';
import member from './mem.jpg';
import food from './food.jpg';
import banner from './ban.png';
import fav from './fav.png';

function App() {
  return (
    <div className="App">
      <div className="parallax-bg"></div>
      <div className="content-wrapper">
        <header className="header">
          <div className="container">
            <div className="logo-container">
              <img src={logo} alt="Tamil Sangam Logo" className="logo" />
            </div>
            <h1 className="main-title">Chithirai Thiruvizha 2025</h1>
            <p className="subtitle">Celebrating Tamil Culture & Heritage</p>
            <div className="header-services">
              <p className="service-text">Register as Vendor</p>
              <p className="service-text">Add as Member</p>
              <p className="service-text">Get Food Pre Book</p>
            </div>
          </div>
            <div className="scroll-indicator">
              <button 
                className="scroll-down-btn" 
                onClick={() => document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' })}
                aria-label="Scroll down to registration section"
              >
                <i className="fa-solid fa-angle-down"></i>
              </button>
            </div>
      </header>

      <main className="main-content">
        <div className="container">
          <h2 className="section-title">Event Registration & Services</h2>
          <div className="cards-container">
            
            {/* Vendor Registration Card */}
            <a 
              href="https://customerappstaging.web.app/restaurant/tamil-sangam-aubrey/menu/Pickup/event/chithirai-thiruvizha-ventors" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card-link"
            >
              <div className="browser vendor-card">
                <div className="tabs-head">
                  <div className="tabs">
                    <div className="tab-open">
                      <div className="rounded-l"><div className="mask-round"></div></div>
                      <span>Vendor</span>
                      <div className="close-tab">✕</div>
                      <div className="rounded-r"><div className="mask-round"></div></div>
                    </div>
                  </div>
                  <div className="window-opt">
                    <button>-</button>
                    <button>□</button>
                    <button className="window-close">✕</button>
                  </div>
                </div>
                <div className="head-browser">
                  <button>←</button>
                  <button disabled="">→</button>
                  <div className="favicon-container">
                    <img src={fav} alt="Maghil Logo" className="favicon" />
                  </div>
                  <input
                    type="text"
                    placeholder="Register as Vendor"
                    value="https://customerappstaging.web.app/restaurant/tamil-sangam-aubrey/menu/Pickup/event/chithirai-thiruvizha-ventors"
                    readOnly
                  />
                  <button>⋮</button>
                  <button className="star">✰</button>
                </div>
                <div className="browser-content">
                  <img src={vendor} alt="Vendor Registration" />
                </div>
                <div className="browser-footer">
                  <h3 className="browser-title">Vendor Registration</h3>
                  <p className="browser-subtitle">Join as a vendor and showcase your products</p>
                </div>
              </div>
            </a>

            {/* Member Registration Card */}
            <a 
              href="https://customerappstaging.web.app/restaurant/tamil-sangam-aubrey/menu/Pickup/event/chithirai-thiruvizha-members" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card-link"
            >
              <div className="browser member-card">
                <div className="tabs-head">
                  <div className="tabs">
                    <div className="tab-open">
                      <div className="rounded-l"><div className="mask-round"></div></div>
                      <span>Member</span>
                      <div className="close-tab">✕</div>
                      <div className="rounded-r"><div className="mask-round"></div></div>
                    </div>
                  </div>
                  <div className="window-opt">
                    <button>-</button>
                    <button>□</button>
                    <button className="window-close">✕</button>
                  </div>
                </div>
                <div className="head-browser">
                  <button>←</button>
                  <button disabled="">→</button>
                  <div className="favicon-container">
                    <img src={fav} alt="Maghil Logo" className="favicon" />
                  </div>
                  <input
                    type="text"
                    placeholder="Join as Member"
                    value="https://customerappstaging.web.app/restaurant/tamil-sangam-aubrey/menu/Pickup/event/chithirai-thiruvizha-members"
                    readOnly
                  />
                  <button>⋮</button>
                  <button className="star">✰</button>
                </div>
                <div className="browser-content">
                  <img src={member} alt="Member Registration" />
                </div>
                <div className="browser-footer">
                  <h3 className="browser-title">Member Registration</h3>
                  <p className="browser-subtitle">Become a member and enjoy exclusive benefits</p>
                </div>
              </div>
            </a>

            {/* Food Pre-book Card */}
            <a 
              href="https://customerappstaging.web.app/restaurant/tamil-sangam/e/chithirai-thiruvizha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card-link"
            >
              <div className="browser food-card">
                <div className="tabs-head">
                  <div className="tabs">
                    <div className="tab-open">
                      <div className="rounded-l"><div className="mask-round"></div></div>
                      <span>Food</span>
                      <div className="close-tab">✕</div>
                      <div className="rounded-r"><div className="mask-round"></div></div>
                    </div>
                  </div>
                  <div className="window-opt">
                    <button>-</button>
                    <button>□</button>
                    <button className="window-close">✕</button>
                  </div>
                </div>
                <div className="head-browser">
                  <button>←</button>
                  <button disabled="">→</button>
                  <div className="favicon-container">
                    <img src={fav} alt="Maghil Logo" className="favicon" />
                  </div>
                  <input
                    type="text"
                    placeholder="Pre-book Food"
                    value="https://customerappstaging.web.app/restaurant/tamil-sangam-aubrey/menu/Pickup/event/chithirai-thiruvizha-ventors"
                    readOnly
                  />
                  <button>⋮</button>
                  <button className="star">✰</button>
                </div>
                <div className="browser-content">
                  <img src={food} alt="Food Pre-booking" />
                </div>
                <div className="browser-footer">
                  <h3 className="browser-title">Food Pre-booking</h3>
                  <p className="browser-subtitle">Pre-order authentic Tamil cuisine</p>
                </div>
              </div>
            </a>

          </div>
        </div>
      </main>
      </div>
    </div>
  );
}

export default App;
