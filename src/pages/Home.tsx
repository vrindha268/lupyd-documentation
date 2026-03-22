import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <section className="section" style={{ textAlign: 'center', paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <img src="/icon-512.webp" alt="Lupyd Logo" style={{ width: '4rem', height: '4rem', objectFit: 'contain' }} />
            <span style={{ fontSize: '4rem', fontWeight: 800, letterSpacing: '-0.05em' }}>Lupyd</span>
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.05em' }}>
            A New Social Media Experience
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 3rem', color: '#444' }}>
            Lupyd is a premium B2B and B2C service where privacy, encryption, groups, and scheduling are our primary goals. We promise security and data privacy to users and businesses.
          </p>
        </div>
      </section>
    </div>
  );
}
