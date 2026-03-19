const trustItems = [
  '100% Natural & Certified',
  'Pan-Hyderabad Delivery',
  'Free Rashisutra Consultation',
  'WhatsApp Support',
  'Starting ₹499',
];

export default function TrustBar() {
  return (
    <div
      style={{
        background: 'var(--forest)',
        padding: '14px 40px',
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        flexWrap: 'wrap',
      }}
    >
      {trustItems.map((item) => (
        <div
          key={item}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            color: 'var(--gold-light)',
            fontSize: '12px',
            fontWeight: 500,
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              background: 'var(--gold)',
              borderRadius: '50%',
              display: 'inline-block',
            }}
          />
          {item}
        </div>
      ))}
    </div>
  );
}
