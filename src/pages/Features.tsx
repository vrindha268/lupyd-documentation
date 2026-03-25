import { Lock, Users, Edit3, Cloud, Briefcase, Compass, ShieldCheck, MonitorSmartphone, LayoutTemplate } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Lock,
      title: "Secure Messaging",
      description: "Communicate with confidence through encrypted conversations designed to keep your data private. Every message is protected, ensuring that only intended recipients have access."
    },
    {
      icon: Users,
      title: "Social Content Platform",
      description: "Create, share, and explore content in a dynamic environment driven by modern digital culture. Discover trending ideas, engage with creators, and express freely."
    },
    {
      icon: Edit3,
      title: "Content Creation & Engagement",
      description: "Publish posts, media, and updates while interacting with a growing community. Built for engagement, Lupyd enables meaningful interactions without algorithmic manipulation of personal data."
    },
    {
      icon: Cloud,
      title: "Cloud-Based Storage",
      description: "Access and manage your data seamlessly across devices. Lupyd offers integrated cloud support to store, retrieve, and sync your content securely."
    },
    {
      icon: Briefcase,
      title: "Business Integration (B2B + B2C)",
      description: "Connect businesses with users in a structured and transparent way. Organizations can showcase services, reach audiences, and build trusted relationships within the platform."
    },
    {
      icon: Compass,
      title: "Business Discovery",
      description: "Explore verified businesses, services, and opportunities in one place. Lupyd simplifies how users find and interact with brands."
    },
    {
      icon: ShieldCheck,
      title: "Privacy-First Architecture",
      description: "Unlike conventional platforms, Lupyd is built with privacy as a foundation. No personal data is sold, and user control remains central to every interaction."
    },
    {
      icon: MonitorSmartphone,
      title: "Unified Cross-Platform Experience",
      description: "Enjoy a consistent experience across mobile, desktop, and web. Lupyd ensures smooth performance and synchronization regardless of the device."
    },
    {
      icon: LayoutTemplate,
      title: "User-Friendly Interface",
      description: "Designed with simplicity in mind, the platform offers an intuitive interface that requires no learning curve—making it accessible to all users."
    }
  ];

  return (
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
          Core Features
        </h1>
        
        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          Lupyd brings together communication, content, and business interaction into a single secure ecosystem. Each feature is designed to deliver performance, simplicity, and privacy without compromise.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '4rem' }}>
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div key={idx} style={{
              display: 'flex',
              gap: '1.5rem',
              padding: '2rem',
              backgroundColor: '#fafafa',
              border: '1px solid #eaeaea',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              alignItems: 'flex-start'
            }} 
            className="feature-row"
            // We can add a simple hover effect inline that mimics Material interactions softly
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.borderColor = '#d4d4d4';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.03)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#fafafa';
              e.currentTarget.style.borderColor = '#eaeaea';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'none';
            }}
            >
              <div style={{ flexShrink: 0 }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e0e0e0',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}>
                  <Icon size={24} color="#000000" />
                </div>
              </div>
              <div style={{ paddingTop: '2px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: '0 0 0.5rem 0', color: '#000000', letterSpacing: '-0.01em' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
