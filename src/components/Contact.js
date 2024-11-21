import React from 'react'
import styles from 'react'
import './Contact.css'
function Contact() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
  <main style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem' }}>
    <div style={{ marginRight: '2rem' }}>
      <img
        src="Asset/images/astro_painter.png" // Replace with actual path
        alt="Astronaut painting NFT art"
        style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px' }}
      />
    </div>
    <div style={{ flex: 1 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Call for artists!</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>
        Applications are open for all artists & creators
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button style={{ padding: '0.8rem 1.5rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Contact Us
        </button>
        <button style={{ padding: '0.8rem 1.5rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Application Form
        </button>
      </div>
    </div>
  </main>


  {/* <footer style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#333', color: 'white', padding: '1rem' }}>
    <div>Tier -</div>
    <div>Moonshot Balance -</div>
    <div>Total NFTs -</div>
  </footer> */}
</div>

  )
}

export default Contact
