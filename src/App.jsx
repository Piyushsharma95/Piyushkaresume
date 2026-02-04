import { useState } from 'react';
import ScrollReveal from './components/ScrollReveal';
import './App.css';

function App() {
  const contact = {
    name: 'Piyush',
    email: 'piyusharma158@gmail.com',
    phone: '7986957381',
    linkedin: 'https://in.linkedin.com/in/piyush-sharma-6215b61a4',
    address: 'House No 197, Gali No 3, New Amar Nagar, Jalandhar',
  };

  const yearsText = '6 Years of Experience';

  const experiences = [
    {
      role: 'WordPress & Shopify Developer',
      company: '—',
      period: '2024 (Present)',
      bullets: [
        'WordPress and Shopify development and customization.',
        'Improved UI, responsiveness, and performance for websites/stores.',
      ],
    },
    {
      role: 'Web Developer & Designer',
      company: 'Webboosters',
      period: 'Jan 2023 - 2024',
      bullets: [
        'Designed and developed responsive websites and landing pages.',
        'Worked on UI improvements and client requirements implementation.',
      ],
    },
    {
      role: 'Web Developer & Designer',
      company: 'Nimble Technocrats',
      period: 'Jul 2022 - Dec 2022',
      bullets: ['Built and updated web pages with clean UI and modern layouts.'],
    },
    {
      role: 'Web Developer & Designer',
      company: 'Unnati Web Solutions',
      period: 'Jul 2021 - Jun 2022',
      bullets: ['Developed websites and handled design updates for multiple projects.'],
    },
    {
      role: 'Web Designer',
      company: 'Tech Webers',
      period: 'Jan 2019 - Sep 2020',
      bullets: ['Created website designs and implemented responsive front-end layouts.'],
    },
  ];

  const iconSkills = [
    { label: 'HTML', level10: 9 },
    { label: 'CSS', level10: 8 },
    { label: 'WordPress', level10: 9 },
    { label: 'Shopify', level10: 8 },
  ];

  const personalSkills = [
    { name: 'Design', level: 60, color: 'teal' },
    { name: 'CSS', level: 80, color: 'gold' },
    { name: 'JavaScript', level: 70, color: 'blue' },
    { name: 'WordPress', level: 85, color: 'dark' },
  ];

  const techChips = ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'WordPress', 'Shopify'];

  const renderSkillIcon = (label) => {
    const common = {
      width: 34,
      height: 34,
      viewBox: '0 0 64 64',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      role: 'img',
      'aria-label': label,
    };

    if (label === 'HTML') {
      return (
        <svg {...common} viewBox="0 0 64 64">
          <path d="M12 6h40l-3.7 42.2L32 58l-16.3-9.8L12 6Z" stroke="#E34F26" strokeWidth="3" />
          <path
            d="M21 18h22l-.6 6H27l.7 7h13.7l-1.1 12.4L32 47.5l-8.3-4.1-.5-6.1"
            stroke="#E34F26"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    if (label === 'CSS') {
      return (
        <svg {...common} viewBox="0 0 64 64">
          <path d="M12 6h40l-3.7 42.2L32 58l-16.3-9.8L12 6Z" stroke="#1572B6" strokeWidth="3" />
          <path
            d="M45 18H22l.6 6h21.8M25 31h17.6l-1.2 12.3L32 47.5l-9.4-4.2-.6-6.2"
            stroke="#1572B6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    if (label === 'WordPress') {
      return (
        <svg {...common} viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="22" stroke="#21759B" strokeWidth="3" />
          <path
            d="M20.5 24.5c1.3 0 2.3 1.2 2.3 2.5 0 1.1-.6 2.1-1.2 3.3l7.2 21.2"
            stroke="#21759B"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M42.8 24.5c1.3 0 2.4 1.2 2.4 2.5 0 1.2-.5 2.2-1.2 3.5l-6.8 19.9"
            stroke="#21759B"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M29.5 21.5c3.5-1.4 7.6-1.2 10.9.6"
            stroke="#21759B"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    }

    // Shopify (simple bag icon)
    return (
      <svg {...common} viewBox="0 0 64 64">
        <path
          d="M20 24h24l4 30H16l4-30Z"
          stroke="#95BF47"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M24 24c0-6 4-10 8-10s8 4 8 10"
          stroke="#95BF47"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M28 36c1.8-1.4 6.2-1.4 8 0"
          stroke="#95BF47"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  const services = [
    {
      title: 'WordPress Websites',
      desc: 'Custom themes, landing pages, speed improvements, responsive UI.',
    },
    {
      title: 'Shopify Stores',
      desc: 'Theme customization, sections, storefront UI, conversion-focused layouts.',
    },
    {
      title: 'Front-end UI',
      desc: 'Clean, modern interfaces with HTML/CSS/JS and component-based React UI.',
    },
  ];

  const projects = [
    {
      title: 'E-commerce Storefront',
      stack: ['Shopify', 'Liquid', 'CSS'],
      bullets: [
        'Customized theme sections and improved mobile UX.',
        'Built reusable components for product and collection pages.',
      ],
    },
    {
      title: 'Business Website',
      stack: ['WordPress', 'HTML', 'JavaScript'],
      bullets: ['Created responsive pages and improved performance.', 'Implemented clean layouts using modern CSS.'],
    },
    {
      title: 'Landing Page System',
      stack: ['Bootstrap', 'Tailwind CSS', 'UI'],
      bullets: ['Built multiple landing pages with consistent design system.'],
    },
  ];

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`page ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? '☀️' : '🌙'}
        </div>
        <div className="poster">
          <header className="posterHeader">
            <div className="posterHeaderTop">
              <div className="posterTitleScript">{yearsText}</div>
            </div>

            <div className="namePill">
              <div className="namePillLeft">
                <div className="avatar">
                  <span className="avatarText">PS</span>
                </div>
              </div>
              <div className="namePillRight">
                <h1 className="posterName">PIYUSH SHARMA</h1>
                <div className="posterRole">WEB DEVELOPER</div>
              </div>
            </div>
          </header>

          <div className="posterBody">
            <aside className="colLeft">
              <section className="iconGrid">
                {iconSkills.map((s) => (
                  <div className="iconSkill" key={s.label}>
                    <div className="iconCircle iconCircleSvg">{renderSkillIcon(s.label)}</div>
                    <div className="iconDots" aria-hidden="true">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <span className={i < s.level10 ? 'dot dotOn' : 'dot'} key={i} />
                      ))}
                    </div>
                  </div>
                ))}
              </section>

              <section className="leftBlock">
                <div className="blockTitle">PERSONAL SKILLS</div>
                <div className="bars">
                  {personalSkills.map((s, idx) => (
                    <div className="barRow" key={s.name}>
                      <div className="barLabel">{s.name}</div>
                      <div className="barTrack" aria-hidden="true">
                        <div
                          className={`barFill barFill_${s.color}`}
                          style={{ width: `${s.level}%`, '--delay': `${idx * 120}ms` }}
                        />
                      </div>
                      <div className="barPct">{s.level}%</div>
                    </div>
                  ))}
                </div>
                <div className="chipRow">
                  {techChips.map((t) => (
                    <span className="miniChip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </section>

              <section className="leftBlock">
                <div className="blockTitle">CONTACT US</div>
                <div className="contactRows">
                  <div className="cRow">
                    <div className="cKey">Mobile</div>
                    <a className="cVal" href={`tel:${contact.phone}`}>
                      {contact.phone}
                    </a>
                  </div>
                  <div className="cRow">
                    <div className="cKey">Email</div>
                    <a className="cVal" href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  </div>
                  <div className="cRow">
                    <div className="cKey">LinkedIn</div>
                    <a className="cVal" href={contact.linkedin} target="_blank" rel="noreferrer">
                      {contact.linkedin.replace('https://', '')}
                    </a>
                  </div>
                  <div className="cRow">
                    <div className="cKey">Address</div>
                    <div className="cVal">{contact.address}</div>
                  </div>
                </div>

                <button className="printBtn" type="button" onClick={() => window.print()}>
                  Download / Print
                </button>
              </section>
            </aside>

            <main className="colRight">
              <section className="rightBlock">
                <div className="rightTitleRow">
                  <div className="rightTitle">EXPERIENCE</div>
                </div>

                <div className="stackCards">
                  {experiences.map((e, index) => (
                    <ScrollReveal key={`${e.company}-${e.period}`} delay={index * 150}>
                      <div className="rightCard">
                        <div className="rightCardLeft">
                          <div className="sideRole">{e.role.toUpperCase()}</div>
                          <div className="sideYears">{e.period}</div>
                        </div>
                        <div className="rightCardMain">
                          <div className="cardHeading">{e.company === '—' ? e.role : e.company}</div>
                          <div className="cardSubHeading">{e.role}</div>
                          <ul className="cardList">
                            {e.bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </section>

              <section className="rightBlock">
                <div className="rightTitleRow">
                  <div className="rightTitle">PROJECTS</div>
                </div>

                <div className="stackCards">
                  {projects.map((p, index) => (
                    <ScrollReveal key={p.title} delay={index * 150}>
                      <div className="rightCard slim">
                        <div className="rightCardLeft">
                          <div className="sideRole">{p.title.toUpperCase()}</div>
                          <div className="sideYears">{p.stack.join(' • ')}</div>
                        </div>
                        <div className="rightCardMain">
                          <div className="cardHeading">{p.title}</div>
                          <ul className="cardList">
                            {p.bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </section>

              <section className="rightBlock">
                <div className="rightTitleRow">
                  <div className="rightTitle">SERVICES</div>
                </div>

                <div className="svcList">
                  {services.map((s) => (
                    <div className="svcItem" key={s.title}>
                      <div className="svcItemTitle">{s.title}</div>
                      <div className="svcItemDesc">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Piyush Sharma</span>
          <span className="footerDivider">•</span>
          <span>Resume</span>
        </footer>
      </div>
    </div>
  );
}

export default App;

