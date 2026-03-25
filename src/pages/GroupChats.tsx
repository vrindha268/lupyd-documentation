import { Users, Shield, Phone, Calendar, Link as LinkIcon, Image, Bell, Zap, Compass, CheckCircle2, Lock } from 'lucide-react';

export function GroupChats() {
  const capabilities = [
    {
      title: "Create & Manage Groups",
      icon: Users,
      items: [
        "Create groups instantly with multiple participants",
        "Add or remove members with full control",
        "Assign roles (admin / member)",
        "Customize group name and profile"
      ]
    },
    {
      title: "Secure Group Messaging",
      icon: Shield,
      items: [
        "End-to-end encrypted group conversations",
        "Messages accessible only to group members",
        "No data sharing with third parties",
        "Full control over message visibility"
      ]
    },
    {
      title: "Group Calls (Voice & Video)",
      icon: Phone,
      items: [
        "High-quality group voice and video calls",
        "Smooth real-time communication",
        "Secure call sessions with encryption",
        "Designed for both personal and business use"
      ]
    },
    {
      title: "Smart Scheduling",
      icon: Calendar,
      items: [
        "Schedule group calls or discussions in advance",
        "Set date and time with reminders",
        "Notify all participants automatically",
        "Ideal for meetings, events, and collaborations"
      ]
    },
    {
      title: "Seamless Connection",
      icon: LinkIcon,
      items: [
        "Stay connected across devices in real time",
        "Instant sync between mobile and desktop",
        "Join conversations anytime, anywhere",
        "No interruption in communication flow"
      ]
    },
    {
      title: "Media & Content Sharing",
      icon: Image,
      items: [
        "Share images, videos, and files within the group",
        "Fast and secure file transfer",
        "Organized conversation threads"
      ]
    },
    {
      title: "Notifications & Activity",
      icon: Bell,
      items: [
        "Real-time notifications for messages and calls",
        "Custom notification controls",
        "Stay updated without distractions"
      ]
    },
    {
      title: "User Experience",
      icon: Zap,
      items: [
        "Clean and intuitive chat interface",
        "Minimal learning curve",
        "Fast message delivery and updates",
        "Designed for both individuals and teams"
      ]
    }
  ];

  return (
    <div style={{ maxWidth: '850px' }}>
      {/* Header Section */}
      <div style={{ marginBottom: '3.5rem' }}>
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: 700, 
          letterSpacing: '-0.02em', 
          lineHeight: 1.2,
          marginBottom: '1.5rem',
          color: '#000000',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          💬 Group Chats
        </h1>
        
        <div style={{
          backgroundColor: '#fafafa',
          borderLeft: '4px solid #eaeaea',
          padding: '1.5rem',
          borderRadius: '0 8px 8px 0',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#000000' }}>
            <Compass size={20} color="#000000" /> Overview
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#555555', lineHeight: 1.7, margin: 0, marginBottom: '1rem' }}>
            Lupyd Group Chats are designed to bring people together through secure, real-time communication. Whether for casual conversations, team collaboration, or business discussions, group chats provide a unified space to connect, share, and interact without compromising privacy.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#555555', lineHeight: 1.7, margin: 0 }}>
            Built on Lupyd’s encryption-first foundation, every group interaction remains protected, ensuring that conversations stay within the group—never exposed or monetized.
          </p>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '4rem 0' }} />

      {/* Key Capabilities */}
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#000000' }}>
        ✨ Key Capabilities
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        {capabilities.map((cap, idx) => {
          const Icon = cap.icon;
          return (
            <div key={idx} style={{
              backgroundColor: '#ffffff',
              border: '1px solid #eaeaea',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 2px 12px rgba(0,0,0,0.02)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.02)';
            }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '40px', height: '40px', 
                  backgroundColor: '#fafafa', border: '1px solid #eaeaea',
                  borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' 
                }}>
                  <Icon size={20} color="#000000" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#000000', margin: 0 }}>
                  {cap.title}
                </h3>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                {cap.items.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '1.05rem', color: '#555555', lineHeight: 1.5 }}>
                    <CheckCircle2 size={18} color="#000000" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '4rem 0' }} />

      {/* Privacy & Use Cases */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        
        {/* Privacy & Trust */}
        <div style={{
          backgroundColor: '#111111',
          color: '#ffffff',
          borderRadius: '12px',
          padding: '2.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#ffffff', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', letterSpacing: '-0.01em' }}>
            <Lock size={24} color="#ffffff" /> Privacy & Trust
          </h3>
          <p style={{ fontSize: '1.05rem', color: '#bbbbbb', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Lupyd Group Chats are built with privacy at the core:
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', color: '#ffffff' }}>
              <Shield size={18} color="#bbbbbb" /> Conversations are never exposed outside the group
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', color: '#ffffff' }}>
              <Shield size={18} color="#bbbbbb" /> No tracking or selling of user interactions
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', color: '#ffffff' }}>
              <Shield size={18} color="#bbbbbb" /> Strong encryption ensures complete confidentiality
            </li>
          </ul>
        </div>

        {/* Use Cases */}
        <div style={{
          backgroundColor: '#fafafa',
          border: '1px solid #eaeaea',
          borderRadius: '12px',
          padding: '2.5rem'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#000000', marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>
            🎯 Use Cases
          </h3>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#000000', marginBottom: '0.25rem' }}>👨‍👩‍👧 Personal Groups</h4>
            <p style={{ fontSize: '1.05rem', color: '#666666', lineHeight: 1.5, margin: 0 }}>
              Stay connected with friends and family through secure conversations and shared moments.
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#000000', marginBottom: '0.25rem' }}>💼 Business Collaboration</h4>
            <p style={{ fontSize: '1.05rem', color: '#666666', lineHeight: 1.5, margin: 0 }}>
              Coordinate with teams, manage discussions, and schedule meetings in one place.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#000000', marginBottom: '0.25rem' }}>🌐 Community Engagement</h4>
            <p style={{ fontSize: '1.05rem', color: '#666666', lineHeight: 1.5, margin: 0 }}>
              Build and manage communities with structured and interactive group communication.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
