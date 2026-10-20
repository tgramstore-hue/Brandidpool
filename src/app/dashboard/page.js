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
  { id: "APP-2026-001", service: "CAC Company Registration", type: "Private Limited", date: "15 Oct 2026", status: "processing", entity: "Whitestones Global Logistics Ltd" },
  { id: "APP-2026-002", service: "NIN Identity Verification", type: "Individual Biometrics", date: "12 Oct 2026", status: "approved", entity: "Adebayo Olumide Ogunlesi" },
  { id: "APP-2026-003", service: "FIRS Corporate Tax TIN", type: "Corporate Tax", date: "10 Oct 2026", status: "pending", entity: "Whitestones Global Logistics Ltd" },
  { id: "APP-2026-004", service: "D-U-N-S Global Identifier", type: "Global Enterprise", date: "08 Oct 2026", status: "approved", entity: "D&B Ref: 55-912-8401" },
  { id: "APP-2026-005", service: "SCUML AML Clearance", type: "Compliance", date: "05 Oct 2026", status: "processing", entity: "Whitestones Global Logistics Ltd" },
];

const activityFeed = [
  { color: "green", title: "NIN Digital Slip Generated", time: "2h ago" },
  { color: "blue", title: "CAC Registry Stamp Duties Paid", time: "5h ago" },
  { color: "orange", title: "Tax Office Declaration Notice", time: "1d ago" },
  { color: "green", title: "D-U-N-S Number Issued", time: "3d ago" },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedApp, setSelectedApp] = useState(null);

  const filteredApps = activeTab === "all" 
    ? recentApplications 
    : recentApplications.filter(app => app.status === activeTab);

  return (
    <DashboardLayout activeItem="overview" userInfo={userInfo}>
      {/* Clean Header: No buttons, no banners */}
      <div style={{ marginBottom: 18 }}>
        <h1 style={{ font: "700 22px var(--display)", margin: 0, color: "var(--text)" }}>
          Welcome, Adebayo 👋
        </h1>
        <p style={{ color: "var(--muted)", margin: "2px 0 0", fontSize: 13 }}>
          Whitestones Global Logistics Ltd • Tier 3 Verified
        </p>
      </div>

      {/* Horizontal Compact Cards for Desktop & Mobile */}
      <div className="metrics-row-compact">
        <div className="metric-card-compact">
          <div className="m-label">
            <span>Active Filings</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: "var(--blue)" }}>In Flight</span>
          </div>
          <div className="m-val">3</div>
          <div className="m-sub">CAC • TIN • SCUML</div>
        </div>

        <div className="metric-card-compact">
          <div className="m-label">
            <span>Approved</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#059642" }}>✓ Ready</span>
          </div>
          <div className="m-val" style={{ color: "#059642" }}>2</div>
          <div className="m-sub">NIN & D-U-N-S</div>
        </div>

        <div className="metric-card-compact">
          <div className="m-label">
            <span>Action Required</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: "var(--orange)" }}>1 Notice</span>
          </div>
          <div className="m-val" style={{ color: "var(--orange)" }}>1</div>
          <div className="m-sub">TIN document upload</div>
        </div>

        <div className="metric-card-compact">
          <div className="m-label">
            <span>Wallet</span>
            <Link href="/dashboard/billing" style={{ fontSize: 10, color: "var(--blue)", fontWeight: 700 }}>
              Top Up +
            </Link>
          </div>
          <div className="m-val">₦185,000</div>
          <div className="m-sub">Available balance</div>
        </div>
      </div>

      {/* Quick Nav Row */}
      <div className="quick-actions" style={{ marginBottom: 20 }}>
        <Link href="/dashboard/services" className="quick-action" style={{ padding: "12px 14px" }}>
          <div className="quick-action-icon" style={{ background: "var(--navy)", width: 34, height: 34, borderRadius: 8 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 16, height: 16 }}>
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
          <div>
            <div className="quick-action-text" style={{ fontSize: 13 }}>Services Catalog</div>
            <div className="quick-action-desc" style={{ fontSize: 11 }}>CAC, NIN, TIN, D-U-N-S</div>
          </div>
        </Link>

        <Link href="/dashboard/applications" className="quick-action" style={{ padding: "12px 14px" }}>
          <div className="quick-action-icon" style={{ background: "var(--orange)", width: 34, height: 34, borderRadius: 8 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 16, height: 16 }}>
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4-4" />
            </svg>
          </div>
          <div>
            <div className="quick-action-text" style={{ fontSize: 13 }}>Applications Tracker</div>
            <div className="quick-action-desc" style={{ fontSize: 11 }}>Review progress & status</div>
          </div>
        </Link>

        <Link href="/dashboard/documents" className="quick-action" style={{ padding: "12px 14px" }}>
          <div className="quick-action-icon" style={{ background: "var(--green)", width: 34, height: 34, borderRadius: 8 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 16, height: 16 }}>
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </div>
          <div>
            <div className="quick-action-text" style={{ fontSize: 13 }}>Document Vault</div>
            <div className="quick-action-desc" style={{ fontSize: 11 }}>Download verified files</div>
          </div>
        </Link>

        <Link href="/dashboard/billing" className="quick-action" style={{ padding: "12px 14px" }}>
          <div className="quick-action-icon" style={{ background: "var(--blue)", width: 34, height: 34, borderRadius: 8 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 16, height: 16 }}>
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
          </div>
          <div>
            <div className="quick-action-text" style={{ fontSize: 13 }}>Wallet & Billing</div>
            <div className="quick-action-desc" style={{ fontSize: 11 }}>Balance & receipts</div>
          </div>
        </Link>
      </div>

      {/* Main Grid: Filings & Timeline */}
      <div className="dash-columns">
        {/* Filings Card */}
        <div className="card" style={{ padding: "16px 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <h3 style={{ font: "700 16px var(--display)", margin: 0 }}>Statutory Filings</h3>
            <Link href="/dashboard/applications" style={{ fontSize: 12, color: "var(--dot)", fontWeight: 600 }}>
              View all →
            </Link>
          </div>

          <div className="tab-bar">
            {[
              { key: "all", label: "All" },
              { key: "processing", label: "In Review" },
              { key: "approved", label: "Approved" },
              { key: "pending", label: "Action" },
            ].map((tab) => (
              <button
                key={tab.key}
                className={`tab-btn${activeTab === tab.key ? " active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Desktop Table */}
          <div className="desktop-table-view" style={{ overflowX: "auto" }}>
            <table className="app-table">
              <thead>
                <tr>
                  <th>Filing ID</th>
                  <th>Service</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredApps.map((app) => (
                  <tr key={app.id}>
                    <td>
                      <span style={{ fontWeight: 600, fontFamily: "monospace", fontSize: 13 }}>{app.id}</span>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600, fontSize: 13 }}>{app.service}</div>
                      <div style={{ fontSize: 11, color: "var(--muted)" }}>{app.entity}</div>
                    </td>
                    <td style={{ color: "var(--muted)", fontSize: 12 }}>{app.date}</td>
                    <td>
                      <span className={`status-badge ${app.status}`} style={{ fontSize: 11, padding: "2px 8px" }}>
                        {app.status === "processing" ? "In Review" :
                         app.status === "approved" ? "Approved" : "Action"}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-secondary btn-sm"
                        style={{ padding: "4px 10px", fontSize: 12 }}
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

          {/* Mobile Card List (No Zooming Needed!) */}
          <div>
            {filteredApps.map((app) => (
              <div key={`m-${app.id}`} className="mobile-filing-card">
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{app.service}</div>
                  <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>
                    {app.id} • {app.date}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span className={`status-badge ${app.status}`} style={{ fontSize: 11, padding: "2px 8px" }}>
                    {app.status === "processing" ? "Review" :
                     app.status === "approved" ? "Approved" : "Action"}
                  </span>
                  <button
                    className="btn btn-secondary btn-sm"
                    style={{ padding: "4px 8px", fontSize: 11 }}
                    onClick={() => setSelectedApp(app)}
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Stream */}
        <div className="card" style={{ padding: "16px 20px" }}>
          <h3 style={{ font: "700 16px var(--display)", margin: "0 0 12px" }}>Activity Timeline</h3>

          <div>
            {activityFeed.map((item, i) => (
              <div key={i} className="pro-feed-item">
                <span className={`pro-feed-dot ${item.color}`}></span>
                <div>
                  <div className="pro-feed-title">{item.title}</div>
                  <div className="pro-feed-time">{item.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16, paddingTop: 12, borderTop: "1px solid var(--line)", fontSize: 12, color: "var(--muted)" }}>
            NUBAN: <b>0829148102</b> (Wema Bank)
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {selectedApp && (
        <div className="modal-overlay" onClick={() => setSelectedApp(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className={`status-badge ${selectedApp.status}`} style={{ marginBottom: 4, fontSize: 11 }}>
                  {selectedApp.status.toUpperCase()}
                </span>
                <h3 style={{ margin: 0, fontSize: 18 }}>{selectedApp.service}</h3>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>Reference: {selectedApp.id}</div>
              </div>
              <button className="modal-close" onClick={() => setSelectedApp(null)}>×</button>
            </div>
            <div className="modal-body">
              <div style={{ background: "var(--soft)", padding: 12, borderRadius: 10 }}>
                <div style={{ fontSize: 11, color: "var(--muted)" }}>Target Entity:</div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{selectedApp.entity}</div>
                <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>Date: {selectedApp.date}</div>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 4 }}>Status Note:</div>
                <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>
                  {selectedApp.status === "approved"
                    ? "Application verified and approved by the registry authorities. Official certificate is available in your Document Vault."
                    : selectedApp.status === "processing"
                    ? "Currently undergoing verification at the registry desk."
                    : "Action required: Additional documentation requested for tax clearance."}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary btn-sm" onClick={() => setSelectedApp(null)}>Close</button>
              {selectedApp.status === "approved" ? (
                <Link href="/dashboard/documents" className="btn btn-primary btn-sm" onClick={() => setSelectedApp(null)}>
                  Document Vault
                </Link>
              ) : (
                <Link href="/dashboard/applications" className="btn btn-primary btn-sm" onClick={() => setSelectedApp(null)}>
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
