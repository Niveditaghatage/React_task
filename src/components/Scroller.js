import { useRef } from 'react';
import React from 'react';
import './Scroller.css';

const Scroller = () => {
    const scrollerRef = useRef(null);

    const scrollLeft = () => {
      scrollerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    };
  
    const scrollRight = () => {
      scrollerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };
    const nftImages = [
        { id: 1, src: "Asset/images/slider1/2.webp", alt: "NFT 1" },
        { id: 2, src: "Asset/images/slider1/3.webp", alt: "NFT 2" },
        { id: 3, src: "Asset/images/slider1/4.webp", alt: "NFT 3" },
        { id: 4, src: "Asset/images/slider1/5.webp", alt: "NFT 4" },
        { id: 5, src: "Asset/images/slider1/2.webp", alt: "NFT 5" },
        { id: 6, src: "Asset/images/slider1/2.webp", alt: "NFT 6" },
        { id: 4, src: "Asset/images/slider1/5.webp", alt: "NFT 4" },
        { id: 3, src: "Asset/images/slider1/4.webp", alt: "NFT 3" },
        { id: 6, src: "Asset/images/slider1/2.webp", alt: "NFT 6" },
        { id: 4, src: "Asset/images/slider1/5.webp", alt: "NFT 4" },
        { id: 3, src: "Asset/images/slider1/4.webp", alt: "NFT 3" },
        { id: 3, src: "Asset/images/slider1/4.webp", alt: "NFT 3" },
        { id: 6, src: "Asset/images/slider1/2.webp", alt: "NFT 6" },
        { id: 4, src: "Asset/images/slider1/5.webp", alt: "NFT 4" },
        { id: 3, src: "Asset/images/slider1/4.webp", alt: "NFT 3" },


      ];
  return (
    <div className="moonboxes-container">
    {/* Content */}
    <main className="moonboxes-content">
    <div className="moonboxes-container">
      <h1 className="title">MoonBoxes NFT Showcase</h1>
      <button className="scroll-button left" onClick={scrollLeft}>
        {"<"}
      </button>
      <div className="nft-scroller" ref={scrollerRef}>
        {nftImages.map((image) => (
          <div className="nft-item" key={image.id}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        {">"}
      </button>
    </div>

      {/* Text Section */}
      <div className="text-section">
        <h1>MoonBoxes.io</h1>
        <h2>your base to purchase NFTs</h2>
        <p>
          MoonBoxes.io offers you a complete overview of upcoming, active and recent NFT drops.
        </p>
        <p>
          MoonBoxes.io will be home to collectors and amazing NFT artists.
        </p>
      </div>
    </main>

    {/* Footer */}
    <footer className="moonboxes-footer">
      <div className="footer-item">TIER -</div>
      <div className="footer-item">MOONSHOT BALANCE -</div>
      <div className="footer-item">TOTAL NFTs -</div>
      <button className="explore-button">Explore</button>
    </footer>
  </div>
  );
};

export default Scroller;
