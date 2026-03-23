import { Link } from 'react-router-dom';
import { ArrowRight, Box, ShieldCheck, Zap } from 'lucide-react';

export function Home() {
  return (
    <div style={{ maxWidth: '800px' }}>
      <div style={{ marginBottom: '4rem' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: 800, 
          letterSpacing: '-0.04em', 
          lineHeight: 1.1,
          marginBottom: '1rem',
          color: '#000'
        }}>
          Lupyd Overview
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: '#555', 
          lineHeight: 1.6, 
          fontWeight: 400 
        }}>
          A new premium B2B and B2C social media experience where privacy, encryption, 
          groups, and scheduling form the core of your digital identity. 
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <Link to="/installation" className="doc-card">
          <Box size={24} className="doc-card-icon" />
          <h3 style={{ margin: '1rem 0 0.5rem', fontSize: '1.1rem', fontWeight: 600 }}>Quick Start</h3>
          <p style={{ color: '#666', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
            Install the Lupyd SDK and get your API keys to begin integrating perfectly within minutes.
          </p>
          <div className="doc-card-arrow"><ArrowRight size={18} /></div>
        </Link>
        
        <Link to="/guide" className="doc-card">
          <Zap size={24} className="doc-card-icon" />
          <h3 style={{ margin: '1rem 0 0.5rem', fontSize: '1.1rem', fontWeight: 600 }}>Core Features</h3>
          <p style={{ color: '#666', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
            Learn about end-to-end encryption, scheduling logic, and secure group management structures.
          </p>
          <div className="doc-card-arrow"><ArrowRight size={18} /></div>
        </Link>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '4rem 0' }} />

      <div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
          Uncompromising Security
        </h2>
        <p style={{ color: '#555', lineHeight: 1.6, marginBottom: '2rem' }}>
          We promise security and data privacy to users and businesses alike. Our entire architecture 
          is built upon zero-knowledge principles and fully encrypted data stores.
        </p>
        <Link to="/security" style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '0.5rem', 
          color: '#000', 
          fontWeight: 600, 
          textDecoration: 'none',
          borderBottom: '1px solid #000',
          paddingBottom: '2px'
        }}>
          Read Security Outline <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
