import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* ===== HERO ===== */}
        <div className="hero">
          <div className="wrap center">
            <div className="badges">
              <div className="badge">
                <i>ID</i>
                <span>
                  <b>NIN and BVN</b>Identity checks
                </span>
              </div>
              <div className="badge">
                <i>CAC</i>
                <span>
                  <b>Company filings</b>Registration online
                </span>
              </div>
              <div className="badge">
                <i>Z</i>
                <span>
                  <b>D-U-N-S</b>Global identifier
                </span>
              </div>
            </div>
            <h1>
              Identity and business, <span className="grad">simplified</span>.
            </h1>
            <p>Verify, register and get documented in one place.</p>
            <div className="sub">
              NIN, CAC, tax and D-U-N-S, handled online.
            </div>
            <a className="btn btn-dark" href="#services">
              Get started{" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <div className="arcs" aria-hidden="true">
              <svg viewBox="0 0 900 300" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#1FA7D9" />
                    <stop offset=".5" stopColor="#9ADBC9" />
                    <stop offset="1" stopColor="#C4E64A" />
                  </linearGradient>
                </defs>
                <path d="M60 300 Q450 -80 840 300" stroke="url(#g)" />
                <path d="M150 300 Q300 40 450 300" stroke="url(#g)" />
                <path d="M450 300 Q600 40 750 300" stroke="url(#g)" />
                <path d="M0 300 Q450 110 900 300" stroke="url(#g)" />
                <path d="M230 300 Q450 130 670 300" stroke="url(#g)" />
              </svg>
              <div className="node" style={{ left: "10%", top: "48%" }}>
                NIN
              </div>
              <div className="node" style={{ left: "28%", top: "22%" }}>
                CAC
              </div>
              <div className="node" style={{ left: "50%", top: "10%" }}>
                TIN
              </div>
              <div className="node" style={{ left: "72%", top: "24%" }}>
                IP
              </div>
              <div className="node" style={{ left: "90%", top: "50%" }}>
                DUNS
              </div>
            </div>
          </div>
        </div>

        {/* ===== NIGHT SECTION ===== */}
        <section className="night center">
          <div className="wrap">
            <h2
              className="reveal"
              style={{ maxWidth: "14ch", margin: "0 auto" }}
            >
              Business paperwork, reimagined.
            </h2>
            <p className="lede reveal">
              One account for every registration and document you need.
            </p>
            <a className="btn btn-white reveal" href="#services">
              Learn more{" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <div className="stats reveal">
              <div className="stat">
                <b>5</b>
                <span>Service categories</span>
              </div>
              <div className="stat">
                <b>3</b>
                <span>Steps to apply</span>
              </div>
              <div className="stat">
                <b>24/7</b>
                <span>Online applications</span>
              </div>
              <div className="stat">
                <b>Live</b>
                <span>Status tracking</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section id="services" className="soft center">
          <div className="wrap">
            <h2 className="reveal">Every service, one platform</h2>
            <p className="lede reveal">
              Pick what you need. We handle the rest.
            </p>
            <div className="cards">
              <a className="tile t1 reveal" href="#">
                <div>
                  <h3>Identity</h3>
                  <p>NIN, BVN and ID cards.</p>
                </div>
                <span className="go">↗</span>
              </a>
              <a className="tile t2 reveal" href="#">
                <div>
                  <h3>Business</h3>
                  <p>CAC registration and documents.</p>
                </div>
                <span className="go">↗</span>
              </a>
              <a className="tile t3 reveal" href="#">
                <div>
                  <h3>Tax</h3>
                  <p>FIRS TIN, tax ID and SCUML.</p>
                </div>
                <span className="go">↗</span>
              </a>
              <a className="tile t4 reveal" href="#">
                <div>
                  <h3>Global</h3>
                  <p>D-U-N-S and registry services.</p>
                </div>
                <span className="go">↗</span>
              </a>
              <a className="tile t5 reveal" href="#">
                <div>
                  <h3>Licensing</h3>
                  <p>Trademark, copyright and export licences.</p>
                </div>
                <span className="go">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section id="how" className="center">
          <div className="wrap">
            <h2 className="reveal">Three steps. Done.</h2>
            <p className="lede reveal">No queues and no paperwork.</p>
            <div className="steps">
              <div className="step reveal">
                <h3>Choose</h3>
                <p>Select the service you need.</p>
              </div>
              <div className="step reveal">
                <h3>Submit</h3>
                <p>Fill the form, upload documents and pay.</p>
              </div>
              <div className="step reveal">
                <h3>Receive</h3>
                <p>Track progress and download your documents.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== EFFICIENCY ===== */}
        <section className="center" style={{ background: "var(--soft)" }}>
          <div className="wrap">
            <h2 className="reveal">Efficiency in every application</h2>
            <p className="lede reveal">
              Documents are checked before they are filed, so fewer requests
              come back.
            </p>
            <div className="panel reveal" aria-hidden="true">
              <div className="ico o">
                <svg viewBox="0 0 24 24" fill="#fff">
                  <path
                    d="M12 2l8 3v6c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V5l8-3z"
                    opacity=".95"
                  />
                </svg>
              </div>
              <div className="chk">
                <div>
                  <b>Document review</b>
                  <span>Checking your files…</span>
                </div>
                <div>
                  <b>Identity match</b>
                  <span>Confirming details…</span>
                </div>
              </div>
              <div className="ico g">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHY BRANDIDPOOL ===== */}
        <section id="why" className="cream center">
          <div className="wrap">
            <h2 className="reveal">Built to be trusted</h2>
            <p className="lede reveal">
              Clear pricing, secure documents and a record of every step.
            </p>
            <div className="trust">
              <div className="tcard reveal">
                <i>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2l8 3v6c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V5z" />
                  </svg>
                </i>
                <div>
                  <h3>Secure</h3>
                  <p>Completed documents stay in your account.</p>
                </div>
              </div>
              <div className="tcard reveal">
                <i>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </i>
                <div>
                  <h3>Trackable</h3>
                  <p>See where your request stands at every stage.</p>
                </div>
              </div>
              <div className="tcard reveal">
                <i>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="6" width="18" height="12" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                </i>
                <div>
                  <h3>Transparent</h3>
                  <p>Fees are shown before you pay.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section id="faq" className="center">
          <div className="wrap">
            <h2 className="reveal">Questions, answered</h2>
            <div className="faq">
              <details>
                <summary>What does brandidpool offer?</summary>
                <p>
                  Identity verification, business registration, tax
                  identification, global business identifiers and licensing.
                </p>
              </details>
              <details>
                <summary>Can I register a business?</summary>
                <p>
                  Yes. Choose Business, submit your details and follow the CAC
                  registration online.
                </p>
              </details>
              <details>
                <summary>Do you offer NIN and BVN verification?</summary>
                <p>Yes. Both are available under Identity.</p>
              </details>
              <details>
                <summary>How much do services cost?</summary>
                <p>Each service shows its fee before you pay.</p>
              </details>
              <details>
                <summary>How do I track my application?</summary>
                <p>
                  Sign in, or use Track an application from the footer.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="cta center" id="contact">
              <h2 style={{ maxWidth: "14ch", margin: "0 auto" }}>
                Ready to get started?
              </h2>
              <p>Find the right service for you or your business.</p>
              <a className="btn btn-white" href="#services">
                Explore services{" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Chat button */}
      <button className="chat" aria-label="Chat with us">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        >
          <path d="M9 8a4 4 0 100 8M15 8a4 4 0 110 8M8 12h8" />
        </svg>
      </button>

      <RevealObserver />
    </>
  );
}
