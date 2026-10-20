"use client";

import AdminLayout from "@/components/AdminLayout";
import Link from "next/link";

export default function AdminAnalyticsPage() {
  return (
    <AdminLayout title="Analytics">
      <div className="gr g4">
        <div className="cd">
          <p className="mu">Total volume (MTD)</p>
          <p className="big">₦4.2M</p>
        </div>
        <div className="cd">
          <p className="mu">Turnaround rate</p>
          <p className="big">94%</p>
        </div>
        <div className="cd">
          <p className="mu">Active partners</p>
          <p className="big">12</p>
        </div>
        <div className="cd">
          <p className="mu">Completed applications</p>
          <p className="big">318</p>
        </div>
      </div>

      <div className="cd" style={{ marginTop: 20 }}>
        <h3>Monthly filing velocity</h3>
        <p className="mu" style={{ margin: "8px 0 20px" }}>
          Applications completed per category this month
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <div className="row sp" style={{ marginBottom: 6 }}>
              <span>Identity & NIN</span>
              <b>142</b>
            </div>
            <div className="pb" style={{ "--w": "85%" }}>
              <i></i>
            </div>
          </div>
          <div>
            <div className="row sp" style={{ marginBottom: 6 }}>
              <span>Business registration & CAC</span>
              <b>98</b>
            </div>
            <div className="pb o" style={{ "--w": "60%" }}>
              <i></i>
            </div>
          </div>
          <div>
            <div className="row sp" style={{ marginBottom: 6 }}>
              <span>Tax & SCUML</span>
              <b>78</b>
            </div>
            <div className="pb g" style={{ "--w": "45%" }}>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
