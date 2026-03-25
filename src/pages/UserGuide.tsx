import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MessageCircle, FileText, LifeBuoy, Download, ArrowRight } from 'lucide-react';
import { IntroScreen } from '../components/IntroScreen';

export function UserGuide() {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);

  const handleInstallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setTransitioning(true);
  };

  return (
    <>
      {transitioning && (
        <IntroScreen 
          title={<span style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>Installation</span>}
          subtitle="Initializing Environment..."
          duration={2500}
          onComplete={() => {
            setTransitioning(false);
            navigate('/installation');
          }}
        />
      )}
      
      <div style={{ maxWidth: '850px' }}>
        <div style={{ marginBottom: '3.5rem' }}>
          <h1 style={{ 
            fontSize: '36px', 
            fontWeight: 700, 
            letterSpacing: '-0.02em', 
            lineHeight: 1.2,
            marginBottom: '1.5rem',
            color: '#000000'
          }}>
            Developer Docs
          </h1>
          
          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            Welcome to the Lupyd ecosystem. Below you will find comprehensive guides to help you maximize your social media and business experience securely.
          </p>
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: '1.5rem', color: '#000000' }}>
          Core Modules
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          
          {/* Module 1 - Triggers Cinematic Intro Before Navigating */}
          <a href="/installation" onClick={handleInstallClick} className="doc-card" style={{ padding: '2rem' }}>
            <Download size={24} className="doc-card-icon" />
            <h3 style={{ margin: '1rem 0 0.5rem', fontSize: '1.1rem', fontWeight: 600, color: '#000000' }}>Installation & Setup</h3>
            <p style={{ color: '#666666', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
              Get Lupyd on your mobile device or desktop. Step-by-step guides for Play Store, App Store, and more.
            </p>
            <div className="doc-card-arrow"><ArrowRight size={18} /></div>
          </a>
          
          {/* Module 2 */}
          <div className="doc-card" style={{ padding: '2rem', textDecoration: 'none', cursor: 'pointer' }}>
            <MessageCircle size={24} className="doc-card-icon" />
            <h3 style={{ margin: '1rem 0 0.5rem', fontSize: '1.1rem', fontWeight: 600, color: '#000000' }}>Messaging & Groups</h3>
            <p style={{ color: '#666666', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
              Learn how to establish secure communication pipelines, assemble verified groups, and administer advanced privileges.
            </p>
            <div className="doc-card-arrow"><ArrowRight size={18} /></div>
          </div>

          {/* Module 3 */}
          <div className="doc-card" style={{ padding: '2rem', textDecoration: 'none', cursor: 'pointer' }}>
            <FileText size={24} className="doc-card-icon" />
            <h3 style={{ margin: '1rem 0 0.5rem', fontSize: '1.1rem', fontWeight: 600, color: '#000000' }}>Creator Tools</h3>
            <p style={{ color: '#666666', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
              A step-by-step tutorial on deploying paywalls, tracking subscription metrics, and maximizing audience reach.
            </p>
            <div className="doc-card-arrow"><ArrowRight size={18} /></div>
          </div>

          {/* Module 4 */}
          <div className="doc-card" style={{ padding: '2rem', textDecoration: 'none', cursor: 'pointer', backgroundColor: '#fafafa', border: '1px solid #111111' }}>
            <LifeBuoy size={24} className="doc-card-icon" style={{ backgroundColor: '#111111', color: '#ffffff' }} />
            <h3 style={{ margin: '1rem 0 0.5rem', fontSize: '1.1rem', fontWeight: 600, color: '#000000' }}>Support & Troubleshooting</h3>
            <p style={{ color: '#666666', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
              Facing issues? Reach out to our 24/7 dedicated support staff focused on rapidly resolving enterprise roadblocks.
            </p>
            <div className="doc-card-arrow"><ArrowRight size={18} /></div>
          </div>
        </div>

      </div>
    </>
  );
}
