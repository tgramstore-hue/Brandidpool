"use client";

import { useState } from "react";
import Link from "next/link";
import UserLayout from "@/components/UserLayout";

export default function ApplicationFormPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!confirmed) {
      alert("Please confirm your details before proceeding.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <UserLayout title="Limited company registration">
      {/* Steps Indicator */}
      <div className="row" style={{ marginBottom: 24, flexWrap: "wrap", gap: 10 }}>
        <span className="tg g">1 Applicant</span>
        <span className="tg">2 Company</span>
        <span className="tg" style={{ background: "#EEF2F5", color: "#5C7380" }}>
          3 Directors
        </span>
        <span className="tg" style={{ background: "#EEF2F5", color: "#5C7380" }}>
          4 Review and pay
        </span>
      </div>

      {submitted ? (
        <div className="cd" style={{ textAlign: "center", padding: "48px 24px" }}>
          <span className="tg g" style={{ fontSize: 16, padding: "8px 20px", marginBottom: 16 }}>
            Application submitted
          </span>
          <h2 style={{ fontSize: 28, margin: "16px 0 8px" }}>Payment received</h2>
          <p className="mu" style={{ maxWidth: 440, margin: "0 auto 24px" }}>
            Reference BP-1043 has been filed. We have assigned this to our partner lawyer.
          </p>
          <Link className="bt" href="/dashboard/applications/BP-1043">
            Track application
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="gr g21">
            <div className="gr">
              {/* Applicant Details */}
              <div className="cd gr g2">
                <h3 style={{ gridColumn: "1/-1" }}>Your details</h3>
                <div>
                  <label htmlFor="f1">Full name</label>
                  <input className="in" id="f1" placeholder="As on your ID" required />
                </div>
                <div>
                  <label htmlFor="f2">Date of birth</label>
                  <input className="in" id="f2" placeholder="DD / MM / YYYY" />
                </div>
                <div>
                  <label htmlFor="f3">Gender</label>
                  <input className="in" id="f3" placeholder="Select" />
                </div>
                <div>
                  <label htmlFor="f4">Phone number</label>
                  <input className="in" id="f4" placeholder="0803 000 0000" required />
                </div>
                <div>
                  <label htmlFor="f5">Email</label>
                  <input className="in" id="f5" type="email" placeholder="you@example.com" required />
                </div>
                <div>
                  <label htmlFor="f6">Residential address</label>
                  <input className="in" id="f6" placeholder="Street, state, LGA" />
                </div>
                <div>
                  <label htmlFor="f7">
                    NIN
                    <span
                      className="q"
                      title="National Identification Number, your national ID number"
                    >
                      ?
                    </span>
                  </label>
                  <input className="in" id="f7" placeholder="11 digits" />
                </div>
                <div>
                  <label htmlFor="f8">Upload ID</label>
                  <input className="in" id="f8" type="file" style={{ padding: "12px 16px" }} />
                </div>
                <div>
                  <label htmlFor="f9">Passport photo</label>
                  <input className="in" id="f9" type="file" style={{ padding: "12px 16px" }} />
                </div>
                <div>
                  <label htmlFor="f10">Signature</label>
                  <input className="in" id="f10" placeholder="Upload or draw" />
                </div>
              </div>

              {/* Company Details */}
              <div className="cd gr g2">
                <h3 style={{ gridColumn: "1/-1" }}>Company details</h3>
                <div>
                  <label htmlFor="c1">Company name, first choice</label>
                  <input className="in" id="c1" placeholder="Name one" required />
                </div>
                <div>
                  <label htmlFor="c2">Company name, second choice</label>
                  <input className="in" id="c2" placeholder="Name two" />
                </div>
                <div>
                  <label htmlFor="c3">Nature of business</label>
                  <input className="in" id="c3" placeholder="What will it do?" />
                </div>
                <div>
                  <label htmlFor="c4">Registered office address</label>
                  <input className="in" id="c4" placeholder="Street, state, LGA" />
                </div>
                <div>
                  <label htmlFor="c5">Company email</label>
                  <input className="in" id="c5" type="email" placeholder="info@company.com" />
                </div>
                <div>
                  <label htmlFor="c6">
                    Beneficial owner
                    <span
                      className="q"
                      title="The person who ultimately owns or controls the company"
                    >
                      ?
                    </span>
                  </label>
                  <input className="in" id="c6" placeholder="Full name" />
                </div>
              </div>
            </div>

            {/* Sidebar Summary */}
            <aside className="cd" style={{ alignSelf: "start", position: "sticky", top: 24 }}>
              <h3>Summary</h3>
              <div className="row sp" style={{ margin: "20px 0" }}>
                <span>Company + FIRS TIN</span>
                <b>₦70,000</b>
              </div>
              <div className="chk">
                <input
                  type="checkbox"
                  id="cs"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                />
                <label htmlFor="cs" style={{ fontWeight: 400, margin: 0, fontSize: 14 }}>
                  I confirm these details are correct and consent to their use for this filing.
                </label>
              </div>
              <button
                className="bt f"
                type="submit"
                style={{ marginTop: 24 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Pay with Paystack"}
              </button>
              <p className="mu" style={{ marginTop: 12, fontSize: 14 }}>
                You can save and finish later.
              </p>
            </aside>
          </div>
        </form>
      )}
    </UserLayout>
  );
}
