"use client";

import Link from "next/link";
import UserLayout from "@/components/UserLayout";

export default function DashboardPage() {
  return (
    <UserLayout title="Hello, Adaeze" actionLabel="New application" actionHref="/dashboard/apply">
      {/* 3 Metric Cards */}
      <div className="gr g3">
        <div className="cd">
          <p className="mu">In progress</p>
          <p className="big">2</p>
        </div>
        <div className="cd">
          <p className="mu">Ready to download</p>
          <p className="big">1</p>
        </div>
        <div className="cd">
          <p className="mu">Awaiting payment</p>
          <p className="big">0</p>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="dk row sp" style={{ margin: "20px 0", flexWrap: "wrap", gap: 16 }}>
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 600 }}>Start a new application</h2>
          <p style={{ color: "#C3D6DE", marginTop: 6 }}>Choose a service and fill one form.</p>
        </div>
        <Link className="bt w" href="/dashboard/services">
          Browse services
        </Link>
      </div>

      {/* Recent Applications & Ready For You */}
      <div className="gr g21">
        <div className="cd">
          <div className="row sp" style={{ marginBottom: 12 }}>
            <h3>Recent applications</h3>
            <Link href="/dashboard/applications" style={{ color: "#0B5F82", fontWeight: 600 }}>
              View all
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link href="/dashboard/applications/BP-1042" style={{ color: "inherit", textDecoration: "none" }}>
                    <b>Business name registration</b>
                  </Link>
                </td>
                <td>12 Oct</td>
                <td>
                  <span className="tg o">With partner</span>
                </td>
              </tr>
              <tr>
                <td>
                  <Link href="/dashboard/applications/BP-1038" style={{ color: "inherit", textDecoration: "none" }}>
                    <b>NIN slip</b>
                  </Link>
                </td>
                <td>08 Oct</td>
                <td>
                  <span className="tg g">Ready</span>
                </td>
              </tr>
              <tr>
                <td>
                  <Link href="/dashboard/applications/BP-1021" style={{ color: "inherit", textDecoration: "none" }}>
                    <b>FIRS TIN</b>
                  </Link>
                </td>
                <td>02 Oct</td>
                <td>
                  <span className="tg">Filed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cd">
          <h3>Ready for you</h3>
          <p className="mu" style={{ margin: "8px 0 20px" }}>
            NIN slip, PDF
          </p>
          <Link className="bt f s" href="/dashboard/documents">
            Download
          </Link>
        </div>
      </div>

      {/* Popular Services */}
      <h3 style={{ margin: "32px 0 16px" }}>Popular services</h3>
      <div className="gr g4">
        <Link className="tile t1" href="/dashboard/apply">
          <h3>NIN slip</h3>
          <span>₦1,200</span>
        </Link>
        <Link className="tile t2" href="/dashboard/apply">
          <h3>Business name</h3>
          <span>₦45,000</span>
        </Link>
        <Link className="tile t3" href="/dashboard/apply">
          <h3>FIRS TIN</h3>
          <span>₦5,000</span>
        </Link>
        <Link className="tile t4" href="/dashboard/apply">
          <h3>Trademark</h3>
          <span>₦50,000</span>
        </Link>
      </div>
    </UserLayout>
  );
}
