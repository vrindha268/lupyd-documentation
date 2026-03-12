import { Monitor, Download, ExternalLink, Apple, Play } from 'lucide-react';

export function Installation() {
  return (
    <div className="container section">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Download Lupyd</h1>
        <p style={{ fontSize: '1.5rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6, color: '#333' }}>
          Secure, private, and encrypted communication on any device. Follow our professional guide to get started.
        </p>
      </div>

      {/* Main Download Options */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
        
        {/* Android Section */}
        <div style={{ border: '1px solid var(--border-color)', padding: '3rem', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Play size={40} />
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Android</h2>
          </div>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>Get the official app from the Google Play Store for your Android devices.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ fontWeight: 800, minWidth: '24px' }}>01</div>
              <div>Open <strong>Google Play Store</strong> on your device.</div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ fontWeight: 800, minWidth: '24px' }}>02</div>
              <div>Search for <code style={{ background: '#eee', padding: '2px 6px' }}>Lupyd</code> in the search bar.</div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ fontWeight: 800, minWidth: '24px' }}>03</div>
              <div>Tap <strong>Install</strong> and wait for the download to complete.</div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ fontWeight: 800, minWidth: '24px' }}>04</div>
              <div>Open the app and set up your secure profile.</div>
            </div>
          </div>
          <button style={{ width: '100%', marginTop: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            Go to Play Store <ExternalLink size={18} />
          </button>
        </div>

        {/* iOS Section */}
        <div style={{ border: '1px solid var(--border-color)', padding: '3rem', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Apple size={40} />
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>iOS</h2>
          </div>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>Experience Lupyd on iPhone and iPad via the official Apple App Store.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ fontWeight: 800, minWidth: '24px' }}>01</div>
              <div>Launch the <strong>App Store</strong> on your iPhone/iPad.</div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ fontWeight: 800, minWidth: '24px' }}>02</div>
              <div>Search for <strong>"Lupyd"</strong> in the Search tab.</div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ fontWeight: 800, minWidth: '24px' }}>03</div>
              <div>Tap <strong>Get</strong> and authenticate your download.</div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ fontWeight: 800, minWidth: '24px' }}>04</div>
              <div>Find Lupyd on your home screen and tap to open.</div>
            </div>
          </div>
          <button style={{ width: '100%', marginTop: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            Go to App Store <ExternalLink size={18} />
          </button>
        </div>

      </div>

      {/* Desktop Section */}
      <div style={{ backgroundColor: 'var(--primary-text)', color: 'var(--primary-bg)', padding: '5rem 3rem', marginBottom: '6rem' }}>
        <div style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
            <Monitor size={48} />
            <h2 style={{ fontSize: '3rem', fontWeight: 700 }}>All Other Platforms</h2>
          </div>
          <p style={{ fontSize: '1.25rem', marginBottom: '3rem', lineHeight: 1.6 }}>
            Lupyd is built to be universal. Access our platform on Windows, macOS, Linux, or directly through your favorite web browser.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.5rem' }}>Desktop</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Download native clients for professional workflows and native notifications.</p>
              <a href="https://www.lupyd.com/downloads" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 600, borderBottom: '2px solid white', paddingBottom: '2px' }}>
                Visit lupyd.com/downloads <Download size={16} />
              </a>
            </div>
            <div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.5rem' }}>Web</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>No installation required. Jump straight into your workspace from any browser.</p>
              <a href="https://app.lupyd.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 600, borderBottom: '2px solid white', paddingBottom: '2px' }}>
                Launch Web App <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
