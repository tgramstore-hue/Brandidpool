"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardShell";
import Link from "next/link";

const allApplications = [
  {
    id: "APP-2026-001",
    service: "CAC Company Registration",
    category: "Corporate Affairs",
    registeredName: "Whitestones Global Logistics Ltd",
    date: "15 Oct 2026",
    status: "processing",
    agency: "Corporate Affairs Commission",
    rcNumber: "RC-Pending",
    fee: "₦45,000",
    timeline: [
      { step: "Application Form Submitted", date: "15 Oct 2026, 09:20 AM", done: true },
      { step: "Name Availability Search Approved", date: "16 Oct 2026, 11:45 AM", done: true },
      { step: "Payment & Stamp Duties Processed", date: "17 Oct 2026, 02:10 PM", done: true },
      { step: "Final Registration & Certificate Printing", date: "Estimated 22 Oct 2026", done: false },
    ],
  },
  {
    id: "APP-2026-002",
    service: "NIN Identity Verification & Slip",
    category: "Identity & NIMC",
    registeredName: "Adebayo Olumide Ogunlesi",
    date: "12 Oct 2026",
    status: "approved",
    agency: "National Identity Management Commission",
    rcNumber: "NIN-84920491823",
    fee: "₦5,000",
    timeline: [
      { step: "Biometric Data Submitted", date: "12 Oct 2026, 10:15 AM", done: true },
      { step: "NIMC Portal Match Verified", date: "12 Oct 2026, 11:00 AM", done: true },
      { step: "Official Digital Slip Generated", date: "12 Oct 2026, 11:30 AM", done: true },
    ],
  },
  {
    id: "APP-2026-003",
    service: "FIRS Corporate Tax Identification (TIN)",
    category: "Tax & Compliance",
    registeredName: "Whitestones Global Logistics Ltd",
    date: "10 Oct 2026",
    status: "pending",
    agency: "Federal Inland Revenue Service",
    rcNumber: "Awaiting Director ID",
    fee: "₦15,000",
    timeline: [
      { step: "TIN Request Initiated", date: "10 Oct 2026, 03:40 PM", done: true },
      { step: "Supporting Director ID Requested", date: "11 Oct 2026, 09:15 AM", done: true },
      { step: "Awaiting Applicant Upload", date: "Action Needed", done: false },
    ],
  },
  {
    id: "APP-2026-004",
    service: "D-U-N-S Global Enterprise Identifier",
    category: "Global Credit Rating",
    registeredName: "Whitestones Global Logistics Ltd",
    date: "08 Oct 2026",
    status: "approved",
    agency: "Dun & Bradstreet",
    rcNumber: "DUNS-55-912-8401",
    fee: "₦120,000",
    timeline: [
      { step: "Global Registry Request Logged", date: "08 Oct 2026, 08:30 AM", done: true },
      { step: "Corporate Address & Ownership Vetted", date: "09 Oct 2026, 04:00 PM", done: true },
      { step: "9-Digit D-U-N-S Code Issued", date: "11 Oct 2026, 01:20 PM", done: true },
    ],
  },
  {
    id: "APP-2026-005",
    service: "Special SCUML Anti-Money Laundering Cert",
    category: "EFCC & AML Compliance",
    registeredName: "Whitestones Global Logistics Ltd",
    date: "05 Oct 2026",
    status: "processing",
    agency: "Economic & Financial Crimes Commission",
    rcNumber: "SCUML-Ref-99214",
    fee: "₦35,000",
    timeline: [
      { step: "SCUML Online Dossier Compiled", date: "05 Oct 2026, 11:10 AM", done: true },
      { step: "Constitution & CAC Documents Screened", date: "07 Oct 2026, 03:45 PM", done: true },
      { step: "EFCC Compliance Unit Clearance", date: "In Progress", done: false },
    ],
  },
  {
    id: "APP-2026-006",
    service: "Nigeria Trademark Class 39 Registration",
    category: "Intellectual Property",
    registeredName: "BrandIDPool FastTrack Logo",
    date: "28 Sep 2026",
    status: "rejected",
    agency: "Federal Ministry of Industry, Trade & Investment",
    rcNumber: "N/A",
    fee: "₦55,000",
    rejectionReason: "Conflicting trademark name previously registered under Class 39 in 2024. Please amend proposed name.",
    timeline: [
      { step: "Trademark Application Filed", date: "28 Sep 2026, 09:00 AM", done: true },
      { step: "Registry Search Completed", date: "02 Oct 2026, 02:00 PM", done: true },
      { step: "Notice of Opposition / Conflict Issued", date: "04 Oct 2026, 10:15 AM", done: true },
    ],
  },
];

export default function ApplicationsPage() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedApp, setSelectedApp] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  const filtered = allApplications.filter((app) => {
    const matchesFilter = filter === "all" || app.status === filter;
    const matchesSearch =
      app.service.toLowerCase().includes(search.toLowerCase()) ||
      app.id.toLowerCase().includes(search.toLowerCase()) ||
      app.registeredName.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <DashboardLayout activeItem="applications">
      {/* Top Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
        <div>
          <h1 style={{ font: "800 28px var(--display)", margin: 0 }}>Applications Management</h1>
          <p style={{ color: "var(--muted)", margin: "4px 0 0" }}>Track, review, and manage all your government & business service filings.</p>
        </div>
        <Link href="/dashboard/services" className="btn btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 18, height: 18 }}>
            <path d="M12 5v14M5 12h14" />
          </svg>
          Start New Application
        </Link>
      </div>

      {/* Filter and Search Bar */}
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
                placeholder="Search by ID, name or service…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="filter-group">
            <div className="tab-bar" style={{ margin: 0, border: "none" }}>
              {[
                { key: "all", label: "All" },
                { key: "processing", label: "In Review" },
                { key: "approved", label: "Approved" },
                { key: "pending", label: "Action Needed" },
                { key: "rejected", label: "Flagged" },
              ].map((t) => (
                <button
                  key={t.key}
                  className={`tab-btn${filter === t.key ? " active" : ""}`}
                  onClick={() => setFilter(t.key)}
                >
                  {t.label}
                  <span className="tab-count">
                    {t.key === "all"
                      ? allApplications.length
                      : allApplications.filter((a) => a.status === t.key).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Applications Table Card */}
      <div className="card">
        <div style={{ overflowX: "auto" }}>
          <table className="app-table">
            <thead>
              <tr>
                <th>Reference ID</th>
                <th>Service & Category</th>
                <th>Entity / Subject Name</th>
                <th>Filing Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center", padding: "40px 20px", color: "var(--muted)" }}>
                    No applications match your selected filter.
                  </td>
                </tr>
              ) : (
                filtered.map((app) => (
                  <tr key={app.id}>
                    <td>
                      <span style={{ fontWeight: 700, fontFamily: "monospace", color: "var(--text)" }}>{app.id}</span>
                      <div style={{ fontSize: 11, color: "var(--muted)" }}>{app.fee}</div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{app.service}</div>
                      <div style={{ fontSize: 13, color: "var(--blue)" }}>{app.agency}</div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 500 }}>{app.registeredName}</div>
                      <div style={{ fontSize: 12, color: "var(--muted)" }}>ID: {app.rcNumber}</div>
                    </td>
                    <td style={{ color: "var(--muted)" }}>{app.date}</td>
                    <td>
                      <span className={`status-badge ${app.status}`}>
                        {app.status === "processing" ? "In Review" :
                         app.status === "approved" ? "Approved" :
                         app.status === "pending" ? "Action Needed" : "Declined"}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: "flex", gap: 8 }}>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => setSelectedApp(app)}
                        >
                          Track
                        </button>
                        {app.status === "approved" && (
                          <Link href="/dashboard/documents" className="btn btn-outline btn-sm">
                            Certificate
                          </Link>
                        )}
                        {app.status === "pending" && (
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => {
                              setSelectedApp(app);
                              setShowUploadModal(true);
                            }}
                          >
                            Upload Docs
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
      </div>

      {/* Tracking Details Modal */}
      {selectedApp && !showUploadModal && (
        <div className="modal-overlay" onClick={() => setSelectedApp(null)}>
          <div className="modal-dialog lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className={`status-badge ${selectedApp.status}`} style={{ marginBottom: 6 }}>
                  {selectedApp.status.toUpperCase()}
                </span>
                <h3 style={{ margin: 0 }}>{selectedApp.service}</h3>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>ID: {selectedApp.id} • {selectedApp.agency}</div>
              </div>
              <button className="modal-close" onClick={() => setSelectedApp(null)}>×</button>
            </div>
            <div className="modal-body">
              {/* Summary cards */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                <div style={{ background: "var(--soft)", padding: 14, borderRadius: 12 }}>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>Registered Entity</div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{selectedApp.registeredName}</div>
                </div>
                <div style={{ background: "var(--soft)", padding: 14, borderRadius: 12 }}>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>Government Identifier</div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{selectedApp.rcNumber}</div>
                </div>
                <div style={{ background: "var(--soft)", padding: 14, borderRadius: 12 }}>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>Processing Fee</div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{selectedApp.fee}</div>
                </div>
              </div>

              {selectedApp.rejectionReason && (
                <div style={{ background: "rgba(220, 38, 38, 0.08)", border: "1px solid rgba(220, 38, 38, 0.2)", borderRadius: 12, padding: 16 }}>
                  <div style={{ fontWeight: 700, color: "#DC2626", marginBottom: 4 }}>Notice of Refusal / Objection</div>
                  <div style={{ fontSize: 14, color: "var(--text)" }}>{selectedApp.rejectionReason}</div>
                </div>
              )}

              {/* Progress Milestones */}
              <div style={{ marginTop: 12 }}>
                <h4 style={{ font: "700 16px var(--display)", marginBottom: 16 }}>Filing Progress & Milestones</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "relative", paddingLeft: 24 }}>
                  <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 2, background: "var(--line)" }}></div>
                  {selectedApp.timeline.map((step, idx) => (
                    <div key={idx} style={{ position: "relative" }}>
                      <div
                        style={{
                          position: "absolute",
                          left: -24,
                          top: 2,
                          width: 16,
                          height: 16,
                          borderRadius: "50%",
                          background: step.done ? "#059642" : "var(--muted)",
                          border: "3px solid #fff",
                          boxShadow: "0 0 0 1px var(--line)",
                        }}
                      />
                      <div style={{ fontWeight: 600, fontSize: 14, color: step.done ? "var(--text)" : "var(--muted)" }}>
                        {step.step}
                      </div>
                      <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{step.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setSelectedApp(null)}>Close</button>
              {selectedApp.status === "approved" && (
                <Link
                  href="/dashboard/documents"
                  className="btn btn-primary"
                  onClick={() => setSelectedApp(null)}
                >
                  Download Certificate
                </Link>
              )}
              {selectedApp.status === "pending" && (
                <button
                  className="btn btn-primary"
                  onClick={() => setShowUploadModal(true)}
                >
                  Upload Required Files
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Upload Additional Docs Modal */}
      {showUploadModal && selectedApp && (
        <div className="modal-overlay" onClick={() => setShowUploadModal(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Upload Supporting Documents</h3>
              <button className="modal-close" onClick={() => setShowUploadModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <p style={{ fontSize: 14, color: "var(--muted)", margin: 0 }}>
                Please provide the required identification or utility bill to clear application <b>{selectedApp.id}</b>.
              </p>
              <div
                className="dropzone"
                onClick={() => {
                  showToast("File uploaded successfully. Our team will verify it within 2 hours.");
                  setShowUploadModal(false);
                  setSelectedApp(null);
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                </svg>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Click or drag PDF/JPG here to upload</div>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>Passport, National ID or Proof of Address (Max 10MB)</div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowUploadModal(false)}>Cancel</button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  showToast("Files submitted to compliance officers.");
                  setShowUploadModal(false);
                  setSelectedApp(null);
                }}
              >
                Submit Documents
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
