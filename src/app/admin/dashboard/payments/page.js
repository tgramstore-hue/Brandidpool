"use client";

import AdminLayout from "@/components/AdminLayout";

const adminPayments = [
  {
    ref: "PSK-48A1",
    service: "Business name",
    amount: "₦45,000",
    status: "Paid",
    tagClass: "tg g",
    action: "Receipt",
  },
  {
    ref: "PSK-48A0",
    service: "NIN slip",
    amount: "₦1,200",
    status: "Paid",
    tagClass: "tg g",
    action: "Receipt",
  },
  {
    ref: "PSK-489F",
    service: "BVN verification",
    amount: "₦500",
    status: "Failed",
    tagClass: "tg o",
    action: "Retry",
  },
  {
    ref: "PSK-489E",
    service: "Trademark",
    amount: "₦50,000",
    status: "Refunded",
    tagClass: "tg",
    action: "View",
  },
];

export default function AdminPaymentsPage() {
  const handleAction = (item) => {
    alert(`${item.action} action for ${item.ref} (${item.service})`);
  };

  return (
    <AdminLayout title="Payments">
      {/* 3 Metric Cards */}
      <div className="gr g3" style={{ marginBottom: 20 }}>
        <div className="cd">
          <p className="mu">Paid today</p>
          <p className="big">₦46,200</p>
        </div>
        <div className="cd">
          <p className="mu">Pending</p>
          <p className="big">3</p>
        </div>
        <div className="cd">
          <p className="mu">Refunds</p>
          <p className="big">1</p>
        </div>
      </div>

      {/* Payments Table */}
      <div className="cd">
        <table>
          <thead>
            <tr>
              <th>Paystack reference</th>
              <th>Service</th>
              <th>Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {adminPayments.map((p) => (
              <tr key={p.ref}>
                <td>
                  <b>{p.ref}</b>
                </td>
                <td>{p.service}</td>
                <td>{p.amount}</td>
                <td>
                  <span className={p.tagClass}>{p.status}</span>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleAction(p)}
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
                    {p.action}
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
