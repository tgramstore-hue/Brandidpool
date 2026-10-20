"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardShell";

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    firstName: "Adebayo",
    lastName: "Ogunlesi",
    email: "adebayo@whitestones.ng",
    phone: "+234 803 291 0491",
    company: "Whitestones Global Logistics Ltd",
    nin: "84920491823",
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    smsAlerts: true,
    weeklyReport: false,
    marketing: false,
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirmPass: "",
  });

  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    showToast("Profile details updated successfully!");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPass !== passwords.confirmPass) {
      showToast("Error: New passwords do not match.");
      return;
    }
    showToast("Security password updated successfully!");
    setPasswords({ current: "", newPass: "", confirmPass: "" });
  };

  return (
    <DashboardLayout activeItem="settings">
      {/* Page Title */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ font: "800 28px var(--display)", margin: 0 }}>Account Settings</h1>
        <p style={{ color: "var(--muted)", margin: "4px 0 0" }}>Manage your identity credentials, KYC verification, security, and alerts.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 24 }}>
        {/* Profile Details Form */}
        <div className="settings-section">
          <div className="settings-section-header">
            <h3>Personal & Company Profile</h3>
            <p>Update your contact info and primary business legal title.</p>
          </div>

          <form onSubmit={handleProfileSubmit}>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{ flex: 1 }}>
                <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>First Name</label>
                <input
                  type="text"
                  value={profile.firstName}
                  onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)" }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>Last Name</label>
                <input
                  type="text"
                  value={profile.lastName}
                  onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)" }}
                />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: 16 }}>
              <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>Email Address</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)" }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: 16 }}>
              <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>Phone Number</label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)" }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: 20 }}>
              <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>Company Legal Name</label>
              <input
                type="text"
                value={profile.company}
                onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)" }}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Save Profile Changes
            </button>
          </form>
        </div>

        {/* KYC & Identity Status */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div className="settings-section">
            <div className="settings-section-header">
              <h3>KYC & Verification Badges</h3>
              <p>Government database synchronization status.</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 12, background: "var(--soft)", borderRadius: 10 }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>National Identification Number (NIN)</div>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>NIN: 8492••••823</div>
                </div>
                <span className="status-badge approved">Verified</span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 12, background: "var(--soft)", borderRadius: 10 }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>Bank Verification Number (BVN)</div>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>CBN Biometric Linkage Active</div>
                </div>
                <span className="status-badge approved">Verified</span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 12, background: "var(--soft)", borderRadius: 10 }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>CAC Director Identification</div>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>Whitestones Global Logistics Ltd</div>
                </div>
                <span className="status-badge approved">Active</span>
              </div>
            </div>
          </div>

          {/* Notifications Toggles */}
          <div className="settings-section">
            <div className="settings-section-header">
              <h3>Notification Preferences</h3>
              <p>Choose when you receive updates.</p>
            </div>

            <div className="toggle-row">
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Email Status Alerts</div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>Notify when application milestone is reached</div>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={notifications.emailAlerts}
                  onChange={(e) => setNotifications({ ...notifications, emailAlerts: e.target.checked })}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="toggle-row">
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>SMS Instant Notifications</div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>Receive code when document is sealed</div>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={notifications.smsAlerts}
                  onChange={(e) => setNotifications({ ...notifications, smsAlerts: e.target.checked })}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Password & Security Section */}
      <div className="settings-section" style={{ maxWidth: 650, marginTop: 4 }}>
        <div className="settings-section-header">
          <h3>Security & Password</h3>
          <p>Keep your BrandIDPool portal credentials secure.</p>
        </div>

        <form onSubmit={handlePasswordSubmit}>
          <div className="form-group" style={{ marginBottom: 14 }}>
            <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>Current Password</label>
            <input
              type="password"
              required
              value={passwords.current}
              onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
              style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)" }}
            />
          </div>
          <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
            <div style={{ flex: 1 }}>
              <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>New Password</label>
              <input
                type="password"
                required
                value={passwords.newPass}
                onChange={(e) => setPasswords({ ...passwords, newPass: e.target.value })}
                style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ font: "600 13px var(--body)", marginBottom: 6, display: "block" }}>Confirm New Password</label>
              <input
                type="password"
                required
                value={passwords.confirmPass}
                onChange={(e) => setPasswords({ ...passwords, confirmPass: e.target.value })}
                style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line)" }}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-outline">
            Update Password
          </button>
        </form>
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
