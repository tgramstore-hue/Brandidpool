"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authCode, setAuthCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/admin/dashboard");
  };

  return (
    <div className="au">
      <div className="al" style={{ background: "#0B2A36" }}>
        <Link className="lg" href="/">
          brandid<b>pool</b>
        </Link>
        <div>
          <span className="tg o">Staff only</span>
          <h1
            style={{
              fontSize: 52,
              lineHeight: 1.1,
              maxWidth: "12ch",
              marginTop: 20,
            }}
          >
            Admin console.
          </h1>
          <p style={{ color: "#B8CBD3", marginTop: 16, fontSize: 19 }}>
            Review, assign and deliver.
          </p>
        </div>
        <p style={{ color: "#9DB8C4" }}>Access is logged.</p>
      </div>

      <div className="ar">
        <form className="fm" onSubmit={handleSubmit}>
          <div>
            <h2>Staff sign in</h2>
            <p className="mu">Use your work email.</p>
          </div>
          <div>
            <label htmlFor="a1">Work email</label>
            <input
              className="in"
              id="a1"
              type="email"
              placeholder="name@brandidpool.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="a2">Password</label>
            <input
              className="in"
              id="a2"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="a3">Authenticator code</label>
            <input
              className="in"
              id="a3"
              placeholder="6 digits"
              value={authCode}
              onChange={(e) => setAuthCode(e.target.value)}
              required
            />
          </div>
          <button className="bt f" type="submit">
            Sign in
          </button>
          <Link href="#" style={{ color: "#0B5F82", fontWeight: 600 }}>
            Reset access
          </Link>
        </form>
      </div>
    </div>
  );
}
