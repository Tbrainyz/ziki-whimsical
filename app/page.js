const weeks = [
  ["7 Sept", 0], ["14 Sept", 0], ["21 Sept", 0], ["28 Sept", 0],
  ["5 Oct", 0], ["12 Oct", 0], ["19 Oct", 514], ["26 Oct", 0],
];

const cards = [
  { title: "Points", value: 514, chip: "500 to go", note: "500 required this week", sparkle: true },
  { title: "Created by me", value: 16, chip: "+16", chipClass: "green", note: "in the last 30 days" },
  { title: "Assigned to me", value: 15, chip: "0", chipClass: "grey", note: "high priority" },
  { title: "Resolved issues", value: 15, chip: "100%", chipClass: "grey", note: "of issues assigned to me" },
];

const issues = [
  { votes: 12, title: "[Desktop] Sidebar rail icons show no hover highlight", id: 85, comments: 2, type: "Fix", when: "Oct 16" },
  { votes: 0, title: "[Feature] Add hover pop-out to DMs and People sidebar", id: 283, comments: 1, type: "Feat", when: "6 days ago" },
];

export default function Dashboard() {
  return (
    <>
      <nav className="nav">
        <div className="nav-l">
          <span className="logo">Z</span><b>ziki</b>
          <span className="sep" /><span>Zedu ▾</span>
          <a>Product</a><a>Marketing</a><a>Security</a>
        </div>
        <div className="nav-r">
          <button className="pill">Agents ▾</button>
          <button className="pill">Gbadebo Wale ▾</button>
          <span className="pts-pill" title="Nice work!">🏆 514 pts</span>
          <span className="bell">🔔<i>25</i></span>
        </div>
      </nav>

      <main className="wrap">
        <header className="welcome">
          <div>
            <h1>Welcome back, Gbadebo <span className="wave" aria-hidden="true">👋</span></h1>
            <p>Issues, votes and your points for Ziki at a glance.</p>
          </div>
          <button className="pill big">+ New issue</button>
        </header>

        <section className="cards">
          {cards.map((c) => (
            <article className="card" key={c.title}>
              <div className="card-top"><h3>{c.title}</h3><span className="arrow">↗</span></div>
              <div className="num">{c.value}</div>
              <div className="card-foot"><span className={`chip ${c.chipClass || "blue"}`}>{c.chip}</span><span>{c.note}</span></div>
            </article>
          ))}
        </section>

        <section className="panel">
          <div className="panel-head">
            <h2>Issues assigned to me <small>15 issues · sorted by top votes</small></h2>
            <button className="pill">View all issues</button>
          </div>
          <div className="thead"><span>VOTES</span><span>ISSUE</span><span>TYPE</span><span>PRIORITY</span><span>STATUS</span><span>STAGE</span><span>REPORTED</span></div>
          {issues.map((i) => (
            <div className="trow" key={i.id}>
              <span className={`vote ${i.votes ? "on" : ""}`}>^ {i.votes}</span>
              <span className="issue"><b>{i.title}</b><small>#{i.id} · {i.comments} {i.comments === 1 ? "comment" : "comments"}</small></span>
              <span>{i.type}</span>
              <span><i className="chip yellow">Medium</i></span>
              <span><i className="chip status"><s />Resolved</i></span>
              <span>—</span>
              <span>{i.when}</span>
            </div>
          ))}
          <p className="showing">Showing 15 issues</p>
        </section>

        <section className="panel">
          <div className="panel-head">
            <div><h2>Your points</h2><p className="muted">Points earned each week, last 8 weeks · 500 pts required, more is welcome</p></div>
            <div className="big-pts"><b>514</b><span>pts in this range</span></div>
          </div>
          <div className="chart">
            {weeks.map(([label, pts], i) => (
              <div className="col" key={label}>
                <span className="val">{pts}</span>
                <div className="track" style={{ "--d": `${i * 70}ms` }}>
                  {pts >= 500 ? (
                    <div className="fill">
                      <span className="flower" aria-hidden="true">
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => <i key={n} style={{ "--n": n }} />)}
                        <b />
                      </span>
                      <span className="leaf l" aria-hidden="true" />
                      <span className="leaf r" aria-hidden="true" />
                    </div>
                  ) : (
                    <span className="seed" aria-hidden="true">🌱</span>
                  )}
                </div>
                <span className="lbl">{label}</span>
              </div>
            ))}
          </div>
          <p className="bloom-note">Your 19 Oct week bloomed. Reach 500 points in a week to grow the next flower.</p>
        </section>

        <section className="panel">
          <div className="panel-head"><h2>Your agents <span className="count">2</span></h2></div>
          <div className="thead agents"><span>AGENT</span><span>STATUS</span><span>CURRENT ACTIVITY</span><span>LAST SEEN</span></div>
          {["Open code", "Open Code"].map((k, i) => (
            <div className="trow agents" key={i}>
              <span><i className="dot" /><b>Gbadebo&apos;s Agent</b> <small>{k}</small></span>
              <span>Offline</span><span>No recent activity</span><span className="mono">4 days ago</span>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
