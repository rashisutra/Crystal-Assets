const reasons = [
  {
    icon: '✅',
    title: '100% Certified Natural',
    desc: 'Every bracelet comes with a certificate of authenticity. No synthetic stones ever.',
  },
  {
    icon: '🚚',
    title: 'Hyderabad-wide Delivery',
    desc: 'Delivered to Banjara Hills, Jubilee Hills, Gachibowli, Kondapur, HITEC City, Madhapur & all of Hyderabad in 2–4 days.',
  },
  {
    icon: '💬',
    title: 'WhatsApp Support',
    desc: 'Ask us anything before you buy. Our team gives personalised guidance on which crystal suits you best.',
  },
  {
    icon: '🔮',
    title: 'Free Vedic Consultation',
    desc: 'Not sure which crystal is right? Get a free AI-powered Vedic reading at Rashisutra.com — linked to your birth chart.',
  },
];

export default function WhyUs() {
  return (
    <section style={{ padding: '72px 40px', background: 'var(--warm)' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div
            style={{
              fontSize: '11px',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              fontWeight: 600,
              marginBottom: '8px',
            }}
          >
            Why Sandhya Gems
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
              color: 'var(--deep)',
            }}
          >
            Trusted by Hyderabad crystal buyers
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '20px',
          }}
        >
          {reasons.map((r) => (
            <div
              key={r.title}
              style={{
                background: '#fff',
                borderRadius: '14px',
                padding: '26px 22px',
                borderLeft: '3px solid var(--gold)',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--gold-dim)',
                  borderRadius: '9px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  marginBottom: '12px',
                }}
              >
                {r.icon}
              </div>
              <h4
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.1rem',
                  color: 'var(--deep)',
                  marginBottom: '5px',
                }}
              >
                {r.title}
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
