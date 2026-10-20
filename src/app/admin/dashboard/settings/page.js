"use client";

import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";

export default function AdminSettingsPage() {
  const [adminEmail, setAdminEmail] = useState("staff@brandidpool.com");
  const [twoFactor, setTwoFactor] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <AdminLayout title="Settings">
      <form onSubmit={handleSave}>
        <div className="cd gr g2" style={{ maxWidth: 800 }}>
          <div style={{ gridColumn: "1/-1" }}>
            <h3>Admin console settings</h3>
            <p className="mu">Configure security preferences and operational controls.</p>
            {saved && (
              <div
                style={{
                  marginTop: 12,
                  padding: "10px 16px",
                  borderRadius: 12,
                  background: "#DDF7E6",
                  color: "#0B6B2B",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Settings saved successfully!
              </div>
            )}
          </div>

          <div style={{ gridColumn: "1/-1" }}>
            <label htmlFor="ad-email">Staff email address</label>
            <input
              className="in"
              id="ad-email"
              type="email"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
            />
          </div>

          <div style={{ gridColumn: "1/-1" }}>
            <div className="row sp" style={{ padding: "12px 0", borderBottom: "1px solid #EEF2F5" }}>
              <div>
                <b>Two-factor authentication (2FA)</b>
                <p className="mu" style={{ fontSize: 14 }}>
                  Require authenticator code on every staff sign-in
                </p>
              </div>
              <input
                className="tgl"
                type="checkbox"
                checked={twoFactor}
                onChange={() => setTwoFactor(!twoFactor)}
              />
            </div>
          </div>

          <div style={{ gridColumn: "1/-1" }}>
            <div className="row sp" style={{ padding: "12px 0", borderBottom: "1px solid #EEF2F5" }}>
              <div>
                <b>New application notifications</b>
                <p className="mu" style={{ fontSize: 14 }}>
                  Send instantaneous alerts to partner queue when filed
                </p>
              </div>
              <input
                className="tgl"
                type="checkbox"
                checked={emailAlerts}
                onChange={() => setEmailAlerts(!emailAlerts)}
              />
            </div>
          </div>

          <div style={{ gridColumn: "1/-1", marginTop: 8 }}>
            <button className="bt" type="submit">
              Save settings
            </button>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
}
