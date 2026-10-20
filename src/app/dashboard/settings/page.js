"use client";

import { useState } from "react";
import UserLayout from "@/components/UserLayout";

export default function ProfilePage() {
  const [fullName, setFullName] = useState("Adaeze Okonkwo");
  const [dob, setDob] = useState("14 / 08 / 1992");
  const [gender, setGender] = useState("Female");
  const [phone, setPhone] = useState("0803 123 4567");
  const [email, setEmail] = useState("adaeze@example.com");
  const [stateLga, setStateLga] = useState("Lagos, Ikeja");
  const [nin, setNin] = useState("12345678901");
  const [address, setAddress] = useState("12 Allen Avenue, Ikeja, Lagos");
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <UserLayout title="Profile">
      <form onSubmit={handleSave}>
        <div className="cd gr g2" style={{ maxWidth: 960 }}>
          <div style={{ gridColumn: "1/-1" }}>
            <h3>Applicant details</h3>
            <p className="mu">Saved here so every form fills itself.</p>
            {saved && (
              <div
                style={{
                  marginTop: 12,
                  padding: "10px 16px",
                  borderRadius: 12,
                  background: "#DDF7E6",
                  color: "#0B6B2B",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Changes saved successfully!
              </div>
            )}
          </div>

          <div>
            <label htmlFor="p1">Full name</label>
            <input
              className="in"
              id="p1"
              placeholder="As on your ID"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="p2">Date of birth</label>
            <input
              className="in"
              id="p2"
              placeholder="DD / MM / YYYY"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="p3">Gender</label>
            <input
              className="in"
              id="p3"
              placeholder="Select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="p4">Phone number</label>
            <input
              className="in"
              id="p4"
              placeholder="0803 000 0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="p5">Email</label>
            <input
              className="in"
              id="p5"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="p6">State and LGA</label>
            <input
              className="in"
              id="p6"
              placeholder="Select"
              value={stateLga}
              onChange={(e) => setStateLga(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="p7">
              NIN
              <span
                className="q"
                title="National Identification Number, your national ID number"
              >
                ?
              </span>
            </label>
            <input
              className="in"
              id="p7"
              placeholder="11 digits"
              value={nin}
              onChange={(e) => setNin(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="p8">Residential address</label>
            <input
              className="in"
              id="p8"
              placeholder="Street address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="p9">ID upload</label>
            <input className="in" id="p9" type="file" style={{ padding: "12px 16px" }} />
          </div>

          <div>
            <label htmlFor="p10">Passport photo</label>
            <input className="in" id="p10" type="file" style={{ padding: "12px 16px" }} />
          </div>

          <div>
            <label htmlFor="p11">Signature</label>
            <input className="in" id="p11" placeholder="Upload or draw" />
          </div>

          <div style={{ gridColumn: "1/-1" }}>
            <button className="bt" type="submit">
              Save changes
            </button>
          </div>
        </div>
      </form>
    </UserLayout>
  );
}
