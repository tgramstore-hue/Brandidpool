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
    description: "Official registration of Private Limited Companies (Ltd), Business Names, and Incorporated Trustees with CAC.",
    turnaround: "3 - 5 business days",
    fee: "₦45,000",
    badge: "Popular",
    fields: [
      { name: "proposedName1", label: "Proposed Company Name (Option 1)", type: "text", placeholder: "e.g., Apex Nexus Ltd" },
      { name: "proposedName2", label: "Alternative Name (Option 2)", type: "text", placeholder: "e.g., Apex Nexus Global Ltd" },
      { name: "businessType", label: "Entity Structure", type: "select", options: ["Private Limited Liability (Ltd)", "Business Name Enterprise", "Incorporated Trustees / NGO"] },
      { name: "shareCapital", label: "Authorized Share Capital", type: "select", options: ["₦1,000,000 Minimum", "₦5,000,000", "₦10,000,000+"] },
    ],
  },
  {
    id: "nin-services",
    name: "NIN Enrollment & Digital Slip",
    category: "identity",
    categoryLabel: "Identity & NIMC",
    description: "Fast National Identification Number (NIN) verification, modification of bio-data, and high-resolution premium ID card printing.",
    turnaround: "Same day (2 - 4 hours)",
    fee: "₦5,000",
    badge: "Instant",
    fields: [
      { name: "ninNumber", label: "11-Digit NIN Number (if known)", type: "text", placeholder: "e.g. 54920194821" },
      { name: "dob", label: "Date of Birth", type: "date" },
      { name: "serviceType", label: "NIN Service Needed", type: "select", options: ["Digital Plastic Slip Download", "Bio-Data Name Correction", "Phone Number Re-linking"] },
    ],
  },
  {
    id: "bvn-verify",
    name: "BVN Validation & Linkage",
    category: "identity",
    categoryLabel: "Identity & NIMC",
    description: "Verify Bank Verification Number against CBN database, harmonize date of birth and names across banking records.",
    turnaround: "Instant (1 hour)",
    fee: "₦4,500",
    fields: [
      { name: "bvn", label: "11-Digit BVN", type: "text", placeholder: "e.g. 22345678901" },
      { name: "linkedPhone", label: "Phone Number on BVN", type: "tel", placeholder: "08012345678" },
      { name: "bankName", label: "Primary Bank", type: "text", placeholder: "e.g. Zenith Bank" },
    ],
  },
  {
    id: "firs-tin",
    name: "FIRS Tax Identification Number (TIN)",
    category: "tax",
    categoryLabel: "Tax & Compliance",
    description: "Issuance of corporate and personal Tax Identification Numbers, JTB validation, and FIRS portal onboarding.",
    turnaround: "24 - 48 hours",
    fee: "₦15,000",
    badge: "Essential",
    fields: [
      { name: "entityName", label: "Individual or Company Name", type: "text", placeholder: "Official registered name" },
      { name: "rcNumber", label: "CAC RC Number (if corporate)", type: "text", placeholder: "RC-1234567" },
      { name: "taxOffice", label: "Preferred FIRS Tax Office", type: "text", placeholder: "e.g. Victoria Island MSTO" },
    ],
  },
  {
    id: "scuml-cert",
    name: "SCUML Anti-Money Laundering Cert",
    category: "compliance",
    categoryLabel: "EFCC & Compliance",
    description: "Special Control Unit Against Money Laundering (SCUML) certificate for corporate bank account operation and real estate.",
    turnaround: "5 - 7 business days",
    fee: "₦35,000",
    fields: [
      { name: "companyName", label: "Registered Company Name", type: "text", placeholder: "Full legal business title" },
      { name: "businessSector", label: "Designated Non-Financial Business Sector", type: "select", options: ["Real Estate & Construction", "Legal Practitioners / Accountants", "Car Dealerships / Luxury Goods", "Consulting / Tech Services"] },
      { name: "bankAccountStatus", label: "Corporate Account Status", type: "select", options: ["Account Opening in Progress", "Existing Account Awaiting SCUML"] },
    ],
  },
  {
    id: "duns-number",
    name: "D-U-N-S Global Enterprise Identifier",
    category: "global",
    categoryLabel: "Global Credentials",
    description: "Obtain a unique 9-digit Dun & Bradstreet identifier required for Apple Developer accounts, US government contracts, and international credit.",
    turnaround: "4 - 6 business days",
    fee: "₦120,000",
    badge: "Global",
    fields: [
      { name: "legalEntity", label: "Exact Legal Entity Name", type: "text", placeholder: "Must match CAC certificate exactly" },
      { name: "headquarters", label: "Headquarters Physical Address", type: "text", placeholder: "Street address, City, State" },
      { name: "website", label: "Company Website URL", type: "url", placeholder: "https://yourcompany.com" },
      { name: "ceoName", label: "Managing Director / CEO Full Name", type: "text", placeholder: "Chief Executive Name" },
    ],
  },
  {
    id: "trademark",
    name: "Trademark & Patent Filing",
    category: "corporate",
    categoryLabel: "Corporate & CAC",
    description: "Protect brand names, company logos, product trademarks, and patent claims across all 45 WIPO classes in Nigeria.",
    turnaround: "7 - 14 business days",
    fee: "₦55,000",
    fields: [
      { name: "brandWordmark", label: "Brand Name / Wordmark to Protect", type: "text", placeholder: "e.g. BrandIDPool" },
      { name: "wipoClass", label: "Primary Nice Classification Class", type: "select", options: ["Class 35 (Advertising & Business)", "Class 36 (Financial & Real Estate)", "Class 39 (Transport & Logistics)", "Class 42 (Software & Tech Services)"] },
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
      {/* Page Title */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
        <div>
          <h1 style={{ font: "800 28px var(--display)", margin: 0 }}>Government & Business Services</h1>
          <p style={{ color: "var(--muted)", margin: "4px 0 0" }}>Choose a verified service package to register, file or verify identity credentials.</p>
        </div>
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
                placeholder="Search services (e.g., CAC, NIN, Tax, D-U-N-S)…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="filter-group">
            <div className="tab-bar" style={{ margin: 0, border: "none" }}>
              {[
                { key: "all", label: "All Services" },
                { key: "corporate", label: "Corporate & CAC" },
                { key: "identity", label: "Identity & NIMC" },
                { key: "tax", label: "Tax & Compliance" },
                { key: "global", label: "Global Identifiers" },
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

      {/* Services Grid */}
      <div className="service-catalog-grid">
        {filteredServices.map((srv) => (
          <div key={srv.id} className="service-card">
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="service-card-tag">{srv.categoryLabel}</span>
                {srv.badge && (
                  <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6, background: "rgba(12,202,74,.1)", color: "#059642" }}>
                    {srv.badge}
                  </span>
                )}
              </div>
              <h4>{srv.name}</h4>
              <p>{srv.description}</p>
            </div>

            <div className="service-card-meta">
              <div>
                <div className="service-turnaround">Turnaround: {srv.turnaround}</div>
                <div className="service-fee">{srv.fee}</div>
              </div>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => handleStartApply(srv)}
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Application Form Modal */}
      {activeService && (
        <div className="modal-overlay" onClick={() => setActiveService(null)}>
          <div className="modal-dialog lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="service-card-tag">{activeService.categoryLabel}</span>
                <h3 style={{ margin: "4px 0 0" }}>Apply for {activeService.name}</h3>
              </div>
              <button className="modal-close" onClick={() => setActiveService(null)}>×</button>
            </div>
            <form onSubmit={handleSubmitApplication}>
              <div className="modal-body">
                <div style={{ background: "var(--soft)", padding: 14, borderRadius: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: 12, color: "var(--muted)" }}>Standard Processing Fee</div>
                    <div style={{ font: "800 20px var(--display)", color: "var(--text)" }}>{activeService.fee}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 12, color: "var(--muted)" }}>Turnaround SLA</div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{activeService.turnaround}</div>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {activeService.fields.map((f) => (
                    <div className="form-group" key={f.name}>
                      <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>
                        {f.label}
                      </label>
                      {f.type === "select" ? (
                        <select
                          className="filter-select"
                          style={{ width: "100%", padding: 12 }}
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
                          style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)", background: "var(--card)" }}
                          value={formData[f.name] || ""}
                          onChange={(e) => handleInputChange(f.name, e.target.value)}
                        />
                      )}
                    </div>
                  ))}

                  {/* Supporting Document Upload */}
                  <div className="form-group">
                    <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>
                      Upload Identity Document (Passport / National ID)
                    </label>
                    <div className="dropzone" style={{ padding: 20 }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 28, height: 28, margin: "0 auto 6px" }}>
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                      </svg>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>Click to attach supporting PDF or PNG (optional)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setActiveService(null)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Pay {activeService.fee} & Submit Application
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
              <h3 style={{ color: "#059642", display: "flex", alignItems: "center", gap: 8 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 24, height: 24 }}>
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Application Submitted!
              </h3>
              <button className="modal-close" onClick={() => setSubmittedApp(null)}>×</button>
            </div>
            <div className="modal-body">
              <p style={{ fontSize: 14, color: "var(--muted)", margin: 0 }}>
                Your request has been officially recorded and queued for processing with the relevant registry authorities.
              </p>
              <div style={{ background: "var(--soft)", padding: 16, borderRadius: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: "var(--muted)" }}>Reference Code:</span>
                  <span style={{ fontWeight: 700, fontFamily: "monospace", color: "var(--blue)" }}>{submittedApp.id}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: "var(--muted)" }}>Service:</span>
                  <span style={{ fontWeight: 600, fontSize: 13 }}>{submittedApp.service}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: "var(--muted)" }}>Estimated Completion:</span>
                  <span style={{ fontWeight: 600, fontSize: 13 }}>{submittedApp.turnaround}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 13, color: "var(--muted)" }}>Payment Status:</span>
                  <span style={{ fontWeight: 700, color: "#059642", fontSize: 13 }}>Paid ({submittedApp.fee})</span>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setSubmittedApp(null)}>Close</button>
              <Link href="/dashboard/applications" className="btn btn-primary" onClick={() => setSubmittedApp(null)}>
                Track in Applications Table →
              </Link>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
