"use client";

import Link from "next/link";
import AdminLayout from "@/components/AdminLayout";

export default function AdminDashboardPage() {
  return (
    <AdminLayout title="Overview">
      {/* 4 Metric Cards */}
      <div className="gr g4">
        <div className="cd">
          <p className="mu">New today</p>
          <p className="big">14</p>
        </div>
        <div className="cd">
          <p className="mu">In progress</p>
          <p className="big">37</p>
        </div>
        <div className="cd">
          <p className="mu">Waiting on partner</p>
          <p className="big">9</p>
        </div>
        <div className="cd">
          <p className="mu">Completed this week</p>
          <p className="big">52</p>
        </div>
      </div>

      {/* Latest Applications & Pipeline */}
      <div className="gr g21" style={{ marginTop: 20 }}>
        <div className="cd">
          <div className="row sp" style={{ marginBottom: 12 }}>
            <h3>Latest applications</h3>
            <Link
              href="/admin/dashboard/applications"
              style={{ color: "#0B5F82", fontWeight: 600 }}
            >
              View all
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Limited company</b>
                </td>
                <td>A. Okon</td>
                <td>Today</td>
                <td>
                  <span className="tg o">New</span>
                </td>
                <td>
                  <Link
                    href="/admin/dashboard/review"
                    style={{ color: "#0B5F82", fontWeight: 600 }}
                  >
                    Review
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <b>NIN plastic card</b>
                </td>
                <td>E. Bassey</td>
                <td>Today</td>
                <td>
                  <span className="tg o">New</span>
                </td>
                <td>
                  <Link
                    href="/admin/dashboard/review"
                    style={{ color: "#0B5F82", fontWeight: 600 }}
                  >
                    Review
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <b>FIRS TIN</b>
                </td>
                <td>M. Ita</td>
                <td>Yesterday</td>
                <td>
                  <span className="tg">With partner</span>
                </td>
                <td>
                  <Link
                    href="/admin/dashboard/review"
                    style={{ color: "#0B5F82", fontWeight: 600 }}
                  >
                    Review
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <b>SCUML</b>
                </td>
                <td>J. Effiong</td>
                <td>Yesterday</td>
                <td>
                  <span className="tg g">Ready</span>
                </td>
                <td>
                  <Link
                    href="/admin/dashboard/review"
                    style={{ color: "#0B5F82", fontWeight: 600 }}
                  >
                    Review
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cd">
          <h3>Pipeline</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 20 }}>
            <div>
              <div className="row sp" style={{ marginBottom: 6 }}>
                <span>New</span>
                <b>14</b>
              </div>
              <div className="pb o" style={{ "--w": "35%" }}>
                <i></i>
              </div>
            </div>
            <div>
              <div className="row sp" style={{ marginBottom: 6 }}>
                <span>With partner</span>
                <b>37</b>
              </div>
              <div className="pb" style={{ "--w": "80%" }}>
                <i></i>
              </div>
            </div>
            <div>
              <div className="row sp" style={{ marginBottom: 6 }}>
                <span>Filed with agency</span>
                <b>22</b>
              </div>
              <div className="pb" style={{ "--w": "55%" }}>
                <i></i>
              </div>
            </div>
            <div>
              <div className="row sp" style={{ marginBottom: 6 }}>
                <span>Ready</span>
                <b>52</b>
              </div>
              <div className="pb g" style={{ "--w": "100%" }}>
                <i></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Needs Attention */}
      <div className="cd" style={{ marginTop: 20 }}>
        <h3 style={{ marginBottom: 12 }}>Needs attention</h3>
        <table>
          <tbody>
            <tr>
              <td>BP-1042 is missing a passport photo</td>
              <td style={{ textAlign: "right" }}>
                <button
                  type="button"
                  className="tg o"
                  style={{ border: "none", cursor: "pointer" }}
                  onClick={() => alert("Passport photo request sent to customer BP-1042")}
                >
                  Request
                </button>
              </td>
            </tr>
            <tr>
              <td>BP-1031 has been with a partner for 5 days</td>
              <td style={{ textAlign: "right" }}>
                <button
                  type="button"
                  className="tg o"
                  style={{ border: "none", cursor: "pointer" }}
                  onClick={() => alert("Partner reminder sent for BP-1031")}
                >
                  Follow up
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
