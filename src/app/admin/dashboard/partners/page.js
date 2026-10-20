"use client";

import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";

const initialPartners = [
  {
    initials: "BU",
    name: "Barr. Udo",
    role: "Lawyer, CAC and trademarks",
    load: "70%",
    progressClass: "pb",
  },
  {
    initials: "PA",
    name: "Partner A",
    role: "Agent, FIRS and SCUML",
    load: "40%",
    progressClass: "pb",
  },
  {
    initials: "PB",
    name: "Partner B",
    role: "Agent, identity cards",
    load: "25%",
    progressClass: "pb",
  },
];

export default function AdminPartnersPage() {
  const [partners, setPartners] = useState(initialPartners);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPartnerName, setNewPartnerName] = useState("");
  const [newPartnerRole, setNewPartnerRole] = useState("");

  const handleAddPartner = (e) => {
    e.preventDefault();
    if (!newPartnerName) return;
    const initials = newPartnerName
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
    setPartners([
      ...partners,
      {
        initials: initials || "NP",
        name: newPartnerName,
        role: newPartnerRole || "Accredited partner",
        load: "0%",
        progressClass: "pb",
      },
    ]);
    setNewPartnerName("");
    setNewPartnerRole("");
    setShowAddModal(false);
  };

  const addPartnerAction = (
    <button
      className="bt s"
      type="button"
      onClick={() => setShowAddModal(true)}
    >
      Add partner
    </button>
  );

  return (
    <AdminLayout title="Partners" customAction={addPartnerAction}>
      {showAddModal && (
        <div
          className="cd"
          style={{
            marginBottom: 24,
            border: "1px solid #1FA7D9",
            maxWidth: 500,
          }}
        >
          <h3 style={{ marginBottom: 16 }}>Add new partner</h3>
          <form onSubmit={handleAddPartner} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div>
              <label htmlFor="pname">Full name</label>
              <input
                className="in"
                id="pname"
                placeholder="e.g. Barr. Kalu"
                value={newPartnerName}
                onChange={(e) => setNewPartnerName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="prole">Specialization / Role</label>
              <input
                className="in"
                id="prole"
                placeholder="e.g. Lawyer, CAC & Licensing"
                value={newPartnerRole}
                onChange={(e) => setNewPartnerRole(e.target.value)}
                required
              />
            </div>
            <div className="row" style={{ marginTop: 8 }}>
              <button className="bt s" type="submit">
                Save Partner
              </button>
              <button
                className="bt s l"
                type="button"
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="gr g3">
        {partners.map((p, idx) => (
          <div className="cd" key={idx}>
            <div className="row">
              <span className="av">{p.initials}</span>
              <div>
                <h3>{p.name}</h3>
                <p className="mu">{p.role}</p>
              </div>
            </div>
            <p className="mu" style={{ margin: "20px 0 8px" }}>
              Open workload ({p.load})
            </p>
            <div className={p.progressClass} style={{ "--w": p.load }}>
              <i></i>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
