"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardShell";
import Link from "next/link";

const adminUserInfo = {
  initials: "SA",
  name: "System Admin",
  email: "admin@brandidpool.com",
};

const initialReviews = [
  { id: "APP-2026-001", user: "Adebayo Ogunlesi", service: "CAC Company Registration", entity: "Whitestones Global Logistics Ltd", date: "15 Oct 2026", status: "processing", fee: "₦45,000", agency: "CAC" },
  { id: "APP-2026-003", user: "Chioma Nwosu", service: "FIRS Corporate Tax TIN", entity: "Chioma Nwosu Enterprises", date: "10 Oct 2026", status: "pending", fee: "₦15,000", agency: "FIRS" },
  { id: "APP-2026-005", user: "Tunde Bakare", service: "SCUML AML Compliance", entity: "Bakare Capital Partners", date: "05 Oct 2026", status: "processing", fee: "₦35,000", agency: "EFCC" },
  { id: "APP-2026-007", user: "Ibrahim Musa", service: "NIN Bio-Data Correction", entity: "Ibrahim Musa", date: "18 Oct 2026", status: "pending", fee: "₦5,000", agency: "NIMC" },
];

const monthlyData = [
  { month: "May", filings: 180, volume: "₦18.4M", height: "45%" },
  { month: "Jun", filings: 220, volume: "₦22.1M", height: "55%" },
  { month: "Jul", filings: 310, volume: "₦31.0M", height: "72%" },
  { month: "Aug", filings: 260, volume: "₦26.4M", height: "62%" },
  { month: "Sep", filings: 390, volume: "₦39.2M", height: "88%" },
  { month: "Oct", filings: 448, volume: "₦44.8M", height: "100%" },
];

export default function AdminDashboardPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [selectedReview, setSelectedReview] = useState(null);
  const [filterTab, setFilterTab] = useState("all");
  const [search, setSearch] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  const handleApprove = (id) => {
    setReviews(reviews.map(r => r.id === id ? { ...r, status: "approved" } : r));
    showToast(`Application ${id} APPROVED and electronic seal minted!`);
    setSelectedReview(null);
  };

  const handleReject = (id) => {
    setReviews(reviews.map(r => r.id === id ? { ...r, status: "rejected" } : r));
    showToast(`Notice of objection recorded for ${id}.`);
    setSelectedReview(null);
  };

  const filteredReviews = reviews.filter((r) => {
    const matchesTab = filterTab === "all" || r.status === filterTab;
    const matchesSearch =
      r.id.toLowerCase().includes(search.toLowerCase()) ||
      r.user.toLowerCase().includes(search.toLowerCase()) ||
      r.entity.toLowerCase().includes(search.toLowerCase()) ||
      r.service.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <DashboardLayout activeItem="overview" isAdmin={true} userInfo={adminUserInfo}>
      {/* Crisp Header: No Banners */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <h1 style={{ font: "800 28px var(--display)", margin: 0, color: "var(--text)" }}>
              Admin Overview
            </h1>
            <span className="admin-badge">Console</span>
            <span className="live-indicator">
              <span className="dot"></span>
              Gateways Connected
            </span>
          </div>
          <p style={{ color: "var(--muted)", margin: 0, fontSize: 14 }}>
            Registry throughput, customer filings queue, and real-time portal telemetry.
          </p>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <Link href="/admin/dashboard/users" className="btn btn-secondary btn-sm">
            Users Roster
          </Link>
          <Link href="/admin/dashboard/applications" className="btn btn-primary btn-sm">
            Review Queue ({reviews.filter(r => r.status !== 'approved').length})
          </Link>
        </div>
      </div>

      {/* Compact Horizontal Metric Cards */}
      <div className="metrics-row-compact">
        <div className="metric-card-compact">
          <div className="m-label">
            <span>Customers</span>
            <span className="metric-change positive" style={{ fontSize: 10, padding: "2px 6px" }}>+14%</span>
          </div>
          <div className="m-val">1,428</div>
          <div className="m-sub">98.2% KYC verified</div>
        </div>

        <div className="metric-card-compact">
          <div className="m-label">
            <span>Review Queue</span>
            <span className="metric-change negative" style={{ fontSize: 10, padding: "2px 6px" }}>
              {reviews.filter(r => r.status !== 'approved').length} Active
            </span>
          </div>
          <div className="m-val" style={{ color: "var(--orange)" }}>
            {reviews.filter(r => r.status !== 'approved').length}
          </div>
          <div className="m-sub">Avg resolution: 3.2h</div>
        </div>

        <div className="metric-card-compact">
          <div className="m-label">
            <span>Monthly Revenue</span>
            <span className="metric-change positive" style={{ fontSize: 10, padding: "2px 6px" }}>+28%</span>
          </div>
          <div className="m-val">₦44.8M</div>
          <div className="m-sub">October 2026 total</div>
        </div>

        <div className="metric-card-compact">
          <div className="m-label">
            <span>API Gateways</span>
            <span className="live-indicator" style={{ fontSize: 10, padding: "2px 6px" }}>
              <span className="dot"></span>Live
            </span>
          </div>
          <div className="m-val" style={{ color: "#059642" }}>99.98%</div>
          <div className="m-sub">CAC • NIMC • FIRS</div>
        </div>
      </div>

      {/* 2-Column: Chart & Service Share */}
      <div className="dash-columns" style={{ marginBottom: 24 }}>
        {/* Interactive Volume Chart */}
        <div className="chart-container-premium">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div>
              <h3 style={{ font: "700 18px var(--display)", margin: 0 }}>Statutory Filings Trend</h3>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: "2px 0 0" }}>Hover over any bar to view monthly revenue</p>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--blue)" }}>448 Filings in Oct</span>
          </div>

          <div className="interactive-bar-group">
            {monthlyData.map((d) => (
              <div key={d.month} className="bar-column">
                <div className="bar-tooltip">
                  {d.filings} filings • {d.volume}
                </div>
                <div
                  className="bar-fill"
                  style={{
                    height: d.height,
                    background: d.month === "Oct" ? "var(--blue)" : "var(--soft)",
                    border: d.month === "Oct" ? "none" : "1px solid var(--line)",
                  }}
                />
                <span style={{ fontSize: 12, fontWeight: 700, marginTop: 8, color: d.month === "Oct" ? "var(--blue)" : "var(--muted)" }}>
                  {d.month}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14, fontSize: 12, color: "var(--muted)" }}>
            <span>Growth: +148% over 6 months</span>
            <span>Target: ₦50M/month</span>
          </div>
        </div>

        {/* Service Share Distribution */}
        <div className="card">
          <h3 style={{ font: "700 18px var(--display)", marginBottom: 14 }}>Service Volume Breakdown</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
                <span style={{ fontWeight: 600 }}>CAC Corporate Filings</span>
                <span style={{ fontWeight: 700 }}>42%</span>
              </div>
              <div style={{ height: 8, background: "var(--soft)", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ width: "42%", height: "100%", background: "var(--blue)" }} />
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
                <span style={{ fontWeight: 600 }}>NIN / Identity Verifications</span>
                <span style={{ fontWeight: 700 }}>28%</span>
              </div>
              <div style={{ height: 8, background: "var(--soft)", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ width: "28%", height: "100%", background: "var(--green)" }} />
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
                <span style={{ fontWeight: 600 }}>D-U-N-S Global Identifiers</span>
                <span style={{ fontWeight: 700 }}>18%</span>
              </div>
              <div style={{ height: 8, background: "var(--soft)", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ width: "18%", height: "100%", background: "var(--navy)" }} />
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
                <span style={{ fontWeight: 600 }}>SCUML & FIRS TIN</span>
                <span style={{ fontWeight: 700 }}>12%</span>
              </div>
              <div style={{ height: 8, background: "var(--soft)", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ width: "12%", height: "100%", background: "var(--orange)" }} />
              </div>
            </div>
          </div>

          <div style={{ marginTop: 20, paddingTop: 14, borderTop: "1px solid var(--line)" }}>
            <Link href="/admin/dashboard/services" style={{ fontSize: 13, color: "var(--blue)", fontWeight: 700 }}>
              Manage Service Pricing & Fees →
            </Link>
          </div>
        </div>
      </div>

      {/* Actionable Review Queue */}
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 12 }}>
          <div>
            <h3 style={{ font: "700 18px var(--display)", margin: 0 }}>Review Queue</h3>
            <p style={{ fontSize: 13, color: "var(--muted)", margin: "2px 0 0" }}>Inspect and approve customer registry filings</p>
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <div className="search-box" style={{ minWidth: 180, padding: "6px 12px" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 14, height: 14 }}>
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4-4" />
              </svg>
              <input
                type="text"
                placeholder="Search queue…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ fontSize: 13 }}
              />
            </div>
            <div className="tab-bar" style={{ margin: 0, border: "none" }}>
              {[
                { key: "all", label: "All" },
                { key: "processing", label: "In Review" },
                { key: "pending", label: "Action Needed" },
                { key: "approved", label: "Approved" },
              ].map((t) => (
                <button
                  key={t.key}
                  className={`tab-btn${filterTab === t.key ? " active" : ""}`}
                  onClick={() => setFilterTab(t.key)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View Table */}
        <div className="desktop-table-view" style={{ overflowX: "auto" }}>
          <table className="app-table">
            <thead>
              <tr>
                <th>Reference ID</th>
                <th>Applicant Contact</th>
                <th>Filing Service</th>
                <th>Target Entity</th>
                <th>Fee</th>
                <th>Status</th>
                <th>Decisions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReviews.map((r) => (
                <tr key={r.id}>
                  <td>
                    <span style={{ fontWeight: 700, fontFamily: "monospace", color: "var(--text)" }}>{r.id}</span>
                    <div style={{ fontSize: 11, color: "var(--muted)" }}>{r.date}</div>
                  </td>
                  <td>
                    <div style={{ fontWeight: 600 }}>{r.user}</div>
                  </td>
                  <td>
                    <div style={{ fontWeight: 500 }}>{r.service}</div>
                    <div style={{ fontSize: 11, color: "var(--blue)" }}>{r.agency}</div>
                  </td>
                  <td style={{ color: "var(--muted)", fontSize: 13 }}>{r.entity}</td>
                  <td>
                    <span style={{ fontWeight: 700 }}>{r.fee}</span>
                  </td>
                  <td>
                    <span className={`status-badge ${r.status}`}>
                      {r.status === "processing" ? "In Review" :
                       r.status === "approved" ? "Approved" : "Action Needed"}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: 6 }}>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => setSelectedReview(r)}
                      >
                        Inspect
                      </button>
                      {r.status !== "approved" && (
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => handleApprove(r.id)}
                        >
                          Approve
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View Card List (No zooming needed) */}
        <div className="mobile-card-list">
          {filteredReviews.map((r) => (
            <div key={r.id} className="mobile-filing-card" onClick={() => setSelectedReview(r)} style={{ cursor: "pointer" }}>
              <div style={{ flex: 1, minWidth: 0, paddingRight: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                  <span style={{ fontWeight: 700, fontFamily: "monospace", fontSize: 12, color: "var(--text)" }}>{r.id}</span>
                  <span className={`status-badge ${r.status}`} style={{ fontSize: 10, padding: "2px 6px" }}>
                    {r.status === "processing" ? "In Review" : r.status === "approved" ? "Approved" : "Action"}
                  </span>
                </div>
                <div style={{ fontWeight: 600, fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {r.entity}
                </div>
                <div style={{ fontSize: 11, color: "var(--muted)", display: "flex", gap: 8 }}>
                  <span>{r.service}</span>
                  <span>•</span>
                  <span>{r.fee}</span>
                </div>
              </div>
              <button
                className="btn btn-secondary btn-sm"
                style={{ height: 30, fontSize: 11, padding: "0 10px", flex: "none" }}
                onClick={(e) => { e.stopPropagation(); setSelectedReview(r); }}
              >
                Inspect
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Review Dossier Modal */}
      {selectedReview && (
        <div className="modal-overlay" onClick={() => setSelectedReview(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Admin Review: {selectedReview.id}</h3>
              <button className="modal-close" onClick={() => setSelectedReview(null)}>×</button>
            </div>
            <div className="modal-body">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h4 style={{ margin: 0, font: "700 18px var(--display)" }}>{selectedReview.service}</h4>
                  <p style={{ color: "var(--muted)", fontSize: 13, margin: "4px 0 0" }}>Applicant: {selectedReview.user}</p>
                </div>
                <span className={`status-badge ${selectedReview.status}`}>{selectedReview.status.toUpperCase()}</span>
              </div>

              <div style={{ background: "var(--soft)", padding: 16, borderRadius: 12 }}>
                <div style={{ fontSize: 13, lineHeight: 1.6 }}>
                  <div><b>Subject Entity:</b> {selectedReview.entity}</div>
                  <div><b>Filing Fee Remittance:</b> {selectedReview.fee} (Cleared via Paystack)</div>
                  <div><b>Registry API Sync:</b> Connected to {selectedReview.agency} Gateway Node #04</div>
                </div>
              </div>

              <div style={{ fontSize: 13, color: "var(--muted)" }}>
                Clicking <b>Approve & Seal</b> marks this application complete, mints the cryptographic certificate, and delivers the PDF to the user's Document Vault.
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-danger"
                onClick={() => handleReject(selectedReview.id)}
              >
                Flag / Reject
              </button>
              <button
                className="btn btn-success"
                onClick={() => handleApprove(selectedReview.id)}
              >
                Approve & Seal Certificate
              </button>
            </div>
          </div>
        </div>
      )}

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
