"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardShell";

const initialUsers = [
  {
    id: "USR-101",
    name: "Adebayo Ogunlesi",
    email: "adebayo@whitestones.ng",
    phone: "+234 803 291 0491",
    company: "Whitestones Global Logistics Ltd",
    joinedDate: "12 Aug 2026",
    status: "active",
    kycStatus: "verified",
    applicationsCount: 5,
    walletBalance: "₦185,000",
  },
  {
    id: "USR-102",
    name: "Chioma Nwosu",
    email: "chioma@nwosufarms.ng",
    phone: "+234 814 550 1823",
    company: "Chioma Nwosu Enterprises",
    joinedDate: "03 Sep 2026",
    status: "active",
    kycStatus: "pending",
    applicationsCount: 2,
    walletBalance: "₦40,000",
  },
  {
    id: "USR-103",
    name: "Chukwuma Eze",
    email: "chukwuma@ezehaulage.com",
    phone: "+234 802 811 9022",
    company: "Eze Haulage Global",
    joinedDate: "19 Sep 2026",
    status: "active",
    kycStatus: "verified",
    applicationsCount: 3,
    walletBalance: "₦12,500",
  },
  {
    id: "USR-104",
    name: "Fatima Aliyu",
    email: "fatima@kandidtech.io",
    phone: "+234 816 333 8811",
    company: "Kandid Express Cargo",
    joinedDate: "20 Sep 2026",
    status: "flagged",
    kycStatus: "rejected",
    applicationsCount: 1,
    walletBalance: "₦0",
  },
  {
    id: "USR-105",
    name: "Babajide Sanwo",
    email: "bsanwo@lagospress.com",
    phone: "+234 809 111 4433",
    company: "Lagos Press Consortium",
    joinedDate: "29 Sep 2026",
    status: "active",
    kycStatus: "verified",
    applicationsCount: 4,
    walletBalance: "₦320,000",
  },
  {
    id: "USR-106",
    name: "Ibrahim Musa",
    email: "ibrahim@musatrading.ng",
    phone: "+234 807 444 2110",
    company: "Musa Trading & Agro",
    joinedDate: "04 Oct 2026",
    status: "active",
    kycStatus: "verified",
    applicationsCount: 2,
    walletBalance: "₦75,000",
  },
];

export default function AdminUsersPage() {
  const [users, setUsers] = useState(initialUsers);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  const filteredUsers = users.filter((u) => {
    const matchesFilter = filter === "all" || u.status === filter;
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.company.toLowerCase().includes(search.toLowerCase()) ||
      u.id.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const toggleStatus = (user) => {
    const newStatus = user.status === "active" ? "flagged" : "active";
    setUsers(users.map((u) => (u.id === user.id ? { ...u, status: newStatus } : u)));
    showToast(`User ${user.name} is now ${newStatus.toUpperCase()}`);
    if (selectedUser && selectedUser.id === user.id) {
      setSelectedUser({ ...selectedUser, status: newStatus });
    }
  };

  return (
    <DashboardLayout activeItem="users" isAdmin={true}>
      {/* Page Title */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
        <div>
          <h1 style={{ font: "800 28px var(--display)", margin: 0 }}>User Roster & Access Control</h1>
          <p style={{ color: "var(--muted)", margin: "4px 0 0" }}>Manage customer accounts, KYC compliance levels, wallet balances, and account status.</p>
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
                placeholder="Search user by name, email, or company…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="filter-group">
            <div className="tab-bar" style={{ margin: 0, border: "none" }}>
              {[
                { key: "all", label: "All Users" },
                { key: "active", label: "Active" },
                { key: "flagged", label: "Flagged / Suspended" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  className={`tab-btn${filter === tab.key ? " active" : ""}`}
                  onClick={() => setFilter(tab.key)}
                >
                  {tab.label}
                  <span className="tab-count">
                    {tab.key === "all" ? users.length : users.filter((u) => u.status === tab.key).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="card">
        <div style={{ overflowX: "auto" }}>
          <table className="app-table">
            <thead>
              <tr>
                <th>User Account</th>
                <th>Company / Entity</th>
                <th>Joined</th>
                <th>KYC Status</th>
                <th>Filings</th>
                <th>Wallet Balance</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="8" style={{ textAlign: "center", padding: "40px", color: "var(--muted)" }}>
                    No users found matching your search.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((u) => (
                  <tr key={u.id}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{u.name}</div>
                      <div style={{ fontSize: 12, color: "var(--muted)" }}>{u.email}</div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 500 }}>{u.company}</div>
                      <div style={{ fontSize: 12, color: "var(--muted)" }}>{u.phone}</div>
                    </td>
                    <td style={{ color: "var(--muted)" }}>{u.joinedDate}</td>
                    <td>
                      <span className={`status-badge ${u.kycStatus === "verified" ? "approved" : u.kycStatus === "pending" ? "pending" : "rejected"}`}>
                        {u.kycStatus.toUpperCase()}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontWeight: 600 }}>{u.applicationsCount} filings</span>
                    </td>
                    <td>
                      <span style={{ fontWeight: 700, color: "var(--text)" }}>{u.walletBalance}</span>
                    </td>
                    <td>
                      <span className={`status-badge ${u.status === "active" ? "approved" : "rejected"}`}>
                        {u.status === "active" ? "Active" : "Suspended"}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => setSelectedUser(u)}
                        >
                          Profile
                        </button>
                        <button
                          className={`btn ${u.status === "active" ? "btn-danger" : "btn-success"} btn-sm`}
                          onClick={() => toggleStatus(u)}
                        >
                          {u.status === "active" ? "Suspend" : "Activate"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <div className="modal-overlay" onClick={() => setSelectedUser(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>User Profile: {selectedUser.name}</h3>
              <button className="modal-close" onClick={() => setSelectedUser(null)}>×</button>
            </div>
            <div className="modal-body">
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--blue)", color: "#fff", display: "grid", placeItems: "center", font: "700 20px var(--display)" }}>
                  {selectedUser.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 style={{ margin: 0, font: "700 18px var(--display)" }}>{selectedUser.name}</h4>
                  <div style={{ fontSize: 13, color: "var(--muted)" }}>{selectedUser.email} • ID: {selectedUser.id}</div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
                <div style={{ background: "var(--soft)", padding: 12, borderRadius: 10 }}>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>Company / Organization</div>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>{selectedUser.company}</div>
                </div>
                <div style={{ background: "var(--soft)", padding: 12, borderRadius: 10 }}>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>Phone Contact</div>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>{selectedUser.phone}</div>
                </div>
                <div style={{ background: "var(--soft)", padding: 12, borderRadius: 10 }}>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>KYC Clearance</div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: selectedUser.kycStatus === 'verified' ? '#059642' : '#D97706' }}>
                    {selectedUser.kycStatus.toUpperCase()}
                  </div>
                </div>
                <div style={{ background: "var(--soft)", padding: 12, borderRadius: 10 }}>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>Wallet Credits</div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{selectedUser.walletBalance}</div>
                </div>
              </div>

              <div style={{ borderTop: "1px solid var(--line)", paddingTop: 14, marginTop: 4 }}>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 6 }}>Administrative Actions:</div>
                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => {
                      showToast(`Password reset link emailed to ${selectedUser.email}.`);
                    }}
                  >
                    Send Password Reset
                  </button>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => {
                      showToast(`KYC reverification requested for ${selectedUser.name}.`);
                    }}
                  >
                    Request KYC Re-check
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setSelectedUser(null)}>Close</button>
              <button
                className={`btn ${selectedUser.status === "active" ? "btn-danger" : "btn-success"}`}
                onClick={() => toggleStatus(selectedUser)}
              >
                {selectedUser.status === "active" ? "Suspend Account" : "Activate Account"}
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
