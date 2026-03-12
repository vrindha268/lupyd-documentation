import { DollarSign, Star, TrendingUp } from 'lucide-react';

export function Monetization() {
  return (
    <div className="container section">
      <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Monetization & Revenue</h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '800px', marginBottom: '4rem' }}>
        Lupyd enables businesses, communities, and individuals to generate revenue through our secure content creation and subscription infrastructure.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        <div style={{ border: '1px solid var(--border-color)', padding: '3rem' }}>
          <Star size={48} style={{ marginBottom: '2rem' }} />
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Content Creation</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>
            Build your audience with premium content. Whether you're publishing articles, media, or courses, you can easily set paywalls, accept one-off tips, or offer premium gated access to exclusive materials.
          </p>
          <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li>— Secure Paywalls</li>
            <li>— Digital Downloads</li>
            <li>— Tip Jars & Donations</li>
          </ul>
        </div>

        <div style={{ border: '1px solid var(--border-color)', padding: '3rem', backgroundColor: 'var(--primary-text)', color: 'var(--primary-bg)' }}>
          <DollarSign size={48} style={{ marginBottom: '2rem' }} />
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Subscriptions</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>
            Establish a recurring revenue stream with tier-based subscriptions. Offer varied levels of access to your private groups, exclusive scheduling opportunities, and premium resources.
          </p>
          <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li>— Tiered Access Levels</li>
            <li>— Automated Billing</li>
            <li>— Sponsor Perks</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '5rem', borderTop: '1px solid var(--border-color)', paddingTop: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Scale?</h2>
          <p>Join the B2B network driving the next generation of privacy-first commerce.</p>
        </div>
        <TrendingUp size={80} strokeWidth={1} />
      </div>

    </div>
  );
}
