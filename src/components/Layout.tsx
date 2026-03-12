import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      <div style={{ 
        padding: '2rem 0', 
        borderBottom: '1px solid var(--border-color)',
        backgroundColor: '#fafafa'
      }}>
        <div className="container" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          textAlign: 'center'
        }}>
          <div style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.025em' }}>Lupyd</div>
          <p style={{ maxWidth: '600px', fontSize: '1rem', color: '#444' }}>
            Promises security, data privacy, and a new social media experience to users and businesses alike.
          </p>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: '0.5rem' }}>
            © 2026 Lupyd. All rights reserved.
          </div>
        </div>
      </div>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
