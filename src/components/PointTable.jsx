import { useState } from 'react';
import { FaTrophy, FaArrowUp, FaArrowDown, FaMinus } from 'react-icons/fa';
import './PointTable.css';

const pointsData = [
  { pos: 1, team: 'Champions CC', emoji: '🏏', p: 10, w: 8, l: 1, nr: 1, pts: 17, nrr: '+1.842', form: ['W','W','W','L','W'], trend: 'up' },
  { pos: 2, team: 'Warriors XI', emoji: '⚔️', p: 10, w: 7, l: 2, nr: 1, pts: 15, nrr: '+1.234', form: ['W','L','W','W','W'], trend: 'up' },
  { pos: 3, team: 'Royal Strikers', emoji: '👑', p: 10, w: 6, l: 3, nr: 1, pts: 13, nrr: '+0.654', form: ['W','W','L','W','L'], trend: 'stable' },
  { pos: 4, team: 'Thunder Bolts', emoji: '⚡', p: 10, w: 5, l: 4, nr: 1, pts: 11, nrr: '+0.112', form: ['L','W','W','L','W'], trend: 'stable' },
  { pos: 5, team: 'Speed Kings', emoji: '🚀', p: 10, w: 4, l: 5, nr: 1, pts: 9, nrr: '-0.344', form: ['W','L','L','W','L'], trend: 'down' },
  { pos: 6, team: 'Phoenix Eleven', emoji: '🔥', p: 10, w: 3, l: 6, nr: 1, pts: 7, nrr: '-0.892', form: ['L','L','W','L','L'], trend: 'down' },
  { pos: 7, team: 'Iron Hawks', emoji: '🦅', p: 10, w: 2, l: 7, nr: 1, pts: 5, nrr: '-1.245', form: ['L','L','L','W','L'], trend: 'down' },
  { pos: 8, team: 'Storm Riders', emoji: '🌪️', p: 10, w: 1, l: 8, nr: 1, pts: 3, nrr: '-1.856', form: ['L','L','L','L','W'], trend: 'down' },
];

const topBatsmen = [
  { rank: 1, name: 'James Mitchell', team: 'Champions CC', runs: 487, avg: 54.1, sr: 142.3, hs: 98 },
  { rank: 2, name: 'Tom Edwards', team: 'Champions CC', runs: 412, avg: 47.8, sr: 138.5, hs: 87 },
  { rank: 3, name: 'David King', team: 'Warriors XI', runs: 389, avg: 43.2, sr: 131.2, hs: 94 },
  { rank: 4, name: 'Rahul Sharma', team: 'Champions CC', runs: 356, avg: 39.6, sr: 128.8, hs: 82 },
  { rank: 5, name: 'Chris Malik', team: 'Royal Strikers', runs: 334, avg: 37.1, sr: 125.0, hs: 91 },
];

const topBowlers = [
  { rank: 1, name: 'Chris Thompson', team: 'Champions CC', wkts: 24, avg: 14.2, eco: 5.8, bb: '5/28' },
  { rank: 2, name: 'Arjun Nair', team: 'Champions CC', wkts: 19, avg: 17.4, eco: 6.2, bb: '4/21' },
  { rank: 3, name: 'Mark Taylor', team: 'Warriors XI', wkts: 18, avg: 18.9, eco: 6.8, bb: '5/34' },
  { rank: 4, name: 'Paul Green', team: 'Thunder Bolts', wkts: 16, avg: 22.1, eco: 7.1, bb: '4/19' },
  { rank: 5, name: 'Ahmed Siddiqui', team: 'Speed Kings', wkts: 14, avg: 24.6, eco: 7.4, bb: '3/24' },
];

const tabs = ['Points Table', 'Top Batsmen', 'Top Bowlers'];

export default function PointTable() {
  const [activeTab, setActiveTab] = useState('Points Table');

  return (
    <section id="pointtable" className="pointtable section-padding">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-subtitle" style={{ justifyContent: 'center' }}>League 2025</p>
          <h2 className="section-title">STANDINGS & <span>STATS</span></h2>
        </div>

        <div className="pt-tabs">
          {tabs.map(t => (
            <button key={t} className={`tab-btn ${activeTab === t ? 'active' : ''}`} onClick={() => setActiveTab(t)}>
              {t}
            </button>
          ))}
        </div>

        {activeTab === 'Points Table' && (
          <div className="table-wrap">
            <table className="cricket-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Team</th>
                  <th>P</th>
                  <th>W</th>
                  <th>L</th>
                  <th>NR</th>
                  <th>PTS</th>
                  <th>NRR</th>
                  <th>Form</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {pointsData.map(row => (
                  <tr key={row.pos} className={row.pos <= 4 ? 'qualifier' : ''}>
                    <td className="pos-cell">
                      {row.pos <= 4 && <span className="pos-dot"></span>}
                      {row.pos}
                    </td>
                    <td>
                      <div className="team-cell">
                        <span className="team-emoji">{row.emoji}</span>
                        <span className="team-nm">{row.team}</span>
                      </div>
                    </td>
                    <td>{row.p}</td>
                    <td className="green">{row.w}</td>
                    <td className="red">{row.l}</td>
                    <td>{row.nr}</td>
                    <td><strong>{row.pts}</strong></td>
                    <td className={row.nrr.startsWith('+') ? 'green' : 'red'}>{row.nrr}</td>
                    <td>
                      <div className="form-badges">
                        {row.form.map((f, i) => (
                          <span key={i} className={`form-badge ${f === 'W' ? 'w' : 'l'}`}>{f}</span>
                        ))}
                      </div>
                    </td>
                    <td>
                      {row.trend === 'up' && <FaArrowUp className="trend up" />}
                      {row.trend === 'down' && <FaArrowDown className="trend down" />}
                      {row.trend === 'stable' && <FaMinus className="trend stable" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="qualifier-note"><span className="pos-dot"></span> Qualify for playoffs</p>
          </div>
        )}

        {activeTab === 'Top Batsmen' && (
          <div className="table-wrap">
            <table className="cricket-table">
              <thead>
                <tr>
                  <th>#</th><th>Player</th><th>Team</th><th>Runs</th><th>Avg</th><th>SR</th><th>HS</th>
                </tr>
              </thead>
              <tbody>
                {topBatsmen.map(b => (
                  <tr key={b.rank} className={b.rank === 1 ? 'top-row' : ''}>
                    <td className="pos-cell">{b.rank === 1 && <FaTrophy className="gold" />}{b.rank}</td>
                    <td><strong>{b.name}</strong></td>
                    <td className="gray-txt">{b.team}</td>
                    <td><strong className="highlight">{b.runs}</strong></td>
                    <td>{b.avg}</td>
                    <td>{b.sr}</td>
                    <td>{b.hs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'Top Bowlers' && (
          <div className="table-wrap">
            <table className="cricket-table">
              <thead>
                <tr>
                  <th>#</th><th>Player</th><th>Team</th><th>Wkts</th><th>Avg</th><th>Eco</th><th>BB</th>
                </tr>
              </thead>
              <tbody>
                {topBowlers.map(b => (
                  <tr key={b.rank} className={b.rank === 1 ? 'top-row' : ''}>
                    <td className="pos-cell">{b.rank === 1 && <FaTrophy className="gold" />}{b.rank}</td>
                    <td><strong>{b.name}</strong></td>
                    <td className="gray-txt">{b.team}</td>
                    <td><strong className="highlight">{b.wkts}</strong></td>
                    <td>{b.avg}</td>
                    <td>{b.eco}</td>
                    <td>{b.bb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
