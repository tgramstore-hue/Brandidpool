"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

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
            Welcome back.
          </h1>
          <p style={{ color: "#B8CBD3", marginTop: 16, fontSize: 19 }}>
            Pick up where you stopped.
          </p>
        </div>
        <p style={{ color: "#9DB8C4" }}>Identity and business services in one place.</p>
      </div>

      <div className="ar">
        <form className="fm" onSubmit={handleSubmit}>
          <div>
            <h2>Sign in</h2>
            <p className="mu">Use your phone number or email.</p>
          </div>
          <div>
            <label htmlFor="li1">Phone number or email</label>
            <input
              className="in"
              id="li1"
              placeholder="0803 000 0000"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="li2">Password</label>
            <input
              className="in"
              id="li2"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Link href="#" style={{ color: "#0B5F82", fontWeight: 600 }}>
            Forgot password?
          </Link>
          <button className="bt f" type="submit">
            Sign in
          </button>
          <p className="mu">
            New here?{" "}
            <Link href="/signup" style={{ color: "#0B5F82", fontWeight: 600 }}>
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
