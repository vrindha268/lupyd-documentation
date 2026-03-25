import { 
  Zap, User, Navigation2, Palette, Package, Radio, Link as LinkIcon, BarChart3, 
  Target, Crosshair, Eye, Repeat, MessageSquare, LineChart, Users, Share2, Lightbulb 
} from 'lucide-react';

export function StartFast() {
  const buildSteps = [
    { title: "Quick Start", desc: "Create your business profile with essential details like name, category, and contact info. Your profile becomes your digital storefront on Lupyd.", icon: Zap },
    { title: "Set Up Your Identity", desc: "Add a clear profile photo, write a short bio, and choose the right category. A strong identity helps users understand what you offer instantly.", icon: User },
    { title: "Publish Your First Content", desc: "Share your first post to introduce your business, product, or service. Keep it simple, clear, and visually engaging.", icon: Navigation2 },
    { title: "Customize Your Presence", desc: "Adjust your profile layout, visuals, and branding to match your style. Consistent design builds trust and recognition.", icon: Palette },
    { title: "Create Your Offer", desc: "Highlight what you provide — products, services, or experiences. Make it easy for users to understand and take action.", icon: Package },
    { title: "Go Live", desc: "Once everything is set, your profile is ready to be discovered. Users can now explore, engage, and connect with your business.", icon: Radio },
    { title: "Connect & Expand", desc: "Add external links and contact options so users can reach you easily beyond Lupyd.", icon: LinkIcon },
    { title: "Track Early Activity", desc: "Monitor how people interact with your profile and content. Use insights to improve your next steps.", icon: BarChart3 }
  ];

  const viralSteps = [
    { title: "Get Discovered", desc: "Use relevant categories, clear titles, and engaging visuals so your content reaches the right audience. Visibility starts with clarity.", icon: Target },
    { title: "Post with Purpose", desc: "Every post should have a goal — attract, inform, or convert. Avoid random content and focus on value-driven updates.", icon: Crosshair },
    { title: "Hook Attention Fast", desc: "The first few seconds matter. Use strong visuals, short captions, and clear messaging to stop users from scrolling.", icon: Eye },
    { title: "Stay Consistent", desc: "Regular posting keeps your profile active and visible. Consistency builds familiarity and trust over time.", icon: Repeat },
    { title: "Engage Actively", desc: "Respond to comments, interact with users, and stay involved. Engagement increases reach and builds relationships.", icon: MessageSquare },
    { title: "Learn What Works", desc: "Track which posts perform better and repeat what brings results. Small improvements lead to bigger growth.", icon: LineChart },
    { title: "Collaborate & Expand", desc: "Partner with other creators or businesses to reach new audiences. Collaboration drives faster exposure.", icon: Users },
    { title: "Share Beyond Lupyd", desc: "Promote your profile on other platforms to bring more users into your ecosystem.", icon: Share2 },
    { title: "Optimize Continuously", desc: "Update your profile, improve your content style, and refine your strategy based on feedback and performance.", icon: Lightbulb }
  ];

  return (
    <div style={{ maxWidth: '850px' }}>
      
      {/* Build & Launch Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: 700, 
          letterSpacing: '-0.02em', 
          lineHeight: 1.2,
          marginBottom: '1.5rem',
          color: '#000000'
        }}>
          Start Fast
        </h1>
        
        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0, marginBottom: '2.5rem' }}>
          <strong>Build & Launch:</strong> Start building your presence on Lupyd in minutes. Set up, publish, and go live without friction.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
          {buildSteps.map((step, idx) => (
            <div key={idx} style={{
              display: 'flex',
              gap: '1.25rem',
              padding: '1.5rem',
              backgroundColor: '#fafafa',
              border: '1px solid #eaeaea',
              borderRadius: '8px',
              alignItems: 'flex-start'
            }}>
              <div style={{ padding: '0.25rem' }}>
                <step.icon size={22} color="#000000" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, margin: '0 0 0.25rem 0', color: '#000000' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '4rem 0' }} />

      {/* Go Viral Section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '32px', 
          fontWeight: 700, 
          letterSpacing: '-0.02em', 
          lineHeight: 1.2,
          marginBottom: '1.5rem',
          color: '#000000'
        }}>
          Go Viral
        </h2>
        
        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0, marginBottom: '2.5rem' }}>
          <strong>Growth Hacks:</strong> Grow faster on Lupyd with simple, high-impact strategies. Focus on visibility, consistency, and meaningful engagement.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {viralSteps.map((step, idx) => (
            <div key={idx} style={{
              padding: '1.5rem',
              backgroundColor: '#ffffff',
              border: '1px solid #eaeaea',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
            }}>
              <step.icon size={24} color="#000000" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, margin: '0 0 0.5rem 0', color: '#000000' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Avoid Common Mistakes Box */}
        <div style={{
          backgroundColor: '#111111',
          color: '#ffffff',
          padding: '2rem',
          borderRadius: '12px',
          marginBottom: '2.5rem'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.25rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            ⚠️ Avoid Common Mistakes
          </h3>
          <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '1.05rem', lineHeight: 1.8, color: '#e0e0e0' }}>
            <li>Posting without a clear goal</li>
            <li>Ignoring audience interaction</li>
            <li>Inconsistent activity</li>
            <li>Low-quality visuals</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div style={{ borderLeft: '4px solid #eaeaea', paddingLeft: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: '#000000' }}>
            🚀 Keep Growing
          </h3>
          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, margin: 0 }}>
            Growth is an ongoing process. Experiment, adapt, and evolve to stay ahead and build long-term success.
          </p>
        </div>

      </div>
    </div>
  );
}
