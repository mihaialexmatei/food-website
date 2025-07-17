import './App.css';
import { useState } from 'react';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("Menu is open:", isMenuOpen);
  return (
    <div className = "app">
      <header className = "header">
        <h1> Recipe AI assistant</h1>
      </header>

      <div className="main-layout">
        <button className="hamburger-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
        {/* Add the sliding menu here */}
        {isMenuOpen && (
          <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}>
            <nav className="sliding-menu" onClick={(e) => e.stopPropagation()}>
              <h3>Menu</h3>
              <ul className="menu-list">
                <li><button className="menu-item">🏠 Home</button></li>
                <li><button className="menu-item">⚙️ Preferences</button></li>
                <li><button className="menu-item">📖 Recipe History</button></li>
              </ul>
            </nav>
          </div>
        )}
        <main className="content">
          <div className="voice-input-section">
            <button className="mic-container" onClick={() => alert("Voice input coming soon!")}>
              <span className="mic-icon">▷</span>
            </button>
            <p className="guide-text">Tell me what ingredients you have</p>
          </div>
        </main>
      </div>


    </div>
  );
}

export default App;
