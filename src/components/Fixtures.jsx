import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTicketAlt, FaFire } from 'react-icons/fa';
import './Fixtures.css';

const tabs = ['Upcoming', 'Results', 'All'];

const fixtures = [
  {
    id: 1,
    status: 'upcoming',
    type: 'League Match',
    date: 'May 20, 2025',
    time: '10:00 AM',
    venue: 'National Cricket Stadium',
    team1: { name: 'Champions CC', logo: '🏏', country: 'HOME' },
    team2: { name: 'Warriors XI', logo: '⚔️', country: 'AWAY' },
    highlight: true,
  },
  {
    id: 2,
    status: 'upcoming',
    type: 'Cup Qualifier',
    date: 'May 27, 2025',
    time: '2:00 PM',
    venue: 'City Cricket Ground',
    team1: { name: 'Champions CC', logo: '🏏', country: 'HOME' },
    team2: { name: 'Royal Strikers', logo: '👑', country: 'AWAY' },
  },
  {
    id: 3,
    status: 'result',
    type: 'League Match',
    date: 'May 10, 2025',
    time: 'Completed',
    venue: 'National Cricket Stadium',
    team1: { name: 'Champions CC', logo: '🏏', score: '287/6 (50 Ov)' },
    team2: { name: 'Thunder Bolts', logo: '⚡', score: '245/8 (50 Ov)' },
    result: 'Champions CC Won by 42 Runs',
    won: true,
  },
  {
    id: 4,
    status: 'result',
    type: 'T20 Cup',
    date: 'May 5, 2025',
    time: 'Completed',
    venue: 'City Cricket Ground',
    team1: { name: 'Champions CC', logo: '🏏', score: '178/4 (20 Ov)' },
    team2: { name: 'Speed Kings', logo: '🚀', score: '165/7 (20 Ov)' },
    result: 'Champions CC Won by 13 Runs',
    won: true,
  },
  {
    id: 5,
    status: 'upcoming',
    type: 'Friendly',
    date: 'Jun 3, 2025',
    time: '9:30 AM',
    venue: 'District Sports Complex',
    team1: { name: 'Champions CC', logo: '🏏', country: 'HOME' },
    team2: { name: 'Phoenix Eleven', logo: '🔥', country: 'AWAY' },
  },
  {
    id: 6,
    status: 'result',
    type: 'League Match',
    date: 'Apr 28, 2025',
    time: 'Completed',
    venue: 'Regional Stadium',
    team1: { name: 'Champions CC', logo: '🏏', score: '201/10 (47.3 Ov)' },
    team2: { name: 'Iron Hawks', logo: '🦅', score: '203/3 (38 Ov)' },
    result: 'Iron Hawks Won by 7 Wickets',
    won: false,
  },
];

const COUNTDOWN_TARGET = new Date('2025-05-20T10:00:00');

function useCountdown(target) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = target - new Date();
      if (diff <= 0) return;
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return time;
}

export default function Fixtures() {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const countdown = useCountdown(COUNTDOWN_TARGET);

  const filtered = activeTab === 'All' ? fixtures
    : activeTab === 'Upcoming' ? fixtures.filter(f => f.status === 'upcoming')
    : fixtures.filter(f => f.status === 'result');

  return (
    <section id="fixtures" className="fixtures section-padding">
      <div className="container">
        {/* Header */}
        <div className="fixtures-header">
          <div>
            <p className="section-subtitle">Events / Trials</p>
            <h2 className="section-title">UPCOMING <span>FIXTURES</span></h2>
          </div>
          {/* Countdown */}
          <div className="countdown-box">
            <p className="countdown-label"><FaFire /> Next Match Countdown</p>
            <div className="countdown-timer">
              {[['d', 'Days'], ['h', 'Hrs'], ['m', 'Min'], ['s', 'Sec']].map(([k, l]) => (
                <div className="countdown-unit" key={k}>
                  <span className="countdown-num">{String(countdown[k]).padStart(2, '0')}</span>
                  <span className="countdown-unit-label">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="fixture-tabs">
          {tabs.map(t => (
            <button key={t} className={`tab-btn ${activeTab === t ? 'active' : ''}`} onClick={() => setActiveTab(t)}>
              {t}
            </button>
          ))}
        </div>

        {/* Fixture Cards */}
        <div className="fixtures-list">
          {filtered.map(f => (
            <div key={f.id} className={`fixture-card ${f.highlight ? 'featured' : ''}`}>
              {f.highlight && <div className="featured-badge"><FaFire /> Featured Match</div>}
              <div className="fixture-meta">
                <span className="fixture-type">{f.type}</span>
                <span className="fixture-info"><FaCalendarAlt /> {f.date}</span>
                <span className="fixture-info"><FaClock /> {f.time}</span>
                <span className="fixture-info"><FaMapMarkerAlt /> {f.venue}</span>
              </div>
              <div className="fixture-teams">
                <div className="fixture-team">
                  <span className="team-logo">{f.team1.logo}</span>
                  <div>
                    <p className="team-name">{f.team1.name}</p>
                    {f.team1.score && <p className="team-score">{f.team1.score}</p>}
                    {f.team1.country && <p className="team-country">{f.team1.country}</p>}
                  </div>
                </div>
                <div className="fixture-vs">
                  {f.status === 'upcoming' ? (
                    <span className="vs-badge">VS</span>
                  ) : (
                    <span className={`result-badge ${f.won ? 'won' : 'lost'}`}>{f.won ? 'W' : 'L'}</span>
                  )}
                </div>
                <div className="fixture-team right">
                  <div>
                    <p className="team-name">{f.team2.name}</p>
                    {f.team2.score && <p className="team-score">{f.team2.score}</p>}
                    {f.team2.country && <p className="team-country">{f.team2.country}</p>}
                  </div>
                  <span className="team-logo">{f.team2.logo}</span>
                </div>
              </div>
              {f.result && <div className={`fixture-result ${f.won ? 'won' : 'lost'}`}>{f.result}</div>}
              {f.status === 'upcoming' && (
                <div className="fixture-actions">
                  <button className="btn-primary fixture-btn"><FaTicketAlt /> Buy Tickets</button>
                  <button className="btn-outline fixture-btn">Remind Me</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
