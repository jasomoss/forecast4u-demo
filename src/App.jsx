import { useState, useEffect, useRef } from 'react'

// ─── Builder.io brand mark ───────────────────────────────────
function BuilderMark({ size = 20 }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontFamily: 'var(--font)', fontWeight: 700, fontSize: size,
      color: 'var(--white)', letterSpacing: '-0.02em'
    }}>
      <span style={{
        display: 'inline-block', width: 4, height: size * 1.1,
        background: 'linear-gradient(180deg, var(--purpleL), var(--pink))',
        borderRadius: 2, flexShrink: 0
      }} />
      builder.io
    </span>
  )
}

// ─── Gradient bar ────────────────────────────────────────────
function GradBar({ style = {} }) {
  return (
    <div style={{
      height: 2, width: '100%',
      background: 'linear-gradient(90deg, var(--purple), var(--purpleL), var(--pink))',
      ...style
    }} />
  )
}

// ─── Section label ───────────────────────────────────────────
function Label({ children }) {
  return (
    <p style={{
      fontFamily: 'var(--font)', fontSize: 11, fontWeight: 700,
      color: 'var(--purpleL)', letterSpacing: '0.2em',
      textTransform: 'uppercase', marginBottom: 12
    }}>{children}</p>
  )
}

// ─── Card ────────────────────────────────────────────────────
function Card({ children, style = {}, hover = true }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => hover && setHov(true)}
      onMouseLeave={() => hover && setHov(false)}
      style={{
        background: 'var(--dark2)',
        border: `1px solid ${hov ? 'rgba(124,58,237,0.5)' : 'var(--gray3)'}`,
        borderRadius: 12,
        transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
        transform: hov ? 'translateY(-2px)' : 'none',
        boxShadow: hov ? '0 8px 32px rgba(124,58,237,0.15)' : 'none',
        ...style
      }}
    >
      {children}
    </div>
  )
}

// ─── Pill badge ──────────────────────────────────────────────
function Pill({ children, color = 'var(--purpleL)', bg = 'rgba(124,58,237,0.1)' }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 12px', borderRadius: 999,
      background: bg, color, fontSize: 12, fontWeight: 600,
      fontFamily: 'var(--font)', border: `1px solid ${color}33`,
      letterSpacing: '0.01em'
    }}>{children}</span>
  )
}

// ─── Nav ─────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const links = [
    { label: 'App', href: '#app' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Components', href: '#components' },
    { label: 'Docs', href: '#docs' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(10,10,10,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--gray3)' : '1px solid transparent',
      transition: 'all 0.3s',
      padding: '0 32px',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64
      }}>
        <BuilderMark size={16} />
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              color: 'var(--gray1)', fontSize: 14, fontWeight: 500,
              textDecoration: 'none', fontFamily: 'var(--font)',
              transition: 'color 0.15s'
            }}
              onMouseEnter={e => e.target.style.color = 'var(--white)'}
              onMouseLeave={e => e.target.style.color = 'var(--gray1)'}
            >{l.label}</a>
          ))}
          <a
            href="https://github.com/jasomoss/forecast4u"
            target="_blank" rel="noreferrer"
            style={{
              padding: '8px 20px', borderRadius: 8,
              background: 'linear-gradient(135deg, var(--purple), var(--pink))',
              color: 'var(--white)', fontSize: 13, fontWeight: 600,
              textDecoration: 'none', fontFamily: 'var(--font)',
              transition: 'opacity 0.15s'
            }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >GitHub →</a>
        </div>
      </div>
    </nav>
  )
}

// ─── Hero Section ────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '120px 32px 80px',
      position: 'relative', overflow: 'hidden',
      textAlign: 'center'
    }}>
      {/* Radial glow backgrounds */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: `
          radial-gradient(ellipse 60% 50% at 15% 40%, rgba(124,58,237,0.18) 0%, transparent 70%),
          radial-gradient(ellipse 50% 45% at 85% 65%, rgba(236,72,153,0.12) 0%, transparent 70%)
        `
      }} />
      {/* Grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, opacity: 0.03,
        backgroundImage: 'linear-gradient(var(--gray1) 1px, transparent 1px), linear-gradient(90deg, var(--gray1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 820 }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <Pill>⚡ Built in 24 hours · Deployed & live</Pill>
        </div>

        <h1 style={{
          fontSize: 'clamp(48px, 8vw, 86px)', fontWeight: 900,
          fontFamily: 'var(--font)', lineHeight: 1.05,
          letterSpacing: '-0.03em', color: 'var(--white)',
          marginBottom: 12
        }}>
          Forecast4U
        </h1>

        <h2 className="grad-text" style={{
          fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800,
          fontFamily: 'var(--font)', lineHeight: 1.1,
          letterSpacing: '-0.02em', marginBottom: 28
        }}>
          × Builder.io POV
        </h2>

        <p style={{
          fontSize: 18, color: 'var(--gray1)', maxWidth: 560,
          lineHeight: 1.7, margin: '0 auto 48px',
          fontFamily: 'var(--font)'
        }}>
          A proof-of-value prototype demonstrating how Builder.io's visual development
          platform — powered by IBM Carbon — can transform how Forecast4U ships UI.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#app" style={{
            padding: '14px 32px', borderRadius: 10,
            background: 'linear-gradient(135deg, var(--purple), var(--pink))',
            color: 'var(--white)', fontSize: 15, fontWeight: 700,
            textDecoration: 'none', fontFamily: 'var(--font)',
            boxShadow: '0 0 32px rgba(124,58,237,0.3)',
            transition: 'all 0.2s'
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(124,58,237,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0 32px rgba(124,58,237,0.3)' }}
          >
            View the App →
          </a>
          <a href="https://github.com/jasomoss/forecast4u" target="_blank" rel="noreferrer"
            style={{
              padding: '14px 32px', borderRadius: 10,
              border: '1px solid var(--gray3)',
              background: 'var(--dark2)',
              color: 'var(--white)', fontSize: 15, fontWeight: 600,
              textDecoration: 'none', fontFamily: 'var(--font)',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--purpleL)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--gray3)' }}
          >
            GitHub Repo
          </a>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'flex', gap: 40, justifyContent: 'center',
          marginTop: 72, flexWrap: 'wrap'
        }}>
          {[
            { val: '34', label: 'Unit Tests' },
            { val: '5-day', label: 'Forecast' },
            { val: '0', label: 'API Keys' },
            { val: 'Carbon', label: 'Design System' },
          ].map(s => (
            <div key={s.val} style={{ textAlign: 'center' }}>
              <div className="grad-text" style={{
                fontSize: 32, fontWeight: 800, fontFamily: 'var(--font)',
                letterSpacing: '-0.02em', lineHeight: 1
              }}>{s.val}</div>
              <div style={{ fontSize: 12, color: 'var(--gray1)', marginTop: 4, fontFamily: 'var(--font)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <GradBar style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
    </section>
  )
}

// ─── App Preview Section ─────────────────────────────────────
function AppSection() {
  return (
    <section id="app" style={{ padding: '100px 32px', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Label>Live Prototype</Label>
        <h2 style={{
          fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800,
          fontFamily: 'var(--font)', color: 'var(--white)',
          letterSpacing: '-0.02em', marginBottom: 16, lineHeight: 1.1
        }}>Try it yourself.</h2>
        <p style={{
          fontSize: 16, color: 'var(--gray1)', maxWidth: 480,
          lineHeight: 1.7, marginBottom: 48, fontFamily: 'var(--font)'
        }}>
          Enter any US ZIP code to get a real 5-day forecast in 3-hour intervals.
          Built with IBM Carbon, deployed on Vercel.
        </p>

        {/* App preview card */}
        <Card hover={false} style={{ overflow: 'hidden', borderRadius: 16 }}>
          {/* Browser bar */}
          <div style={{
            background: 'var(--dark3)', padding: '12px 20px',
            display: 'flex', alignItems: 'center', gap: 12,
            borderBottom: '1px solid var(--gray3)'
          }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {['#EF4444','#F59E0B','#22C55E'].map(c => (
                <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
              ))}
            </div>
            <div style={{
              flex: 1, background: 'var(--dark2)', borderRadius: 6,
              padding: '5px 12px', display: 'flex', alignItems: 'center', gap: 8
            }}>
              <span style={{ fontSize: 11, color: 'var(--green)', fontFamily: 'var(--mono)' }}>🔒</span>
              <span style={{ fontSize: 12, color: 'var(--gray1)', fontFamily: 'var(--mono)' }}>
                forecast4u.app
              </span>
            </div>
          </div>
          {/* Preview content */}
          <div style={{
            background: 'linear-gradient(160deg, #0f62fe 0%, #001d6c 100%)',
            height: 520, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 24,
            padding: '40px 32px'
          }}>
            <div style={{ fontSize: 64, textAlign: 'center' }}>⛅</div>
            <div style={{ textAlign: 'center', width: '100%' }}>
              <h3 style={{
                fontSize: 36, fontWeight: 800, color: '#ffffff',
                fontFamily: 'var(--font)', marginBottom: 12, letterSpacing: '-0.02em',
                textAlign: 'center'
              }}>Forecast4U</h3>
              <p style={{
                fontSize: 16, color: 'rgba(255,255,255,0.75)',
                fontFamily: 'var(--font)', marginBottom: 32,
                maxWidth: 420, margin: '0 auto 32px auto',
                textAlign: 'center', lineHeight: 1.7
              }}>
                5-day weather forecasts powered by real data.
                Enter any US ZIP code to get started.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 0 }}>
                {['10001 · New York', '90210 · Beverly Hills', '60601 · Chicago', '98101 · Seattle'].map(z => (
                  <span key={z} style={{
                    padding: '6px 16px', borderRadius: 999,
                    border: '1px solid rgba(255,255,255,0.3)',
                    color: 'rgba(255,255,255,0.8)', fontSize: 13,
                    fontFamily: 'var(--font)'
                  }}>{z}</span>
                ))}
              </div>
            </div>
            <a
              href="https://forecast4u-hcrofx3ez-jasomoss-6152s-projects.vercel.app"
              target="_blank" rel="noreferrer"
              style={{
                padding: '14px 36px', borderRadius: 10,
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#ffffff', fontSize: 15, fontWeight: 700,
                textDecoration: 'none', fontFamily: 'var(--font)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
            >
              Launch the App →
            </a>
          </div>
        </Card>
      </div>
    </section>
  )
}

// ─── Architecture Section ────────────────────────────────────
function ArchSection() {
  const layers = [
    {
      label: 'Data Layer', color: 'var(--green)',
      icon: '🗄️',
      items: ['Open-Meteo API', 'Zippopotam.us geocoding', '5-day / 3-hr intervals', 'No API keys required']
    },
    {
      label: 'Application Layer', color: 'var(--purpleL)',
      icon: '⚛️',
      items: ['React + Vite', 'React Router v7', 'useWeather custom hook', '34 Vitest unit tests']
    },
    {
      label: 'Presentation Layer', color: 'var(--pink)',
      icon: '🎨',
      items: ['IBM Carbon design system', 'Builder.io component index', 'Fusion AI agent', 'Storybook library']
    },
  ]

  const tools = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Vite', color: '#646CFF' },
    { name: 'Builder.io', color: '#8B5CF6' },
    { name: 'IBM Carbon', color: '#0F62FE' },
    { name: 'Vitest', color: '#6E9F18' },
    { name: 'Storybook', color: '#FF4785' },
    { name: 'Vercel', color: '#FFFFFF' },
    { name: 'GitHub', color: '#A1A1AA' },
  ]

  return (
    <section id="architecture" style={{ padding: '100px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Label>Technical Architecture</Label>
        <h2 style={{
          fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800,
          fontFamily: 'var(--font)', color: 'var(--white)',
          letterSpacing: '-0.02em', marginBottom: 16, lineHeight: 1.1
        }}>How it's built.</h2>
        <p style={{
          fontSize: 16, color: 'var(--gray1)', maxWidth: 480,
          lineHeight: 1.7, marginBottom: 64, fontFamily: 'var(--font)'
        }}>
          Three clean layers. Every architectural decision maps back to the
          Builder.io platform's strengths.
        </p>

        {/* 3-column layer grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 64 }}>
          {layers.map(layer => (
            <Card key={layer.label} style={{ padding: '28px 28px 32px' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20
              }}>
                <div style={{
                  width: 4, height: 32, borderRadius: 2,
                  background: layer.color, flexShrink: 0
                }} />
                <div>
                  <div style={{ fontSize: 18, marginBottom: 2 }}>{layer.icon}</div>
                  <div style={{
                    fontSize: 14, fontWeight: 700, color: 'var(--white)',
                    fontFamily: 'var(--font)'
                  }}>{layer.label}</div>
                </div>
              </div>
              {layer.items.map(item => (
                <div key={item} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '8px 0', borderBottom: '1px solid var(--gray3)'
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: layer.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: 'var(--zinc300)', fontFamily: 'var(--font)' }}>{item}</span>
                </div>
              ))}
            </Card>
          ))}
        </div>

        {/* Tech stack pills */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: 12, color: 'var(--gray2)', letterSpacing: '0.15em',
            textTransform: 'uppercase', marginBottom: 20, fontFamily: 'var(--font)'
          }}>Tech Stack</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            {tools.map(t => (
              <Pill key={t.name} color={t.color} bg={`${t.color}15`}>{t.name}</Pill>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Weather helpers ─────────────────────────────────────────
function getWeatherIcon(code) {
  if (code === 0) return '☀️'
  if (code <= 2) return '⛅'
  if (code <= 3) return '☁️'
  if (code <= 48) return '🌫️'
  if (code <= 57) return '🌦️'
  if (code <= 67) return '🌧️'
  if (code <= 77) return '❄️'
  if (code <= 82) return '🌧️'
  if (code <= 86) return '🌨️'
  return '⛈️'
}

function getWeatherLabel(code) {
  if (code === 0) return 'Clear Sky'
  if (code <= 2) return 'Partly Cloudy'
  if (code <= 3) return 'Overcast'
  if (code <= 48) return 'Foggy'
  if (code <= 57) return 'Drizzle'
  if (code <= 67) return 'Rain'
  if (code <= 77) return 'Snow'
  if (code <= 82) return 'Rain Showers'
  if (code <= 86) return 'Snow Showers'
  return 'Thunderstorm'
}

async function fetchWeather(lat, lon) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation_probability&temperature_unit=fahrenheit&wind_speed_unit=mph`
  )
  const data = await res.json()
  const c = data.current
  return {
    temp: Math.round(c.temperature_2m),
    feels: Math.round(c.apparent_temperature),
    icon: getWeatherIcon(c.weather_code),
    label: getWeatherLabel(c.weather_code),
    precip: c.precipitation_probability ?? 0,
    wind: Math.round(c.wind_speed_10m),
  }
}

// ─── Components Section ──────────────────────────────────────
function ComponentsSection() {
  const [size, setSize] = useState('lg')
  const [condition, setCondition] = useState({ icon: '⛅', label: 'Partly Cloudy', temp: 68, feels: 65, precip: 20, wind: 12 })
  const [selectedCity, setSelectedCity] = useState({ city: 'New York', zip: '10001' })
  const [cityWeather, setCityWeather] = useState({})
  const [weatherLoading, setWeatherLoading] = useState(true)

  const conditions = [
    { icon: '☀️', label: 'Clear Sky', temp: 84, feels: 88, precip: 0, wind: 4 },
    { icon: '⛅', label: 'Partly Cloudy', temp: 68, feels: 65, precip: 20, wind: 12 },
    { icon: '🌧️', label: 'Rain', temp: 52, feels: 48, precip: 75, wind: 18 },
    { icon: '❄️', label: 'Heavy Snow', temp: 28, feels: 18, precip: 85, wind: 22 },
    { icon: '⛈️', label: 'Thunderstorm', temp: 58, feels: 54, precip: 90, wind: 28 },
  ]

  const cities = [
    { city: 'New York', zip: '10001', lat: 40.7128, lon: -74.0060 },
    { city: 'Beverly Hills', zip: '90210', lat: 34.0736, lon: -118.4004 },
    { city: 'Chicago', zip: '60601', lat: 41.8827, lon: -87.6233 },
    { city: 'Miami', zip: '33101', lat: 25.7617, lon: -80.1918 },
  ]

  useEffect(() => {
    async function loadWeather() {
      setWeatherLoading(true)
      const results = {}
      await Promise.all(cities.map(async city => {
        try {
          results[city.zip] = await fetchWeather(city.lat, city.lon)
        } catch(e) {
          results[city.zip] = { icon: '⛅', label: 'Partly Cloudy', temp: 68, feels: 65, precip: 20, wind: 12 }
        }
      }))
      setCityWeather(results)
      // Set initial condition to New York's real weather
      if (results['10001']) setCondition(results['10001'])
      setWeatherLoading(false)
    }
    loadWeather()
  }, [])

  const sizeConfig = {
    sm: { padding: '10px 14px', gap: 10, iconSize: 24, tempSize: 18, citySize: 12, condSize: 11 },
    md: { padding: '14px 18px', gap: 14, iconSize: 30, tempSize: 22, citySize: 14, condSize: 12 },
    lg: { padding: '20px 24px', gap: 18, iconSize: 40, tempSize: 30, citySize: 16, condSize: 14 },
  }
  const cfg = sizeConfig[size]

  return (
    <section id="components" style={{
      padding: '100px 32px',
      background: 'linear-gradient(180deg, var(--black) 0%, var(--dark) 50%, var(--black) 100%)'
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Label>Custom Component</Label>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800,
              fontFamily: 'var(--font)', color: 'var(--white)',
              letterSpacing: '-0.02em', marginBottom: 12, lineHeight: 1.1
            }}>WeatherSummaryBadge</h2>
            <p style={{
              fontSize: 16, color: 'var(--gray1)', maxWidth: 480,
              lineHeight: 1.7, fontFamily: 'var(--font)'
            }}>
              A custom component built on IBM Carbon tokens. Lives on the{' '}
              <code style={{ color: 'var(--purpleL)', fontFamily: 'var(--mono)', fontSize: 14 }}>
                feature/weather-summary-badge
              </code>{' '}branch.
            </p>
          </div>
          <Pill color="var(--green)" bg="rgba(34,197,94,0.1)">✓ feature branch pushed</Pill>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
          {/* Live interactive demo */}
          <Card style={{ padding: 32 }} hover={false}>
            <p style={{ fontSize: 12, color: 'var(--gray1)', fontFamily: 'var(--font)', marginBottom: 24, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Interactive Demo</p>

            {/* Controls */}
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontSize: 12, color: 'var(--gray2)', fontFamily: 'var(--font)', marginBottom: 10 }}>Size</p>
              <div style={{ display: 'flex', gap: 8 }}>
                {['sm', 'md', 'lg'].map(s => (
                  <button key={s} onClick={() => setSize(s)} style={{
                    padding: '6px 18px', borderRadius: 6, cursor: 'pointer',
                    fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 600,
                    background: size === s ? 'var(--purple)' : 'var(--dark3)',
                    color: size === s ? 'var(--white)' : 'var(--gray1)',
                    border: `1px solid ${size === s ? 'var(--purple)' : 'var(--gray3)'}`,
                    transition: 'all 0.15s'
                  }}>{s}</button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <p style={{ fontSize: 12, color: 'var(--gray2)', fontFamily: 'var(--font)', marginBottom: 10 }}>Condition</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {conditions.map(c => (
                  <button key={c.label} onClick={() => setCondition(c)} style={{
                    padding: '6px 12px', borderRadius: 6, cursor: 'pointer',
                    fontFamily: 'var(--font)', fontSize: 12,
                    background: condition.label === c.label ? 'rgba(124,58,237,0.15)' : 'var(--dark3)',
                    color: condition.label === c.label ? 'var(--purpleL)' : 'var(--gray1)',
                    border: `1px solid ${condition.label === c.label ? 'var(--purpleL)' : 'var(--gray3)'}`,
                    transition: 'all 0.15s'
                  }}>{c.icon} {c.label}</button>
                ))}
              </div>
            </div>

            {/* Live badge preview */}
            <div style={{
              background: 'var(--dark)', borderRadius: 10, padding: 0,
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              minHeight: 120, border: '1px solid var(--gray3)', overflow: 'hidden'
            }}>
              {/* Simulated WeatherSummaryBadge */}
              <div style={{
                display: 'flex', alignItems: 'center',
                gap: cfg.gap, padding: cfg.padding,
                background: '#f4f4f4', borderRadius: 0,
                border: 'none', width: '100%', height: '100%',
                minHeight: 120
              }}>
                <span style={{ fontSize: cfg.iconSize }}>{condition.icon}</span>
                <div>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'baseline', marginBottom: 2 }}>
                    <span style={{ fontSize: cfg.citySize, fontWeight: 600, color: '#161616', fontFamily: 'IBM Plex Sans, sans-serif' }}>{selectedCity.city}</span>
                    <span style={{ fontSize: cfg.citySize - 2, color: '#6f6f6f', fontFamily: 'IBM Plex Sans, sans-serif' }}>{selectedCity.zip}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'baseline', marginBottom: 2 }}>
                    <span style={{ fontSize: cfg.tempSize, fontWeight: 700, color: '#161616', fontFamily: 'IBM Plex Sans, sans-serif' }}>{condition.temp}°F</span>
                    <span style={{ fontSize: cfg.condSize, color: '#525252', fontFamily: 'IBM Plex Sans, sans-serif' }}>Feels {condition.feels}°</span>
                  </div>
                  <span style={{ fontSize: cfg.condSize, color: '#525252', fontFamily: 'IBM Plex Sans, sans-serif' }}>{condition.label}</span>
                  {size === 'lg' && (
                    <div style={{ display: 'flex', gap: 4, marginTop: 8, flexWrap: 'wrap' }}>
                      <span style={{ padding: '2px 8px', background: '#dde1ff', color: '#0043ce', fontSize: 11, borderRadius: 99, fontFamily: 'IBM Plex Sans, sans-serif' }}>💧 {condition.precip}%</span>
                      <span style={{ padding: '2px 8px', background: '#e0e0e0', color: '#393939', fontSize: 11, borderRadius: 99, fontFamily: 'IBM Plex Sans, sans-serif' }}>💨 {condition.wind} mph</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>

          {/* Multiple locations */}
          <Card style={{ padding: 32 }} hover={false}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <p style={{ fontSize: 12, color: 'var(--gray1)', fontFamily: 'var(--font)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>Dashboard Use Case</p>
              <p style={{ fontSize: 11, color: 'var(--purpleL)', fontFamily: 'var(--font)', margin: 0 }}>← click to preview</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {cities.map((city, i) => {
                const c = cityWeather[city.zip] || { icon: '…', label: 'Loading...', temp: '--', feels: '--' }
                return (
                  <div key={city.zip} onClick={() => { setSelectedCity(city); setCondition(c); }} style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '14px 18px', background: selectedCity.zip === city.zip ? '#e8e8ff' : '#f4f4f4',
                    borderRadius: 6, border: `1px solid ${selectedCity.zip === city.zip ? '#a0a0ff' : '#e0e0e0'}`,
                    cursor: 'pointer', transition: 'all 0.15s'
                  }}>
                    <span style={{ fontSize: 26 }}>{c.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', gap: 6, alignItems: 'baseline' }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: '#161616', fontFamily: 'IBM Plex Sans, sans-serif' }}>{city.city}</span>
                        <span style={{ fontSize: 11, color: '#6f6f6f', fontFamily: 'IBM Plex Sans, sans-serif' }}>{city.zip}</span>
                      </div>
                      <div style={{ fontSize: 12, color: '#525252', fontFamily: 'IBM Plex Sans, sans-serif' }}>{c.label}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 20, fontWeight: 700, color: '#161616', fontFamily: 'IBM Plex Sans, sans-serif' }}>{c.temp}°</div>
                      <div style={{ fontSize: 11, color: '#6f6f6f', fontFamily: 'IBM Plex Sans, sans-serif' }}>Feels {c.feels}°</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

// ─── Docs Section ────────────────────────────────────────────
function DocsSection() {
  const docs = [
    {
      icon: '📊',
      title: 'POV Kickoff Deck',
      desc: 'Full Builder.io-branded presentation deck for stakeholder kickoff. Architecture, success criteria, next steps.',
      tag: '9 slides',
      color: 'var(--purpleL)',
      href: 'https://docs.google.com/presentation/d/1OSoBYjCyv8YyWQ3bW16Wcb_8-9GL16_TnQaGSc0v9B4/edit?usp=sharing'
    },
    {
      icon: '🎤',
      title: 'Demo Walkthrough Script',
      desc: 'Scene-by-scene guide for the peer review session. SAY / DO / PAUSE format. Runs 20-25 minutes.',
      tag: '6 scenes',
      color: 'var(--pink)',
      href: 'https://docs.google.com/document/d/1RXQOHTOtn0YJLaGTm-IdpOCyylCSVof1KJNIddjORDY/edit?usp=sharing'
    },
    {
      icon: '📐',
      title: 'Component Spec',
      desc: 'Full design system artifact for WeatherSummaryBadge — anatomy, props, Carbon tokens, accessibility, stories.',
      tag: 'feature/weather-summary-badge',
      color: 'var(--green)',
      href: 'https://docs.google.com/document/d/1qn3Ke8XyifOU0bz-LN5PjL7VCwVHhsqcbmx3jTW-Etg/edit?usp=sharing'
    },
  ]

  return (
    <section id="docs" style={{ padding: '100px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Label>Deliverables</Label>
        <h2 style={{
          fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800,
          fontFamily: 'var(--font)', color: 'var(--white)',
          letterSpacing: '-0.02em', marginBottom: 16, lineHeight: 1.1
        }}>Everything, in one place.</h2>
        <p style={{
          fontSize: 16, color: 'var(--gray1)', maxWidth: 480,
          lineHeight: 1.7, marginBottom: 64, fontFamily: 'var(--font)'
        }}>
          All supporting materials — built to the same standard as the prototype.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {docs.map(doc => (
            <Card key={doc.title} style={{ padding: '28px 28px 32px' }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{doc.icon}</div>
              <Pill color={doc.color} bg={`${doc.color}15`} style={{ marginBottom: 16 }}>{doc.tag}</Pill>
              <h3 style={{
                fontSize: 18, fontWeight: 700, color: 'var(--white)',
                fontFamily: 'var(--font)', marginBottom: 10, marginTop: 12
              }}>{doc.title}</h3>
              <p style={{
                fontSize: 13, color: 'var(--gray1)', lineHeight: 1.7,
                fontFamily: 'var(--font)', marginBottom: 24
              }}>{doc.desc}</p>
              <a href={doc.href} target="_blank" rel="noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 13, fontWeight: 600, color: doc.color,
                fontFamily: 'var(--font)', textDecoration: 'none',
                transition: 'gap 0.15s'
              }}
                onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                onMouseLeave={e => e.currentTarget.style.gap = '6px'}
              >Download → </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Copy Email Button ───────────────────────────────────────
function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText('jasomoss@gmail.com').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button onClick={handleClick} style={{
      padding: '12px 28px', borderRadius: 8,
      background: copied
        ? 'linear-gradient(135deg, #22C55E, #16A34A)'
        : 'linear-gradient(135deg, var(--purple), var(--pink))',
      color: 'var(--white)', fontSize: 14, fontWeight: 600,
      fontFamily: 'var(--font)', border: 'none', cursor: 'pointer',
      transition: 'all 0.2s'
    }}>
      {copied ? '✓ Email copied!' : 'Get in touch'}
    </button>
  )
}

// ─── About / Closing Section ──────────────────────────────────
function AboutSection() {
  return (
    <section style={{
      padding: '100px 32px 80px',
      position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 50% 60% at 80% 50%, rgba(124,58,237,0.12) 0%, transparent 70%),
          radial-gradient(ellipse 40% 50% at 20% 50%, rgba(236,72,153,0.08) 0%, transparent 70%)
        `
      }} />

      <GradBar style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'center'
        }}>
          <div>
            <Label>About</Label>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800,
              fontFamily: 'var(--font)', color: 'var(--white)',
              letterSpacing: '-0.02em', marginBottom: 24, lineHeight: 1.1
            }}>Built by Jason Moss.</h2>
            <p style={{
              fontSize: 16, color: 'var(--gray1)', lineHeight: 1.8,
              fontFamily: 'var(--font)', marginBottom: 20
            }}>
              VP of Sales Engineering at Stylitics. Previously the founding SE at Yotpo,
              where I built the SE org from zero to nine people globally across five
              time zones.
            </p>
            <p style={{
              fontSize: 16, color: 'var(--gray1)', lineHeight: 1.8,
              fontFamily: 'var(--font)', marginBottom: 36
            }}>
              This prototype was built in response to Alexis Kulash's outreach about
              the Enterprise SE role at Builder.io. The goal: demonstrate not just
              that I can complete a checklist — but that I understand why each piece
              matters in a real enterprise POV.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <CopyEmailButton />
              <a href="https://www.linkedin.com/in/jasonmoss22/" target="_blank" rel="noreferrer"
                style={{
                  padding: '12px 28px', borderRadius: 8,
                  border: '1px solid var(--gray3)', background: 'var(--dark2)',
                  color: 'var(--white)', fontSize: 14, fontWeight: 600,
                  textDecoration: 'none', fontFamily: 'var(--font)'
                }}>LinkedIn ↗</a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { label: 'Role', val: 'VP of Sales Engineering' },
              { label: 'Current Company', val: 'Stylitics' },
              { label: 'SE Experience', val: '11+ years enterprise SaaS' },
              { label: 'Notable', val: 'Founding SE at Yotpo (0→9 globally)' },
              { label: 'LinkedIn', val: 'linkedin.com/in/jasonmoss22' },
              { label: 'GitHub', val: 'github.com/jasomoss/forecast4u' },
              { label: 'Live App', val: 'forecast4u-hcrofx3ez-jasomoss-6152s-projects.vercel.app' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '12px 0', borderBottom: '1px solid var(--gray3)',
                gap: 16
              }}>
                <span style={{ fontSize: 13, color: 'var(--gray2)', fontFamily: 'var(--font)', flexShrink: 0 }}>{item.label}</span>
                <span style={{ fontSize: 13, color: 'var(--zinc300)', fontFamily: 'var(--mono)', textAlign: 'right' }}>{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ──────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      padding: '32px', borderTop: '1px solid var(--gray3)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 16, maxWidth: 1100, margin: '0 auto'
    }}>
      <BuilderMark size={14} />
      <p style={{ fontSize: 12, color: 'var(--gray2)', fontFamily: 'var(--font)' }}>
        Forecast4U × Builder.io  ·  Jason Moss  ·  April 2026
      </p>
      <GradBar style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2 }} />
    </footer>
  )
}

// ─── Main App ────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--black)' }}>
      <Nav />
      <Hero />
      <AppSection />
      <ArchSection />
      <ComponentsSection />
      <DocsSection />
      <AboutSection />
      <Footer />
    </div>
  )
}
