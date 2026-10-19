"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardShell";

const initialServices = [
  {
    id: "srv-01",
    name: "CAC Company Registration (Ltd)",
    category: "Corporate Affairs",
    fee: 45000,
    turnaround: "3 - 5 business days",
    status: "active",
    agency: "Corporate Affairs Commission",
    totalFilings: 842,
  },
  {
    id: "srv-02",
    name: "NIN Verification & Digital Slip",
    category: "Identity & NIMC",
    fee: 5000,
    turnaround: "Same day (2 - 4 hours)",
    status: "active",
    agency: "National Identity Management Commission",
    totalFilings: 1240,
  },
  {
    id: "srv-03",
    name: "BVN Harmonization & Validation",
    category: "Identity & NIMC",
    fee: 4500,
    turnaround: "Instant (1 hour)",
    status: "active",
    agency: "Central Bank of Nigeria / NIBSS",
    totalFilings: 610,
  },
  {
    id: "srv-04",
    name: "FIRS Corporate Tax TIN",
    category: "Tax & Compliance",
    fee: 15000,
    turnaround: "24 - 48 hours",
    status: "active",
    agency: "Federal Inland Revenue Service",
    totalFilings: 390,
  },
  {
    id: "srv-05",
    name: "SCUML AML Anti-Money Laundering Cert",
    category: "EFCC & AML",
    fee: 35000,
    turnaround: "5 - 7 business days",
    status: "active",
    agency: "Special Control Unit Against Money Laundering",
    totalFilings: 215,
  },
  {
    id: "srv-06",
    name: "D-U-N-S Global Enterprise Identifier",
    category: "Global Identifiers",
    fee: 120000,
    turnaround: "4 - 6 business days",
    status: "active",
    agency: "Dun & Bradstreet USA",
    totalFilings: 184,
  },
  {
    id: "srv-07",
    name: "Trademark Class Registration",
    category: "Intellectual Property",
    fee: 55000,
    turnaround: "7 - 14 business days",
    status: "paused",
    agency: "Ministry of Trade & Investment",
    totalFilings: 92,
  },
];

export default function AdminServicesPage() {
  const [services, setServices] = useState(initialServices);
  const [editingService, setEditingService] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newService, setNewService] = useState({
    name: "",
    category: "Corporate Affairs",
    fee: 30000,
    turnaround: "3 - 5 business days",
    agency: "Federal Agency",
  });
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  const toggleStatus = (id) => {
    setServices(
      services.map((s) => (s.id === id ? { ...s, status: s.status === "active" ? "paused" : "active" } : s))
    );
    showToast("Service availability status updated.");
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    setServices(
      services.map((s) => (s.id === editingService.id ? editingService : s))
    );
    showToast(`Updated pricing and SLA for "${editingService.name}".`);
    setEditingService(null);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newService.name) return;
    const created = {
      ...newService,
      id: `srv-0${services.length + 1}`,
      fee: parseInt(newService.fee, 10) || 10000,
      status: "active",
      totalFilings: 0,
    };
    setServices([...services, created]);
    setShowAddModal(false);
    setNewService({ name: "", category: "Corporate Affairs", fee: 30000, turnaround: "3 - 5 business days", agency: "Federal Agency" });
    showToast(`Service "${created.name}" created and published!`);
  };

  return (
    <DashboardLayout activeItem="services" isAdmin={true}>
      {/* Page Title */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
        <div>
          <h1 style={{ font: "800 28px var(--display)", margin: 0 }}>Service Catalog & Pricing Engine</h1>
          <p style={{ color: "var(--muted)", margin: "4px 0 0" }}>Configure government statutory fees, turnaround SLAs, and toggle service availability.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 18, height: 18 }}>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add New Service
        </button>
      </div>

      {/* Services Table */}
      <div className="card">
        <div style={{ overflowX: "auto" }}>
          <table className="app-table">
            <thead>
              <tr>
                <th>Service Name & Category</th>
                <th>Government Agency</th>
                <th>Base Filing Fee</th>
                <th>Target SLA Turnaround</th>
                <th>Filings Handled</th>
                <th>Availability</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((srv) => (
                <tr key={srv.id}>
                  <td>
                    <div style={{ fontWeight: 600 }}>{srv.name}</div>
                    <div style={{ fontSize: 12, color: "var(--muted)" }}>{srv.category}</div>
                  </td>
                  <td style={{ color: "var(--blue)", fontSize: 13, fontWeight: 500 }}>
                    {srv.agency}
                  </td>
                  <td>
                    <span style={{ fontWeight: 700, font: "700 15px var(--display)" }}>
                      ₦{srv.fee.toLocaleString()}
                    </span>
                  </td>
                  <td style={{ color: "var(--muted)", fontSize: 13 }}>{srv.turnaround}</td>
                  <td>
                    <span style={{ fontWeight: 600 }}>{srv.totalFilings} completed</span>
                  </td>
                  <td>
                    <span className={`status-badge ${srv.status === "active" ? "approved" : "rejected"}`}>
                      {srv.status === "active" ? "Available" : "Maintenance"}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => setEditingService({ ...srv })}
                      >
                        Edit Rate
                      </button>
                      <button
                        className={`btn ${srv.status === "active" ? "btn-outline" : "btn-success"} btn-sm`}
                        onClick={() => toggleStatus(srv.id)}
                      >
                        {srv.status === "active" ? "Pause" : "Resume"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Service Modal */}
      {editingService && (
        <div className="modal-overlay" onClick={() => setEditingService(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Edit Service: {editingService.name}</h3>
              <button className="modal-close" onClick={() => setEditingService(null)}>×</button>
            </div>
            <form onSubmit={handleSaveEdit}>
              <div className="modal-body">
                <div className="form-group">
                  <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>Service Title</label>
                  <input
                    type="text"
                    required
                    value={editingService.name}
                    onChange={(e) => setEditingService({ ...editingService, name: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)" }}
                  />
                </div>

                <div className="form-group">
                  <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>Fee (₦ NGN)</label>
                  <input
                    type="number"
                    required
                    value={editingService.fee}
                    onChange={(e) => setEditingService({ ...editingService, fee: parseInt(e.target.value, 10) || 0 })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)" }}
                  />
                </div>

                <div className="form-group">
                  <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>SLA Turnaround</label>
                  <input
                    type="text"
                    required
                    value={editingService.turnaround}
                    onChange={(e) => setEditingService({ ...editingService, turnaround: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)" }}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setEditingService(null)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Save Pricing & SLA</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add New Service Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Create New Service Package</h3>
              <button className="modal-close" onClick={() => setShowAddModal(false)}>×</button>
            </div>
            <form onSubmit={handleAddSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>Service Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. NAFDAC Food & Drug Registration"
                    value={newService.name}
                    onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)" }}
                  />
                </div>

                <div className="form-group">
                  <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>Category</label>
                  <select
                    className="filter-select"
                    style={{ width: "100%", padding: 12 }}
                    value={newService.category}
                    onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                  >
                    <option value="Corporate Affairs">Corporate Affairs</option>
                    <option value="Identity & NIMC">Identity & NIMC</option>
                    <option value="Tax & Compliance">Tax & Compliance</option>
                    <option value="Global Identifiers">Global Identifiers</option>
                    <option value="Licensing & Permits">Licensing & Permits</option>
                  </select>
                </div>

                <div className="form-group">
                  <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>Statutory Regulatory Agency</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. NAFDAC / SON / DPR"
                    value={newService.agency}
                    onChange={(e) => setNewService({ ...newService, agency: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)" }}
                  />
                </div>

                <div style={{ display: "flex", gap: 12 }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>Fee (₦)</label>
                    <input
                      type="number"
                      required
                      value={newService.fee}
                      onChange={(e) => setNewService({ ...newService, fee: e.target.value })}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)" }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>SLA Turnaround</label>
                    <input
                      type="text"
                      required
                      value={newService.turnaround}
                      onChange={(e) => setNewService({ ...newService, turnaround: e.target.value })}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)" }}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Publish Service</button>
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
