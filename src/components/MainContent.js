import React from "react";
import "./MainContent.css";
import Sidebar from "./Sidebar";
import Scroller from "./Scroller";

function MainContent() {
  return (
    <div>
     <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">MOONBOXES</div>
        <div className="nav-icons">
          <span>🔥</span>
          <span>🛒</span>
          <span>⚙️</span>
          <span>🌙</span>
        </div>
      </header>
  {/* Sidebar */}
  {/* <aside className="sidebar">
        <span>Tokenomics</span>
        <span>MoonSea</span>
        <span>Moonshot</span>
      </aside> */}
      {/* Main Content */} 
      <main className="main-content">
        {/* Left Section */}
        <div className="text-section">
          <h1 className="main-heading">
            Buy MoonBoxes and expand your NFT collection
          </h1>
          <p className="description">
            Buying MoonBoxes is a unique way to acquire NFTs and build your
            collection. It is built on the Binance Smart Chain, MoonRiver,
            Polygon, Ethereum, and DogeChain. Only available on MoonBoxes.io.
          </p>
          <button className="cta-button">Buy A MoonBox</button>
        </div>

        {/* NFT Image Section */}
        <div className="image-section">
          <img
            src="Asset/images/slider1/5.webp" // Replace with actual NFT image
            alt="NFT Character"
            className="nft-image"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-item">THEME</div>
        <div className="footer-item">MOONSHOT BALANCE</div>
        <div className="footer-item">TOTAL NFTs</div>
      </footer>
     
    </div>
    <div>
    {/* <Scroller></Scroller> */}
    </div>

    </div>
    
  );
}

export default MainContent;
