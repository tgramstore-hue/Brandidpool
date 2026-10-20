"use client";

import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";

export default function AdminReviewPage() {
  const [status, setStatus] = useState("With partner");
  const [assigned, setAssigned] = useState("Barr. Udo");
  const [note, setNote] = useState("");
  const [savedFeedback, setSavedFeedback] = useState("");

  const handleSaveUpdate = (e) => {
    e.preventDefault();
    setSavedFeedback("Update saved successfully.");
    setTimeout(() => setSavedFeedback(""), 3000);
  };

  const handleMarkReady = () => {
    setStatus("Ready");
    alert("Application marked as READY! Notification sent to customer.");
  };

  return (
    <AdminLayout title="BP-1042 Business name">
      <div className="gr g21">
        {/* Left Column: Details & Uploaded Documents */}
        <div className="gr">
          <div className="cd gr g2">
            <h3 style={{ gridColumn: "1/-1" }}>Applicant details</h3>
            <div>
              <label htmlFor="r1">Full name</label>
              <input className="in" id="r1" defaultValue="A. Okon" />
            </div>
            <div>
              <label htmlFor="r2">Date of birth</label>
              <input className="in" id="r2" defaultValue="01 / 01 / 1990" />
            </div>
            <div>
              <label htmlFor="r3">Phone</label>
              <input className="in" id="r3" defaultValue="0803 000 0000" />
            </div>
            <div>
              <label htmlFor="r4">NIN</label>
              <input className="in" id="r4" defaultValue="•••••••••••" />
            </div>
            <div>
              <label htmlFor="r5">Business name, first choice</label>
              <input className="in" id="r5" defaultValue="Name one" />
            </div>
            <div>
              <label htmlFor="r6">Business name, second choice</label>
              <input className="in" id="r6" defaultValue="Name two" />
            </div>
          </div>

          <div className="cd">
            <h3 style={{ marginBottom: 16 }}>Uploaded documents</h3>
            <div className="gr g4">
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    height: 96,
                    borderRadius: 12,
                    background: "#EEF4F8",
                    marginBottom: 8,
                    display: "grid",
                    placeItems: "center",
                    color: "#1FA7D9",
                  }}
                >
                  <svg className="i" viewBox="0 0 24 24" style={{ width: 28, height: 28 }}>
                    <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9zM14 3v6h6M8 13h8M8 17h6" />
                  </svg>
                </div>
                <span className="mu">ID</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    height: 96,
                    borderRadius: 12,
                    background: "#EEF4F8",
                    marginBottom: 8,
                    display: "grid",
                    placeItems: "center",
                    color: "#1FA7D9",
                  }}
                >
                  <svg className="i" viewBox="0 0 24 24" style={{ width: 28, height: 28 }}>
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
                  </svg>
                </div>
                <span className="mu">Passport photo</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    height: 96,
                    borderRadius: 12,
                    background: "#EEF4F8",
                    marginBottom: 8,
                    display: "grid",
                    placeItems: "center",
                    color: "#1FA7D9",
                  }}
                >
                  <svg className="i" viewBox="0 0 24 24" style={{ width: 28, height: 28 }}>
                    <path d="M16 3l5 5L8 21H3v-5L16 3z" />
                  </svg>
                </div>
                <span className="mu">Signature</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    height: 96,
                    borderRadius: 12,
                    background: "#EEF4F8",
                    marginBottom: 8,
                    display: "grid",
                    placeItems: "center",
                    color: "#0CCA4A",
                  }}
                >
                  <svg className="i" viewBox="0 0 24 24" style={{ width: 28, height: 28 }}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <span className="mu">Consent</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Process & Deliver Sidebar */}
        <aside className="gr" style={{ alignSelf: "start" }}>
          <form
            className="cd"
            onSubmit={handleSaveUpdate}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <h3>Process</h3>
            {savedFeedback && (
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#0B6B2B",
                  background: "#DDF7E6",
                  padding: "6px 12px",
                  borderRadius: 8,
                }}
              >
                {savedFeedback}
              </span>
            )}
            <div>
              <label htmlFor="s1">Status</label>
              <select
                className="in"
                id="s1"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="New">New</option>
                <option value="With partner">With partner</option>
                <option value="Filed with agency">Filed with agency</option>
                <option value="Ready">Ready</option>
              </select>
            </div>
            <div>
              <label htmlFor="s2">Assign to</label>
              <select
                className="in"
                id="s2"
                value={assigned}
                onChange={(e) => setAssigned(e.target.value)}
              >
                <option value="Unassigned">Unassigned</option>
                <option value="Barr. Udo">Barr. Udo</option>
                <option value="Partner A">Partner A</option>
                <option value="Partner B">Partner B</option>
              </select>
            </div>
            <div>
              <label htmlFor="s3">Internal note</label>
              <textarea
                className="in ta"
                id="s3"
                placeholder="Add a note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
            <button className="bt f" type="submit">
              Save update
            </button>
          </form>

          <div className="cd">
            <h3>Deliver</h3>
            <p className="mu" style={{ margin: "8px 0 16px" }}>
              Upload the finished document. The customer is notified.
            </p>
            <label
              className="bt f s l"
              style={{ cursor: "pointer", textAlign: "center", display: "block", lineHeight: "44px" }}
            >
              Upload document
              <input type="file" style={{ display: "none" }} onChange={() => alert("Document uploaded successfully.")} />
            </label>
            <button
              className="bt f s"
              type="button"
              style={{ marginTop: 12 }}
              onClick={handleMarkReady}
            >
              Mark as ready
            </button>
          </div>
        </aside>
      </div>
    </AdminLayout>
  );
}
