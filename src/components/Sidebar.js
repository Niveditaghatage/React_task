import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">MOONBOXES</div>
        <div className="header-icons">
          <span>🔔</span>
          <span>📁</span>
          <span>♻️</span>
          <span>💧</span>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="sidebar">
        <span>Tokenomics</span>
        <span>MoonSea</span>
        <span>Moonshot</span>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          <div className="content">
            <h2 className="title">Buy MoonBoxes and expand your NFT collection</h2>
            <p className="description">
              Buying MoonBoxes is a unique way to acquire NFTs and build your collection.
              It is built on the Binance Smart Chain, MoonRiver, Polygon, Ethereum, and DogeChain.
              Only available on MoonBoxes.io
            </p>
            <button className="button">Buy A MoonBox</button>
          </div>
          <div className="image-section">
            <img src="Asset/images/slider1/5.webp" alt="NFT Example" className="image" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-item">Tier</div>
        <div className="footer-item">Moonshot Balance</div>
        <div className="footer-item">Total NFTs</div>
      </footer>
    </div>
  );
};

export default Sidebar;
