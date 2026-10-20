"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardShell";
import Link from "next/link";

const availableServices = [
  {
    id: "cac-reg",
    name: "CAC Company Registration",
    category: "corporate",
    categoryLabel: "Corporate & CAC",
    description: "Private limited liability company (Ltd) and business name registration with CAC.",
    turnaround: "3 - 5 days",
    fee: "₦45,000",
    badge: "Popular",
    fields: [
      { name: "proposedName1", label: "Proposed Company Name", type: "text", placeholder: "e.g., Apex Nexus Ltd" },
      { name: "businessType", label: "Entity Structure", type: "select", options: ["Private Limited (Ltd)", "Business Name Enterprise", "Incorporated Trustees"] },
      { name: "shareCapital", label: "Authorized Share Capital", type: "select", options: ["₦1,000,000", "₦5,000,000", "₦10,000,000+"] },
    ],
  },
  {
    id: "nin-services",
    name: "NIN Enrollment & Digital Slip",
    category: "identity",
    categoryLabel: "Identity & NIMC",
    description: "National identification number verification, bio-data correction, and digital slip.",
    turnaround: "2 - 4 hours",
    fee: "₦5,000",
    badge: "Instant",
    fields: [
      { name: "ninNumber", label: "11-Digit NIN Number", type: "text", placeholder: "e.g. 54920194821" },
      { name: "serviceType", label: "NIN Service Needed", type: "select", options: ["Digital Plastic Slip Download", "Bio-Data Correction", "Phone Number Re-linking"] },
    ],
  },
  {
    id: "bvn-verify",
    name: "BVN Validation & Linkage",
    category: "identity",
    categoryLabel: "Identity & NIMC",
    description: "Bank Verification Number CBN database validation and banking records harmonization.",
    turnaround: "1 hour",
    fee: "₦4,500",
    fields: [
      { name: "bvn", label: "11-Digit BVN", type: "text", placeholder: "e.g. 22345678901" },
      { name: "linkedPhone", label: "Phone on BVN", type: "tel", placeholder: "08012345678" },
    ],
  },
  {
    id: "firs-tin",
    name: "FIRS Tax Identification (TIN)",
    category: "tax",
    categoryLabel: "Tax & Compliance",
    description: "Corporate and personal Tax Identification Number registration and JTB onboarding.",
    turnaround: "24 - 48 hours",
    fee: "₦15,000",
    badge: "Essential",
    fields: [
      { name: "entityName", label: "Individual or Company Name", type: "text", placeholder: "Registered entity name" },
      { name: "rcNumber", label: "CAC RC Number", type: "text", placeholder: "RC-1234567" },
    ],
  },
  {
    id: "scuml-cert",
    name: "SCUML AML Compliance Cert",
    category: "compliance",
    categoryLabel: "EFCC & Compliance",
    description: "Special Control Unit Against Money Laundering certificate for bank accounts.",
    turnaround: "5 - 7 days",
    fee: "₦35,000",
    fields: [
      { name: "companyName", label: "Registered Company Name", type: "text", placeholder: "Full legal business title" },
      { name: "businessSector", label: "Designated Non-Financial Sector", type: "select", options: ["Real Estate & Construction", "Legal / Consulting", "Car Dealerships / Luxury", "Other"] },
    ],
  },
  {
    id: "duns-number",
    name: "D-U-N-S Global Identifier",
    category: "global",
    categoryLabel: "Global Credentials",
    description: "Unique 9-digit Dun & Bradstreet business identifier for global contracts.",
    turnaround: "4 - 6 days",
    fee: "₦120,000",
    badge: "Global",
    fields: [
      { name: "legalEntity", label: "Exact Legal Entity Name", type: "text", placeholder: "Matching CAC certificate" },
      { name: "headquarters", label: "Physical Address", type: "text", placeholder: "City, State, Country" },
      { name: "website", label: "Company Website URL", type: "url", placeholder: "https://yourcompany.com" },
    ],
  },
  {
    id: "trademark",
    name: "Trademark Registration",
    category: "corporate",
    categoryLabel: "Corporate & CAC",
    description: "Official brand name, logo, and trademark class registration across 45 WIPO classes.",
    turnaround: "7 - 14 days",
    fee: "₦55,000",
    fields: [
      { name: "brandWordmark", label: "Brand Name to Protect", type: "text", placeholder: "Brand name or logo" },
      { name: "wipoClass", label: "Nice Classification Class", type: "select", options: ["Class 35 (Advertising & Business)", "Class 36 (Financial & Real Estate)", "Class 39 (Transport & Logistics)", "Class 42 (Software & Tech)"] },
    ],
  },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [activeService, setActiveService] = useState(null);
  const [formData, setFormData] = useState({});
  const [submittedApp, setSubmittedApp] = useState(null);

  const filteredServices = availableServices.filter((srv) => {
    const matchesCat = activeCategory === "all" || srv.category === activeCategory;
    const matchesSearch =
      srv.name.toLowerCase().includes(search.toLowerCase()) ||
      srv.description.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleInputChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleStartApply = (srv) => {
    setActiveService(srv);
    setFormData({});
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    const newId = `APP-2026-0${Math.floor(100 + Math.random() * 900)}`;
    setSubmittedApp({
      id: newId,
      service: activeService.name,
      fee: activeService.fee,
      turnaround: activeService.turnaround,
    });
    setActiveService(null);
  };

  return (
    <DashboardLayout activeItem="services">
      {/* Title */}
      <div style={{ marginBottom: 18 }}>
        <h1 style={{ font: "700 24px var(--display)", margin: 0, color: "var(--text)" }}>
          Services Catalog
        </h1>
        <p style={{ color: "var(--muted)", margin: "2px 0 0", fontSize: 13 }}>
          Verified government registrations, identity services, and compliance filings.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="card" style={{ marginBottom: 20, padding: "12px 16px" }}>
        <div className="filter-bar" style={{ margin: 0 }}>
          <div className="filter-group">
            <div className="search-box" style={{ minWidth: 200, height: 38 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4-4" />
              </svg>
              <input
                type="text"
                placeholder="Search services…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ fontSize: 13 }}
              />
            </div>
          </div>
          <div className="filter-group">
            <div className="tab-bar" style={{ margin: 0, border: "none" }}>
              {[
                { key: "all", label: "All" },
                { key: "corporate", label: "Corporate" },
                { key: "identity", label: "Identity" },
                { key: "tax", label: "Tax" },
                { key: "global", label: "Global" },
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

      {/* Services Grid with Landing Page Style Cards & Buttons */}
      <div className="service-catalog-grid">
        {filteredServices.map((srv) => (
          <div key={srv.id} className="service-card" style={{ padding: "20px" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <span className="service-card-tag">{srv.categoryLabel}</span>
                {srv.badge && (
                  <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 6px", borderRadius: 4, background: "rgba(12,202,74,.1)", color: "#059642" }}>
                    {srv.badge}
                  </span>
                )}
              </div>
              <h4 style={{ font: "700 16px var(--display)", margin: "0 0 6px" }}>{srv.name}</h4>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: 0, lineHeight: 1.4 }}>{srv.description}</p>
            </div>

            <div className="service-card-meta" style={{ marginTop: 16, paddingTop: 14 }}>
              <div>
                <div style={{ font: "700 18px var(--display)", color: "var(--navy)" }}>{srv.fee}</div>
                <div style={{ fontSize: 11, color: "var(--muted)" }}>{srv.turnaround}</div>
              </div>

              {/* Exact Landing Page Button with Navy Color & Hover Motion */}
              <button
                className="btn btn-dark btn-rect"
                style={{ height: 38, padding: "0 18px", fontSize: 13, gap: 8, borderRadius: 10 }}
                onClick={() => handleStartApply(srv)}
              >
                Apply now
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ width: 14, height: 14 }}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Application Form Modal */}
      {activeService && (
        <div className="modal-overlay" onClick={() => setActiveService(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="service-card-tag" style={{ fontSize: 10 }}>{activeService.categoryLabel}</span>
                <h3 style={{ margin: "2px 0 0", fontSize: 18 }}>Apply for {activeService.name}</h3>
              </div>
              <button className="modal-close" onClick={() => setActiveService(null)}>×</button>
            </div>
            <form onSubmit={handleSubmitApplication}>
              <div className="modal-body">
                <div style={{ background: "var(--soft)", padding: 12, borderRadius: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: 11, color: "var(--muted)" }}>Statutory Fee</div>
                    <div style={{ font: "700 18px var(--display)", color: "var(--navy)" }}>{activeService.fee}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 11, color: "var(--muted)" }}>SLA Turnaround</div>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>{activeService.turnaround}</div>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {activeService.fields.map((f) => (
                    <div className="form-group" key={f.name}>
                      <label style={{ font: "600 12px var(--body)", marginBottom: 4, display: "block" }}>
                        {f.label}
                      </label>
                      {f.type === "select" ? (
                        <select
                          className="filter-select"
                          style={{ width: "100%", padding: 10, fontSize: 13 }}
                          required
                          value={formData[f.name] || ""}
                          onChange={(e) => handleInputChange(f.name, e.target.value)}
                        >
                          <option value="">Select option...</option>
                          {f.options.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={f.type}
                          placeholder={f.placeholder || ""}
                          required
                          style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid var(--line)", background: "var(--card)", fontSize: 13 }}
                          value={formData[f.name] || ""}
                          onChange={(e) => handleInputChange(f.name, e.target.value)}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => setActiveService(null)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-dark btn-rect" style={{ height: 38, fontSize: 13, gap: 8 }}>
                  Submit ({activeService.fee})
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ width: 14, height: 14 }}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Submission Success Modal */}
      {submittedApp && (
        <div className="modal-overlay" onClick={() => setSubmittedApp(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 style={{ color: "#059642", display: "flex", alignItems: "center", gap: 6, fontSize: 18 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ width: 20, height: 20 }}>
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Application Submitted!
              </h3>
              <button className="modal-close" onClick={() => setSubmittedApp(null)}>×</button>
            </div>
            <div className="modal-body">
              <p style={{ fontSize: 13, color: "var(--muted)", margin: 0 }}>
                Your request has been logged and queued for regulatory verification.
              </p>
              <div style={{ background: "var(--soft)", padding: 12, borderRadius: 10, fontSize: 13, lineHeight: 1.6 }}>
                <div><b>Reference:</b> <span style={{ fontFamily: "monospace", color: "var(--dot)" }}>{submittedApp.id}</span></div>
                <div><b>Service:</b> {submittedApp.service}</div>
                <div><b>Turnaround:</b> {submittedApp.turnaround}</div>
                <div><b>Fee Status:</b> <span style={{ color: "#059642", fontWeight: 700 }}>Paid ({submittedApp.fee})</span></div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary btn-sm" onClick={() => setSubmittedApp(null)}>Close</button>
              <Link href="/dashboard/applications" className="btn btn-dark btn-rect" style={{ height: 38, fontSize: 13 }} onClick={() => setSubmittedApp(null)}>
                Track in Applications →
              </Link>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
