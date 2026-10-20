"use client";

import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";

const initialServicePricing = [
  { name: "BVN verification", price: "₦500", active: true },
  { name: "NIN slip (PDF)", price: "₦1,200", active: true },
  { name: "NIN plastic card", price: "₦6,000", active: true },
  { name: "NIN card delivery", price: "₦2,000", active: true },
  { name: "Business name + FIRS TIN", price: "₦45,000", active: true },
  { name: "Limited company + FIRS TIN", price: "₦70,000", active: true },
  { name: "Upgrade to limited company", price: "₦70,000", active: true },
  { name: "NGO registration + FIRS TIN", price: "₦140,000", active: true },
  { name: "NGO trustee declaration", price: "₦3,000", active: true },
  { name: "CAC documents retrieval", price: "₦10,000", active: true },
  { name: "FIRS TIN registration", price: "₦5,000", active: true },
  { name: "Tax ID registration", price: "₦5,000", active: true },
  { name: "SCUML fast-tracking", price: "₦40,000", active: true },
  { name: "SCUML certificate retrieval", price: "₦30,000", active: true },
  { name: "Trademark registration", price: "₦50,000", active: true },
  { name: "Trademark fast-tracking", price: "₦25,000", active: true },
  { name: "Copyright registration", price: "₦60,000", active: true },
  { name: "Export licence", price: "Price to be set", active: true },
  { name: "D-U-N-S number request", price: "Price to be set", active: true },
];

export default function AdminServicesPage() {
  const [items, setItems] = useState(initialServicePricing);
  const [saved, setSaved] = useState(false);

  const handlePriceChange = (index, newPrice) => {
    const updated = [...items];
    updated[index].price = newPrice;
    setItems(updated);
  };

  const handleToggle = (index) => {
    const updated = [...items];
    updated[index].active = !updated[index].active;
    setItems(updated);
  };

  const handleSavePrices = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const saveAction = (
    <button
      className="bt s"
      type="button"
      onClick={handleSavePrices}
    >
      {saved ? "Saved!" : "Save prices"}
    </button>
  );

  return (
    <AdminLayout title="Services and pricing" customAction={saveAction}>
      {saved && (
        <div
          style={{
            marginBottom: 20,
            padding: "12px 20px",
            background: "#DDF7E6",
            color: "#0B6B2B",
            borderRadius: 12,
            fontWeight: 600,
          }}
        >
          All service pricing and activation statuses updated!
        </div>
      )}

      <div className="cd">
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Price</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {items.map((svc, idx) => (
              <tr key={idx}>
                <td>
                  <b>{svc.name}</b>
                </td>
                <td>
                  <input
                    className="in"
                    aria-label={`Price for ${svc.name}`}
                    value={svc.price}
                    onChange={(e) => handlePriceChange(idx, e.target.value)}
                    style={{ height: 44, maxWidth: 200 }}
                  />
                </td>
                <td>
                  <input
                    className="tgl"
                    type="checkbox"
                    aria-label="Active"
                    checked={svc.active}
                    onChange={() => handleToggle(idx)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
