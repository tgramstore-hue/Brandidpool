"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardShell";

const initialAdminApps = [
  {
    id: "APP-2026-001",
    applicant: "Adebayo Ogunlesi",
    email: "adebayo@whitestones.ng",
    phone: "+234 803 291 0491",
    service: "CAC Company Registration",
    entity: "Whitestones Global Logistics Ltd",
    date: "15 Oct 2026",
    status: "processing",
    fee: "₦45,000",
    docsCount: 3,
    agency: "Corporate Affairs Commission",
    details: "Proposed Directors: Adebayo Ogunlesi (1,000,000 shares), Kemi Ogunlesi (500,000 shares). Share Capital: ₦1,500,000.",
  },
  {
    id: "APP-2026-002",
    applicant: "Chukwuma Eze",
    email: "chukwuma@ezehaulage.com",
    phone: "+234 802 811 9022",
    service: "NIN Verification & Slip",
    entity: "Chukwuma Eze",
    date: "12 Oct 2026",
    status: "approved",
    fee: "₦5,000",
    docsCount: 1,
    agency: "NIMC",
    details: "11-digit NIN: 55910294812 matched against biometric database successfully. Premium PVC digital rendering produced.",
  },
  {
    id: "APP-2026-003",
    applicant: "Chioma Nwosu",
    email: "chioma@nwosufarms.ng",
    phone: "+234 814 550 1823",
    service: "FIRS Tax Identification (TIN)",
    entity: "Chioma Nwosu Enterprises",
    date: "10 Oct 2026",
    status: "pending",
    fee: "₦15,000",
    docsCount: 2,
    agency: "Federal Inland Revenue Service",
    details: "Requires Director utility bill verification document before JTB can finalize TIN profile.",
  },
  {
    id: "APP-2026-004",
    applicant: "Babajide Sanwo",
    email: "bsanwo@lagospress.com",
    phone: "+234 809 111 4433",
    service: "D-U-N-S Global Identifier",
    entity: "Lagos Press & Media Consortium",
    date: "08 Oct 2026",
    status: "approved",
    fee: "₦120,000",
    docsCount: 4,
    agency: "Dun & Bradstreet USA",
    details: "Global Dun & Bradstreet identifier issued: 55-912-8401. Credit rating report generated.",
  },
  {
    id: "APP-2026-005",
    applicant: "Tunde Bakare",
    email: "tbakare@capitalpartners.ng",
    phone: "+234 805 777 9922",
    service: "SCUML Compliance Certificate",
    entity: "Bakare Capital Partners",
    date: "05 Oct 2026",
    status: "processing",
    fee: "₦35,000",
    docsCount: 3,
    agency: "EFCC / SCUML",
    details: "Designated Non-Financial Business sector: Asset Consulting & Real Estate. CAC Memart validated.",
  },
  {
    id: "APP-2026-006",
    applicant: "Fatima Aliyu",
    email: "fatima@kandidtech.io",
    phone: "+234 816 333 8811",
    service: "Trademark Class 39 Registration",
    entity: "Kandid Express Cargo",
    date: "28 Sep 2026",
    status: "rejected",
    fee: "₦55,000",
    docsCount: 2,
    agency: "Ministry of Trade & Investment",
    details: "Conflicting trademark name previously registered under Class 39 in 2024. Notice of objection dispatched.",
  },
];

export default function AdminApplicationsPage() {
  const [apps, setApps] = useState(initialAdminApps);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [inspectApp, setInspectApp] = useState(null);
  const [rejectReason, setRejectReason] = useState("");
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  const filtered = apps.filter((a) => {
    const matchesFilter = filter === "all" || a.status === filter;
    const matchesSearch =
      a.id.toLowerCase().includes(search.toLowerCase()) ||
      a.applicant.toLowerCase().includes(search.toLowerCase()) ||
      a.service.toLowerCase().includes(search.toLowerCase()) ||
      a.entity.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleApprove = (app) => {
    setApps(apps.map((item) => item.id === app.id ? { ...item, status: "approved" } : item));
    showToast(`Application ${app.id} marked as APPROVED. Official documents dispatched.`);
    setInspectApp(null);
  };

  const handleRequestDocs = (app) => {
    setApps(apps.map((item) => item.id === app.id ? { ...item, status: "pending" } : item));
    showToast(`Correction notice and document request sent to ${app.applicant}.`);
    setInspectApp(null);
  };

  const handleConfirmReject = () => {
    if (!inspectApp) return;
    setApps(apps.map((item) => item.id === inspectApp.id ? { ...item, status: "rejected" } : item));
    showToast(`Application ${inspectApp.id} REJECTED with note: ${rejectReason || "Unmet criteria"}`);
    setShowRejectModal(false);
    setInspectApp(null);
    setRejectReason("");
  };

  return (
    <DashboardLayout activeItem="applications" isAdmin={true}>
      {/* Page Title */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
        <div>
          <h1 style={{ font: "800 28px var(--display)", margin: 0 }}>Application Review & Approval</h1>
          <p style={{ color: "var(--muted)", margin: "4px 0 0" }}>Inspect submitted dossiers, verify applicant identity documents, and seal approvals.</p>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="card" style={{ marginBottom: 24, padding: "16px 20px" }}>
        <div className="filter-bar" style={{ margin: 0 }}>
          <div className="filter-group">
            <div className="search-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4-4" />
              </svg>
              <input
                type="text"
                placeholder="Search by ID, applicant, or company…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="filter-group">
            <div className="tab-bar" style={{ margin: 0, border: "none" }}>
              {[
                { key: "all", label: "All Filings" },
                { key: "processing", label: "Pending Review" },
                { key: "pending", label: "Action Needed" },
                { key: "approved", label: "Approved" },
                { key: "rejected", label: "Flagged" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  className={`tab-btn${filter === tab.key ? " active" : ""}`}
                  onClick={() => setFilter(tab.key)}
                >
                  {tab.label}
                  <span className="tab-count">
                    {tab.key === "all" ? apps.length : apps.filter((a) => a.status === tab.key).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="card">
        {/* Desktop Table View */}
        <div className="desktop-table-view" style={{ overflowX: "auto" }}>
          <table className="app-table">
            <thead>
              <tr>
                <th>Reference</th>
                <th>Applicant Contact</th>
                <th>Requested Service</th>
                <th>Target Entity</th>
                <th>Fee Paid</th>
                <th>Status</th>
                <th>Review Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ textAlign: "center", padding: "40px", color: "var(--muted)" }}>
                    No filings found matching your search.
                  </td>
                </tr>
              ) : (
                filtered.map((app) => (
                  <tr key={app.id}>
                    <td>
                      <span style={{ fontWeight: 700, fontFamily: "monospace" }}>{app.id}</span>
                      <div style={{ fontSize: 12, color: "var(--muted)" }}>{app.date}</div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{app.applicant}</div>
                      <div style={{ fontSize: 12, color: "var(--muted)" }}>{app.email}</div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{app.service}</div>
                      <div style={{ fontSize: 12, color: "var(--blue)" }}>{app.agency}</div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 500 }}>{app.entity}</div>
                      <div style={{ fontSize: 12, color: "var(--muted)" }}>{app.docsCount} attachments</div>
                    </td>
                    <td>
                      <span style={{ fontWeight: 700 }}>{app.fee}</span>
                    </td>
                    <td>
                      <span className={`status-badge ${app.status}`}>
                        {app.status === "processing" ? "In Review" :
                         app.status === "approved" ? "Approved" :
                         app.status === "pending" ? "Action Needed" : "Flagged"}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => setInspectApp(app)}
                        >
                          Dossier
                        </button>
                        {app.status !== "approved" && (
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => handleApprove(app)}
                          >
                            Approve
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile View Card List (No zooming needed) */}
        <div className="mobile-card-list">
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "30px 16px", color: "var(--muted)", fontSize: 13 }}>
              No filings found.
            </div>
          ) : (
            filtered.map((app) => (
              <div key={app.id} className="mobile-filing-card" onClick={() => setInspectApp(app)} style={{ cursor: "pointer" }}>
                <div style={{ flex: 1, minWidth: 0, paddingRight: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                    <span style={{ fontWeight: 700, fontFamily: "monospace", fontSize: 12, color: "var(--text)" }}>{app.id}</span>
                    <span className={`status-badge ${app.status}`} style={{ fontSize: 10, padding: "2px 6px" }}>
                      {app.status === "processing" ? "In Review" :
                       app.status === "approved" ? "Approved" :
                       app.status === "pending" ? "Action" : "Flagged"}
                    </span>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {app.entity}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--muted)", display: "flex", gap: 6 }}>
                    <span>{app.applicant}</span>
                    <span>•</span>
                    <span>{app.fee}</span>
                  </div>
                </div>
                <button
                  className="btn btn-secondary btn-sm"
                  style={{ height: 30, fontSize: 11, padding: "0 10px", flex: "none" }}
                  onClick={(e) => { e.stopPropagation(); setInspectApp(app); }}
                >
                  Dossier
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Full Dossier Modal */}
      {inspectApp && !showRejectModal && (
        <div className="modal-overlay" onClick={() => setInspectApp(null)}>
          <div className="modal-dialog lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className={`status-badge ${inspectApp.status}`}>{inspectApp.status.toUpperCase()}</span>
                <h3 style={{ margin: "4px 0 0" }}>{inspectApp.service}</h3>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>App Ref: {inspectApp.id} • Filed on {inspectApp.date}</div>
              </div>
              <button className="modal-close" onClick={() => setInspectApp(null)}>×</button>
            </div>
            <div className="modal-body">
              {/* Applicant Card */}
              <div style={{ background: "var(--soft)", padding: 16, borderRadius: 12, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                <div>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>Applicant Name</div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{inspectApp.applicant}</div>
                </div>
                <div>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>Contact Email</div>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>{inspectApp.email}</div>
                </div>
                <div>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>Phone Number</div>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>{inspectApp.phone}</div>
                </div>
                <div>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>Filing Agency</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--blue)" }}>{inspectApp.agency}</div>
                </div>
              </div>

              {/* Dossier Details */}
              <div style={{ border: "1px solid var(--line)", padding: 16, borderRadius: 12 }}>
                <h4 style={{ font: "700 16px var(--display)", margin: "0 0 8px" }}>Filing Parameters & Notes</h4>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--text)", margin: 0 }}>
                  {inspectApp.details}
                </p>
              </div>

              {/* Attachments preview */}
              <div>
                <h4 style={{ font: "700 16px var(--display)", margin: "0 0 10px" }}>Attached Documents ({inspectApp.docsCount})</h4>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <div style={{ padding: "8px 12px", border: "1px solid var(--line)", borderRadius: 8, fontSize: 13, display: "flex", alignItems: "center", gap: 6, background: "var(--card)" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 16, height: 16, color: "var(--blue)" }}>
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    </svg>
                    <span>Government_ID_Scan.pdf</span>
                  </div>
                  <div style={{ padding: "8px 12px", border: "1px solid var(--line)", borderRadius: 8, fontSize: 13, display: "flex", alignItems: "center", gap: 6, background: "var(--card)" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 16, height: 16, color: "var(--blue)" }}>
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    </svg>
                    <span>Proof_of_Address.jpg</span>
                  </div>
                  {inspectApp.docsCount > 2 && (
                    <div style={{ padding: "8px 12px", border: "1px solid var(--line)", borderRadius: 8, fontSize: 13, display: "flex", alignItems: "center", gap: 6, background: "var(--card)" }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 16, height: 16, color: "var(--blue)" }}>
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      </svg>
                      <span>Shareholder_Resolution.pdf</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => setShowRejectModal(true)}
              >
                Reject / Flag
              </button>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => handleRequestDocs(inspectApp)}
              >
                Request More Documents
              </button>
              <button
                className="btn btn-success btn-sm"
                onClick={() => handleApprove(inspectApp)}
              >
                Approve & Seal Certificate
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reject Reason Modal */}
      {showRejectModal && inspectApp && (
        <div className="modal-overlay" onClick={() => setShowRejectModal(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 style={{ color: "#DC2626" }}>Reject Application: {inspectApp.id}</h3>
              <button className="modal-close" onClick={() => setShowRejectModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <p style={{ fontSize: 14, color: "var(--muted)", margin: 0 }}>
                Please specify the exact rejection or opposition grounds. The applicant will be notified immediately.
              </p>
              <div className="form-group">
                <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>Rejection Reason / Notes</label>
                <textarea
                  rows="4"
                  placeholder="e.g. Existing business name collision; Illegible director identity document..."
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  style={{ width: "100%", padding: 12, borderRadius: 10, border: "1px solid var(--line)" }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowRejectModal(false)}>Cancel</button>
              <button className="btn btn-danger" onClick={handleConfirmReject}>
                Confirm Rejection
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
