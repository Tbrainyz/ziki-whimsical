const REQUIRED = 500;

const weeks = [
  { label: "7 Sept", pts: 0 },
  { label: "14 Sept", pts: 0 },
  { label: "21 Sept", pts: 0 },
  { label: "28 Sept", pts: 0 },
  { label: "5 Oct", pts: 0 },
  { label: "12 Oct", pts: 0 },
  { label: "19 Oct", pts: 514 },
  { label: "26 Oct", pts: 0 },
];

const stats = [
  { n: 514, label: "points picked", note: "500 needed this week, you cleared it", cls: "sun" },
  { n: 16, label: "issues planted", note: "+16 in the last 30 days", cls: "blush" },
  { n: 15, label: "issues on your plate", note: "none are high priority", cls: "mint" },
  { n: 15, label: "issues resolved", note: "that's all of them", cls: "sky" },
];

const issues = [
  { id: 85, votes: 12, title: "[Desktop] Sidebar rail icons show no hover highlight", type: "Fix", when: "Oct 16", comments: 2 },
  { id: 283, votes: 0, title: "[Feature] Add hover pop-out to DMs and People sidebar", type: "Feat", when: "6 days ago", comments: 1 },
];

const agents = [
  { name: "Gbadebo's Agent", kind: "Open code", seen: "4 days ago" },
  { name: "Gbadebo's Agent", kind: "Open Code", seen: "4 days ago" },
];

function Flower({ pts, i }) {
  const grown = pts >= REQUIRED;
  const h = grown ? 100 : 6 + Math.min(pts / REQUIRED, 1) * 94;
  return (
    <div className="stem-wrap" style={{ "--i": i }}>
      <span className="stem-val">{pts}</span>
      <div className="stem-col">
        <div className={`stem ${grown ? "grown" : "seed"}`} style={{ height: `${h}%` }}>
          {grown ? <span className="bloom" aria-hidden="true">✿</span> : <span className="sprout" aria-hidden="true">·</span>}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="page">
      <div className="cloud c1" aria-hidden="true" />
      <div className="cloud c2" aria-hidden="true" />

      <header className="top">
        <div className="brand"><span className="zmark">Z</span> ziki <span className="team">Zedu</span></div>
        <div className="me"><span className="pts">🏆 514 pts</span><span className="avatar">GW</span></div>
      </header>

      <section className="hero">
        <h1>Welcome back, Gbadebo.<br />The garden is in bloom.</h1>
        <p>One week grew past the 500 line. Seven are still waiting for seeds.</p>
      </section>

      <section className="stats" aria-label="Summary">
        {stats.map((s) => (
          <div key={s.label} className={`sticker ${s.cls}`}>
            <strong>{s.n}</strong>
            <span className="s-label">{s.label}</span>
            <span className="s-note">{s.note}</span>
          </div>
        ))}
      </section>

      <section className="garden" aria-label="Weekly points">
        <h2>Your points garden</h2>
        <p className="sub">A flower opens when a week reaches 500 points.</p>
        <div className="plot">
          <div className="line" style={{ bottom: "calc(2.2rem + 100% * 0)" }}><span>500 pts</span></div>
          {weeks.map((w, i) => <Flower key={w.label} pts={w.pts} i={i} />)}
        </div>
        <div className="labels">{weeks.map((w) => <span key={w.label}>{w.label}</span>)}</div>
      </section>

      <section className="issues">
        <h2>Issues on your plate</h2>
        <ul>
          {issues.map((it) => (
            <li key={it.id} className="ticket">
              <span className="vote">▲ {it.votes}</span>
              <div className="t-main">
                <b>{it.title}</b>
                <small>#{it.id} · {it.comments} {it.comments === 1 ? "comment" : "comments"} · {it.when}</small>
              </div>
              <span className="chip">{it.type}</span>
              <span className="chip medium">Medium</span>
              <span className="chip done">Resolved</span>
            </li>
          ))}
        </ul>
        <p className="foot">Showing 15 issues in total.</p>
      </section>

      <section className="agents">
        <h2>Your agents</h2>
        <div className="nap-row">
          {agents.map((a, i) => (
            <div key={i} className="critter">
              <div className="blob" aria-hidden="true"><i /><i /><b>z</b><b>z</b></div>
              <strong>{a.name}</strong>
              <span>{a.kind} · napping</span>
              <small>Last seen {a.seen}</small>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
