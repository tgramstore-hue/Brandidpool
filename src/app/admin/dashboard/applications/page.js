"use client";

import { useState } from "react";
import Link from "next/link";
import AdminLayout from "@/components/AdminLayout";

const allQueue = [
  {
    ref: "BP-1042",
    service: "Business name",
    customer: "A. Okon",
    assigned: "Unassigned",
    status: "New",
    tagClass: "tg o",
  },
  {
    ref: "BP-1041",
    service: "NIN slip",
    customer: "E. Bassey",
    assigned: "Self-serve",
    status: "Ready",
    tagClass: "tg g",
  },
  {
    ref: "BP-1040",
    service: "Limited company",
    customer: "M. Ita",
    assigned: "Barr. Udo",
    status: "With partner",
    tagClass: "tg",
  },
  {
    ref: "BP-1039",
    service: "FIRS TIN",
    customer: "J. Effiong",
    assigned: "Partner A",
    status: "Filed",
    tagClass: "tg",
  },
  {
    ref: "BP-1038",
    service: "Trademark",
    customer: "U. Etim",
    assigned: "Barr. Udo",
    status: "With partner",
    tagClass: "tg",
  },
];

const filters = ["All", "New", "With partner", "Filed", "Ready"];

export default function AdminApplicationsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? allQueue
      : allQueue.filter((item) => item.status.toLowerCase() === activeFilter.toLowerCase());

  const exportAction = (
    <button
      className="bt s l"
      type="button"
      onClick={() => alert("Exporting applications CSV report...")}
    >
      Export
    </button>
  );

  return (
    <AdminLayout title="Applications" customAction={exportAction}>
      {/* Filter Tabs */}
      <div className="row" style={{ marginBottom: 24, flexWrap: "wrap", gap: 8 }}>
        {filters.map((f) => (
          <button
            key={f}
            className={`bt s ${activeFilter === f ? "" : "l"}`}
            onClick={() => setActiveFilter(f)}
            type="button"
          >
            {f}
          </button>
        ))}
      </div>

      {/* Applications Queue Table */}
      <div className="cd">
        <table>
          <thead>
            <tr>
              <th>Reference</th>
              <th>Service</th>
              <th>Customer</th>
              <th>Assigned</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.ref}>
                <td>
                  <b>{item.ref}</b>
                </td>
                <td>{item.service}</td>
                <td>{item.customer}</td>
                <td>{item.assigned}</td>
                <td>
                  <span className={item.tagClass}>{item.status}</span>
                </td>
                <td>
                  <Link
                    href={`/admin/dashboard/review?ref=${item.ref}`}
                    style={{ color: "#0B5F82", fontWeight: 600 }}
                  >
                    Open
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
