import { products } from '../data/crystals';

function ProductCard({ p }: { p: (typeof products)[0] }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: '#fff',
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow)',
        transition: 'transform .2s, box-shadow .2s',
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(-4px)';
        el.style.boxShadow = '0 8px 28px rgba(10,31,18,.16)';
        const btn = el.querySelector('.pbtn') as HTMLElement;
        if (btn) btn.style.background = 'var(--forest)';
        const img = el.querySelector('img') as HTMLElement;
        if (img) img.style.transform = 'scale(1.04)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'var(--shadow)';
        const btn = el.querySelector('.pbtn') as HTMLElement;
        if (btn) btn.style.background = 'var(--deep)';
        const img = el.querySelector('img') as HTMLElement;
        if (img) img.style.transform = 'scale(1)';
      }}
    >
      <div
        style={{
          height: '190px',
          overflow: 'hidden',
          position: 'relative',
          background: p.darkBg ? (p.name.includes('Onyx') ? '#1a1a1a' : '#1a1a28') : 'var(--warm)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={p.img}
          alt={p.imgAlt}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform .3s',
          }}
        />
        <span
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            background: 'var(--forest)',
            color: 'var(--gold-light)',
            fontSize: '10px',
            fontWeight: 600,
            padding: '3px 9px',
            borderRadius: '50px',
            textTransform: 'uppercase',
            letterSpacing: '.05em',
          }}
        >
          {p.badge}
        </span>
        <span
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: '#e53935',
            color: '#fff',
            fontSize: '10px',
            fontWeight: 700,
            padding: '3px 8px',
            borderRadius: '50px',
          }}
        >
          {p.discount}
        </span>
      </div>
      <div style={{ padding: '16px' }}>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.15rem',
            color: 'var(--deep)',
            marginBottom: '4px',
            lineHeight: 1.3,
          }}
        >
          {p.name}
        </div>
        <div
          style={{
            fontSize: '12px',
            color: 'var(--muted)',
            marginBottom: '12px',
            lineHeight: 1.5,
          }}
        >
          {p.benefit}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--deep)' }}>
              {p.priceNow}
            </span>
            <span style={{ fontSize: '11px', color: '#aaa', textDecoration: 'line-through' }}>
              {p.priceWas}
            </span>
          </div>
          <span
            className="pbtn"
            style={{
              background: 'var(--deep)',
              color: '#fff',
              padding: '8px 15px',
              borderRadius: '50px',
              fontSize: '12px',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              transition: 'background .2s',
            }}
          >
            Buy Now
          </span>
        </div>
      </div>
    </a>
  );
}

export default function Products() {
  return (
    <section id="products" style={{ padding: '72px 40px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '44px' }}>
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
            Our Collection
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
              color: 'var(--deep)',
              marginBottom: '12px',
            }}
          >
            Certified crystal bracelets — Hyderabad delivery
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '500px', lineHeight: 1.7 }}>
            All 100% natural and certified. Handcrafted bracelets shipped across Hyderabad in 2–4
            days.
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
            gap: '18px',
          }}
        >
          {products.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
