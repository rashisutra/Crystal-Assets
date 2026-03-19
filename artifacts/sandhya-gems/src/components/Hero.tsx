const heroStyles = {
  section: {
    background: 'var(--deep)',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    position: 'relative' as const,
    overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute' as const,
    inset: 0,
    background:
      'radial-gradient(ellipse 55% 55% at 85% 15%, rgba(196,153,58,.14) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 15% 85%, rgba(45,90,61,.45) 0%, transparent 55%)',
  },
  orb1: {
    position: 'absolute' as const,
    width: '280px',
    height: '280px',
    borderRadius: '50%',
    background: 'rgba(196,153,58,.07)',
    top: '-60px',
    right: '-40px',
    animation: 'float 9s ease-in-out infinite',
    pointerEvents: 'none' as const,
  },
  orb2: {
    position: 'absolute' as const,
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    background: 'rgba(155,127,196,.07)',
    bottom: '8%',
    left: '3%',
    animation: 'float 7s ease-in-out 2s infinite',
    pointerEvents: 'none' as const,
  },
  inner: {
    position: 'relative' as const,
    zIndex: 2,
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '80px 40px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
    width: '100%',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: 'var(--gold-dim)',
    border: '1px solid rgba(196,153,58,.3)',
    color: 'var(--gold-light)',
    padding: '5px 14px',
    borderRadius: '50px',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '.08em',
    textTransform: 'uppercase' as const,
    marginBottom: '22px',
  },
  dot: {
    width: '6px',
    height: '6px',
    background: 'var(--gold)',
    borderRadius: '50%',
    display: 'inline-block',
  },
  h1: {
    fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
    color: '#fff',
    marginBottom: '18px',
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
    lineHeight: 1.2,
  },
  em: {
    color: 'var(--gold-light)',
    fontStyle: 'italic',
  },
  sub: {
    fontSize: '16px',
    color: 'rgba(255,255,255,.65)',
    marginBottom: '30px',
    lineHeight: 1.75,
  },
  ctaRow: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap' as const,
  },
  btnGold: {
    background: 'var(--gold)',
    color: 'var(--deep)',
    padding: '13px 26px',
    borderRadius: '50px',
    fontSize: '15px',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'all .2s',
    display: 'inline-block',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  },
  btnGhost: {
    background: 'transparent',
    color: '#fff',
    border: '1px solid rgba(255,255,255,.25)',
    padding: '13px 26px',
    borderRadius: '50px',
    fontSize: '15px',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'all .2s',
    display: 'inline-block',
  },
  heroGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
  },
  hc: {
    background: 'rgba(255,255,255,.06)',
    border: '1px solid rgba(255,255,255,.09)',
    borderRadius: '10px',
    padding: '14px',
    textAlign: 'center' as const,
    transition: 'transform .2s',
  },
  hcImg: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    objectFit: 'cover' as const,
    margin: '0 auto 8px',
    border: '2px solid rgba(196,153,58,.2)',
  },
  hcName: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '14px',
    color: '#fff',
    marginBottom: '2px',
  },
  hcSub: {
    fontSize: '11px',
    color: 'rgba(255,255,255,.45)',
  },
};

const heroItems = [
  {
    img: 'https://sandhyagems.in/cdn/shop/files/Natural_Certified_Amethyst_Bracelet.jpg?width=120&height=120&crop=center&v=1754054662',
    name: 'Amethyst',
    sub: 'Peace & clarity',
  },
  {
    img: 'https://sandhyagems.in/cdn/shop/files/Natural_Rose_Quartz_Crystal_Bracelet.png?width=120&height=120&crop=center&v=1754054663',
    name: 'Rose Quartz',
    sub: 'Love & healing',
  },
  {
    img: 'https://sandhyagems.in/cdn/shop/files/Natural_Crystal_Money_Magnet_Bracelet.png?width=120&height=120&crop=center&v=1771061520',
    name: 'Money Magnet',
    sub: 'Wealth & luck',
  },
  {
    img: 'https://sandhyagems.in/cdn/shop/files/Product1_MoneyMagnet_NoNazarEvilEye__page-0005.jpg?width=120&height=120&crop=center&v=1771070099',
    name: 'Black Tourmaline',
    sub: 'Protection',
  },
  {
    img: 'https://sandhyagems.in/cdn/shop/files/Certified_Natural_Green_Aventurine_Bracelet.jpg?width=120&height=120&crop=center&v=1754054668',
    name: 'Aventurine',
    sub: 'Growth & health',
  },
  {
    img: 'https://sandhyagems.in/cdn/shop/files/Natural_Lava_Stone_Healing_Bracelet.png?width=120&height=120&crop=center&v=1754054659',
    name: 'Lava Stone',
    sub: 'Grounding energy',
  },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={heroStyles.section}>
      <div style={heroStyles.heroBg} />
      <div style={heroStyles.orb1} />
      <div style={heroStyles.orb2} />
      <div style={heroStyles.inner}>
        <div>
          <div style={heroStyles.badge}>
            <span style={heroStyles.dot} />
            Certified Natural Crystals · Hyderabad
          </div>
          <h1 style={heroStyles.h1}>
            Find your <em style={heroStyles.em}>healing crystal</em>
            <br />
            in Hyderabad
          </h1>
          <p style={heroStyles.sub}>
            Certified natural crystal bracelets delivered across Hyderabad. Take the free quiz to
            find the crystal that matches your energy — then buy directly in one click.
          </p>
          <div style={heroStyles.ctaRow}>
            <a
              href="#quiz"
              style={heroStyles.btnGold}
              onClick={(e) => {
                e.preventDefault();
                scrollTo('quiz');
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
              Find my lucky crystal
            </a>
            <a
              href="#products"
              style={heroStyles.btnGhost}
              onClick={(e) => {
                e.preventDefault();
                scrollTo('products');
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.07)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,.25)';
              }}
            >
              Shop all bracelets
            </a>
          </div>
        </div>
        <div style={heroStyles.heroGrid}>
          {heroItems.map((item) => (
            <div
              key={item.name}
              style={heroStyles.hc}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = 'translateY(0)')}
            >
              <img src={item.img} alt={item.name} style={heroStyles.hcImg} loading="lazy" />
              <div style={heroStyles.hcName}>{item.name}</div>
              <div style={heroStyles.hcSub}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
