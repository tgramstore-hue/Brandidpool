"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardShell";

const initialDocuments = [
  {
    id: "DOC-CAC-01",
    title: "CAC Certificate of Incorporation",
    category: "certificates",
    categoryLabel: "Official Certificates",
    issuedBy: "Corporate Affairs Commission",
    date: "12 Oct 2026",
    size: "2.4 MB",
    format: "PDF",
    status: "Verified",
    description: "Official statutory certificate confirming legal incorporation of Whitestones Global Logistics Ltd (RC 7294819).",
  },
  {
    id: "DOC-NIN-02",
    title: "NIMC Digital Identity Slip",
    category: "identity",
    categoryLabel: "Identification",
    issuedBy: "National Identity Management Commission",
    date: "12 Oct 2026",
    size: "820 KB",
    format: "PDF",
    status: "Verified",
    description: "High-resolution digital national identification slip with biometric QR code and verified BVN linkage.",
  },
  {
    id: "DOC-TIN-03",
    title: "FIRS Corporate Tax Clearance Certificate",
    category: "tax",
    categoryLabel: "Tax & Compliance",
    issuedBy: "Federal Inland Revenue Service",
    date: "04 Oct 2026",
    size: "540 KB",
    format: "PDF",
    status: "Verified",
    description: "Annual Corporate Tax clearance validation and Tax Identification Number certificate for banking and tenders.",
  },
  {
    id: "DOC-DUNS-04",
    title: "Dun & Bradstreet Global Certificate",
    category: "certificates",
    categoryLabel: "Official Certificates",
    issuedBy: "Dun & Bradstreet USA",
    date: "11 Oct 2026",
    size: "1.1 MB",
    format: "PDF",
    status: "Verified",
    description: "Global business credibility report and international D-U-N-S registration certificate (D-U-N-S: 55-912-8401).",
  },
  {
    id: "DOC-MEMART-05",
    title: "Certified True Copy: MEMART",
    category: "certificates",
    categoryLabel: "Official Certificates",
    issuedBy: "Corporate Affairs Commission",
    date: "15 Oct 2026",
    size: "3.7 MB",
    format: "PDF",
    status: "Verified",
    description: "Memorandum and Articles of Association sealed with CAC electronic seal and stamp duties verification.",
  },
  {
    id: "DOC-SCUML-06",
    title: "SCUML Compliance Declaration",
    category: "tax",
    categoryLabel: "Tax & Compliance",
    issuedBy: "Special Control Unit Against Money Laundering",
    date: "08 Oct 2026",
    size: "690 KB",
    format: "PDF",
    status: "Pending Seal",
    description: "Interim compliance acknowledgment letter pending final physical clearance badge release.",
  },
];

export default function DocumentsPage() {
  const [docs, setDocs] = useState(initialDocuments);
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [previewDoc, setPreviewDoc] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newDocTitle, setNewDocTitle] = useState("");
  const [newDocCategory, setNewDocCategory] = useState("identity");
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  const filteredDocs = docs.filter((d) => {
    const matchesCat = activeCategory === "all" || d.category === activeCategory;
    const matchesSearch =
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.issuedBy.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleDownload = (doc) => {
    showToast(`Downloading "${doc.title}.${doc.format.toLowerCase()}"...`);
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (!newDocTitle) return;
    const newDoc = {
      id: `DOC-USR-0${docs.length + 1}`,
      title: newDocTitle,
      category: newDocCategory,
      categoryLabel: newDocCategory === "identity" ? "Identification" : newDocCategory === "tax" ? "Tax & Compliance" : "Official Certificates",
      issuedBy: "User Vault Upload",
      date: "Just now",
      size: "1.4 MB",
      format: "PDF",
      status: "Uploaded",
      description: "User uploaded document stored securely in Whitestones cloud vault.",
    };
    setDocs([newDoc, ...docs]);
    setShowUploadModal(false);
    setNewDocTitle("");
    showToast("Document saved to your vault successfully!");
  };

  return (
    <DashboardLayout activeItem="documents">
      {/* Page Title */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
        <div>
          <h1 style={{ font: "800 28px var(--display)", margin: 0 }}>Document Vault</h1>
          <p style={{ color: "var(--muted)", margin: "4px 0 0" }}>Access, preview, and download your government certificates and sealed files.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowUploadModal(true)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 18, height: 18 }}>
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
          </svg>
          Upload Document
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="card" style={{ marginBottom: 28, padding: "16px 20px" }}>
        <div className="filter-bar" style={{ margin: 0 }}>
          <div className="filter-group">
            <div className="search-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4-4" />
              </svg>
              <input
                type="text"
                placeholder="Search documents by name or agency…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="filter-group">
            <div className="tab-bar" style={{ margin: 0, border: "none" }}>
              {[
                { key: "all", label: "All Documents" },
                { key: "certificates", label: "Certificates" },
                { key: "identity", label: "Identity Slips" },
                { key: "tax", label: "Tax & Compliance" },
              ].map((c) => (
                <button
                  key={c.key}
                  className={`tab-btn${activeCategory === c.key ? " active" : ""}`}
                  onClick={() => setActiveCategory(c.key)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Document Grid */}
      <div className="doc-grid">
        {filteredDocs.map((doc) => (
          <div key={doc.id} className="doc-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div className="doc-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 22, height: 22 }}>
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6, background: "rgba(31,167,217,.1)", color: "var(--blue)" }}>
                {doc.format} • {doc.size}
              </span>
            </div>

            <div className="doc-card-title">{doc.title}</div>
            <div className="doc-card-meta">{doc.issuedBy} • {doc.date}</div>

            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.5, margin: "0 0 16px" }}>
              {doc.description}
            </p>

            <div className="doc-actions">
              <button
                className="btn btn-secondary btn-sm"
                style={{ flex: 1 }}
                onClick={() => setPreviewDoc(doc)}
              >
                Preview
              </button>
              <button
                className="btn btn-primary btn-sm"
                style={{ flex: 1 }}
                onClick={() => handleDownload(doc)}
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {previewDoc && (
        <div className="modal-overlay" onClick={() => setPreviewDoc(null)}>
          <div className="modal-dialog lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="service-card-tag">{previewDoc.categoryLabel}</span>
                <h3 style={{ margin: "4px 0 0" }}>{previewDoc.title}</h3>
              </div>
              <button className="modal-close" onClick={() => setPreviewDoc(null)}>×</button>
            </div>
            <div className="modal-body">
              {/* Fake sealed document view */}
              <div
                style={{
                  background: "#fff",
                  border: "2px solid #E2E8F0",
                  borderRadius: 12,
                  padding: "36px 32px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 16, right: 16, padding: "4px 10px", borderRadius: 6, background: "rgba(12,202,74,.1)", color: "#059642", fontWeight: 700, fontSize: 12 }}>
                  ✓ GOVERNMENT VERIFIED
                </div>

                <div style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>
                  FEDERAL REPUBLIC OF NIGERIA
                </div>
                <h2 style={{ font: "800 22px var(--display)", margin: "0 0 12px", color: "#0F172A" }}>
                  {previewDoc.title}
                </h2>
                <div style={{ font: "600 14px var(--display)", color: "var(--blue)", marginBottom: 20 }}>
                  ISSUED BY: {previewDoc.issuedBy.toUpperCase()}
                </div>

                <div style={{ height: 1, background: "var(--line)", margin: "16px 0" }} />

                <div style={{ textAlign: "left", fontSize: 14, color: "#334155", lineHeight: 1.8 }}>
                  <p><b>Certificate Ref:</b> {previewDoc.id}</p>
                  <p><b>Registered Holder:</b> Whitestones Global Logistics Ltd / Adebayo Ogunlesi</p>
                  <p><b>Issue Date:</b> {previewDoc.date}</p>
                  <p><b>Security Verification:</b> Digital Signature Cryptographically Signed (SHA-256)</p>
                  <p style={{ marginTop: 12, color: "var(--muted)", fontSize: 13 }}>{previewDoc.description}</p>
                </div>

                <div style={{ marginTop: 28, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ width: 80, height: 80, background: "var(--soft)", borderRadius: 8, display: "grid", placeItems: "center", border: "1px dashed var(--blue)" }}>
                      <span style={{ fontSize: 10, color: "var(--blue)", fontWeight: 700 }}>QR SEAL</span>
                    </div>
                  </div>
                  <div style={{ textAlign: "right", color: "var(--muted)", fontSize: 12 }}>
                    <div>Official Stamp of the Registrar</div>
                    <div style={{ fontStyle: "italic", fontWeight: 600, color: "var(--text)" }}>Brandidpool Authorized Agent</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setPreviewDoc(null)}>Close</button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleDownload(previewDoc);
                  setPreviewDoc(null);
                }}
              >
                Download Official Copy ({previewDoc.size})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Document Modal */}
      {showUploadModal && (
        <div className="modal-overlay" onClick={() => setShowUploadModal(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Upload Document to Vault</h3>
              <button className="modal-close" onClick={() => setShowUploadModal(false)}>×</button>
            </div>
            <form onSubmit={handleUploadSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>
                    Document Name / Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Utility Bill, Director Board Resolution"
                    value={newDocTitle}
                    onChange={(e) => setNewDocTitle(e.target.value)}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)" }}
                  />
                </div>
                <div className="form-group">
                  <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>
                    Category
                  </label>
                  <select
                    className="filter-select"
                    style={{ width: "100%", padding: 12 }}
                    value={newDocCategory}
                    onChange={(e) => setNewDocCategory(e.target.value)}
                  >
                    <option value="identity">Identification Document</option>
                    <option value="certificates">Official Business Certificate</option>
                    <option value="tax">Tax & Compliance</option>
                  </select>
                </div>
                <div className="dropzone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                  </svg>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>Click to choose PDF or JPG file</div>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>Up to 25MB encrypted upload</div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowUploadModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Document
                </button>
              </div>
            </form>
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
