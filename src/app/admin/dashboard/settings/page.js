"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardShell";

const initialAuditLogs = [
  { id: "LOG-9921", admin: "System Admin (admin@brandidpool.com)", action: "Approved CAC Application APP-2026-001", time: "10 mins ago", ip: "102.89.23.14" },
  { id: "LOG-9920", admin: "Super Admin", action: "Updated CAC Ltd filing fee to ₦45,000", time: "1 hour ago", ip: "197.210.45.8" },
  { id: "LOG-9919", admin: "Compliance Officer #2", action: "Requested identity docs for APP-2026-003", time: "3 hours ago", ip: "105.112.78.90" },
  { id: "LOG-9918", admin: "System Admin", action: "Synchronized NIMC API Token Gateway", time: "5 hours ago", ip: "102.89.23.14" },
  { id: "LOG-9917", admin: "System Admin", action: "Rejected trademark application APP-2026-006", time: "1 day ago", ip: "102.89.23.14" },
];

export default function AdminSettingsPage() {
  const [apiKeys, setApiKeys] = useState({
    nimcKey: "nimc_live_992a0149f810b42c982",
    cacKey: "cac_crp_sec_8849102481029481",
    paystackSecret: "sk_live_049281904128940128490",
    dunsApiToken: "dnb_global_token_559128401",
  });

  const [toggles, setToggles] = useState({
    require2fa: true,
    autoApproveNIN: true,
    emailAlertsOnFiling: true,
    maintenanceMode: false,
  });

  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  const handleSaveApiKeys = (e) => {
    e.preventDefault();
    showToast("Registry API credentials cryptographically stored.");
  };

  return (
    <DashboardLayout activeItem="settings" isAdmin={true}>
      {/* Page Title */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ font: "800 28px var(--display)", margin: 0 }}>System Configuration & Security</h1>
        <p style={{ color: "var(--muted)", margin: "4px 0 0" }}>Manage government registry API bridges, admin team permissions, and audit trails.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 24 }}>
        {/* Government API Gateway Config */}
        <div className="settings-section">
          <div className="settings-section-header">
            <h3>Regulatory API Gateways</h3>
            <p>Secure connections to government automated registries.</p>
          </div>

          <form onSubmit={handleSaveApiKeys}>
            <div className="form-group" style={{ marginBottom: 14 }}>
              <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>
                NIMC Identity Verification API Secret
              </label>
              <input
                type="password"
                value={apiKeys.nimcKey}
                onChange={(e) => setApiKeys({ ...apiKeys, nimcKey: e.target.value })}
                style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)", fontFamily: "monospace" }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: 14 }}>
              <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>
                Corporate Affairs Commission (CAC CRP) Token
              </label>
              <input
                type="password"
                value={apiKeys.cacKey}
                onChange={(e) => setApiKeys({ ...apiKeys, cacKey: e.target.value })}
                style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)", fontFamily: "monospace" }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: 14 }}>
              <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>
                Paystack / Flutterwave Live Secret Key
              </label>
              <input
                type="password"
                value={apiKeys.paystackSecret}
                onChange={(e) => setApiKeys({ ...apiKeys, paystackSecret: e.target.value })}
                style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)", fontFamily: "monospace" }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: 20 }}>
              <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>
                Dun & Bradstreet USA Direct API Client
              </label>
              <input
                type="password"
                value={apiKeys.dunsApiToken}
                onChange={(e) => setApiKeys({ ...apiKeys, dunsApiToken: e.target.value })}
                style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)", fontFamily: "monospace" }}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Save API Credentials
            </button>
          </form>
        </div>

        {/* System Policies & Automation */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div className="settings-section">
            <div className="settings-section-header">
              <h3>System Automation Rules</h3>
              <p>Automated verification pipelines and security gates.</p>
            </div>

            <div className="toggle-row">
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Instant NIN Auto-Approval</div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>When NIMC biometric score is 100% match</div>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={toggles.autoApproveNIN}
                  onChange={(e) => setToggles({ ...toggles, autoApproveNIN: e.target.checked })}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="toggle-row">
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Enforce Staff 2FA Authentication</div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>Mandatory OTP for all admin dashboard logins</div>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={toggles.require2fa}
                  onChange={(e) => setToggles({ ...toggles, require2fa: e.target.checked })}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="toggle-row">
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Email Notifications on New Filings</div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>Send alert to duty officer when application arrives</div>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={toggles.emailAlertsOnFiling}
                  onChange={(e) => setToggles({ ...toggles, emailAlertsOnFiling: e.target.checked })}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="toggle-row">
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Public Portal Maintenance Mode</div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>Pause customer filing submissions for scheduled maintenance</div>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={toggles.maintenanceMode}
                  onChange={(e) => setToggles({ ...toggles, maintenanceMode: e.target.checked })}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Log */}
      <div className="card" style={{ marginTop: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h3 style={{ font: "700 18px var(--display)" }}>Administrative Audit Trail</h3>
          <span style={{ fontSize: 12, color: "var(--muted)" }}>Showing last 5 events</span>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table className="app-table">
            <thead>
              <tr>
                <th>Log ID</th>
                <th>Operator</th>
                <th>Action Performed</th>
                <th>IP Address</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {initialAuditLogs.map((log) => (
                <tr key={log.id}>
                  <td>
                    <span style={{ fontWeight: 700, fontFamily: "monospace" }}>{log.id}</span>
                  </td>
                  <td>
                    <span style={{ fontWeight: 600 }}>{log.admin}</span>
                  </td>
                  <td>{log.action}</td>
                  <td style={{ fontFamily: "monospace", fontSize: 13, color: "var(--muted)" }}>{log.ip}</td>
                  <td style={{ color: "var(--muted)", fontSize: 13 }}>{log.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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
