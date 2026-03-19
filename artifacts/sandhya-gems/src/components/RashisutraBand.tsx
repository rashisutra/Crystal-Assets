export default function RashisutraBand() {
  return (
    <div
      style={{
        background: 'var(--forest)',
        padding: '56px 40px',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
          color: '#fff',
          marginBottom: '10px',
        }}
      >
        Want a full Vedic crystal reading?
      </h2>
      <p
        style={{
          color: 'rgba(255,255,255,.58)',
          fontSize: '15px',
          maxWidth: '480px',
          margin: '0 auto 26px',
          lineHeight: 1.7,
        }}
      >
        Find your rashi, ruling planet and the exact crystals that align with your birth chart —
        completely free on Rashisutra.com.
      </p>
      <a
        href="https://rashisutra.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: 'var(--gold)',
          color: 'var(--deep)',
          padding: '14px 30px',
          borderRadius: '50px',
          fontSize: '15px',
          fontWeight: 600,
          textDecoration: 'none',
          transition: 'all .2s',
          display: 'inline-block',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = 'var(--gold-light)';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = 'var(--gold)';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        }}
      >
        Get free reading on Rashisutra →
      </a>
    </div>
  );
}
