import { useState } from 'react';
import { findCrystal, getZodiacSign, type Goal, type Crystal } from '../data/crystals';

const s = {
  section: {
    background: 'var(--deep)',
    padding: '72px 40px',
  },
  wrap: {
    maxWidth: '660px',
    margin: '0 auto',
  },
  label: {
    fontSize: '11px',
    letterSpacing: '.14em',
    textTransform: 'uppercase' as const,
    color: 'var(--gold-light)',
    fontWeight: 600,
    marginBottom: '8px',
  },
  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
    color: '#fff',
    marginBottom: '12px',
  },
  sub: {
    fontSize: '15px',
    color: 'rgba(255,255,255,.52)',
    lineHeight: 1.7,
    marginBottom: '44px',
  },
  box: {
    background: 'rgba(255,255,255,.05)',
    border: '1px solid rgba(196,153,58,.2)',
    borderRadius: '16px',
    padding: '36px',
  },
  prog: {
    display: 'flex',
    gap: '5px',
    marginBottom: '26px',
  },
  pd: (on: boolean) => ({
    height: '3px',
    flex: 1,
    background: on ? 'var(--gold)' : 'rgba(255,255,255,.13)',
    borderRadius: '2px',
    transition: 'background .3s',
  }),
  ql: {
    fontSize: '12px',
    color: 'rgba(255,255,255,.45)',
    marginBottom: '7px',
    fontWeight: 500,
  },
  qq: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.55rem',
    color: '#fff',
    marginBottom: '22px',
    lineHeight: 1.3,
  },
  input: {
    width: '100%',
    background: 'rgba(255,255,255,.08)',
    border: '1px solid rgba(255,255,255,.14)',
    color: '#fff',
    padding: '13px 15px',
    borderRadius: '10px',
    fontSize: '16px',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    outline: 'none',
    marginBottom: '18px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '9px',
    marginBottom: '22px',
  },
  gb: (sel: boolean) => ({
    background: sel ? 'var(--gold-dim)' : 'rgba(255,255,255,.05)',
    border: `1.5px solid ${sel ? 'var(--gold)' : 'rgba(255,255,255,.11)'}`,
    color: sel ? 'var(--gold-light)' : '#fff',
    padding: '15px 11px',
    borderRadius: '10px',
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all .2s',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    textAlign: 'center' as const,
    lineHeight: 1.4,
  }),
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnBack: {
    background: 'transparent',
    color: 'rgba(255,255,255,.38)',
    border: 'none',
    cursor: 'pointer',
    fontSize: '13px',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    padding: '6px 0',
    transition: 'color .2s',
  },
  btnNext: (disabled: boolean) => ({
    background: 'var(--gold)',
    color: 'var(--deep)',
    padding: '12px 26px',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: 600,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all .2s',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    opacity: disabled ? 0.35 : 1,
  }),
  result: {
    textAlign: 'center' as const,
    animation: 'fadeUp .45s ease',
  },
  rImg: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover' as const,
    margin: '0 auto 18px',
    border: '3px solid rgba(196,153,58,.4)',
  },
  rGreet: {
    fontSize: '12px',
    color: 'rgba(255,255,255,.45)',
    textTransform: 'uppercase' as const,
    letterSpacing: '.09em',
    marginBottom: '6px',
  },
  rName: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '2.2rem',
    color: '#fff',
    marginBottom: '10px',
  },
  rWhy: {
    fontSize: '14px',
    color: 'rgba(255,255,255,.6)',
    lineHeight: 1.75,
    maxWidth: '420px',
    margin: '0 auto 20px',
  },
  rPrice: {
    fontSize: '13px',
    color: 'var(--gold-light)',
    marginBottom: '18px',
    fontWeight: 500,
  },
  rBtns: {
    display: 'flex',
    gap: '11px',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
  },
  btnBuy: {
    background: 'var(--gold)',
    color: 'var(--deep)',
    padding: '13px 30px',
    borderRadius: '50px',
    fontSize: '15px',
    fontWeight: 700,
    textDecoration: 'none',
    transition: 'all .2s',
    display: 'inline-block',
  },
  btnRetake: {
    background: 'transparent',
    color: 'rgba(255,255,255,.4)',
    border: '1px solid rgba(255,255,255,.18)',
    padding: '13px 22px',
    borderRadius: '50px',
    fontSize: '13px',
    cursor: 'pointer',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    transition: 'all .2s',
  },
  rashiLink: {
    marginTop: '18px',
    fontSize: '12px',
    color: 'rgba(255,255,255,.3)',
  },
};

type GoalOption = { label: string; emoji: string; value: Goal };
const goalOptions: GoalOption[] = [
  { label: 'Love & Relationships', emoji: '❤️', value: 'love' },
  { label: 'Wealth & Abundance', emoji: '💰', value: 'wealth' },
  { label: 'Health & Wellbeing', emoji: '🌿', value: 'health' },
  { label: 'Protection & Peace', emoji: '🛡️', value: 'protection' },
];

type Step = 1 | 2 | 3 | 'result';

export default function Quiz() {
  const [step, setStep] = useState<Step>(1);
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [goal, setGoal] = useState<Goal | null>(null);
  const [result, setResult] = useState<(Crystal & { sign: string }) | null>(null);

  const today = new Date().toISOString().split('T')[0];

  function goToStep2() {
    if (!name.trim()) return;
    setStep(2);
  }

  function goToStep3() {
    if (!dob) return;
    setStep(3);
  }

  function reveal() {
    if (!goal || !dob) return;
    const sign = getZodiacSign(dob);
    const crystal = findCrystal(goal, sign);
    setResult({ ...crystal, sign });
    setStep('result');
  }

  function retake() {
    setName('');
    setDob('');
    setGoal(null);
    setResult(null);
    setStep(1);
  }

  const progressBars = [1, 2, 3];

  return (
    <section style={s.section} id="quiz">
      <div style={s.wrap}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div style={s.label}>Crystal Finder</div>
          <h2 style={s.title}>Discover your lucky crystal</h2>
          <p style={s.sub}>
            3 quick questions. Your personalised crystal match with a direct buy link — in under 30
            seconds.
          </p>
        </div>

        <div style={s.box}>
          {step !== 'result' && (
            <div style={s.prog}>
              {progressBars.map((n) => (
                <div key={n} style={s.pd(typeof step === 'number' && step >= n)} />
              ))}
            </div>
          )}

          {step === 1 && (
            <div>
              <div style={s.ql}>Step 1 of 3</div>
              <div style={s.qq}>What should we call you?</div>
              <input
                type="text"
                style={s.input}
                placeholder="Your first name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && goToStep2()}
                autoComplete="off"
              />
              <div style={s.nav}>
                <span />
                <button style={s.btnNext(false)} onClick={goToStep2}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div style={s.ql}>Step 2 of 3</div>
              <div style={s.qq}>When were you born?</div>
              <input
                type="date"
                style={{ ...s.input, colorScheme: 'dark' }}
                max={today}
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <div style={s.nav}>
                <button style={s.btnBack} onClick={() => setStep(1)}>
                  ← Back
                </button>
                <button style={s.btnNext(false)} onClick={goToStep3}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div style={s.ql}>Step 3 of 3</div>
              <div style={s.qq}>{name ? `${name}, what do you want to attract?` : 'What do you want to attract?'}</div>
              <div style={s.grid}>
                {goalOptions.map((opt) => (
                  <button
                    key={opt.value}
                    style={s.gb(goal === opt.value)}
                    onClick={() => setGoal(opt.value)}
                  >
                    {opt.emoji} {opt.label}
                  </button>
                ))}
              </div>
              <div style={s.nav}>
                <button style={s.btnBack} onClick={() => setStep(2)}>
                  ← Back
                </button>
                <button style={s.btnNext(!goal)} onClick={reveal} disabled={!goal}>
                  Reveal my crystal ✦
                </button>
              </div>
            </div>
          )}

          {step === 'result' && result && (
            <div style={s.result}>
              <img src={result.img} alt={result.name} style={s.rImg} loading="lazy" />
              <div style={s.rGreet}>
                {name} · Your crystal · {result.sign}
              </div>
              <div style={s.rName}>{result.name}</div>
              <p style={s.rWhy}>{result.why}</p>
              <div style={s.rPrice}>{result.price}</div>
              <div style={s.rBtns}>
                <a
                  href={result.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={s.btnBuy}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--gold-light)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--gold)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  Buy Now on Sandhya Gems →
                </a>
                <button style={s.btnRetake} onClick={retake}>
                  Retake quiz
                </button>
              </div>
              <p style={s.rashiLink}>
                Want a deeper Vedic reading?{' '}
                <a
                  href="https://rashisutra.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--gold-light)', textDecoration: 'none' }}
                >
                  Visit Rashisutra.com →
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
