"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="au">
      <div className="al">
        <Link className="lg" href="/">
          brandid<b>pool</b>
        </Link>
        <div>
          <h1 style={{ fontSize: 52, lineHeight: 1.1, maxWidth: "12ch" }}>
            Start in a minute.
          </h1>
          <p style={{ color: "#B8CBD3", marginTop: 16, fontSize: 19 }}>
            Fill one form. We handle the rest.
          </p>
        </div>
        <p style={{ color: "#9DB8C4" }}>No paperwork. No queues.</p>
      </div>

      <div className="ar">
        <form className="fm" onSubmit={handleSubmit}>
          <div>
            <h2>Create your account</h2>
            <p className="mu">It is free to join.</p>
          </div>
          <div>
            <label htmlFor="su1">Full name</label>
            <input
              className="in"
              id="su1"
              placeholder="As on your ID"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="su2">Phone number</label>
            <input
              className="in"
              id="su2"
              placeholder="0803 000 0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="su3">Email (optional)</label>
            <input
              className="in"
              id="su3"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="su4">Password</label>
            <input
              className="in"
              id="su4"
              type="password"
              placeholder="At least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="chk">
            <input
              type="checkbox"
              id="su5"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              required
            />
            <label htmlFor="su5" style={{ fontWeight: 400, margin: 0 }}>
              I agree to the Terms of Service and Privacy Policy.
            </label>
          </div>
          <button className="bt f" type="submit">
            Create account
          </button>
          <p className="mu">
            Already have an account?{" "}
            <Link href="/login" style={{ color: "#0B5F82", fontWeight: 600 }}>
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
