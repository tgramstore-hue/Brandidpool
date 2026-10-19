"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardShell";
import Link from "next/link";

const userInfo = {
  initials: "AO",
  name: "Adebayo Ogunlesi",
  email: "adebayo@whitestones.ng",
};

const recentApplications = [
  { id: "APP-2026-001", service: "CAC Company Registration", type: "Private Limited", date: "15 Oct 2026", status: "processing", progress: 75, entity: "Whitestones Global Logistics Ltd" },
  { id: "APP-2026-002", service: "NIN Identity Verification", type: "Individual Biometrics", date: "12 Oct 2026", status: "approved", progress: 100, entity: "Adebayo Olumide Ogunlesi" },
  { id: "APP-2026-003", service: "FIRS Corporate Tax TIN", type: "Corporate Tax", date: "10 Oct 2026", status: "pending", progress: 35, entity: "Whitestones Global Logistics Ltd" },
  { id: "APP-2026-004", service: "D-U-N-S Global Identifier", type: "Global Enterprise", date: "08 Oct 2026", status: "approved", progress: 100, entity: "D&B Ref: 55-912-8401" },
  { id: "APP-2026-005", service: "SCUML AML Clearance", type: "Compliance", date: "05 Oct 2026", status: "processing", progress: 60, entity: "Whitestones Global Logistics Ltd" },
];

const activityFeed = [
  { color: "green", title: "NIN Digital Slip Generated", text: "Verified with NIMC biometric server.", time: "2h ago" },
  { color: "blue", title: "CAC Registry Stamp Duties Paid", text: "Ref: CAC/2026/8912 is undergoing review.", time: "5h ago" },
  { color: "orange", title: "Tax Office Declaration Notice", text: "FIRS requested utility bill upload.", time: "1d ago" },
  { color: "green", title: "D-U-N-S Number Issued", text: "Global DUNS code 55-912-8401 assigned.", time: "3d ago" },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedApp, setSelectedApp] = useState(null);

  const filteredApps = activeTab === "all" 
    ? recentApplications 
    : recentApplications.filter(app => app.status === activeTab);

  return (
    <DashboardLayout activeItem="overview" userInfo={userInfo}>
      {/* Crisp Header: No Banners */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <h1 style={{ font: "800 28px var(--display)", margin: 0, color: "var(--text)" }}>
              Welcome back, Adebayo 👋
            </h1>
            <span className="live-indicator">
              <span className="dot"></span>
              Live Sync
            </span>
          </div>
          <p style={{ color: "var(--muted)", margin: 0, fontSize: 14 }}>
            Sunday, 19 October 2026 • Whitestones Wealth Hub • Tier 3 Verified
          </p>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <Link href="/dashboard/documents" className="btn btn-secondary btn-sm" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 14, height: 14 }}>
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Document Vault
          </Link>
          <Link href="/dashboard/services" className="btn btn-primary btn-sm" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 14, height: 14 }}>
              <path d="M12 5v14M5 12h14" />
            </svg>
            Start New Filing
          </Link>
        </div>
      </div>

      {/* 4 Stat Cards Right at the Top */}
      <div className="metrics-grid" style={{ marginBottom: 24 }}>
        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">Active Filings</span>
            <span className="metric-change positive">In Flight</span>
          </div>
          <div className="metric-value">3</div>
          <div className="metric-sub">CAC • FIRS TIN • SCUML</div>
          <div style={{ height: 4, background: "var(--soft)", borderRadius: 2, marginTop: 10, overflow: "hidden" }}>
            <div style={{ width: "65%", height: "100%", background: "var(--blue)" }} />
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">Approved & Ready</span>
            <span className="metric-change positive">✓ Verified</span>
          </div>
          <div className="metric-value" style={{ color: "#059642" }}>2</div>
          <div className="metric-sub">NIN Slip & D-U-N-S Code</div>
          <div style={{ height: 4, background: "var(--soft)", borderRadius: 2, marginTop: 10, overflow: "hidden" }}>
            <div style={{ width: "100%", height: "100%", background: "#059642" }} />
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">Action Required</span>
            <span className="metric-change negative">1 Attention</span>
          </div>
          <div className="metric-value" style={{ color: "var(--orange)" }}>1</div>
          <div className="metric-sub">Director utility bill for TIN</div>
          <div style={{ height: 4, background: "var(--soft)", borderRadius: 2, marginTop: 10, overflow: "hidden" }}>
            <div style={{ width: "35%", height: "100%", background: "var(--orange)" }} />
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">Wallet Balance</span>
            <Link href="/dashboard/billing" style={{ fontSize: 11, color: "var(--blue)", fontWeight: 700 }}>
              Top Up +
            </Link>
          </div>
          <div className="metric-value">₦185,000</div>
          <div className="metric-sub">Pre-loaded for auto checkout</div>
          <div style={{ height: 4, background: "var(--soft)", borderRadius: 2, marginTop: 10, overflow: "hidden" }}>
            <div style={{ width: "85%", height: "100%", background: "var(--navy)" }} />
          </div>
        </div>
      </div>

      {/* Compact Quick Actions Row */}
      <div className="quick-actions" style={{ marginBottom: 24 }}>
        <Link href="/dashboard/services" className="quick-action" style={{ padding: "16px 20px" }}>
          <div className="quick-action-icon" style={{ background: "var(--blue)", width: 38, height: 38, borderRadius: 10 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 18, height: 18 }}>
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
          <div>
            <div className="quick-action-text" style={{ fontSize: 14 }}>Apply for Service</div>
            <div className="quick-action-desc" style={{ fontSize: 12 }}>CAC, NIN, TIN, SCUML, D-U-N-S</div>
          </div>
        </Link>

        <Link href="/dashboard/applications" className="quick-action" style={{ padding: "16px 20px" }}>
          <div className="quick-action-icon" style={{ background: "var(--orange)", width: 38, height: 38, borderRadius: 10 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 18, height: 18 }}>
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4-4" />
            </svg>
          </div>
          <div>
            <div className="quick-action-text" style={{ fontSize: 14 }}>Track Applications</div>
            <div className="quick-action-desc" style={{ fontSize: 12 }}>Live milestones & review queue</div>
          </div>
        </Link>

        <Link href="/dashboard/documents" className="quick-action" style={{ padding: "16px 20px" }}>
          <div className="quick-action-icon" style={{ background: "var(--green)", width: 38, height: 38, borderRadius: 10 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 18, height: 18 }}>
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </div>
          <div>
            <div className="quick-action-text" style={{ fontSize: 14 }}>Document Vault</div>
            <div className="quick-action-desc" style={{ fontSize: 12 }}>Download sealed certificates</div>
          </div>
        </Link>

        <Link href="/dashboard/billing" className="quick-action" style={{ padding: "16px 20px" }}>
          <div className="quick-action-icon" style={{ background: "var(--navy)", width: 38, height: 38, borderRadius: 10 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 18, height: 18 }}>
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
          </div>
          <div>
            <div className="quick-action-text" style={{ fontSize: 14 }}>Billing & Wallet</div>
            <div className="quick-action-desc" style={{ fontSize: 12 }}>Balance: ₦185,000 • Invoices</div>
          </div>
        </Link>
      </div>

      {/* Main Grid: Filings Table & Activity Stream */}
      <div className="dash-columns">
        {/* Table Card */}
        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div>
              <h3 style={{ font: "700 18px var(--display)", margin: 0 }}>Statutory Filings</h3>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: "2px 0 0" }}>Live progress across government portals</p>
            </div>
            <Link href="/dashboard/applications" style={{ fontSize: 13, color: "var(--blue)", fontWeight: 700 }}>
              View All →
            </Link>
          </div>

          <div className="tab-bar">
            {[
              { key: "all", label: "All" },
              { key: "processing", label: "In Review" },
              { key: "approved", label: "Approved" },
              { key: "pending", label: "Action Needed" },
            ].map((tab) => (
              <button
                key={tab.key}
                className={`tab-btn${activeTab === tab.key ? " active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
                <span className="tab-count">
                  {tab.key === "all" ? recentApplications.length : recentApplications.filter(a => a.status === tab.key).length}
                </span>
              </button>
            ))}
          </div>

          <div style={{ overflowX: "auto" }}>
            <table className="app-table">
              <thead>
                <tr>
                  <th>Filing ID</th>
                  <th>Service</th>
                  <th>Entity</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredApps.map((app) => (
                  <tr key={app.id}>
                    <td>
                      <span style={{ fontWeight: 700, fontFamily: "monospace" }}>{app.id}</span>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{app.service}</div>
                      <div style={{ fontSize: 12, color: "var(--muted)" }}>{app.type}</div>
                    </td>
                    <td style={{ fontSize: 13, color: "var(--muted)" }}>{app.entity}</td>
                    <td style={{ color: "var(--muted)", fontSize: 13 }}>{app.date}</td>
                    <td>
                      <span className={`status-badge ${app.status}`}>
                        {app.status === "processing" ? "In Review" :
                         app.status === "approved" ? "Approved" : "Action Needed"}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => setSelectedApp(app)}
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <h3 style={{ font: "700 18px var(--display)", margin: 0 }}>Activity Stream</h3>
            <span className="live-indicator">
              <span className="dot"></span>
              Live
            </span>
          </div>

          <div>
            {activityFeed.map((item, i) => (
              <div key={i} className="activity-item">
                <span className={`activity-dot ${item.color}`}></span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{item.title}</div>
                  <div className="activity-text" style={{ color: "var(--muted)", fontSize: 13, marginTop: 2 }}>{item.text}</div>
                  <div className="activity-time">{item.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 20, paddingTop: 14, borderTop: "1px solid var(--line)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13 }}>
              <span style={{ color: "var(--muted)" }}>Virtual NUBAN: <b>0829148102</b></span>
              <Link href="/dashboard/billing" style={{ color: "var(--blue)", fontWeight: 700 }}>
                Wallet →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {selectedApp && (
        <div className="modal-overlay" onClick={() => setSelectedApp(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className={`status-badge ${selectedApp.status}`} style={{ marginBottom: 4 }}>
                  {selectedApp.status.toUpperCase()}
                </span>
                <h3 style={{ margin: 0 }}>{selectedApp.service}</h3>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>Reference: {selectedApp.id}</div>
              </div>
              <button className="modal-close" onClick={() => setSelectedApp(null)}>×</button>
            </div>
            <div className="modal-body">
              <div style={{ background: "var(--soft)", padding: 14, borderRadius: 10 }}>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>Target Entity:</div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{selectedApp.entity}</div>
                <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>Filing Date: {selectedApp.date}</div>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 4 }}>Current Stage:</div>
                <div style={{ fontSize: 14, lineHeight: 1.5, color: "var(--text)" }}>
                  {selectedApp.status === "approved"
                    ? "✓ Registration verified and sealed by authorities. Document available in Vault."
                    : selectedApp.status === "processing"
                    ? "⏳ Application under review at the registry desk. Name search approved."
                    : "⚠️ Additional director utility verification requested."}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setSelectedApp(null)}>Close</button>
              {selectedApp.status === "approved" ? (
                <Link href="/dashboard/documents" className="btn btn-primary" onClick={() => setSelectedApp(null)}>
                  View in Vault
                </Link>
              ) : (
                <Link href="/dashboard/applications" className="btn btn-primary" onClick={() => setSelectedApp(null)}>
                  Track Application
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
