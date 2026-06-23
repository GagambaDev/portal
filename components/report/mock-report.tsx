import * as React from 'react';

export const BUILDING_NAME = 'The Cosmopolitan';

const CRITICAL_ITEMS = [
  { location: 'Floor 12', panel: 'Panel 6',  status: 'Critical', bg: '#F7D2D0', fg: '#B23B36', action: 'Inspect ≤48h' },
  { location: 'Floor 8',  panel: 'Panel 2',  status: 'Crack',    bg: '#E4DCF4', fg: '#5B3FD4', action: 'Sealant review' },
  { location: 'Floor 8',  panel: 'Panel 4',  status: 'Crack',    bg: '#E4DCF4', fg: '#5B3FD4', action: 'Sealant review' },
  { location: 'Floor 8',  panel: 'Panel 10', status: 'Crack',    bg: '#E4DCF4', fg: '#5B3FD4', action: 'Sealant review' },
  { location: 'Floor 7',  panel: 'Panel 10', status: 'Crack',    bg: '#E4DCF4', fg: '#5B3FD4', action: 'Sealant review' },
  { location: 'Floor 4',  panel: 'Panel 3',  status: 'Crack',    bg: '#E4DCF4', fg: '#5B3FD4', action: 'Sealant review' },
];

const FLOOR_DATA = [
  { floor: 'Floor 18', findings: '1 panel flagged' },
  { floor: 'Floor 17', findings: '1 panel flagged' },
  { floor: 'Floor 16', findings: '2 panels flagged' },
  { floor: 'Floor 15', findings: '3 panels flagged' },
  { floor: 'Floor 14', findings: '1 panel flagged' },
  { floor: 'Floor 13', findings: '1 panel flagged' },
  { floor: 'Floor 12', findings: '4 panels flagged' },
  { floor: 'Floor 11', findings: '5 panels flagged' },
  { floor: 'Floor 10', findings: '2 panels flagged' },
  { floor: 'Floor 9',  findings: '2 panels flagged' },
  { floor: 'Floor 8',  findings: '5 panels flagged' },
  { floor: 'Floor 7',  findings: '3 panels flagged' },
  { floor: 'Floor 6',  findings: '2 panels flagged' },
  { floor: 'Floor 4',  findings: '2 panels flagged' },
  { floor: 'Floor 3',  findings: '1 panel flagged' },
  { floor: 'Floor 2',  findings: '3 panels flagged' },
  { floor: 'Floor 1',  findings: '3 panels flagged' },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid #e4e4e7' }}>
      <div style={{ color: '#3730a3', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>
        {title}
      </div>
      {children}
    </div>
  );
}

function StatCard({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div style={{ border: '1px solid #e4e4e7', borderRadius: 8, padding: '16px 12px', textAlign: 'center' }}>
      <div style={{ color, fontSize: 28, fontWeight: 700, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#71717a', marginTop: 6 }}>{label}</div>
    </div>
  );
}

function ReportTable({ head, rows }: { head: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
      <thead>
        <tr>
          {head.map((h) => (
            <th key={h} style={{ textAlign: 'left', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#a1a1aa', paddingBottom: 8, borderBottom: '1px solid #e4e4e7' }}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} style={{ padding: '9px 0', borderBottom: '1px solid #f4f4f5', color: '#3f3f46' }}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const MockReport = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
    style={{ width: 794, backgroundColor: '#ffffff', padding: '48px 56px', fontFamily: 'ui-sans-serif, system-ui, sans-serif', color: '#18181b', boxSizing: 'border-box' }}
  >
    {/* Top bar */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: 24, borderBottom: '1px solid #e4e4e7', marginBottom: 28 }}>
      <div style={{ color: '#3730a3', fontWeight: 800, fontSize: 22, letterSpacing: '0.06em' }}>GAGAMBA</div>
      <div style={{ textAlign: 'right', fontSize: 12, color: '#71717a', lineHeight: 1.6 }}>
        <div style={{ fontWeight: 600, color: '#3f3f46' }}>POST-FLIGHT REPORT</div>
        <div>Apr 09, 2026 · 05:51 AM</div>
        <div>Prepared for Building Manager</div>
      </div>
    </div>

    {/* Building name */}
    <h1 style={{ fontSize: 36, fontWeight: 800, margin: '0 0 6px' }}>{BUILDING_NAME}</h1>
    <p style={{ fontSize: 13, color: '#71717a', margin: '0 0 4px' }}>West Residences · West Facade · Autonomous facade health audit</p>

    {/* Executive summary */}
    <Section title="Executive Summary">
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 18 }}>
        <div style={{ fontSize: 64, fontWeight: 800, color: '#3730a3', lineHeight: 1 }}>
          89<span style={{ fontSize: 20, color: '#8C88A8' }}>/100</span>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 15 }}>Good Standing</div>
          <div style={{ fontSize: 13, color: '#71717a', marginTop: 4 }}>180 panels scanned · 1 critical · 24 need cleaning</div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
        <StatCard value="139" label="Clean"    color="#2E7D32" />
        <StatCard value="24"  label="Dirty"    color="#9A5E16" />
        <StatCard value="1"   label="Critical" color="#B23B36" />
        <StatCard value="5"   label="Crack"    color="#5B3FD4" />
      </div>
    </Section>

    {/* Critical items */}
    <Section title="Critical &amp; Structural Items">
      <ReportTable
        head={['Location', 'Panel', 'Status', 'Recommended Action']}
        rows={CRITICAL_ITEMS.map((r) => [
          r.location,
          r.panel,
          <span key="tag" style={{ background: r.bg, color: r.fg, padding: '2px 8px', borderRadius: 4, fontSize: 12, fontWeight: 500 }}>{r.status}</span>,
          r.action,
        ])}
      />
    </Section>

    {/* Floor breakdown */}
    <Section title="Floor-by-Floor Breakdown">
      <ReportTable
        head={['Floor', 'Findings']}
        rows={FLOOR_DATA.map((r) => [r.floor, r.findings])}
      />
    </Section>

    {/* Sustainability */}
    <Section title="Sustainability Metrics">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
        <StatCard value="7.8L" label="Water used"       color="#246FA8" />
        <StatCard value="30×"  label="vs pressure-wash" color="#246FA8" />
        <StatCard value="0"    label="Crew at height"   color="#2E7D32" />
        <StatCard value="100%" label="Coverage"         color="#2E7D32" />
      </div>
    </Section>

    {/* Footer */}
    <div style={{ marginTop: 40, paddingTop: 16, borderTop: '1px solid #e4e4e7', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#a1a1aa' }}>
      <span>Gagamba · Autonomous facade care</span>
      <span>gagamba.co · Confidential</span>
    </div>
  </div>
));

MockReport.displayName = 'MockReport';

export { MockReport };
