import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { NetworkBackground } from './NetworkBackground';
import { useState } from 'react';

export function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh', position: 'relative' }}>
      
      {/* Permanent Cinematic Background mapped globally behind documentation text */}
      <div style={{ 
        position: 'fixed', 
        top: 0, left: 0, 
        width: '100vw', height: '100vh', 
        pointerEvents: 'none', 
        zIndex: 0 
      }}>
        {/* Animated Dots Network Pattern */}
        <NetworkBackground />
        
        {/* Soft Room Shadow and Ambient Indoor Lighting */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          boxShadow: 'inset 0 0 150px rgba(0, 0, 0, 0.04)',
        }} />

        {/* Glossy Natural Reflection Layer */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 100%)',
          mixBlendMode: 'screen'
        }} />

        {/* Cinematic Texture and Depth Layer */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          opacity: 0.2,
          background: `
            radial-gradient(circle at 15% 50%, rgba(200,200,200, 0.05), transparent 25%),
            radial-gradient(circle at 85% 30%, rgba(0,0,0, 0.02), transparent 25%)
          `
        }} />
      </div>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        marginLeft: isSidebarOpen ? '280px' : '70px',
        transition: 'margin-left 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative',
        zIndex: 1 // Keep main content stacked completely above the background
      }}>
        <main style={{ 
          flex: 1, 
          padding: '4rem 6rem', 
          width: '100%', 
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          {/* Fading animation trigger on route change */}
          <div key={location.pathname} style={{ animation: 'contentFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <Outlet />
          </div>
        </main>
        
        <div style={{ padding: '0 6rem', maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
