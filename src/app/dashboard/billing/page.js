"use client";

import UserLayout from "@/components/UserLayout";

const paymentsList = [
  {
    service: "Business name registration",
    date: "12 Oct",
    amount: "₦45,000",
    status: "Paid",
    tagClass: "tg g",
  },
  {
    service: "NIN slip",
    date: "08 Oct",
    amount: "₦1,200",
    status: "Paid",
    tagClass: "tg g",
  },
  {
    service: "FIRS TIN",
    date: "02 Oct",
    amount: "₦5,000",
    status: "Paid",
    tagClass: "tg g",
  },
  {
    service: "BVN verification",
    date: "25 Sep",
    amount: "₦500",
    status: "Paid",
    tagClass: "tg g",
  },
];

export default function PaymentsPage() {
  const handleReceipt = (service) => {
    alert(`Viewing official receipt for: ${service}`);
  };

  return (
    <UserLayout title="Payments">
      <div className="cd">
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {paymentsList.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <b>{item.service}</b>
                </td>
                <td>{item.date}</td>
                <td>{item.amount}</td>
                <td>
                  <span className={item.tagClass}>{item.status}</span>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleReceipt(item.service)}
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
                    Receipt
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </UserLayout>
  );
}
