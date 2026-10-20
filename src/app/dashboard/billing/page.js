"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardShell";
import Link from "next/link";

const initialTransactions = [
  { id: "INV-2026-881", service: "CAC Company Registration", category: "Corporate", amount: "₦45,000", date: "15 Oct 2026, 09:30 AM", type: "debit", status: "completed", method: "Mastercard •••• 4921" },
  { id: "INV-2026-879", service: "NIN Verification & Plastic Slip", category: "Identity", amount: "₦5,000", date: "12 Oct 2026, 11:20 AM", type: "debit", status: "completed", method: "Wallet Balance" },
  { id: "INV-2026-865", service: "D-U-N-S Global Identifier", category: "Global", amount: "₦120,000", date: "08 Oct 2026, 02:15 PM", type: "debit", status: "completed", method: "Direct Bank Transfer" },
  { id: "INV-2026-850", service: "SCUML AML Compliance Filing", category: "Compliance", amount: "₦35,000", date: "05 Oct 2026, 04:45 PM", type: "debit", status: "completed", method: "Mastercard •••• 4921" },
  { id: "TXN-2026-842", service: "Wallet Top-up Deposit", category: "Deposit", amount: "+₦200,000", date: "01 Oct 2026, 10:00 AM", type: "credit", status: "completed", method: "Wema Virtual NUBAN" },
];

export default function BillingPage() {
  const [balance, setBalance] = useState(185000);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [showTopupModal, setShowTopupModal] = useState(false);
  const [topupAmount, setTopupAmount] = useState("50000");
  const [paymentGateway, setPaymentGateway] = useState("paystack");
  const [viewReceipt, setViewReceipt] = useState(null);
  const [filterType, setFilterType] = useState("all");
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard?.writeText?.(text);
    setCopiedAccount(true);
    showToast("Virtual NUBAN copied to clipboard!");
    setTimeout(() => setCopiedAccount(false), 2500);
  };

  const handleTopupSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(topupAmount, 10) || 0;
    if (num <= 0) return;
    setBalance(balance + num);
    const newTx = {
      id: `TXN-2026-${Math.floor(900 + Math.random() * 99)}`,
      service: "Wallet Balance Deposit",
      category: "Deposit",
      amount: `+₦${num.toLocaleString()}`,
      date: "Just now",
      type: "credit",
      status: "completed",
      method: paymentGateway === "paystack" ? "Paystack Instant" : "Flutterwave Secure",
    };
    setTransactions([newTx, ...transactions]);
    setShowTopupModal(false);
    showToast(`Wallet credited with ₦${num.toLocaleString()}! New Balance: ₦${(balance + num).toLocaleString()}`);
  };

  const filteredTxns = transactions.filter((tx) => {
    if (filterType === "all") return true;
    if (filterType === "debit") return tx.type === "debit";
    if (filterType === "credit") return tx.type === "credit";
    return true;
  });

  return (
    <DashboardLayout activeItem="billing">
      {/* Page Title */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <h1 style={{ font: "800 28px var(--display)", margin: 0 }}>Wallet & Digital Billing</h1>
            <span className="live-indicator">
              <span className="dot"></span>
              Auto-Settlement Ready
            </span>
          </div>
          <p style={{ color: "var(--muted)", margin: "4px 0 0" }}>Manage pre-funded statutory credits, virtual account deposits, and payment invoices.</p>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn btn-outline" onClick={() => showToast("Exporting official tax statement (PDF)...")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 16, height: 16 }}>
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download Statement
          </button>
          <button className="btn btn-primary" onClick={() => setShowTopupModal(true)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 16, height: 16 }}>
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add Funds
          </button>
        </div>
      </div>

      {/* Top Fintech Card & Wallet Overview Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24, marginBottom: 28 }} className="anim-enter">
        {/* Realistic Virtual Debit Card */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="fintech-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ font: "800 18px var(--display)", letterSpacing: 0.5 }}>
                brandid<b>pool</b> <span style={{ fontSize: 10, opacity: 0.7, textTransform: "uppercase", letterSpacing: 1 }}>Corporate</span>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 22, height: 22, opacity: 0.8 }}>
                <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                <line x1="12" y1="20" x2="12.01" y2="20" />
              </svg>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div className="fintech-card-chip"></div>
              <span style={{ fontSize: 12, opacity: 0.8, letterSpacing: 1 }}>NFC VERIFIED</span>
            </div>

            <div className="fintech-card-number">
              4182 •••• •••• 4921
            </div>

            <div className="fintech-card-bottom">
              <div>
                <div style={{ fontSize: 9, opacity: 0.7, textTransform: "uppercase", letterSpacing: 1 }}>CARDHOLDER</div>
                <div style={{ font: "600 14px var(--display)", letterSpacing: 0.5 }}>ADEBAYO OGUNLESI</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 9, opacity: 0.7, textTransform: "uppercase", letterSpacing: 1 }}>EXPIRES</div>
                <div style={{ font: "600 14px var(--display)" }}>09/28</div>
              </div>
              <div style={{ width: 38, height: 24, position: "relative" }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#EB001B", position: "absolute", left: 0 }}></div>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#F79E1B", position: "absolute", right: 0, opacity: 0.9 }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Wallet Balance Details */}
        <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--muted)", textTransform: "uppercase", letterSpacing: 0.8 }}>
                Available Pre-paid Balance
              </span>
              <span className="live-indicator">
                <span className="dot"></span>
                Instant Filings Active
              </span>
            </div>

            <div style={{ font: "800 36px var(--display)", color: "var(--text)", letterSpacing: "-0.03em", marginBottom: 4 }}>
              ₦{balance.toLocaleString()}.00
            </div>
            <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 14 }}>
              Available for instant filings checkout.
            </div>
          </div>

          {/* Virtual Account Box */}
          <div style={{ background: "var(--soft)", padding: 14, borderRadius: 12, border: "1px dashed var(--line)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: 0.8, fontWeight: 700 }}>
                  Dedicated Virtual NUBAN
                </div>
                <div style={{ font: "700 16px var(--display)", marginTop: 2, color: "var(--text)" }}>
                  0829148102 • Wema Bank
                </div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>Whitestones / Adebayo Ogunlesi</div>
              </div>
              <button
                className="btn btn-secondary btn-sm copy-pill"
                onClick={() => copyToClipboard("0829148102")}
              >
                {copiedAccount ? "Copied! ✓" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spending Breakdown & Quick Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 24 }}>
        <div className="card" style={{ padding: "18px 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--muted)" }}>Debited This Month</span>
            <span style={{ fontSize: 12, color: "var(--blue)", fontWeight: 700 }}>4 Filings</span>
          </div>
          <div style={{ font: "800 22px var(--display)", color: "var(--text)" }}>₦205,000.00</div>
          <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>Corporate registration & compliance</div>
        </div>

        <div className="card" style={{ padding: "18px 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--muted)" }}>Payment Method</span>
            <span style={{ fontSize: 11, background: "rgba(12,202,74,.1)", color: "#059642", padding: "2px 8px", borderRadius: 6, fontWeight: 700 }}>DEFAULT</span>
          </div>
          <div style={{ font: "700 16px var(--display)", color: "var(--text)" }}>Mastercard •••• 4921</div>
          <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>Auto-refill threshold: ₦10,000</div>
        </div>

        <div className="card" style={{ padding: "18px 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--muted)" }}>Tax & VAT Paid</span>
            <span style={{ fontSize: 12, color: "#059642", fontWeight: 700 }}>Compliant</span>
          </div>
          <div style={{ font: "800 22px var(--display)", color: "var(--text)" }}>₦20,500 VAT</div>
          <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>Statutory remittances remitted</div>
        </div>
      </div>

      {/* Transactions & Invoices Table */}
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexWrap: "wrap", gap: 12 }}>
          <div>
            <h3 style={{ font: "700 18px var(--display)", margin: 0 }}>Transaction History</h3>
            <p style={{ fontSize: 13, color: "var(--muted)", margin: "2px 0 0" }}>Recent deposits, statutory debits, and receipts</p>
          </div>
          <div className="tab-bar" style={{ margin: 0, border: "none" }}>
            {[
              { key: "all", label: "All Activity" },
              { key: "debit", label: "Filings & Debits" },
              { key: "credit", label: "Wallet Deposits" },
            ].map((t) => (
              <button
                key={t.key}
                className={`tab-btn${filterType === t.key ? " active" : ""}`}
                onClick={() => setFilterType(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table className="app-table">
            <thead>
              <tr>
                <th>Invoice / Ref ID</th>
                <th>Service & Description</th>
                <th>Category</th>
                <th>Payment Channel</th>
                <th>Timestamp</th>
                <th>Amount</th>
                <th>Official Receipt</th>
              </tr>
            </thead>
            <tbody>
              {filteredTxns.map((tx) => (
                <tr key={tx.id}>
                  <td>
                    <span style={{ fontWeight: 700, fontFamily: "monospace", color: "var(--text)" }}>{tx.id}</span>
                  </td>
                  <td>
                    <div style={{ fontWeight: 600 }}>{tx.service}</div>
                  </td>
                  <td>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6, background: "var(--soft)", color: "var(--muted)" }}>
                      {tx.category}
                    </span>
                  </td>
                  <td style={{ color: "var(--muted)", fontSize: 13 }}>{tx.method}</td>
                  <td style={{ color: "var(--muted)", fontSize: 13 }}>{tx.date}</td>
                  <td>
                    <span
                      style={{
                        fontWeight: 800,
                        font: "700 15px var(--display)",
                        color: tx.type === "credit" ? "#059642" : "var(--text)",
                      }}
                    >
                      {tx.amount}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => setViewReceipt(tx)}
                    >
                      View Receipt
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top up Modal */}
      {showTopupModal && (
        <div className="modal-overlay" onClick={() => setShowTopupModal(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Add Funds to Filing Wallet</h3>
              <button className="modal-close" onClick={() => setShowTopupModal(false)}>×</button>
            </div>
            <form onSubmit={handleTopupSubmit}>
              <div className="modal-body">
                <p style={{ fontSize: 14, color: "var(--muted)", margin: 0 }}>
                  Pre-load your account to initiate instant CAC filings and identity searches with zero checkout friction.
                </p>

                <div className="form-group">
                  <label style={{ font: "600 13px var(--body)", marginBottom: 8, display: "block" }}>
                    Select Fast-Fill Amount
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 12 }}>
                    {["25000", "50000", "100000"].map((amt) => (
                      <button
                        type="button"
                        key={amt}
                        className={`btn ${topupAmount === amt ? "btn-primary" : "btn-secondary"}`}
                        onClick={() => setTopupAmount(amt)}
                        style={{ justifyContent: "center" }}
                      >
                        ₦{parseInt(amt).toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    min="1000"
                    value={topupAmount}
                    onChange={(e) => setTopupAmount(e.target.value)}
                    placeholder="Enter custom deposit amount"
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid var(--line)" }}
                  />
                </div>

                <div className="form-group">
                  <label style={{ font: "600 13px var(--body)", marginBottom: 8, display: "block" }}>
                    Secure Payment Gateway
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <div
                      style={{
                        border: paymentGateway === "paystack" ? "2px solid var(--blue)" : "1px solid var(--line)",
                        borderRadius: 10,
                        padding: 12,
                        cursor: "pointer",
                        background: paymentGateway === "paystack" ? "rgba(31,167,217,0.06)" : "var(--card)",
                      }}
                      onClick={() => setPaymentGateway("paystack")}
                    >
                      <div style={{ fontWeight: 700, fontSize: 14 }}>Paystack</div>
                      <div style={{ fontSize: 12, color: "var(--muted)" }}>Cards, USSD & Bank Transfers</div>
                    </div>
                    <div
                      style={{
                        border: paymentGateway === "flutterwave" ? "2px solid var(--blue)" : "1px solid var(--line)",
                        borderRadius: 10,
                        padding: 12,
                        cursor: "pointer",
                        background: paymentGateway === "flutterwave" ? "rgba(31,167,217,0.06)" : "var(--card)",
                      }}
                      onClick={() => setPaymentGateway("flutterwave")}
                    >
                      <div style={{ fontWeight: 700, fontSize: 14 }}>Flutterwave</div>
                      <div style={{ fontSize: 12, color: "var(--muted)" }}>Barter, Visa & Mastercard</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowTopupModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">
                  Confirm & Pay ₦{parseInt(topupAmount || 0).toLocaleString()}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Official Receipt Modal */}
      {viewReceipt && (
        <div className="modal-overlay" onClick={() => setViewReceipt(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Official Government Tax Invoice</h3>
              <button className="modal-close" onClick={() => setViewReceipt(null)}>×</button>
            </div>
            <div className="modal-body">
              <div style={{ border: "2px solid #E2E8F0", padding: 24, borderRadius: 12, background: "#fff", position: "relative" }}>
                <div style={{ position: "absolute", top: 18, right: 18, border: "2px solid #059642", color: "#059642", padding: "4px 10px", borderRadius: 6, fontWeight: 800, fontSize: 12, transform: "rotate(4deg)" }}>
                  ✓ PAID IN FULL
                </div>

                <div style={{ font: "800 22px var(--display)", color: "var(--navy)", marginBottom: 4 }}>
                  brandid<b>pool</b>
                </div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>Whitestones Wealth Hub Regulatory Filing Services</div>

                <div style={{ height: 1, background: "var(--line)", margin: "16px 0" }} />

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, fontSize: 13, marginBottom: 16 }}>
                  <div>
                    <div style={{ color: "var(--muted)" }}>Billed To:</div>
                    <div style={{ fontWeight: 700 }}>Whitestones Global Logistics Ltd</div>
                    <div style={{ color: "var(--muted)" }}>Adebayo Ogunlesi (adebayo@whitestones.ng)</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ color: "var(--muted)" }}>Invoice Reference:</div>
                    <div style={{ fontWeight: 700, fontFamily: "monospace" }}>{viewReceipt.id}</div>
                    <div style={{ color: "var(--muted)" }}>Date: {viewReceipt.date}</div>
                  </div>
                </div>

                <div style={{ background: "var(--soft)", padding: 14, borderRadius: 8, fontSize: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontWeight: 600 }}>{viewReceipt.service}</span>
                    <span style={{ fontWeight: 700 }}>{viewReceipt.amount}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--muted)" }}>
                    <span>Payment Channel: {viewReceipt.method}</span>
                    <span>Status: Verified & Cleared</span>
                  </div>
                </div>

                <div style={{ height: 1, background: "var(--line)", margin: "16px 0" }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontSize: 11, color: "var(--muted)" }}>
                    Cryptographically generated electronic seal.<br />
                    FIRS Tax Compliance Ref: WHT-2026-9921
                  </div>
                  <div style={{ textAlign: "right", font: "800 20px var(--display)", color: "var(--blue)" }}>
                    {viewReceipt.amount}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setViewReceipt(null)}>Close</button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  showToast("Invoice saved as PDF.");
                  setViewReceipt(null);
                }}
              >
                Download Signed PDF
              </button>
            </div>
          </div>
        </div>
      )}

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
