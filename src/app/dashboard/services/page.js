"use client";

import { useState } from "react";
import Link from "next/link";
import UserLayout from "@/components/UserLayout";

const allServices = [
  { category: "Identity", tagClass: "", name: "BVN verification", price: "₦500" },
  { category: "Identity", tagClass: "", name: "NIN slip (PDF)", price: "₦1,200" },
  { category: "Identity", tagClass: "", name: "NIN plastic card", price: "₦6,000 + optional delivery" },
  { category: "Business", tagClass: "o", name: "Business name + FIRS TIN", price: "₦45,000" },
  { category: "Business", tagClass: "o", name: "Limited company + FIRS TIN", price: "₦70,000" },
  { category: "Business", tagClass: "o", name: "Upgrade to limited company", price: "₦70,000" },
  { category: "Business", tagClass: "o", name: "NGO registration + FIRS TIN", price: "₦140,000" },
  { category: "Business", tagClass: "o", name: "NGO trustee declaration", price: "₦3,000 per trustee" },
  { category: "Business", tagClass: "o", name: "CAC documents retrieval", price: "₦10,000 per document" },
  { category: "Tax", tagClass: "g", name: "FIRS TIN registration", price: "₦5,000" },
  { category: "Tax", tagClass: "g", name: "Tax ID registration", price: "₦5,000" },
  { category: "Tax", tagClass: "g", name: "SCUML fast-tracking", price: "₦40,000" },
  { category: "Tax", tagClass: "g", name: "SCUML certificate retrieval", price: "₦30,000" },
  { category: "Licensing", tagClass: "", name: "Trademark registration", price: "₦50,000" },
  { category: "Licensing", tagClass: "", name: "Trademark fast-tracking", price: "₦25,000" },
  { category: "Licensing", tagClass: "", name: "Copyright registration", price: "₦60,000" },
  { category: "Licensing", tagClass: "", name: "Export licence", price: "Price to be set" },
  { category: "Global", tagClass: "", name: "D-U-N-S number request", price: "Price to be set" },
];

const categories = ["All", "Identity", "Business", "Tax", "Licensing", "Global"];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? allServices
      : allServices.filter((s) => s.category === activeTab);

  return (
    <UserLayout title="Services">
      <p className="mu" style={{ margin: "-16px 0 24px" }}>
        Pick a service. We guide you through one simple form.
      </p>

      {/* Categories Filter */}
      <div className="row" style={{ marginBottom: 24, flexWrap: "wrap", gap: 8 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`bt s ${activeTab === cat ? "" : "l"}`}
            onClick={() => setActiveTab(cat)}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="gr g3">
        {filtered.map((item, idx) => (
          <Link
            key={idx}
            className="cd"
            href="/dashboard/apply"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <span
              className={`tg ${item.tagClass}`}
              style={{ alignSelf: "flex-start" }}
            >
              {item.category}
            </span>
            <h3>{item.name}</h3>
            <p className="mu">{item.price}</p>
          </Link>
        ))}
      </div>
    </UserLayout>
  );
}
