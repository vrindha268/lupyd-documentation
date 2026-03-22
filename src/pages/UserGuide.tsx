import { MessageCircle, FileText, LifeBuoy, Download } from 'lucide-react';

export function UserGuide() {
  const faqs = [
    {
      q: "How does end-to-end encryption work on Lupyd?",
      a: "Everything you send is encrypted on your device before it hits the network. Only the intended recipients possess the key to decrypt the payload. We have zero-knowledge of your data."
    },
    {
      q: "Can I manage groups within an enterprise setting?",
      a: "Yes. Our B2B mode allows designated admins to create nested groups, assign specific roles, and manage permissions securely from their internal dashboard."
    },
    {
      q: "How do subscriptions work for creators?",
      a: "Creators can set customized monthly or yearly subscription tiers. Your followers can subscribe using secure payment gateways, completely integrated internally."
    },
    {
      q: "Is scheduling integrated directly with my native calendar?",
      a: "Yes! Lupyd’s calendar seamlessly connects with leading calendar services locally, ensuring your availability is synced without compromising privacy."
    }
  ];

  return (
    <div className="container section">
      <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>User Guide</h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '800px', marginBottom: '4rem', lineHeight: 1.6 }}>
        Welcome to the Lupyd ecosystem. Below you will find comprehensive guides and answers to the most commonly asked queries to help you maximize your social media and business experience securely.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
        <div style={{ padding: '2rem', border: '1px solid var(--border-color)' }}>
          <Download size={32} style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Installation & Setup</h3>
          <p>Get Lupyd on your mobile device or desktop. Step-by-step guides for Play Store, App Store, and more.</p>
          <a href="/installation" style={{ display: 'inline-block', marginTop: '1.5rem', fontWeight: 600, textDecoration: 'underline' }}>View Guide</a>
        </div>
        <div style={{ padding: '2rem', border: '1px solid var(--border-color)' }}>
          <MessageCircle size={32} style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Messaging & Groups</h3>
          <p>Learn how to establish secure communication pipelines, assemble verified groups, and administer advanced privileges.</p>
        </div>
        <div style={{ padding: '2rem', border: '1px solid var(--border-color)' }}>
          <FileText size={32} style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Creator Tools</h3>
          <p>A step-by-step tutorial on deploying paywalls, tracking subscription metrics, and maximizing audience reach.</p>
        </div>
        <div style={{ padding: '2rem', border: '1px solid var(--border-color)', backgroundColor: 'var(--primary-text)', color: 'var(--primary-bg)' }}>
          <LifeBuoy size={32} style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Support & Troubleshooting</h3>
          <p>Facing issues? Reach out to our 24/7 dedicated support staff focused on rapidly resolving enterprise roadblocks.</p>
        </div>
      </div>

      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {faqs.map((faq, index) => (
          <div key={index} style={{ borderLeft: '4px solid var(--primary-text)', paddingLeft: '1.5rem' }}>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{faq.q}</h4>
            <p style={{ color: '#444', lineHeight: 1.6 }}>{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
