"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import UserLayout from "@/components/UserLayout";

export default function ApplicationDetailPage() {
  const params = useParams();
  const id = params?.id || "BP-1042";

  return (
    <UserLayout title="Business name registration">
      <div className="gr g21">
        {/* Left Column: Progress Timeline */}
        <div className="cd">
          <div className="row sp" style={{ marginBottom: 28 }}>
            <h3>Progress</h3>
            <span className="tg o">With partner</span>
          </div>

          <div className="tl d">
            <i></i>
            <div>
              <b>Submitted</b>
              <p className="mu">12 Oct, 09:14</p>
            </div>
          </div>

          <div className="tl d">
            <i></i>
            <div>
              <b>Payment received</b>
              <p className="mu">12 Oct, 09:16</p>
            </div>
          </div>

          <div className="tl c">
            <i></i>
            <div>
              <b>Partner is filing with CAC</b>
              <p className="mu">In progress</p>
            </div>
          </div>

          <div className="tl">
            <i></i>
            <div>
              <b>Certificate issued</b>
              <p className="mu">Pending</p>
            </div>
          </div>

          <div className="tl">
            <i></i>
            <div>
              <b>Ready to download</b>
              <p className="mu">Pending</p>
            </div>
          </div>
        </div>

        {/* Right Column: Summary, Documents, Need Help */}
        <div className="gr" style={{ alignSelf: "start" }}>
          <div className="cd">
            <h3>Summary</h3>
            <p className="mu" style={{ marginTop: 8 }}>
              Reference {id}
            </p>
            <p className="mu">Paid ₦45,000</p>
          </div>

          <div className="cd">
            <h3>Documents</h3>
            <p className="mu" style={{ margin: "8px 0 20px" }}>
              Your certificate will appear here.
            </p>
            <span className="bt f s l" style={{ opacity: 0.7, cursor: "not-allowed" }}>
              Not ready yet
            </span>
          </div>

          <div className="cd">
            <h3>Need help?</h3>
            <p className="mu" style={{ margin: "8px 0 20px" }}>
              Ask us about this application.
            </p>
            <a
              className="bt f s l"
              href="mailto:support@brandidpool.com"
            >
              Contact support
            </a>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
