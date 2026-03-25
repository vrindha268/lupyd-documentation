import { Users, Store, Palette, Briefcase, Megaphone, Target, CheckCircle2, ArrowRight } from 'lucide-react';

export function UseCases() {
  const cases = [
    {
      title: "For Businesses",
      icon: Store,
      overview: "Businesses use Lupyd to create a digital presence, showcase offerings, and connect with customers.",
      whatTheyDo: [
        "Create a business profile",
        "Post product updates and offers",
        "Share visuals to attract customers",
        "Engage directly with audience"
      ],
      outcome: "Increased visibility, better engagement, and more potential customers."
    },
    {
      title: "For Content Creators",
      icon: Palette,
      overview: "Creators use Lupyd to share content, grow an audience, and build a personal brand.",
      whatTheyDo: [
        "Post videos, images, and updates",
        "Build a consistent content flow",
        "Engage with followers",
        "Expand reach through discovery"
      ],
      outcome: "Audience growth, stronger personal brand, and higher engagement."
    },
    {
      title: "For Service Providers",
      icon: Briefcase,
      overview: "Freelancers and professionals use Lupyd to present services and attract clients.",
      whatTheyDo: [
        "Showcase services clearly",
        "Share past work or examples",
        "Add contact options",
        "Respond to inquiries"
      ],
      outcome: "More leads, direct communication, and business opportunities."
    },
    {
      title: "For Promotions & Campaigns",
      icon: Megaphone,
      overview: "Brands use Lupyd to promote campaigns, offers, and announcements.",
      whatTheyDo: [
        "Launch promotional posts",
        "Highlight discounts or new releases",
        "Reach targeted users",
        "Drive engagement through content"
      ],
      outcome: "Better campaign reach and improved user response."
    }
  ];

  return (
    <div style={{ maxWidth: '850px' }}>
      <div style={{ marginBottom: '4rem' }}>
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: 700, 
          letterSpacing: '-0.02em', 
          lineHeight: 1.2,
          marginBottom: '1.5rem',
          color: '#000000'
        }}>
          Use Cases
        </h1>
        
        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          Understand how different people use Lupyd to achieve real outcomes. These examples show how the platform fits into everyday business, content, and growth needs.
        </p>

        <div style={{
          marginTop: '2rem',
          padding: '1.5rem',
          backgroundColor: '#fafafa',
          borderLeft: '4px solid #eaeaea',
          borderRadius: '0 8px 8px 0'
        }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 0 0.5rem 0', color: '#000000' }}>
            <Users size={20} color="#000000" /> Who is Lupyd for?
          </h3>
          <p style={{ fontSize: '1.05rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
            Lupyd is designed for individuals, creators, and businesses who want to build presence, share content, and connect with an audience in one place.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        {cases.map((useCase, idx) => {
          const Icon = useCase.icon;
          return (
            <div key={idx} style={{
              backgroundColor: '#ffffff',
              border: '1px solid #eaeaea',
              borderRadius: '12px',
              padding: '2.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '48px', height: '48px', 
                  backgroundColor: '#fafafa', border: '1px solid #eaeaea',
                  borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' 
                }}>
                  <Icon size={22} color="#000000" />
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#000000', margin: 0, letterSpacing: '-0.01em' }}>
                  {useCase.title}
                </h2>
              </div>

              <p style={{ fontSize: '1.05rem', color: '#555555', lineHeight: 1.6, marginBottom: '2rem' }}>
                <strong style={{ color: '#000000' }}>Overview:</strong> {useCase.overview}
              </p>

              <div style={{ marginBottom: '2rem', flex: 1 }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, margin: '0 0 1rem 0', color: '#000000' }}>What they do:</h4>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {useCase.whatTheyDo.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '1.05rem', color: '#444444', lineHeight: 1.5 }}>
                      <CheckCircle2 size={18} color="#000000" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                paddingTop: '1.25rem',
                borderTop: '1px solid #eaeaea'
              }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, margin: '0 0 0.5rem 0', color: '#000000' }}>Outcome:</h4>
                <p style={{ fontSize: '1.05rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                  {useCase.outcome}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Combined Use & Key Value Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        <div style={{
          backgroundColor: '#fafafa',
          border: '1px solid #eaeaea',
          borderRadius: '12px',
          padding: '2.5rem'
        }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#000000', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Target size={24} color="#000000" /> Combined Use
          </h3>
          <p style={{ fontSize: '1.05rem', color: '#555555', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Many users combine multiple use cases — for example:
          </p>
          <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '1.05rem', color: '#444444', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>A business acting as a content creator</li>
            <li style={{ marginBottom: '0.5rem' }}>A creator promoting services</li>
            <li style={{ marginBottom: '0.5rem' }}>A brand running campaigns while building community</li>
          </ul>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 600, margin: '0 0 0.5rem 0', color: '#000000' }}>Outcome:</h4>
          <p style={{ fontSize: '1.05rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
            A unified presence where content, business, and engagement work together.
          </p>
        </div>

        <div style={{
          backgroundColor: '#111111',
          color: '#ffffff',
          borderRadius: '12px',
          padding: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#ffffff', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
            🚀 Key Value
          </h3>
          <p style={{ fontSize: '1.1rem', color: '#bbbbbb', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Lupyd brings together:
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', color: '#ffffff' }}>
               <ArrowRight size={18} color="#bbbbbb" /> Content creation
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', color: '#ffffff' }}>
               <ArrowRight size={18} color="#bbbbbb" /> Business discovery
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', color: '#ffffff' }}>
               <ArrowRight size={18} color="#bbbbbb" /> Audience engagement
            </li>
          </ul>
          <p style={{ fontSize: '1.1rem', color: '#bbbbbb', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
            All in one platform, reducing the need for multiple tools.
          </p>
        </div>
      </div>

    </div>
  );
}
