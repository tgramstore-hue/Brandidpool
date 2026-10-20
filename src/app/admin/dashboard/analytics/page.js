"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardShell";

export default function AdminAnalyticsPage() {
  const [period, setPeriod] = useState("oct2026");
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  const handleExportCSV = () => {
    showToast("Exporting comprehensive registry report (CSV) for download...");
  };

  return (
    <DashboardLayout activeItem="analytics" isAdmin={true}>
      {/* Page Title */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
        <div>
          <h1 style={{ font: "800 28px var(--display)", margin: 0 }}>Analytics & Performance Intelligence</h1>
          <p style={{ color: "var(--muted)", margin: "4px 0 0" }}>Financial throughput, regulatory approval rates, and processing velocity metrics.</p>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <select
            className="filter-select"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option value="oct2026">This Month (October 2026)</option>
            <option value="q32026">Q3 2026 (Jul - Sep)</option>
            <option value="ytd2026">Full Year 2026 YTD</option>
          </select>
          <button className="btn btn-outline" onClick={handleExportCSV}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 16, height: 16 }}>
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Export CSV
          </button>
        </div>
      </div>

      {/* Compact Horizontal Metric Cards */}
      <div className="metrics-row-compact">
        <div className="metric-card-compact">
          <div className="m-label">
            <span>Fee Collections</span>
            <span className="metric-change positive" style={{ fontSize: 10, padding: "2px 6px" }}>+24%</span>
          </div>
          <div className="m-val">₦42.8M</div>
          <div className="m-sub">Net revenue collections</div>
        </div>

        <div className="metric-card-compact">
          <div className="m-label">
            <span>Total Filings</span>
            <span className="metric-change positive" style={{ fontSize: 10, padding: "2px 6px" }}>94.6% appv</span>
          </div>
          <div className="m-val">3,420</div>
          <div className="m-sub">Registry approval rate</div>
        </div>

        <div className="metric-card-compact">
          <div className="m-label">
            <span>Processing SLA</span>
            <span className="metric-change positive" style={{ fontSize: 10, padding: "2px 6px" }}>-35% fast</span>
          </div>
          <div className="m-val">2.1 Days</div>
          <div className="m-sub">Across 5 boards</div>
        </div>

        <div className="metric-card-compact">
          <div className="m-label">
            <span>User Retention</span>
            <span className="metric-change positive" style={{ fontSize: 10, padding: "2px 6px" }}>High</span>
          </div>
          <div className="m-val">88.4%</div>
          <div className="m-sub">Repeat corporate users</div>
        </div>
      </div>

      {/* Charts & Breakdown */}
      <div className="dash-columns" style={{ marginBottom: 28 }}>
        {/* Weekly Revenue Trend */}
        <div className="card">
          <h3 style={{ font: "700 18px var(--display)", marginBottom: 16 }}>Weekly Revenue Inflow (₦ Millions)</h3>
          <div className="overview-chart">
            {[
              { week: "Week 1", val: "₦8.4M", height: "65%" },
              { week: "Week 2", val: "₦11.2M", height: "85%" },
              { week: "Week 3", val: "₦9.8M", height: "75%" },
              { week: "Week 4", val: "₦13.4M", height: "100%" },
            ].map((col) => (
              <div key={col.week} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flex: 1 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "var(--blue)" }}>{col.val}</span>
                <div className="chart-bar blue" style={{ height: col.height }} />
                <span style={{ fontSize: 13, fontWeight: 600 }}>{col.week}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Industry Sectors */}
        <div className="card">
          <h3 style={{ font: "700 18px var(--display)", marginBottom: 16 }}>Filings by Industry Sector</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { sector: "Freight & Transport Logistics", pct: 36, color: "var(--blue)" },
              { sector: "Financial Services & Crypto Asset Consulting", pct: 24, color: "var(--green)" },
              { sector: "Agro-allied & Food Processing", pct: 18, color: "var(--orange)" },
              { sector: "Software & IT Consultancies", pct: 14, color: "var(--navy)" },
              { sector: "Real Estate & Construction", pct: 8, color: "#8B5CF6" },
            ].map((item) => (
              <div key={item.sector}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
                  <span style={{ fontWeight: 600 }}>{item.sector}</span>
                  <span style={{ fontWeight: 700 }}>{item.pct}%</span>
                </div>
                <div style={{ height: 8, background: "var(--soft)", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ width: `${item.pct}%`, height: "100%", background: item.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Revenue Matrix */}
      <div className="card">
        <h3 style={{ font: "700 18px var(--display)", marginBottom: 16 }}>Agency Revenue & Volume Matrix</h3>
        <div style={{ overflowX: "auto" }}>
          <table className="app-table">
            <thead>
              <tr>
                <th>Statutory Agency</th>
                <th>Filings Handled</th>
                <th>Gross Collections</th>
                <th>Rejection Rate</th>
                <th>Average Completion Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>Corporate Affairs Commission (CAC)</b></td>
                <td>1,420</td>
                <td>₦18,250,000</td>
                <td><span style={{ color: "#059642", fontWeight: 600 }}>3.2%</span></td>
                <td>3.8 days</td>
              </tr>
              <tr>
                <td><b>National Identity Management Comm. (NIMC)</b></td>
                <td>1,120</td>
                <td>₦5,600,000</td>
                <td><span style={{ color: "#059642", fontWeight: 600 }}>1.1%</span></td>
                <td>2.4 hours</td>
              </tr>
              <tr>
                <td><b>Dun & Bradstreet USA (D-U-N-S)</b></td>
                <td>184</td>
                <td>₦12,480,000</td>
                <td><span style={{ color: "#D97706", fontWeight: 600 }}>4.8%</span></td>
                <td>4.5 days</td>
              </tr>
              <tr>
                <td><b>Special Control Unit Against Money Laundering (SCUML)</b></td>
                <td>215</td>
                <td>₦4,720,000</td>
                <td><span style={{ color: "#D97706", fontWeight: 600 }}>6.5%</span></td>
                <td>5.2 days</td>
              </tr>
              <tr>
                <td><b>Federal Inland Revenue Service (TIN)</b></td>
                <td>481</td>
                <td>₦1,800,000</td>
                <td><span style={{ color: "#059642", fontWeight: 600 }}>2.4%</span></td>
                <td>1.6 days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Toast */}
      {toastMessage && (
        <div className="toast-bar">
          <svg viewBox="0 0 24 24" fill="none" stroke="#059642" strokeWidth="2" strokeLinecap="round" style={{ width: 20, height: 20 }}>
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          {toastMessage}
        </div>
      )}
    </DashboardLayout>
  );
}
