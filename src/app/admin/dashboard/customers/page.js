"use client";

import { useState } from "react";
import Link from "next/link";
import AdminLayout from "@/components/AdminLayout";

const initialCustomers = [
  { name: "A. Okon", phone: "0803 000 0000", apps: 3, joined: "Sep 2026" },
  { name: "E. Bassey", phone: "0803 000 0001", apps: 1, joined: "Oct 2026" },
  { name: "M. Ita", phone: "0803 000 0002", apps: 2, joined: "Oct 2026" },
  { name: "J. Effiong", phone: "0803 000 0003", apps: 4, joined: "Aug 2026" },
];

export default function AdminCustomersPage() {
  const [search, setSearch] = useState("");

  const filtered = initialCustomers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
  );

  const searchAction = (
    <label
      className="in"
      style={{
        width: 260,
        display: "flex",
        alignItems: "center",
        margin: 0,
        padding: "0 12px",
      }}
    >
      <input
        aria-label="Search customers"
        placeholder="Search customers"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          border: 0,
          outline: 0,
          width: "100%",
          font: "inherit",
          background: "transparent",
        }}
      />
    </label>
  );

  return (
    <AdminLayout title="Customers" customAction={searchAction}>
      <div className="cd">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Applications</th>
              <th>Joined</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, idx) => (
              <tr key={idx}>
                <td>
                  <b>{c.name}</b>
                </td>
                <td>{c.phone}</td>
                <td>{c.apps}</td>
                <td>{c.joined}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => alert(`Customer details for ${c.name}: ${c.phone}, ${c.apps} active applications.`)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#0B5F82",
                      fontWeight: 600,
                      cursor: "pointer",
                      padding: 0,
                      font: "inherit",
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
