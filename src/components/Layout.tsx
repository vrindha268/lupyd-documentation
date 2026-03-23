import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { useState } from 'react';

export function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh' }}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        marginLeft: isSidebarOpen ? '280px' : '70px',
        transition: 'margin-left 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
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
