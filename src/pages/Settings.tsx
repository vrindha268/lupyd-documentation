import { useState } from 'react';
import { 
  Briefcase, Lock, Bell, ShieldCheck, CreditCard, Palette, 
  Link as LinkIcon, BarChart2, HelpCircle, UserX, Search, ChevronRight, UserCircle
} from 'lucide-react';

const ToggleSwitch = ({ defaultChecked = false }) => {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <div 
      onClick={() => setChecked(!checked)}
      style={{
        width: '36px', height: '20px', 
        backgroundColor: checked ? '#000000' : '#e0e0e0', 
        borderRadius: '20px', 
        position: 'relative',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        flexShrink: 0
      }}
    >
      <div style={{
        width: '16px', height: '16px', 
        backgroundColor: '#ffffff', 
        borderRadius: '50%', 
        position: 'absolute', 
        top: '2px', 
        left: checked ? '18px' : '2px',
        transition: 'left 0.2s ease',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }} />
    </div>
  );
};

export function Settings() {
  const [searchQuery, setSearchQuery] = useState('');

  const settingSections = [
    {
      id: 'profile',
      title: "Profile Settings",
      icon: UserCircle,
      purpose: "Keeps your identity accurate and up to date.",
      items: [
        { label: "Edit name, username, and profile photo", type: "chevron" },
        { label: "Update bio and category", type: "chevron" },
        { label: "Change business details", type: "chevron" }
      ]
    },
    {
      id: 'security',
      title: "Account & Security",
      icon: Lock,
      purpose: "Protect your account and control access.",
      items: [
        { label: "Change password", type: "chevron" },
        { label: "Enable two-factor authentication", type: "toggle", defaultChecked: true },
        { label: "Manage login sessions/devices", type: "chevron" }
      ]
    },
    {
      id: 'notifications',
      title: "Notifications",
      icon: Bell,
      purpose: "Stay updated without being overwhelmed.",
      items: [
        { label: "Control push notifications", type: "toggle", defaultChecked: true },
        { label: "Email/SMS preferences", type: "chevron" },
        { label: "Activity alerts (likes, comments, messages)", type: "toggle", defaultChecked: false }
      ]
    },
    {
      id: 'privacy',
      title: "Privacy Controls",
      icon: ShieldCheck,
      purpose: "Decide who sees your content and interacts with you.",
      items: [
        { label: "Profile visibility (public/private)", type: "toggle", defaultChecked: false },
        { label: "Control who can contact you", type: "chevron" },
        { label: "Manage content visibility", type: "chevron" }
      ]
    },
    {
      id: 'business',
      title: "Business Settings",
      icon: Briefcase,
      purpose: "Helps users discover and connect with your business.",
      items: [
        { label: "Business category & tags", type: "chevron" },
        { label: "Contact details (phone, email, links)", type: "chevron" },
        { label: "Service/product info", type: "chevron" }
      ]
    },
    {
      id: 'payments',
      title: "Payments & Monetization",
      icon: CreditCard,
      purpose: "Control how you earn and receive payments.",
      items: [
        { label: "Add payment details", type: "chevron" },
        { label: "Track earnings (ads/services)", type: "chevron" },
        { label: "Manage subscriptions", type: "chevron" }
      ]
    },
    {
      id: 'appearance',
      title: "Appearance",
      icon: Palette,
      purpose: "Personalize your experience.",
      items: [
        { label: "Theme (light/dark mode)", type: "toggle", defaultChecked: false },
        { label: "Layout preferences", type: "chevron" },
        { label: "Language selection", type: "chevron" }
      ]
    },
    {
      id: 'connected',
      title: "Connected Accounts",
      icon: LinkIcon,
      purpose: "Expand your reach beyond Lupyd.",
      items: [
        { label: "Link external platforms", type: "chevron" },
        { label: "Manage integrations", type: "chevron" },
        { label: "Disconnect accounts", type: "chevron" }
      ]
    },
    {
      id: 'data',
      title: "Activity & Data",
      icon: BarChart2,
      purpose: "Stay informed and in control of your data.",
      items: [
        { label: "View account activity", type: "chevron" },
        { label: "Download your data", type: "chevron" },
        { label: "Usage insights", type: "chevron" }
      ]
    },
    {
      id: 'support',
      title: "Help & Support",
      icon: HelpCircle,
      purpose: "Get help when needed.",
      items: [
        { label: "FAQs", type: "chevron" },
        { label: "Report a problem", type: "chevron" },
        { label: "Contact support", type: "chevron" }
      ]
    },
    {
      id: 'management',
      title: "Account Management",
      icon: UserX,
      purpose: "Full control over your account lifecycle.",
      items: [
        { label: "Deactivate account", type: "chevron" },
        { label: "Delete account", type: "chevron" }
      ]
    }
  ];

  const filteredSections = settingSections.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.items.some(i => i.label.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div style={{ maxWidth: '850px' }}>
      
      {/* Header & Search */}
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: 700, 
          letterSpacing: '-0.02em', 
          lineHeight: 1.2,
          marginBottom: '1rem',
          color: '#000000',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          ⚙️ Settings
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: '0 0 2rem 0' }}>
          Manage your account, control your experience, and customize how you use Lupyd.
        </p>

        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '500px'
        }}>
          <Search size={20} color="#888888" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            type="text" 
            placeholder="Search settings..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1rem 1rem 3rem',
              border: '1px solid #eaeaea',
              borderRadius: '12px',
              fontSize: '1.05rem',
              color: '#000000',
              outline: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
              backgroundColor: '#ffffff'
            }}
          />
        </div>
      </div>

      {/* Grid of Setting Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        {filteredSections.map((section) => (
          <div key={section.id} style={{
            backgroundColor: '#ffffff',
            border: '1px solid #eaeaea',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ 
              padding: '1.25rem 1.5rem', 
              borderBottom: '1px solid #eaeaea', 
              backgroundColor: '#fafafa',
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem' 
            }}>
              <section.icon size={22} color="#000000" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, margin: 0, color: '#000000' }}>
                {section.title}
              </h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ padding: '0.5rem 0' }}>
                {section.items.map((item, idx) => (
                  <div key={idx} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#ffffff',
                    transition: 'background-color 0.2s',
                    cursor: item.type === 'chevron' ? 'pointer' : 'default'
                  }}
                  onMouseEnter={(e) => {
                    if(item.type === 'chevron') e.currentTarget.style.backgroundColor = '#fafafa';
                  }}
                  onMouseLeave={(e) => {
                    if(item.type === 'chevron') e.currentTarget.style.backgroundColor = '#ffffff';
                  }}
                  >
                    <span style={{ fontSize: '1rem', color: '#111111', fontWeight: 400, paddingRight: '1rem' }}>
                      {item.label}
                    </span>
                    {item.type === 'toggle' ? (
                      <ToggleSwitch defaultChecked={item.defaultChecked} />
                    ) : (
                      <ChevronRight size={18} color="#bbbbbb" />
                    )}
                  </div>
                ))}
              </div>
              
              <div style={{ 
                marginTop: 'auto',
                padding: '1.25rem 1.5rem', 
                backgroundColor: '#f8f8f8',
                borderTop: '1px solid #eaeaea'
              }}>
                <p style={{ fontSize: '0.95rem', color: '#666666', lineHeight: 1.5, margin: 0 }}>
                  <strong style={{ color: '#000000' }}>Purpose:</strong> {section.purpose}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
